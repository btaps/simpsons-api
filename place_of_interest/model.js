let database = require('../database')

let readAll = (callback)=>{
	database.all("SELECT * FROM place_of_interest", callback)
}

let readOne = (values, callback)=>{
	database.all("SELECT * FROM place_of_interest WHERE place_of_interest.oid = ?", values, callback)
}

let updateOne = (values, callback)=>{
	database.run("UPDATE place_of_interest SET name = ? WHERE place_of_interest.oid = ?", values, callback)
}

let createOne = (values, callback)=>{
	database.run("INSERT INTO place_of_interest VALUES (?)", values, callback)
}

let deleteOne = (values, callback)=>{
	database.run("DELETE FROM place_of_interest WHERE place_of_interest.oid = ?", values, callback)
}

module.exports = {readAll, readOne, updateOne, createOne, deleteOne}