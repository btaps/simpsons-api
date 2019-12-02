let database = require('../database')

let readAll = (callback)=>{
	database.all("SELECT * FROM occupations", callback)
}

let readOne = (values, callback)=>{
	database.all("SELECT * FROM occupations WHERE occupations.oid = ?", values, callback)
}

let updateOne = (values, callback)=>{
	database.run("UPDATE occupations SET title = ?, location = ? WHERE occupations.oid = ?", values, callback)
}

let createOne = (values, callback)=>{
	database.run("INSERT INTO occupations VALUES (?, ?)", values, callback)
}

let deleteOne = (values, callback)=>{
	database.run("DELETE FROM occupations WHERE occupations.oid = ?", values, callback)
}

module.exports = {readAll, readOne, updateOne, createOne, deleteOne}