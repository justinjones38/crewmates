import styles from "./LightBtns.module.css";
import RadioBtn from "../RadioBtn";

export default function LightBtns({ handleChange, inputs }) {
  return (
    <div className={styles.container}>
      <RadioBtn
        name="color"
        value="red"
        inputs={inputs}
        handleChange={handleChange}
      >
        Red
      </RadioBtn>
      <RadioBtn
        name="color"
        value="pink"
        inputs={inputs}
        handleChange={handleChange}
      >
        Pink
      </RadioBtn>
      <RadioBtn
        name="color"
        value="purple"
        inputs={inputs}
        handleChange={handleChange}
      >
        Purple
      </RadioBtn>
      <RadioBtn
        name="color"
        value="green"
        inputs={inputs}
        handleChange={handleChange}
      >
        Green
      </RadioBtn>
      <RadioBtn
        name="color"
        value="white"
        inputs={inputs}
        handleChange={handleChange}
      >
        White
      </RadioBtn>
      <RadioBtn
        name="color"
        value="orange"
        inputs={inputs}
        handleChange={handleChange}
      >
        Orange
      </RadioBtn>
    </div>
  );
}
