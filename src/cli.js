import readlineSync from 'readline-sync';

function askName() {
  console.log('May I have your name?');
  return readlineSync.question('Your answer: ');
}

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(`Hello, ${name}!`);
};

export default greeting;
