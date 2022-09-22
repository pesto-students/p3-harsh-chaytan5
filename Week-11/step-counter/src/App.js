import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions";

function App() {
	const stepCount = useSelector((state) => state);
	const dispatch = useDispatch();

	return (
		<div className="App">
			<h1>Step Counter</h1>
			<h3>You have walked {stepCount} steps today!</h3>
			<button onClick={() => dispatch(actions.addStep())}>Add a Step</button>
			<br />
			<button className="reset-btn" onClick={() => dispatch(actions.reset())}>
				Reset
			</button>
		</div>
	);
}

export default App;
