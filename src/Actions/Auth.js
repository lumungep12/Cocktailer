import { AUTH } from "../Types/Types";
import * as API from "../Api/index.js";

export const signup = (formData, history) => async (dispatch) => {
	try {
		const { data } = await API.signUp(formData);
		dispatch({ type: AUTH, data });
		history.push("/categories");
	} catch (error) {
		console.log(error);
	}
};

export const signin = (formData, history) => async (dispatch) => {
	try {
		const { data } = await API.signIn(formData);
		dispatch({ type: AUTH, data });
		history.push("/categories");
	} catch (error) {
		console.log(error);
	}
};
