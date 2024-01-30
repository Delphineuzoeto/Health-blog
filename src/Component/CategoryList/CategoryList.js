import Image from "next/image";
import styles from "./categoryList.module.css";
import Link from "next/link";

function CategoryList() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Hollistic health</h3>

      <div className={styles.container__images}>
        <div className={styles.images__container}>
          <Link href="/MentalHealth/what your body need">
            <Image
              src="/Nutrition.jpg"
              alt="Varieties of fruits"
              width={220}
              height={150}
              className={styles.flex_image}
            />
            <p>Nutrition</p>
          </Link>
        </div>

        <div className={styles.images__container}>
          <Link href="wellness">
            <Image
              src="/wellness.jpg"
              alt="someone keeping fit"
              width={220}
              height={150}
              className={styles.flex_image}
            />
            <p>Wellness</p>
          </Link>
        </div>
        <div className={styles.images__container}>
          <Link href="/fitness">
            <Image
              src="/fitness.jpg"
              alt="someone working out"
              width={220}
              height={150}
              className={styles.flex_image}
            />
            <p>Fitness</p>
          </Link>
        </div>
        <div className={styles.images__container}>
          <Link href="/healthy ageing">
            <Image
              src="/healthy_ageing.jpg"
              alt="An healthy old woman"
              width={220}
              height={150}
              className={styles.flex_image}
            />
            <p>Healthy ageing</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
