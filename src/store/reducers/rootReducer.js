import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';


//connected with coressponding reducer
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReducer;