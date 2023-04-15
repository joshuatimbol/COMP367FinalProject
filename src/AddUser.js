import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState({street: '', suite: '', city: '', zipcode: '', geo: {lat: '', lng: ''}});
  const [id, setId] = useState('');
  const [userCheck, setUserCheck] = useState(null);
  const [message, setMessage] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

if (!firstName || !lastName || !email) {
  setMessage('First Name, Last Name, Email are required fields');
  return;
}
if (!/\S+@\S+\.\S+/.test(email)) {
  setMessage('Email must be in proper format');
  return;
}
if (!/^\d{3}-\d{3}-\d{4}$/.test(phone)) {
  setMessage('Please enter a valid phone number in Canadian format (XXX-XXX-XXXX)');
  return;
}


    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
        name: `${firstName} ${lastName}`,
        id,
        username,
        email,
        phone,
        address
      });
      setMessage(`User Added Successfully`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightblue',
    }}>
      <h1>Add a User: </h1>


      &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;


      <form onSubmit={handleSubmit}>


<table>
  <tr>
    <td>
        <label htmlFor="firstName">First Name: </label>
        <input type="text" id="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
    </td>
  </tr>

  <tr>
    <td>
        <label htmlFor="lastName">Last Name: </label>
        <input type="text" id="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
    </td>
  </tr>

  <tr>
    <td>
        <label htmlFor="username">Username: </label>
          <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)}/>
          <br></br>
    </td>
  </tr>

  <tr>
    <td>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
    </td>
  </tr>

  <tr>
    <td>
        <label htmlFor="phone">Phone Number: </label>
        <input type="tel" id="phone" value={phone} onChange={(event) => setPhone(event.target.value)}/>
    </td>
  </tr>
  <tr>
    <td>
        <button type="submit">Add User</button>
    </td>
  </tr>
  {userCheck !== null && <p>{message}</p>}
</table>
      </form>
    </div>
  );
};

export default UserForm;
