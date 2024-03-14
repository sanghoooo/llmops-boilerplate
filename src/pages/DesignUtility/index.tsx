import {
	Link,
	HStack,
	Heading,
	ListItem,
	Text,
	UnorderedList,
	VStack,
	Icon,
	Tooltip,
} from "@chakra-ui/react";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import {
	faGripHorizontal,
	faHouse,
	faLink,
	faMagnet,
	faMobile,
	faObjectGroup,
	faPaintRoller,
	faPlane,
	faSearchDollar,
	faShoePrints,
	faTable,
	faUser,
	faUsers,
	faVenus,
	faZap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	PhoneIcon,
	ArrowLeftIcon,
	WarningIcon,
	DeleteIcon,
	SunIcon,
	StarIcon,
	EditIcon,
	HamburgerIcon,
	SettingsIcon,
} from "@chakra-ui/icons";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

export default function DesignUtility() {
	const [mdValue, setMDValue] = useState("");

	// return <>font icon jsonviewer rich-textarea rechart xlsx </>;
	return (
		<VStack w="100%" alignItems={"flex-start"} p="100px" spacing={"100px"}>
			<VStack alignItems={"flex-start"} spacing={4}>
				<Heading as="h3">Fonts</Heading>
				<UnorderedList>
					<ListItem>
						<HStack>
							<Text fontSize={"xl"} fontFamily={"IBM Plex Sans KR"} fontWeight={700}>
								IBM Plex Sans KR
							</Text>
							<Text fontFamily={"IBM Plex Sans KR"} ml={4}>
								Ensuring that the LLM is performant on general tasks is an important
								part of benchmarking, as this should be an area of strength for LLMs
							</Text>
						</HStack>
					</ListItem>
					<ListItem>
						<HStack>
							<Text fontSize={"xl"} fontFamily={"Tgothic"} fontWeight={700}>
								Tgothic
							</Text>
							<Text fontFamily={"Tgothic"} ml={4}>
								LLMs have a diverse set of capabilities that lead to good
								performance in terms of general language skills.
							</Text>
						</HStack>
					</ListItem>
					<ListItem>
						<HStack>
							<Text fontSize={"xl"} fontFamily={"Pretendard"} fontWeight={700}>
								Pretendard
							</Text>
							<Text fontFamily={"Pretendard"} ml={4}>
								As such, we created benchmarks to test LLMs’ basic abilities on the
								Korean language, including reading comprehension and meaning based
								on context.
							</Text>
						</HStack>
					</ListItem>
					<ListItem>
						<HStack>
							<Text fontSize={"xl"} fontFamily={"SUIT"} fontWeight={900}>
								SUIT
							</Text>
							<Text fontFamily={"SUIT"} ml={4}>
								These tasks are important when benchmarking an LLM, but as a Telco,
								we put more effort into designing Telco-specific tasks.
							</Text>
						</HStack>
					</ListItem>
				</UnorderedList>
			</VStack>
			<VStack alignItems={"flex-start"} spacing={4}>
				<Heading as="h3">ICON</Heading>
				<UnorderedList>
					<ListItem>
						<HStack>
							<Text fontSize={"xl"} fontWeight={700}>
								Font Awesome
							</Text>
							<Link href="https://fontawesome.com/" isExternal>
								<FontAwesomeIcon icon={faLink} />
							</Link>
							<HStack ml={4}>
								<FontAwesomeIcon icon={faHouse} />
								<FontAwesomeIcon icon={faUser} />
								<FontAwesomeIcon icon={faTable} />
								<FontAwesomeIcon icon={faSearchDollar} />
								<FontAwesomeIcon icon={faShoePrints} />
								<FontAwesomeIcon icon={faMobile} />
								<FontAwesomeIcon icon={faGripHorizontal} />
								<FontAwesomeIcon icon={faZap} />
								<FontAwesomeIcon icon={faPlane} />
								<FontAwesomeIcon icon={faApple} />
								<FontAwesomeIcon icon={faVenus} />
								<FontAwesomeIcon icon={faMagnet} />
								<FontAwesomeIcon icon={faUsers} />
								<FontAwesomeIcon icon={faObjectGroup} />
								<FontAwesomeIcon icon={faPaintRoller} />
								<Text>· · ·</Text>
							</HStack>
						</HStack>
					</ListItem>
					<ListItem>
						<HStack>
							<Text fontSize={"xl"} fontWeight={700}>
								Chakra Icon
							</Text>
							<Link href="https://chakra-ui.com/docs/components/icon" isExternal>
								<FontAwesomeIcon icon={faLink} />
							</Link>
							<HStack ml={4}>
								<Icon as={PhoneIcon} />
								<Icon as={ArrowLeftIcon} />
								<Icon as={WarningIcon} />
								<Icon as={DeleteIcon} />
								<Icon as={SunIcon} />
								<Icon as={StarIcon} />
								<Icon as={EditIcon} />
								<Icon as={HamburgerIcon} />
								<Icon as={SettingsIcon} />
								<Text>· · ·</Text>
							</HStack>
						</HStack>
					</ListItem>
				</UnorderedList>
			</VStack>
			<VStack alignItems={"flex-start"} spacing={4} w="100%">
				<Heading as="h3">Markdown Editor</Heading>
				<MDEditor
					value={mdValue}
					onChange={(value) => setMDValue(value || "")}
					style={{
						width: "100%",
					}}
				/>
			</VStack>
			<VStack alignItems={"flex-start"} spacing={4} w="100%">
				<Heading as="h3">Others</Heading>
				<UnorderedList>
					<ListItem>
						<HStack>
							<Text fontSize={"xl"} fontWeight={700}>
								Recharts
							</Text>
							<Link href="https://recharts.org/en-US/" isExternal>
								<FontAwesomeIcon icon={faLink} />
							</Link>
							<Text fontFamily={"IBM Plex Sans KR"} ml={4}>
								다양한 차트 생성
							</Text>
						</HStack>
					</ListItem>
					<ListItem>
						<HStack>
							<Text fontSize={"xl"} fontWeight={700}>
								Rich Textarea
							</Text>
							<Link
								href="https://inokawa.github.io/rich-textarea/?path=/story/basics-textarea--controlled"
								isExternal
							>
								<FontAwesomeIcon icon={faLink} />
							</Link>
							<Text fontFamily={"IBM Plex Sans KR"} ml={4}>
								텍스트 입력시 다양한 효과 적용이 가능하며, Playground - /Completions
								호출 결과에 활용
							</Text>
						</HStack>
					</ListItem>
					<ListItem>
						<HStack>
							<Text fontSize={"xl"} fontWeight={700}>
								XLSX
							</Text>
							<Link href="https://sheetjs.com/" isExternal>
								<FontAwesomeIcon icon={faLink} />
							</Link>
							<Text fontFamily={"IBM Plex Sans KR"} ml={4}>
								엑셀 입출력 지원
							</Text>
						</HStack>
					</ListItem>
				</UnorderedList>
			</VStack>
		</VStack>
	);
}
