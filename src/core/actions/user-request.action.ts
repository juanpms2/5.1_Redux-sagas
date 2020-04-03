import { UserEntity, ErrorEntity } from "model";
import { actionsEnums } from "../actionsEnums";
import { getUser } from "common";
import { trackPromise } from "react-promise-tracker";

export const userRequest = (user: UserEntity) => ({
	type: actionsEnums.USER_REQUEST_COMPLETED,
	payload: user
});

export const errorRequestUser = (errorEntity: ErrorEntity) => ({
	type: actionsEnums.ERROR_REQUEST,
	payload: errorEntity
});

export const loadUser = (idLogin: string) => (dispatcher) => {
	const promise = getUser(idLogin);
	const errorEntity: ErrorEntity = {
		organization: "",
		booleanError: false,
		txtError: "",
		nameLogin: idLogin
	};
	trackPromise(
		promise
			.then((user) => {
				errorEntity.organization = user.company;
				dispatcher(userRequest(user));
				dispatcher(errorRequestUser(errorEntity));
				return user;
			})
			.catch((error) => {
				errorEntity.booleanError = true;
				errorEntity.txtError = error;
				dispatcher(errorRequestUser(errorEntity));
				return error;
			})
	);

	return promise;
};
