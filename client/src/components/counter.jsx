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
            <span>{ 2 + 2 }</span>
            <button>Increment</button>
        </div>
        );
    }
}
 
export default Counter;
