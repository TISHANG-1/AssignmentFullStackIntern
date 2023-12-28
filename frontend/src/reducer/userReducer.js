import { GET_USER_REQUEST, CREATE_USER_ERROR , CREATE_USER_REQUEST, CREATE_USER_SUCCESS, GET_USER_ERROR , GET_USER_SUCCESS , UPDATE_USER_ERROR, UPDATE_USER_REQUEST , UPDATE_USER_SUCCESS } from "../constant/userConstant";  


export const getAllUserReducer = (state = {users: []} , action)=>{ 
    switch(action.type){ 
         case GET_USER_REQUEST: 
          return{ 
              ...state, 
              loading: true ,
              users:[], 
          }
          case GET_USER_SUCCESS:
            return { 
                ...state, 
                  loading: false, 
                  users: action.payload, 
                  }
          case GET_USER_ERROR: 
             return{ 
                 ...state,
                 loading: false, 
                 error: action.payload, 
             } 
          default: 
           return {
            ...state, 
           }
    }
}

export const  userReducer = (state= {user : []} , action)=>{ 
    switch(action.type){ 
        case CREATE_USER_REQUEST, 
             UPDATE_USER_REQUEST: 
            return{ 
                ...state , 
                 loading: true , 
                 user: [] ,
            }
        case CREATE_USER_SUCCESS, UPDATE_USER_SUCCESS: 
        return {
            ...state ,
              loading: false, 
              user: action.payload, 
        }  
        case CREATE_USER_ERROR, UPDATE_USER_ERROR: 
        return {
            ...state, 
             loading: false , 
             error: action.payload, 
        }
        default: 
        return{ 
             ...state,
        }
    }  

}