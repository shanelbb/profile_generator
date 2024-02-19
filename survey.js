const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// obj to hold the survey questions
const questionsObj = {
  a: "What's your name? Nicknames are also acceptable :) ",
  b: "What's an activity you like doing? ",
  c: "What do you listen to while doing that? ",
  d: "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  e: "What's your favourite thing to eat for that meal? ",
  f: "Which sport is your absolute favourite? ",
  g: "What is your superpower? In a few words, tell us what you are amazing at! "
};

// empty array variable to hold the user answers
const answers = [];
// function to call the readline question method. Takes a string as an argument.
const questions = (question) => {
  // create a promise that will resolve once input is received
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      // push user input into answers array
      answers.push(answer);
      resolve();
    });
  });
};

// function to run the survey in the terminal. Takes and object as an argument
const survey = async(obj) => {
  // loop through the given object and run questions function for each value in the object
  for (let prop in obj) {
    await questions(obj[prop]);
  }
  // create an intro paragraph using the user provided answers from the answers array
  const surveyOutput = `\nSay hi to ${answers[0]}! They can't get enough of ${answers[1]} and listening to ${answers[2]} while enjoying that! They love to eat ${answers[4]} for ${answers[3]}. The sport they could watch for days is ${answers[5]}. Their superpower is ${answers[6]}.\n`;
  // print the intro paragraph to the terminal
  process.stdout.write(surveyOutput);
  // end the survey
  rl.close();
};

// call survey function with questions object
survey(questionsObj);