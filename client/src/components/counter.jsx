//imrc => tab
import React, { Component } from "react";

//cc => tab
class Counter extends Component {
  state = {
    count:0
  };
  // =================================================================
  //helper method
  handleIncrement= () => {
    this.setState({value: this.state.value + 1});
  }
  // =================================================================
  render() {
      console.log("prop", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">
          Increment
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
