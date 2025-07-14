import React, {useState, useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
// const CountdownTimer = () => {
// 	const [minutesInput, setMinutesInput] = useState("");
// 	const [timeLeft, setTimeLeft] = useState(0);
// 	const [isRunning, setIsRunning] = useState(false);
// 	const timerRef = useRef(null);

// 	// Format seconds into MM:SS
// 	const formatTime = (time) => {
// 		const minutes = Math.floor(time / 60)
// 		.toString()
// 		.padStart(2, "0");
// 		const seconds = (time % 60).toString().padStart(2, "0");
// 		return `${minutes}:${seconds}`;
// 	};

// 	// Start countdown
// 	const handleStart = () => {
// 		if (!isRunning && timeLeft > 0) {
// 			setIsRunning(true);
// 		}
// 	};

// 	// Pause countdown
// 	const handlePause = () => {
// 		setIsRunning(false);
// 	};

// 	// Reset countdown
// 	const handleReset = () => {
// 		setIsRunning(false);
// 		setTimeLeft(0);
// 		setMinutesInput("");
// 	};

// 	// Set time based on input
// 	const handleSetTime = () => {
// 		const parsed = parseInt(minutesInput);
// 		if (!isNaN(parsed) && parsed > 0) {
// 			setTimeLeft(parsed * 60);
// 		}
// 	};

// 	// Countdown logic
// 	useEffect(() => {
// 		if (isRunning && timeLeft > 0) {
// 			timerRef.current = setTimeout(() => {
// 				setTimeLeft((prev) => prev - 1);
// 			}, 1000);
// 		} else {
// 			clearTimeout(timerRef.current);
// 		}
// 		return () => clearTimeout(timerRef.current);
// 	}, [isRunning, timeLeft]);

// 	return (
// 		<div className="container py-5">
// 			<div className="row justify-content-center">
// 				<div className="col-md-6">
// 					<div className="card shadow-sm p-4 text-center">
// 						<h2 className="mb-4">⏳ Countdown Timer</h2>

// 						<h1 className="display-4 mb-4">{formatTime(timeLeft)}</h1>

// 						<div className="input-group mb-3">
// 							<input
// 								type="number"
// 								className="form-control"
// 								placeholder="Enter minutes"
// 								value={minutesInput}
// 								onChange={(e) => setMinutesInput(e.target.value)}
// 							/>
// 							<button className="btn btn-primary" onClick={handleSetTime}>
// 								Set
// 							</button>
// 						</div>

// 						<div className="d-flex justify-content-center gap-2">
// 							<button
// 								className="btn btn-success"
// 								onClick={handleStart}
// 								disabled={isRunning || timeLeft === 0}
// 							>
// 								Start
// 							</button>
// 							<button
// 								className="btn btn-warning"
// 								onClick={handlePause}
// 								disabled={!isRunning}
// 							>
// 								Pause
// 							</button>
// 							<button className="btn btn-danger" onClick={handleReset}>
// 								Reset
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
function CountdownTimer() {
	const navigate = useNavigate();
	return (
		<div>
			<div className="container py-5">
				<div className="row justify-content-center">
					<div className="col-md-6">
						<div className="card shadow-sm text-center p-4">
							<h2 className="mb-3">🚧 Work In Progress</h2>
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
export default CountdownTimer;
