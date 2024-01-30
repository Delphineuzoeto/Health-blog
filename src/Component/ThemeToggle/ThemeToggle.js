"use client";
import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
// creating toggle button

function ThemeToggle() {
  const { toggle, theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "black" }
      }
    >
      <Image width={14} height={14} src="/social/moon.svg" alt="twitter" />
      <div
        className={styles.circular_ball}
        style={
          theme === "dark"
            ? { left: "1%", backgroundColor: "#0f172a" }
            : { right: "1%", backgroundColor: "#fff" }
        }
      ></div>
      <Image width={14} height={14} src="/social/sun.svg" alt="twitter" />
    </div>
  );
}

export default ThemeToggle;
