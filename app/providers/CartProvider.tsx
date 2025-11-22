"use client";

import { createContext, useContext, useState } from "react";
import { CartContextType } from "../models/cartContextType.model";
import { CartItem } from "../models/cartItem.model";
import { Product } from "../models/product.model";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }

    return context;
}

export default function CartProvider({ children }: {
    children: React.ReactNode
}) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCartItem = (product: Product) => {
        setCartItems((prev) => {
            const foundProduct = cartItems.find(p => p.id === product.id);
            if (foundProduct) {
                return prev.map(p => p.id === foundProduct.id ? { ...p, count: p.count + 1 } : p);
            }
            return [...prev, { ...product, count: 1 }];
        });
    }

    const deleteCartItem = (product: Product) => {
        setCartItems((prev) => {
            const foundProduct = cartItems.find(p => p.id === product.id);
            if (foundProduct) {
                if (foundProduct.count > 1) {
                    return prev.map(p => p.id === foundProduct.id ? { ...p, count: p.count - 1 } : p);
                }
                return prev.filter(p => p.id !== product.id);
            }
            return prev;
        });
    }

    return (
        <CartContext.Provider value={{ isOpen, cartItems, setIsOpen, addToCartItem, deleteCartItem }}>
            {children}
        </CartContext.Provider>
    )
}
