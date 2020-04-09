//imrc => tab
import React, { Component } from 'react';

//cc => tab
class Counter extends Component {
    state = { 
        count : 0
    };
    render() { 
        return (
        <div>
            <span>{this.formatCount()}</span>
            <button>Increment</button>
        </div>
        );
    }

    //using a function that returns a value
    //if the property of this object equals zero, returns "Zero", otherwise returns the value of this object
    formatCount() {
        return this.state.count === 0? 'Zero' : this.state.count; 
    }
}
 
export default Counter;
