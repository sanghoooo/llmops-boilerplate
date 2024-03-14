import { Heading, VStack } from "@chakra-ui/react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

function Login() {
	return (
		<VStack alignItems={"flex-start"}>
			<Heading as="h3">Google Login</Heading>
			<GoogleLogin
				onSuccess={(credentialResponse: any) => {
					console.log(credentialResponse);
				}}
				onError={() => {
					console.log("Login Failed");
				}}
			/>
		</VStack>
	);
}

export default function Utility() {
	return (
		<GoogleOAuthProvider clientId={""}>
			<VStack w="100%" alignItems={"flex-start"} p="100px" spacing={"100px"}>
				<Login />
			</VStack>
		</GoogleOAuthProvider>
	);
}
