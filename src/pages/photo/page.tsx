import { useEffect, useState } from 'react';
import { getPhotos, type Photo } from '../../services/photos.api';
import { Link } from 'react-router';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

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
					<Grid container>
						{
							<Grid size={12}>
								<List
									sx={{
										width: '100%',
										bgcolor: 'background.paper',
									}}
								>
									<ListItem>
										<Link to={`/photos/${item.id}`}>
											<ListItemText
												primary={item.title}
												secondary="Jan 9, 2014"
											/>
										</Link>
									</ListItem>
								</List>
							</Grid>
						}
					</Grid>
				);
			})}
		</>
	);
}

// Metinsel bir ifade ile dinamik map içerisinde bir ifadenin birleşmesi bir link oluşturması gerekir.
// "" ifade yerine `` backtick kullanıyoruz. AltGr + ; `denem_${dynamic_variable}`

export default PhotoPage;
