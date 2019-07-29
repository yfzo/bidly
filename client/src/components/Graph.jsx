import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
const Graph = (props) => {
 const data = {
  labels: [],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
 };

 const bidders = []
 const auctionData = this.props.data.auctions.map((auction)=>{
  this.props.data.amounts.map(namedBid => {
  if(auction.id === namedBid.auction_id){
   bidders.push(namedBid.user_id)
  }
  })
 })


  return (
   <div>
   <h2>Bar Example (custom size)</h2>
   <Bar
     data={data}
     width={100}
     height={50}
     options={{
       maintainAspectRatio: false
     }}
   />
 </div>
  );
}

export default Graph
