import React from 'react';
import './Sensor.css';

const Sensor = (props) => {
    return (
        <div className='Sensor'>
            <div className="container">
              <h5>Sensors:</h5>
              <div>Temperature: {props.sensorsData.temperature}</div>
              <div>Humidity: {props.sensorsData.humidity}</div>
              <div>Voltage: {props.sensorsData.voltage}</div>
              <div>Time: {props.sensorsData.date}</div>
            </div>
        </div>
    )
}

export default Sensor;
