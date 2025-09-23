import { NavLink, Outlet } from 'react-router';

// Layout üzerindeki menülerde hangi component page kaldığımızı anlamk için Navlink kullanılır.
import './main-layout.css'; // css import

function MainLayout() {
	return (
		<>
			<nav>
				<NavLink
					className={({ isActive }) => (isActive ? 'active' : 'passive')}
					to="/"
				>
					Anasayfa
				</NavLink>
				{'|'}
				<NavLink
					className={({ isActive }) => (isActive ? 'active' : 'passive')}
					to="/about"
				>
					Hakkımızda
				</NavLink>
				{'|'}
				<NavLink
					className={({ isActive }) => (isActive ? 'active' : 'passive')}
					to="/photos"
				>
					Fotograflar
				</NavLink>
				{'|'}
				<a href="https://google.com">Google</a>
			</nav>

			<div>
				<Outlet />
			</div>

			<footer>Alt Bilgi</footer>
		</>
	);
}

export default MainLayout;
