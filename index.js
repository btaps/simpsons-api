let express = require('express')
let database = require('./database.js')
let app = express()

let queryPassInValues
let queryString
let reqBody

const PORT = 9000

// middleware
app.use(express.json());

// get all characters
app.get('/api/characters', (req, res)=>{
	// create a string query
	queryString = "SELECT * FROM characters"
	database.all(queryString, (err, results)=>{
		if(err){
			res.sendStatus(500)
			console.log("Could not get all characters from characters table", err)
		} else {
			res.status(200).json(results)
		}
	})
})

// get one character
app.get('/api/characters/:id', (req, res)=>{
  // get params
  queryPassInValues = [req.params.id]
  // get query string
  queryString = "SELECT * FROM characters WHERE characters.oid = ?"

  // search database
  database.all(queryString, queryPassInValues, (err, results)=>{
  	// console log error
  	if(err){
  		console.log(`Couldn't get single character`, err)
  		res.sendStatus(500)
  	}else res.status(200).json(results)
  })
})

///////////////////////////////
// NEED TO FIX BUG in PUT /////
///////////////////////////////


// update one character
app.put('/api/characters/:id', (req, res)=>{
  queryPassInValues = [req.body.first_name, req.params.id]

  // update entire character
  queryString =  "UPDATE characters SET first_name ? WHERE characters.oid = ?"
  database.run(queryString, queryPassInValues, err=>{
  	if(err){
  		console.log(`Couldn't update character ${req.body.first_name}`, err)
  		res.sendStatus(500)
  	}else{
  		res.sendStatus(200)
  	}
  })
})



// create a new character
app.post('/api/characters', (req, res)=>{
 queryPassInValues = [req.body.first_name, req.body.last_name, req.body.occupation, req.body.catch_phrase, req.body.age_range]
 queryString = "INSERT INTO characters VALUES (?, ?, ?, ?, ?)"

 database.run(queryString, queryPassInValues, err=>{
 	if(err){
 		console.log(`Couldn't insert character ${req.body.first_name} into characters table`)
 		res.sendStatus(500)
 	}else{
 		res.sendStatus(200)
 	}
 })
})

// delete character
app.delete('/api/characters/:id', (req, res)=>{
  queryPassInValues = [req.params.id]
  queryString = "DELETE FROM characters WHERE characters.oid = ?"

  database.run(queryString, queryPassInValues, err=>{
  	if(err){
  		console.log(`Couldn't delete character with id ${queryPassInValues}`, err)
  		res.sendStatus(500)
  	}else{
  		res.sendStatus(200)
  	}
  })
})


app.listen(PORT, ()=>{
	console.log(`Listening on port ${PORT}`)
})