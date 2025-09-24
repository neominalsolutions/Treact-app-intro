// memoisation kavramı => parent component -> child component
// react da parent component state değişimi sonrası render aldığını için parent içindeki child componentler bir props değişmesi react bunları rendera zorlar.
// bundan kaçınmamnın yöntemi ise memoisation kavramı

import { memo, useCallback, useMemo, useState } from 'react';

type ChildProps = {
	title?: string; // value type
	items?: string[];
	onSelect?: () => void; // ref type propslar propslar değişmese dahi memoization'ı bozar.
};

// Not: 1 Eğer-> Props içerisinde value type bir değer varsa, bu durumda react.memo işe yarar. Yenden render almayı engeller. Ya props içerisinde value type değil ref type varsa ne olacak.

const Child = ({ title }: ChildProps) => {
	console.log('...Child rendering');
	return (
		<>
			<h2>Child Component</h2>
			{title}
		</>
	);
};

const MemoChild = memo(Child); // value types 

// artık child component props değişmeden render almayacak

const Parent = () => {
	const [random, setRandom] = useState<number>(0);

	console.log('...Parent rendering');

	// Not: title gibi value type değerler props değişmenden component memoize olsun diye React.memo(component) kullan.

	// [...items,{id:1}] {...state,{name:'Ali'}}

	// [] component domda kaldığı sürece onItemSelectHandler bu func memoize et.
	// func tipindeki değerler useCallback kullan
	const onItemSelectHandler = useCallback(() => {
		console.log('...item select');
	}, []);

	// propstan gönderilen ref değerler object veya array tipindeki değerler bunlar için useMemo kullan
	const items = useMemo(() => {
		return [];
	}, []);

	return (
		<>
			<p>Random: {random}</p>
			<button onClick={() => setRandom(Math.random() * 10)}>Random</button>
			<hr></hr>
			{/* <Child /> */}
			<MemoChild items={items} onSelect={onItemSelectHandler} />
		</>
	);
};

function MemoPage() {
	return (
		<>
			<Parent />
		</>
	);
}

export default MemoPage;
