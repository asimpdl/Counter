import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CounterApp from "./components/CounterApp";
import Home from "./components/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TodoListApp from "./components/TodoListApp";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/counter" element={<CounterApp />} />
				<Route path="/todo" element={<TodoListApp />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
