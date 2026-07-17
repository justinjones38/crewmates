import { useState } from "react";
import styles from "./Create.module.css";
import amongUsImg from "../assets/among-us-lot.png";
import { supabase } from "../services/client";
import { useNavigate, useOutletContext } from "react-router";
import Button from "../components/Button";

export default function Create() {
  const [inputs, setInputs] = useState({
    name: "",
    speed: "",
    color: "",
  });
  const navigate = useNavigate();
  const {fetchData} = useOutletContext()

  const handleChange = (e) =>
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!inputs.name || !inputs.speed || !inputs.color) {
      alert("Please complete all form elements before submittting");
      return;
    }

    await supabase
      .from("crewmates")
      .insert({name: inputs.name, speed: Number(inputs.speed), color: inputs.color})
    
    await fetchData()

    alert("Thanks for submitting your form!")
    navigate("/gallery");
    setInputs({
    name: "",
    speed: "",
    color: "",
  })
  return;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create a New Crewmate</h1>
      <img
        src={amongUsImg}
        alt="A list of among us characters looking"
        className={styles.img}
      />
      <form className={styles.form} onSubmit={handleSubmit}>
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
        <p className={styles.textLabel}>Color</p>
        <div className={styles.radioContainer}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="red"
              name="color"
              id="color"
              onChange={handleChange}
              className={styles.radioBtn}
              checked={inputs.color === "red"}
            />
            Red
          </label>

          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="blue"
              name="color"
              id="color"
              onChange={handleChange}
              className={styles.radioBtn}
              checked={inputs.color === "blue"}
            />
            Blue
          </label>

          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="green"
              name="color"
              id="color"
              onChange={handleChange}
              className={styles.radioBtn}
              checked={inputs.color === "green"}
            />
            Green
          </label>

          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="yellow"
              name="color"
              id="color"
              onChange={handleChange}
              className={styles.radioBtn}
              checked={inputs.color === "yellow"}
            />
            Yellow
          </label>

          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="orange"
              name="color"
              id="color"
              onChange={handleChange}
              className={styles.radioBtn}
              checked={inputs.color === "orange"}
            />
            Orange
          </label>

          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="pink"
              name="color"
              id="color"
              onChange={handleChange}
              className={styles.radioBtn}
              checked={inputs.color === "pink"}
            />
            Pink
          </label>
        </div>
        <Button>Submit</Button>
      </form>
    </div>
  );
}
