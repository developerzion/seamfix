import React from "react";
import { Link } from "react-router-dom";


//Import style
import './server.css'

//Import components
import Header from "../Header/header";
import Images from "../../importImages";

const Dashboard =()=>{
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
                            <Link to="/">Create Server</Link>
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
                                    <td>SERVER NAME</td>
                                    <td>IP ADDRESS</td>
                                    <td>CPU(%)</td>
                                    <td>MEMORY(%)</td>
                                    <td>STORAGE(%)</td>
                                    <td>ACTION</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="tflex">
                                            <span className="circle-green">&nbsp;</span> <span>Server name goes here</span> 
                                        </div>
                                    </td>
                                    <td>IP Address goes here</td>
                                    <td>85.6</td>
                                    <td>73.9</td>
                                    <td>50</td>
                                    <td><Link to="">Edit</Link></td>
                                    <td><span className="fa fa-ellipsis-h rotate"></span></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <div className="tflex">                                        
                                            <span className="circle-green">&nbsp;</span> <span>Server name goes here</span> 
                                        </div>
                                    </td>
                                    <td>IP Address goes here</td>
                                    <td>85.6</td>
                                    <td>73.9</td>
                                    <td>50</td>
                                    <td><Link to="">Edit</Link></td>
                                    <td><span className="fa fa-ellipsis-h rotate"></span></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <div className="tflex">                                        
                                            <span className="circle-green">&nbsp;</span> <span>Server name goes here</span> 
                                        </div>
                                    </td>
                                    <td>IP Address goes here</td>
                                    <td>85.6</td>
                                    <td>73.9</td>
                                    <td>60</td>
                                    <td><Link to="">Edit</Link></td>
                                    <td><span className="fa fa-ellipsis-h rotate"></span></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>
                                        <div className="tflex">                                        
                                            <span className="circle-green rotate"></span> <span>Server name goes here</span> 
                                        </div>
                                    </td>
                                    <td>IP Address goes here</td>
                                    <td>85.6</td>
                                    <td>73.9</td>
                                    <td>40</td>
                                    <td><Link to="">Edit</Link></td>
                                    <td><span className="fa fa-ellipsis-h rotate"></span></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>
                                        <div className="tflex">                                        
                                            <span className="circle-red">&nbsp;</span> <span>Server name goes here</span> 
                                        </div>
                                    </td>                                        
                                    <td>IP Address goes here</td>
                                    <td>85.6</td>
                                    <td>73.9</td>
                                    <td>50</td>
                                    <td><Link to="">Edit</Link></td>
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