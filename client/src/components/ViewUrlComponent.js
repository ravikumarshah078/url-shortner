import React, { useEffect, useState } from 'react'
import { axiosIntance } from "../config";
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewUrlComponent= ({ userId }) => {
    const [urls, setUrls] = useState([]);

    useEffect(() => {
      const fetchUrlAndSetUrl = async () => {
        const result = await axiosIntance.get(`/${userId}/all`);
        setUrls(result.data);
      };
      fetchUrlAndSetUrl();
    }, [userId, urls]);

  return (
    <div>
          {urls.map((url, index) => (
            <div className="card" style={{width: "40rem"}} key={index}>
              <div className="card-body">
                <a href={`${url.shortUrl}`} className="card-link" rel="noopener noreferrer" target="_blank">{url.shortUrl}</a>
                <p className="card-text">Original Url: {url.origUrl}</p>
              </div>
            </div>
          ))}
    </div>
  );
}

export default ViewUrlComponent;