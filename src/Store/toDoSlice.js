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
                    (todos) =>{ todos.id !== action.payload.id}, // issue yha hy just 
                    

                );
            },
        }
    }
)
const { actions, reducer } = toDoSlice;
export const { addToDo, removeToDo } = actions;
export default reducer;             