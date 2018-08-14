import React from 'react';

export default class TargettingOption extends React.Component{
    render(){
        return(
            <div className = "container">
                <div class="card">
                    <div className="card-header">
                        <i className="fa fa-cog" aria-hidden="true"></i>
                            <span style = {{marginLeft: "5px"}}> Targetting Options </span>
                    </div>
                    <div className="card-body">
                        <h6 className="card-title"> Select Category</h6>
                        <div className="form-group">
                            <select className="form-control" id="sel1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>

                    <div className="card-body">
                        <h6 className="card-title">Carrier</h6>
                        <div className="form-group">
                            <select className="form-control" id="sel1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>

                    <div className="card-body">
                        <h6 className="card-title">Gender</h6>
                        <div className="form-group">
                            <select className="form-control" id="sel1">
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>

                    <div className="card-body">
                        <h6 className="card-title">High End Devices</h6>
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