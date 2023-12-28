import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { userUpdateAction } from '../action/userAction';
import { useDispatch } from 'react-redux';

const UpdateUser = () => { 
  const location = useLocation() ;   
  const user = location.state.user ; 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  console.log(user) ; 
  useEffect(() => {
    // Set initial values when the user prop changes
    setName(user.name);
    setEmail(user.email);
    setGender(user.gender);
    setStatus(user.status);
  }, [user]);
  const dispatch = useDispatch() ; 
  const id = user._id;  
  const handleSubmit = () => {
    const updatedUser = {
      id ,      
      name, 
      email , 
      gender , 
      status,
    };

    dispatch(userUpdateAction(updatedUser));
  };

  return (
    <div>
      <h2>Update User</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Gender:
          <input type="text" value={gender} onChange={e => setGender(e.target.value)} />
        </label>
        <br />
        <label>
          Status:
          <input type="text" value={status} onChange={e => setStatus(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
          Update User
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;