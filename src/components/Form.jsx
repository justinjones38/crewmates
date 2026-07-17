import styles from "./Form.module.css";
import Button from "./Button";
import RadioBtn from "./RadioBtn";
import { useState } from "react";

export default function Form({
  nameInput,
  speedInput,
  forceInput,
  colorInput,
  handleSubmit,
}) {
  const [inputs, setInputs] = useState({
    name: nameInput,
    speed: speedInput,
    force: forceInput,
    color: colorInput,
  });

  const handleChange = (e) =>
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e, inputs)}>
      <label htmlFor="name" className={styles.textLabel}>
        Name
      </label>
      <input
        type="text"
        value={inputs.name}
        name="name"
        id="name"
        placeholder="Enter name"
        onChange={handleChange}
        className={styles.textInput}
      />
      <label htmlFor="speed" className={styles.textLabel}>
        Speed (mph)
      </label>
      <input
        type="number"
        value={inputs.speed}
        name="speed"
        id="speed"
        placeholder="Enter Speed"
        onChange={handleChange}
        className={styles.textInput}
      />
      <fieldset id="force">
        <legend className={styles.textLabel}>Force</legend>
        <div className={styles.radioContainer}>
          <RadioBtn
            name="force"
            value="light"
            inputs={inputs}
            handleChange={handleChange}
          >
            Light
          </RadioBtn>
          <RadioBtn
            name="force"
            value="dark"
            inputs={inputs}
            handleChange={handleChange}
          >
            Dark
          </RadioBtn>
        </div>
      </fieldset>

      <fieldset id="color">
        <legend className={styles.textLabel}>Color</legend>
        <div className={styles.radioContainer}>
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
            value="blue"
            inputs={inputs}
            handleChange={handleChange}
          >
            Blue
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
            value="yellow"
            inputs={inputs}
            handleChange={handleChange}
          >
            Yellow
          </RadioBtn>
          <RadioBtn
            name="color"
            value="orange"
            inputs={inputs}
            handleChange={handleChange}
          >
            Orange
          </RadioBtn>
          <RadioBtn
            name="color"
            value="pink"
            inputs={inputs}
            handleChange={handleChange}
          >
            Pink
          </RadioBtn>
        </div>
      </fieldset>

      <Button>Submit</Button>
    </form>
  );
}
