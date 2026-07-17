import styles from "./RadioBtn.module.css";

export default function RadioBtn({children, color, inputs, handleChange}) {
  return (
    <label className={styles.radioLabel}>
      <input
        type="radio"
        value={color}
        name="color"
        id="color"
        onChange={handleChange}
        className={styles.radioBtn}
        checked={inputs.color === color}
      />
      {children}
    </label>
  );
}
