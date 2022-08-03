const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  { //1
    question: `What is your discord handle?`,
    getReply: (answer) => {
      return `Sometimes known as ${answer}. `;
    }
  },
  { //2
    question: `What's an activity you like doing, not love, like doing?`,
    getReply: (answer) => {
      return `Can sometimes be seen ${answer} over yaunder. `;
    }
  },
  { //3
    question: `What is the music that comes to mind doing that activity?`,
    getReply: (answer) => {
      return `Over the air the sound of ${answer} echos. `;
    }
  },
  { //4
    question: `Which meal time is your favorite?`,
    getReply: (answer) => {
      return `Our hero however, wolfs down their ${answer}, with a delight previously unseen. `;
    }
  },
  { //6
    question: `For that meal, would would be the dish of choice?`,
    getReply: (answer) => {
      return `"${answer} is what I ordered!", but the staff didn't care. `;
    }
  },
  { //7
    question: `What sport is your absolute favorite?`,
    getReply: (answer) => {
      return `"Despite our hero's ill manners, like a pro ${answer} players, the staff provided excellent service.`;
    }
  },
  { //8
    question: `What is your super power?`,
    getReply: (answer) => {
      return `Now, while you're distracted, I used my super power of ${answer}... `;
    }
  },
  { //9
    question: `What is the starting address of the itn list for a Cummins ISV5.0?`,
    getReply: (answer) => {
      return `To get the super secret password: ${answer}... `;
    }
  },
  { //10
    question: `vscode, notepad++ or vim?`,
    getReply: (answer) => {
      return `and hack the main frame with my precious ${answer}.`;
    }
  },
];

rl.question(questions[0].question, (answer0) => {
  rl.question(questions[1].question, (answer1) => {
    rl.question(questions[2].question, (answer2) => {
      rl.question(questions[3].question, (answer3) => {
        rl.question(questions[4].question, (answer4) => {
          rl.question(questions[5].question, (answer5) => {
            rl.question(questions[6].question, (answer6) => {
              rl.question(questions[7].question, (answer7) => {
                rl.question(questions[8].question, (answer8) => {
                  let result = "";
                  const answers = [
                    answer0,
                    answer1,
                    answer2,
                    answer3,
                    answer4,
                    answer5,
                    answer6,
                    answer7,
                    answer8,
                  ];
                  // iterate through the answers
                  for (let a = 0; a < answers.length; a++) {
                    result += questions[a].getReply(answers[a]);
                  }
                  // log the silly story
                  console.log(result);

                  rl.close();
                });
              });
            });
          });
        });
      });
    });
  });
});