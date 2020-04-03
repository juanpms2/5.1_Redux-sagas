import { MemberEntity, ErrorEntity } from "model";
import { actionsEnums } from "../actionsEnums";
import { getAllMembers } from "common";
import { trackPromise } from "react-promise-tracker";

export const membersRequest = (members: MemberEntity[]) => ({
	type: actionsEnums.MEMBERS_REQUEST,
	payload: members
});

export const errorRequestCompany = (errorEntity: ErrorEntity) => ({
	type: actionsEnums.ERROR_REQUEST,
	payload: errorEntity
});

export const loadMembers = (organization) => (dispatcher) => {
	const promise = getAllMembers(organization);
	const errorEntity: ErrorEntity = {
		organization,
		booleanError: false,
		txtError: "",
		nameLogin: ""
	};

	trackPromise(
		promise
			.then((members) => {
				dispatcher(membersRequest(members));
				dispatcher(errorRequestCompany(errorEntity));
				return members;
			})
			.catch((error) => {
				errorEntity.booleanError = true;
				errorEntity.txtError = error;
				dispatcher(errorRequestCompany(errorEntity));
				return errorEntity;
			})
	);

	return promise;
};
