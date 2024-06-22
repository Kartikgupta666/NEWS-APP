import { useState } from 'react';
import maincontext from './maincontext';
import axios from 'axios';
import React from 'react';

export default function MainState(props) {
  const host = "http://localhost:8000";
  const [user, setUser] = useState('');
  
  const getUser = async () => {
    try {
      const response = await axios.post(`${host}/getuser`, {}, {
        headers: {
          "Content-Type": "application/json",
          "authToken": localStorage.getItem('token')
        }
      });
      const json = await response.data;
      setUser(json);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <maincontext.Provider value={{ user, getUser }}>
      {props.children}
    </maincontext.Provider>
  );
}
