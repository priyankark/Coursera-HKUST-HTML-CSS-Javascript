/**
 * Created by Priyankar Kumar on 5/24/2016.
 */

var numberOfFaces=5;
var theLeftSide= document.getElementById("leftSide");
var theRightSide=document.getElementById("rightSide");
var theBody =
    document.getElementsByTagName("body")[0];

function generateFaces()
{
    var i=0;
    while(i<numberOfFaces)
    {
        var im=document.createElement("img");
        im.src="smile.png";
        var t=Math.random()*600;
        t=Math.floor(t);
        var l=Math.floor(Math.random()*400);
        im.style.top=t+"px";
        im.style.left=l+"px";
        theLeftSide.appendChild(im);
        i++;


    }
    var leftSideImages=theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);
    theLeftSide.lastChild.onclick= function nextlevel(event)
    {
        event.stopPropagation();/* The line event.stopPropagation(); is necessary in order to ensure that the event does not also get
     applied to other elements in the web page, such as other faces.
     That would trigger the function multiple times, which is not what we want.*/
        while(theLeftSide.firstChild)
        {
            theLeftSide.removeChild(theLeftSide.firstChild);
        }
        while(theRightSide.firstChild)
        {
            theRightSide.removeChild(theRightSide.firstChild);
        }

        numberOfFaces += 5;


        generateFaces();
    };
    theBody.onclick = function gameOver() {

        alert("Game Over!");


        theBody.onclick = null; //means that from now onwards nothing will happen when the user clicks anywhere in the web page

        theLeftSide.lastChild.onclick = null; //means that from now onwards nothing will happen when the user clicks on the extra face.

    };

}
