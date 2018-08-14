import React from 'react';
import Counter from './counter';

export default class Counters extends React.Component{
   

    render(){
        return(
            <div align = "center">
                <div style = {{border: '5px solid green', margin: '10px' , backgroundColor : 'lightblue'} }>
                    {this.props.counters.map(counter => (
                    <Counter 
                        key = {counter.id} 
                        onDelete = {this.props.onDelete}
                        counter = {counter}
                        onIncrement = {this.props.onIncrement}
                    >
                    {/* <h4>Counter No. # {counter.id}</h4> */}
                    </Counter>
                    ))}
                </div>
                <button className = "btn btn-danger btn-block" onClick = {this.props.onReset}> Reset </button>
            </div>
        );
    }
}