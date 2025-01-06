import React, { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);      // Error state

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/news") // Adjust URL if needed
      .then((res) => {
        console.log(res.data);
        setNews(res.data);
        setLoading(false);  // Set loading to false after data is fetched
      })
      .catch((error) => {
        setError("Error fetching news");  // Set error if the request fails
        setLoading(false);
        console.log(error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Show loading message
  }

  if (error) {
    return <div>{error}</div>;  // Show error message
  }

  return (
    <div className="container my-5">
      <div className="row text-center">
        {news.map((val) => (
          <div className="col my-3" key={val._id}> {/* Use _id as the key */}
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={val.img}
                className="card-img-top"
                alt={val.headline || "News Image"}
              />
              <div className="card-body">
                <h5 className="card-title">{val.headline}</h5>
                <p className="card-text">{val.description}</p>
                <a
                  href={val.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Know more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
