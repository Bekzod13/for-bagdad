import React, {useContext} from 'react';
import './expect.css';
import { Context } from './../../context/Context';

const Expect = () => {

    const expects = useContext(Context);

    return (
        <div className='container expact-box'>
            <h1 className="expect-header">WHAT TO EXPECT</h1>
            <div className="expects">
                {
                    expects.expects.map(item => (
                        <div className="expect" key={item.id}>
                            <div className="expect-left">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="expect-right">
                                <div className="expect-title">{item.title}</div>
                                <p className="expect-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Expect
