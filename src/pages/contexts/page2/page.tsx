import React from 'react';
import { Link } from 'react-router';

function Page2() {
	const [counter, setCounter] = React.useState(1);

	return (
		<>
			<>
				<hr></hr>
				Page2
				<br></br>
				<p>Sayac: {counter}</p>
				<button onClick={() => setCounter(counter + 1)}>(+)</button>
				<br></br>
				<Link to="/page1">Page 2</Link>
				<hr></hr>
			</>
		</>
	);
}

export default Page2;
