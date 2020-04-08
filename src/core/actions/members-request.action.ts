import { MemberEntity, ErrorEntity } from "model";
import { actionsEnums, BaseAction } from "../actionsEnums";

export const membersRequestAction = (organization: string): BaseAction => {
	return {
		type: actionsEnums.MEMBERS_REQUEST,
		payload: organization,
	};
};

export const membersRequestCompletedAction = (
	members: MemberEntity[]
): BaseAction => ({
	type: actionsEnums.MEMBERS_REQUEST_COMPLETED,
	payload: members,
});

export const errorRequestCompanyAction = (
	errorEntity: ErrorEntity
): BaseAction => ({
	type: actionsEnums.ERROR_REQUEST,
	payload: errorEntity,
});
