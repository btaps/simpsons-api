DELETE FROM characters;
DELETE FROM place_of_interest;
DELETE FROM occupations;
DELETE FROM last_names;
DELETE FROM voiced_by_actors;
INSERT INTO characters VALUES
("Bart", 1, 2, "¡Ay, caramba!", "Kid"), ("Homer", 1, 1, "D'oh", "Adult"), 
("Marge", 1, 11, "Mmm~mmmmm", "Adult"), ("Lenny", 27, 1, "Ow, my eye!", "Adult"),
("Abraham", 1, 19, "Ahh!", "Senior"), ("Maude", 2, 11, "What kind of example are we setting?", "Adult"),
("Maggie", 1, 9, "(Pacifier Suck)", "Baby"), ("Lisa", 1, 2, "If anyone wants me, I'll be in my room.", "Kid"),
("Todd", 2, 2, "Yay!!!", "Kid"), ("Ned", 2, 17, "Okily Dokily!", "Adult"),
("Rod", 2, 2, "Yay!!!", "Kid"), ("Carl", 26, 1, "Why don't we talk about it over at Moe's?", "Adult"),
("Groundskeeper Willie", 24, 8, "Then, grease me up woman!", "Adult"), ("Dr. Julius", 9, 7, "Hee hee hee", "Adult"),
("Nicholas", 10, 7, "Hi everybody!", "Adult"), ("Charles", 6, 1, "Release the Hounds!", "Adult"),
("Jeff", 5, 12, "Worst [blank] ever!", "Adult"), ("Apu", 7, 16, "Thank you, come again", "Adult"),
("Edna", 8, 8, "Ha!", "Adult"), ("Cletus", 11, 15, "Hey, Brandine!", "Adult"),
("Chief Clancy", 12, 3, "Cuff 'em, Lou", "Adult"), ("Mayor Joseph", 13, 18, "Vote Quimby", "Adult"),
("Otto", 15, 4, "No can do", "Adult"), ("Jimbo", 16, 2, "Bite me", "Kid"),
("Barney", 19, 10, "BURRRRRRPPPP!", "Adult"), ("Prince Seymour", 20, 8, "Yes, mother", "Adult"),
("Nelson", 21, 2, "Ha ha!", "Kid"), ("Martin", 23, 2, "Pick me, teacher, I'm ever so smart!", "Kid"),
("Milhouse", 3, 2, "My Glasses!", "Kid"), ("Kirk", 3, 17, "Pity custody, boo-yeah!", "Adult"),
("Luann", 3, 11, "I'm sorry, I'm not as smart as you, Kirk", "Adult"), ('Ralph', 12, 2, "I wanna be a triangle", "Kid"),
("Moe", 25, 13, "Whats-a-matter, Homer?", "Adult"), ("Lionel", 28, 17, "No, Money Down!", "Adult"),
("Troy", 22, 14, "Hi! I'm Troy McClure", "Adult"), ("Kent", 18, 14, "On tonights news...", "Adult"),
("Krusty the clown", 14, 5, "Hey, Hey!", "Adult"), ("Herman", 4, 15, "God closes a door, he opens a gunshop!", "Adult"),
("Eddie", 29, 3, "Yes chief?", "Adult"), ("Lou", 29, 3, "Uh... chief?", "Adult"),
("Sideshow Mel", 30, 5, "I demand entertainment!", "Adult"), ("Sideshow Bob", 31, 6, "Hello Bart", "Adult"),
("Louis 'Mr. Teeny'", 31, 5, "(Monkey Noises)", "Adult"), ("Manjula", 7, 11, "Apu, it's 4 am. You're late for work.", "Adult"),
("Waylon", 32, 1, "Mr. Burns is dead! Why do the good always die so young?", "Adult"), ("Marion Anthony 'Fat Tony'", 33, 6, "Bart, is it wrong to steal a loaf of bread to feed your starving family?", "Adult"),
("Legs", 3, 6, "I'm walking here", "Adult"), ("Louie", 3, 6, "You got it, boss", "Adult"),
("Jasper", 34, 19, "That's a Paddlin", "Senior");

