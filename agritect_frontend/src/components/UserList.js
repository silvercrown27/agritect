import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/').then((response) => {
      setUsers(response.data);
    });
  }, []);

  const handleDeleteUser = (userId) => {
    // Delete a user
    axios.delete(`http://localhost:8000/destroy-user/${userId}/`).then((response) => {
      // Remove the deleted user from the state
      setUsers(users.filter((user) => user.id !== userId));
    });
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.first_name} {user.last_name}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
