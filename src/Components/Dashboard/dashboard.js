import React from "react";
import { Link } from "react-router-dom";


//Import style
import './dashboard.css'

//Import components
import Header from "../Header/header";
import Images from "../../importImages";

const Dashboard =()=>{
    return (
        <>
            <Header />
            <section id="dashbaord" className="dashbaord">

                <div className="dashcards">

                    <div className="card">
                        <h4>Application Status</h4>
                        
                        <div className="stats">
                            <div className="stat">
                                <span className="bullet border">10</span>
                            </div>
                            <div className="stat">
                                <span className="bullet green">6</span>
                            </div>
                            <div className="stat">
                                <span className="bullet red">4</span>
                            </div>
                        </div>
                        <div className="text">
                            <span>All</span>
                            <span>Available</span>
                            <span>Critical</span>
                        </div>
                    </div>
                    <div className="card">
                        <h4>Servers</h4>
                        <div className="stats">
                            <div className="stat">
                                <span className="bullet border">4</span>
                            </div>
                            <div className="stat">
                                <span className="bullet green">2</span>
                            </div>
                            <div className="stat">
                                <span className="bullet gold">2</span>
                            </div>
                        </div>
                        <div className="text">
                            <span>All</span>
                            <span>Active</span>
                            <span>Inactive</span>
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
                                    <td className="blue">3 Servers</td>
                                    <td>11/12/20 3: 57:29 PM</td>
                                    <td>
                                        <div className="tflex">
                                            <span className="circle-green"><i className="fa fa-check"></i></span> <span>Healthy</span>
                                        </div>
                                     </td>
                                    <td><Link to="">View Result</Link></td>
                                    <td><span className="fa fa-ellipsis-h rotate"></span></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <div className="tflex">                                        
                                            <span className="circle-green">&nbsp;</span> <span>Application name goes here</span> 
                                        </div>
                                    </td>
                                    <td className="blue">2 Servers</td>
                                    <td>11/12/20 3: 57:29 PM</td>
                                    <td><img src={Images.Triangle} alt="Triangle" /></td>
                                    <td><Link to="">View Result</Link></td>
                                    <td><span className="fa fa-ellipsis-h rotate"></span></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <div className="tflex">                                        
                                            <span className="circle-green">&nbsp;</span> <span>Application name goes here</span> 
                                        </div>
                                    </td>
                                    <td className="blue">2 Servers</td>
                                    <td>11/12/20 3: 57:29 PM</td>
                                    <td><span className="circle-green"><i className="fa fa-check"></i></span></td>
                                    <td><Link to="">View Result</Link></td>
                                    <td><span className="fa fa-ellipsis-h rotate"></span></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>
                                        <div className="tflex">                                        
                                            <span className="circle-green"></span> <span>Application name goes here</span> 
                                        </div>
                                    </td>
                                    <td className="blue">3 Servers</td>
                                    <td>11/12/20 3: 57:29 PM</td>
                                    <td><span className="circle-green"><i className="fa fa-check"></i></span></td>
                                    <td><Link to="">View Result</Link></td>
                                    <td><span className="fa fa-ellipsis-h rotate"></span></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>
                                        <div className="tflex">                                        
                                            <span className="circle-red">&nbsp;</span> <span>Application name goes here</span> 
                                        </div>
                                    </td>                                        
                                    <td className="blue">3 Servers</td>
                                    <td>11/12/20 3: 57:29 PM</td>
                                    <td><span className="circle-green"><i className="fa fa-check"></i></span></td>
                                    <td><Link to="">View Result</Link></td>
                                    <td><span className="fa fa-ellipsis-h rotate"></span></td>
                                </tr>
                               
                                
                            </tbody>
                        </table>                      

                    </div>
                    <div className="pagination">

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

                    </div>

                </div>

            </section>
        </>
    )
}


export default Dashboard