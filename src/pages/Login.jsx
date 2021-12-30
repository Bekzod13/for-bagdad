import React from 'react';
import './someStyle.css';

const Login = () => {
    return (
        <>
            <div className="header-main">Kirish</div>   
            <form action="">
                <div className="log-box">
                    <p>E-mail</p>
                    <input type="text" name="" id="" />
                </div>
                <div className="log-box">
                    <p>code</p>
                    <input type="text" name="" id="" />
                </div>
                <button type="submit" className='log-btn'>login</button><br />
                <a href="#" className="reset-link">qayta code olish</a>
            </form>
        </>
    )
}

export default Login
