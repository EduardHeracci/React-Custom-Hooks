import { useState, useEffect } from "react";

const useScroll = () => {
	const [isScroll, setIsScroll] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setIsScroll(Number(typeof window !== "undefined" && window.scrollY));
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return { isScroll, setIsScroll };
};

export default useScroll;
