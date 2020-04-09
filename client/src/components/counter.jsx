//imrc => tab
import React, { Component } from 'react';

//cc => tab
class Counter extends Component {
    state = { 
        count : 0
    };
    render() { 
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0? "badge-warning" : "badge-primary";
        return (
        <div>
            <span className={classes}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
        </div>
        );
    }

    //using a function that returns a value
    //if the property of this object equals zero, returns "Zero", otherwise returns the value of this object
    formatCount() {
        //use object destructing to pick the count property of this object(this.state) and storing it in a separate constant called "count"
        const { count } = this.state;
        return count === 0? <h6>Zero</h6> : count; 
    }
}
 
export default Counter;
