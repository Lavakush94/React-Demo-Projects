import React from 'react';

export default class Counter extends React.Component{
   
    // styles = {
    //     fontSize: 50, 
    //     fontWeight : "bold"
    // }

    //conditional rendering//
   

    


    render(){
        return (
            <div>
                {/* {
                    this.props.children
                } */}
                <span  className = {this.getBadgeClasses()}> {this.formatCount()} </span><br />
                <button 
                    style = {{margin: '10px'}}
                    className = "btn btn-secondary btn-sm" 
                    onClick = {() => this.props.onIncrement(this.props.counter)}
                > Increment </button>


                <button 
                    onClick = {() => this.props.onDelete(this.props.counter.id)}
                    style = {{margin: '10px'}}
                    className = "btn btn-outline-danger btn-sm" 
                > Delete </button>
                
            </div>
        );
    }
    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? 'zero' : value;
    }
}