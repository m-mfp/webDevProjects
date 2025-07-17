let questions = [
    {category: "dumb",
    question: "Is the earth flat?",
    choices: [
      "Yes",
      "No",
      "I don't know and refuse to answer this dumb question!"
    ],
    answer: "No"},
  
    {category: "dumb",
    question: "Are there only two genders?",
    choices: [
      "Yes",
      "No",
      "I don't know and refuse to answer this dumb question!"
    ],
    answer: "Yes"},
  
    {category: "kindaDumb",
    question: "Why is Gamora?",
    choices: [
      "Yes",
      "No",
      "Don't call us that, we don't know what it means!"
    ],
    answer: "Don't call us that, we don't know what it means!"},
  
    {category: "kindaDumb",
    question: "Does one simply walk into mordor?",
    choices: [
      "Yes",
      "No",
      "One does not simply walk into mordor!"
    ],
    answer: "One does not simply walk into mordor!"},
  
    {category: "actuallySmart",
    question: "You know what I call a good day?",
    choices: [
      "Yes",
      "No",
      "One that does not end with an empty stomach!"
    ],
    answer: "One that does not end with an empty stomach!"}
  ]
  
  function getRandomQuestion(questions) {
    let index = Math.floor(Math.random() * 5);
    let selectedQuestion = questions[index];
    return selectedQuestion;
  }
  
  function getRandomComputerChoice(selectedQuestionChoices) {
    let index = Math.floor(Math.random() * 3);
    selectedChoice = selectedQuestionChoices[index];
    return selectedChoice;
  }
  
  function getResults(selectedQuestion, selectedChoice) {
    if (selectedChoice == selectedQuestion.answer) {
      return "The computer's choice is correct!"
    } else {
      return `The computer's choice is wrong. The correct answer is: ${selectedQuestion.answer}`
    } 
     
  }
  
  let selectedQuestion = getRandomQuestion(questions)
  console.log(selectedQuestion)
  
  let selectedChoice = getRandomComputerChoice(selectedQuestion.choices)
  console.log(selectedChoice)
  
  console.log(getResults(selectedQuestion, selectedChoice))
  