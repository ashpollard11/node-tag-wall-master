'use strict';

var wall = document.querySelector('.wall');

window.addEventListener('load', function (e) {
	showTag();
});

var showTag = function showTag() {
	var url = 'http://localhost:1337';

	axios.get(url).then(function (response) {
		console.log(response);
		response.data.forEach(function (tag) {
			var pEl = document.createElement('p');
			var arrow = document.createElement('div');
			pEl.innerHTML = tag;
			pEl.classList.add('tag');
			pEl.appendChild(arrow);
			wall.appendChild(pEl);

			pEl.style.position = "absolute";
			pEl.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
			pEl.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
		});
	}).catch(function (error) {
		console.log(error);
	});
};
// upon page load, ask the server for all the tags it has saved, 
// and put them on the screen
//# sourceMappingURL=wall.js.map
