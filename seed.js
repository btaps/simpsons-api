const db = require('./database.js');
/*
let fs = require('fs')

let sqlite3 = require('sqlite3')

let database = new sqlite3.Database('./database.db')

let sqlBuffer = fs.readFileSync('./seed.sql')

let sqlString = sqlBuffer.toString()
*/
let characters_list = [
 {
   first_name: "Homer",
   last_name_id: null,
   occupation_id: null,
   catch_phrase: "D'oh",
   age_range: "Adult",
 },
  {
   first_name: "Bart",
   last_name_id: null,
   occupation_id: null,
   catch_phrase: "¡Ay, caramba!",
   age_range: "Kid"
 },
  {
   first_name: "Marge",
   last_name_id: null,
   occupation_id: null,
   catch_phrase: "Mmm~mmmmm",
   age_range: "Adult"
 },
   {
   first_name: "Lisa",
   last_name_id: null,
   occupation_id: null,
   catch_phrase: "If anyone wants me, I'll be in my room.",
   age_range: "Kid"
 },
   {
   first_name: "Maggie",
   last_name_id: null,
   occupation_id: null,
   catch_phrase: "(Pacifier Suck)",
   age_range: "Baby"
 },
    {
   first_name: "Ned",
   last_name_id: null,
   occupation_id: null,
   catch_phrase: "Okily Dokily!",
   age_range: "Adult"
 },
    {
   first_name: "Todd",
   last_name_id: null,
   occupation_id: null,
   catch_phrase: "Yay!!!",
   age_range: "Kid"
 },
    {
   first_name: "Rod",
   last_name_id: null,
   occupation_id: null,
   catch_phrase: "Yay!!!",
   age_range: "Kid"
 },
    {
   first_name: "Carl Carlson",
   last_name_id: null,
   occupation_id: null,
   catch_phrase: "Why don't we talk about it over at Moe's?",
   age_range: "Adult"
 },
    {
   first_name: "Lenny Leonard",
   last_name_id: null,
   occupation_id: null,
   catch_phrase: "Ow, my eye!",
   age_range: "Adult"
 },
]

let place_of_interest_list = [
	{name: "Springfield Nuclear Power Plant"},
	{name: "Moe's Tavern"},
	{name: "Springfield Elementary School"},
	{name: "Krusty Burger"},
	{name: "Kwik-E-Mart"},
	{name: "Lard Lad Donuts"},
	{name: "Luigi's"},
	{name: "Try-N-Save"},
	{name: "Springfield Mall"},
	{name: "Noiseland Video Arcade"},
	{name: "Barney's Bowl-A-Rama"},
	{name: "The Android's Dungeon & Baseball Card Shop"},
	{name: "Herman's Military Antiques"},
	{name: "Itchy & Scratchy Land"},
	{name: "Krustyland"},
	{name: "The Springfield City Hall"},
	{name: "Springfield Retirement Castle"},
	{name: "Springfield Penitentiary"},
	{name: "Springfield Police Department"},

]

const occupation_list = [
	{name: "Power Plant Worker",
	 location: null},
	{name: "Student",
	 location: null},
	{name: "Police Officer",
	 location: null},
	{name: "Bus Driver",
	 location: null},
	{name: "Krusty's Show Cast",
	 location: null},
	{name: "Criminal",
	 location: null},
	{name: "Doctor",
	 location: null},
	{name: "School Staff",
	 location: null}
]

const last_name_list = [
	{name: "Simpson"},
	{name: "Flanders"},
	{name: "Van Houten"},// Milhouse Van Houten
	{name: "Albertson"}, // Jeffrey Albertson (Comic Book Guy)
	{name: "SMontgomery Burns"},//Charles Montgomery "Monty" Burns
	{name: "Nahasapeemapetilon"},//Apu Nahasapeemapetilon
	{name: "Krabappel"}, //Edna Krabappel
	{name: "Hibbert"}, //Dr. Julius Hibbert 
	{name: "Riviera"}, //Dr. Nicholas Riviera 
	{name: "Spuckler"},// Cletus Spuckler
	{name: "Wiggum"},// Chief Clancy Wiggum, Ralph Wiggum
	{name: "Quimby"},// Mayor Joseph Quimby
	{name: "Mann"}, // Otto Mann
	{name: "Jones"}, // Jimbo Jones
	{name: "Leonard"}, // Lenny Leonard
	{name: "Gumble"}, //Barney Gumble
	{name: "Skinner"}, // Principal W. Seymour Skinner
	{name: "Muntz"}, // Nelson Muntz
	{name: "Prince"}, // Martin Prince
	{name: "MacDougal"}, // Dr. William MacDougal, better known as Groundskeeper Willie,
]

