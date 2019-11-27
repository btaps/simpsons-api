let database = require('../database')

let readAll = (callback)=>{
	database.all("SELECT * FROM characters", callback)
}

let readOne = (id, callback)=>{
	database.all("SELECT * FROM characters WHERE characters.oid = ?", id, callback)
}

module.exports = {readAll}