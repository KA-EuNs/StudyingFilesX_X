let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below   :      
let writingUtensil = tool || 'pen';
/*if (tool) {
  writingUtensil = tool;
} else {
  writingUtensil = 'pen';
}*/


console.log(`The ${writingUtensil} is mightier than the sword.`);