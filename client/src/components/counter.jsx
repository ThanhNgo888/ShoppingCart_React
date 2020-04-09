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
        //use object destructing to pick the count property of this object(this.state) and storing it in a separate constant called "count"
        const { count } = this.state;
        return count === 0? <h1>Zero</h1> : count; 
    }
}
 
export default Counter;
