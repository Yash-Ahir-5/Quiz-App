const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      correctAnswer: "Paris",
      type: "single"
    },
    {
      question: "Which of the following are primary colors?",
      options: ["Red", "Blue", "Yellow", "Green"],
      correctAnswer: ["Red", "Blue", "Yellow"],
      type: "multiple"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      correctAnswer: "Harper Lee",
      type: "text"
    },
    {
      question: "What is the square root of 64?",
      correctAnswer: "8",
      type: "text"
    },
    {
      question: "Which planets are considered gas giants?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      correctAnswer: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      type: "multiple"
    },
    {
      question: "Name three countries in South America.",
      correctAnswer: ["Brazil", "Argentina", "Chile", "Peru"],
      type: "text"
    },
    {
      question: "What is the chemical symbol for gold?",
      correctAnswer: "Au",
      type: "text"
    },
    {
      question: "Which of the following are mammals?",
      options: ["Dog", "Snake", "Dolphin", "Eagle"],
      correctAnswer: ["Dog", "Dolphin"],
      type: "multiple"
    },
    {
      question: "Who painted the Mona Lisa?",
      correctAnswer: "Leonardo da Vinci",
      type: "text"
    },
    {
      question: "What is the powerhouse of the cell?",
      correctAnswer: "Mitochondria",
      type: "text"
    },
    {
      question: "Which of the following are programming languages?",
      options: ["Python", "Banana", "Java", "C++"],
      correctAnswer: ["Python", "Java", "C++"],
      type: "multiple"
    },
    {
      question: "What is the tallest mountain in the world?",
      correctAnswer: "Mount Everest",
      type: "text"
    },
    {
      question: "Who invented the telephone?",
      correctAnswer: "Alexander Graham Bell",
      type: "text"
    },
    {
      question: "What is the largest mammal?",
      correctAnswer: "Blue Whale",
      type: "text"
    },
    {
      question: "Name three Shakespeare plays.",
      correctAnswer: ["Hamlet", "Romeo and Juliet", "Macbeth", "Othello"],
      type: "text"
    },
    {
      question: "What is the capital of Japan?",
      correctAnswer: "Tokyo",
      type: "text"
    },
    {
      question: "What is the formula for the area of a circle?",
      correctAnswer: "πr^2",
      type: "text"
    },
    {
      question: "Which of these are parts of the human body?",
      options: ["Brain", "Stomach", "Engine", "Liver"],
      correctAnswer: ["Brain", "Stomach", "Liver"],
      type: "multiple"
    },
    {
      question: "Who wrote '1984'?",
      correctAnswer: "George Orwell",
      type: "text"
    },
    {
      question: "What is the chemical symbol for water?",
      correctAnswer: "H2O",
      type: "text"
    },
    {
      question: "Which of these are noble gases?",
      options: ["Helium", "Oxygen", "Neon", "Argon"],
      correctAnswer: ["Helium", "Neon", "Argon"],
      type: "multiple"
    },
    {
      question: "Name three types of clouds.",
      correctAnswer: ["Cumulus", "Cirrus", "Stratus", "Altocumulus"],
      type: "text"
    },
    {
      question: "Who discovered penicillin?",
      correctAnswer: "Alexander Fleming",
      type: "text"
    },
    {
      question: "What is the largest ocean?",
      correctAnswer: "Pacific Ocean",
      type: "text"
    },
    {
      question: "What is the symbol for the element potassium?",
      correctAnswer: "K",
      type: "text"
    },
    {
      question: "Name three US presidents.",
      correctAnswer: ["George Washington", "Abraham Lincoln", "Barack Obama", "Donald Trump"],
      type: "text"
    },
    {
      question: "What is the formula for the Pythagorean theorem?",
      correctAnswer: "a^2 + b^2 = c^2",
      type: "text"
    },
    {
      question: "Which of these are states in the United States?",
      options: ["California", "Canada", "Texas", "New York"],
      correctAnswer: ["California", "Texas", "New York"],
      type: "multiple"
    },
    {
      question: "Who wrote 'Pride and Prejudice'?",
      correctAnswer: "Jane Austen",
      type: "text"
    },
    {
      question: "What is the chemical symbol for iron?",
      correctAnswer: "Fe",
      type: "text"
    },
    {
      question: "Name three types of rocks.",
      correctAnswer: ["Igneous", "Sedimentary", "Metamorphic", "Granite"],
      type: "text"
    },
    {
      question: "What is the capital of Australia?",
      correctAnswer: "Canberra",
      type: "text"
    },
    {
      question: "Who was the first person to step on the moon?",
      correctAnswer: "Neil Armstrong",
      type: "text"
    },
    {
      question: "What is the speed of light in a vacuum?",
      correctAnswer: "299,792,458 meters per second",
      type: "text"
    },
    {
      question: "Name three European countries.",
      correctAnswer: ["Germany", "Spain", "Italy", "France"],
      type: "text"
    },
    {
      question: "What is the chemical symbol for oxygen?",
      correctAnswer: "O2",
      type: "text"
    },
    {
      question: "Which of these are types of energy?",
      options: ["Solar", "Wind", "Potato", "Nuclear"],
      correctAnswer: ["Solar", "Wind", "Nuclear"],
      type: "multiple"
    },
    {
      question: "Who wrote 'The Great Gatsby'?",
      correctAnswer: "F. Scott Fitzgerald",
      type: "text"
    },
    {
      question: "What is the largest desert in the world?",
      correctAnswer: "Sahara Desert",
      type: "text"
    },
    {
      question: "What is the symbol for the element carbon?",
      correctAnswer: "C",
      type: "text"
    },
    {
      question: "Name three famous inventors.",
      correctAnswer: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Marie Curie"],
      type: "text"
    },
    {
      question: "What is the capital of Canada?",
      correctAnswer: "Ottawa",
      type: "text"
    },
    {
      question: "Who was the first woman to win a Nobel Prize?",
      correctAnswer: "Marie Curie",
      type: "text"
    },
    {
      question: "What is the formula for calculating density?",
      correctAnswer: "Mass / Volume",
      type: "text"
    },
    {
      question: "Name three types of trees.",
      correctAnswer: ["Oak", "Maple", "Pine", "Birch"],
      type: "text"
    },
    {
      question: "What is the chemical symbol for sodium?",
      correctAnswer: "Na",
      type: "text"
    },
    {
      question: "Which of these are types of clouds?",
      options: ["Cumulonimbus", "Thunderstorm", "Altostratus", "Snowstorm"],
      correctAnswer: ["Cumulonimbus", "Altostratus"],
      type: "multiple"
    },
    {
      question: "Who painted the 'Starry Night'?",
      correctAnswer: "Vincent van Gogh",
      type: "text"
    },
    {
      question: "What is the formula for the volume of a cylinder?",
      correctAnswer: "πr^2h",
      type: "text"
    },
    {
      question: "Which of the following are continents?",
      options: ["Asia", "Amazon", "Africa", "Antarctica"],
      correctAnswer: ["Asia", "Africa", "Antarctica"],
      type: "multiple"
    },
  ];
  
  export default quizQuestions;  