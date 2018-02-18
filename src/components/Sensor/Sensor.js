import React from 'react';
import './Sensor.css';

const Sensor = (props) => {
    return (
        <div className='sensor'>
            <div className="container">
              <div>Temperature: {props.temperature} &#8451;</div>
              <div>Humidity: {props.humidity} %</div>
              <div>Voltage: {props.voltage} V</div>
              <div>Time: {props.datetime}</div>
            </div>
        </div>
    )
}

export default Sensor;
