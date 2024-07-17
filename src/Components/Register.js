import React, { useEffect, useState } from "react";
import { database, ref, push, set, onValue, off, remove } from "./firebase"; // Ensure correct import
// import { useHistory } from "react-router";
import { useNavigate } from "react-router-dom";
function Register() {
  let history = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRef = ref(database, "users");
        // console.log("getData", );
        onValue(usersRef, (snapshot) => {
          console.log("snapshot", snapshot);
          const usersData = snapshot.val();
          console.log("usersData", usersData);
          if (usersData) {
            const usersList =
              getData &&
              Object.keys(usersData).map((key) => ({
                id: key,
                ...usersData[key],
              }));
            setGetData(usersList);
          } else {
            setGetData([]);
          }
        });
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();

    // Clean up listeners when component unmounts
    return () => {
      const usersRef = ref(database, "users");
      off(usersRef); // Detach the listener
    };
  }, []);

  const { firstName, lastName, email } = { ...data };
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // Create a reference to the 'users' node
      const usersRef = ref(database, "users");

      // Push a new reference to the 'users' node
      const newUserRef = await push(usersRef);

      // Set data at the new user reference
      set(newUserRef, {
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
      });
      setData({
        firstName: "",
        lastName: "",
        email: "",
      });
      alert("Data pushed successfully!");
    } catch (error) {
      console.error("Error pushing data: ", error);
    }
  };
  const deleteHandler = async (key) => {
    try {
      const userRef = ref(database, `users/${key}`);
      await remove(userRef);
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user: ", error);
    }
  };
  return (
    <>
      Welcome To Register Form
      <form onSubmit={submitHandler}>
        <label>First Name</label>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={firstName}
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
        <input type="submit" value="Submit" />
      </form>
      <h2>Registered Users</h2>
      {getData.map((user) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <p key={user.id}>
            <strong>Name:</strong> {user.firstName} <br />
            <strong>Last:</strong> {user.lastName} <br />
            <strong>Email:</strong> {user.email}
          </p>
          <button
            onClick={() =>
              history(
                `/edit?firstName=${user?.firstName}&lastName=${user?.lastName}&email=${user?.email}&key=${user.id}`
              )
            }
          >
            Update
          </button>{" "}
          &nbsp;
          <button onClick={() => deleteHandler(user.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}
export default Register;
