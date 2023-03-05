import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { axiosIntance } from "../config";
import ViewUrlComponent from './ViewUrlComponent';


const AddUrlComponent = ({ userId }) => {
    const [url, setUrl] = useState("");
    const navigate = useNavigate();

    if(!userId)
      navigate("/");

    const onSubmit = (e)=> {
        e.preventDefault();

        if (!url) {
          alert("please enter url");
          return;
        }

        axiosIntance
          .post("/short", {origUrl: url, userId: userId})
          .then(res => {
            console.log(res.data);
          })
          .catch(err => {
            console.log(err.message);
          });

        setUrl("")
    }

  return (
    <div>
      <main>
        <section className="w-100 d-flex flex-column justify-content-center align-items-center">
          <h1 className="mb-2 fs-1">URL Shortener</h1>
          <br />
          <form className="w-50" onSubmit={onSubmit}>
            <input
              className="w-100 border border-primary p-2 mb-2 fs-3 h-25"
              type="text"
              placeholder="http://example.com"
              value={url}
              onChange={e => setUrl(e.target.value)}
            />
            <div className="d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-danger m-5">
              Short your url
            </button>
            </div>
          </form>
        </section>
      </main>
      <ViewUrlComponent userId = { userId } />
    </div>
  );
}

export default AddUrlComponent;