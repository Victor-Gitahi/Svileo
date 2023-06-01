import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Graph from "./components/Graph/Graph";

export default function Home() {
  return (
    <>
      <main className={`${styles.main} row-cols-2`}>
        <div className={`${styles.ellipse} ${styles.ellipse_1}`}></div>
        <div className={`row ${styles.content_wrapper}`}>
          <div className={`col`}>
            <Graph />
          </div>
          <div className={`col ${styles.table_wrapper}`}>
            <table className={`table table-borderless ${styles.table}`}>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
