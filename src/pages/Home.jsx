import styles from "./Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Crewmate Creator</h1>
      <p className={styles.description}>
        Here is where you can create your very own set of crewmates before sending them off into space!
      </p>
    </div>
  )
}