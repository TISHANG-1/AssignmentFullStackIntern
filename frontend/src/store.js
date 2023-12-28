import {createStore , combineReducers , applyMiddleware} from "redux"   ; 
import {thunk} from "redux-thunk" 
import {composeWithDevTools} from "redux-devtools-extension"   ; 
import { userReducer , getAllUserReducer } from "./reducer/userReducer";
 


const reducer = combineReducers({   
    users : getAllUserReducer, 
    user: userReducer, 
} ) ; 

let intialState = {   
} ;

const middleware = [thunk] ; 
const store = createStore(reducer , intialState , composeWithDevTools(applyMiddleware(...middleware))) ;  
 
export default store ; 
