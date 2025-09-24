import {
	createAsyncThunk,
	createSlice,
	type PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Product {
	ProductName: string;
	UnitPrice: number;
	UnitsInStock: number;
	ProductID: number;
}

export type ProductState = {
	data: Product[]; // fullfilled state -> verinin çekildiği aşama
	loading: boolean; // pending veri çekme aşaması
	error: any; // hata case burayı dolduruz -> rejected
};

// GET, POST, PUT,DELETE
// dispatch(productFetch()) async loading
export const fetchProducts = createAsyncThunk('PRODUCTS', async () => {
	const response = await axios.get(
		'https://services.odata.org/northwind/northwind.svc/Products?$format=json'
	);
	const data = response.data.value as Product[];

	return data; // action.payload
});

// Form üzerinden asenkron bir akış başlattığımızda
// dispatch(postProducts({id:1,name:'Ürün1'}))
export const postProducts = createAsyncThunk(
	'PRODUCTS',
	async (payload: Product) => {
		console.log('payload', payload);
		const response = await axios.post(
			'https://services.odata.org/northwind/northwind.svc/Products?$format=json',
			payload
		);
		const data = response.data.value as Product[];

		return data; // action.payload
	}
);

const initState: ProductState = { data: [], error: null, loading: false };

const productSlice = createSlice({
	name: 'Products',
	initialState: initState,
	reducers: {}, // senkron akışlarda kullanırız.
	extraReducers(builder) {
		// async thunk işlemlerinde extraReducers kullanıyoruz.
		builder.addCase(fetchProducts.pending, (state: ProductState) => {
			state.loading = true; // verinin asnync olarak yüklenme anı
		});
		builder.addCase(
			fetchProducts.fulfilled,
			(state: ProductState, action: PayloadAction<any>) => {
				state.loading = false; // verinin asnync olarak yüklenme anı
				state.data = action.payload as Product[]; // başarılı olduğu durumda ise response.

				const randomId = Math.round(Math.random() * 1000 + 100);

				state.data.push({
					ProductID: randomId,
					ProductName: 'Ürün' + randomId,
					UnitsInStock: randomId + 10,
					UnitPrice: randomId * 5,
				});
			}
		);
		builder.addCase(
			fetchProducts.rejected,
			(state: ProductState, action: PayloadAction<any>) => {
				state.loading = false; // verinin asnync olarak yüklenme anı
				state.data = [];
				state.error = action.payload; // hata durumunda action payload error nesnesi gelir.
			}
		);
	},
});

// eğer extraReducers tan yaralanıyorsak actionlar createAsyncThunk ile oluşmul oluyor
export const productReducer = productSlice.reducer;
