import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Parts = Page => {
  return props => (
    <div className="page">
      <ReactCSSTransitionGroup
        transitionName="SlideIn"
        transitionAppear={true}
        transitionAppearTimeout={1900}
        transitionEnterTimeout={2200}
        transitionLeaveTimeout={2000}
      >
        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>
  );
};

export default Parts;
