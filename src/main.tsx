// import { createRoot } from 'react-dom/client';
// import { FunctionApp } from './App';

import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from './layout/main-layout';
import Home from './pages/home/page';
import About from './pages/about/page';

// import './index.css';
// import { Demo } from './Demo';

// kullanılmayan dosyaları silmek için Alt+Shift+O tuş kombinasyonu kullanabiliriz.
// props değerlerini component çağırdığımız yerden veriyoruz.

// createRoot(document.getElementById('root')!).render(
// 	<>
// 		<FunctionApp counter={5} />
// 		<hr></hr>
// 		<FunctionApp counter={0} />

// 		<hr></hr>
// 		<Demo />
// 	</>
// );

const router = createBrowserRouter([
	{
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
		],
	},
]);

// yeni güncel versiyon
createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
);

// RouterProvider router={router} /> uygulamayı route yapısı ile ayağa kaldır.
