let express = require('express')
let model = require('./model')

let router = express.Router()
let queryPassInValues

router.get('/', (req, res)=>{
	model.readAll((err, results)=>{
		if(err){
			res.sendStatus(500)
			console.log("Could not get all name from last_names table", err)
		} else {
			res.status(200).json(results)
		}
	})
})

router.get('/:id', (req, res)=>{
	queryPassInValues = [req.params.id]
	model.readOne(queryPassInValues, (err, results)=>{
		if(err){
			console.log(`Couldn't get single last name`, err)
			res.sendStatus(500)
		}else res.status(200).json(results)
	})
})

router.put('/:id', (req, res)=>{
	queryPassInValues = [req.body.last_name, req.params.id]
	model.updateOne(queryPassInValues, err=>{
		if(err){
  			console.log(`Couldn't update last name ${req.body.last_name}`, err)
  			res.sendStatus(500)
  		}else{
  			res.sendStatus(200)
  		}
	})
})

router.post('/', (req, res)=>{
	queryPassInValues = [req.body.last_name]
	model.createOne(queryPassInValues, err=>{
		if(err){
 			console.log(`Couldn't insert name ${req.body.last_name} into last_names table`, err)
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
  			console.log(`Couldn't delete last name with id ${queryPassInValues}`, err)
  			res.sendStatus(500)
  		}else{
  			res.sendStatus(200)
  		}
	})
})

module.exports = router
