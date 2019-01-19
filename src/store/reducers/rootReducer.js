import { combineReducers } from 'redux'
import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { firestoreReducer } from 'redux-firestore'


//connected with coressponding reducer
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReducer;