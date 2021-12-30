import React from 'react';
import './schedule.css';

const Schedule = () => {
    return (
        <div className='container schedule'>

            <div className="schedule-count">
                <div className="schedule-count-item schedule-count-name">THE SCHEDULE</div>
                <div className="schedule-count-item">14.10.2022</div>
                <div className="schedule-count-item">14.10.2022</div>
                <div className="schedule-count-item">14.10.2022</div>
            </div>
            <div className="table">
                <div className="table-left">
                    <div className="table-data table-data-l">Welcome Tea & Registration</div>
                    <div className="table-data table-data-l"><span className='line-true'> 9:15 AM</span> <br />9:15 AM</div>
                    <div className="table-data table-data-l">Keynote Speeches</div>
                    <div className="table-data table-data-l">11:30 AM <br />10.09.2021</div>
                    <div className="table-data table-data-l">Early Bird Registration & Payment</div>
                    <div className="table-data table-data-l">02:30 PM <br />01.08.2021-25.08.2021</div>
                    <div className="table-data table-data-l"><span className='line-true'>15.08.2021</span> <br />01.08.2021-25.08.2021</div>
                    <div className="table-data table-data-l">Conference Dates</div>
                </div>
                <div className="table-right">
                    <div className="table-data">8:30 AM <br />8:30 AM</div>
                    <div className="table-data">Review Results</div>
                    <div className="table-data"><span className='line-true'> 10:00 AM</span>  <br />25.08.2021 (final)</div>
                    <div className="table-data">Notification of Acceptance</div>
                    <div className="table-data"><span className='line-true'>01:30 PM</span> <br /> 01:30 PM</div>
                    <div className="table-data">Late Registration & Payment</div>
                    <div className="table-data">Late Registration & Payment</div>
                    <div className="table-data">14.10.2021 - 16.10.2021</div>
                </div>
            </div>
        </div>
    )
}

export default Schedule
