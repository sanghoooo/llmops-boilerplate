import {
	Box,
	Button,
	HStack,
	Heading,
	ListItem,
	Text,
	UnorderedList,
	VStack,
} from "@chakra-ui/react";
import Header from "./Header";
import { useState } from "react";
import { useDocumentTitle } from "../../hooks";
import { version } from "../../../package.json";

export default function Layout() {
	const [colored, setColored] = useState(false);

	useDocumentTitle("Layout");

	return (
		<>
			{/**
			 * <></>
			 * Fragment
			 * 여러 컴포넌트를 하나로 묶어 줄 때 사용
			 * https://react.dev/reference/react/Fragment
			 */}
			<Header background={colored ? "blue.200" : "blackAlpha.200"} />
			<HStack
				width={"100%"}
				height={`calc(100vh - ${80}px)`}
				marginTop={"80px"} // header 높이
			>
				<VStack
					height={"100%"}
					width={"250px"}
					background={colored ? "teal.300" : undefined}
					paddingTop={"50px"}
				>
					<Button marginBottom="40px" onClick={() => setColored(!colored)}>
						Toggle Bg
					</Button>
					<UnorderedList fontSize={"xl"} fontWeight={"bold"} spacing={"20px"}>
						<ListItem cursor={"pointer"}>A.X LLM</ListItem>
						<ListItem cursor={"progress"}>Multi LLM</ListItem>
						<ListItem cursor={"not-allowed"}>Telco LLM</ListItem>
					</UnorderedList>
				</VStack>
				<Box width={"100%"} height={"100%"} padding={"100px"}>
					<Box
						width={"inherit"}
						height={"inherit"}
						background={colored ? "teal.300" : undefined}
					>
						<Heading marginBottom="20px" whiteSpace={"pre-wrap"}>
							{"Unlocking Insights:\nTelBench's Role in Advancing Telecommunications"}
						</Heading>
						<Text>
							Benchmarking the performance of the Telco LLM that is tuned with
							well-designed data is a key element in the development of the Telco LLM.
							SKT's AI Tech Collaboration Group comprehensively measures the
							performance of LLMs on a battery of tasks, ranging from general tasks
							that measure the reasoning ability or language ability of general models
							to telco-specific tasks that measure the ability to perform tasks
							specialized to the telco domain. SKT’s team of fantastic linguists
							designed the tasks and the benchmark data.
							<br />
							<br />
							Benchmarking is performed at regular intervals, and from each round of
							benchmarking, we are able to glean key insights into each LLM. When we
							benchmark, we can closely examine areas of strength for an LLM, as well
							as areas that need improvement. We can also objectively measure
							performance of an LLM by comparing it with other models. These carefully
							designed benchmarks take into account not only LLM capability but also
							business perspectives. The business perspective is particularly
							important, as it’s a measure of how useful and effective the LLM will be
							when deployed in an actual business use case.
						</Text>
					</Box>
				</Box>
			</HStack>
			<VStack
				as="footer"
				height={"200px"}
				background={colored ? "pink.300" : "blackAlpha.300"}
				justifyContent={"center"}
				alignItems={"flex-start"}
				px="100px"
				pb="40px"
			>
				<VStack alignItems={"flex-start"} spacing={0} flex={1} justifyContent={"center"}>
					<Text fontSize={"xl"} fontFamily={"Tgothic"} fontWeight={700}>
						LLMOps
					</Text>
					<Text fontSize={"xs"} fontWeight={700}>
						AI Platform / LLMOps Team
					</Text>
				</VStack>
				<Text fontSize={"xs"}>CopyrightⓒSK Telecom Co., Ltd. All Rights Reserved.</Text>
			</VStack>
		</>
	);
}
