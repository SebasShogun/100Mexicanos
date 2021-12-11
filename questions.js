// Configuration file, change the contents to your needs. The contents of this
// file are in the public domain.

// The number of rounds can be changed:
//  * add/remove questions in questions_rounds
//  * add/remove rows in answers_rounds
//  * add/remove entries in multiplicator

// The number of answers per question can be changed:
//  * add/remove entries in the correct row of answers_rounds

// The number of questions in the finals can be changed:
//  * add/remove rows in questions_finals
//  * add/remove rows in answers_finals

// The number of valid answers in the finals can be changed:
//  * add/remove entries in the correct row of answers_finals

// questions for rounds
var questions_rounds = [
	'Nombra algo que se toma para acompañar el desayuno',
	'Nombra animales que se tengan como mascota.',
	'Nombra cosas que se pegan en la pared',
	'Nombra cosas que se pegan en la pared',
	'Nombra cosas que se pegan en la pared'
];

// answers to the questions for rounds
// format: dimension 1 = round, dimension 2 = question, dimension 3 = [answer, points]
var answers_rounds = [
	[
		['Cereal', 49],
		['Cafe', 22],
		['Pan', 15],
		['Té', 7],
		['Chocolate Caliente', 4], 
		['Fruta', 3]
	],[
		['Perro', 50],
		['Gatos', 36],
		['Peces', 7],
		['Roedores', 4],
		['Pericos', 3]
	],[
		['Cuadro/Posters', 34],
		['Fotos', 29],
		['Repizas', 19],
		['Pantallas', 10],
		['Reconocimientos', 8]
	],[
		['Poster', 34],
		['Sticker', 29],
		['Bubble gum', 19],
		['Hot glue', 10],
		['Reconocimientos', 8]
	],[
		['Poster', 34],
		['Sticker', 29],
		['Bubble gum', 19],
		['Hot glue', 10],
		['Reconocimientos', 8]
	]
];


// multiplicator for the points gained in a round
// format: indexed by round, value is multiplicator
var multiplicator = [1, 1, 1, 1, 1];
		

// questions for finals
var questions_finals = [
	'Personajes clasicos de la primera saga Star Wars',
	'Playas famosas de México',
	'Animales de Desiertos',
	'Frutas verdes'
];


// answers to the questions for the finals	
// format: dimension 1 = question, dimension 2 = answer, dimension 3 = [answer, points]
// must have five questions
var answers_finals = [
	[
		['Darht Vader', 35],
		['Luke Skywalker', 26],
		['Yoda', 10],
		['Han Solo', 10],
		['Leia Organa', 9]
	],[
		['Playa del Carmen', 30],
		['Puerto Vallarta', 31],
		['Cancun', 26],
		['Los Cabos', 9],
		['Mazatlán', 3]
	],[
		['Camellos', 37],
		['Coyotes', 24],
		['Serpientes', 19],
		['Iguanas', 12],
		['TRoedores', 8],
	],[
		['Limon', 29],
		['Pera', 28],
		['Sandia', 16],
		['Manzana', 15],
		['Kiwi', 12],
	]
];


// timer duration for first and second player in finals, given in seconds
var timers = [20, 25];

