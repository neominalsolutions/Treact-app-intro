import { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router';
import AppGrid from '../../components/app-grid';

const LazyDemo = lazy(() => import('../../components/lazy-demo'));

function About() {
	// use ile başlayan herşey react da hooktur.
	// hook yapılarıda componentlere davranış kazandıran özel functionlar.
	// buton ile yapılan yönlendirme
	// Link componenti yerine kendi butonumuz kullanarak yönlendirme yaptık.
	const navigate = useNavigate();

	return (
		<>
			<p>About Page</p>

			<br></br>
			<hr></hr>

			<Suspense fallback={<>...Loading</>}>
				<LazyDemo />
			</Suspense>

			<AppGrid />

			<br></br>
			<hr></hr>

			<button onClick={() => navigate('/')}>Anasayfa</button>
		</>
	);
}

export default About;
