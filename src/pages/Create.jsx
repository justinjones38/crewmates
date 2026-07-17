import { useState } from "react";
import styles from "./Create.module.css";
import amongUsImg from "../assets/among-us-lot.png";
import { supabase } from "../services/client";
import { useNavigate, useOutletContext } from "react-router";
import Button from "../components/Button";
import Form from "../components/Form";

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
      <Form inputs={inputs} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}
