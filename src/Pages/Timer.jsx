import React, { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp, onExpire }) {
  const {
    seconds,
    minutes,
    hours,
    restart,
  } = useTimer({ expiryTimestamp, onExpire });

  useEffect(() => {
    restart(expiryTimestamp);
  }, [expiryTimestamp, restart]);

  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };

  const TimeBox = ({ time }) => (
    <div style={{
      display: 'inline-block',
      margin: '0 5px',
      padding: '5px',
      fontSize: '30px',
      border: '2px solid #000',
      borderRadius: '10px',
      backgroundColor: '#fofofo',
      width: '50px',
      textAlign: 'center',
    }}>
      {formatTime(time)}
    </div>
  );

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div style={{ fontSize: '30px' }}>Time Remaining</div>
      <br/>
      <div style={{ fontSize: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <TimeBox time={hours} />:<TimeBox time={minutes} />:<TimeBox time={seconds} />
      </div>
    </div>
  );
}

export default MyTimer;
