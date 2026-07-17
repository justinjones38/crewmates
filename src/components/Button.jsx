import styles from "./Button.module.css"

export default function Button({children, size, ...restProps}) {
  console.log(size);
  return (
    <button className={`${styles.btn} ${size ? styles[size] : ""}`} {...restProps}>{children}</button>
  )

}