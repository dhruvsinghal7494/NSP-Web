"use client";

import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Image from "next/image";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <div className={styles.page}>
      <Image
        src="/Guruji.webp"
        alt="Mahabrahmrishi"
        className={styles.logo}
        width={450}
        height={450}
      ></Image>
      <div className="">
        <form action={formAction} className={styles.form}>
          <h1>Login</h1>
          <p>Username</p>
          <input type="text" placeholder="username" name="username" />
          <p>Password</p>
          <input type="password" placeholder="password" name="password" />
          <button>Submit</button>
          {state && state}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
