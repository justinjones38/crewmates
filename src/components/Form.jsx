import styles from "./Form.module.css";
import Button from "./Button";
import RadioBtn from "./RadioBtn";
import DarkBtns from "./RadioBtnColors/DarkBtns";
import LightBtns from "./RadioBtnColors/LightBtns";
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


  const handleRadioInput = () => {
    if(inputs.force=== "light") {
      return (
        <LightBtns inputs={inputs} handleChange={handleChange} />
      )
    } else if (inputs.force === "dark") {
      return (<DarkBtns inputs={inputs} handleChange={handleChange} />)
    } 
      return;
  }
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
        {handleRadioInput()}
      </fieldset>

      <Button>Submit</Button>
    </form>
  );
}
