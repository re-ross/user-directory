import React from "react";

function User({
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
    <div>
      <p>{id}</p>
      <p>{firstName + "  " + lastName}</p>
      <p>{city}</p>
      <p>{country}</p>
      <p>{employer}</p>
      <p>{title}</p>
      <ol>
        {movies.map((movie, id) => (
          <li key={id}>{movie}</li>
        ))}
      </ol>
    </div>
  );
}

export default User;
