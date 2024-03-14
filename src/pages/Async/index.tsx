import { Skeleton, Td, Tr, VStack } from "@chakra-ui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ProductsTable from "./ProductsTable";
import UsersTable from "./UserTable";
import Login from "./Login";
import SSE from "./SSE";

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

export default function Async() {
	return (
		<GoogleOAuthProvider clientId={"1053796626890-ej1e0jh4ro1npjcdphf53ubbdekr004o.apps.googleusercontent.com"}>
			<VStack w="100%" alignItems={"flex-start"} p="100px" spacing={"100px"}>
				<Login />
				<SSE />
				<UsersTable />
				<ProductsTable />
			</VStack>
		</GoogleOAuthProvider>
	);
}
