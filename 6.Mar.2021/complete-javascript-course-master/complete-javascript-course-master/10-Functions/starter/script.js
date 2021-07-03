'use strict';

const poll = {
      question: "What is your favourite programming language?",
      options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
      // This generates [0, 0, 0, 0]. More in the next section!
      answers: new Array(4).fill(0),
      registerNewAnswer(){
        const ans = Number(
          prompt(`${this.question}\n ${this.options.join('\n') }\nwhat is your answer? `));
        console.log(ans);
     
        this.answers[ans]++;
        console.log(this.answers);
        this.displayResults();
        this.displayResults('string');
      },
      displayResults(type = 'array'){
          if(type==='array'){
              console.log(this.answers);
          }else if(type === 'string'){
              console.log(`poll result are ${this.answers.join(' ')}`);
          }

          },
      
    };

document
.querySelector('.poll')
.addEventListener('click',poll.registerNewAnswer.
bind(poll));

poll.displayResults.call({answers:[1, 5, 3, 9, 6, 1]},'string')