import React from 'react';

export default class LoginForm extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <a className="navbar-brand" href="/">
                             ZotoAds
                        </a>
                    </div>
                        <ul className="nav navbar-nav navbar-right">
                            <button type="button" className="btn btn-danger" style = {{margin: "10px"}}> Request Access</button>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}