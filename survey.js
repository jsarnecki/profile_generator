const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name?', (name) => {
  console.log(`Thank you for your answer`);

    rl.question("What's an activity you like doing?", (activity) => {
      console.log(`Thank you for your answer`);

      rl.question("What do you listen to while doing that?", (music) => {
        console.log(`Thank you for your answer`);

        rl.question("What is your favorite kind of food?", (food) => {
          console.log(`Thank you for your answer`);

          rl.question(`What ${food} dish do you recommend?`, (dish) => {
            console.log(`Thank you for your answer`);

            rl.question("What TV show have you recently enjoyed?", (tv) => {
              console.log(`Thank you for all of your answers`);
              
              setTimeout(() => {
                console.log("Generating your short profile paragraph...");
              }, 1500);

              setTimeout(() => {
                console.log(`${name} enjoys listening to ${music} while ${activity}, loves eating ${food} and would recommend trying out ${dish}.  ${name} has also recently enjoyed watching the tv show ${tv}`);
              }, 4000);

              rl.close();
            });
          });
        });
      });
    });
  });
