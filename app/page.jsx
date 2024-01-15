import LoginForm from "./login/loginForm/loginForm";
import styles from "@/app/login/login.module.css";

// TODO
const Homepage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default Homepage;
