import { watchNewGetAllMembersStart } from "./members.sagas";
import { watchNewGetUserStart } from "./user.sagas";
import { all, fork } from "redux-saga/effects";

export const rootSaga = function* root() {
	yield all([fork(watchNewGetAllMembersStart), fork(watchNewGetUserStart)]);
};
