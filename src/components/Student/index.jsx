import React, { Component } from 'react';
import { connect } from "react-redux";
import { Typography } from '@material-ui/core';

class Student extends Component {
    render() {
        return (
            <>
                <Typography variant="h1" component="h2">
                    Name: {this.props.student.student.name}
                </Typography>
                <Typography variant="h1" component="h2">
                    Age: {this.props.student.student.age}
                </Typography>
            </>
        );
    }
}

export default connect((state) => ({
    student : state.student,
}))(Student);