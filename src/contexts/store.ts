import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cartSlice/cartSlice';
import { productReducer } from './productSlice/productSlice';

const store = configureStore({
	reducer: {
		cartState: cartReducer,
		productState: productReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>; // tüm uygulama gelendeki statelere RootState type erişebiliriz.
export type RootDispatch = typeof store.dispatch; // state değiştirmek için uygulama gelende kullandığımız tip, actionları tetikleyen tip

export default store;

// Adım 1: Paketlerin yüklenemesi -> npm install @reduxjs/toolkit, npm install react-redux
// Adım 2: Store tanımı -> uygulama merkezi olarak tüm statelere buradan erişiyor, Client Statelerin tanımlandığı yer
// Adım 3: main.tsx dosyasını <Provider /> sarmallamak
// Adım 4: State değişikliklerini yönetmek için Slice tanımı
// Adım 5: Component içinden useDispatch veya useSelector hook ile state erişimi

// Örnek Senaryo: Sepete item ekleme
// CartSummaryPage -> Sepetteki itemları listeleme, güncelleme
// ProductPage -> Sepete item eklemek için gerekli olan ürünlerin listesi
// cartSlice ise sepet yönetimi yaptığımız function
