import styles from "./DarkBtns.module.css";
import RadioBtn from "../RadioBtn";

export default function DarkBtns({ inputs, handleChange }) {
  return (
    <div className={styles.container}>
      <RadioBtn
        name="color"
        value="black"
        inputs={inputs}
        handleChange={handleChange}
      >
        Black
      </RadioBtn>
      <RadioBtn
        name="color"
        value="blue"
        inputs={inputs}
        handleChange={handleChange}
      >
        Blue
      </RadioBtn>
      <RadioBtn
        name="color"
        value="charcoal"
        inputs={inputs}
        handleChange={handleChange}
      >
        Charcoal
      </RadioBtn>
      <RadioBtn
        name="color"
        value="brown"
        inputs={inputs}
        handleChange={handleChange}
      >
        Brown
      </RadioBtn>
      <RadioBtn
        name="color"
        value="navy"
        inputs={inputs}
        handleChange={handleChange}
      >
        Navy
      </RadioBtn>
      <RadioBtn
        name="color"
        value="indigo"
        inputs={inputs}
        handleChange={handleChange}
      >
        Indigo
      </RadioBtn>
    </div>
  );
}
