import React, { Component, Fragment } from 'react';

class Layer extends Component {
    constructor(props) {
        super(props);
     }

    render() {
    const { isExpanded } = this.props;
        return (
            <Fragment>
             {this.props.name}
             {isExpanded ? this.props.description : null}
            </Fragment>
        );
    }
}

export default Layer;