import {
	HStack,
	Heading,
	IconButton,
	Image,
	Skeleton,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	VStack,
} from "@chakra-ui/react";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import axios from "axios";
import dayjs from "dayjs";
import { useMemo, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoogleLogin, GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

export function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getUsers() {
	await sleep(1000);
	return await axios.get("https://dummyjson.com/users");
}

async function getProducts() {
	await sleep(1000);
	return await axios.get("https://dummyjson.com/products");
}

type UserDefinition = {
	id: string;
	username: string;
	age: number;
	birthDate: string;
	gender: string;
	university: string;
	image?: string;
};

function TrSkeleton({ length = 5 }: { length?: number }) {
	return (
		<Tr>
			{Array.from({ length }, () => null).map((_, index) => {
				return (
					<Td key={index}>
						<Skeleton h="20px" />
					</Td>
				);
			})}
		</Tr>
	);
}

function UsersTable() {
	const { data, isLoading } = useSWR("/users", getUsers, {
		revalidateOnFocus: false,
		onSuccess: (data) => {
			console.log(data);
		},
		onError: (error) => {
			console.error(error);
		},
	});

	const list = useMemo(() => (data?.data?.users || []).slice(-5) as UserDefinition[], [data]);

	return (
		<VStack w="100%" alignItems={"flex-start"}>
			<Heading as="h3">Users</Heading>
			<TableContainer w="100%">
				<Table w="100%">
					<Thead>
						<Tr>
							<Th>User Name</Th>
							<Th>Age</Th>
							<Th>Birth Date</Th>
							<Th>Gender</Th>
							<Th>University</Th>
						</Tr>
					</Thead>
					<Tbody>
						{isLoading ? (
							<TrSkeleton />
						) : (
							list.map((item) => {
								return (
									<Tr key={item.id}>
										<Td>
											<HStack>
												<Image
													w="20px"
													h="20px"
													src={item.image}
													display={"inline-block"}
												/>
												<Text>{item.username}</Text>
											</HStack>
										</Td>
										<Td>{item.age}</Td>
										<Td>
											{item.birthDate} (
											{dayjs(item.birthDate).format("MMM/DD")})
										</Td>
										<Td>{item.gender}</Td>
										<Td>{item.university}</Td>
									</Tr>
								);
							})
						)}
					</Tbody>
				</Table>
			</TableContainer>
		</VStack>
	);
}

type ProductDefinition = {
	id: string;
	title: string;
	description: number;
	price: number;
	brand: string;
	category: string;
};

function ProductsTable() {
	const toast = useToast();
	const { data, isMutating, trigger } = useSWRMutation("/users", getProducts, {
		onSuccess: (data) => {
			toast({
				title: `The number of products is ${data?.data?.total}`,
				status: "success",
				duration: 3000,
			});
		},
	});

	const list = useMemo(
		() => (data?.data?.products || []).slice(-5) as ProductDefinition[],
		[data]
	);

	return (
		<VStack w="100%" alignItems={"flex-start"}>
			<HStack>
				<Heading as="h3">Tables</Heading>
				<IconButton
					aria-label="reload"
					icon={<FontAwesomeIcon icon={faRotate} />}
					onClick={() => trigger()}
				/>
			</HStack>
			<TableContainer w="100%">
				<Table
					w="100%"
					overflow={"hidden"}
					style={{
						tableLayout: "fixed",
					}}
				>
					<Thead>
						<Tr>
							<Th w="20%">Title</Th>
							<Th w="15%">Brand</Th>
							<Th>Description</Th>
							<Th w="5%">Price</Th>
							<Th w="15%">Category</Th>
						</Tr>
					</Thead>
					<Tbody>
						{isMutating ? (
							<TrSkeleton />
						) : (
							list.map((item) => {
								return (
									<Tr key={item.id}>
										<Td>
											<Text>{item.title}</Text>
										</Td>
										<Td>{item.brand}</Td>
										<Td
											whiteSpace={"nowrap"}
											overflow={"hidden"}
											textOverflow={"ellipsis"}
										>
											{item.description}
										</Td>
										<Td>${item.price}</Td>
										<Td>{item.category}</Td>
									</Tr>
								);
							})
						)}
					</Tbody>
				</Table>
			</TableContainer>
		</VStack>
	);
}

export default function Async() {
	return (
		<VStack w="100%" alignItems={"flex-start"} p="100px" spacing={"100px"}>
			<UsersTable />
			<ProductsTable />
		</VStack>
	);
}
