import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUserAction } from '../action/userAction';
import './User.css';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const { users, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onEditUser = (user) => {
    navigate('/update-user', { state: { user } });
  };

  const exportToCSV = () => {
    // Convert user data to CSV format
    const csvData = users
      .map((user) => `${user._id},${user.name},${user.email},${user.gender},${user.status}`)
      .join('\n');

    // Create a Blob with the CSV data
    const blob = new Blob([`ID,Name,Email,Gender,Status\n${csvData}`], { type: 'text/csv' });

    // Create a link element and trigger a download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'users.csv';
    link.click();
  };

  useEffect(() => {
    dispatch(getAllUserAction());
  }, [dispatch]);

  return (
    <Fragment>
      {loading || !users || !users.length ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>All Users</h2>
          {users.map((user) => (
            <div key={user.id} className="user-card" onClick={() => onEditUser(user)}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Gender: {user.gender}</p>
              <p>Status: {user.status}</p>
            </div>
          ))}
          <button type="button" onClick={exportToCSV}>
            Export to CSV
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default User;
