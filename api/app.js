const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
//tell the api to respond to anybody in the multiverse!
app.use(cors())
//for parsing application/json
app.use(bodyParser.json());
//for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));


let arrayObj = [];


app.get('/', function(req, res) {
	console.log(arrayObj.tags, arrayObj.col)
	res.send(arrayObj)
})

app.post('/tag', function(req, res) {
	arrayObj.push({ "tags": req.body.tag, "col": req.body.colors })
	console.log('tags array: ', arrayObj)
	res.send('This is how you add tags')
})

app.listen(1337, function() {
	console.log('Test app listening on port 1337!')
})