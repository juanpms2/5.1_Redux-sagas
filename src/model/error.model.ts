export interface ErrorEntity {
	organization: string;
	booleanError: boolean;
	txtError: string;
	nameLogin: string;
}

export const createDefaultErrorEntity = (): ErrorEntity => ({
	organization: "",
	booleanError: false,
	txtError: "",
	nameLogin: ""
});
