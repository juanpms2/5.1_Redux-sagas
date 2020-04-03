import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Modal from "@material-ui/core/Modal";

interface Props {
	booleanError: boolean;
	txtError: string;
	organization: string;
	handleClose: () => void;
}

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: "absolute",
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	error: {
		color: "red",
	},
}));

export const SimpleModalComponent: React.FunctionComponent<Props> = (props) => {
	const { organization, booleanError, txtError, handleClose } = props;
	const [modalStyle] = React.useState(getModalStyle);
	const classes = useStyles();

	return (
		<div>
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={booleanError}
				onClose={handleClose}
			>
				<div style={modalStyle} className={classes.paper}>
					<h2 id="simple-modal-title" className={classes.error}>
						Error: {organization} no existe.
					</h2>
					<p id="simple-modal-description">{txtError}</p>
					<button type="button" onClick={handleClose}>
						Cerrar
					</button>
				</div>
			</Modal>
		</div>
	);
};
