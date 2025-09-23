import { useEffect, useState } from 'react';
import { getPhotos, type Photo } from '../../services/photos.api';
import { Link } from 'react-router';

function PhotoPage() {
	// sayfa componenti
	const [photo, setPhoto] = useState<Photo[]>([]); // 2.adım

	const loadData = () => {
		getPhotos() // 1.adım
			.then((data) => {
				// resolved
				console.log('data', data);
				setPhoto(data);
			})
			.catch((err) => {
				// rejected
				console.log('err', err);
			});
	};

	useEffect(() => {
		loadData();
		// axios ile promise çağırımı component doma ilk girdiğinde useEffect hook bunu tetikler
	}, []); // component ilk açılışında veri çekecek ise [] ile bunu garanti ediyoruz.

	// useEffect(() => {}, [localState]); // photo kesinle yazılmamalı çünkü yeniden api isteği tetikler

	console.log('...rendering');

	return (
		<>
			{photo.map((item) => {
				return (
					<div>
						<Link to={`/photos/${item.id}`}> {item.title}</Link>
					</div>
				);
			})}
		</>
	);
}

// Metinsel bir ifade ile dinamik map içerisinde bir ifadenin birleşmesi bir link oluşturması gerekir.
// "" ifade yerine `` backtick kullanıyoruz. AltGr + ; `denem_${dynamic_variable}`

export default PhotoPage;
