import { CartItem } from "./cartItem.model";
import { Product } from "./product.model";

export interface CartContextType {
    isOpen: boolean,
    cartItems: CartItem[],
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    addToCartItem: (product: Product) => void,
    deleteCartItem: (product: Product) => void,
}
