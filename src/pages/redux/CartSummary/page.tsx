import { useDispatch, useSelector } from 'react-redux';
import { type RootDispatch, type RootState } from '../../../contexts/store';
import { removeItem } from '../../../contexts/cartSlice/cartSlice';

function CartSummaryPage() {
	// cartState bilgileri çağırıp listelemem lazım
	// useContext yerine useSelector Hook kullanıyoruz
	const cartState = useSelector((state: RootState) => state.cartState);
	const dispatch = useDispatch<RootDispatch>();

	const onItemRemove = (id: number) => {
		dispatch(removeItem({ id: id })); // silme aksiyonu başlat.
	};

	return (
		<>
			{cartState &&
				cartState.items.map((item) => {
					return (
						<div key={item.id}>
							{item.name} x {item.quantity} Fiyatı: {item.price}
							<div>
								<button onClick={() => onItemRemove(item.id)}>
									Sepetten Çıkar
								</button>
							</div>
						</div>
					);
				})}
		</>
	);
}

export default CartSummaryPage;
