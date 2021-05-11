import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
    const [buttonHighlighted, setButtonHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    //pull items property from cartCtx
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((currNumber, item) => {
        return currNumber + item.amount;
    }, 0);

    const btnStyles = `${styles.button} ${
        buttonHighlighted ? styles.bump : ""
    }`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setButtonHighlighted(true);

        const timer = setTimeout(() => {
            setButtonHighlighted(false);
        }, 300)

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnStyles} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
