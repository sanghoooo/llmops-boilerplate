import { HStack, Heading, Image, Skeleton, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import useSWR from "swr";
import axios from "axios";
import dayjs from "dayjs";
import { useMemo } from "react";

export function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getUsers() {
	await sleep(1000);
	return await axios.get("https://dummyjson.com/users");
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

export function TrSkeleton({ length = 5 }: { length?: number }) {
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

export default function UsersTable() {
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
		<VStack w="100%" alignItems={"flex-start"} spacing={4}>
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
												<Image w="20px" h="20px" src={item.image} display={"inline-block"} />
												<Text>{item.username}</Text>
											</HStack>
										</Td>
										<Td>{item.age}</Td>
										<Td>
											{item.birthDate} ({dayjs(item.birthDate).format("MMM/DD")})
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
