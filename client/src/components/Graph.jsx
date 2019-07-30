import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
const Graph = (props) => {
 console.log(props)
 const data = {
  labels: [],
  datasets: [
    {
      label: 'Number of bids',
      backgroundColor: 'white',
      borderColor: 'white',
      borderWidth: 0.5,
      hoverBackgroundColor: 'rgb(176, 174, 247)',
      hoverBorderColor: 'rgb(176, 174, 247)',
      data: []
    }
  ]
 };

 const options = {
   legend: {
    labels: {

       // This more specific font property overrides the global property
     fontColor: 'white'
    }
   },
  maintainAspectRatio: true,
  scales: {
   xAxes: [{
    // barPercentage: 0.5,
    barThickness : 73,
    ticks: {
     beginAtZero: true,
     fontColor: 'white',
    }
   }],
   yAxes: [{
    ticks: {
     beginAtZero: true,
     fontColor: 'white',
     stepSize: 1
    }
   }]
}
 }

  props.data.auction_bids.map((bid)=>{
  if(props.auction.auctions_table_id == bid.id){
   data.labels.push(bid.amount)
   data.datasets[0].data.push(bid.count)
  }
  })

  return (
   <div className="graph-container">
   <h4 className="myauction_titles">Result</h4>
   <Bar
     data={data}
     width={150}
     height={150}
     options={options}
   />
 </div>
  );
}

export default Graph
