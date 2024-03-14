import { Button, Code, Heading, Image, VStack, useColorMode } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGoogleLogin } from "@react-oauth/google";
import BI_T_white from "../../assets/images/BI_T_white.png";
import BI_T from "../../assets/images/BI_T.png";
import { useSearchParams } from "react-router-dom";

const googleEndpoint = "https://www.googleapis.com";
const tidEndpoint = "https://tapi.t-id.co.kr";
const tidClientId = "c578c3d8-3844-4b2c-a64a-22722c133f06";

export default function Login() {
	const [googleUserInfo, setGoogleUserInfo] = useState<any>();
	const [tidCode, setTidCode] = useState("");
	const { colorMode } = useColorMode();
	const [searchParams] = useSearchParams();

	const googleLogin = useGoogleLogin({
		onSuccess: async (tokenResponse) => {
			const { data } = await axios.get(`${googleEndpoint}/oauth2/v3/userinfo`, {
				headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
			});

			setGoogleUserInfo(data);
		},
		onError: (errorResponse) => {
			console.error(errorResponse);
		},
	});

	useEffect(() => {
		const code = searchParams.get("code");
		if (code) {
			setTidCode(code);
		}
	}, [searchParams]);

	return (
		<VStack alignItems={"flex-start"} spacing={4}>
			<Heading as="h3">Login</Heading>
			<Button
				isDisabled={!!googleUserInfo}
				leftIcon={<FontAwesomeIcon icon={faGoogle} />}
				onClick={() => googleLogin()}
			>
				Login with Google
			</Button>
			{googleUserInfo && <Code whiteSpace={"pre-wrap"}>{JSON.stringify(googleUserInfo, null, 2)}</Code>}
			<Button
				isDisabled={!!tidCode}
				leftIcon={<Image h="1em" src={colorMode === "dark" ? BI_T_white : BI_T} />}
				onClick={() => {
					window.open(
						`${tidEndpoint}/oidc/v20/authorize?client_id=${tidClientId}&redirect_uri=${window.location.origin}/async`,
						"_self"
					);
				}}
			>
				Login with T-ID
			</Button>
			{tidCode && <Code whiteSpace={"pre-wrap"}>{tidCode}</Code>}
		</VStack>
	);
}
