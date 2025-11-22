"use client";

import { Product } from "../models/product.model";
import { useCart } from "../providers/CartProvider";

export default function AddToCartButton({ product }: { product: Product }) {
    const { addToCartItem } = useCart();

    return (
        <button className="btn btn-primary" onClick={() => addToCartItem(product)}>В корзину</button>
    );
}
