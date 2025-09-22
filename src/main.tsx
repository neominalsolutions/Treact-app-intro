import { createRoot } from 'react-dom/client';
import { FunctionApp } from './App';

import './index.css';
import { Demo } from './Demo';

// kullanılmayan dosyaları silmek için Alt+Shift+O tuş kombinasyonu kullanabiliriz.
// props değerlerini component çağırdığımız yerden veriyoruz.

createRoot(document.getElementById('root')!).render(
	<>
		<FunctionApp counter={5} />
		<hr></hr>
		<FunctionApp counter={0} />

		<hr></hr>
		<Demo />
	</>
);
