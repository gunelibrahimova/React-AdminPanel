import { useState } from 'react';
import './App.css';
import MyRouter from './router/MyRouter';
import SideBar from './components/SideBar/SideBar'
import Login from './components/Login/Login';


function App() {

  const[login, setLogin] = useState(true)


  if (login) {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-2 p-0'>
            <SideBar/>
          </div>
          <div className='col-lg-10'>
            <MyRouter/>
          </div>
        </div>
      </div>
    );
  }
  else{
    return(
      <>
       <Login/>
      </>
    )
  }
}

export default App;
