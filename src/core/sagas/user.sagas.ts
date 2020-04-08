import { call, put, takeEvery } from "redux-saga/effects";
import { errorRequestUserAction, userRequestCompletedAction } from "core";
import { actionsEnums, BaseAction } from "../actionsEnums";
import { getUser } from "common";
import { ErrorEntity } from "model";

export function* watchNewGetUserStart() {
	yield takeEvery(actionsEnums.USER_REQUEST, requestNewGetUser);
}

function* requestNewGetUser(action: BaseAction) {
	const errorEntity: ErrorEntity = {
		organization: "",
		booleanError: false,
		txtError: "",
		nameLogin: action.payload,
	};
	try {
		const user = yield call(getUser, action.payload);
		yield put(userRequestCompletedAction(user));
		yield put(errorRequestUserAction(errorEntity));
	} catch (error) {
		errorEntity.booleanError = true;
		errorEntity.txtError = error;
		yield put(errorRequestUserAction(errorEntity));
	}
}
