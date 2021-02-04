var gameState = 0, contestantCount, database, quiz, question, contestant, allContestants;
var errorState = 0;
var resultDisplayed = false;

function setup()
{
  database = firebase.database();
  createCanvas(850, 400);
  quiz = new Quiz();
  quiz.getGameState();
  quiz.startQuiz();
}

function draw()
{
  background("lightblue");
  if(gameState === 0)
  {
    fill("black");
    textFont("Lucida Calligraphy");
    textSize(13);
  }
  if(contestantCount === 4)
  {
    quiz.updateGameState(1);
  }

  if(gameState === 1)
  {
    clear();
    background(252, 231, 139);
    fill("blue");
    textFont("Lucida Calligraphy");
    textSize(20);
    text("*NOTE: Contestants who answered correctly are highlighted in GREEN.", 50, 230);
    var allContestantsRef = database.ref('contestants');
    allContestantsRef.on("value", (data) => {allContestants = data.val();});
    if(question !== undefined) question.hide();
  if(!resultDisplayed) 
   {
    displayResult();
    resultDisplayed = true;
   }
    if(allContestants !== undefined)
    {
      var y = 270;
      for(var cts in allContestants)
      {
        var correctAnswer = "2";
        if(correctAnswer === allContestants[cts].answer) fill("green");
        else fill("red");
        textSize(17);
        text(allContestants[cts].name + ": " + allContestants[cts].answer, 150, y);
        y = y + 30;
      }
    }
   }
  }


function displayResult()
{
  var title = createElement('h2');
  var question = createElement('h3');
  var option1 = createElement('h3');
  var option2 = createElement('h3');
  var option3 = createElement('h3');
  var option4 = createElement('h3');
  var replayQuizButton = createButton('Replay Quiz');
  title.html("Result of the Quiz");
  title.position(350, 0);
  question.html("Question:- What starts and ends with the letter 'E', but has only one letter");
  question.position(150, 60);
  option1.html("1: Everyone");
  option1.position(150, 100);
  option2.html("2: Envelope");
  option2.position(150, 120);
  option3.html("3: Estimate");
  option3.position(150, 140);
  option4.html("4: Example");
  option4.position(150, 160);
  replayQuizButton.position(400, 300);
  replayQuizButton.mousePressed(()=>
  {
    database.ref('/').update({gameState: 0});
    database.ref('/').update({contestantCount: 0});
    gameState = 0;
    contestantCount = 0;
    title.hide();
    question.hide();
    option1.hide();
    option2.hide();
    option3.hide();
    option4.hide();
    replayQuizButton.hide();
    quiz = new Quiz();
    quiz.getGameState();
    quiz.startQuiz();
  }
  );
}