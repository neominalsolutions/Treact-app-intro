import { useDispatch } from 'react-redux';
import { addItem } from '../../../contexts/cartSlice/cartSlice';
import type { RootDispatch } from '../../../contexts/store';
import { Link } from 'react-router';

export interface Product {
	ProductName: string;
	UnitPrice: number;
	UnitsInStock: number;
	ProductID: number;
}

function ProductListPage() {
	const plist: Product[] = [
		{
			ProductID: 1,
			ProductName: 'Ürün-1',
			UnitsInStock: 10,
			UnitPrice: 25,
		},
		{
			ProductID: 2,
			ProductName: 'Ürün-2',
			UnitsInStock: 100,
			UnitPrice: 125,
		},
	];

	const dispatch = useDispatch<RootDispatch>();
	const onItemAdd = (item: Product) => {
		dispatch(
			addItem({
				id: item.ProductID,
				quantity: 1,
				price: item.UnitPrice,
				name: item.ProductName,
			})
		);
	};

	return (
		<>
			<Link to="/cart-summary">Sepetteki Ürünler</Link>
			{plist.map((item) => {
				return (
					<div key={item.ProductID}>
						{item.ProductName} Fiyat: {item.UnitPrice} Adet: {item.UnitsInStock}
						<button onClick={() => onItemAdd(item)}>Sepete Ekle</button>
					</div>
				);
			})}
		</>
	);
}
export default ProductListPage;
