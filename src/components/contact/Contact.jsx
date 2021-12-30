import React from 'react';
import loc from '../../images/loc.png';
import msg from '../../images/msg.png';
import './contact.css'

const Contact = () => {
    return (
        <>
            <div className="contacts">
                <div className="contact">
                    <div className="contact-img-box">
                        <img src={loc} alt="location" />
                    </div>
                    <div className="contact-details">
                        <p className="contact-title">ADDRESS</p>
                        <p className="contact-desc">Tashkent Institute of Irrigation and Agricultural Mechanization Engineers, Department of Power <br /> Supply and Renewable Energy Sources. 39 Kari Niyazov street, ashkent 100000, Uzbekistan</p>
                    </div>
                </div>
                <div className="contact">
                    <div className="contact-img-box">
                        <img src={msg} alt="location" />
                    </div>
                    <div className="contact-details">
                        <p className="contact-title">CONTACT</p>
                        <p className="contact-desc">icecae@tiiame.uz; <br /> icecae2020@gmail.com <br /> o.tursunov@tiiame.uz <br /> +99871 237 19 36; <br /> +998 90 126 26 77</p>
                    </div>
                </div>
            </div>
            <h1 className="send-header">SEND US A MESSAGE</h1>
            <p className="send-text">If you have any questions, please contact us directly. We will respond for sure. Tashkent Institute of Irrigation and Agricultural Mechanization Engineers. Department of Power Supply and enewable Energy Sources</p>
            <label htmlFor="first" className='name-label'>Your name</label>
            <input type="text" id='first' placeholder='First name' className="input-box" />
            <label htmlFor="email" className='name-label'>Email</label>
            <input type="text" id='email' placeholder='Email address' className="input-box" />
            <label htmlFor="number" className='name-label'>Phone number</label>
            <input type="number" id='number' placeholder='Phone number' className="input-box" />
            <label htmlFor="comment" className='name-label'>Your Message</label>
            <textarea name="" className='message-area' id="comment" cols="30" rows="10"></textarea>
        </>
    )
}

export default Contact;
