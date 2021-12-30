import React, {useContext} from 'react';
import { Context } from '../../context/Context';
import './speaker.css';

const Speaker = () => {

    const speakers = useContext(Context);

    return (
        <div className='container'>
            <h1 className="speaker-header">HONORABLE SPEAKERS</h1>
            <div className="speakers">
                {
                    speakers.speakers.map(item => (
                        <div className="speaker" key={item.id}>
                            <div className="speak-img-box">
                                <img src={item.image} alt={item.job} />
                            </div>
                            <div className="speaker-details">
                                <p className="speaker-job">{item.job}</p>
                                <p className="speaker-desc">{item.desc}</p>
                                <p className="speaker-index">{item.index}</p>
                                <a href="#" className="read-more">Read more</a>
                            </div>
                        </div>
                    ))
                }
            </div>
            <h1 className="speaker-header">KEYNOTE SPEAKERS</h1>
            <div className="keynotes">
                {
                    speakers.keynotes.map(item => (
                        <div className="keynote" key={item.id}>
                            <div className="keynote-img-box">
                                <img src={item.image} alt={item.desc} />
                            </div>
                            <p className="keynote-name">{item.job}{" "}{item.name}</p>
                            <p className="keynote-desc">{item.desc}</p>
                            <p className="keynote-location">({item.location})</p>
                            <p className="keynote-education">{item.education}</p>
                        </div>
                    ))
                }
            </div>
            <h1 className="speaker-header">THE SCHEDULE</h1>
        </div>
    )
}

export default Speaker
