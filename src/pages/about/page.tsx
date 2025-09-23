import { useNavigate } from 'react-router';

function About() {
	// use ile başlayan herşey react da hooktur.
	// hook yapılarıda componentlere davranış kazandıran özel functionlar.
	// buton ile yapılan yönlendirme
	// Link componenti yerine kendi butonumuz kullanarak yönlendirme yaptık.
	const navigate = useNavigate();

	return (
		<>
			<p>About Page</p>

			<button onClick={() => navigate('/')}>Anasayfa</button>
		</>
	);
}

export default About;
