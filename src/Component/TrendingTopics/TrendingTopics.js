import Link from "next/link";
import styles from "./trending.module.css";
function TrendingTopics() {
  return (
    <div className={styles.categories}>
      <h3 className={styles.healthUpdate_title}>Trending topics</h3>
      <div className={styles.category}>
        {/* div style={{ color: textColor }} */}
        <div>
          <Link href="/Health/Fissured-tongue" className={styles.link}>
            Fissured tongue
          </Link>
        </div>
        <div>
          <Link href="/MentalHealth/Fitness">Fitness</Link>
        </div>
        <div>
          <Link href="/MentalHealth/Wellness Tips">Wellness Tips</Link>
        </div>
        <div>
          <Link href="/MentalHealth/Preventive Care">Preventive Care</Link>
        </div>
        <div>
          <Link href="/MentalHealth/Mental Health">Mental Health</Link>
        </div>
        <div>
          <Link href="/MentalHealth/Healthy Lifestyle">Healthy Lifestyle</Link>
        </div>
        <div>
          <Link href="/MentalHealth/Healthy Aging">Healthy Aging</Link>
        </div>
        <div>
          <Link href="/MentalHealth/Women's Health">Womens Health</Link>
        </div>
        <div>
          <Link href="/MentalHealth/Mens Health">Mens Health</Link>
        </div>
        <div>
          <Link href="/MentalHealth/Disease specific Info">Disease</Link>
        </div>
      </div>
    </div>
  );
}

export default TrendingTopics;
