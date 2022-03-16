import React, { useState } from "react";

const NewUserForm = ({ setIsCreatingNew, setUsers, users }) => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [title, setTitle] = useState("");
  const [employer, setEmployer] = useState("");
  const [movie1, setMovie1] = useState("");
  const [movie2, setMovie2] = useState("");
  const [movie3, setMovie3] = useState("");
  const submitHandler = () => {
    setUsers([
      ...users,
      {
        id: +1,
        name: { first: first, last: last },
        city: city,
        country: country,
        employer: employer,
        title: title,
        favoriteMovies: [movie1, movie2, movie3],
      },
    ]);
    setIsCreatingNew(false);
  };
  return (
    <div>
      <form>
        <input
          onChange={(e) => setFirst(e.target.value)}
          type="text"
          placeholder="First Name"
        ></input>
        <input
          onChange={(e) => setLast(e.target.value)}
          type="text"
          placeholder="Last Name"
        ></input>
        <input
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="City"
        ></input>
        <input
          onChange={(e) => setCountry(e.target.value)}
          type="text"
          placeholder="Country"
        ></input>
        <input
          onChange={(e) => setEmployer(e.target.value)}
          type="text"
          placeholder="Employer"
        ></input>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
        ></input>
        <input
          onChange={(e) => setMovie1(e.target.value)}
          type="text"
          placeholder="Favorite Movie 1"
        ></input>
        <input
          onChange={(e) => setMovie2(e.target.value)}
          type="text"
          placeholder="Favorite Movie 2"
        ></input>
        <input
          onChange={(e) => setMovie3(e.target.value)}
          type="text"
          placeholder="Favorite Movie 3"
        ></input>
        <button onClick={submitHandler}>Submit</button>
      </form>
    </div>
  );
};

export default NewUserForm;
