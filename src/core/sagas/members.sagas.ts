import { call, put, takeEvery } from "redux-saga/effects";
import { membersRequestCompletedAction, errorRequestCompanyAction } from "core";
import { actionsEnums, BaseAction } from "../actionsEnums";
import { getAllMembers } from "common";
import { ErrorEntity } from "model";
import { trackPromise } from "react-promise-tracker";

export function* watchNewGetAllMembersStart() {
	yield takeEvery(actionsEnums.MEMBERS_REQUEST, requestNewGetAllMembers);
}

function* requestNewGetAllMembers(action: BaseAction) {
	const myGenericTrackedWrapper = (fn: Function, args: string) =>
		trackPromise(fn(args));
	const errorEntity: ErrorEntity = {
		organization: action.payload,
		booleanError: false,
		txtError: "",
		nameLogin: "",
	};

	try {
		const members = yield call(
			myGenericTrackedWrapper,
			getAllMembers,
			action.payload
		);
		yield put(membersRequestCompletedAction(members));
		yield put(errorRequestCompanyAction(errorEntity));
	} catch (error) {
		errorEntity.booleanError = true;
		errorEntity.txtError = error;
		yield put(errorRequestCompanyAction(errorEntity));
	}
}
