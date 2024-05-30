import Link from "next/link";
import styles from "./Register.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
 
const RegisterViews = () => {
  const {push} = useRouter();
  const [isLoading, setIsLoadng] = useState(false);
  const [error, setError] = useState("");

  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [errorForm, setErrorForm] = useState({email:'', fullname:'', password:''});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  },[email, fullname, password]);

  const validateForm = () => {
    let errors = {email:'', fullname:'', password:''};

    if(!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) { 
      errors.email = 'Email is invalid.'; 
    }
    if(!fullname) {
      errors.fullname = "Fullname is required.";
    }
    if(!password) {
      errors.password = "Password is required."
    } else if(password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }
    setErrorForm(errors);
   setIsFormValid(Object.values(errors).every(error => error === ''))

  }

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    setError("");
    setIsLoadng(true)
    const data = {
      email: event.target.email.value,
      fullname: event.target.fullname.value,
      password: event.target.password.value
    }
    const result = await fetch("/api/register", {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    if(result.status === 200) {
      event.target.reset();
      setIsLoadng(false)
      push("/auth/login")
    } else {
      setIsLoadng(false);
      setError(result.status === 400 ? "Email already exists":"")
    }

  }
  
  console.log(isFormValid)
  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Register</h1>
      <p className={styles.error}>{error}</p>
      <div className={styles.register__form}>
        <form onSubmit={handleSubmit}>
            <div className={styles.register__form__item}>
          <label htmlFor="email"  className={styles.register__form__item__label}>
            Email :
          </label>
          <input
            id="email"
            type="email"
            placeholder="email"
            name="email"
            className={styles.register__form__item__input}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorForm.email && <p className={styles.register__form__item__errors}>{errorForm.email}</p>}
          </div>

          <div className={styles.register__form__item}>
          <label htmlFor="fullname" className={styles.register__form__item__label}>
            Fullname :
          </label>
          <input
            id="fullname"
            type="text"
            placeholder="fullname"
            name="fullname"
            className={styles.register__form__item__input}
            onChange={(e) => setFullname(e.target.value)}
          />
          {errorForm.fullname && <p className={styles.register__form__item__errors}>{errorForm.fullname}</p>}

          </div>

            <div className={styles.register__form__item}>
          <label htmlFor="password" className={styles.register__form__item__label}>
            Password :
          </label>
          <input
            id="password"
            type="password"
            placeholder="password"
            name="password"
            className={styles.register__form__item__input}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorForm.password && <p className={styles.register__form__item__errors}>{errorForm.password}</p>}
          </div>

          <button type="submit" className={styles.register__form__item__button} disabled={isLoading || !isFormValid}>{isLoading ? "Loading..." : " Register"}</button>
        </form>
      </div>
      <p className={styles.register__link}>
        Have an account? Sign in <Link href={"/auth/login"}>here</Link>
      </p>
    </div>
  );
};

export default RegisterViews;
