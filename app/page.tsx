import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Graph from "./components/Graph/Graph";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={`${styles.ellipse} ${styles.ellipse_1}`}></div>
        <Graph />
      </main>
    </>
  );
}
