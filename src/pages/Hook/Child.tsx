import { Button, HStack, StackProps, Text, VStack } from "@chakra-ui/react";
import {
	ReactNode,
	forwardRef,
	useCallback,
	useContext,
	useImperativeHandle,
	useState,
} from "react";
import { ParentContext } from ".";
import { random } from "lodash";

function VStackBox({ children, vStackProps }: { children: ReactNode; vStackProps?: StackProps }) {
	return (
		<VStack
			fontWeight={500}
			padding={1}
			border="1px solid"
			borderRadius={"4px"}
			alignItems={"center"}
			spacing={0}
			justifyContent={"center"}
			{...vStackProps}
		>
			{children}
		</VStack>
	);
}

export function ChildWithProps({ count }: { count?: number; children?: ReactNode }) {
	return (
		<VStackBox>
			<Text fontSize={"2xs"} lineHeight={"normal"} textAlign={"center"}>
				Child with{" "}
				<b>
					<i>props</i>
				</b>
			</Text>
			<Text fontSize={"xs"}>{count}</Text>
		</VStackBox>
	);
}

export function ChildHasChildWithProps({ count }: { count?: number }) {
	return (
		<VStackBox vStackProps={{ spacing: 1 }}>
			<Text fontSize={"2xs"} lineHeight={"normal"} textAlign={"center"}>
				Child has child with{" "}
				<b>
					<i>props</i>
				</b>
			</Text>
			<ChildWithProps count={count} />
		</VStackBox>
	);
}

export function ChildWithContext() {
	const context = useContext(ParentContext);

	return (
		<VStackBox>
			<Text fontSize={"2xs"} lineHeight={"normal"} textAlign={"center"}>
				Child with{" "}
				<b>
					<i>context</i>
				</b>
			</Text>
			<Text fontSize={"xs"}>{context?.count}</Text>
		</VStackBox>
	);
}

export function ChildHasChildWithContext() {
	return (
		<VStackBox vStackProps={{ spacing: 1 }}>
			<Text fontSize={"2xs"} lineHeight={"normal"} textAlign={"center"}>
				Child has child with{" "}
				<b>
					<i>context</i>
				</b>
			</Text>
			<ChildWithContext />
		</VStackBox>
	);
}

export const ChildComponent = forwardRef<{ changePoint: () => void }>(function ChildComponent(
	_,
	ref
) {
	const [point, setPoint] = useState(0);

	const changePoint = useCallback(() => {
		setPoint(random(700, 799));
	}, []);

	useImperativeHandle(
		ref,
		() => {
			return {
				changePoint,
			};
		},
		[]
	);

	return (
		<HStack>
			<Text fontWeight={700}>point: {point}</Text>
			<Button onClick={changePoint}>Change</Button>
		</HStack>
	);
});
