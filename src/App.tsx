// App.tsx
import { Box, ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Hook from "./pages/Hook";
import Async from "./pages/Async";
import Design from "./pages/Design";
import Utility from "./pages/Utility";

// 다국어 지원 라이브러리 init
i18n.use(initReactI18next).init({
	resources: {
		kr: {
			translation: {
				hello: "안녕",
				selectLanguage: "언어 선택",
				korean: "한국어",
				english: "영어",
				boilerplate: "보일러플레이트",
			},
		},
		en: {
			translation: {
				hello: "Hello",
				selectLanguage: "Select language",
				korean: "Korean",
				english: "English",
				boilerplate: "Bolierplate",
			},
		},
	},
	lng: "kr", // 기본 언어 설정
	fallbackLng: "kr",
});

// 루트 컴포넌트
export default function App() {
	return (
		<ChakraProvider>
			<RecoilRoot>
				<Box minH="100vh" w="100%">
					<RouterProvider
						// 라우팅 생성, 각 path 별 페이지 컴포넌트 할당
						router={createBrowserRouter([
							{
								path: "/",
								element: <Home />,
							},
							{
								path: "/Layout",
								element: <Layout />,
							},
							{
								path: "/hook",
								element: <Hook />,
							},
							{
								path: "/async",
								element: <Async />,
							},
							{
								path: "/design",
								element: <Design />,
							},
							{
								path: "/utility",
								element: <Utility />,
							},
						])}
					/>
				</Box>
			</RecoilRoot>
		</ChakraProvider>
	);
}
