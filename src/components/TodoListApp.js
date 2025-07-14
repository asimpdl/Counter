import {React, useState} from "react";
import {useNavigate} from "react-router-dom";

const TodoListApp = () => {
	const handleTodo = () => {
		setTodos([...todos, todo]);
	};
	const handleDelete = (indexToDelete) => {
		const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
		setTodos(updatedTodos);
	};
	const data = [
		{
			value: "Task 1",
		},
		{
			value: "Task 2",
		},
		{
			value: "Task 3",
		},
	];
	let [todos, setTodos] = useState([]);
	let [todo, setTodo] = useState("");
	let navigate = useNavigate();

	return (
		<div>
			<>
				<div className="container py-5">
					<div className="row justify-content-center">
						<div className="col-md-6">
							<div className="card shadow-sm p-4">
								<button
									className="customButton text-white px-4 py-2 rounded "
									onClick={() => navigate(-1)}
								>
									Go Back
								</button>
								<h2 className="text-center mb-4">📝 To-Do List</h2>
								{/* Input Form */}
								<div className="input-group mb-3">
									<input
										type="text"
										className="form-control"
										placeholder="Add a new task..."
										id="inputValue"
										onChange={(e) => {
											setTodo(e.target.value);
										}}
									/>
									<button
										className="btn btn-primary"
										type="button"
										onClick={handleTodo}
									>
										Add
									</button>
								</div>

								{/* Task List */}
								<ul className="list-group">
									{todos.map((item, idx) => (
										<li
											key={idx}
											className="list-group-item d-flex justify-content-between align-items-center"
										>
											{item}
											<button
												className="btn btn-sm btn-danger"
												onClick={() => handleDelete(idx)}
											>
												Delete
											</button>
										</li>
									))}
								</ul>
								{/* <ul className="list-group">
									<li className="list-group-item d-flex justify-content-between align-items-center">
										Sample Task
										<button className="btn btn-sm btn-danger">Delete</button>
									</li>
								</ul> */}
							</div>
						</div>
					</div>
				</div>
			</>
		</div>
	);
};

export default TodoListApp;
