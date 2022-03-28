import React from 'react';
import { Line, Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
// const Button= styled.button`
//    background-color: none;
//    color: red;
// `

export function LineChart(){
   
   const data = {
      labels: [' ',' mon','tues','wed','thur','fri','sat', 'sun', ''],
      datasets:[
         {
            label: 'Sales for 2022',
            spanGaps: 5,
            data:[0,2,5,3, 10, 5, 17,15, 10],
            tension: 0.4,
               backgroundColor: ['#90d893'],
               fill: {
                  target: 'origin',
                  above:'#ff3a29',
                  below: 'red'
               },
         },
         {
            label: 'Sales for 2022',
            spanGaps: 5,
            data:[0,10,7,13, 20, 15, 27,25, 20],
            tension: 0.4,
               backgroundColor: ['#90d893'],
               fill: {
                  target: 'origin',
                  above:'#90d893',
                  below: 'red'
               },
         },
      {
         label: 'Sales for 2022',
         spanGaps: 5,
         data:[20,30,35,32, 29 , 25, 20, 10],
         tension: 0.4,
            backgroundColor: ['rgba(0,250,250,0.1)'],
            fill: {
               target: 'origin',
               above:'#dfddff',
            },
      }
      ],
      
   }
   return <Line data={data} fill={"red"}/> 
}


export  function BarChart(){

   const data = {
      labels: ['Today','Yesterday','March 1 2022','March 2 2021','March 2 2021'],
      datasets:[
      // {
      //    label: 'Sales for 2022',
      //    data:[3,2,2,1,5],
      //    backgroundColor: ['green'],
         
      //    tension: 0.5
      // },
      {
         label: 'Sales for 2022',
         data:[0,50,6],
         options:{
            scales:{
               x:{
                  stacked: true
               },
               y:{
                  stacked: true
               }
            }
         },
         tension: 0.4,
         borderWidth: 0,
         borderColor: 'red',
         
            backgroundColor: ['rgba(0,250,250)'],
      }
      ]
   }
   return <Bar data={data} options={{indexAxis:"y"}} /> 
}



// const config = {
//    type: 'bar',
//    data: dataa,
//    options:{
//       scales:{
//          y:{
//             beginAtZero: true
//          }
//       }
//    }
// }



