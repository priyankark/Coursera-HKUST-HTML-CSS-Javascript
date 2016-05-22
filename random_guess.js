/**
 * Created by Priyankar Kumar on 5/22/2016.
 */

alert('Welcome to the Random number guessing game');
guess_me=Math.floor(Math.random()*101);
var guess=parseInt(prompt('Enter a number (1-100):'));
var sum=0;
while(guess_me!=guess)
{
if (isNaN(guess) )
{
    alert('Please enter numbers only!!')
}
else if ((guess<0)||(guess>100))
    alert('Range error');
else if(guess>guess_me)
    {
        alert('Too high!');
        sum+=1;

    }
    else if (guess<guess_me)
    {
        alert('Too low!');
        sum+=1;


    }

    else {

        break;
    }
        guess=parseInt(prompt('Enter a number (1-100):'));
}
alert('You Win Sir! You guessed it in ' + String(sum) + ' tries!');