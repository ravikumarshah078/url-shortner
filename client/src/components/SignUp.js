import React, { useState } from 'react'
import { axiosIntance } from '../config';
import { useNavigate } from 'react-router-dom';

const SignUp = ( { setIsLoggedIn, setUserId } ) => {

    const [email, setEmail] = useState("");
    const [btnText, setBtnText] = useState("Sign Up");
    const navigate = useNavigate();
    
    const onSubmit =  (e) => {
        e.preventDefault();
        setBtnText("Please wait...");
        axiosIntance.post('/signup', { email })
          .then(res => {
              const result = res.data;
              setUserId(result._id);
              setIsLoggedIn(true);
              navigate("/url-list") 
            })
          .catch(err => {
            console.log(err);
            alert("signup error");
            setBtnText("Sign Up");
        })
    }

  return (
    <div>
      <main>
        <section className="w-100 p-5 d-flex flex-column justify-content-center align-items-center">
          <h1 className="mb-2 fs-1">Sign Up</h1>
          <br />
          <form className="w-50" onSubmit={onSubmit}>
            <input
              className="w-100 border border-primary p-2 mb-2 fs-3 h-25"
              type="email"
              placeholder="example@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <div class="d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-primary m-5">
              {btnText}
            </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}

export default SignUp