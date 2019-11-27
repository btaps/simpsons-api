let express = require('express')
let database = require('./database.js')
let app = express()
let characters = require('./characters/router')

let queryPassInValues
let queryString
let reqBody

const PORT = 9000

// middleware
app.use(express.json());
app.use("/api/characters", characters)

// build front end, index page for moongese app lab. send hmtl file
// use orm sqlize library to refactor query strings that I wrote
// put together routes the do more complicated 

///////////////////////////////
//       CHARACTERS       /////
///////////////////////////////
/*
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


// update one character
app.put('/api/characters/:id', (req, res)=>{
  queryPassInValues = [req.body.first_name, req.body.catch_phrase, req.body.age_range, req.params.id]

  // update entire character
  queryString =  "UPDATE characters SET first_name = ?, catch_phrase = ?, age_range = ? WHERE characters.oid = ?"
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
 queryPassInValues = [req.body.first_name, req.body.last_nameID, req.body.occupation, req.body.catch_phrase, req.body.age_range]
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
*/
///////////////////////////////
//    Place Of Interest   /////
///////////////////////////////

app.get('/api/place_of_interest', (req, res)=>{
	queryString = "SELECT * FROM place_of_interest"
	database.all(queryString, (err, results)=>{
		if(err){
			res.sendStatus(500)
			console.log(`Couldn't get all places from place of interest table`, err)
		} else {
			res.status(200).json(results)
		}
	})
})

app.get('/api/place_of_interest/:id', (req, res)=>{
  // get params
  queryPassInValues = [req.params.id]
  // get query string
  queryString = "SELECT * FROM place_of_interest WHERE place_of_interest.oid = ?"

  // search database
  database.all(queryString, queryPassInValues, (err, results)=>{
  	// console log error
  	if(err){
  		console.log(`Couldn't get single place of interest`, err)
  		res.sendStatus(500)
  	}else res.status(200).json(results)
  })
})

app.put('/api/place_of_interest/:id', (req, res)=>{
  queryPassInValues = [req.body.name, req.params.id]
  queryString =  "UPDATE place_of_interest SET name = ? WHERE place_of_interest.oid = ?"

  database.run(queryString, queryPassInValues, err=>{
  	if(err){
  		console.log(`Couldn't update place of interest with name ${req.body.name}`, err)
  		res.sendStatus(500)
  	}else{
  		res.sendStatus(200)
  	}
  })
})

app.post('/api/place_of_interest', (req, res)=>{
 queryPassInValues = [req.body.name]
 queryString = "INSERT INTO place_of_interest VALUES (?)"

 database.run(queryString, queryPassInValues, err=>{
 	if(err){
 		console.log(`Couldn't insert ${req.body.name} into place_of_interest table`)
 		res.sendStatus(500)
 	}else{
 		res.sendStatus(200)
 	}
 })
})

app.delete('/api/place_of_interest/:id', (req, res)=>{
  queryPassInValues = [req.params.id]
  queryString = "DELETE FROM place_of_interest WHERE place_of_interest.oid = ?"

  database.run(queryString, queryPassInValues, err=>{
  	if(err){
  		console.log(`Couldn't delete place of interest with id ${queryPassInValues}`, err)
  		res.sendStatus(500)
  	}else{
  		res.sendStatus(200)
  	}
  })
})

///////////////////////////////
//       OCUUPATIONS      /////
///////////////////////////////

app.get('/api/occupations', (req, res)=>{
	queryString = "SELECT * FROM occupations"
	database.all(queryString, (err, results)=>{
		if(err){
			res.sendStatus(500)
			console.log(`Couldn't get all occupations from occupations table`, err)
		} else {
			res.status(200).json(results)
		}
	})
})

app.get('/api/occupations/:id', (req, res)=>{
  // get params
  queryPassInValues = [req.params.id]
  // get query string
  queryString = "SELECT * FROM occupations WHERE occupations.oid = ?"

  // search database
  database.all(queryString, queryPassInValues, (err, results)=>{
  	// console log error
  	if(err){
  		console.log(`Couldn't get single occupation`, err)
  		res.sendStatus(500)
  	}else res.status(200).json(results)
  })
})

