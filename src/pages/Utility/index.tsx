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
