import { Button, HStack, Heading, Image, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../../hooks";
import home_square from "../../assets/images/home_square.png";

export default function Home() {
	const navigate = useNavigate();

	useDocumentTitle();

	return (
		<VStack h="100vh" alignItems={"center"} justifyContent={"center"} spacing={"30px"} pb="100px">
			<Image src={home_square} w="200px" height={"200px"} borderRadius={"4px"} animation={`hue-rotation 1s infinite`} />
			<Heading as="h1" fontFamily={"Tgothic"}>
				LLMOps Boilerplate
			</Heading>
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
