'use strict';

var tagInput = document.querySelector('[name="tag"]');
var colorInput = document.querySelector('.colors');

// when the user clicks the button
document.querySelector('button.tagit').addEventListener("click", function () {
	var enteredTag = tagInput.value;
	var selectedColor = colorInput.value;
	console.log('got tag and color: ', enteredTag, selectedColor);
	sendTag(enteredTag, selectedColor);
	// send the tag to the server
});

var sendTag = function sendTag(tagValue, colorValue) {
	var url = 'http://localhost:1337/tag';

	axios.post(url, {
		tag: tagValue,
		colors: colorValue
	}).then(function (response) {
		console.log(response);
	}).catch(function (error) {
		console.log(error);
	});
};

colorInput.style.color = colorInput.value;
colorInput.addEventListener('change', function (e) {
	if (colorInput.value) {
		colorInput.style.color = colorInput.value;
	}
});
//# sourceMappingURL=main.js.map
