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
			state.items.push(action.payload);
		},
		removeItem: (state: CartState, action: PayloadAction<{ id: number }>) => {
			state.items = state.items.filter((x) => x.id != action.payload.id);
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
