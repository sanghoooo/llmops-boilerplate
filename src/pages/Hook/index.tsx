import {
	Button,
	ButtonGroup,
	Grid,
	GridItem,
	HStack,
	Heading,
	IconButton,
	ListItem,
	Text,
	UnorderedList,
	VStack,
} from "@chakra-ui/react";
import { faDownLong, faRotate, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, createContext, useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
	ChildComponent,
	ChildHasChildWithContext,
	ChildHasChildWithProps,
	ChildWithContext,
	ChildWithProps,
} from "./Child";
import { random } from "lodash";
import { useDocumentTitle, usePreventUnload, useStickyState } from "../../hooks/index";
import { useOutsideClick } from "@chakra-ui/react";

const message = "Crafting the Ultimate Tuning Data Recipe";
const useContextLink = "https://react.dev/reference/react/useContext";
const useImperativeHandleLink = "https://react.dev/reference/react/useImperativeHandle";

function GridBox({ children }: { children?: ReactNode }) {
	return (
		<Grid padding={"100px"} gap={"100px"} templateColumns={"repeat(3, 1fr)"}>
			{children}
		</Grid>
	);
}

function GridItemVStack({ gap = 2, children }: { gap?: string | number; children: ReactNode }) {
	return (
		<GridItem>
			<VStack gap={gap}>{children}</VStack>
		</GridItem>
	);
}

type ParentContextValue = {
	count: number;
};

export const ParentContext = createContext<ParentContextValue | null>(null);

