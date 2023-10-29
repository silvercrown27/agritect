import React, { useState } from 'react';
import axios from 'axios';

function UserForm() {
  const [username, setUsername] = useState('');

  const handleAddUser = () => {
    axios.post('/create-user/', { username: username }).then((response) => {
      // Clear the input field and update the user list
      setUsername('');
    });
  };

  return (
    <div>
      <h2>Add User</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
}

export default UserForm;
