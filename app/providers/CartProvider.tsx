"use client";

import { createContext, useContext, useState } from "react";
import { CartContextType } from "../models/cartContextType.model";

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
    const [isOpen, setIsOpen] = useState(false);
    return (
        <CartContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </CartContext.Provider>
    )
}
