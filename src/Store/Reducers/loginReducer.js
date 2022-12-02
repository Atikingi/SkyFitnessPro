import {GET_TOKEN_FAILURE, GET_TOKEN_STARTED, GET_TOKEN_SUCCESS} from "../Types/boilerPlate";

const initialState = {
	accessToken: '',
	error: null,
}

export default function loginReducer(state = initialState, action) {
	switch (action.type) {
		case GET_TOKEN_STARTED: {
			return {
				...state,
			}
		}
		case GET_TOKEN_SUCCESS: {
			const {accessToken} = action.payload
			return {
				...state,
				accessToken,
				error: null,
			}
		}
		case GET_TOKEN_FAILURE: {
			return {
				...state,
				error: action.payload.error,
			}
		}
		default:
			return state
	}
}