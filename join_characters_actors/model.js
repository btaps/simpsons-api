let database = require('../database')


let readOne = (values, callback)=>{
	database.all("SELECT * FROM characters_voiced_by WHERE characters_voiced_by.voiced_by_id = ?", values, callback)
}

let createOne = (values, callback)=>{
	database.run("INSERT INTO characters_voiced_by VALUES (?, ?)", values, callback)
}

let deleteOne = (values, callback)=>{
	database.run("DELETE FROM characters_voiced_by WHERE characters_voiced_by.oid = ?", values, callback)
}

module.exports = {readOne, createOne, deleteOne}