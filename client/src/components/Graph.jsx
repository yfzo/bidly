import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
const Graph = (props) => {
 console.log(props)
 const data = {
  labels: [],
  datasets: [
    {
      label: 'Number of bids',
      backgroundColor: 'rgba(255,99,132,1)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 0.5,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
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
