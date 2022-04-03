import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { baseURL } from "../Utils/baseURI";
export const fetchUsers = (dispatch) => {
    axios
        .get(`${baseURL}/users/getall`)
        .then((response) => dispatch(getUsers(response.data.users)))
        .catch((error) => console.log(error))
};

export const userSlice = createSlice({
    name: "user",
    initialState: { userLists: [], currentUser: {} },
    reducers: {
        getUsers: (state, { payload }) => {
            state.userLists = payload
        }
    }

});

export const { getUsers } = userSlice.actions;
export default userSlice.reducer;