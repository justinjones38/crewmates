import { useParams, useOutletContext, Link } from "react-router"
import styles from "./GalleryInfo.module.css"


export default function GalleryInfo() {
  const {id} = useParams();
  const {crewmates} = useOutletContext();
  console.log(crewmates);

  if(!crewmates) {
    return <h2>Loading...</h2>
  }

  const data = crewmates.find(item => item.id === Number(id));
  console.log(data);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Name: {data.name}</h1>
      <div className={styles.stats}>
        <h2 className={styles.subtitle}>Stats</h2>
        <p className={styles.description}>Color: {data.color}</p>
        <p className={styles.description}>Speed: {data.speed}mph</p>
      </div>
      <p className={styles.alert}>You don't like this crewmate! Feel free to edit the crewmate and click the button below.</p>
      <Link to={`../edit/${id}`} className={styles.linkBtn} relative="path">Edit Crewmate</Link>
    </div>
  )
}