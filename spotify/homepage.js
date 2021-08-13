const getData = (query = 'imagine') => {
	const goodCard = document.querySelector('.good-row');
	goodCard.innerHTML = '';

	fetch(` https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
		.then((res) => {
			return res.json();
		})
		.then((result) => {
			result.data.forEach((el, i) => {
				if (i < 15) {
					return (goodCard.innerHTML += `  <div class=" col-sm-3 col-xl-2 mx-xl-3 ">
            <div class="card card-morning mt-3">
                <img src="${el.album.cover_small}" alt="temperature song">
                <div>
                <p class="card-subtitle text-truncate over">${el.artist.name}</p>
                <p class="card-text text-truncate over">${el.album.title}</p>
            </div>
            </div>
        </div>`);
				}
				return;
			});
		})
		.catch((err) => {
			console.log(err);
		});
	return;
};
const allSongs = (val = 'dragons') => {
	const allSongs = document.querySelector('.all-songs');
	allSongs.innerHTML = '';

	fetch(` https://striveschool-api.herokuapp.com/api/deezer/search?q=${val}`)
		.then((res) => {
			return res.json();
		})
		.then((result) => {
			result.data.forEach((el, i) => {
				console.log(el, i);
				if (i < 14) {
					return (allSongs.innerHTML += ` <div class=" col-sm-5 col-md-4 col-lg-3 col-xl-1 pt-2 " style="margin-right: 4rem;">
						<div class="card my-card" style="width: 150px; height: 200px;background-color: rgba(0, 0, 0, 0.5);border-radius:10px" >
							<img style="width: 120px;border-radius:10px ;margin: auto; height: 120px";
								src="${el.album.cover_small}"
								class="card-img-top "
								alt="smackthat"
                              
							/>
						
								<h6 class="card-title px-3 pt-1">${el.album.title}</h6>

						</div>
					</div> `);
				}
				return;
			});
		})
		.catch((err) => {
			console.log(err);
		});
	return;
};
const shows = (val = 'dragons') => {
	const allSongs = document.querySelector('.row-1');
	allSongs.innerHTML = '';

	fetch(` https://striveschool-api.herokuapp.com/api/deezer/search?q=${val}`)
		.then((res) => {
			return res.json();
		})
		.then((result) => {
			result.data.forEach((el, i) => {
				console.log(el, i);
				if (i < 14) {
					return (allSongs.innerHTML += ` <div class=" col-sm-5 col-md-4 col-lg-3 col-xl-1 pt-2 " style="margin-right: 4rem;">
						<div class="card my-card" style="width: 150px; height: 200px;background-color: rgba(0, 0, 0, 0.5);border-radius:10px" >
							<img style="width: 120px;border-radius:10px ;margin: auto; height: 120px";
								src="${el.album.cover_small}"
								class="card-img-top "
								alt="smackthat"
                              
							/>
						
								<h6 class="card-title px-3 pt-1">${el.album.title}</h6>

						</div>
					</div> `);
				}
				return;
			});
		})
		.catch((err) => {
			console.log(err);
		});
	return;
};
const shows2 = (val = 'queen') => {
	const allSongs = document.querySelector('.row-2');
	allSongs.innerHTML = '';

	fetch(` https://striveschool-api.herokuapp.com/api/deezer/search?q=${val}`)
		.then((res) => {
			return res.json();
		})
		.then((result) => {
			result.data.forEach((el, i) => {
				console.log(el, i);
				if (i < 14) {
					return (allSongs.innerHTML += ` <div class=" col-sm-5 col-md-4 col-lg-3 col-xl-1 pt-2 " style="margin-right: 4rem;">
						<div class="card my-card" style="width: 150px; height: 200px;background-color: rgba(0, 0, 0, 0.5);border-radius:10px" >
							<img style="width: 120px;border-radius:10px ;margin: auto; height: 120px";
								src="${el.album.cover_small}"
								class="card-img-top "
								alt="smackthat"
                              
							/>
						
								<h6 class="card-title px-3 pt-1">${el.album.title}</h6>

						</div>
					</div> `);
				}
				return;
			});
		})
		.catch((err) => {
			console.log(err);
		});
	return;
};
allSongs();
window.onload = () => {
	getData();
	shows();
	shows2();
};
{
	/* <div class="card my-card" style="width: 150px; height: 200px;background-color: rgba(0, 0, 0, 0.5);border-radius:10px" >
							<img style="width: 120px;border-radius:10px ;margin: auto; height: 120px";
								src="https://upload.wikimedia.org/wikipedia/en/5/5c/Imagine-Dragons-Believer-art.jpg"
								class="card-img-top "
								alt="imagine dragons"
                              
							/>
						
								<h6 class="card-title px-3 pt-1">Believer</h6>

						</div> */
}
// <div
// 	class=' col-sm-5 col-md-4 col-lg-3 col-xl-1 pt-2 '
// 	style='margin-right: 4rem;'></div>;
