import { nanoid } from "@reduxjs/toolkit";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, removeToDo } from "../../Store/toDoSlice";

const Home = () => {
  // todoApp
  // let todoData = [];
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // get data from store
  const data = useSelector((state) => state.ToDo);

  const dispatch = useDispatch();
  const todoArr = useSelector((state) => state.toDoSliceReducer.ToDo);
  // console.log(todoArr);
  // add todo

  // const addTodo = () => {
  //   console.log(todo);
  //   inputValue
  //     ? setTodo([
  //         ...todo,
  //         {
  //           id: nanoid(),
  //           todo: inputValue,
  //         },
  //       ])
  //     : alert("Empty Fields");
  //   setInputValue("");
  // };
  //Edit ToDo
  const editTodo = () => {
    console.log("Work IP");
  };
  //Remove ToDo
  // const removeToDo = (id) => {
  //   setTodo(
  //     todo.toSpliced(
  //       todo.findIndex((t) => t.id === id),
  //       1
  //     )
  //   );
  // };
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
                  <button onClick={() => dispatch(removeToDo(e.id))}>
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
