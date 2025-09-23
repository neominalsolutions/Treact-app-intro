/* eslint-disable @typescript-eslint/no-explicit-any */
// componentler tsx uzantılı olmalıdır.
// ui kit component -> bu componentlerin içerisinde state tanımı yapılmaz. bu componentler,
// içerisindeki değişimi propslar ile iletir. Bu tarz componentlere pure component deriz.
// library oluşturken component geliştirme yaklaşımı bu şekilde olmalıdır

import type React from 'react';

// onItemSelect => içerisinde bir değer seçilecek
// selectedValue => izmir
// TDropdown => Turkcell Dropdown
// styles:sx => color:red,backgroundcolor:black

type TDropdownProps = {
	items: [{ value: string; text: string; selected: boolean }];
	onItemSelect: (value: string) => void;
	sx?: React.CSSProperties; // css alabilir
};

export function TDropdown({ items, onItemSelect, sx }: TDropdownProps) {
	console.log('sx', sx);

	const onItemSelectHandler = (e: any) => {
		console.log('a', e);
		onItemSelect(e.target.value);
	};

	return (
		<>
			<select onChange={onItemSelectHandler}>
				{items.map((item) => {
					return (
						<option selected={item.selected} key={item.value}>
							{item.text}
						</option>
					);
				})}
			</select>
			{/* <button>Button1</button> */}
		</>
	);
}
// itemslar dizi şeklinde dropdown optionları doldurucak. bizde bu optionlar üzerinden dinamik olarak propsdan gönderilen değere göre farklı tipte veriler ile çalışan dropdownlar oluşturucuz. countryDropdown, cityDropdown
