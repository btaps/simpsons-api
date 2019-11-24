let express = require('express')
let database = require('./database.js')
let app = express()

const PORT = 9000

// middleware
app.use(express.json());

// get all characters
app.get('/api/characters', (req, res)=>{
	// create a string query
	const getAllCharacters = "SELECT * FROM characters"
	db.all(getAllCharacters, (err, results)=>{
		if(err){
			res.sendStatus(500)
			console.log("Could not get all characters from characters table", err)
		} else {
			res.status(200).json(results)
			console.log("Get all characters successful!")
		}
	})
})

// get one character
app.get('/api/characters/:id', (req, res)=>{

})

// update one character
app.put('/api/characters/:id', (req, res)=>{

})

// create a new character
app.post('/api/characters', (req, res)=>{

})

// delete character
app.delete('/api/characters/:id', (req, res)=>{

})


app.listen(PORT, ()=>{
	console.log(`Listening on port ${PORT}`)
})