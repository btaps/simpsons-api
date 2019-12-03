# <center>Simpsons API Project</center>
***

This is a REST API made with Node, Express, and SQLite3 focusing on data from ***the simpsons*** tv show. The database is composed of 7 tables using *SQLite3*. The first 5 tables are entities made for the user to manipulate. These tables are titled characters, place_of_interest, occupations, last_names, and voiced_by_actors.
The other two are join tables for characters and place_of_interest, as well as characters and voiced_by_actors. Below is an explanation of how to manipulate the routes meant for the user to use when forking this database. 

Explanation of README.md 

 1. Explanations on setting up your server and database using my github repository.
 2. CRUD operations explained
 3. Examples of routes and what to expect as a result.

To begin open up your terminal and find a directory in which you are comfortable cloning this repository. Once there you will need to clone this repository. If you are planning on making edits to this code make sure you have node installed. You will also need to install Express and SQLite3 by typing this command `npm install express sqlite3`. Then use the command `npm start` inside of the cloned repository. This command will launch your index.js file which is hosting at port 9000. Now your server should be running and we can begin to manipulate the routes. I recommend using the application ***Postman***. You don't have to use postman, it was just what I used to manipulate my routes and test them. You will then need to run the seed.js file to hard code our data into our database. To do this make sure you are in the root directory of our cloned repository. In your terminal run `node seed.js`. You can now use your CRUD commands to manipulate our tables. Next I will explain which commands do what and what to expect as a result.
***
## CRUD  Operations

### <center>Characters Table</center>
| Route | target | description |
--- | --- | --- |
***GET*** | /api/characters | Read all characters |
***GET*** | /api/characters/:id | Read a single character using ID
***PUT*** | /api/characters/:id | Update values of a single character using ID
***POST*** | /api/characters | Create a character by writing values using the body object. These values will also add to both out *join tables*
***DELETE*** | /api/characters/:id | Delete a character from our database using oid in SQL database. 

Example:
| Request | Response |
---| --- |
localhost:9000/api/characters | {"first_name": "Bart", "last_nameID": 1,"occupationID": 2, "catch_phrase": "¡Ay, caramba!", "age_range": "Kid"}, {"first_name": "Homer", "last_nameID": 1, "occupationID": 1, "catch_phrase": "D'oh", "age_range": "Adult"}, {"first_name": "Marge","last_nameID": 1,"occupationID": 11,"catch_phrase": "Mmm~mmmmm","age_range": "Adult"}... etc
localhost:9000/api/characters/:id | {"first_name": "Bart", "last_nameID": 1,"occupationID": 2, "catch_phrase": "¡Ay, caramba!", "age_range": "Kid"} OR (***status 200 \\ 500***)
Again when using the ' :id ' we are targeting a single column in our table using the oid. We can use JSON to pass in values via postman. In this example we can change anything in the character ' Bart ' because we singled it out. We just would need to run the PUT route with a new value for which ever column (first_name, last_nameID, occupationID, catch_phrase, or age_range). After you run your route to you either get a result sent via JSON or a status of 200 if everything worked O.K. or status of 500 if something went wrong.

***

### <center>Last Names Table</center>
| Route | target | description |
--- | --- | --- |
***GET*** | /api/last_names | Read all last names |
***GET*** | /api/last_names/:id | Read a single last name using ID
***PUT*** | /api/last_names/:id | Update values of a single last name using ID
***POST*** | /api/last_names | Create a last name by writing values using the body object as JSON.
***DELETE*** | /api/last_names/:id | Delete a last name from our database using oid in SQL database.
 
Example:

| Request | Response |
---| --- |
localhost:9000/api/last_names | {"last_name": "Simpson"},{"last_name": "Flanders"}, {"last_name": "Van Houten"}... etc
localhost:9000/api/last_names/:id | {"last_name": "Simpson"} OR (***status 200 \\ 500***)

***

