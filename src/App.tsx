import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useLocalStorageForCount from "./_hook/useLocalStorageForCount";
import useScroll from "./_hook/useScroll";
import useScreenSize from "./_hook/useScreenSize";
import useDisclosure from "./_hook/useDisclosure";

function App() {
	const { count, increment, decrement, reset } =
		useLocalStorageForCount("test");
	const { isScroll } = useScroll();
	const { screenSize } = useScreenSize();
	const { handleClose, handleOpen, isOpen } = useDisclosure();

	return (
		<>
			<title>Custom Hooks</title>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<button
						onClick={() => {
							increment();
						}}
					>
						Increment
					</button>
					<button
						onClick={() => {
							reset();
						}}
					>
						Reset
					</button>
					<button
						onClick={() => {
							decrement();
						}}
					>
						Decrement
					</button>
				</div>
				<br />
				Count is {count}
			</div>
			<div className="card">Scroll Y {isScroll.toFixed(0)}</div>
			<div>
				Screen Width: {screenSize.width}
				<br />
				Screen Height: {screenSize.height}
			</div>
			<div className="card">
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<button
						onClick={() => {
							handleOpen();
						}}
					>
						Open
					</button>
					<button
						onClick={() => {
							handleClose();
						}}
					>
						Hide
					</button>
				</div>
				{isOpen && <div>Hello World!</div>}
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
