"use client";
import { useEffect } from "react";
import { Chart } from "chart.js";
import styles from "./Graph.module.css";
function Example() {
  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["1x", "2x", "3x", "4x", "5x", "6x", "7x"],
        datasets: [
          {
            data: [10, 15, 20, 25, 30, 35, 40],
            borderColor: "#3e95cd",
            backgroundColor: "#7bb6dd",
            fill: false,
            tension: 0.4,
            stepped: true, // Add the stepped property to make the line progress upwards only
          },
        ],
      },
    });
  }, []);
  return (
    <main className={`${styles.main}`}>
      <h4 className={`${styles.graph_header}`}>Burst</h4>
      <canvas id="myChart" className={`${styles.graph}`}></canvas>
    </main>
  );
}

export default Example;
