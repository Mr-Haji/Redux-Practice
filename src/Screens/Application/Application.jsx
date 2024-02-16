import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToDo,
  removeToDo,
  deleteToDo,
  editToDo,
} from "../../Store/toDoSlice";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  // get data from store
  const dispatch = useDispatch();
  const getToDos = useSelector((state) => state.toDoSliceReducer.ToDoArr);
  console.log("globalState", getToDos);

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
      <button
        onClick={() => {
          dispatch(deleteToDo());
        }}
      >
        Delete
      </button>
      <div>
        <ol>
          {getToDos.map((e) => {
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
                  <button
                    onClick={() => {
                      dispatch(editToDo(e.id));
                    }}
                  >
                    Edit
                  </button>
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
