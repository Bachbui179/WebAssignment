
const box = document.getElementById("message-box");
var content1 = document.getElementById("output1");
var content2 = document.getElementById("output2");
var content3 = document.getElementById("output3");
var content4 = document.getElementById("output4");


var output1 = content1.innerHTML;
var output2 = content2.innerHTML;
var output3 = content3.innerHTML;
var output4 = content4.innerHTML;

const data = {};

let counter = 0;
var playCounter = 0;
var playerCounter = [];



var guessNumber = []
var ranNumber = Math.floor(Math.random() * 101);

console.log(ranNumber)

function getInputNum()
{     
      checkValidInput()
      var guess = document.getElementById("inputNum").value;
      counter += 1;
      if (guess == ranNumber)
      {
            document.getElementById("button1").style.display = "none";
            content1.innerHTML = 'Congrats, you made it!!';
            document.getElementById("message-box").style.backgroundColor = "green";
            content2.innerHTML = 'You guessed ' + counter + ' times. Press restart to play more';
            content3.innerHTML =  guessNumber.toString();
            guessNumber.push(guess);
            playCounter += 1;
            playerCounter.push(playCounter);
            saveData();
            counter = 0;
            highScore();
            clrScr();
      }

      else if (guess >= (ranNumber - 10) && guess <= (ranNumber + 10))
            
      {
            document.getElementById("message-box").style.backgroundColor = "red";
            if(guess < ranNumber)
            {
                  content1.innerHTML = 'Just a little bit higher to get a correct number :3';
                  content2.innerHTML = 'You guessed ' + counter + ' times';
                  guessNumber.push(guess);
                  content3.innerHTML =  guessNumber.toString();
                  clrScr();

            } 
            else if(guess > ranNumber)
            {
                  content1.innerHTML = 'Just a little bit lower to get a correct number :3';
                  content2.innerHTML = 'You guessed ' + counter + ' times';
                  guessNumber.push(guess);
                  content3.innerHTML =  guessNumber.toString();
                  clrScr();

            }
      }
      else if ((guess < ranNumber - 30) || (guess >  ranNumber + 30))
      {
            document.getElementById("message-box").style.backgroundColor = "blue";
            content1.innerHTML = "That's the wrong number";
            content2.innerHTML = 'You guessed ' + counter + ' times';
            guessNumber.push(guess);
            content3.innerHTML =  guessNumber.toString();
            clrScr();

      }
      else 
      {
            document.getElementById("message-box").style.backgroundColor = "white";
            content1.innerHTML = "You are closer to the number!! Keep trying";
            content2.innerHTML = 'You guessed ' + counter + ' times';
            guessNumber.push(guess);
            content3.innerHTML =  guessNumber.toString();
            clrScr();
      }
}

function checkValidInput()
{
      var valid = document.getElementById("inputNum");
      if (valid.value < 1 || valid.value > 100 || valid.value.length == '')
      {
            alert("Number can't be empty and in a range between 1 and 100");
            counter -=1;
      }
}

// function updateGuessNum()
// {
      
// }

function saveData()
{
      data["Player "+ playCounter] = counter;
      console.log(data);
}

function highScore()
{
      function getObjKey(obj, value) 
      {
            return Object.keys(obj).find(key => obj[key] === value);
            // The find() method returns the first element in the provided 
            // array that satisfies the provided testing function. 
            // If no values satisfy the testing function, undefined is returned.
      }
      var scores = Object.values(data);
      var min = Math.min(...scores);
      var updateHighScore = getObjKey(data, min)
      content4.innerHTML = 'High Score: ' + updateHighScore;
      
}

function restart()
{
      guessNumber = [];
      document.getElementById("button1").style.display = "inline-block";
      content1.innerHTML = 'Message here';
      document.getElementById("message-box").style.backgroundColor = "white";
      content2.innerHTML = "Let's guess a number";
      content3.innerHTML = "Number you guessed: ";
      ranNumber = Math.floor(Math.random() * 101);
      console.log(ranNumber);
}

function clrScr()
{
      var checkInput = document.getElementById("inputNum");
      if (checkInput.value != '')
      {
            checkInput.value = '';
      }
}