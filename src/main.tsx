/* eslint-disable @typescript-eslint/no-explicit-any */
import { createRoot } from 'react-dom/client';
import './index.css';
import { FunctionApp } from './App';
import { TDropdown } from './components/dropdown';

// props değerlerini component çağırdığımız yerden veriyoruz.

createRoot(document.getElementById('root')!).render(
	<>
		<FunctionApp counter={5} />
		<hr></hr>
		<FunctionApp counter={0} />

		<hr></hr>

		<label>Şehirler</label>

		<TDropdown
			items={
				[
					{ value: '35', text: 'İzmir', selected: false },
					{ value: '34', text: 'İstanbul', selected: true },
				] as any
			}
			onItemSelect={(value: string) => {
				console.log('item-selected', value);
			}}
		/>

		<hr></hr>

		<label>Dostlar</label>

		<TDropdown
			items={
				[
					{ value: 'ali', text: 'Ali', selected: false },
					{ value: 'can', text: 'Can', selected: true },
				] as any
			}
			onItemSelect={(value: string) => {
				console.log('item-selected', value);
			}}
		/>
	</>
);
