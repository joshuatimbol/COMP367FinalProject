import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FindUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUser(response.data);
    };
    fetchUser();
  }, [id]);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightblue',
    }}>
      {user ? (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'lightblue',
            }}>
          <form>
            <table>

              <tr>
                <td>
                <h2>{user.name}</h2>
                </td>
              </tr>

              <tr>
                <td>
                ID: {user.id}
                </td>
              </tr>

              <tr>
                <td>
                Username: {user.username}
                </td>
              </tr>

              <tr>
                <td>
                Email: {user.email}
                </td>
              </tr>

              <tr>
                <td>
                Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                </td>
              </tr>

              <tr>
                <td>
                Geo: {user.address.geo.lat}, {user.address.geo.lng}
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
      ) : (
        <p>To view specific ID, use URL format: "http://localhost:3000/post/:id" and replace :id with desired ID.</p>
      )}
    </div>
  );
};

export default FindUser;