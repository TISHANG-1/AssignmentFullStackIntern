import React, { useState } from 'react';
import { userCreateAction } from '../action/userAction';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState(''); 
  const dispatch = useDispatch() ;
  const  navigate  = useNavigate(); 
  const handleSubmit = async()=>{
    const newUser = {
      name,
      email,
      gender,
      status,
    };

    dispatch (userCreateAction(newUser));  


    // Clear form after submission
    // setName('');
    // setEmail('');
    // setGender('');
    // setStatus(''); 
    // // navigate('/'); 
  };

  return (
    <div>
      <h2>Create User</h2>
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
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUser;

