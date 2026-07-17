import { useParams, useOutletContext, Link } from "react-router"
import styles from "./GalleryInfo.module.css"


export default function GalleryInfo() {
  const {id} = useParams();
  const {crewmates} = useOutletContext();
  let alert;

  console.log(crewmates);

  if(!crewmates) {
    return <h2>Loading...</h2>
  }

  const data = crewmates.find(item => item.id === Number(id));
  const alertNot = () => {
    if(data.speed < 10) {
      return `Wow! you crewmate is very slow!`
    } else if (data.speed >= 10 && data.speed < 30) {
      return `Your crewmate is kind of slow.`
    } else if (data.speed >= 30 && data.speed < 50) {
      return `Your crewmate has some good speed`
    } else {
      return `Amazing! your crewmate is very fast!`
    }
  }
  console.log(data);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Name: {data.name}</h1>
      <div className={styles.stats}>
        <h2 className={styles.subtitle}>Stats</h2>
        <p className={styles.description}>Color: {data.color}</p>
        <p className={styles.description}>Speed: {data.speed}mph</p>
      </div>
      <p className={styles.alert}>{alertNot()}</p>
      <Link to={`../edit/${id}`} className={styles.linkBtn} relative="path">Edit Crewmate</Link>
    </div>
  )
}