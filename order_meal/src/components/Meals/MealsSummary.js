import styles from "./MealsSummary.module.css";
const MealsSummary = () => {
    return (
        <section className={styles.summary}>
            <h2>Delicious food</h2>
            <p>Choose your meal and enjoy it at home.</p>
            <p>
                All the meals are made by well qualified chef who uses the
                highest quality ingrdients
            </p>
        </section>
    );
};

export default MealsSummary;
