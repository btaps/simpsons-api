// get sqlite3
let sqlite3 = require('sqlite3')

// use sql to make a database variable
let database = new sqlite3.Database('./database.db')

// Character Table attributes
//   first_name          TEXT
//   last_name			 INTEGER  (ONE TO MANY)
//   occupation    		 INTEGER  (ONE TO MANY)
//   catch_phrase  		 TEXT
//   age_range           TEXT 
//   OID	     		 OID

// Place_of_Interest
//   NAME		 TEXT
// 	 OID 		 OID

// Occupation Table attributes
//   name  				 TEXT
// 	 location 			 TEXT
//   OID 	 			 OID
//   Student, Housewife, Nuclear Plant Worker, 

// Last Name Table
// 	 Name 			 	 TEXT
// 	 OID			 		 OID

// Voiced_by_actors Table
//   name 				 TEXT
//   OID   				 OID


// JOIN table for characters and voiced_actors
//   Character oid      INTEGER
//   Voiced_by oid      INTEGER


// Join Table for place_of _interest and character
//   Character_Id		  INTEGER
//   Place_of_Interest_Id INTEGER

const createCharactersTableQuery = `CREATE TABLE IF NOT EXISTS characters (
first_name TEXT, 
last_name INTEGER, 
occupation INTEGER, 
catch_phrase TEXT, 
age_range TEXT)`;

const createPlaceOfInterestTableQuery = `CREATE TABLE IF NOT EXISTS place_of_interest (
name TEXT)`;

const createOccupationTableQuery = `CREATE TABLE IF NOT EXISTS occupations (
name TEXT, 
location TEXT)`;

const createLastNameTableQuery = `CREATE TABLE IF NOT EXISTS last_name (
name TEXT)`;

const createVoicedByActorsTableQuery = `CREATE TABLE IF NOT EXISTS voiced_by_actors (
name TEXT)`;

const createJointable1 = `CREATE TABLE IF NOT EXISTS characters_place_of_interest (
character_id INTEGER, 
place_of_interest_id INTEGER)`;

const createJointable2 = `CREATE TABLE IF NOT EXISTS characters_voiced_by (
character_id INTEGER, 
voiced_by_id INTEGER)`;



database.run(createCharactersTableQuery, err=>{
	if(err) console.log('Create characters table failed!', err)
	else console.log('Create characters table succeeded!')
})

database.run(createPlaceOfInterestTableQuery, err=>{
	if(err) console.log('Create place of interest table failed!', err)
	else console.log('Create place of interest table succeeded!')
})

database.run(createOccupationTableQuery, err=>{
	if(err) console.log('Create occupations table table failed!', err)
	else console.log('Create occupations table table succeeded!')
})

database.run(createLastNameTableQuery, err=>{
	if(err) console.log('Create last name table failed!', err)
	else console.log('Create last name table succeeded!')
})

database.run(createVoicedByActorsTableQuery, err=>{
	if(err) console.log('Create voiced by actors table failed!', err)
	else console.log('Create voiced by actors table succeeded!')
})

database.run(createJointable1, err=>{
	if(err) console.log('Create Join character and place of interest table failed!', err)
	else console.log('Create Join character and place of interest table succeeded!')
})

database.run(createJointable2, err=>{
	if(err) console.log('Create Join character and voiced by actors table failed!', err)
	else console.log('Create Join character and voiced by actors succeeded!')
})

module.exports = database;


