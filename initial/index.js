// quiz-cli.js

const readline = require("readline");

// Define quiz questions with options and correct answers
// TODO: Define your quiz questions here
const quizQuestions = [
  // Example:
  // {
  //   question: "What is the capital of France?",
  //   options: ["Paris", "London", "Berlin", "Madrid"],
  //   answer: "Paris",
  // },
];

// Function to start the quiz
function startQuiz() {
  console.log("Welcome to the Quiz!\n");
  let score = 0;
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Recursive function to iterate through questions
  function askQuestion(index) {
    // TODO: Check if we've asked all the questions. If so, print the score and close the readline interface.

    // TODO: Get the current question object from the quizQuestions array.

    // TODO: Display the question and options to the user.

    // Prompt user for input
    rl.question("Enter your answer (1, 2, 3, 4): ", (answerIndex) => {
      // TODO: Validate the user's input. If it's not a valid option, print an error message and move on to the next question.

      // TODO: Check if the user's answer is correct. If so, increment the score and print a success message. If not, print the correct answer.

      // Ask the next question
      askQuestion(index + 1);
    });
  }

  // Start asking questions
  askQuestion(0);
}

// Start the quiz
startQuiz();
