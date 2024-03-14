import { Select, SelectProps } from "@chakra-ui/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import i18n from "i18next";
import { languageState } from "../../../recoil/atom";

export default function LangaugeSelector(props: SelectProps) {
	const { t } = useTranslation();
	const [language, setLanguage] = useRecoilState(languageState);

	// 리액트 상태 변경 시 호출되는 Hook
	useEffect(() => {
		i18n.changeLanguage(language);
	}, [language]);

	return (
		<Select // Chakra UI 내 Select 컴포넌트 활용
			placeholder={t("selectLanguage")}
			value={language}
			onChange={(e) => setLanguage(e.target.value)}
			{...props}
		>
			<option value="kr">{t("korean")}</option>
			<option value="en">{t("english")}</option>
		</Select>
	);
}
