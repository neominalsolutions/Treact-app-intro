// import { createRoot } from 'react-dom/client';
// import { FunctionApp } from './App';

import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { mainRoutes } from './routes/main-routes';
import { adminRoutes } from './routes/admin-routes';
import { CounterProvider } from './contexts/counter.context';
import { Provider } from 'react-redux';
import store from './contexts/store';

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

const router = createBrowserRouter([mainRoutes, adminRoutes]);

// yeni güncel versiyon
createRoot(document.getElementById('root')!).render(
	<Provider store={store}> 
		<CounterProvider>
			<RouterProvider router={router} />
		</CounterProvider>
	</Provider>
);

// RouterProvider router={router} /> uygulamayı route yapısı ile ayağa kaldır.
// Providerları uygulamanın en dışına sarmalayarak tüm uygulamadki componentlerin ortak verileri paylaşmasını sağlıyoruz.
