import { actionsEnums } from "../actionsEnums";
import { MemberEntity } from "model";

export type MembersState = MemberEntity[];

export const membersReducer = (state: MembersState = [], action) => {
	switch (action.type) {
		case actionsEnums.MEMBERS_REQUEST:
			return handleMembersRequestAction(state, action.payload);
	}

	return state;
};

const handleMembersRequestAction = (state: MembersState, members) => members;
