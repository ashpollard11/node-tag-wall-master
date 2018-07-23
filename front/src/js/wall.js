
const wall = document.querySelector('.wall');

window.addEventListener('load', function(e) {
	showTag()
})

const showTag = function () {
	let url = 'http://localhost:1337';

	axios.get(url)

	.then(function (response) {
		console.log(response);

		response.data.forEach((arr) => {
			const pEl = document.createElement('p');
			const arrow = document.createElement('div');
			pEl.innerHTML = arr.tags;
			pEl.classList.add('tag');
			pEl.appendChild(arrow);
			wall.appendChild(pEl);


			pEl.style.position = "absolute";
			pEl.style.top = Math.floor(Math.random()*window.innerHeight) + 'px';
			pEl.style.left = Math.floor(Math.random()*window.innerWidth) + 'px';

			pEl.style.color = arr.col;
		})

		
		
	})
	  .catch(function (error) {
		console.log(error);
	});
}
// upon page load, ask the server for all the tags it has saved, 
// and put them on the screen 