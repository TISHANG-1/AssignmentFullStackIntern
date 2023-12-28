import { GET_USER_REQUEST, CREATE_USER_ERROR , CREATE_USER_REQUEST, CREATE_USER_SUCCESS, GET_USER_ERROR , GET_USER_SUCCESS , UPDATE_USER_ERROR, UPDATE_USER_REQUEST , UPDATE_USER_SUCCESS } from "../constant/userConstant";  
import axios from "axios";
axios.defaults.withCredentials = true ; 
export const getAllUserAction = ()=>async(dispatch)=>{ 
       await dispatch({
        type:GET_USER_REQUEST , 
        payload: [], 
       }); 

       let link  = `http://localhost:4000/api/v1/users` ; 

       await axios.get(link).then(async(res)=>{ 
           dispatch({type : GET_USER_SUCCESS, 
           payload :res.data.users, 
           }) ;
       }) 
       .catch((error)=>{
          dispatch({type: GET_USER_ERROR, 
          payload: error,
        })
       })
}

export const userCreateAction = (formData)=>async(dispatch)=>{  
       console.log(formData); 
       await dispatch({type: CREATE_USER_REQUEST, 
       payload: []}) ;  
       const serializedFormData = JSON.stringify(formData); 
       console.log(serializedFormData)

       let link =`http://localhost:4000/api/v1/create-user` ;
       const config = {headers: {"Content-Type": "application/json"}} ;   
       await axios.post(link ,  serializedFormData, config ).then( async(res)=>{
           await dispatch({type: CREATE_USER_SUCCESS , 
          payload: res.data, }); 
       })
       .catch(async(err)=>{ 
        dispatch({type: CREATE_USER_ERROR, 
        payload: err , }); 
       })

}

export const userUpdateAction = (formData)=>async(dispatch)=>{ 
    await dispatch({type: UPDATE_USER_REQUEST, 
    payload: []}) ; 
    const serializedFormData = JSON.stringify(formData);

    console.log(formData) ; 

    let link =`http://localhost:4000/api/v1/update-user/${formData.id}` ;
    const config = {headers: {"content-Type": "application/json"}} ;   
    await axios.put(link , serializedFormData , config ).then(async(res)=>{
       await dispatch({type: UPDATE_USER_SUCCESS , 
       payload: res.data, }); 
    })
    .catch(async(err)=>{ 
     dispatch({type: UPDATE_USER_ERROR, 
     payload: err , }); 
    }) ; 

}