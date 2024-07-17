import React, { useState } from "react";

function EventHandlersComponent() {
  const [user, setUser] = useState("");
  const handlerChange = (e) => {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user, "user");
  };
  return (
    <div>
      EventHandlerComponent
      {/* <div>
        <input
          type="text"
          name={user}
          onChange={(e) => setUser(e.target.value)}   //onchange event handler 
        />
        Person Name :{user}
      </div> */}
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="email" onChange={handlerChange} />
          <br />
          <input type="text" name="password" onChange={handlerChange} />
          <br />
          <input type="submit" value="login" />
        </form>
      </div>
    </div>
  );
}

export default EventHandlersComponent;
