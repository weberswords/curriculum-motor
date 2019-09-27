import React, { Component, Fragment } from 'react';
import Calendar from '../DomainObjects/Calendar.js';

class CenterPane extends Component {
    constructor(props) {
        super(props);
     }

    render() {
        return (
            <Fragment>
                <Calendar/>
            </Fragment>
        );
    }
}

export default CenterPane;