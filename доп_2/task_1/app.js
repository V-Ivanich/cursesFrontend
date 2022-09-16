
//!----task-1
// function checkQuestionAnswer(question, correctAnswer){
//   const userAnswer = prompt(question).trim()
//   userAnswer.toLocaleLowerCase() === correctAnswer.toLocaleLowerCase() ? alert('Ответ верный') : alert('Ответ неверный')
// }


// checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
// checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
// checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');
//*-ответ на задачу -1
// const checkQuestionAnswer = (question, correctAnswer) => {
//   let userAnswer = prompt(question);
//   userAnswer = userAnswer.trim().toLowerCase();
//   if (correctAnswer.toLowerCase() === userAnswer) {
//     alert("Ответ Верный");
//   } else {
//     alert("Ответ Неверный");
//   }
// };

// checkQuestionAnswer("Арбуз это фрукт или ягода?", "Ягода");
// checkQuestionAnswer("Сколько в среднем зубов у взрослого человека?", "32");
// checkQuestionAnswer("Как называется самая маленькая птица в мире?", "Колибри");


//!---task-2
const text = 'Привет! Как дела! Давно мы с тобой не виделись.'

function showSuccessMessage(message){
  console.log(message)
}
function showErrorMessage(message){
  console.error(message)
}

function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback){
  const messageArray = text.split('')
  let isAnError = false

  messageArray.forEach((element, index)=> {
    if(element === errorSymbol){
      const errorMessage = `Найден запрещенный символ "${errorSymbol}" под индексом ${index}`
      errorCallback(errorMessage)
      isAnError = true
    }
  })
  if(!isAnError) successCallback('В данном тексте нет запрещенных символов')
}

checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage)

//*-ответ на задачу-2
// const showSuccessMessage = (message) => {
//   console.log(message);
// };

// const showErrorMessage = (message) => {
//   console.error(message);
// };

// const checkTextOnErrorSymbol = (
//   text,
//   errorSymbol,
//   successCallback,
//   errorCallback
// ) => {
//   let countErrors = 0;
//   for (let i = 0; i < text.length; i += 1) {
//     const currentSymbol = text[i];
//     if (currentSymbol === errorSymbol && errorCallback) {
//       errorCallback(
//         `Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`
//       );
//       countErrors += 1;
//     }
//   }

//   if (successCallback && countErrors === 0) {
//     successCallback("В данном тексте нет запрещенных символов");
//   }
// };

// const text = "Привет! Как дела! Давно мы с тобой не виделись.";
// checkTextOnErrorSymbol(text, "Ф", showSuccessMessage, showErrorMessage);