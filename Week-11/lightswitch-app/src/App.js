import "./App.css";
import { useSelector, useDispatch } from 'react-redux'
import { flipLight } from "./actions";

function App() {
  const isLightOn = useSelector(state => state);
  const dispatch = useDispatch();
  const lightedness = isLightOn ? 'lit' : 'dark';

	return (
		<div className="App">
			<h1>The room is {lightedness} </h1>
		</div>
	);
}

export default App;
