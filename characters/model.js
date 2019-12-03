let database = require('../database')

let readAll = (callback)=>{
	database.all("SELECT * FROM characters", callback)
}

let readOne = (values, callback)=>{
	database.all("SELECT * FROM characters WHERE characters.oid = ?", values, callback)
}

let updateOne = (values, callback)=>{
	database.run("UPDATE characters SET first_name = ?, last_nameID = ?, occupationID = ?, catch_phrase = ?, age_range = ? WHERE characters.oid = ?", values, callback)
}

let createOne = (values, callback)=>{
	database.run("INSERT INTO characters VALUES (?, ?, ?, ?, ?)", values, callback)
}

let joinTableONE = (values, callback)=>{
	database.run("INSERT INTO characters_place_of_interest VALUES (?, ?)", values, callback)
}

let joinTableTWO = (values, callback)=>{
	database.run("INSERT INTO characters_voiced_by VALUES (?, ?)", values, callback)
}

let deleteOne = (values, callback)=>{
	database.run("DELETE FROM characters WHERE characters.oid = ?", values, callback)
}

module.exports = {readAll, readOne, updateOne, createOne, joinTableONE, joinTableTWO, deleteOne}