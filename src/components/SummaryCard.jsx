import styles from "./SummaryCard.module.css";

export default function SummaryCard({ crewmates }) {
  const sum = crewmates.reduce((acc, currentVal) => acc + currentVal.speed, 0);
  const length = crewmates.length;
  const avgVal = (sum / length).toFixed(2);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Gallery Summary</h2>
      <div className={styles.stats}>
        <p className={styles.item}>
          Crewmates <span>{length}</span>
        </p>
        <p className={styles.item}>
          Average Score <span>{avgVal}mph</span>
        </p>
      </div>
    </div>
  );
}
