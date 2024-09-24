document.addEventListener('DOMContentLoaded', function () {
  let data = [];
  const fetchMovieDate = async () => {
    fetch('http://localhost:3000/films')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((res) => {
        let filmRennder = '';
        let index = Math.floor(Math.random() * (res.length + 1));
        filmRennder += `<div class="card  mb-3 " style="background:black">
          <div class="border d-flex ">
            <img src="http://localhost:3000/uploads/${
              res[index]?.image
            }" class="card-img-top image_size"  alt="..." >
            <div class="">
              <h5 class="text-white">${res[index]?.name}</h5>
              <h5 class="text-white">Thể loại: ${
                res[index]?.type ? res[index].type : 'Không'
              }</h5>
              <p class="text-white">Mô tả: ${res[index]?.description}</p>
            </div>
            </div>
            <button id="watchFilm" onclick="watch" class="btn btn-warning mt-3">Xem Trailer</button>
            </div>
         <video id='videoRef' src='http://localhost:3000/uploads/${
           res[index]?.video
         }' width='100%' controls="controls" preload="none"></video>
        `;
        document.getElementById('#genreselected').innerHTML = filmRennder;
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };
  fetchMovieDate();

  // let btnWatch = document.getElementById('watchFilm');
  // console.log('🚀 ~ btnWatch:', btnWatch);
  // // Then add the event listener
  // btnWatch.addEventListener('click', watch);
});
