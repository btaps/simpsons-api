let express = require('express')
let model = require('./model')

let router = express.Router()
let queryPassInValues
let characterPlacesValues
let characterActorValues
let joinData
let lastID
let n = 0

router.get('/', (req, res)=>{
	model.readAll((err, results)=>{
		if(err){
			res.sendStatus(500)
			console.log("Could not get all characters from characters table", err)
		} else {
			res.status(200).json(results)
		}
	})
})

router.get('/:id', (req, res)=>{
	queryPassInValues = [req.params.id]
	model.readOne(queryPassInValues, (err, results)=>{
		if(err){
			console.log(`Couldn't get one character with id ${queryPassInValues}`, err)
			res.sendStatus(500)
		}else res.status(200).json(results)
	})
})

router.put('/:id', (req, res)=>{
	queryPassInValues = [req.body.first_name, req.body.last_nameID, req.body.occupationID, req.body.catch_phrase, req.body.age_range, req.params.id]
	model.updateOne(queryPassInValues, err=>{
		if(err){
  			console.log(`Couldn't update character ${req.body.first_name}`, err)
  			res.sendStatus(500)
  		}else{
  			res.sendStatus(200)
  		}
	})
})

router.post('/', function(req, res) {
	queryPassInValues = [req.body.first_name, req.body.last_nameID, req.body.occupationID, req.body.catch_phrase, req.body.age_range]
	characterPlacesValues = req.body.favoritePlaces // use array forEach() method to get it done. 
	characterActorValues = req.body.voiceActors
	model.createOne(queryPassInValues, function(err) {
		if(err){
 			console.log(`Couldn't insert character ${req.body.first_name} into characters table`, err)
 			res.sendStatus(500)
 		}else{
 			lastID = this.lastID
 			characterPlacesValues.forEach(function(joinValue) {
 				joinData = [lastID, joinValue]
 				model.joinTableONE(joinData, function(err) {
 					if(err){
 						console.log(`Couldn't insert values ${characterPlacesValues} into join table for characters_place`, err)
 						res.sendStatus(500)
 					}else {
 						n++
 						if(n < 2){
 							characterActorValues.forEach(function(joinValue){
 								joinData = [lastID, joinValue]
 								model.joinTableTWO(joinData, function(err) {
 									console.log('working')
 									if(err){
 										console.log(`Couldn't insert values ${characterActorValues} into join table for characters_actors`, err)
 										res.sendStatus(500)
 									}else res.status(200)
 								}	)
 							})
 						}
 					}
 				})
 			})
 			
 			res.json(this.lastID)
 		}
	})
})

router.delete('/:id', (req, res)=>{
	queryPassInValues = [req.params.id]
	model.deleteOne(queryPassInValues, err=>{
		if(err){
  			console.log(`Couldn't delete character with id ${queryPassInValues}`, err)
  			res.sendStatus(500)
  		}else{
  			res.sendStatus(200)
  		}
	})
})

module.exports = router
