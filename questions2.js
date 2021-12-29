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
	'Menciona algo a lo que los niños le temen',
	'Nombra animales que se tengan como mascota.',
	'Dinos el nombre (especie) de un pez',
	'Además de alcohol, menciona algo que no falta en un botiquín',
	'Propositos de año nuevo',
	'Nombra X-men clasicos',
	'Insectos que se encuentran dentro de las casas',
	'Pokemon famosos'
];

// answers to the questions for rounds
// format: dimension 1 = round, dimension 2 = question, dimension 3 = [answer, points]
var answers_rounds = [
	[
		['Obscuridad', 49],
		['Inyecciones', 22],
		['Payasos', 15],
		['Disfraces', 7],
		['A sus papás', 7]
	],[
		['Perro', 50],
		['Gatos', 36],
		['Peces', 7],
		['Roedores', 4],
		['Aves', 3]
	],[
		['Dorado', 34],
		['Payaso', 29],
		['Beta', 19],
		['Atún', 10],
		['Sardina', 8]
	],[
		['Gasas', 34],
		['Vendas', 29],
		['Agua Oxigenada', 19],
		['Algodón', 10],
		['Curitas', 8]
	],[
		['Hacer dieta', 34],
		['Hacer ejercicio', 29],
		['Viajar', 19],
		['Tener pareja', 10],
		['Ganas a la escuela/trabajo', 8]
	],[
		['Wolverine', 34],
		['Dr. Xavier', 29],
		['Tormenta / Storm', 19],
		['Gambito / Gambit', 10],
		['Rogue', 4],
		['Cyclops', 4]
	],[
		['Moscas', 34],
		['Arañas', 29],
		['Hormigas', 19],
		['Cucarachas', 10],
		['Mosquitos', 8]
	],[
		['Pikachu', 50],
		['Charizard', 36],
		['Squirtle', 7],
		['Bulbasur', 4],
		['Mewtwo', 3]
	]
];


// multiplicator for the points gained in a round
// format: indexed by round, value is multiplicator
var multiplicator = [1, 1, 1, 1, 1, 1, 2, 3];
		

// questions for finals
var questions_finals = [
	'Personajes clasicos de la primera saga Star Wars',
	'Playas famosas de México',
	'Animales de Desiertos',
	'Fruta que por fuera es verde'
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
		['Roedores', 8],
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

