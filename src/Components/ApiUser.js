import React from 'react';
import axios from 'axios';

 export function getprofile  (id)  {
    try {
      const response = axios.get(

          `http://127.0.0.1:8000/api/v1/user/profile/${id}/`
      );
      return response; //very important to show 'data'
    } catch (error) {
      console.error(error);
    }
  };
  export function getuser (id) {
    try {
      const response = axios.get(

          `http://127.0.0.1:8000/api/v1/user/user/${id}/`
      );
      return response; //very important to show 'data'
    } catch (error) {
      console.error(error);
    }
  };

  export function updatUser (id, values)  {
    const response = axios.put(
      `http://127.0.0.1:8000/api/v1/user/user/${id}/`  ,
      values
    );
    return response;
  };
  export function logout  ()  {
    localStorage.removeItem('userid');
    localStorage.setItem('logeed',false);
  };

 export function  GetFileName  (url)  {
    if (url) {
      var m = url.toString().match(/.*\/(.+?)\./);
      if (m && m.length > 1) {
        return m[1];
      }
    }
    return "";
  };
