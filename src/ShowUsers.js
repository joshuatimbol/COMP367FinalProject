import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightblue',
    }}>
      <h1>COMP308 - Midterm</h1>
      <h1>User List: </h1>
      {users.map(user => (
        <div key={user.id}>
          <form>
            <table>

            <tr>
                <td>
                <h2>{user.name}</h2>
                </td>
              </tr>

              <tr>
                <td>
                Phone: {user.phone}
                </td>
              </tr>

              <tr>
                <td>
                Website: {user.website}
                </td>
              </tr>

              <tr>
                <td>
                Company: {user.company.name}, {user.company.catchPhrase}, {user.company.bs}
                </td>
              </tr>


            </table>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AllUsers;
