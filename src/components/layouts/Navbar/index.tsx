import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisibe] = useState(true);
    const [sessionLoading, setSessionLoading] = useState(true)
    const {data, status} = useSession();

    console.log(useSession());
    console.log(data);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisibe((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 0) || currentScrollPos < 100);
            setPrevScrollPos(currentScrollPos);
            // console.log(prevScrollPos)
            // console.log(currentScrollPos)
            // console.log(prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70)
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    },[prevScrollPos, visible])

    useEffect(() => {
        if(status === "authenticated" || status === "unauthenticated") {
            setSessionLoading(false)
        }
    },[status])

    return (
        <>
        {!sessionLoading && (
              <div className={visible ? styles.navbar : `${styles.navbar} ${styles.hidden}`}>
              <div className="big">Navbar</div>
              {data ?
              <button onClick={() => signOut()}>Sign Out</button>
              :
              <button onClick={() => signIn()}>Sign in</button>
              }
          </div>
        )}
        </>
      

    )
}

export default Navbar