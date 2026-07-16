import styles from "./Navbar.module.css"
import { NavLink } from "react-router"
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";


export default function Navbar() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.hamburgerMenu}>
        <GiHamburgerMenu />
      </div>
    </div>
  )
}