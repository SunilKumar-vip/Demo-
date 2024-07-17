// import { createContext, useState } from "react";
import {
  decplayerone,
  decplayertwo,
  incbulkplayertwo,
  incplayerone,
  incplayertwo,
} from "./Actions";
import "./App.css";
// import ComponentA from "./Components/ComponentA";
// import ComponentB from "./Components/ComponentB";
// import EditForm from "./Components/EditForm";
// import Register from "./Components/Register";
// import EventHandlersComponent from "./Components/EventHandlersComponent";
// import FunctionalComponent from "./Components/FunctionalComponent";
// import ClassComponent from "./Components/ClassComponent";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Dashboard from "./Components/Dashboard";
// import Hoc from "./Components/Hoc";

// export const store = createContext();
import { connect } from "react-redux";
function App({
  playerone,
  playertwo,
  incplayerone,
  decplayerone,
  incplayertwo,
  decplayertwo,
  incbulkplayertwo,
}) {
  // const [incrementData, setIncrementData] = useState([
  //   { dashboardName: "Nokia" },
  //   { dashboardName: "Redmi" },
  //   { dashboardName: "Realme" },
  // ]);
  // const [newData, setNewData] = useState("");
  // const changeHandlerText = (e) => {
  //   e.preventDefault();
  //   setIncrementData([...incrementData, { dashboardName: newData }]);
  // };
  // console.log("newData", newData);

  return (
    <div className="App">
      {/* <FunctionalComponent />
      <ClassComponent /> */}
      {/* <EventHandlersComponent /> */}
      {/* This is for Router */}
      {/* <BrowserRouter> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/about/:name" element={<About />} />  this is the syntax for the path params*/}
      {/* <Route path="/about/" element={<About />} />{" "} */}
      {/* this is the syntax for query params*/}
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
      {/* this is for register and edit form in the firebase database */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/edit" element={<EditForm />}></Route>
        </Routes>
      </BrowserRouter> */}
      {/* use useContext API Example */}
      {/* <store.Provider value={[incrementData, setIncrementData]}> */}
      {/* <ComponentA />
        <ComponentB /> */}
      {/* <form onSubmit={changeHandlerText}>
          <input
            type="text"
            // value="text"
            onChange={(e) => setNewData(e.target.value)}
          />
          <input type="submit" value="Add" />
        </form> */}
      {/* <button onClick={() => setIncrementData(incrementData + 1)}>
          Increment Button
        </button>
        <button onClick={() => setIncrementData(0)}>Reset</button> */}
      {/* </store.Provider> */}

      {/* use of reducer */}
      <h3> Reducer Concept</h3>
      <div>
        <p>Name:{playerone?.name}</p>
        <p>Score:{playerone?.score}</p>
        <button onClick={() => incplayerone()}>Increment</button>
        <button onClick={() => decplayerone()}>Decrement</button>
      </div>
      <div>
        <p>Name:{playertwo?.name}</p>
        <p>Name:{playertwo?.score}</p>
        <button onClick={() => incplayertwo()}>IncrementTwo</button>
        <button onClick={() => decplayertwo()}>DecrementTwo</button>
        <button onClick={() => incbulkplayertwo(5)}>BulkIncrement</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  playerone: state?.playerOne,
  playertwo: state?.playerTwo,
});
export default connect(mapStateToProps, {
  incplayerone,
  decplayerone,
  incplayertwo,
  decplayertwo,
  incbulkplayertwo,
})(App);
