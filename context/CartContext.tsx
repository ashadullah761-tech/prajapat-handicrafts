"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "@/data/products";
import { brandConfig } from "@/config/brand";
import { useToast } from "@/context/ToastContext";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariant?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedVariant?: string) => void;
  removeFromCart: (productId: string, selectedVariant?: string) => void;
  updateQuantity: (productId: string, quantity: number, selectedVariant?: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  toggleCart: () => void;
  couponCode: string;
  discountPercent: number;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  itemCount: number;
  subtotal: number;
  originalSubtotal: number;
  discountAmount: number;
  shippingFee: number;
  total: number;
  generateWhatsAppOrderUrl: (customerDetails?: {
    name?: string;
    phone?: string;
    address?: string;
    city?: string;
    pincode?: string;
    note?: string;
  }) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const COUPON_CODES: Record<string, number> = {
  HANDMADE10: 10,
  UTSAV15: 15,
  FIRSTORDER: 10,
  JAIPUR20: 20,
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [couponCode, setCouponCode] = useState<string>("");
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [isHydrated, setIsHydrated] = useState(false);
  const { showToast } = useToast();

  // Load from localStorage
  useEffect(() => {
    try {
      const savedItems = localStorage.getItem("kalakriti_cart");
      if (savedItems) {
        setItems(JSON.parse(savedItems));
      }
      const savedCoupon = localStorage.getItem("kalakriti_coupon");
      if (savedCoupon && COUPON_CODES[savedCoupon.toUpperCase()]) {
        setCouponCode(savedCoupon.toUpperCase());
        setDiscountPercent(COUPON_CODES[savedCoupon.toUpperCase()]);
      }
    } catch {
      // ignore
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem("kalakriti_cart", JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items, isHydrated]);

  const addToCart = (product: Product, quantity: number = 1, selectedVariant?: string) => {
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.product.id === product.id && item.selectedVariant === selectedVariant
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevItems, { product, quantity, selectedVariant }];
      }
    });

    showToast(`Added "${product.name.slice(0, 32)}..." to your basket!`, "success");
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, selectedVariant?: string) => {
    setItems((prevItems) => {
      const filtered = prevItems.filter(
        (item) => !(item.product.id === productId && item.selectedVariant === selectedVariant)
      );
      return filtered;
    });
    showToast("Item removed from your basket", "info");
  };

  const updateQuantity = (productId: string, quantity: number, selectedVariant?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedVariant);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.product.id === productId && item.selectedVariant === selectedVariant) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setItems([]);
    removeCoupon();
    try {
      localStorage.removeItem("kalakriti_cart");
    } catch {
      // ignore
    }
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const applyCoupon = (code: string): boolean => {
    const cleanCode = code.trim().toUpperCase();
    if (COUPON_CODES[cleanCode]) {
      setCouponCode(cleanCode);
      setDiscountPercent(COUPON_CODES[cleanCode]);
      try {
        localStorage.setItem("kalakriti_coupon", cleanCode);
      } catch {
        // ignore
      }
      showToast(`Coupon "${cleanCode}" applied! ${COUPON_CODES[cleanCode]}% OFF`, "success");
      return true;
    } else {
      showToast("Invalid coupon code. Try 'HANDMADE10' or 'UTSAV15'", "error");
      return false;
    }
  };

  const removeCoupon = () => {
    setCouponCode("");
    setDiscountPercent(0);
    try {
      localStorage.removeItem("kalakriti_coupon");
    } catch {
      // ignore
    }
  };

  // Calculations
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const originalSubtotal = items.reduce(
    (acc, item) => acc + item.product.originalPrice * item.quantity,
    0
  );
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const shippingFee =
    subtotal === 0 || subtotal >= brandConfig.shipping.freeShippingThreshold
      ? 0
      : brandConfig.shipping.standardShippingFee;
  const total = subtotal - discountAmount + shippingFee;

  // WhatsApp Order Generator
  const generateWhatsAppOrderUrl = (customerDetails?: {
    name?: string;
    phone?: string;
    address?: string;
    city?: string;
    pincode?: string;
    note?: string;
  }) => {
    let message = `*Namaste ${brandConfig.name}!*\n`;
    message += `I would like to place an order for the following handcrafted items:\n\n`;

    items.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`;
      if (item.selectedVariant) {
        message += `   • Variant: ${item.selectedVariant}\n`;
      }
      message += `   • Qty: ${item.quantity} × ₹${item.product.price.toLocaleString("en-IN")}\n`;
      message += `   • Item Total: ₹${(item.quantity * item.product.price).toLocaleString("en-IN")}\n`;
    });

    message += `\n*Order Summary:*\n`;
    message += `• Subtotal: ₹${subtotal.toLocaleString("en-IN")}\n`;
    if (discountPercent > 0) {
      message += `• Coupon (${couponCode}): -₹${discountAmount.toLocaleString("en-IN")} (${discountPercent}% OFF)\n`;
    }
    message += `• Shipping: ${shippingFee === 0 ? "FREE" : `₹${shippingFee}`}\n`;
    message += `• *Grand Total: ₹${total.toLocaleString("en-IN")}*\n\n`;

    if (customerDetails?.name) {
      message += `*Customer Delivery Details:*\n`;
      message += `• Name: ${customerDetails.name}\n`;
      if (customerDetails.phone) message += `• Phone: ${customerDetails.phone}\n`;
      if (customerDetails.address) message += `• Address: ${customerDetails.address}\n`;
      if (customerDetails.city) message += `• City: ${customerDetails.city}\n`;
      if (customerDetails.pincode) message += `• Pincode: ${customerDetails.pincode}\n`;
      if (customerDetails.note) message += `• Note / Gift Message: ${customerDetails.note}\n`;
      message += `\n`;
    }

    message += `Please confirm availability and share payment/dispatch details. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${brandConfig.whatsappNumber}?text=${encodedMessage}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        toggleCart,
        couponCode,
        discountPercent,
        applyCoupon,
        removeCoupon,
        itemCount,
        subtotal,
        originalSubtotal,
        discountAmount,
        shippingFee,
        total,
        generateWhatsAppOrderUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
