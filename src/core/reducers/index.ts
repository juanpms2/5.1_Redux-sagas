import { combineReducers } from "redux";
import { userReducer, UserState } from "./user.reducer";
import { membersReducer, MembersState } from "./members.reducer";
import { errorReducer, ErrorState } from "./error.reducer";

export interface GlobalState {
	membersReducer: MembersState;
	userReducer: UserState;
	errorReducer: ErrorState;
}

export const globalReducers = combineReducers<GlobalState>({
	membersReducer,
	userReducer,
	errorReducer
});
