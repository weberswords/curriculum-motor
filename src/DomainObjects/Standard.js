import React, { Component, Fragment } from 'react';

class Standard extends Component {
    constructor(props) {
        super(props);
     }

    render() {
        return (
            <Fragment>
            {this.props.number}
              {this.props.description}
              {this.props.daysTaught}
              {this.props.lessonsTaught}
            </Fragment>
        );
    }
}

export default Standard;