INSERT INTO place_of_interest VALUES 
("Springfield Nuclear Power Plant"),("Moe's Tavern"),("Springfield Elementary School"),
("Krusty Burger"),("Kwik-E-Mart"),("Lard Lad Donuts"),("Luigi's"),("Try-N-Save"),
("Springfield Mall"),("Noiseland Video Arcade"),("Barney's Bowl-A-Rama"),
("The Android's Dungeon & Baseball Card Shop"),("Herman's Military Antiques"),("Itchy & Scratchy Land"),
("Krustyland"),("The Springfield City Hall"),("Springfield Retirement Castle"),
("Springfield Penitentiary"),("Springfield Police Department"), ("Springfield General Hospital"),
("Krusty the Clown Show"), ('Home Sweet Home'), ("Channel 6 Studio"),
("Somewhere in Springfield");
INSERT INTO occupations VALUES 
("Power Plant Worker", 1), ("Student", 3), ("Police Officer", 19),
("Bus Driver", 3), ("Krusty's Show Cast", 21), ("Criminal", 18),
("Doctor", 20), ("School Staff", 3),("Big Chillen", 24),
("Town Drunk", 2), ("House Wife", 22), ("Comic Book Store Clerk", 12),
("Bartender", 2), ("TV Personality", 23), ("Being Wierd", 24),
("Kwik-E-Mart Clerk", 5), ("Entrepreneur", 24), ("Mayor", 16),
("Retired Senior", 17);
INSERT INTO last_names VALUES
("Simpson"), ("Flanders"), ("Van Houten"), ("Hermann"),
("Albertson"), ("Montgomery Burns"), ("Nahasapeemapetilon"),
("Krabappel"), ("Hibbert"), ("Riviera"),
("Spuckler"), ("Wiggum"), ("Quimby"), ("Krustofsky"),
("Mann"), ("Jones"), ("Leonard"), ("Brockman"),
("Gumble"), ("Skinner"), ("Muntz"), ("McClure"),
("Prince"), ("MacDougal"), ("Szyslak"), ("Carlson"), 
("Leonard"), ("Hutz"), ("no last name"), ("Van Horne"),
("Terwilliger"), ("Toot"), ("Smithers"), ("D'Amico"),
("Beardly");
INSERT INTO voiced_by_actors VALUES
("Dan Castellaneta"), ("Nancy Cartwright"), ("Julie Kavner"),
("Yeardley Smith"), ("Harry Shearer"), ("Pamela Hayden"),
("Hank Azaria"), ("Marcia Wallace"), ("Russi Taylor"),
("Maggie Roswell"), ("Phil Hartman"), ("Kelsey Grammer"),
("Jan Hooks"), ("Joe Mantegna");

/*
selects first name, last name and occupation using a specific id

SELECT characters.first_name, last_names.last_name, occupations.title
FROM characters JOIN occupations 
ON characters.occupationID = occupations.oid
JOIN last_names ON characters.last_nameID = last_names.oid
WHERE last_names.last_name = "Flanders"


Use character_placeOfInterest joing table to find out place of interest

SELECT characters.first_name, place_of_interest.name
FROM place_of_interest JOIN characters_place_of_interest
ON place_of_interest.oid = characters_place_of_interest.place_of_interest_id
JOIN characters ON characters.oid = characters_place_of_interest.character_id
WHERE characters.first_name = "Bart"

SELECT who plays who by actor

SELECT voiced_by_actors.name, characters.first_name FROM voiced_by_actors
JOIN characters_voiced_by ON voiced_by_actors.oid = characters_voiced_by.voiced_by_id
JOIN characters ON characters.oid = characters_voiced_by.character_id
WHERE voiced_by_actors.name = "Dan Castellaneta"

*/
