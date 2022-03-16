import React from "react";
import "../styles/User.css";

function User({
  currentUser,
  allusers,
  id,
  firstName,
  lastName,
  city,
  country,
  employer,
  title,
  movies,
}) {
  return (
    <div className="user-card">
      <h2 className="count">{currentUser + 1 + "/" + allusers.length}</h2>
      <h1 className="name">{firstName + "  " + lastName}</h1>
      <div className="user-info-container">
        <h3 className="user-info">From: </h3> <p> {city + ", " + country}</p>
      </div>
      <div className="user-info-container">
        <h3 className="user-info">Job Title: </h3> <p> {title}</p>
      </div>
      <div className="user-info-container">
        <h3 className="user-info">Employer: </h3> <p> {employer}</p>
      </div>
      <h3>Favorite Movies:</h3>
      <ol>
        {movies.map((movie, id) => (
          <li className="movie" key={id}>
            {movie}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default User;
