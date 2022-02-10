import React from "react";
import { Link } from "react-router-dom";


//Import style
import './dashboard.css'

//Import components
import Header from "../Header/header";
import Images from "../../importImages";

const Dashboard =()=>{
    function deactivate(){
        document.querySelector(".deactivate").classList.add("active")
    }
    return (
        <>
            <Header />

            <div className="deactivate">
                <div className="d-alert">
                    <span className="fa fa-times remove" onClick={()=>document.querySelector(".deactivate").classList.remove("active")}></span>

                    <h4>Deactivate Server</h4>
                    <p>Are you sure you want to deactivate <b>Server name 1?</b> if you <b>Continue you will no longer receive data from this server</b></p>
                    <div className="btn">
                        <span className="btn-dactive">Deactivate</span>
                    </div>
                </div>
            </div>
            <section id="dashbaord" className="dashbaord">

                <div className="dashcards">

                    <div className="card">
                        <h4>Application Status</h4>
                        
                        <div className="stats">
                            <div className="stat">
                                <span className="bullet border">10</span>
                                <br/><span className="text">All</span>
                            </div>
                            <div className="stat">
                                <span className="bullet green">6</span>
                                <br/><span className="text">Available</span>
                            </div>
                            <div className="stat">
                                <span className="bullet red">4</span>
                                <br/><span className="text">Critical</span>
                            </div>
                        </div>
                       
                    </div>
                    <div className="card">
                        <h4>Servers</h4>
                        <div className="stats">
                            <div className="stat">
                                <span className="bullet border">4</span>
                                <br/><span className="text">All</span>
                            </div>
                            <div className="stat">
                                <span className="bullet green">2</span>
                                <br/><span className="text">Active</span>
                            </div>
                            <div className="stat">
                                <span className="bullet gold">2</span>
                                <br/><span className="text">Inactive</span>
                            </div>
                        </div>
                     
                    </div>
                    <div className="card">
                        <h4>Health check counts</h4>
                        <div className="count">
                            <h1>60</h1>
                            <span>Counts</span>
                        </div>
                    </div>
                </div>


                <div className="dashBody">

                    <div className="form">
                        <div className="field-body-input">
                            <label><span className="fa fa-search"></span></label>
                            <input type="text"  placeholder="Enter a search keyword" />
                        </div>
                        <div className="field-body-select">
                            <select>
                                <option>All Application</option>
                                <option>Application name 1</option>
                                <option>Application name 2</option>
                            </select>
                        </div>
                        <div className="field-body-select">
                            <select>
                                <option>All Servers</option>
                                <option>Server 1</option>
                                <option>Server 2</option>
                            </select>
                        </div>
                        <div className="field-body-select">
                            <select>
                                <option>Health Check Status</option>
                                <option>All status</option>
                                <option>Healthy</option>
                                <option>Critical</option>
                            </select>
                        </div>

                    </div>

                    <div className="table-body">
                        <div className="table-top">
                            <img src={Images.Pdf } alt="PDF" />
                            <img src={Images.Xls } alt="xls" />
                            <span>Showing 10 of 5000 entries</span>

                        </div>
                        <table cellSpacing="0">
                            <thead>
                                <tr>
                                    <td>S/N</td>
                                    <td>APPLICATION</td>
                                    <td>SERVER MAPPED</td>
                                    <td>LAST SCAN DATE</td>
                                    <td>STATUS</td>
                                    <td>ACTION</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="tflex">
                                            <span className="circle-green">&nbsp;</span> <span>Application name goes here</span> 
                                        </div>
                                    </td>
                                    <td>
                                        <div className="serverTips">
                                            <span className="blue">3 Servers</span>
                                            <div className="sTooltips">
                                                <div className="tips">
                                                    <div className="tips-data">
                                                        <span><span className="fa fa-arrow-right"></span> Server 1: </span> 
                                                        <span><span className="circle-green-small"></span> Running </span> 
                                                    </div>
                                                    <div className="tips-data">
                                                        <span><span className="fa fa-arrow-right"></span> Server 2: </span> 
                                                        <span> <span className="circle-green-small"></span> Running </span> 
                                                    </div>
                                                    <div className="tips-data">
                                                        <span><span className="fa fa-arrow-right"></span> Server 3: </span> 
                                                        <span><span className="circle-green-small"></span> Running </span> 
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>11/12/20 3: 57:29 PM</td>
                                    <td>
                                        <div className="tflex">
                                            <span className="circle-green"><i className="fa fa-check"></i></span> <span>Healthy</span>
                                        </div>
                                     </td>
                                    <td><Link to="">View Result</Link></td>
                                    <td>
                                        <div className="tips">
                                            <span className="fa fa-ellipsis-h rotate"></span>
                                            <span className="tooltip" onClick={ deactivate }>Deactivate</span>
                                        </div> 
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <div className="tflex">                                        
                                            <span className="circle-green">&nbsp;</span> <span>Application name goes here</span> 
                                        </div>
                                    </td>
                                    <td>
                                        <div className="serverTips">
                                            <span className="blue">3 Servers</span>
                                            <div className="sTooltips">
                                                <div className="tips">
                                                    <div className="tips-data">
                                                        <span><span className="fa fa-arrow-right"></span> Server 1: </span> 
                                                        <span><span className="circle-green-small"></span> Running </span> 
                                                    </div>
                                                    <div className="tips-data">
                                                        <span><span className="fa fa-arrow-right"></span> Server 2: </span> 
                                                        <span> <span className="fa fa-times colorRed"></span> Critical </span> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>11/12/20 3: 57:29 PM</td>
                                    <td><img src={Images.Triangle} alt="Triangle" /></td>
                                    <td><Link to="">View Result</Link></td>
                                    <td>
                                        <div className="tips">
                                            <span className="fa fa-ellipsis-h rotate"></span>
                                            <span className="tooltip" onClick={ deactivate }>Deactivate</span>
                                        </div>     
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <div className="tflex">                                        
                                            <span className="circle-green">&nbsp;</span> <span>Application name goes here</span> 
                                        </div>
                                    </td>
                                    <td>
                                        <div className="serverTips">
                                            <span className="blue">3 Servers</span>
                                            <div className="sTooltips">
                                                <div className="tips">
                                                    <div className="tips-data">
                                                        <span><span className="fa fa-arrow-right"></span> Server 1: </span> 
                                                        <span><span className="circle-green-small"></span> Running </span> 
                                                    </div>
                                                    <div className="tips-data">
                                                        <span><span className="fa fa-arrow-right"></span> Server 2: </span> 
                                                        <span><span className="circle-green-small"></span> Running </span> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>11/12/20 3: 57:29 PM</td>
                                    <td><span className="circle-green"><i className="fa fa-check"></i></span></td>
                                    <td><Link to="">View Result</Link></td>
                                    <td>
                                        <div className="tips">
                                            <span className="fa fa-ellipsis-h rotate"></span>
                                            <span className="tooltip" onClick={ deactivate }>Deactivate</span>
                                        </div>     
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>
                                        <div className="tflex">                                        
                                            <span className="circle-green"></span> <span>Application name goes here</span> 
                                        </div>
                                    </td>
                                    <td>
                                        <div className="serverTips">
                                            <span className="blue">3 Servers</span>
                                            <div className="sTooltips">
                                                <div className="tips">
                                                    <div className="tips-data">
                                                        <span><span className="fa fa-arrow-right"></span> Server 1: </span> 
                                                        <span><span className="circle-green-small"></span> Running </span> 
                                                    </div>
                                                    <div className="tips-data">
                                                        <span><span className="fa fa-arrow-right"></span> Server 2: </span> 
                                                        <span><span className="circle-green-small"></span> Running </span> 
                                                    </div>
                                                    <div className="tips-data">
                                                        <span><span className="fa fa-arrow-right"></span> Server 3: </span> 
                                                        <span> <span className="fa fa-check"></span> Down </span> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>11/12/20 3: 57:29 PM</td>
                                    <td><span className="circle-green"><i className="fa fa-check"></i></span></td>
                                    <td><Link to="">View Result</Link></td>
                                    <td>
                                        <div className="tips">
                                            <span className="fa fa-ellipsis-h rotate"></span>
                                            <span className="tooltip" onClick={ deactivate }>Deactivate</span>
                                        </div>                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>
                                        <div className="tflex">                                        
                                            <span className="circle-red">&nbsp;</span> <span>Application name goes here</span> 
                                        </div>
                                    </td>                                        
                                    <td>
                                        <div className="serverTips">
                                            <span className="blue">3 Servers</span>
                                            <div className="sTooltips">
                                                <div className="tips">
                                                    <div className="tips-data">
                                                        <span><span className="fa fa-arrow-right"></span> Server 1: </span> 
                                                        <span><span className="circle-green-small"></span> Running </span> 
                                                    </div>
                                                    <div className="tips-data">
                                                        <span><span className="fa fa-arrow-right"></span> Server 2: </span> 
                                                        <span><span className="circle-green-small"></span> Running </span> 
                                                    </div>                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>11/12/20 3: 57:29 PM</td>
                                    <td><span className="circle-green"><i className="fa fa-check"></i></span></td>
                                    <td><Link to="">View Result</Link></td>
                                    <td>
                                        <div className="tips">
                                            <span className="fa fa-ellipsis-h rotate"></span>
                                            <span className="tooltip" onClick={ deactivate }>Deactivate</span>
                                        </div>      
                                    </td>
                                </tr>
                               
                                
                            </tbody>
                        </table>                      

                    </div>
                    {/* <div className="pagination">

                        <div className="buttons">
                            <Link to="/">PREVIOUS</Link>
                            <Link className="active" to="/">1</Link>
                            <Link to="/">2</Link>
                            <Link to="/">3</Link>
                            <Link to="/">4</Link>
                            <Link to="/">5</Link>
                            <Link to="/">...</Link>
                            <Link to="/">NEXT</Link>
                        </div>

                    </div> */}

                </div>

            </section>
        </>
    )
}


export default Dashboard