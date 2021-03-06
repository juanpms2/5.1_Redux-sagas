import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { globalReducers } from "core";
import { rootSaga } from "core";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer =
	(process.env.NODE_ENV !== "production" &&
		window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]) ||
	compose;

export const store = createStore(
	globalReducers,
	{},
	composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
