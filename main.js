var forgy = document.getElementById('frog');

var time = new Date();
var day = time.getDay();
if (day == 3) {
    forgy.src = "./reso/it is wendesday my dude.gif";
    forgy.alt = "It is wendesday my dudes. AHHHHHHHHHH";
};

//creates a function that checks the day, and if the day is wendesday than changes the gif plays on the main page and also the alt