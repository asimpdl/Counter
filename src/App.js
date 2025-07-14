import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CounterApp from "./components/CounterApp";
import Home from "./components/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TodoListApp from "./components/TodoListApp";
import QuizApp from "./components/QuizApp";
import CountdownTimer from "./components/CounterDownApp";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/counter" element={<CounterApp />} />
				<Route path="/todo" element={<TodoListApp />} />
				<Route path="/quiz" element={<QuizApp />} />
				<Route path="/countdown" element={<CountdownTimer />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
