import * as React from "react";
import { MembersCollectionComponent } from "./members-collection.component";
import { useParams, useHistory } from "react-router-dom";
import { linkRoutes, GlobalState, loadMembers } from "core";
import { connect } from "react-redux";
import { MemberEntity } from "model";

interface Props {
	members: MemberEntity[];
	loadMembers: (organization: string) => void;
}

const InnerMembersCollectionContainer: React.FunctionComponent<Props> = (
	props
) => {
	const { members, loadMembers } = props;
	const { organization } = useParams();
	const history = useHistory();
	const [page, setPage] = React.useState(1);
	const increment: number = 4;
	const [init, setInit] = React.useState<number>(page);
	const [fin, setFin] = React.useState<number>(init + increment);
	const totalMembers: number = Math.round(members.length / 4);

	const loadMember = (value) => {
		history.push(linkRoutes.fileMember(value));
	};

	const reInicia = () => {
		setInit(0);
		setFin(increment);
		setPage(1);
		// members.slice(0, increment);
	};

	const handleChange = (event, value) => {
		setInit(value * increment - 4);
		setFin(value * increment);
		setPage(value);
	};

	React.useEffect(() => {
		loadMembers(organization);
		reInicia();
	}, [organization]);

	return (
		<MembersCollectionComponent
			showMembers={members.slice(init, fin)}
			totalMembers={totalMembers}
			page={page}
			handleChange={handleChange}
			loadMember={loadMember}
		/>
	);
};

const mapStateToProps = (globalState: GlobalState) => {
	return {
		members: globalState.membersReducer
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadMembers: (organization) => {
			dispatch(loadMembers(organization));
		}
	};
};

export const MembersCollectionContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(InnerMembersCollectionContainer);
