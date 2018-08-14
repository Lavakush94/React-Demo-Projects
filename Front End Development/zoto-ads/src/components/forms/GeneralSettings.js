import React from 'react';

export default class GeneralSettings extends React.Component{
    render(){
        return(
            <div className = "container">
                <div className="card">
                    <div className="card-header">
                        <i className="fa fa-cog" aria-hidden="true"></i>
                            <span style = {{marginLeft: "5px"}}> General Settings </span>
                    </div>
                    <div className="card-body">
                        <h6 className="card-title">Special title treatment</h6>
                        <div className="form-group">
                            <select className="form-control" id="sel1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>
                    <div className = "card-body">
                        <h6 className = "card-title">Compaign Name</h6>
                        <input type = "text" className = "from-control" id = "sel1" />
                    </div>
                    <div className="card-body">
                        <h6 className="card-title">Special title treatment</h6>
                        <div className="form-group">
                            <select className="form-control" id="sel1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}