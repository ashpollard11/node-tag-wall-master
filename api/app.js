const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
//tell the api to respond to anybody in the multiverse!
app.use(cors())
//for parsing applicationi/json
app.use(bodyParser.json());
//for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));


let tags = []

app.get('/', function(req, res) {
	res.send(tags)
})

app.post('/tag', function(req, res) {
	tags.push(req.body.tag)
	console.log('tags array: ', tags)
	res.send('This is how you add tags')
})

app.listen(1337, function() {
	console.log('Test app listening on port 1337!')
})