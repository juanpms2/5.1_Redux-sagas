import { actionsEnums, BaseAction } from "../actionsEnums";
import { createDefaultErrorEntity, ErrorEntity } from "model";

export type ErrorState = ErrorEntity;

export const errorReducer = (
	state: ErrorState = createDefaultErrorEntity(),
	action: BaseAction
) => {
	switch (action.type) {
		case actionsEnums.ERROR_REQUEST:
			return handleErrorRequestAction(state, action.payload);
	}
	return state;
};

const handleErrorRequestAction = (state: ErrorState, errorEntity) =>
	errorEntity;
