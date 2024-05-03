// quiz-cli.js

const readline = require("readline");

// Define quiz questions with options and correct answers
const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "H2SO4"],
    answer: "H2O",
  },
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
    if (index === quizQuestions.length) {
      // End of quiz
      console.log(
        `Quiz completed! Your score: ${score}/${quizQuestions.length}`,
      );
      rl.close();
      return;
    }

    const questionObj = quizQuestions[index];
    const question = questionObj.question;
    const options = questionObj.options;

    // Display question and options
    console.log(`Question ${index + 1}: ${question}`);
    for (let j = 0; j < options.length; j++) {
      console.log(`${j + 1}. ${options[j]}`);
    }

    // Prompt user for input
    rl.question("Enter your answer (1, 2, 3, 4): ", (answerIndex) => {
      const userAnswerIndex = parseInt(answerIndex);

      // Validate user input and check answer
      if (
        isNaN(userAnswerIndex) ||
        userAnswerIndex < 1 ||
        userAnswerIndex > options.length
      ) {
        console.log("Invalid input. Skipping question...\n");
        askQuestion(index + 1); // Ask next question
        return;
      }

      const userAnswer = options[userAnswerIndex - 1];
      const correctAnswer = questionObj.answer;

      // Check if user's answer is correct
      if (userAnswer === correctAnswer) {
        console.log("Correct!\n");
        score++;
      } else {
        console.log(
          `Incorrect. The correct answer is: ${correctAnswer}\n`,
        );
      }

      // Ask next question
      askQuestion(index + 1);
    });
  }

  // Start asking questions
  askQuestion(0);
}

// Start the quiz
startQuiz();
