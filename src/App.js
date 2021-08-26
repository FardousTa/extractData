import './Css/App.css';
import './Css/bootstrap.min.css';
import './Css/magnific-popup.css';
import NaV from './Components/NaV.js';
function App() {
  return (

    <div >
      <main className="container-fluid">
       <NaV /> 
      </main>
    </div> 
   
  );
}

function AppWithStore(){
  return (
    <App />
 );
}

export default AppWithStore;

