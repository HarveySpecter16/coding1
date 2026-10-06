const words = ["Andrés", "Fran", "Alex", "Ms. Kennedy", "Elsie", "Gustaw", "Dragos", "Hakan", "Football", "Banana", "Games", "Classes", "Brillantmont", "Computer", "Kitchen", "French", "Switzerland", "Mexico"];

function generateRandomWord() {

const randomIndex = Math.floor(Math.random() * words.length);

const randomWord = words [randomIndex];

document.getElementByID("wordDisplay").innerText = randomWord;

}
