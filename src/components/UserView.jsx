import React, { useState, useEffect } from "react";
import "../styles/UserView.css";
import data from "../data/data.js";
import User from "./User";

function UserView() {
  const [users, SetUsers] = useState([]);

  useEffect(() => {
    SetUsers(data);
    console.log(data);
  }, []);

  return (
    <div className="user-view">
      {users.map((user) => (
        <User
          key={user.id}
          displayName={user.name.first}
          city={user.city}
          country={user.country}
          employer={user.employer}
          title={user.title}
          favoriteMovies={user.favoriteMovies}
        />
      ))}
    </div>
  );
}

export default UserView;
