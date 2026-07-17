import styles from "./Button.module.css";

export default function Button({ children, color, ...restProps }) {
  console.log(color);
  return (
    <button
      className={`${styles.btn} ${color ? styles[color] : ""}`}
      {...restProps}
    >
      {children}
    </button>
  );
}
