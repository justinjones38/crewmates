import styles from "./Edit.module.css";
import { useParams, useOutletContext, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Form from "../components/Form";
import { supabase } from "../services/client";

export default function Edit() {
  const {id} = useParams();
  const {crewmates, fetchData} = useOutletContext();
  const navigate = useNavigate();

  if(!crewmates) {
    return <h2>Loading ...</h2>
  }

  const data = crewmates.find(item => item.id === Number(id));

  const handleSubmit = async(e, inputs) => {
    e.preventDefault();
    if(!inputs.name || !inputs.speed || !inputs.color) {
      alert("Please complete all form elements before submittting");
      return;
    }
    await supabase
      .from("crewmates")
      .update({name: inputs.name, speed: inputs.speed, color: inputs.color})
      .eq("id", id)

    await fetchData();

    alert("Thanks for submitting your form!");
    navigate("/gallery")
    
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Update your Crewmate</h1>
       <Form nameInput={data.name} speedInput={data.speed} colorInput={data.color} handleSubmit={handleSubmit} />
    </div>
  );
}
