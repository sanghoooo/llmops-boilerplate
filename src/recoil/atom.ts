import { atom } from "recoil";

// Recoil atom 으로 언어 설정값 관리
export const languageState = atom<string>({
	key: "languageState",
	default: "kr",
});
