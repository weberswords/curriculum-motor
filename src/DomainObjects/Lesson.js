import React, { Component, Fragment } from 'react';

class Lesson extends Component {
    constructor(props) {
        super(props);
     }

    render() {
        return (
            <Fragment>
             {this.props.name}
             {this.props.dateCreated}
             // forEach standard
             {this.props.instructions}
             {this.props.assessment}
             {this.props.reflection}
            </Fragment>
        );
    }
}

export default Lesson;