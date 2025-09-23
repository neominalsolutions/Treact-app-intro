import React, { useEffect } from 'react';
import { Link } from 'react-router';

function Page1() {
	const [counter, setCounter] = React.useState(0);

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
			<p>Sayac: {counter}</p>
			<button onClick={() => setCounter(counter + 1)}>(+)</button>
			<br></br>
			<Link to="/page2">Page 2</Link>
			<hr></hr>
		</>
	);
}

export default Page1;
