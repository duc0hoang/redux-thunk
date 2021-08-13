import {SET_STUDENT} from '../contants/student'

const initialState = {
    student : {
        name:'hoang',
        age: 0
    }
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_STUDENT:
            state.student.age = state.student.age + payload;
            return {...state};
        default:
            return state;
    }
};

export default reducer;