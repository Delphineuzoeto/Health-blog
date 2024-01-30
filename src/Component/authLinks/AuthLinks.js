"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";

function AuthLinks() {
  const [openMenu, setOpenMenu] = useState(false);

  const status = "authenticated";
  return (
    <>
      {status === "Unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burgerMenu} onClick={() => setOpenMenu(!openMenu)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {openMenu && (
        <div className={styles.mobileScreen}>
          <Link href="/">Home</Link>
          <Link href="/About">About Us</Link>
          <Link href="/">Remote work</Link>

          <Link href="/Contact">Contact</Link>
          {status === "Unauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default AuthLinks;
