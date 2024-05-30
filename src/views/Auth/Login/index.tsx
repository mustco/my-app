import Link from "next/link";
import styles from "./Login.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { query } from "firebase/firestore";


const LoginViews = () => {
  const {push, query} = useRouter();

  const callbackUrl:any = query.callbackUrl || "/"
  const [isLoading, setIsLoadng] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    setError("");
    setIsLoadng(true)

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email:event.target.email.value,
        password:event.target.password.value,
        callbackUrl
      })
      if(!res?.error) {
        setIsLoadng(false)
        push(callbackUrl)
      } else {
        setIsLoadng(false)
        setError(res.error)
      }
    } catch (error:any) {
      setIsLoadng(false)
      setError(error)
    }
    // const data = {
    //   email: event.target.email.value,
    //   fullname: event.target.fullname.value,
    //   password: event.target.password.value
    // }
    // const result = await fetch("/api/login", {
    //   method:"POST",
    //   headers:{
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(data)
    // })
    // if(result.status === 200) {
    //   event.target.reset();
    //   setIsLoadng(false)
    //   push("/auth/login")
    // } else {
    //   setIsLoadng(false);
    //   setError(result.status === 400 ? "Email already exists":"")
    // }
  }
  return (
    <div className={styles.login}>
      <h1 className={styles.login__title}>Login</h1>
      <p className={styles.error}>{error}</p>
      <div className={styles.login__form}>
        <form onSubmit={handleSubmit}>
            <div className={styles.login__form__item}>
          <label htmlFor="email"  className={styles.login__form__item__label}>
            Email :
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className={styles.login__form__item__input}
          />
          </div>

            <div className={styles.login__form__item}>
          <label htmlFor="password" className={styles.login__form__item__label}>
            Password :
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className={styles.login__form__item__input}
          />
          </div>

          <button type="submit" className={styles.login__form__item__button} disabled={isLoading}>{isLoading ? "Loading..." : " Login"}</button>
        </form>
      </div>
      <p className={styles.login__link}>
        Don't Have an account? Sign up <Link href={"/auth/register"}>here</Link>
      </p>
    </div>
  );
};

export default LoginViews;
