let database = require('../database')


let readOne = (values, callback)=>{
	database.all("SELECT * FROM characters_place_of_interest WHERE characters_place_of_interest.character_id = ?", values, callback)
}

let createOne = (values, callback)=>{
	database.run("INSERT INTO characters_place_of_interest VALUES (?, ?)", values, callback)
}

let deleteOne = (values, callback)=>{
	database.run("DELETE FROM characters_place_of_interest WHERE characters_place_of_interest.oid = ?", values, callback)
}

module.exports = {readOne, createOne, deleteOne}