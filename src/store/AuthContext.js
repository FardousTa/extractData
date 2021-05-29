import React, { useState, useEffect } from "react";
import { date } from "yup/lib/locale";

export const AuthContext = React.createContext();

export function AuthProvider(Props) {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const name = localStorage.getItem("name");
    var date = new Date();
    const time = date.toLocaleTimeString("en-US");

    const n = date.getTimezoneOffset();
    const today =
      date.getFullYear() + "|" + (date.getMonth() + 1) + "|" + date.getDate();
    window.localStorage.setItem("date1", time);
    window.localStorage.setItem("date2", today);
    var date1 = window.localStorage.getItem("date1");
    var date2 = window.localStorage.getItem("date2");

    // @todo: validate token with api
    if (email) {
      setAuth({
        token,
        email,
        name,
        date1,
        date2,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {Props.children}
    </AuthContext.Provider>
  );
}
