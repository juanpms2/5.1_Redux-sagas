import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./app";
import { createStore, applyMiddleware, compose } from "redux";
import { globalReducers } from "core";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

const nonTypedWindow: any = window;

const composeEnhancers =
	nonTypedWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	globalReducers,
	/* preloadedState, */ composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
