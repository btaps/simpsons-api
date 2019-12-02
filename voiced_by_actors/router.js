let express = require('express')
let model = require('./model')

let router = express.Router()
let queryPassInValues

router.get('/', (req, res)=>{
	model.readAll((err, results)=>{
		if(err){
			res.sendStatus(500)
			console.log("Could not get all actors from voiced by actors table", err)
		} else {
			res.status(200).json(results)
		}
	})
})

router.get('/:id', (req, res)=>{
	queryPassInValues = [req.params.id]
	model.readOne(queryPassInValues, (err, results)=>{
		if(err){
			console.log(`Couldn't get single actor name`, err)
			res.sendStatus(500)
		}else res.status(200).json(results)
	})
})

router.put('/:id', (req, res)=>{
	queryPassInValues = [req.body.name, req.params.id]
	model.updateOne(queryPassInValues, err=>{
		if(err){
  			console.log(`Couldn't update actor ${req.body.name}`, err)
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
 			console.log(`Couldn't insert name ${req.body.name} into voiced_by_actors table`, err)
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
  			console.log(`Couldn't delete actor with id ${queryPassInValues}`, err)
  			res.sendStatus(500)
  		}else{
  			res.sendStatus(200)
  		}
	})
})

module.exports = router
