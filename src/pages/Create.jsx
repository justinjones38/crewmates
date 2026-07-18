import { useState } from "react";
import styles from "./Create.module.css";
import amongUsImg from "../assets/among-us-lot.png";
import { supabase } from "../services/client";
import { useNavigate, useOutletContext } from "react-router";
import Button from "../components/Button";
import Form from "../components/Form";

export default function Create() {
  const navigate = useNavigate();
  const { fetchData } = useOutletContext();

  const handleSubmit = async (e, inputs) => {
    e.preventDefault();
    if (!inputs.name || !inputs.speed || !inputs.color || !inputs.force) {
      alert("Please complete all form elements before submittting");
      return;
    }

    await supabase.from("crewmates").insert({
      name: inputs.name,
      speed: Number(inputs.speed),
      color: inputs.color,
      force: inputs.force,
    });

    await fetchData();

    alert("Thanks for submitting your form!");
    navigate("/gallery");
    return;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create a New Crewmate</h1>
      <img
        src={amongUsImg}
        alt="A list of among us characters looking"
        className={styles.img}
      />
      <Form
        nameInput=""
        speedInput=""
        forceInput=""
        colorInput=""
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
