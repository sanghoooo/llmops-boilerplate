import { IconButton, useColorMode } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggler() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<IconButton
			aria-label="Toggle color mode"
			borderRadius={"full"}
			icon={<FontAwesomeIcon icon={colorMode === "dark" ? faSun : faMoon} />}
			onClick={toggleColorMode}
			variant="ghost"
		/>
	);
}
