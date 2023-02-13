import React, { Component } from 'react';

const Hoc = (orginalComponent) => {
  class HocOr extends Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0,
      };
    }
    handelIncress = () => {
      this.setState((prevState) => ({
        ...prevState,
        counter: prevState.counter + 1,
      }));
    };
    handelDecress = () => {
      this.setState((prevState) => ({
        ...prevState,
        counter: prevState.counter - 1,
      }));
    };
    render() {
      const { counter } = this.state;
      return (
        <orginalComponent
          counter={counter}
          inCress={this.handelIncress}
          decrease={this.handelDecress}
        />
      );
    }
  }
  return HocOr;
};

export default Hoc;
