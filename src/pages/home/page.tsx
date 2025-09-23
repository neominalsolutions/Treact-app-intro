import { Link } from 'react-router';

function Home() {
	return (
		<>
			<p>Home Page</p>

			<Link to={'/about'}>Hakkımızda Sayfası</Link>
		</>
	);
}

export default Home;

// React Router da 3 farklı yönlendirme mevcut.
// <Navlink /> <Link /> Component arayüzlerde programtik olmayan link tanımla
// useNavigate Hook Component içinde programatik çağrılarda kullanılır. Save sonrası yönlendirme gibi. 