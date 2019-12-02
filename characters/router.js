let express = require('express')
let model = require('./model')

let router = express.Router()
let queryPassInValues

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

router.post('/', (req, res)=>{
	queryPassInValues = [req.body.first_name, req.body.last_nameID, req.body.occupationID, req.body.catch_phrase, req.body.age_range]
	model.createOne(queryPassInValues, err=>{
		if(err){
 			console.log(`Couldn't insert character ${req.body.first_name} into characters table`, err)
 			res.sendStatus(500)
 		}else{
 			res.sendStatus(200)
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