app.put('/api/occupations/:id', (req, res)=>{
  queryPassInValues = [req.body.title, req.params.id]
  queryString =  "UPDATE occupations SET title = ? WHERE occupations.oid = ?"

  database.run(queryString, queryPassInValues, err=>{
  	if(err){
  		console.log(`Couldn't update occupation ${req.body.title}`, err)
  		res.sendStatus(500)
  	}else{
  		res.sendStatus(200)
  	}
  })
})

app.post('/api/occupations', (req, res)=>{
 queryPassInValues = [req.body.title]
 queryString = "INSERT INTO occupations VALUES (?, NULL)"

 database.run(queryString, queryPassInValues, err=>{
 	if(err){
 		console.log(`Couldn't insert occupation ${req.body.title} into occupations table`)
 		res.sendStatus(500)
 	}else{
 		res.sendStatus(200)
 	}
 })
})

app.delete('/api/occupations/:id', (req, res)=>{
  queryPassInValues = [req.params.id]
  queryString = "DELETE FROM occupations WHERE occupations.oid = ?"

  database.run(queryString, queryPassInValues, err=>{
  	if(err){
  		console.log(`Couldn't delete occupation with id ${queryPassInValues}`, err)
  		res.sendStatus(500)
  	}else{
  		res.sendStatus(200)
  	}
  })
})


///////////////////////////////
//       LAST NAMES       /////
///////////////////////////////

app.get('/api/last_names', (req, res)=>{
	queryString = "SELECT * FROM last_name"
	database.all(queryString, (err, results)=>{
		if(err){
			res.sendStatus(500)
			console.log("Could not get all name from last_names table", err)
		} else {
			res.status(200).json(results)
		}
	})
})

app.get('/api/last_names/:id', (req, res)=>{
  // get params
  queryPassInValues = [req.params.id]
  // get query string
  queryString = "SELECT * FROM last_names WHERE last_names.oid = ?"

  // search database
  database.all(queryString, queryPassInValues, (err, results)=>{
  	// console log error
  	if(err){
  		console.log(`Couldn't get single last name`, err)
  		res.sendStatus(500)
  	}else res.status(200).json(results)
  })
})

app.put('/api/last_names/:id', (req, res)=>{
  queryPassInValues = [req.body.name, req.params.id]
  queryString =  "UPDATE last_names SET last_name = ? WHERE last_names.oid = ?"

  database.run(queryString, queryPassInValues, err=>{
  	if(err){
  		console.log(`Couldn't update last name ${req.body.name}`, err)
  		res.sendStatus(500)
  	}else{
  		res.sendStatus(200)
  	}
  })
})

app.post('/api/last_names', (req, res)=>{
 queryPassInValues = [req.body.name]
 queryString = "INSERT INTO last_names VALUES (?)"

 database.run(queryString, queryPassInValues, err=>{
 	if(err){
 		console.log(`Couldn't insert name ${req.body.name} into last_names table`)
 		res.sendStatus(500)
 	}else{
 		res.sendStatus(200)
 	}
 })
})

app.delete('/api/last_names/:id', (req, res)=>{
  queryPassInValues = [req.params.id]
  queryString = "DELETE FROM last_names WHERE last_names.oid = ?"

  database.run(queryString, queryPassInValues, err=>{
  	if(err){
  		console.log(`Couldn't delete last name with id ${queryPassInValues}`, err)
  		res.sendStatus(500)
  	}else{
  		res.sendStatus(200)
  	}
  })
})

///////////////////////////////
//    Voiced By Actors    /////
///////////////////////////////  

app.get('/api/voiced_by_actors', (req, res)=>{
	queryString = "SELECT * FROM voiced_by_actors"
	database.all(queryString, (err, results)=>{
		if(err){
			res.sendStatus(500)
			console.log("Could not get all actors from voiced by actors table", err)
		} else {
			res.status(200).json(results)
		}
	})
})

