let database = require('../database')

let readAll = (callback)=>{
	database.all("SELECT * FROM voiced_by_actors", callback)
}

let readOne = (values, callback)=>{
	database.all("SELECT * FROM voiced_by_actors WHERE voiced_by_actors.oid = ?", values, callback)
}

let updateOne = (values, callback)=>{
	database.run("UPDATE voiced_by_actors SET name = ? WHERE voiced_by_actors.oid = ?", values, callback)
}

let createOne = (values, callback)=>{
	database.run("INSERT INTO voiced_by_actors VALUES (?)", values, callback)
}

let deleteOne = (values, callback)=>{
	database.run("DELETE FROM voiced_by_actors WHERE voiced_by_actors.oid = ?", values, callback)
}

module.exports = {readAll, readOne, updateOne, createOne, deleteOne}