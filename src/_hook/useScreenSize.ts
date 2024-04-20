import { useState, useEffect } from "react";

const useScreenSize = () => {
	const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const handleResize = () => {
			setScreenSize({
				width: Number(typeof window !== "undefined" && window.innerWidth),
				height: Number(typeof window !== "undefined" && window.innerHeight),
			});
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return { screenSize, setScreenSize };
};

export default useScreenSize;