app.get('/api/voiced_by_actors/:id', (req, res)=>{
  // get params
  queryPassInValues = [req.params.id]
  // get query string
  queryString = "SELECT * FROM voiced_by_actors WHERE voiced_by_actors.oid = ?"

  // search database
  database.all(queryString, queryPassInValues, (err, results)=>{
  	// console log error
  	if(err){
  		console.log(`Couldn't get single actor name`, err)
  		res.sendStatus(500)
  	}else res.status(200).json(results)
  })
})

app.put('/api/voiced_by_actors/:id', (req, res)=>{
  queryPassInValues = [req.body.name, req.params.id]
  queryString =  "UPDATE voiced_by_actors SET name = ? WHERE voiced_by_actors.oid = ?"

  database.run(queryString, queryPassInValues, err=>{
  	if(err){
  		console.log(`Couldn't update actor ${req.body.name}`, err)
  		res.sendStatus(500)
  	}else{
  		res.sendStatus(200)
  	}
  })
})

app.post('/api/voiced_by_actors', (req, res)=>{
 queryPassInValues = [req.body.name]
 queryString = "INSERT INTO voiced_by_actors VALUES (?)"

 database.run(queryString, queryPassInValues, err=>{
 	if(err){
 		console.log(`Couldn't insert name ${req.body.name} into voiced_by_actors table`)
 		res.sendStatus(500)
 	}else{
 		res.sendStatus(200)
 	}
 })
})

app.delete('/api/voiced_by_actors/:id', (req, res)=>{
  queryPassInValues = [req.params.id]
  queryString = "DELETE FROM voiced_by_actors WHERE voiced_by_actors.oid = ?"

  database.run(queryString, queryPassInValues, err=>{
  	if(err){
  		console.log(`Couldn't delete actor with id ${queryPassInValues}`, err)
  		res.sendStatus(500)
  	}else{
  		res.sendStatus(200)
  	}
  })
})

///////////////////////////////
//   JOIN CHARACT_PLACES   ////
///////////////////////////////


app.post('/api/characters/:id/place_of_interest', (req, res)=>{
	queryPassInValues = [req.params.id, req.body.place_of_interest_id]
	queryString = "INSERT INTO characters_place_of_interest VALUES (?, ?)"

	database.run(queryString, queryPassInValues, err=>{
		if(err){
			console.log(`Couldn't save join statement for characters and places`, err)
			res.sendStatus(500)
		}else res.sendStatus(200)
	})
})

app.delete('/api/characters/:id/place_of_interest', (req, res)=>{
	queryPassInValues = [req.params.id]
	queryString = "DELETE FROM characters_place_of_interest WHERE characters_place_of_interest.oid = ?"

	database.run(queryString, queryPassInValues, err=>{
		if(err){
			console.log(`Couldn't delete item with id ${queryPassInValues}`, err)
			res.sendStatus(500)
		}else res.sendStatus(200)
	})
})

///////////////////////////////
//  JOIN CHARACT_VOICED_BY  ///
///////////////////////////////

app.post('/api/characters/:id/voiced_by_actors', (req, res)=>{
	queryPassInValues = [req.params.id, req.body.voiced_by_id]
	queryString = "INSERT INTO characters_voiced_by VALUES (?, ?)"

	database.run(queryString, queryPassInValues, err=>{
		if(err){
			console.log(`Couldn't save join statement for characters and voiced by`, err)
			res.sendStatus(500)
		}else res.sendStatus(200)
	})
})

app.delete('/api/characters/:id/voiced_by_actors', (req, res)=>{
	queryPassInValues = [req.params.id]
	queryString = "DELETE FROM characters_voiced_by WHERE characters_voiced_by.oid = ?"

	database.run(queryString, queryPassInValues, err=>{
		if(err){
			console.log(`Couldn't delete item with id ${queryPassInValues}`, err)
			res.sendStatus(500)
		}else res.sendStatus(200)
	})
})

///////////////////////////////
//          PORT          /////
///////////////////////////////

app.listen(PORT, ()=>{
	console.log(`Listening on port ${PORT}`)
})