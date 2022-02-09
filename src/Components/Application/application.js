import React from "react";
import { Link } from "react-router-dom";


//Import style
import './application.css'

//Import components
import Header from "../Header/header";
import Images from "../../importImages";

const Application =()=>{

    function onSubmit(e){
        e.preventDefault()
    }
    return (
        <>
            <Header />
            <div className="applicationPopup">
                <div className="newApplication">
                    <h4>Define Application</h4>
                    <form onSubmit={onSubmit}>
                        <div className="form">
                            <div className="formbody">
                                <div className="form-group">
                                    <label>Application Name</label>
                                    <input type="text" required />
                                </div>
                                <div className="form-group">
                                    <label>Application Type</label>
                                    <input type="text" required/>
                                </div>
                                <div className="form-group">
                                    <label>Application DCSC</label>
                                    <input type="text" required/>
                                </div>
                                <div className="form-group">
                                    <label>Application Port</label>
                                    <input type="text" required/>
                                </div>
                                <div className="form-group">
                                    <label>End Point</label>
                                    <input type="text" required/>
                                </div>
                                <div className="form-group">
                                    <label>Host/application</label>
                                    <input type="checkbox" required/>
                                </div> 

                                <div className="selectApp">
                                    <span>Select Application</span>
                                    <div className="ip">
                                        <p><input type="checkbox" /> 10.1.101.53</p>
                                        <p><input type="checkbox" /> 10.1.101.54</p>
                                        <p><input type="checkbox" /> 10.1.101.55</p>
                                        <p><input type="checkbox" /> 10.1.101.56</p>
                                    </div>
                                </div>                               
                            </div>
                        </div>
                        <div className="buttons">
                            <span onClick={()=> document.querySelector(".applicationPopup").classList.remove("active")} className="cancel">Cancel</span>
                            <button className="create">Create</button>
                        </div>
                    </form>
                </div>
            </div>
            <section id="application" className="application">                

                <div className="applicationBody">
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
                                    <option>Inactive</option>
                                    <option>All</option>
                                </select>
                            </div>    
                        </div> 
                        <div className="form-right">
                            <span onClick={()=> document.querySelector(".applicationPopup").classList.add("active")}>Add Application</span>
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
                                    <td>HOST/application</td>
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