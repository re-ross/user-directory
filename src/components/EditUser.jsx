import React from "react";

const EditUser = ({
  id,
  firstName,
  lastName,
  city,
  country,
  employer,
  title,
  movies,
}) => {
  return (
    <div>
      <p>{id}</p>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{city}</p>
      <p>{country}</p>
      <p>{employer}</p>
      <p>{title}</p>
      <p>{movies}</p>
    </div>
  );
};

export default EditUser;
