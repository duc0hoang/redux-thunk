import React, { Component } from 'react';
import Control from '../../components/Control';
import CourseList from '../../components/CourseList';
import Student from '../../components/Student';
import {connect} from 'react-redux';
import {fetchCourses} from '../../redux/actions/course'

class Home extends Component {
    render() {
        return (
            <div>
                {/* <Student />
                <Control /> */}
                <CourseList />
            </div>
        );
    }

    componentDidMount = () => {
        this.props.dispatch(fetchCourses);
    }
}

export default connect()(Home);