import './Css/App.css';
import './Css/bootstrap.min.css';
import './Css/magnific-popup.css';
import NaV from './Components/NaV.js';
import {Provider} from 'react-redux';
import NavLog from './Components/NavLog';
import {AuthProvider, AuthContext} from "./store/AuthContext";
import React, {useContext} from 'react';
function App() {
  const authContext = useContext(AuthContext);
  return (

    <div >
      <main className="container-fluid">
       { authContext.auth.email ? <NavLog/>: <NaV /> }
      </main>
    </div> 
   
  );
}

function AppWithStore(){
  return (<AuthProvider>
    <App />
  </AuthProvider>);
}

export default AppWithStore;

