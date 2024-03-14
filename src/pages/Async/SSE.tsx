import { Code, Heading, ListItem, UnorderedList, VStack } from "@chakra-ui/react";

const sseCode = `const response = await fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
});

const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
let result = "";

while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    const parsed = value
        .split("\/n\/n")
        .map((item) => {
            const value = item.replace("data:", "").trim();
            return value && value !== "[DONE]" ? JSON.parse(value) : undefined;
        })
        .filter((item) => !!item);

    parsed.forEach((item) => {
        if (!item.choices) {
            return;
        }

        const { text } = item.choices[0];
        if (text) {
            result += text;
            setPrompt(result)
        }
    });
}`;

export default function SSE() {
	return (
		<VStack w="100%" alignItems={"flex-start"} spacing={4}>
			<Heading as="h3">SSE</Heading>
			<UnorderedList>
				<ListItem>llm-assistant-frontend/src/pages/LLM/Playground/Completions/index.tsx</ListItem>
			</UnorderedList>
			<Code whiteSpace={"pre"}>{sseCode}</Code>;
		</VStack>
	);
}
