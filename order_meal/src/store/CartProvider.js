import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            const updatedTotalAmount =
                state.totalAmount + action.item.price * action.item.amount;
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.item.id
            );
            const exisitingCartItem = state.items[existingCartItemIndex];

            let updatedItems;
            if (exisitingCartItem) {
                const updatedItem = {
                    ...exisitingCartItem,
                    amount: exisitingCartItem.amount + action.item.amount,
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(action.item);
            }
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            };
        case "REMOVE":
            const existingCartItemId = state.items.findIndex(
                (item) => item.id === action.id
            );
            const existingItem = state.items[existingCartItemId]
            const updatedTotalAm = state.totalAmount - existingItem.price;
            let updatedIts;
            if (existingItem.amount === 1) {
                updatedIts = state.items.filter(item => item.id !== action.id);
            } else {
                const updatedItem = {...existingItem, amount: existingItem.amount - 1}
                updatedIts = [...state.items];
                updatedIts[existingCartItemId] = updatedItem;
            }
            return {
                items: updatedIts,
                totalAmount: updatedTotalAm
            }

        default:
            return defaultCartState;
    }
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemToCartHander = (item) => {
        dispatchCartAction({ type: "ADD", item: item });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: "REMOVE", id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHander,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
