import { actionsEnums, BaseAction } from "../actionsEnums";
import { MemberEntity } from "model";

export type MembersState = MemberEntity[];

export const membersReducer = (
	state: MembersState = [],
	action: BaseAction
): MembersState => {
	switch (action.type) {
		case actionsEnums.MEMBERS_REQUEST_COMPLETED:
			return handleMembersRequestAction(state, action.payload);
	}

	return state;
};

const handleMembersRequestAction = (state: MembersState, members) => members;
