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
                console.log("first")
                state.ToDo.push([
                    // ...ToDo,
                    {
                        id: nanoid(),
                        todo: action.payload,
                    },
                    console.log(action.payload)
                ])



            },
            removeToDo(state, action) {
                return state.toSpliced(
                    state.findIndex((t) => t.id === action.payload.id),
                    1
                )
            }
        }
    }
)
const { actions, reducer } = toDoSlice;
export const { addToDo, removeToDo } = actions;
export default reducer;             