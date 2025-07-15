import React from "react";
import {useNavigate} from "react-router-dom";

function QuizApp() {
	const navigate = useNavigate();
	return (
		<div>
			<div className="container py-5">
				<div className="row justify-content-center">
					<div className="col-md-6">
						<div className="card shadow-sm text-center p-4">
							<h2 className="mb-3">Work In Progress</h2>
							<p className="text-muted">This section is not yet completed.</p>
							<button
								className="btn btn-outline-secondary mt-3"
								onClick={() => navigate(-1)}
							>
								Go Back
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default QuizApp;
