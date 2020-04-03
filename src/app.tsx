import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Spinner, SimpleModalContainer } from "common";
import { switchRoutes } from "core";
import { IndexScene, MembersScene, FileMemberScene } from "scenes";

interface Props {}

export const App: React.FunctionComponent = () => {
	return (
		<>
			<Spinner />

			<SimpleModalContainer />
			<HashRouter>
				<Switch>
					<Route
						exact={true}
						path={[switchRoutes.root, switchRoutes.index]}
						component={IndexScene}
					/>
					<Route
						exact={false}
						path={[switchRoutes.members]}
						component={MembersScene}
					/>

					<Route
						exact={true}
						path={[switchRoutes.fileMember]}
						component={FileMemberScene}
					/>
				</Switch>
			</HashRouter>
		</>
	);
};
