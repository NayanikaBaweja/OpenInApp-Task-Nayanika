import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {faker} from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Bargraph = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: false
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        
      },
      y: {
        min: 0,
        max: 500,
        ticks: {
          stepSize: 100
        }
      },
      
    }
  };

  const labels = [
    "Week 1",
    "Week 2",
    "Week 3",
    "Week 4"
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Guest",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
        backgroundColor: "rgba(238, 132, 132)",
        barPercentage: 0.7,
        borderRadius: 5,
        categoryPercentage: 0.5
      },
      {
        label: "User",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
        backgroundColor: "rgba(152, 216, 158)",
        barPercentage: 0.7,
        borderRadius: 5,
        categoryPercentage: 0.5,
      },
    ],
  };
  return <div>
    <Bar className="p-10 h-[400px] bg-white" options={options} data={data} />
  </div>;
};

export default Bargraph;
