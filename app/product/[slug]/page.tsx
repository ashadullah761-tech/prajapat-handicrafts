import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";
import { brandConfig } from "@/config/brand";
import { ProductDetailClient } from "./ProductDetailClient";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: `Product Not Found | ${brandConfig.name}`,
      description: "The requested handcrafted product could not be found.",
    };
  }

  const primaryImage = product.images[0]?.url || "/hero-banner.jpg";
  const absoluteImageUrl = primaryImage.startsWith("http")
    ? primaryImage
    : `https://gehlotexport.com${primaryImage}`;

  const title = `${product.name} | ${brandConfig.name}`;
  const description =
    product.shortDescription ||
    `${product.name} - Handcrafted solid wood furniture & decor by ${brandConfig.name}, Pali, Rajasthan.`;

  return {
    title,
    description,
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: `https://gehlotexport.com/product/${product.slug}`,
      siteName: brandConfig.name,
      title: `${product.name} — ${brandConfig.name}`,
      description,
      images: [
        {
          url: absoluteImageUrl,
          width: 800,
          height: 1000,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} — ${brandConfig.name}`,
      description,
      images: [absoluteImageUrl],
    },
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return notFound();
  }

  return <ProductDetailClient product={product} />;
}
