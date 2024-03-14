import { Button, HStack, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../../hooks";

export default function Home() {
	const navigate = useNavigate();

	useDocumentTitle();

	return (
		<VStack h="100vh" alignItems={"center"} justifyContent={"center"}>
			<Heading mb={5}>LLMOps Boilerplate</Heading>
			<HStack>
				<Button onClick={() => navigate("/layout")}>Layout</Button>
				<Button onClick={() => navigate("/hook")}>Hook</Button>
				<Button onClick={() => navigate("/async")}>Async</Button>
				<Button onClick={() => navigate("/design")}>Design</Button>
				<Button onClick={() => navigate("/utility")}>Utility</Button>
			</HStack>
		</VStack>
	);
}
