import React from "react";
import { Link } from "react-router-dom";


//Import style
import './application.css'

//Import components
import Header from "../Header/header";
import Images from "../../importImages";

const Application =()=>{
    return (
        <>
            <Header />
            <section id="server" className="server">                

                <div className="serverBody">
                    <div className="form">
                        <div className="form-left">
                            <div className="field-body-input">
                                <label><span className="fa fa-search"></span></label>
                                <input type="text"  placeholder="Enter a search keyword" />
                            </div>
                            <div className="field-body-select">
                                <select>
                                    <option>Active Status</option>
                                    <option>Active</option>
                                    <option>Insctive</option>
                                    <option>All</option>
                                </select>
                            </div>    
                        </div> 
                        <div className="form-right">
                            <Link to="/">Add Application</Link>
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
                                    <td>APPLICATION NAME</td>
                                    <td>APPLICATION TYPE</td>
                                    <td>APPLICATION DCSC</td>
                                    <td>APPLICATION PORT</td>
                                    <td>END PORT</td>
                                    <td>HOST/SERVER</td>
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
                                    <td>Application type</td>
                                    <td>Application type</td>                                  
                                     <td>Application port</td>
                                     <td>End point</td>
                                     <td>10.1.101.53</td>
                                    <td><Link to="">Edit</Link></td>
                                    <td><span className="fa fa-ellipsis-h rotate"></span></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <div className="tflex">                                        
                                            <span className="circle-green">&nbsp;</span> <span>Application name goes here</span> 
                                        </div>
                                    </td>
                                    <td>Application type</td>
                                    <td>Application type</td>
                                    <td>Application port</td>
                                    <td>End Point</td>
                                    <td>10.1.101.53</td>
                                    <td><Link to="">Edit</Link></td>
                                    <td><span className="fa fa-ellipsis-h rotate"></span></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <div className="tflex">                                        
                                            <span className="circle-green">&nbsp;</span> <span>Application name goes here</span> 
                                        </div>
                                    </td>
                                    <td>Application type</td>
                                    <td>Application type</td>
                                    <td>Application port</td>
                                    <td>End point</td>
                                    <td>10.1.101.53</td>
                                    <td><Link to="">Edit</Link></td>
                                    <td><span className="fa fa-ellipsis-h rotate"></span></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>
                                        <div className="tflex">                                        
                                            <span className="circle-green"></span> <span>Application name goes here</span> 
                                        </div>
                                    </td>
                                    <td>Application type</td>
                                    <td>Application type</td>
                                    <td>Application port</td>
                                    <td>End point</td>
                                    <td>10.1.101.53</td>
                                    <td><Link to="">Edit</Link></td>
                                    <td><span className="fa fa-ellipsis-h rotate"></span></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>
                                        <div className="tflex">                                        
                                            <span className="circle-red">&nbsp;</span> <span>Application name goes here</span> 
                                        </div>
                                    </td>                                        
                                    <td>Application type</td>
                                    <td>Application type</td>
                                    <td>Application port</td>
                                    <td>End point</td>
                                    <td>10.1.101.53</td>
                                    <td><Link to="/">Edit</Link></td>
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


export default Application