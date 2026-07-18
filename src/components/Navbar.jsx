import styles from "./Navbar.module.css";
import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import useWindowSize from "../hooks/useWindowSize";

let root = document.querySelector("html");

export default function Navbar() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("theme")) || false,
  );
  console.log(isDarkMode);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDarkMode));
    if (isDarkMode) {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
  }, [isDarkMode]);
  const { windowWidth } = useWindowSize();
  const changeTheme = () => {
    setIsDarkMode((prev) => !prev);
    setIsMenuShown(false);
  };
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
            <li className={styles.navList}>
              <button
                className={styles.btn}
                onClick={() => setIsDarkMode((prev) => !prev)}
              >
                {isDarkMode ? "Dark Mode" : "Light Mode"}
              </button>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
