/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { TDropdown } from './components/dropdown';
// component isimleri büyük harf ile başlasın, küçük harf ile başlarsa html elementler ile karışıyor.dosya isimlerinin küçük tutulmasında bir sakınca yok.
export function Demo() {
	// object type state
	// dizi ve objelerde setState de ... spread operatör kullanalım
	const [state, setState] = useState({ selectedCity: '', selectedCounty: '' });
	const cities = [
		{ value: 45, text: 'Manisa', selected: false },
		{ value: 34, text: 'istanbul', selected: true },
	] as any;
	const onCitySelect = (value: string) => {
		console.log('city-value', value);
		// Render zorlanmaz yanlış geliştirme
		// state.selectedCity = value;
		// state.items.push({id:1})
		// setState(value+ 1);

		// spread operators ES6 sonrası geldi.
		// ref değer güncelleniyor yeni bir nesne instance oluşuyor.
		// virtual domda ref type değerler, referansın değişip yeni bir nesne instance almasını bekliyor. Yoksa render yapmaz.
		setState({ ...state, selectedCity: value });
	};
	const countries = [
		{ value: 'tr', text: 'Türkiye', selected: false },
		{ value: 'deu', text: 'Almanya', selected: true },
	] as any;
	const onCountySelect = (value: string) => {
		console.log('county-value', value);
		setState({ ...state, selectedCounty: value });
	};
	return (
		<>
			<p>
				Seçilen Şehir: {state.selectedCity}, Seçilen Ülke:{' '}
				{state.selectedCounty}
			</p>
			<TDropdown items={countries} onItemSelect={onCountySelect} />
			<hr></hr>
			<TDropdown items={cities} onItemSelect={onCitySelect} />
		</>
	);
}
