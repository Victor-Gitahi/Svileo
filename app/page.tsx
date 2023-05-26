import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Graph from "./components/Graph/Graph";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Graph />
      </main>
    </>
  );
}
