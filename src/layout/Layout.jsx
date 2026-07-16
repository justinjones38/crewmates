import styles from "./Layout.module.css"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router"

export default function Layout() {
  return (
  <div className={styles.container}>
    <Navbar />
    <Outlet />
  </div>
  )

}