import React, { useContext } from 'react';
import { Link } from 'react-router';
import { CounterContext } from '../../../contexts/counter.context';

function Page2() {
	const [counter, setCounter] = React.useState(1);
	const globalState = useContext(CounterContext); // contexten paylaşılan veriyi çek.

	return (
		<>
			<>
				<hr></hr>
				Page2
				<br></br>
				<p>Local Sayac: {counter}</p>
				<p>Global Sayac: {globalState?.counter}</p>
				<button onClick={() => setCounter(counter + 1)}>(+)</button>
				<br></br>
				<Link to="/page1">Page 2</Link>
				<hr></hr>
			</>
		</>
	);
}

export default Page2;
