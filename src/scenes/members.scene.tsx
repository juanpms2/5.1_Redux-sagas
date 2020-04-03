import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { AppLayout } from "layout";
import { BarTitleComponent, MembersCollectionContainer } from "pods";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		width: "100%",
		padding: "0 20px"
	}
}));

export const MembersScene: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<AppLayout>
			<div className={classes.root}>
				<BarTitleComponent />
				<MembersCollectionContainer />
			</div>
		</AppLayout>
	);
};
