import React from "react";
import { Link } from "react-router-dom";

//Import images
import Images from '../../importImages'

//Import style
import './header.css'

const Header =()=>{
    // let location = useLocation().pathname;
    
    // function checkActive(path){
    //     if (location === path){
    //         return "className='active'";
    //     }
    // }
    return (
        <>
            <header>
                <div className="header-top">
                    <img src={Images.Smartcheck} alt="smart check logo" className="logo" />
                </div>
                <div className="header-bottom">
                    <div className="navbar">
                        <Link className="active" to="/"><img src={Images.Home} alt="Home" /> <span className="text">Home</span></Link>
                        <Link to="/server"><img src={Images.Server} alt="Server" /> <span className="text">Server</span></Link>
                        <Link to="/application"><img src={Images.Application} alt="Application" /> <span className="text">Application</span></Link>
                    </div>
                    <div className="health-status">
                        <Link to="/">Check Health Status</Link>
                    </div>
                </div>
            </header>
        </>
    )
}


export default Header