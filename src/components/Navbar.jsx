import styles from "./Navbar.module.css";
import { NavLink } from "react-router";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";


export default function Navbar() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <div className={styles.container}>
        <GiHamburgerMenu className={styles.hamburgerBtn} />
        <div className={styles.navContainer}>
          <div className={styles.closeBtn}><IoMdClose /></div>
          <ul className={styles.navbar}>
            <li className={styles.navList}>
              <NavLink
                to="."
                className={({ isActive }) =>
                  isActive
                    ? `${styles["navLink"]} ${styles["active"]}`
                    : styles["navLink"]
                }
              >
                Home
              </NavLink>
            </li>
            <li className={styles.navList}>
              <NavLink
                to="#"
                className={({ isActive }) =>
                  isActive
                    ? `${styles["navLink"]} ${styles["active"]}`
                    : styles["navLink"]
                }
              >
                Create a Crewmare
              </NavLink>
            </li>
            <li className={styles.navList}>
              <NavLink
                to="#"
                className={({ isActive }) =>
                  isActive
                    ? `${styles["navLink"]} ${styles["active"]}`
                    : styles["navLink"]
                }
              >
                Crewmate Gallery
              </NavLink>
            </li>
          </ul>
        </div>
    </div>
  );
}