export default function Hook() {
	let [count, setCount] = useState(0);
	let [sticky, setSticky] = useStickyState(0, "sticky");
	const value = useRef(0);
	const childRef = useRef<{
		changePoint: () => void;
	}>(null);
	const [effected, setEffected] = useState(false);
	const [prevented, setPrevented] = useState(false);
	const insideRef = useRef(null);
	const [clickable, setClickable] = useState(false);

	useEffect(() => {
		if (effected) {
			alert(message);
		}
	}, [effected]);

	const alertCount = useCallback(() => {
		if (count % 2) {
			alert(message);
		}
	}, [count]);

	const whatNumber = useMemo(() => {
		return count % 2 ? "odd" : "even";
	}, [count]);

	usePreventUnload(prevented);

	useDocumentTitle("Hook");

	useOutsideClick({
		ref: insideRef,
		handler: () => {
			if (clickable) {
				alert("Telco giants form JV to push telco-specific LLM plan");
			}
		},
	});

	return (
		<>
			<GridBox>
				<GridItemVStack>
					<Heading as="h3">useState</Heading>
					<HStack spacing={5}>
						<Text fontSize={"xl"} fontWeight={700}>
							count: {count}
						</Text>
						<ButtonGroup>
							<IconButton
								onClick={() => setCount(count + 1)}
								aria-label="up"
								icon={<FontAwesomeIcon icon={faUpLong} />}
							/>
							<IconButton
								onClick={() => {
									count = count - 1;
								}}
								aria-label="down"
								icon={<FontAwesomeIcon icon={faDownLong} />}
							/>
						</ButtonGroup>
					</HStack>
				</GridItemVStack>
				<GridItemVStack>
					<Heading as="h3">useRef</Heading>
					<HStack spacing={5}>
						<Text fontSize={"xl"} fontWeight={700}>
							value: {value.current}
						</Text>
						<HStack>
							<IconButton
								onClick={() => {
									value.current = random(1, 10);
								}}
								aria-label="up"
								icon={<FontAwesomeIcon icon={faRotate} />}
							/>
						</HStack>
					</HStack>
				</GridItemVStack>
				<GridItemVStack>
					<Heading as="h3">useEffect</Heading>
					<HStack>
						<Button onClick={() => alert(message)}>Alert directly</Button>
						<Button onClick={() => setEffected(!effected)}>Alert declaratively</Button>
					</HStack>
				</GridItemVStack>
				<GridItemVStack gap={"100px"}>
					<VStack>
						<Heading as="h3">useCallback</Heading>
						<HStack>
							<Button onClick={alertCount}>
								Alert when the value of count is odd
							</Button>
						</HStack>
					</VStack>
					<VStack>
						<Heading as="h3">useMemo</Heading>
						<HStack>
							<Text>The state of count is {whatNumber} number</Text>
						</HStack>
					</VStack>
				</GridItemVStack>
				<GridItemVStack>
					<Heading as="h3">useContext</Heading>
					<Button size="sm" variant={"link"} onClick={() => window.open(useContextLink)}>
						{useContextLink}
					</Button>
					<HStack mt={2} alignItems={"stretch"}>
						<ChildWithProps count={count} />
						<ChildWithProps count={count} />
						<ChildWithProps count={count} />
						<ChildHasChildWithProps count={count} />
					</HStack>
					<ParentContext.Provider
						value={{
							count,
						}}
					>
						<VStack mt={2} padding={2} border="1px dashed" borderRadius={"4px"}>
							<Text fontWeight={700}>Parent Context</Text>
							<HStack alignItems={"stretch"}>
								<ChildWithContext />
								<ChildWithContext />
								<ChildWithContext />
								<ChildHasChildWithContext />
							</HStack>
						</VStack>
					</ParentContext.Provider>
				</GridItemVStack>
				<GridItemVStack>
					<Heading as="h3">useImperativeHandle</Heading>
					<Button
						size="sm"
						variant={"link"}
						onClick={() => window.open(useImperativeHandleLink)}
					>
						{useImperativeHandleLink}
					</Button>
					<VStack w="300px" mt={2} padding={2} border="1px solid" borderRadius={"4px"}>
						<Text fontWeight={700}>Child Component</Text>
						<ChildComponent ref={childRef} />
					</VStack>
					<Button mt={2} onClick={() => childRef?.current?.changePoint()}>
						Change outside
					</Button>
				</GridItemVStack>
			</GridBox>
			<hr />
			<GridBox>
				<GridItemVStack>
					<Heading as="h3">useStickyState</Heading>
					<HStack spacing={5}>
						<Text fontSize={"xl"} fontWeight={700}>
							sticky: {sticky}
						</Text>
						<ButtonGroup>
							<IconButton
								onClick={() => setSticky(random(30, 39))}
								aria-label="up"
								icon={<FontAwesomeIcon icon={faRotate} />}
							/>
						</ButtonGroup>
					</HStack>
				</GridItemVStack>
				<GridItemVStack>
					<Heading as="h3">usePreventUnload</Heading>
					<HStack spacing={5}>
						<Text fontSize={"xl"} fontWeight={700}>
							prevented: {String(prevented)}
						</Text>
						<ButtonGroup>
							<Button onClick={() => setPrevented(!prevented)}>Toggle</Button>
						</ButtonGroup>
					</HStack>
				</GridItemVStack>
				<GridItemVStack>
					<Heading as="h3">useAPI</Heading>
					<UnorderedList>
						<ListItem>llm-assistant-frontend/src/hooks/api.ts</ListItem>
						<ListItem>API 호출 전 세션 검증</ListItem>
						<ListItem>AccessToken 갱신 후 재시도</ListItem>
						<ListItem>호출 결과 에러 일괄 처리</ListItem>
					</UnorderedList>
				</GridItemVStack>
				<GridItemVStack>
					<Heading as="h3">useDocumentTitle</Heading>
					<UnorderedList>
						<ListItem>페이지 진입 시 브라우저 탭 이름 변경</ListItem>
					</UnorderedList>
				</GridItemVStack>
				<GridItemVStack>
					<Heading as="h3">useOutsideClick</Heading>
					<VStack
						w="300px"
						mt={2}
						padding={2}
						border={`1px ${clickable ? "solid" : "dashed"}`}
						borderRadius={"4px"}
						ref={insideRef}
					>
						<Text fontWeight={700}>Inside</Text>
						<HStack>
							<Text>Ouside is {clickable ? "clickable" : "blocked"}</Text>
							<Button onClick={() => setClickable(!clickable)}>Toggle</Button>
						</HStack>
					</VStack>
					<Text fontWeight={700} mt={2}>
						Outside
					</Text>
				</GridItemVStack>
				<GridItemVStack>
					<Heading as="h3">· · ·</Heading>
				</GridItemVStack>
			</GridBox>
		</>
	);
}
