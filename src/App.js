import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert'
import {Routes, Route } from "react-router-dom";
import About from './components/About';


function App() {

  const [mode, setMode] = useState('light')
  const changeMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert('Success', 'Dark Mode has been Enabled')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Success', 'Light Mode has been enabled')
    }
  }

  const [alert, setAlert] = useState(null)

  const showAlert = (type, msg) => {
      setAlert({
        msg  : msg,
        type : type
      })
    
    setTimeout(()=>{
      setAlert(null )
    }, 2000)
  }

  return (
    <>
        <Navbar title="TextUtils2"
              aboutText="About Utils"
              mode={mode}
              changeMode={changeMode}
            />
        <Alert alert={alert} /> 
        <div className='conatiner my-3'>
        <Routes>
          <Route path="/" element={<TextForm heading="Enter your text here" mode={mode}></TextForm>}/>  
          <Route path="/about" element={<About/>}/>
        </Routes>
        </div>
    </>
  );
}

export default App;
