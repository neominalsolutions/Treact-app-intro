import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
	id: number;
	name: string;
	quantity: number;
	price: number;
}

export type CartState = {
	items: CartItem[]; // sepetteki itemlar
	total: number; // toplam tutar
};

const cartInitState: CartState = { items: [], total: 0 }; // state başlangıç değeri
// state yöntemini yapan functionlar
const CartSlice = createSlice({
	name: 'CART',
	initialState: cartInitState,
	reducers: {
		// state değiştirmek için dışarıdan çağırılacak olan actionlar
		addItem: (state: CartState, action: PayloadAction<CartItem>) => {
			const itemExist = state.items.find((x) => x.id === action.payload.id);

			if (itemExist) {
				itemExist.quantity++; // varsa quantity artır
			} else {
				state.items.push(action.payload);
			}
			// sum algoritması için reduce functiondan yararlandık.
			const total = state.items.reduce(
				(total, item) => (total += item.price * item.quantity),
				0
			);
			state.total = total;
		},
		removeItem: (state: CartState, action: PayloadAction<{ id: number }>) => {
			state.items = state.items.filter((x) => x.id != action.payload.id);

			const total = state.items.reduce(
				(total, item) => (total += item.price * item.quantity),
				0
			);
			state.total = total;
		},
		updateQuantity: ( // algoritma sizde genel tekrar
			state: CartState,
			action: PayloadAction<{ id: number; quantity: number }>
		) => {
			console.log('state', state);
			console.log('state', action);
		},
	},
});

export const { addItem, removeItem } = CartSlice.actions;
export const cartReducer = CartSlice.reducer;

// Storeda stateleri erişmek için Slice function action ve reducer olarak export etmeliyiz.
// Actionları Componentlerde dispatch ile çağırmamız lazım dispath(addItem())
// reducer ise storeda şu şekilde tanımlanmalı ki statelere erişebilelim.
// const store = configureStore({
// cartState: {cartReducer}, // cartState -> cartReducer tarafından yönetilsin.
//});
