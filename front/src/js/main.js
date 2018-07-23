
const tagInput = document.querySelector('[name="tag"]')
const colorInput = document.querySelector('.colors')
const confirm = document.querySelector('.confirm')

tagInput.addEventListener('keyup', function(e) {
	confirm.style.display = 'none';
})


// when the user clicks the button
document.querySelector('button.tagit').addEventListener("click", function() {
	let enteredTag = tagInput.value
	let selectedColor = colorInput.value
	console.log('got tag and color: ', enteredTag, selectedColor)
	sendTag(enteredTag, selectedColor)
	confirm.style.display = 'block';
	// send the tag to the server
})

const sendTag = function (tagValue, colorValue) {
	let url = 'http://localhost:1337/tag';

	axios.post(url, {
		tag: tagValue,
		colors: colorValue
	})
	.then(function (response) {
		console.log(response);
	})
	  .catch(function (error) {
		console.log(error);
	});
}

colorInput.style.color = colorInput.value;
colorInput.addEventListener('change', function(e) {
	if (colorInput.value) {
	colorInput.style.color = colorInput.value;
	}
})

