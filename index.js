const readLine = require('./input');

async function game() {

    let guess = ['_', '_', '_', '_', '_', '_'];
    let solution = ['c', 'o', 'd', 'i', 'n', 'g'];
    let i = 0;
    let lifes = 5;

    console.log(guess);

    while (!check(guess, solution) && lifes > 0) {

        let line = await readLine("Please introduce a new letter: ");
        console.log(line);

        if (line.length !== 1) {
            console.log('You have to insert a single letter');
        }

        for (i = 0; i < solution.length; i++) {

            if (solution[i] === line) {
                console.log('you found a letter!');

                guess[i] = solution[i];
                console.log(guess);
            }
        }
        if (!solution.includes(line)) {
            lifes -= 1;
            console.log(`Wrong letter! You only have ${lifes} left!`);
        }
    }

    if (check(guess, solution)) {
        console.log('--> Congrats !!! You finished the game');
        return guess;
    } else {
        console.log('--> Sorry, you have no life left, you lost the game!')
    }
}

game();

/////////////////////////////////////////////////////////////

function check(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

