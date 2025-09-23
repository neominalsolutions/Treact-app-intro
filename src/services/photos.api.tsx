import axios from 'axios';

// Sunucu tafalı dto tanımları burada interface oluyor.
export interface Photo {
	albumId: number;
	title: string;
	thumbnailUrl: string;
}

export const getPhotos = async () => {
	const response = (await axios.get)<Photo[]>(
		'https://jsonplaceholder.typicode.com/photos'
	);
	const data: Photo[] = (await response).data;

	console.log('data', data);

	return data;
};

// 1. adım api endpoint tanımı (servis olarak)
// burdaki servis kodunu ayırmanın amacı başka page componentlerde bu service function veri çekebilir.
