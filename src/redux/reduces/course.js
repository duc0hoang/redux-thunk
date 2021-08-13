import {FETCH_COURSE_LIST} from '../contants/course'

const initialState = {
    courseList : null,
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_COURSE_LIST:
            state.courseList = payload;
            return {...state};
        default:
            return state;
    }
};

export default reducer;