import styles from "./MealItem.module.css";

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    return (
        <li>
            <div>
                <h3>{props.name}</h3>
                <div>{props.description}</div>
            </div>
            <div>{price}</div>
        </li>
    );
};
