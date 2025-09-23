import { createContext, useState } from 'react';

export type CounterContextType = {
	counter: number; // state dışıradan componentten get edeceğimiz değer güncel state, state
	dispatch: () => void; // state değiştirmek için kullanılan func, setState
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

	// her serferinde her çağrıda 1 artır.
	const dispatch = () => {
		setCounter(counter + 1);
	};

	// {children} route eklenen tüm componentler uygulanın en dışına sararak uygulama içindeki tüm componentlere veri aktarımı için bir tanımlama yapmış olduk.
	// value={{ counter, dispatch }} -> componentlerden erişilecek değerler
	return (
		<CounterContext.Provider value={{ counter, dispatch }}>
			{children}
		</CounterContext.Provider>
	);
};
