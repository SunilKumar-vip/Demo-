import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { database, ref, update } from "./firebase"; // Ensure correct import

function EditForm(user) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  let queryData = new URLSearchParams(useLocation().search);
  const { firstName, lastName, email } = { ...data };
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setData({
      ...data,
      firstName: queryData?.get("firstName"),
      lastName: queryData?.get("lastName"),
      email: queryData?.get("email"),
    });
  }, []);

  const submitSaveHandler = async (e) => {
    e.preventDefault();
    try {
      // Update existing user
      const userRef = ref(database, `users/${user.id}`);
      await update(userRef, {
        firstName: data?.firstName,
        lastName: data.lastName,
        email: data.email,
      });
      alert("Data updated successfully!");
    } catch (error) {
      console.error("Error updating data: ", error);
    }
  };
  return (
    <>
      <div>Welcome to Edit Form</div>
      <form onSubmit={submitSaveHandler}>
        <label>First Name</label>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          name="firstName"
          onChange={changeHandler}
        />
        <br />
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={lastName}
          onChange={changeHandler}
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={changeHandler}
        />
        <br />
        <input type="submit" value="Save" />
      </form>
      <Link to="/"> Back to home</Link>
    </>
  );
}

export default EditForm;
