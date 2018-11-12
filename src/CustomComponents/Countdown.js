import React from 'react';
import './Countdown.css'

export default class Countdown extends React.Component {
  isAfterRegistration = () => {
    const now = new Date().getTime();
    const endOfRegistration = new Date('Jan 4, 2019 00:00:00').getTime();
    return now > endOfRegistration
  }



  render() {
    const countDownDate = new Date("Nov 26, 2018 00:00:00").getTime();
    const x = setInterval(function() {
      const now = new Date().getTime();
      const distance = countDownDate - now
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      if(document.getElementById('demo')) {
        document.getElementById("demo").innerHTML = days + "d " + hours + "h "
          + minutes + "m " + seconds + "s ";
      }
    }, 1000);


    return (
      <div>
        {this.isAfterRegistration() ?
          <div>
            <p className='countDownDate'>Już po zapisach!</p>
          </div>
          :
          <div>
            <p align="center" className="title">Do rozpoczecia zapisów na hackathon pozostalo:</p>
            <p id = "demo" align="center" className='countDownDate'/>
          </div>
        }
      </div>
    )
  }
}



