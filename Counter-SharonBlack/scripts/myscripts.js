"use strict";

//Create a counter.  If decrease button is clicked the counter decreases by one.  If increase button is clicked the counter increases by one.  If reset button is clicked the counter resets to zero.  Must include an event to change the color of the button if they are hovered over.

//Perform calculations that display in counter when buttons are clicked

document.getElementById("button1").addEventListener("click", decreaseCount);

function decreaseCount() {
    var minusCount= Number(document.getElementById("count").value);
    document.getElementById("count").innerHTML= minusCount-1;
};

document.getElementById("button2").addEventListener("click", resetCount);

function resetCount() {
    var zeroCount= Number(document.getElementById("count").value);
    document.getElementById("count").innerHTML= 0;
    };

document.getElementById("button3").addEventListener("click", increaseCount);

    function increaseCount() {
        var plusCount= Number(document.getElementById("count").value);
        document.getElementById("count").innerHTML= plusCount +1;
        };

        //Changes color of button when hovered over

        document.getElementById("button1").addEventListener("mouseover", changeColor1);

        function changeColor1() {
            document.getElementById("button1").style.backgroundColor= "green";
        };

        document.getElementById("button2").addEventListener("mouseover", changeColor2);

        function changeColor2() {
            document.getElementById("button2").style.backgroundColor= "green";
        };

        document.getElementById("button3").addEventListener("mouseover", changeColor3);

        function changeColor3() {
            document.getElementById("button3").style.backgroundColor= "green";   
        };

        //Changes buttons back to no color when hover if removed

        document.getElementById("button1").addEventListener("mouseout", removeColor1);

        function removeColor1() {
            document.getElementById("button1").style.backgroundColor= "";
        };

        document.getElementById("button2").addEventListener("mouseout", removeColor2);

        function removeColor2() {
            document.getElementById("button2").style.backgroundColor= "";
        };

        document.getElementById("button3").addEventListener("mouseout", removeColor3);

        function removeColor3() {
            document.getElementById("button3").style.backgroundColor= "";
        };


        

        

        