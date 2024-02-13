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
            removeToDo: (state, action) => {
                return state.ToDoArr = state.ToDoArr.filter(
                    (todos) => { todos.id !== action.payload }, // issue yha hy just 


                );
            },
            editToDo: (state, action) => {
                state.ToDoArr.push( //purana wla remove nhi ho rha hy
                    {
                        id: action.payload,
                        todo: prompt("Please Insert Your Task"),
                    },


                );
            },
            deleteToDo: (state, action) => {
                state.ToDoArr = []



            },
        }
    }
)
const { actions, reducer } = toDoSlice;
export const { addToDo, removeToDo, deleteToDo, editToDo } = actions;
export default reducer;             