import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Counter() {
	let navigate = useNavigate();
	let [count, setCount] = useState(0);
	return (
		<>
			<div className="container d-flex justify-content-center align-items-center vh-100">
				<div className="card text-center shadow p-4" style={{width: "350px"}}>
					<button
						className="customButton text-white px-4 py-2 rounded "
						onClick={() => navigate(-1)}
					>
						Go Back
					</button>
					<h2 className="mb-4">Counter App</h2>

					<div className="display-4 fw-bold mb-4" id="count">
						{count}
					</div>

					<div className="d-grid gap-2 d-md-flex justify-content-md-center">
						<button
							className="btn btn-success me-md-2"
							id="increase"
							onClick={() => {
								console.log(count);
								setCount(count + 1);
							}}
						>
							+ Increase
						</button>
						<button
							className="btn btn-danger me-md-2"
							id="decrease"
							onClick={() => {
								if (count > 0) {
									setCount(count - 1);
								}
							}}
						>
							- Decrease
						</button>
						<button
							className="btn btn-secondary"
							id="reset"
							onClick={() => {
								setCount((count = 0));
							}}
						>
							Reset
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Counter;
