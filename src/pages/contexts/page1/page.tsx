import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router';
import { CounterContext } from '../../../contexts/counter.context';

function Page1() {
	const [counter, setCounter] = React.useState(0);
	// global state bağlanmak için useState yerine useContext kullanıyoruz.
	const globalState = useContext(CounterContext);
	useEffect(() => {
		// cleanup functions
		return () => {
			console.log('page1 domdan çıktı');
		};
	}, []);

	return (
		<>
			<hr></hr>
			Page1
			<br></br>
			<p>Local Sayac: {counter}</p>
			<p>Global Sayac: {globalState?.counter}</p>
			<p>Counter Message: {globalState?.message}</p>
			<button onClick={() => setCounter(counter + 1)}>(+)</button>
			<button onClick={() => globalState?.increment()}>Global State (+)</button>
			<button onClick={() => globalState?.decrement()}>Global State (-)</button>
			<button onClick={() => globalState?.reset()}>Global State (reset)</button>
			<br></br>
			<Link to="/page2">Page 2</Link>
			<hr></hr>
		</>
	);
}

export default Page1;
