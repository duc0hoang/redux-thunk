import createAction from '.';
import {FETCH_COURSE_LIST} from '../contants/course';
import axios from 'axios';

export const fetchCourses = (dispatch) => {
    axios({
        method: 'GET',
        url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01'
    }).then((res) => {
        dispatch(createAction(FETCH_COURSE_LIST, res.data));
    }).catch((err) => {
        console.log(err);
    })
}