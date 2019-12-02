let express = require('express')
let model = require('./model')

let router = express.Router()
let queryPassInValues

router.get('/', (req, res)=>{
	model.readAll((err, results)=>{
		if(err){
			res.sendStatus(500)
			console.log(`Couldn't get all places from place of interest table`, err)
		} else {
			res.status(200).json(results)
		}
	})
})

router.get('/:id', (req, res)=>{
	queryPassInValues = [req.params.id]
	model.readOne(queryPassInValues, (err, results)=>{
		if(err){
			console.log(`Couldn't get single place of interest`, err)
			res.sendStatus(500)
		}else res.status(200).json(results)
	})
})

router.put('/:id', (req, res)=>{
	queryPassInValues = [req.body.name, req.params.id]
	model.updateOne(queryPassInValues, err=>{
		if(err){
  			console.log(`Couldn't update place of interest with name ${req.body.name}`, err)
  			res.sendStatus(500)
  		}else{
  			res.sendStatus(200)
  		}
	})
})

router.post('/', (req, res)=>{
	queryPassInValues = [req.body.name]
	model.createOne(queryPassInValues, err=>{
		if(err){
 			console.log(`Couldn't insert ${req.body.name} into place_of_interest table`, err)
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
  			console.log(`Couldn't delete place of interest with id ${queryPassInValues}`, err)
  			res.sendStatus(500)
  		}else{
  			res.sendStatus(200)
  		}
	})
})

module.exports = router
