import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../contexts/cartSlice/cartSlice';
import type { RootDispatch, RootState } from '../../../contexts/store';
import { Link } from 'react-router';
import {
	fetchProducts,
	type Product,
} from '../../../contexts/productSlice/productSlice';
import { useEffect } from 'react';

function ProductListPage() {
	const productState = useSelector((state: RootState) => state.productState);
	const dispatch = useDispatch<RootDispatch>();

	useEffect(() => {
		dispatch(fetchProducts()); // ilk çağırma
		// her 5 saniye 1 load et. değişiklik varsa render alsın sayfa
		loadInterval();
	}, []);

	const loadInterval = () => {
		setInterval(() => {
			dispatch(fetchProducts());
			console.log('...veri refresh ediliyor');
		}, 10000); // 5 dakika
	};

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
			{productState.data.map((item) => {
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
