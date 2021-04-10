var readLineSync = require('readline-sync');
var chalk= require('chalk')


var userName= readLineSync.question(chalk.red.bold("Hello!")+ chalk.bold.strikethrough("can I know Your Name: "));

console.log(chalk.green("Hello "+ chalk.bold(userName)+" Welcome to DO YOU KNOW "+chalk.bold("SOMESH")));

function play(question, answer){
  console.log("\n");
  console.log(chalk.bgYellow(question));
  console.log(data[i].option1);
  console.log(data[i].option2);
  console.log(data[i].option3);
  console.log(data[i].option4);
  var userAnswer = readLineSync.question("Your answer is : ");

  if(userAnswer == answer){
    console.log(chalk.bgGreen.bold(" You are Right!"));
    count++;

  }
  else{
    console.log(chalk.bgRed.bold("Ah! Nope"));

  }


}

var data =[
  {
    question: "Which of Ben’s alien forms comes from the planet Galvan Prime??",
    option1: "1. it doesnot matter",
    option2: "2. grey matter",
    option3: "3. dark matter",
    option4: "4. anti-matter",
    answer: 2
    
  },
  
  {
    question: "Who created the Omnitrix?",
    option1: "1. Ben",
    option2: "2. Azmuth",
    option3: "3. gwen",
    option4: "4. Grandpa",
    answer: 2
    
  },
  {
    question: "Who is the super-powered teen who absorbed the Omnitrix's ability and teamed up with Vilgax?",
    option1: "1. Kevin 11",
    option2: "2. ben",
    option3: "3. gwen",
    option4: "4. no one",
    answer: 1
    
  },
  
];
var status='y'
do{
var count =0;
for(var i=0;i<data.length;i++){

  play(data[i].question, data[i].answer,data[i].option1,data[i].option2,data[i].option3,data[i].option4);
  
}

console.log("\n");
console.log(chalk.bgCyan.bold("Your Score is : "+ count)) ;
var s= readLineSync.question(chalk.bgMagenta.bold("wanna Play again? y/n"));
if(s === 'n')
status = 'n'

}while(status === 'y')