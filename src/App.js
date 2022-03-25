import React from 'react';
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
// const Button= styled.button`
//    background-color: none;
//    color: red;
// `

function LineChart(){

   const data = {
      labels: ['JAN','FEB','MAR','APR','MAY'],
      datasets:[
      {
         label: 'Sales for 2022',
         data:[3,4,0,6, 15]
      }
      ]
   }
   return <Line data={data} /> 
}



export default LineChart;