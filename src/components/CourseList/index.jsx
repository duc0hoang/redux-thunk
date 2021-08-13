import React, { Component } from 'react';
import { Typography, Grid,Container } from '@material-ui/core';
import { connect } from "react-redux";
import CourseItem from '../CourseItem';

class CourseList extends Component {
    renderCourseList = () => this.props.courseList.map((course) => (
        <Grid key={course.maKhoaHoc} item sx={12} lg={4}>
            <CourseItem course={course} />
        </Grid>
    ))
    render() {
        return (
            <>
                <Typography variant="h1" component="h1">
                    Danh sách khóa học
                </Typography><Container maxWidth="lg">
                    <Grid container spacing={3}>
                        {this.props.courseList && this.renderCourseList()}
                    </Grid>
                </Container>
            </>
        );
    }
}

export default connect((state) => ({
    courseList: state.courses.courseList,
}))(CourseList);