const voiced_by_list = [
	{name: "Dan Castellaneta"}, // Homer, Barney Gumble, Groundskeeper Willie
	{name: "Nancy Cartwright"}, // Bart, Tod Flanders, Maggie, Nelson
	{name: "Julie Kavner"}, // Marge
	{name: "Yeardley Smith"}, // Lisa
	{name: "Harry Shearer"}, // Ned Flanders, Lenny, Otto Mann, Mr. Burns, Dr. Hibbert, Principle Skinner
	{name: "Pamela Hayden"}, // Rod Flanders, Milhouse, Jimbo
	{name: "Hank Azaria"}, //  Carl Carlson, Comic Book Guy, Apu, Dr. Nick, chief Wiggum, Cletus
	{name: "Marcia Wallace"}, // Edna Krabappel
	{name: "Russi Taylor"}, // Martin Prince
]
/*
database.exec(sqlString, err=>{
	if(err) console.log(err)
	else console.log("Database.exec() was successful")
})
*/


const deleteCharactersTable = "DELETE FROM characters"
const deletePlaceTable = "DELETE FROM place_of_interest"
const deleteOcuppationTable = "DELETE FROM occupations"
const deleteLastNameTable = "DELETE FROM last_name"
const deleteVoicedTable = "DELETE FROM voiced_by_actors"

const insertIntoCharactersTable = "INSERT INTO characters VALUES(?, ?, ?, ?, ?)"
const insertIntoPlaceTable = "INSERT INTO place_of_interest VALUES (?)"
const insertIntoOccupTable = "INSERT INTO occupations VALUES (?, ?)"
const insertIntoLastNameTable = "INSERT INTO last_name VALUES (?)"
const insertIntoVoicedTable = "INSERT INTO voiced_by_actors VALUES (?)"


db.run(deleteCharactersTable, err=>{
  if(err) console.log('Could not delete characters table', err)
  else{
    characters_list.forEach(character=>{
 	let characterData = [character.first_name, character.last_name_id, character.occupation_id, character.catch_phrase, character.age_range]
	  db.run(insertIntoCharactersTable, characterData, err=>{
	    if(err) console.log('Could not insert into characters table.', err)
	 	else console.log(`${character.first_name} successfully added to the database!`)
	  })
	})
	db.run(deletePlaceTable, err=>{
  	  if(err) console.log('Could not delete place of interest table', err)
  	  else{
    	place_of_interest_list.forEach(place=>{
 	  	  let placeData = [place.name]
	      db.run(insertIntoPlaceTable, placeData, err=>{
	   	    if(err) console.log('Could not insert into place of interest table.')
	 	    else console.log(`${place.name} successfully added to the database!`)
		  })
		})
      db.run(deleteOcuppationTable, err=>{
  		if(err) console.log('Could not delete place of interest table', err)
  		else{
    	  occupation_list.forEach(occupation=>{
 	  	    let occupationData = [occupation.name]
	    	db.run(insertIntoOccupTable, occupationData, err=>{
	   		  if(err) console.log('Could not insert into occupations table.', err)
	 		  else console.log(`${occupation.name} successfully added to the database!`)
			})
		  })
    	  db.run(deleteLastNameTable, err=>{
  			if(err) console.log('Could not delete last name table', err)
  			else{
    		  last_name_list.forEach(lName=>{
 	  		    let lastNameData = [lName.name]
	    		db.run(insertIntoLastNameTable, lastNameData, err=>{
	   			  if(err) console.log('Could not insert into last name table.', err)
	 			  else console.log(`${lName.name} successfully added to the database!`)
				})
			  })
    		db.run(deleteVoicedTable, err=>{
  			  if(err) console.log('Could not delete voiced by actors table', err)
  			  else{
    			voiced_by_list.forEach(actor=>{
 	  			  let actorData = [actor.name]
	    		  db.run(insertIntoVoicedTable, actorData, err=>{
	   				if(err) console.log('Could not insert into voiced by actors table.', err)
	 				else console.log(`${actor.name} successfully added to the database!`)
				  })
				})
  		 	  }
			})
  			}
		  })
  		}
	   })
  	  }
	})
  }
})


