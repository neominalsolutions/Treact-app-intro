import { createContext, useEffect, useState } from 'react';

export type CounterContextType = {
	message: string;
	counter: number; // state dışıradan componentten get edeceğimiz değer güncel state, state
	increment: () => void; // state değiştirmek için kullanılan func, setState
	decrement: () => void; // state değiştirmek için kullanılan func, setState
	reset: () => void; // state değiştirmek için kullanılan func, setState
	onReload: () => void; // sayfa ilk yüklemede reload edilirse git state güncel bilgiyi aktar
};

// eslint-disable-next-line react-refresh/only-export-components
export const CounterContext = createContext<CounterContextType | null>(null);

export const CounterProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	// yine useState hook ile yapıyoruz ama provider sayesinde global state'e dönüşmüş oluyor.
	const [counter, setCounter] = useState<number>(0); // ilk değeri 0
	const [message, setMessage] = useState<string>('');

	useEffect(() => {
		console.log('sayfa reload edildi');

		const _counter = localStorage.getItem('counter');
		if (_counter) {
			onReload();
		}
	}, []);

	// counter takip et değiştiğinde localStorage at
	// persist hale getirmek için
	useEffect(() => {
		localStorage.setItem('counter', counter.toString());
	}, [counter]);

	// her serferinde her çağrıda 1 artır.
	const increment = () => {
		setCounter(counter + 1);
	};

	const decrement = () => {
		if (counter == 0) {
			setMessage('counter değeri 0 olamaz');
		} else {
			setCounter(counter - 1);
		}
	};

	const reset = () => {
		setCounter(0);
	};

	const onReload = () => {
		const _counter = localStorage.getItem('counter');

		if (_counter) {
			setCounter(Number(_counter));
		}
	};

	// {children} route eklenen tüm componentler uygulanın en dışına sararak uygulama içindeki tüm componentlere veri aktarımı için bir tanımlama yapmış olduk.
	// value={{ counter, dispatch }} -> componentlerden erişilecek değerler
	return (
		<CounterContext.Provider
			value={{ counter, message, increment, decrement, reset, onReload }}
		>
			{children}
		</CounterContext.Provider>
	);
};
