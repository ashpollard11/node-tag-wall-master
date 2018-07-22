
const wall = document.querySelector('.wall');

window.addEventListener('load', function(e) {
	showTag()
})

let showTag = function () {
	let url = 'http://localhost:1337';

	axios.get(url)

	.then(function (response) {
		console.log(response);
		response.data.forEach((tag) => {
			const pEl = document.createElement('p');
			const arrow = document.createElement('div');
			pEl.innerHTML = tag;
			pEl.classList.add('tag');
			pEl.appendChild(arrow);
			wall.appendChild(pEl);


			pEl.style.position = "absolute";
			pEl.style.top = Math.floor(Math.random()*window.innerHeight) + 'px';
			pEl.style.left = Math.floor(Math.random()*window.innerWidth) + 'px';

		})
	})
	  .catch(function (error) {
		console.log(error);
	});
}
// upon page load, ask the server for all the tags it has saved, 
// and put them on the screen 