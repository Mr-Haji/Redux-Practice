import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, removeToDo } from "../../Store/toDoSlice";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  // get data from store
  const dispatch = useDispatch();
  const todoArr = useSelector((state) => state.toDoSliceReducer.ToDoArr);
  console.log("globalState", todoArr);

  //Edit ToDo
  const editTodo = () => {
    console.log("Work IP");
  };
  const remove = (e) => {
    dispatch(removeToDo(e.id));
  };
  //Delet All
  const deleteAll = () => {
    setTodo([]);
  };
  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addToDo(inputValue));
          setInputValue("");
        }}
      >
        Add
      </button>
      <button onClick={deleteAll}>Delete</button>
      <div>
        <ol>
          {todoArr.map((e) => {
            return (
              <>
                <li key={e.id}>
                  {e.todo}
                  <button
                    onClick={() => {
                      dispatch(removeToDo(e.id));
                    }}
                  >
                    Remove
                  </button>
                  <button onClick={editTodo}>Edit</button>
                </li>
              </>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default Home;
