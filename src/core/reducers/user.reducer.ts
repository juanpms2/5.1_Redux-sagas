import { actionsEnums } from "../actionsEnums";
import { UserEntity, createDefaultUserEntity } from "model";

export type UserState = UserEntity;

export const userReducer = (
	state: UserState = createDefaultUserEntity(),
	action
) => {
	switch (action.type) {
		case actionsEnums.USER_REQUEST_COMPLETED:
			return handleUserRequestCompletedAction(state, action.payload);
	}

	return state;
};

const handleUserRequestCompletedAction = (state: UserState, user) => user;
