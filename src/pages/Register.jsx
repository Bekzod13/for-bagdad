import React, {useState} from 'react';
import './someStyle.css';


// import images
import registerBg from '../images/register.png';

const Register = () => {

    const [success, setSuccess] = useState(false);
    const [code, setCode] = useState(false);

    return (
        <>  
            <div className="register-hero">
                <img src={registerBg} alt="registerBg" />
            </div>
            <div className="header-main green-header">Ro’yxatdan o’tish / Sign up</div>   
            <div className="register-form">
                <form action=""> 
                    <label htmlFor="name" className="register-label">Ism / First name</label>
                    <input type="text" id="name" className="register-input" />
                    <label htmlFor="sur" className="register-label">Familiya / Last name</label>
                    <input type="text" id="sur" className="register-input" />
                    <label htmlFor="company" className="register-label">tashkilot / affiliation</label>
                    <input type="text" id="company" className="register-input" />
                    <label htmlFor="country" className="register-label">mamlakat / country</label>
                    <input type="text" id="country" className="register-input" />
                    <label htmlFor="email-address" className="register-label">E - mail</label>
                    <input type="text" id="email-address" className="register-input" />
                    <button type="submit" className="register-btn" onClick={() => setSuccess(!success)}>ro’yxatdan o’tish / sign up</button>
                    <p className={success ? "register-success done" : "register-success"}>(E - mailingizga kod yuborildi)</p>
                </form>
                    <label htmlFor="confirm-code" className="register-label">Tasdiqlovchi kod / Verfication code </label>
                    <input type="text" id="confirm-code" className="register-input" />
                    <button type="submit" className="register-btn" onClick={() => setCode(!code)}>yuborish / submit</button>
                    <p className={code ? "register-success done" : "register-success"}>Registratsiyadan muaffaqiyatli o’tdingiz / success</p>
            </div>
            <br /><br />
        </>
    )
}

export default Register
