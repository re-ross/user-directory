import React, { useState, useEffect } from "react";
import "../styles/UserView.css";
import data from "../data/data.js";
import User from "./User";

export default function UserView() {
  const [users, SetUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(0);

  const nextUser = () => {
    if (currentUser < users.length - 1) {
      setCurrentUser(currentUser + 1);
    }
  };
  const prevUser = () => {
    if (currentUser > 0) {
      setCurrentUser(currentUser - 1);
    }
  };

  useEffect(() => {
    SetUsers(data);
    console.log(data);
  }, [users]);
  return (
    <div className="user-view">
      {data.map((user, id) => {
        if (id === currentUser)
          return (
            <User
              allusers={users}
              key={user.id}
              firstName={user.name.first}
              lastName={user.name.last}
              city={user.city}
              country={user.country}
              employer={user.employer}
              title={user.title}
              movies={user.favoriteMovies}
            />
          );
      })}
      <button onClick={() => prevUser()}>{"<"}Previous</button>
      <button onClick={() => nextUser()}>Next{">"}</button>
    </div>
  );
}

//  {
//    users.map((user, id) => (
//      <User
//        key={user.id}
//        id={user.id}
//        firstName={user.name.first}
//        lastName={user.name.last}
//        city={user.city}
//        country={user.country}
//        employer={user.employer}
//        title={user.title}
//        favoriteMovies={user.favoriteMovies}
//      />
//    ));
//  }
