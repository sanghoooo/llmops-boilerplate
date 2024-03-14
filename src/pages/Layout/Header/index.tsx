import { Flex, HStack, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import primary from "../../../assets/images/A.X_primary.png";
import negative from "../../../assets/images/A.X_negative.png";
import LangaugeSelector from "./LangaugeSelector";
import { useTranslation } from "react-i18next";
import ThemeToggler from "./ThemeToggler";

export default function Header({ background }: { background?: string }) {
	const navigate = useNavigate();
	const { t } = useTranslation();

	return (
		<HStack
			as="header"
			background={background}
			position={"fixed"}
			left={0}
			right={0}
			top={0}
			height="80px"
			px={"50px"}
			backdropFilter={"blur(20px)"}
			zIndex={1}
		>
			<Flex onClick={() => navigate("/")} cursor={"pointer"} gap={3} alignItems="center">
				<Image
					height="1.3em"
					src={useColorModeValue(primary, negative)}
					alt="logo"
					pos="relative"
					bottom={["0px", "1px"]}
				/>
				<Text fontSize="2xl" as="b" fontFamily="Tgothic">
					LLMOps {t("boilerplate")}
				</Text>
			</Flex>
			<LangaugeSelector marginLeft="auto" width={"200px"} />
			<ThemeToggler />
		</HStack>
	);
}
