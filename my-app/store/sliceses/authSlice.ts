import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const init = {
    username : '',
    isAuthed : false
}

const AuthSlice = createSlice({
    name : 'Auth',
    initialState : init ,
    reducers : {
        setUserName : (state,action : PayloadAction<string>) => {
            state.username = action.payload
        },

        setAuthed : (state,action : PayloadAction<boolean>)=>{
            state.isAuthed = action.payload
        }
    }
})

export const { setUserName , setAuthed} = AuthSlice.actions
export const selectAuth = (state:RootState) => state.auth
export default AuthSlice.reducer