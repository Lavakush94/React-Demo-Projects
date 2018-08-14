import React from 'react';

export default class Navbar extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand navbar-dark mb-0 h1">CartDemo</span>
                <span style = {{float : 'right', color : 'white'}}> 
                    <h3> 
                        <i className="fa fa-cart-plus" aria-hidden="true" />
                        <span style = {{marginLeft : '10px'}} className = "badge badge-pill badge-success"> 
                            {this.props.totalCount}
                        </span>
                    </h3>
                </span>
            </nav>
        )
    };
}