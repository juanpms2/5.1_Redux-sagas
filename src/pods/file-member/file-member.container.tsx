import * as React from "react";
import { FileCardMemberComponent } from "./file-member.component";
import { useParams } from "react-router-dom";
import { GlobalState, loadUser } from "core";
import { UserEntity } from "model";
import { connect } from "react-redux";

interface Props {
	user: UserEntity;
	loadUser: (login: string) => void;
}

const InnerFileCardMemberContainer: React.FunctionComponent<Props> = (
	props
) => {
	const { login } = useParams();
	const { user, loadUser } = props;

	React.useEffect(() => {
		loadUser(login);
	}, [login]);

	return <FileCardMemberComponent user={[user]} />;
};

const mapStateToProps = (globalState: GlobalState) => {
	return {
		user: globalState.userReducer
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadUser: (login) => {
			dispatch(loadUser(login));
		}
	};
};

export const FileCardMemberContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(InnerFileCardMemberContainer);
