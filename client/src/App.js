import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUrlComponent from './components/AddUrlComponent';
import SignUp from './components/SignUp';
import { useState } from "react";

function App () {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");

  return (
    <div className='App container mt-5'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp setIsLoggedIn = {setIsLoggedIn} setUserId = {setUserId} />} />
          <Route path="/url-list" element={ isLoggedIn ? <AddUrlComponent userId = {userId}/> : <Navigate to="/" /> } />
        </Routes> 
      </BrowserRouter>
    </div>
  )
}



export default App;
