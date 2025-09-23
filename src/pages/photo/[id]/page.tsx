import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getPhotosById, type Photo } from '../../../services/photos.api';

function PhotoDetailPage() {
	const [photo, setPhoto] = useState<Photo>();
	const params = useParams(); // rotalarda üzerinden gelen dinamik parametreleri yakalamak için kullanılan react router hook
	console.log('params', params);
	// js bir değişkene atama ypılmazsa değişkken değeri undefined olur.

	const loadData = () => {
		if (params.id) {
			getPhotosById(params.id)
				.then((data) => {
					setPhoto(data);
				})
				.catch((err) => {
					console.log('err', err);
				});
		}
	};

	useEffect(() => {
		loadData();
	}, []);

	// koşullu render
	// if(photo && photo != null) {
	// 		return <div>
	// 				<p>{photo.title}</p>
	// 				<img src={photo.thumbnailUrl} />
	// 			</div>
	// 		}
	// }
	// koşullu render photo null veya undefined değilse <div></div> ekranda göster. null ise bişey yapma. ? ternaryif daha kısa yazımı.
	return (
		<>
			{photo && (
				<div>
					<p>{photo.title}</p>
					<img src={photo.thumbnailUrl} />
				</div>
			)}
		</>
	);
}

export default PhotoDetailPage;
