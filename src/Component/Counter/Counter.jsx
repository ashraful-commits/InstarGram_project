import Hoc from '../Hoc/Hoc';

import React, { Component } from 'react';

export class Counter extends Component {
  render() {
    const { counter, inCress, decrease } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5 m-auto">
            <div className="card">
              <div className="header text-center">
                <h1>Counter</h1>
              </div>

              <div className="body text-center">
                <h1>{counter}</h1>
                <div className="button">
                  <button
                    onClick={inCress}
                    className="btn btn-success "
                  >
                    ++
                  </button>
                  <button
                    onClick={decrease}
                    className="btn btn-danger"
                  >
                    --
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hoc(Counter);
