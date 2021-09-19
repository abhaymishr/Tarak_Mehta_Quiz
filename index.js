    var readLineSync=require("readline-sync")
    var chalk=require("chalk");
    
    
    var score=0;

    var userName=readLineSync.question("Enter Your Name ");
    console.log(chalk.redBright("Welcome "+userName+" Do You Know Tarak Mehta Ka OOltah Chashma Characters? "));


    function play(question,answer,options){

      console.log(question)_
      console.log(options)
      var userAnswer=prompt(chalk.blueBright("Enter your Answer?"))
      
      
      
      if(userAnswer.toUpperCase()==answer.toUpperCase()){

    console.log(chalk.greenBright("You Are Right"));
    score=score+1

      }

      else{
        console.log(chalk.red("Wrong"));

      }

      console.log("Current Score"+score)
      console.log("-----------")
    }


    var questions=[{
      question:"Whol is Jethalal In Tarak Mehta Ka OOltah Chashma?",
      answer:"A",
      option:"A)Dilip  B)SodhiC)Iyer"
    },
    {
      question:"Whol is Daya In Tarak Mehta Ka OOltah Chashma?",
      answer:"A",
      option :"A)Disha B)Munmun C)Shreya"
    },
    
    {
      question:"Who is ChampakLal in Tarak Mehta Ka OOltah Chashma? ?",
      answer:"A",
      option :"A)Amit Bhatt B)Krishna C)Abhishek"
    },

    {
      question:"Who is Tapu in Tarak Mehta Ka OOltah Chashma?",
      answer:"a",
      option :"A)Bhavya Gandhi B)Kishore C)Kumar Sanu"
    },
    ]

    var scores = [
  {
    name:"Polo ",
    score:"3"
  },
  {
    name:"Atul ",
    score:"2"
  }
];



    for(var i=0;i<questions.length;i++){

    var currentQuestion=questions[i]
    play(currentQuestion.question,currentQuestion.answer,currentQuestion.option);
    }

    

    

    console.log("Your Final Score is:"+score)

    if(score>3){
      console.log(chalk.blue("You Scored highest"))
    }
    else{
      console.log("Highest Scores Are:")

      for(var i=0;i<scores.length;i++){

    var currentPlayer=scores[i]
    console.log(chalk.blue("Name:"+currentPlayer.name+"Score:"+currentPlayer.score));
    }

    }

