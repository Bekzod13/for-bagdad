import React, {useContext} from 'react';
import { Context } from '../../context/Context';
import './academic.css';

// import image
import drop from '../../images/drop.png';

const Academic = () => {

    const academics = useContext(Context);

    return (
        <div className='academic-box'>
            <h1 className="academic-header">FOR ACADEMICS</h1>
            <div className="academics">
                {
                    academics.academics.map(item => (
                        <div className="academic" key={item.id}>
                            <p className="academic-title">{item.title}</p>
                            <h1 className="academic-price">{item.price}</h1>
                            <h1 className="academic-price line-true">{item.oldPrice}</h1>
                            <p className="academic-desc">{item.desc}</p>
                            <a href="#" className="academic-read-btn">raed more</a>
                        </div>
                    ))
                }
            </div>
            <div className="drop">
                <img src={drop} alt="drop" />
            </div>
        </div>
    )
}

export default Academic
