import { UserEntity, ErrorEntity } from "model";
import { actionsEnums, BaseAction } from "../actionsEnums";

export const userRequestAction = (idLogin: string): BaseAction => ({
	type: actionsEnums.USER_REQUEST,
	payload: idLogin,
});

export const userRequestCompletedAction = (user: UserEntity): BaseAction => ({
	type: actionsEnums.USER_REQUEST_COMPLETED,
	payload: user,
});

export const errorRequestUserAction = (
	errorEntity: ErrorEntity
): BaseAction => ({
	type: actionsEnums.ERROR_REQUEST,
	payload: errorEntity,
});
