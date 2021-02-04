class Contestant
{
    constructor()
    {
      this.contestantName = null;
      this.contestantCount = null;
      this.answer = 0;
    }

    getContestantCount()
    {
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value", function(data){contestantCount = data.val();});
      return contestantCount;
    }
  
    updateContestantCount(contestantCount)
    {
      database.ref('/').update({contestantCount: contestantCount});
    }
  
    updateContestantDetails()
    {
      var contestantIndex = "contestants/contestant" + contestantCount;
      database.ref(contestantIndex).set(
      {
        name: this.contestantName,
        answer: this.answer
      });
    }

    static allContestantsInfo()
    {
      var allContestantsRef = database.ref('contestants');
      allContestantsRef.on("value", (data) => {allContestants = data.val();});
    }      
};