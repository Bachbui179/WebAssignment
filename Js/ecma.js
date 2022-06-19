const ranNumber = Math.floor(Math.random() * 101);
const box = document.getElementById("message-box");
var content1 = document.getElementById("output1");
var content2 = document.getElementById("output2");
var content3 = document.getElementById("output3");


var output1 = content1.innerHTML;
var output2 = content2.innerHTML;
var output3 = content3.innerHTML;

const data = {}

let counter = 0;
var guessNumber = []
console.log(ranNumber)
function getInputNum()
{
      checkValidInput()
      var guess = document.getElementById("inputNum").value;
      counter += 1;
      
      if (guess == ranNumber)
      {
            endGame();
            clrScr();
      }

      else if (guess >= (ranNumber-10) && guess <= (ranNumber + 10))
            
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
      if ((valid.value < 1 && valid.value > 100) || valid.value.length == ''){
            alert("Number can't be empty and in a range between 1 and 100");
            counter -=1;
            return false;
      }
      else
      {
            return true;
      }

}
      
function endGame()
{
      content1.innerHTML = 'Congrats, you made it!!';
      document.getElementById("message-box").style.backgroundColor = "green";
      content2.innerHTML = 'You guessed ' + counter + ' times. Press restart to play more';
      content3.innerHTML =  guessNumber.toString();
      guessNumber = [];
      counter = 0;
}

function restart()
{
      document.getElementById("message-box").style.backgroundColor = "white";
      guessNumber = []
}

function clrScr()
{
      var checkInput = document.getElementById("inputNum");
      if (checkInput.value != '')
      {
            checkInput.value = '';
      }
}