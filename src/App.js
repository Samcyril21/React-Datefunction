import React from 'react';
import './style.css';

export default function App() {
  let date = new Date();

  let hours = date.getHours();

  let msg = '';
  let msg2 = '';

  if ((hours >= 4) & (hours < 11)) {
    msg = 'Good Morning';
    msg2 = 'Have A Nice Day';
  }
  if ((hours >= 11) & (hours < 16)) {
    msg = 'Good Afternoon';
    msg2 = 'Have A Good Noon ';
  }
  if ((hours >= 16) & (hours < 20)) {
    msg = 'Good Evening';
    msg2 = 'Have A Nice Day';
  }
  if ((hours >= 20) & (hours < 4)) {
    msg = 'Good Night';
    msg2 = 'Have A Nice Day';
  }

  return (
    <div id="greet">
      <h1>Greetings Of The DAY</h1>

      <h2>Hi, {msg} Buddy!</h2>
      <h3> {msg2} Buddy!</h3>
    </div>
  );
}
