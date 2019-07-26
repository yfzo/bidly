import React, {Component} from 'react';

const MILLISECONDS_IN_MIN = 60000;
// const MILLISECONDS_IN_HR = 3600000;

// export default class Timer extends Component {
//   constructor(props) {
//       super(props);
//       this.state = { seconds: '00', minutes: (this.props.timeRemaining / MILLISECONDS_IN_MIN).toString(), hours: (this.props.timeRemaining / MILLISECONDS_IN_HR).toString() }
//       this.startCountDown = this.startCountDown.bind(this);
//       this.tick = this.tick.bind(this);
//       this.startCountDown()
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalHandle);
//   }

//   tick() {
//     var hour = Math.floor(this.secondsRemaining / 3600);
//     // var minRemaining = (this.secondsRemaining - (hour * 36000)) / 60;
//     var minRemaining = ((this.secondsRemaining / 3600) - hour) * 60;
//     var min = Math.floor(minRemaining);
//     var sec = Math.floor((minRemaining - min) * 60);
//     // console.log("HOUR", hour)
//     // console.log("MIN", min)
//     // console.log("SEC", sec)
//     this.setState({
//       hours: hour,
//       minutes: min,
//       seconds: sec
//     })
//     if (sec < 10) {
//       this.setState({
//         seconds: "0" + this.state.seconds,
//       })
//     }
//     if (min < 10) {
//       this.setState({
//         value: "0" + min,
//       })
//     }
//     if (hour < 10) {
//       this.setState({
//         value: "0" + hour,
//       })
//     }

//     if (hour === 0 && min === 0 && sec === 0) {
//       clearInterval(this.intervalHandle);
//     }
//     this.secondsRemaining--
//     // console.log("Minutes:", this.state.minutes, "Seconds:", this.state.seconds)
//   }

//   startCountDown() {
//     this.intervalHandle = setInterval(this.tick, 1000);
//     // let time = this.state.minutes;
//     let time = this.state.hours;
//     this.secondsRemaining = time * 60 * 60;
//     console.log("Hours remaining:", time)
//     console.log("Seconds remaining", this.secondsRemaining)
//   }    

//   render() {
//     return (
//       <div>
//         {this.secondsRemaining ? <h1>{this.state.hours}:{this.state.minutes}:{this.state.seconds}</h1> : <h1>Auction Ended</h1>}
//       </div>
//     );
//   }
// }

var timerStarted = false;

export default class Timer extends Component {
  constructor(props) {
      super(props);
      this.state = { completed: false, seconds: '00', minutes: (this.props.timeRemaining / MILLISECONDS_IN_MIN).toString() }
      this.startCountDown = this.startCountDown.bind(this);
      this.tick = this.tick.bind(this);
      this.startCountDown()
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }

  tick() {
    timerStarted = true;

    var min = Math.floor(this.secondsRemaining / 60);
    var sec = Math.floor(this.secondsRemaining - (min * 60));
    this.setState({
      minutes: min,
      seconds: sec
    })
    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      })
    }
    if (min < 10) {
      this.setState({
        value: "0" + min,
      })
    }
    if (min === 0 && sec === 0) {
      this.setState({completed: true});
      clearInterval(this.intervalHandle);
    }
    this.secondsRemaining--
    // console.log(this.secondsRemaining);
    // console.log("Minutes:", this.state.minutes, "Seconds:", this.state.seconds)
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.minutes;
    this.secondsRemaining = time * 60;
    // console.log("Seconds remaining", this.secondsRemaining)
  }    

  render() {
    return (
      <div>
        {!this.state.completed ? <h1>{this.state.minutes}:{this.state.seconds}</h1> : <h1>Auction Ended</h1>}
      </div>
    );
  }
}