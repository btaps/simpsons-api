let express = require('express')
let model = require('./model')

let router = express.Router()

router.get('/', (req, res, next)=>{
	model.readAll((err, results)=>{
		if(err){
			res.sendStatus(500)
			console.log("Could not get all characters from characters table", err)
		} else {
			res.status(200).json(results)
		}
	})
})


module.exports = router
// router.get('/api/characters/:id', (req, res, next)=>{

// })