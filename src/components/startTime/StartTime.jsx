import React, {useState, useRef, useEffect} from 'react';
import './startTime.css';

const StartTime = () => {

    const [dayTimers, setDayTimers] = useState('00');
    const [hourTimers, setHourTimers] = useState('00');
    const [minuteTimers, setMinuteTimers] = useState('00');
    const [secondTimers, setSecondTimers] = useState('00');

    let interval = useRef();

    const startTime = () => {
        const countDate = new Date('Dec 28, 2021 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = now - countDate;

            const days = Math.floor((distance / (1000 * 60 * 60 * 24))); 
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
            const seconds = Math.floor((distance % (1000 * 60)) / 1000); 

            if (distance < 0) {
                // stop time
                clearInterval(interval.current);
            }else{
                setDayTimers(days);
                setHourTimers(hours);
                setMinuteTimers(minutes);
                setSecondTimers(seconds);
            }

        }, 1000)

    }

    useEffect(() => {
        startTime();
        return () => {
            clearInterval(interval.current); 
        }
    })

    return (
        <div className='start-time'> 
            <h1>EVENT WILL START IN</h1>
            <div className="time-boxs">
                <div className="time-box">
                    <p className="time-count">{dayTimers}</p>
                    <p className="time-name">days</p>
                </div>
                <div className="time-box">
                    <p className="time-count">{hourTimers}</p>
                    <p className="time-name">HOURS</p>
                </div>
                <div className="time-box">
                    <p className="time-count">{minuteTimers}</p>
                    <p className="time-name">MINUTES</p>
                </div>
                <div className="time-box">
                    <p className="time-count">{secondTimers}</p>
                    <p className="time-name">SECONDS</p>
                </div>
            </div>
        </div>
    )
}

export default StartTime
