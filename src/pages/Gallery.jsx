import { useEffect, useState } from "react";
import styles from "./Gallery.module.css";
import { supabase } from "../services/client";
import Button from "../components/Button";

export default function Gallery() {
  const [crewmates, setCrewmates] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("crewmates").select();

      if (error) {
        setError(true);
        return;
      }
      setCrewmates(data);
    };
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Crewmate Gallery!</h1>
      {error ? <h2>Cannot fetch data</h2> : null}
      {!error && crewmates ? (
        <div className={styles.cardContainer}>
          {crewmates.map((item) => (
            <div
              className={styles.card}
              style={{ border: `1px solid ${item["color"]}` }}
              key={item.id}
            >
              <div className={styles.itemDescriptionContainer}>
                <p className={styles.description}>
                  Name of crewmate <span>{item.name}</span>
                </p>
                <p className={styles.description}>
                  Speed of crewmate <span>{item.speed} mph</span>
                </p>
                <p className={styles.description}>
                  Color of crewmate <span>{item.color}</span>
                </p>
              </div>
              <div className={styles.btnContainer}>
              <Button size="sm">Edit Crewmates</Button>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
