"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import CategoryList from "@/Component/CategoryList/CategoryList";
import { useState, useEffect } from "react";
import TrendingTopics from "@/Component/TrendingTopics/TrendingTopics";
import Featured from "@/Component/Featured stories/Featured";

const healthTips = [
  "Stay hydrated by drinking plenty of water throughtout the day",
  "Get at least 30 minutes of exercise daily to maintain good health.",
  "Include a variety of colorful fruits and vegetables in your diet.",
  "Practice deep breathing or meditation to reduce stress levels.",
  // Add more health tips as needed
];

export default function Home() {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // move to the next health tip
      setCurrentTipIndex((prevIndex) => (prevIndex + 1) % healthTips.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Welcome to Dellys Blog</b>
      </h1>
      <div className={styles.hero_container}>
        <div className={styles.overlay}>
          <h2 className={styles.subTitle}> At Delly&apos;s Blog,</h2>
          <p className={styles.description}>
            We are committed to your well-being, and our mission is to help you
            achieve better health and happiness. We understand that..
          </p>
          <button className={styles.read_more}>
            <Link href="/About">read more</Link>
          </button>
        </div>
        <div className={styles.image_container}>
          <Image
            src="/living.jpg"
            alt=""
            width={500}
            height={200}
            priority
            className={styles.image}
          />
        </div>
      </div>

      <CategoryList />

      {/* Health updates */}

      <div className={styles.acne_container}>
        <h3 className={styles.healthUpdate_title}>Health Updates</h3>
        <Link href="/Health/Acne" className={styles.hero_container}>
          <div className={styles.overlay}>
            <h2 className={styles.subTitle}>
              Acne: Overcoming Acne to Embrace Your True Radiance
            </h2>
            <p className={styles.description}>
              A Comprehensive Guide on How to Live with Acne Tips, Remedies, and
              Skincare for Managing Acne
            </p>
          </div>
          <div className={styles.image_container}>
            <Image
              src="/acne.jpg"
              alt=""
              width={400}
              height={200}
              priority
              className={styles.images}
            />
          </div>
        </Link>
      </div>
      {/*End of  Health updates */}

      <Featured />

      {/* Trending Topics */}
      <TrendingTopics />

      {/* End of trending */}

      {/* health tips */}
      <div className={styles.healthTips}>
        <h3 className={styles.healthUpdate_title}>Health Tips</h3>
        <p className={styles.healthtips_desc}>{healthTips[currentTipIndex]}</p>
      </div>
    </div>
  );
}
