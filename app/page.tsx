import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className={styles.nav}>
        <Link href={"/auth"}>Create Account</Link>
        <Link href={"/auth/login"}>Login</Link>
      </nav>

      <main className={styles.main}>
        <h1>SVILEO</h1>
      </main>
    </>
  );
}
