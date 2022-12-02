import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import loginReducer from "./Reducers/loginReducer";


export const BASE_URL = ''

export const store = configureStore({
	reducer: {
		login: loginReducer,
	},
	middleware: [thunk]
})