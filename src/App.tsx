import { useEffect, useState } from 'react';
import './App.css';

// export ile başka dosyalardan erişim sağlanır. import edebiliriz.

// const => ifadeleri functionlar için kullanılır
// genelde react uygulamalarında değişken tanımlam const ile yapıcaz.
// let ise değişken değeri altsatırda güncellenmei gerekirse kullancağımız diğer bir tanımlama.

// Ctrl+K+U açıklama satırını geri alır

// propslar function component içerisinde parametre olarak tanımlanır
type FunctionAppProps = {
	counter: number; // ? opsiyonel props tanımı için ? kullanırız.
};
// const initProps: FunctionAppProps = { counter: 0 };
// propstan gelen ilk init değerini state aktardık.
// dıştaki function component function
export function FunctionApp(props: FunctionAppProps) {
	// let counter = 0; // virtual dom state deışındaki değişkenleri takip edemez.
	const [counterState, setCounterState] = useState(props.counter);

	useEffect(() => {
		console.log('state-değişti', counterState);
	}, [counterState]); // eğer state değişimini bir sonraki satırda yakalayamıyorsak bu durumda virtual dom üzerinden değişen state takip edebilecek özel bir functionımız olmalı, biz bu functiona useEffect function diyoruz. Bu function asenkron çalışır.
	// Not: ekrana render edilen değeri yakalayıp üzerinde işlem yapmak için state takibi için useEffect hook (özel function) kullanılır.

	// arrow functions
	const onButtonClickHandler = () => {
		//counter++;
		// console.log('sayac' + counter);
		setCounterState(counterState + 1);
		// state asenkron çalışıyor
		console.log('counterState', counterState);
		// Cannot assign to read only property
		// Propslar State gibi set edilemez. Immutable olarak tanımlıdır.
		props.counter = props.counter + 1;
	};

	console.log('...rendering');

	return (
		<>
			{/* <p>Sayac: {counter}</p> */}
			<p>Props Counter:{props.counter}</p>
			<p>Sayac: {counterState}</p>
			<button onClick={onButtonClickHandler}>Click Me</button>

			<hr></hr>
		</>
	);
}
