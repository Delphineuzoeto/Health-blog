import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <Image width={18} height={18} src="/social/fb.svg" alt="facebook" />
        <Image width={18} height={18} src="/social/ig.svg" alt="Instagram" />
        <Image
          width={18}
          height={18}
          src="/social/LinkedLn.svg"
          alt="Linkedin"
        />
        <Image width={18} height={18} src="/social/twitter.svg" alt="twitter" />
        <Image width={20} height={20} src="/social/github.svg" alt="github" />
        <Image width={18} height={18} src="/social/youtube.svg" alt="youtube" />
      </div>
      <div className={styles.Logo}>DELLY&apos;s Blog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/About">
          About Us
        </Link>
        <Link className={styles.link} href="/Contact">
          Contact
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
}

export default Navbar;
