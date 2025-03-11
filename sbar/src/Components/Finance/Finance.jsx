import React from "react";
import "./Finance.css";
import { FaCarBattery } from "react-icons/fa6";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Finance =()=>{
    return(
        <div className="container">
            <div className="boxesa">
                <div className="boxesc">
                    <div className="senior">Senior Finance Executive Revenue To Record CA Freshers</div>
                    <div className="academy">Unacademy  3.0 |1945 Reviews</div>
                    <div className="battery"><FaCarBattery /> 0 - 2 years     </div>
                    <div className="rupee"> | <MdOutlineCurrencyRupee /> Not Disclosed</div>
                    <div className="location"><CiLocationOn /> Bengaluru</div>
                    <div className="boxese">
                        <div className="picture">
                        <img src="https://play-lh.googleusercontent.com/DT0jm91vA_rOkxwatXhI4yVpjU4KI0augje6ZJGYxEyNjKvIhcQt8npiLHf5-ydclsqe"/>
                        </div>
                        <div className="send">Send me job like this</div>
                    </div>
                    
                </div>
                <div className="boxesd">
                    <div className="script">Job description</div>
                    <div className="bangalore">Unacademy - Bangalore</div>
                    <div className="position">Position:Senior Finance Executive Revenue</div>
                    <div className="conduct">Job Description</div>
                </div>
            </div>
            <div className="boxesb"></div>
            
        </div>
    );
};

export default Finance;