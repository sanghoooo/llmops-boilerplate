import { HStack, Heading, IconButton, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import useSWRMutation from "swr/mutation";
import axios from "axios";
import { useMemo } from "react";
import { useToast } from "@chakra-ui/react";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TrSkeleton } from ".";

async function getProducts() {
	return await axios.get("https://dummyjson.com/products");
}

type ProductDefinition = {
	id: string;
	title: string;
	description: number;
	price: number;
	brand: string;
	category: string;
};

export default function ProductsTable() {
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

	const list = useMemo(() => (data?.data?.products || []).slice(-5) as ProductDefinition[], [data]);

	return (
		<VStack w="100%" alignItems={"flex-start"} spacing={4}>
			<HStack>
				<Heading as="h3">Products</Heading>
				<IconButton aria-label="reload" icon={<FontAwesomeIcon icon={faRotate} />} onClick={() => trigger()} />
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
										<Td whiteSpace={"nowrap"} overflow={"hidden"} textOverflow={"ellipsis"}>
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
