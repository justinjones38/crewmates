import styles from "./SummaryCard.module.css"

export default function SummaryCard({crewmates}) {
  const sum = crewmates.reduce((acc, currentVal) => acc + currentVal.speed, 0);
  const length = crewmates.length;
  const avgVal = sum/length;
  const lightForcelen = crewmates.filter(item => item.force === "light").length;
  const lightForcePercentage = Math.round((lightForcelen / length) * 100)
  const darkForcePercentage = 100 - lightForcePercentage;
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Gallery Summary</h2>
      <div className={styles.stats}>
        <p className={styles.item}>Crewmates <span>{length}</span></p>
        <p className={styles.item}>Average Score <span>{avgVal}mph</span></p>
        <p className={styles.item}>Light Force Success Rate <span>{lightForcePercentage}%</span></p>
        <p className={styles.item}>Dark Force Success Rate <span>{darkForcePercentage}%</span></p>
      </div>
    </div>
  )
}

