import React from "react";
import './Form.css'
import Google from '../../assets/images/img/google.png'
import Apps from '../../assets/images/img/app.png'
import Xel from '../../assets/images/img/xxx.png'
import Ladiees from '../../assets/images/img/llady.png';
import Rou from '../../assets/images/img/rou.png';
import Back from '../../assets/images/img/back.png'


function Form () {
    return (
        <div className="form__container">
            <div className="form__box">
            <div className="form__section">
                <h1>Get Our Apps, Now!</h1>
                <p>Reach out our apps everywhere and 
                    everytime <br /> with Sinauw Mobile Application.</p>
                    <img src={Google} alt="img" />
                    <img src={Apps} alt="img" />
            </div>
            <div className="form__buttons">
               <img src={Ladiees} alt="img" />
               <p>Grow Your Skill, Join Now!</p>
              
            </div>
            <div className="form__line">
                <img src={Xel} alt="png" />
                <img className="form__im" src={Rou} alt="png" />
            </div>
            <img className="back" src={Back} alt="png" />
            </div>
            

        </div>

    )
}
export default Form;