### <center>Occupations Table</center>
| Route | target | description |
--- | --- | --- |
***GET*** | /api/occupations | Read all occupations |
***GET*** | /api/occupations/:id | Read a single last name using ID
***PUT*** | /api/occupations/:id | Update values of a single last name using ID
***POST*** | /api/occupations | Create a last name by writing values using the body object as JSON.
***DELETE*** | /api/occupations/:id | Delete a last name from our database using oid in SQL database. 

Example:

| Request | Response |
---| --- |
localhost:9000/api/occupations | {"title": "Power Plant Worker", "location": 1},{"title": "Student", "location": 3}, {"title": "Police Officer","location": 19}... etc
localhost:9000/api/occupations/:id | {"title": "Power Plant Worker", "location": 1} OR (***status 200 \\ 500***)

***

### <center>Place of Interest Table</center>
| Route | target | description |
--- | --- | --- |
***GET*** | /api/place_of_interest | Read all occupations |
***GET*** | /api/place_of_interest/:id | Read a single last name using ID
***PUT*** | /api/place_of_interest/:id | Update values of a single last name using ID
***POST*** | /api/place_of_interest | Create a last name by writing values using the body object as JSON.
***DELETE*** | /api/place_of_interest/:id | Delete a last name from our database using oid in SQL database. 

Example:

| Request | Response |
---| --- |
localhost:9000/api/place_of_interest | {"name": "Springfield Nuclear Power Plant"},{"name": "Moe's Tavern"}, {"name": "Springfield Elementary School"}... etc
localhost:9000/api/place_of_interest/:id | {"name": "Springfield Nuclear Power Plant"} OR (***status 200 \\ 500***)

***

### <center>Voiced by Actors Table</center>
| Route | target | description |
--- | --- | --- |
***GET*** | /api/voiced_by_actors | Read all occupations |
***GET*** | /api/voiced_by_actors/:id | Read a single last name using ID
***PUT*** | /api/voiced_by_actors/:id | Update values of a single last name using ID
***POST*** | /api/voiced_by_actors | Create a last name by writing values using the body object as JSON.
***DELETE*** | /api/voiced_by_actors/:id | Delete a last name from our database using oid in SQL database. 

Example:

| Request | Response |
---| --- |
localhost:9000/api/voiced_by_actors | {"name": "Dan Castellaneta"},{"name": "Nancy Cartwright"}, {"name": "Julie Kavner"}... etc
localhost:9000/api/voiced_by_actors/:id | {"name": "Dan Castellaneta"} OR (***status 200 \\ 500***)
***
I also coded some routes to strictly manipulate our join tables. Below are the routes and examples of what to expect.
***
### <center>Characters and Actors Join Table</center>
| Route | target | description |
--- | --- | --- |
***GET*** | /api/characters/voiced_by_actors/:id | Read all characters played by a single actor using the actor ID
***POST*** | /api/characters/voiced_by_actors | Create an association by writing values using the body object as JSON.
***DELETE*** | /api/characters/voiced_by_actors/:id | Delete an association from our database using oid in SQL database. 

Example:

| Request | Response |
---| --- |
localhost:9000/api/characters/voiced_by_actors/:id | {"character_id": 2, "voiced_by_id": 1}, {"character_id": 5, "voiced_by_id": 1}, {"character_id": 13, "voiced_by_id": 1} OR (***status 200 \\ 500***)
***

### <center>Characters and Places Join Table</center>
| Route | target | description |
--- | --- | --- |
***GET*** | /api/characters/place_of_interest/:id | Read all places liked by a single character using ID
***POST*** | /api/characters/place_of_interest | Create an association by writing values using the body object as JSON.
***DELETE*** | /api/characters/place_of_interest/:id | Delete an association from our database using oid in SQL database. 

Example:

| Request | Response |
---| --- |
localhost:9000/api/characters/place_of_interest/:id | {"character_id": 5, place_of_interest_id": 4}, {"character_id": 5, place_of_interest_id": 13}, {"character_id": 5, place_of_interest_id": 17} OR (***status 200 \\ 500***)



