import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { connect } from "react-redux";
import createAction from '../../redux/actions';
import {SET_STUDENT} from '../../redux/contants/student';

class Control extends Component {
    onIncreaseAge = () => {
        this.props.dispatch(createAction(SET_STUDENT,1));
    }
    render() {
        return (
            <Button variant="contained" color="primary" onClick={this.onIncreaseAge}>
                +
            </Button>
        );
    }
}

export default connect()(Control);