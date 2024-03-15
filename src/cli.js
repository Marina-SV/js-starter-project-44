import readlineSync from 'readline-sync';

export const greeting = () => {
    console.log('Welcome to the Brain Games!');
    const name = askName();
    console.log(`Hello, ${name}!`)
}

function askName() {
    console.log('May I have your name?')
    return readlineSync.question('Your answer: ');
}


