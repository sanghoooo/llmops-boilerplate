## 1. 시작

-   Tech Stack

    -   [React](https://react.dev)
    -   [Typescript](https://www.typescriptlang.org)
    -   [Vite](https://vitejs.dev) 빌드 툴
    -   [Chakra UI](https://chakra-ui.com) UI 라이브러리
    -   [Recoil](https://recoiljs.org) 상태 관리
    -   [React Router](https://reactrouter.com/en/main) 라우팅 관리
    -   [SWR](https://swr.vercel.app/ko) 비동기 처리
    -   [Axios](https://axios-http.com) HTTP 통신

-   Getting started with **Vite**
    -   웹 빌드 툴, 소스 코드 빌드, 최적화, 압축, 번들링 등
    -   [https://vitejs.dev/guide/](url)
    -   `$ yarn create vite llmops-boilerplate --template vue`

<br/>

## 2. 필수 라이브러리 세팅

1. ### Chakra UI

    - 디자인된 각종 컴포넌트 제공
    - [https://chakra-ui.com/getting-started](url)
    - `$ yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion`

2. ### Recoil

    - 전역 상태 관리
    - [https://app.sideguide.dev/recoil/tutorial](url)
    - `$ yarn add recoil`

3. ### React Router

    - 페이지 라우팅, SPA 구현
    - [https://reactrouter.com/en/main/start/tutorial](url)
    - `$ yarn add react-router-dom localforage match-sorter sort-by`
    - 주소 접근 시 404 이슈
        - [https://stackoverflow.com/questions/43951720/react-router-and-nginx](url)
        - 혹은 createHashRouter 활용 [https://reactrouter.com/en/main/routers/create-hash-router](url)

4. ### React-i18next
    - 다국어 처리
    - [https://react.i18next.com/getting-started](url)
    - `$ yarn add react-i18next i18next`

```
// App.tsx
import { Center, ChakraProvider, Heading, Select } from "@chakra-ui/react";
import { RecoilRoot, atom, useRecoilState } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initReactI18next, useTranslation } from "react-i18next";
import { useEffect } from "react";
import i18n from "i18next";

// 다국어 지원 라이브러리 init
i18n.use(initReactI18next).init({
  resources: {
    kr: {
      translation: {
        hello: "안녕",
        selectLanguage: "언어 선택",
        korean: "한국어",
        english: "영어",
      },
    },
    en: {
      translation: {
        hello: "Hello",
        selectLanguage: "Select language",
        korean: "Korean",
        english: "English",
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
        <Center minH="100vh" w="100%">
          <RouterProvider
            // 라우팅 생성, 각 path 별 페이지 컴포넌트 할당
            router={createBrowserRouter([
              {
                path: "/",
                element: <Heading>Home</Heading>,
              },
              {
                path: "/change-language",
                element: (
                  <div style={{ width: 200 }}>
                    <LangaugeSelector />
                  </div>
                ),
              },
            ])}
          />
        </Center>
      </RecoilRoot>
    </ChakraProvider>
  );
}

// Recoil atom 으로 언어 설정값 관리
const languageState = atom<string>({
  key: "languageState",
  default: "kr",
});

function LangaugeSelector() {
  const { t } = useTranslation();
  const [language, setLanguage] = useRecoilState(languageState);

  // 리액트 상태 변경 시 호출되는 Hook
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <Select // Chakra UI 내 Select 컴포넌트 활용
      placeholder={t("selectLanguage")}
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
    >
      <option value="kr">{t("korean")}</option>
      <option value="en">{t("english")}</option>
    </Select>
  );
}

```
