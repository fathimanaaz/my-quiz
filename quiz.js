class Quiz
{
    constructor()
    {

    }

    getGameState()
    {
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value", function(data){gameState = data.val();});
      return gameState;
    }
    
    updateGameState(gameState)
    {
      database.ref('/').update({gameState: gameState});
    }
    
    async startQuiz()
    {
      console.log("insideStartQuiz()");
      console.log("gameState = " + gameState);
      if(gameState === 0)
      {
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists())
        {
          contestantCount = contestantCountRef.val();
          contestant.getContestantCount();
        }
        question = new Question();
        question.display();
      }
    }
};