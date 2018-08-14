import React from 'react';

export default class ScheduleCost extends React.Component{
    render(){
        return(
            <div className = "container">
                <div class="card">
                    <div className="card-header">
                        <i className="fa fa-cog" aria-hidden="true"></i>
                            <span style = {{marginLeft: "5px"}}> Schedule and Cost </span>
                    </div>
                    <div className="card-body">
                        <h6 className = "card-title">DEFINE START AND END DATES </h6>
                    </div>
                    <div className = "card-body">
                        <h6 className = "card-title">Start Date</h6>
                        <input type = "date" className = "from-control" id = "sel1" />
                    </div>
                    <div className = "card-body">
                        <h6 className = "card-title">End Date</h6>
                        <input type = "date" className = "from-control" id = "sel1" />
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