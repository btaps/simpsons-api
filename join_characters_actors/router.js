// these routes were made for strict manipulation of JOIN table characters_voiced_by

let express = require('express')
let model = require('./model')

let router = express.Router()
let queryPassInValues


router.get('/:id', (req, res)=>{
	queryPassInValues = [req.params.id]
	model.readOne(queryPassInValues, (err, results)=>{
		if(err){
			console.log(`Couldn't get single actor name from join table`, err)
			res.sendStatus(500)
		}else res.status(200).json(results)
	})
})

router.post('/', (req, res)=>{
	queryPassInValues = [req.body.character_id, req.body.voiced_by_id]
	model.createOne(queryPassInValues, err=>{
		if(err){
 			console.log(`Couldn't insert into join table with character id ${req.body.character_id}`, err)
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
  			console.log(`Couldn't find id ${queryPassInValues}`, err)
  			res.sendStatus(500)
  		}else{
  			res.sendStatus(200)
  		}
	})
})

module.exports = router
