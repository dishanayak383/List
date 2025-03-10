import React from "react";
import "./Sbar.css"
import { FiSearch } from "react-icons/fi";


const Sbar=()=>{
    return(
        <div className="container1">
            <div className="img">
                <img src="https://media.licdn.com/dms/image/v2/D5612AQErUfS_wXBSmw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1726585204063?e=2147483647&v=beta&t=SimQIomr-Im1c41Q1VB1Huh4W19OEHK-JMNDyLTSnQA"/>
                <div className="job">Jobs</div>
                <div className="company">Compaines</div>
                <div className="service">Services</div>
                <div className="box1">
                    <div className="search">Search jobs here</div>
                    <div className="box2">
                        <div className="icon"><FiSearch /></div>
                    </div>
                </div>
                <div className="box3">
                    <div className="login">Login</div>
                </div>
                <div className="box4">
                    <div className="register">Register</div>
                </div>
                <div className="employee">For employers</div>
            </div>
        </div>
            
                
            
    );
};
export default Sbar;