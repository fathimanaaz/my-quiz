class Question
{
    constructor() 
    {
      this.title = createElement('h2');
      this.question = createElement('h3');
      this.option1 = createElement('h3');
      this.option2 = createElement('h3');
      this.option3 = createElement('h3');
      this.option4 = createElement('h3');
      this.nameText = createElement('h3.5');
      this.answerText = createElement('h3.5');
      this.errorText = createElement('h3.5');
      this.submitMessage = createElement('h2');
      this.input1 = createInput("");
      this.input2 = createInput("");
      this.button = createButton('Submit');
    }

    hide()
    {
      this.title.hide();
      this.question.hide();
      this.input1.hide();
      this.input2.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
      this.nameText.hide();
      this.answerText.hide();
      this.errorText.hide();
      this.button.hide();
    }

    display()
    {
      this.title.html("My Quiz");
      this.title.position(350, 0);
      this.question.html("Question:- When it grows up it decreases");
      this.question.position(150, 80);
      this.option1.html("1: plant");
      this.option1.position(150, 100);
      this.option2.html("2: age");
      this.option2.position(150, 120);
      this.option3.html("3: nails");
      this.option3.position(150, 140);
      this.option4.html("4: sun");
      this.option4.position(150, 160);
      this.nameText.html("Enter your Name here");
      this.nameText.position(180, 230);
      this.answerText.html("Enter your Option Number here");
      this.answerText.position(117, 270);
      this.input1.position(350, 230);
      this.input2.position(350, 270);
      this.button.position(400, 330);
      this.button.mousePressed(()=>
      {
        contestant.contestantName = this.input1.value();
        contestant.answer = this.input2.value();
        if(contestant.contestantName.trim() != "" && contestant.answer.trim() != "")
        {
          if(contestant.answer != 1 && contestant.answer != 2 &&
             contestant.answer != 3 && contestant.answer != 4)
             {
               errorState = 1;
             }
          else
          {
            this.hide();
            contestantCount += 1;
            if(contestantCount < 4)
            {
              this.submitMessage.html("Thank You " + contestant.contestantName + ". We have recorded your Answer. Wait for your Results.");
              this.submitMessage.position(75, 140);
            }
            contestant.contestantCount = contestantCount;
            contestant.updateContestantDetails();
            contestant.updateContestantCount(contestantCount);
          }   
        }
        else 
        {
          errorState = 2;
        }
        if(errorState === 1)
      {
        this.errorText.html("Please enter valid Option Number (1 or 2 or 3 or 4).");
        this.errorText.position(260, 370);
        errorState = 0;
      }

      else if(errorState === 2)
      {
        this.errorText.html("Please enter valid Contestant Name and Option Number !!");
        this.errorText.position(240, 370);
        errorState = 0;
      }
      }
      );
      
    }
};