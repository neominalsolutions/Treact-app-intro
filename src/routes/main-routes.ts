import type { RouteObject } from 'react-router';
import Home from '../pages/home/page';
import MainLayout from '../layout/main-layout';
import About from '../pages/about/page';
import PhotoPage from '../pages/photo/page';
import PhotoDetailPage from '../pages/photo/[id]/page';

export const mainRoutes: RouteObject = {
	path: '',
	Component: MainLayout,
	children: [
		{
			index: true, // / pathdeki işlk açılış sayfası için index:true
			Component: Home, // sayfa ilk yüklenir / path açılır ve outlet kısmına otomatik olarak Home page girer.
		},
		{
			path: '/about',
			Component: About,
		},
		{
			path: '/photos',
			Component: PhotoPage,
		},
		{
			path: '/photos/:id',
			Component: PhotoDetailPage,
		},
	],
};
