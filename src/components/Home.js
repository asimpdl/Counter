import {useNavigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Home() {
	const navigate = useNavigate();

	const apps = [
		{title: "Counter App", path: "/counter", description: "Simple number counter with increment/decrement."},
		{
			title: "To-Do List",
			path: "/todo",
			description: "Track your tasks efficiently with add/delete functionality.",
		},
		{title: "Quiz App", path: "/quiz", description: "Answer simple questions to test your knowledge."},
		{title: "Countdown Timer", path: "/countdown", description: "Set a time and watch the countdown."},
	];

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
			<h1 className="text-4xl font-bold mb-6">🧠 React Mini Projects</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
				{apps.map((app, idx) => (
					<div key={idx} className="bg-white rounded-2xl shadow-md p-6 text-center">
						<h2 className="text-xl font-semibold mb-2">{app.title}</h2>
						<p className="text-gray-600 mb-4">{app.description}</p>
						<button
							className="customButton text-white px-4 py-2 rounded "
							onClick={() => navigate(app.path)}
						>
							Go to App
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default Home;
