import React, { useState, useEffect } from "react";
import "../styles/UserView.css";
import data from "../data/data.js";
import User from "./User";
import NewUserForm from "./NewUserForm";

export default function UserView() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(0);
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  const nextUser = () => {
    if (currentUser < users.length - 1) {
      setCurrentUser(currentUser + 1);
    } else if (currentUser === 24) {
      setCurrentUser(0);
    }
  };
  const prevUser = () => {
    if (currentUser > 0) {
      setCurrentUser(currentUser - 1);
    } else if (currentUser === 0) {
      setCurrentUser(users.length - 1);
    }
  };
  const deleteUser = () => {
    setUsers(users.filter((el, index) => index !== currentUser));
    if (currentUser === users.length - 1) {
      setCurrentUser(users.length - 2);
    }
  };
  useEffect(() => {
    setUsers(data);
  }, []);
  return (
    <div className="user-view">
      {!isCreatingNew &&
        users.map((user, id) => {
          if (id === currentUser)
            return (
              <User
                allusers={users}
                currentUser={currentUser}
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
      {isCreatingNew && (
        <NewUserForm
          users={users}
          setIsCreatingNew={setIsCreatingNew}
          setUsers={setUsers}
        />
      )}
      <div className="button-container">
        <button className="prev-next-buttons" onClick={() => prevUser()}>
          {"<"} Previous
        </button>
        <div className="center-buttons-container">
          <button className="center-button">Edit</button>
          <button className="center-button" onClick={() => deleteUser()}>
            Delete
          </button>
          <button
            className="center-button"
            onClick={() => setIsCreatingNew(true)}
          >
            New
          </button>
        </div>
        <button className="prev-next-buttons" onClick={() => nextUser()}>
          Next {">"}
        </button>
      </div>
    </div>
  );
}
