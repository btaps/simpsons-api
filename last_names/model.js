let database = require('../database')

let readAll = (callback)=>{
	database.all("SELECT * FROM last_names", callback)
}

let readOne = (values, callback)=>{
	database.all("SELECT * FROM last_names WHERE last_names.oid = ?", values, callback)
}

let updateOne = (values, callback)=>{
	database.run("UPDATE last_names SET last_name = ? WHERE last_names.oid = ?", values, callback)
}

let createOne = (values, callback)=>{
	database.run("INSERT INTO last_names VALUES (?)", values, callback)
}

let deleteOne = (values, callback)=>{
	database.run("DELETE FROM last_names WHERE last_names.oid = ?", values, callback)
}

module.exports = {readAll, readOne, updateOne, createOne, deleteOne}