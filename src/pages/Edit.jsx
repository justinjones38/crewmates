import styles from "./Edit.module.css";
import { useParams, useOutletContext } from "react-router";
import { useEffect, useState } from "react";

export default function Edit() {
  const {id} = useParams();


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Update your Crewmate</h1>
    </div>
  );
}
