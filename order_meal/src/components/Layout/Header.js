import React from "react";
import styles from "./Header.module.css";
import image from '../../assets/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>Meals App</h1>
                <HeaderCartButton />
            </header>
            <div className={styles['main-image']}>
                <img src={image} alt="table full of food"/>
            </div>
        </React.Fragment>
    );
};

export default Header;
