import styles from "./about.module.css";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        {/* <h2 className={styles.title}>Welcome to Delly&apos;s Blog</h2> */}
        <p className={styles.desc}>
          At Delly&apos;s Blog, we are committed to your well-being, and our
          mission is to help you achieve better health and happiness. We
          understand that it&apos;s easy to overlook the significant importance
          of prioritizing your wellness and taking care of yourself. That&apos;s
          why we&apos;re here to remind you of the positive impact it can have
          on your life. From physical fitness to mental well-being, we believe
          that your health should be your top priority. we&apos;ll explore the
          various ways in which you can improve your overall wellness, providing
          practical tips and insights along the way. So, join us on this journey
          towards a healthier and happier you. Whether you&apos;re looking for
          information on common ailments, fitness tips, or healthy lifestyle
          choices, you&aposve come to the right place. In our ever-evolving
          world, staying informed about your health is more important than ever.
          Our team of experts has carefully curated a range of articles that
          cover a wide variety of health topics, all geared towards providing
          you with accurate and up-to-date information. No matter your age,
          gender, or background, we have something for everyone. So take a dive
          into our articles, explore the vast array of health topics we cover,
          and empower yourself to make informed decisions for a healthier and
          happier lifestyle.
        </p>
      </div>
      {/* no_content */}
      <div className={styles.no_content}></div>
    </div>
  );
}

export default About;
