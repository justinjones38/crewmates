import { useEffect, useState } from "react";
import { useOutletContext, Link } from "react-router";
import styles from "./Gallery.module.css";
import Button from "../components/Button";
import SummaryCard from "../components/SummaryCard";
import img from "../assets/among-us-char.png";

export default function Gallery() {
  const { crewmates, error } = useOutletContext();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Crewmate Gallery!</h1>
      {error ? <h2>Cannot fetch data</h2> : null}
      {!error && crewmates?.length === 0 ? (
        <p className={styles.emptyDes}>
          No crewmates have been submited yet. Please add one!
        </p>
      ) : null}
      {!error && crewmates ? (
        <div className={styles.contentWrapper}>
          <SummaryCard crewmates={crewmates} />
          <div className={styles.cardContainer}>
            {crewmates.map((item) => (
              <div
                className={styles.card}
                style={{ border: `1px solid ${item["color"]}` }}
                key={item.id}
              >
                <Link className={styles.cardLink} to={`${item.id}`}>
                  <img
                    src={img}
                    alt="A blue among us character"
                    className={styles.img}
                  />
                  <div className={styles.itemDescriptionContainer}>
                    <p className={styles.description}>
                      Name of crewmate: <span>{item.name}</span>
                    </p>
                    <p className={styles.description}>
                      Speed of crewmate: <span>{item.speed}mph</span>
                    </p>
                    <p className={styles.description}>
                      Force of crewmate: <span>{item.force} force</span>
                    </p>
                    <p className={styles.description}>
                      Color of crewmate: <span>{item.color}</span>
                    </p>
                  </div>
                </Link>
                <div className={styles.btnContainer}>
                  <Link to={`edit/${item.id}`} className={styles.linkBtn}>
                    Edit Crewmates
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
