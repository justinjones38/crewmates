import styles from "./RadioBtn.module.css";

export default function RadioBtn({
  children,
  name,
  value,
  inputs,
  handleChange,
}) {
  return (
    <label className={styles.radioLabel}>
      <input
        type="radio"
        value={value}
        name={name}
        id={name}
        onChange={handleChange}
        className={styles.radioBtn}
        checked={inputs[name] === value}
      />
      {children}
    </label>
  );
}
