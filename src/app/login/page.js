import styles from "./loginpage.module.css";

function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.container_wrapper}>
        <div className={styles.social_login}>Login with Google</div>
        <div className={styles.social_login}>Login with Github </div>
        <div className={styles.social_login}>Login with Facebook</div>
      </div>
    </div>
  );
}

export default LoginPage;
