import React from "react";
import { connect } from "react-redux";
import { SimpleModalComponent } from "./modal.component";
import { GlobalState } from "core";
import { ErrorEntity } from "model";
import { linkRoutes } from "core";

interface Props {
	errorEntity: ErrorEntity;
}

const InnerSimpleModalContainer: React.FunctionComponent<Props> = (props) => {
	const { errorEntity } = props;
	const { booleanError, txtError, organization } = errorEntity;
	const [open, setOpen] = React.useState(errorEntity.booleanError);

	// Se ejecuta cada vez que cambia la propiedad y muestra el mensaje si el valor es true.
	React.useEffect(() => {
		setOpen(booleanError);
	}, [booleanError]);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		location.href = linkRoutes.root;
	};

	return (
		<SimpleModalComponent
			booleanError={open}
			txtError={txtError}
			organization={organization}
			handleClose={handleClose}
		/>
	);
};

const mapStateToProps = (globalState: GlobalState) => {
	return {
		errorEntity: globalState.errorReducer,
	};
};

export const SimpleModalContainer = connect(mapStateToProps)(
	InnerSimpleModalContainer
);
