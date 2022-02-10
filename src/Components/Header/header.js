import React from "react";
import { NavLink } from "react-router-dom";

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
            {/* Check status popup  */}
            <div className="headerPopup">
                <div className="newApplication">
                    <h4>Conduct Health Check</h4>
                    <form>
                        <div className="form">
                            <div className="formbody">
                                <div className="cleft">
                                    <h5>Applications</h5>
                                </div>
                                <div className="cright">
                                    <div className="checkbox">
                                        <input type="checkbox" />
                                        <label> All Applications</label>
                                    </div>
                                    <div className="list">
                                        <p>Select Applications</p>
                                        <div className="ip">
                                            <p><input type="checkbox" /> App name 1</p>
                                            <p><input type="checkbox" /> App name 2</p>
                                            <p><input type="checkbox" /> App name 3</p>
                                            <p><input type="checkbox" /> App name 4</p>
                                        </div>
                                    </div>
                                </div>                                                             
                            </div>
                            <div className="formbody padtop">
                                <div className="cleft">
                                    <h5>Servers</h5>
                                </div>
                                <div className="cright">
                                    <div className="checkbox">
                                        <input type="checkbox" />
                                        <label> All Servers</label>
                                    </div>
                                    <div className="list">
                                        <p>Select Servers</p>
                                        <div className="ip">
                                            <p><input type="checkbox" /> Server 1</p>
                                            <p><input type="checkbox" /> Server 2</p>
                                            <p><input type="checkbox" /> Server 3</p>
                                            <p><input type="checkbox" /> Server 4</p>
                                        </div>
                                    </div>
                                </div>                                                             
                            </div>
                        </div>
                        <div className="popbuttons">
                            <span onClick={()=> document.querySelector(".headerPopup").classList.remove("active")} className="cancel">Cancel</span>
                            <span onClick={()=> {
                                document.querySelector(".headerPopup").classList.remove("active");
                                document.querySelector(".healthStatusPop").classList.add("active")
                            }} className="chs">Check Health Status</span>
                        </div>
                    </form>
                </div>
            </div>

            {/* Check Health Status Popup */}
            <div className="healthStatusPop">
                <div className="newApplication">
                    <h4>Health Check Result</h4>
                    
                    <div className="healthCards">
                        <div className="card">                    
                            <div className="tips">
                                <div className="tips-data">
                                    <span>App Name 1</span> 
                                    <span><span className="circle-green-small"></span> </span> 
                                </div>
                                <div className="tips-data">
                                    <span>End point</span> 
                                </div>
                                <div className="tips-data">
                                    <span><span className="fa fa-arrow-right"></span> Server 1: </span> 
                                    <span><span className="circle-green-small"></span> </span> 
                                </div>
                                <div className="tips-data">
                                    <span><span className="fa fa-arrow-right"></span> Server 2: </span> 
                                    <span> <span className="fa fa-times colorRed"></span> </span>  
                                </div>  
                                <div className="tips-data">
                                    <span><span className="fa fa-arrow-right"></span> Server 3: </span> 
                                    <span><span className="fa fa-check"></span></span> 
                                </div> 
                                <div className="tips-data">
                                    <span><span className="fa fa-arrow-right"></span> Server 4: </span> 
                                    <span><span className="fa fa-check"></span></span> 
                                </div>                                                   
                            </div>                                
                        </div>
                        <div className="card">
                            <div className="tips">
                                <div className="tips-data">
                                    <span>App Name 1</span> 
                                    <span><span className="circle-green-small"></span> </span> 
                                </div>
                                <div className="tips-data">
                                    <span>End point</span> 
                                </div>
                                <div className="tips-data">
                                    <span><span className="fa fa-arrow-right"></span> Server 1: </span> 
                                    <span><span className="circle-green-small"></span> </span> 
                                </div>
                                <div className="tips-data">
                                    <span><span className="fa fa-arrow-right"></span> Server 2: </span> 
                                    <span> <span className="fa fa-times colorRed"></span> </span>  
                                </div>  
                                <div className="tips-data">
                                    <span><span className="fa fa-arrow-right"></span> Server 3: </span> 
                                    <span><span className="fa fa-check"></span></span> 
                                </div> 
                                <div className="tips-data">
                                    <span><span className="fa fa-arrow-right"></span> Server 4: </span> 
                                    <span><span className="fa fa-check"></span></span> 
                                </div>                                                   
                            </div>
                        </div>
                    </div>

                    <div className="popbuttons">
                        <span onClick={()=> {
                            document.querySelector(".healthStatusPop").classList.remove("active");
                        }} className="chs">Cancel</span>
                    </div>
                </div>
            </div>

            {/* Start Header Section  */}
            <header> 
                <div className="header-top">
                    <img src={Images.Smartcheck} alt="smart check logo" className="logo" />
                </div>
                <div className="header-bottom">
                    <div className="navbar">
                        <NavLink activeClassName="active" to="/"><img src={Images.Home} alt="Home" /> <span className="text">Home</span></NavLink>
                        <NavLink activeClassName="active" to="/server"><img src={Images.Server} alt="Server" /> <span className="text">Server</span></NavLink>
                        <NavLink activeClassName="active" to="/application"><img src={Images.Application} alt="Application" /> <span className="text">Application</span></NavLink>
                    </div>
                    <div className="health-status">
                        <span onClick={()=> document.querySelector(".headerPopup").classList.add("active")}>Check Health Status</span>
                    </div>
                </div>
            </header>
        </>
    )
}


export default Header