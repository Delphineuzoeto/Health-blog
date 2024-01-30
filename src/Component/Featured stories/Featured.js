import Image from "next/image";
import styles from "./featured.module.css";
import Link from "next/link";

function Featured() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Feautured stories</h3>
      <div className={styles.container__images}>
        <div className={styles.images__container}>
          <Link href="/Nutrition">
            <Image
              src="/Nutrition.jpg"
              alt="Varieties of fruits"
              width={220}
              height={150}
              className={styles.flex_image}
            />
            <div className={styles.posts}>
              <h3> Misdiagnoses</h3>
              <p>
                The Ripple Effect: Unraveling the Consequences of Misdiagnoses
                on Patients and Families.
              </p>
            </div>
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
            <div className={styles.posts}>
              <h3>Men and prostate</h3>
              <p>
                Decoding Common Myths and Misconceptions surrounding men and
                prostate health.
              </p>
            </div>
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
            <div className={styles.posts}>
              <h3>Age like fine wine</h3>
              <p>
                Getting older doesnt equate to loosing your sparkle, explore the
                concept of aging younger
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Featured;
