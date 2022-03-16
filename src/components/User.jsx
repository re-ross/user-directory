import React from "react";

function User({
  id,
  displayName,
  city,
  country,
  employer,
  title,
  favoriteMovies,
}) {
  return (
    <div className="userCard">
      <p>{id}</p>
    </div>
  );
}

export default User;
