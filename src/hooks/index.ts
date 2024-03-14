import { useEffect, useState } from "react";

export function useStickyState(defaultValue: any, key: string, parser?: (value: any) => any) {
	const [value, setValue] = useState(() => {
		const stickyValue = localStorage.getItem(key);
		if (stickyValue === null) {
			return defaultValue;
		} else if (typeof parser === "function") {
			return parser(stickyValue);
		}

		try {
			return JSON.parse(stickyValue);
		} catch (e) {
			return stickyValue;
		}
	});
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);
	return [value, setValue];
}

export function usePreventUnload(condition: boolean) {
	useEffect(() => {
		if (condition) {
			window.onbeforeunload = (event) => {
				event.preventDefault();
			};
		} else {
			window.onbeforeunload = null;
		}

		return () => {
			window.onbeforeunload = null;
		};
	}, [condition]);
}

export function useDocumentTitle(title?: string) {
	useEffect(() => {
		let merged = "LLMOps Boilerplate";
		if (title) {
			merged += ` | ${title}`;
		}

		document.title = merged;
	}, []);
}
