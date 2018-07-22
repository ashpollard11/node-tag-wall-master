'use strict';

var inputField = document.querySelector('[name="tag"]');

// when the user clicks the button
document.querySelector('button.tagit').addEventListener("click", function () {
	var enteredTag = inputField.value;
	console.log('got tag from input: ', enteredTag);
	sendTag(enteredTag);
	// send the tag to the server
});

var sendTag = function sendTag(inputValue) {
	var url = 'http://localhost:1337/tag';

	axios.post(url, {
		tag: inputValue
	}).then(function (response) {
		console.log(response);
	}).catch(function (error) {
		console.log(error);
	});
};
//# sourceMappingURL=main.js.map
