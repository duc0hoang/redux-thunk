import {createStore, combineReducers, applyMiddleware} from 'redux';
import student from '../redux/reduces/student';
import courses from '../redux/reduces/course';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    student,
    courses,
});

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default store;