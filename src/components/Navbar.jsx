import styles from "./Navbar.module.css";
import { NavLink } from "react-router";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import useWindowSize from "../hooks/useWindowSize";

export default function Navbar() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const { windowWidth } = useWindowSize();
  return (
    <div className={styles.container}>
      <GiHamburgerMenu
        className={styles.hamburgerBtn}
        onClick={() => setIsMenuShown(true)}
      />
      {isMenuShown || windowWidth >= 700 ? (
        <div className={styles.navContainer}>
          <IoMdClose
            onClick={() => setIsMenuShown(false)}
            className={styles.closeBtn}
          />
          <ul className={styles.navbar}>
            <li className={styles.navList}>
              <NavLink
                onClick={() => setIsMenuShown(false)}
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
                to="create"
                onClick={() => setIsMenuShown(false)}
                className={({ isActive }) =>
                  isActive
                    ? `${styles["navLink"]} ${styles["active"]}`
                    : styles["navLink"]
                }
              >
                Create a Crewmate
              </NavLink>
            </li>
            <li className={styles.navList}>
              <NavLink
                to="gallery"
                onClick={() => setIsMenuShown(false)}
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
      ) : null}
    </div>
  );
}
