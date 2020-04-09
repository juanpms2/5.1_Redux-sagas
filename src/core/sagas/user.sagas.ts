import { call, put, takeEvery } from "redux-saga/effects";
import { errorRequestUserAction, userRequestCompletedAction } from "core";
import { actionsEnums, BaseAction } from "../actionsEnums";
import { getUser } from "common";
import { ErrorEntity } from "model";
import { trackPromise } from "react-promise-tracker";

export function* watchNewGetUserStart() {
	yield takeEvery(actionsEnums.USER_REQUEST, requestNewGetUser);
}

function* requestNewGetUser(action: BaseAction) {
	const myGenericTrackedWrapper = (fn: Function, args: string) =>
		trackPromise(fn(args));
	const errorEntity: ErrorEntity = {
		organization: "",
		booleanError: false,
		txtError: "",
		nameLogin: action.payload,
	};
	try {
		const user = yield call(myGenericTrackedWrapper, getUser, action.payload);
		yield put(userRequestCompletedAction(user));
		yield put(errorRequestUserAction(errorEntity));
	} catch (error) {
		errorEntity.booleanError = true;
		errorEntity.txtError = error;
		yield put(errorRequestUserAction(errorEntity));
	}
}
