import { NavLink, Outlet } from 'react-router';

// Layout üzerindeki menülerde hangi component page kaldığımızı anlamk için Navlink kullanılır.
import './main-layout.css'; // css import
import Grid from '@mui/material/Grid';
import Sidebar from '../components/sidebar';
import ResponsiveAppBar from '../components/appbar';

function MainLayout() {
	return (
		<>
			<ResponsiveAppBar />

			{/* 12'lik grid sistemi kullanırz */}
			<Grid container spacing={2}>
				<Grid size={12}>
					<Outlet />
				</Grid>
			</Grid>

			<footer>Alt Bilgi</footer>
		</>
	);
}

export default MainLayout;
