/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';

// Not: Ekrana renderı geç verceğimiz düşündüğümüz componentleri Lazy olarak jsx içerisinde load edebiliriz. yanlız <Suspense fallback={<Loading />}><LazyComponent> </Suspense> formatında yazmamız lazım.
function LazyDemo() {
	const [users, setuser] = useState<any>([]);

	useEffect(() => {
		setTimeout(() => {
			setuser([
				{ id: 1, name: 'Ali' },
				{ id: 2, name: 'can' },
			]);
		}, 10000);
	}, []);

	return <>Users Count: {users.length}</>;
}

export default LazyDemo;
