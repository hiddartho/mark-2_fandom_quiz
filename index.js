var readlineSync =require('readline-sync')
var score=0

var userName = readlineSync.question("What is your name? ")
console.log("Welcome "+userName+", how well do you know JAVASCRIPT? ")

console.log(("---------------------"))

function quiz(question, answer){
  var userAnswer = readlineSync.question(question)
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("Right")
    score=score+1
  }
  else{
    console.log("Wrong")
  }
  console.log("Current Score: "+score)
  console.log("=====================\n")
 
}

var questions =[
  {
  question:"How to get the output in node.js? ",
  answer: "console.log"
  },
  {
    question:"What is the full form of CLI? ",
    answer: "command-line interface"
  },
  {
    question:"Output of this: console.log(`Hello World`); ",
    answer:"Hello World"
  },
  {
    question:"What is a readline-sync? ",
    answer:"package"
  },
  {
    question:"what is the staring index of an array? ",
    answer:"0"
  },
  {
    question:"How many primitive data types are there? ",
    answer:"7"
  },
  {
    question:"How to concatenate strings in js? ",
    answer:"+"
  },
  {
    question:"simplify these: i++ ",
    answer:"i=i+1"
  },
  {
    question:"Which company developed JavaScript? ",
    answer:"netscape"
  },
  {
    question: "How to give a single-line comment ",
    answer:"//"
  }]

for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i]
  quiz(currentQuestion.question, currentQuestion.answer)
}

 console.log("Yay! Final Score:" + score)

console.log("++++++++++++++++++++++++++++++++++\n")

console.log("ANSWERS\n")

var answers =["console.log",
              "command-line interface",
              "Hello World",
              "package",
              "0",
              "7",
              "+",
              "i=i+1",
              "netscape",
              "//",
              ]

for(var j=0;j<answers.length;j++){
  console.log(j+1+"."+answers[j])
}