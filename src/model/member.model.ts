export interface MemberEntity {
	id: number;
	login: string;
	avatar_url: string;
	company: string;
}

export const createDefaultMemberEntity = (): MemberEntity => ({
	id: -1,
	login: "",
	avatar_url: "",
	company: ""
});
