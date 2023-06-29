import React from "react";
import "./App.css";
import CreateTodo from "./components/createTodo/CreateTodo";
import ShowTodo from "components/showTodo/ShowTodo";
import SelectTodo from "components/selectTodo/SelectTodo";

const App = () => {
  return (
    <div className="app-main">
      <div className="appTopText">TODO LIST</div>
      <CreateTodo />
      <div className="selectContainer">
        <SelectTodo />
      </div>
      <ShowTodo />
    </div>
  );
};

export default App;
