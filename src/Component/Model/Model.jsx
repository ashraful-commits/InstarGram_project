import React from 'react';
import './Model.scss';
const Model = ({ hide, children }) => {
  //   const hendelCloseModel = () => {
  //     hide(false);
  //   };
  return (
    <div className="model">
      <div className="model_content">{children}</div>
      <div className="blur">
        <button onClick={() => hide(false)} className="close_btn">
          <i class="bx bx-x"></i>
        </button>
      </div>
    </div>
  );
};

export default Model;
