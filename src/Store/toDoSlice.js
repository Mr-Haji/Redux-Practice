import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    ToDo: []
}
const toDoSlice = createSlice(
    {
        name: "ToDo",
        initialState,
        reducers:
        {
            addToDo(state, action) {
                state.ToDo.push(
                    {
                        id: nanoid(),
                        todo: action.payload,
                    },

                )
            },
            removeToDo(state, action) {
                console.log(action.payload)
              
             
                return state.ToDo.filter(ToDo => ToDo.id !== action.payload)
            }
        }
    }
)
const { actions, reducer } = toDoSlice;
export const { addToDo, removeToDo } = actions;
export default reducer;             