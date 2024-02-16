import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToDo,
  removeToDo,
  deleteToDo,
  editToDo,
} from "../../Store/toDoSlice";

import { Button, Stack, TextField } from "@mui/material";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  // get data from store
  const dispatch = useDispatch();
  const getToDos = useSelector((state) => state.toDoSliceReducer.ToDoArr);
  console.log("globalState", getToDos);

  return (
    <Stack>
      <Stack
        sx={{
          flexDirection: "row",
          textAlign: "center",
          alignSelf: "center",
        }}
      >
        <TextField
          sx={{
            width: "200px",
          }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          variant="standard"
        />

        <Button
          variant="text"
          onClick={() => {
            dispatch(addToDo(inputValue));
            setInputValue("");
          }}
        >
          Add Task
        </Button>
        <Button
          variant="text"
          onClick={() => {
            dispatch(deleteToDo());
          }}
        >
          Delete
        </Button>
      </Stack>

      <Stack
        sx={{
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <ol>
          {getToDos.map((e) => {
            return (
              <>
                <li key={e.id}>
                  {e.todo}
                  <Button
                    onClick={() => {
                      dispatch(removeToDo(e.id));
                    }}
                  >
                    Remove
                  </Button>
                  <Button
                    onClick={() => {
                      dispatch(editToDo(e.id));
                    }}
                  >
                    Edit
                  </Button>
                </li>
              </>
            );
          })}
        </ol>
      </Stack>
    </Stack>
  );
};

export default Home;
