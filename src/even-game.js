import readlineSync from 'readline-sync';

let nameOfPlayer;
const numbers = [];

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}

function prepareNumbers() {
  while (numbers.length < 3) {
    const number = getRandomInRange(1, 100);
    numbers.push(number);
  }
}

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  nameOfPlayer = readlineSync.question('Your answer: ');
  console.log(`Hello, ${nameOfPlayer}!`);
};
const setQuestion = (num) => {
  console.log(`Question: ${num}`);

  const answer = readlineSync.question('Your answer: ');

  if ((num % 2 === 0 && answer === 'yes')
        || (num % 2 !== 0 && answer === 'no')) {
    console.log('Correct!');
    return 'continue';
  }
  console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
  return 'break';
};

const setRound = () => {
  for (let i = 0; i < numbers.length; i += 1) {
    const status = setQuestion(numbers[i]);

    if (status === 'break') {
      console.log(`Let's try again, ${nameOfPlayer}!`);
      break;
    }

    if (i === numbers.length - 1) {
      console.log(`Congratulations, ${nameOfPlayer}!`);
    }
  }
};

const toPlayEvenGame = () => {
  greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  prepareNumbers();
  setRound();
};

export default toPlayEvenGame;
