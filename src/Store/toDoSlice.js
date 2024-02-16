import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    ToDoArr: []
}
const toDoSlice = createSlice(
    {
        name: "toDo",
        initialState,
        reducers:
        {
            addToDo: (state, action) => {


                state.ToDoArr.push(
                    {
                        id: nanoid(),
                        todo: action.payload,
                    },

                )
            },

            editToDo: (state, action) => {
                state.ToDoArr.filter((todo) => todo.id == action.payload ? todo.todo = prompt("Your Task Here") : "")
            },
            deleteToDo: (state, action) => {
                state.ToDoArr = []
            },
            removeToDo: (state, action) => {
                // console.log(action.payload)
                state.ToDoArr = state.ToDoArr.filter((todo) => todo.id != action.payload)
            },
        }
    }
)
const { actions, reducer } = toDoSlice;
export const { addToDo, removeToDo, deleteToDo, editToDo } = actions;
export default reducer;             