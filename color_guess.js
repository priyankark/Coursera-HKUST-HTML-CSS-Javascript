/**
 * Created by Priyankar Kumar on 5/23/2016.
 */
function set_board()
{
    var ar=["aqua","black","cyan","red","magenta","lightgreen"];
    ar.sort();
    alert('Lets play a game. You have the following choices: '+ar.join()+'Take a guess.');
    var guess=ar[Math.floor(Math.random()*(ar.length))];

    var my_guess=prompt('Your guess: (Colour mentioned to check program)'+guess);
    var sum=0;
    while (my_guess!=guess)
    {
        sum+=1;
        var flag=false;

        for(var i=0;i<ar.length;i++)
        {
            if(ar[i]==my_guess) {

                flag=true;
                break;
            }

        }

        if(flag==false)
        alert('Ooops. That item is not in the list!');
        else
        if(my_guess>guess)
        {
            alert('Think lower!');
        }
        else
        alert('Think higher!');

        my_guess=prompt('Your guess Options:'+ar.join());

    }
    if(my_guess==guess) {
        myBody = document.getElementsByTagName("body")[0];
        myBody.style.background = guess;
        alert("You win! You took " + String(sum) + ' tries');



    }


}
