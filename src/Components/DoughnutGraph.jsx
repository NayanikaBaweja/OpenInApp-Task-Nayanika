import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {faker} from "@faker-js/faker";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutGraph = () => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: false
        }
    }
    const labels = [
        'Basic Tees',
        'Custom Short Pants',
        'Super Hoodies'
    ]
    const data = {
        labels,
        datasets: [
          {
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            backgroundColor: [
              'rgba(238, 132, 132)',
              'rgba(152, 216, 158)',
              'rgba(246, 220, 125)',
            ],
            cutout: '80%',
            hoverBorderJoinStyle: 'round'
          },
        ],
      };
  return (
    <div>
        <Doughnut options={options} data={data} />
    </div>
  )
}

export default DoughnutGraph