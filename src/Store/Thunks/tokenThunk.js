import {
	fetchCreateTokenStarted,
	fetchCreateTokenSuccess,
	fetchCreateTokenFailure
} from "../ActionCreators/tokenCreator";
import axios from "axios";
import {BASE_URL} from "../store";

export const fetchCreateToken = (payload) => async (dispatch) => {
	dispatch(fetchCreateTokenStarted())

	try {
		const {data} = await axios.post(`${BASE_URL}/login`, payload)
		const accessToken = data.access
		const refreshToken = data.refresh
		document.cookie = `refreshToken = ${refreshToken}`
		dispatch(fetchCreateTokenSuccess(accessToken))
	} catch (error) {
		dispatch(fetchCreateTokenFailure(error))
	}
}

