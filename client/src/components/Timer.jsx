import React, {Component} from 'react';

const MILLISECONDS_IN_MIN = 60000;

export default class Timer extends Component {
  constructor(props) {
      super(props);
      this.state = { seconds: '00', minutes: (this.props.timeRemaining / MILLISECONDS_IN_MIN).toString() }
      this.secondsRemaining; 
      this.intervalHandle;
      this.startCountDown = this.startCountDown.bind(this);
      this.tick = this.tick.bind(this);
      this.startCountDown()
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - (min * 60);
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
      clearInterval(this.intervalHandle);
    }
    this.secondsRemaining--
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
        {this.secondsRemaining ? <h1>{this.state.minutes}:{this.state.seconds}</h1> : <h1>Auction Ended</h1>}
      </div>
    );
  }
}