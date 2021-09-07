function hintPthreeKeyPress(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("hintPthreeButton").click();
        return false;
    }
    return true;
};

function hidePthreeHints() {
  document.getElementById("hint03_container").style.display = "none";
  document.getElementById("hint03_1_1_container").style.display = "none";
  document.getElementById("hint03_1_2_container").style.display = "none";
  document.getElementById("hint03_2_1_container").style.display = "none";
  document.getElementById("hint09_container").style.display = "none";
  document.getElementById("hint09_1_1_container").style.display = "none";
  document.getElementById("hint09_1_2_container").style.display = "none";
  document.getElementById("hint09_2_1_container").style.display = "none";
  document.getElementById("hint11_container").style.display = "none";
  document.getElementById("hint11_1_1_container").style.display = "none";
  document.getElementById("hint11_1_2_container").style.display = "none";
  document.getElementById("hint11_1_3_container").style.display = "none";
  document.getElementById("hint11_2_1_container").style.display = "none";
  document.getElementById("hint11_2_2_container").style.display = "none";
  document.getElementById("hint11_3_1_container").style.display = "none";
  document.getElementById("hint11_3_2_container").style.display = "none";
  document.getElementById("hint12_container").style.display = "none";
  document.getElementById("hint12_1_1_container").style.display = "none";
  document.getElementById("hint17_container").style.display = "none";
  document.getElementById("hint17_1_1_container").style.display = "none";
  document.getElementById("hint17_1_2_container").style.display = "none";
  document.getElementById("hint17_1_3_container").style.display = "none";
  document.getElementById("hint17_2_1_container").style.display = "none";
  document.getElementById("hint19_container").style.display = "none";
  document.getElementById("hint19_1_1_container").style.display = "none";
  document.getElementById("hint24_container").style.display = "none";
  document.getElementById("hint24_1_1_container").style.display = "none";
  document.getElementById("hint24_1_2_container").style.display = "none";
  document.getElementById("hint32_container").style.display = "none";
  document.getElementById("hint32_1_1_container").style.display = "none";
  document.getElementById("hint36_container").style.display = "none";
  document.getElementById("hint36_1_1_container").style.display = "none";
  document.getElementById("hint36_1_2_container").style.display = "none";
  document.getElementById("hint39_container").style.display = "none";
  document.getElementById("hint39_1_1_container").style.display = "none";
  document.getElementById("hintSPO05_container").style.display = "none";
  document.getElementById("hintSPO05_1_1_container").style.display = "none";
  document.getElementById("hintSPO05_1_2_container").style.display = "none";
  document.getElementById("hintSPO05_1_3_container").style.display = "none";
  document.getElementById("hintSPO05_1_4_container").style.display = "none";
  document.getElementById("hintSPO06_container").style.display = "none";
  document.getElementById("hintSPO06_1_1_container").style.display = "none";
  document.getElementById("hintSPO06_1_2_container").style.display = "none";
  document.getElementById("hintSPO06_1_3_container").style.display = "none";
  document.getElementById("hintSPO06_1_4_container").style.display = "none";
}

function hintPthreeFunction() {
	var zhintlowercase = document.getElementById("hintPthreeText").value;
  var zhint = zhintlowercase.toUpperCase();
  var hintanswerthree;
  if (zhint == "03") {
  		hintanswerthree = "Do you have character/object card 06?";
      hidePthreeHints();
      document.getElementById("hint03_container").style.display = "block";
      document.getElementById("hintPthree03_1").style.display = "block";
      document.getElementById("hintPthree03_2").style.display = "block";
  } else if (zhint == "06") {
  		hintanswerthree = "Examine the box by entering the card number <b>06</b> into the Digital Game Book input field.";
      hidePthreeHints();
  } else if (zhint == "07") {
  		hintanswerthree = "To open a door, enter the keycard card's number <b>07</b>, followed by the number of the door you want to open in the Digital Game Book input field, separated by a comma.";
      hidePthreeHints();
  } else if (zhint == "09") {
  		hintanswerthree = "Do you have character/object card 14?";
      hidePthreeHints();
      document.getElementById("hint09_container").style.display = "block";
      document.getElementById("hintPthree09_1").style.display = "block";
      document.getElementById("hintPthree09_2").style.display = "block";
  } else if (zhint == "11") {
  		hintanswerthree = "Click on a button depending on your progress in the game.";
      hidePthreeHints();
      document.getElementById("hint11_container").style.display = "block";
      document.getElementById("hintPthree11_1").style.display = "block";
      document.getElementById("hintPthree11_2").style.display = "block";
      document.getElementById("hintPthree11_3").style.display = "block";
  } else if (zhint == "12") {
  		hintanswerthree = "What does Marina like to talk about?";
      hidePthreeHints();
      document.getElementById("hint12_container").style.display = "block";
  } else if (zhint == "14") {
  		hintanswerthree = "Examine the chair with the Digital Game Book.";
      hidePthreeHints();
  } else if (zhint == "16") {
  		hintanswerthree = "Do you have anything that could help unscrew the screws holding the vent cover?";
      hidePthreeHints();
      document.getElementById("hint16_container").style.display = "block";
  } else if (zhint == "17") {
  		hintanswerthree = "Have you opened LOC05?";
      hidePthreeHints();
      document.getElementById("hint17_container").style.display = "block";
      document.getElementById("hintPthree17_1").style.display = "block";
      document.getElementById("hintPthree17_2").style.display = "block";
  } else if (zhint == "19") {
  		hintanswerthree = "Is there something in the room you're struggling to get to?";
      hidePthreeHints();
      document.getElementById("hint19_container").style.display = "block";
  } else if (zhint == "24") {
  		hintanswerthree = "Have you tried opening doors in the hallway? Does it work?";
      hidePthreeHints();
      document.getElementById("hint24_container").style.display = "block";
  } else if (zhint == "28") {
  		hintanswerthree = "We can't give you a hint on how to make yourself comfortable in the box. Try to endure it for a little longer.";
      hidePthreeHints();
  } else if (zhint == "31") {
  		hintanswerthree = "Just don't make any noise, and you'll be fine.";
      hidePthreeHints();
  } else if (zhint == "32") {
  		hintanswerthree = "This could keep somebody occupied for a long time.";
      hidePthreeHints();
      document.getElementById("hint32_container").style.display = "block";
  } else if (zhint == "33") {
  		hintanswerthree = "If you want to hear Lena's thoughts about something, enter her card number <b>33</b> in the Digital Game Book input field, followed by the card number of the character or object you want to hear her opinion about, separated by a comma.";
      hidePthreeHints();
  } else if (zhint == "36") {
  		hintanswerthree = "Have you tried opening doors in the hallway? Does it work?";
      hidePthreeHints();
      document.getElementById("hint36_container").style.display = "block";
  } else if (zhint == "39") {
  		hintanswerthree = "How could you give yourself a little window to see out of the box?";
      hidePthreeHints();
      document.getElementById("hint39_container").style.display = "block";
  } else if (zhint == "SPO05") {
  		hintanswerthree = "Take a good look at the buttons on the remote controller and compare them to the symbols on the other side of the controller <b>(SPO06)</b>. Can you see a logic in the Laki letter?";
      hidePthreeHints();
      document.getElementById("hintSPO05_container").style.display = "block";
  } else if (zhint == "SPO06") {
  		hintanswerthree = "Take a good look at the symbols of the Laki alphabet on the remote controller and compare them to the buttons on the other side of the controller <b>(SPO05)</b>. Can you see a logic in the Laki letter?";
      hidePthreeHints();
      document.getElementById("hintSPO06_container").style.display = "block";
	} else {
  		hintanswerthree = "A card with this number doesn't exist. Try something else.";
      hidePthreeHints();
  }
  	document.getElementById("hintPthreeAnswer").innerHTML = hintanswerthree;
};

function hintPthree03_1show() {
  document.getElementById("hintPthree03_1Answer").innerHTML = "Is there anything for you to climb on and reach the vent with?";
  document.getElementById("hintPthree03_2").style.display = "none";
  document.getElementById("hint03_1_1_container").style.display = "block";
};

function hintPthree03_1_1show() {
  document.getElementById("hintPthree03_1_1Answer").innerHTML = "Use the new chair on the vent to reach it.";
  document.getElementById("hint03_1_2_container").style.display = "block";
};

function hintPthree03_2show() {
  document.getElementById("hintPthree03_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPthree03_1").style.display = "none";
  document.getElementById("hint03_2_1_container").style.display = "block";
};

function hintPthree09_1show() {
  document.getElementById("hintPthree09_1Answer").innerHTML = "Is there a way to mix the Rubik's cube so well that Marina will never be able to solve it? Look at what do you have to help you in this task.";
  document.getElementById("hintPthree09_2").style.display = "none";
  document.getElementById("hint09_1_1_container").style.display = "block";
};

function hintPthree09_1_1show() {
  document.getElementById("hintPthree09_1_1Answer").innerHTML = "Use the pocket knife on the Rubik's cube.";
  document.getElementById("hint09_1_2_container").style.display = "block";
};

function hintPthree09_2show() {
  document.getElementById("hintPthree09_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPthree09_1").style.display = "none";
  document.getElementById("hint09_2_1_container").style.display = "block";
};

function hintPthree11_1show() {
  document.getElementById("hintPthree11_1Answer").innerHTML = "Did you speak to Marina? She loves to speak about herself.";
  document.getElementById("hintPthree11_2").style.display = "none";
  document.getElementById("hintPthree11_3").style.display = "none";
  document.getElementById("hint11_1_1_container").style.display = "block";
};

function hintPthree11_1_1show() {
  document.getElementById("hintPthree11_1_1Answer").innerHTML = "Marina will give you her Rubik's cube to mix it if you ask her to speak about herself. Is there a way to mix the Rubik's cube so well that Marina will never be able to solve it?";
  document.getElementById("hint11_1_2_container").style.display = "block";
};

function hintPthree11_1_2show() {
  document.getElementById("hintPthree11_1_2Answer").innerHTML = "Use the pocket knife on the Rubik's cube.";
  document.getElementById("hint11_1_3_container").style.display = "block";
};

function hintPthree11_2show() {
  document.getElementById("hintPthree11_2Answer").innerHTML = "There is something in the vent trying to reach you. Can you open the vent somehow?";
  document.getElementById("hintPthree11_1").style.display = "none";
  document.getElementById("hintPthree11_3").style.display = "none";
  document.getElementById("hint11_2_1_container").style.display = "block";
};

function hintPthree11_2_1show() {
  document.getElementById("hintPthree11_2_1Answer").innerHTML = "Bring the chair to the vent so that you could reach it. Use the pocket knife to open the cover.";
  document.getElementById("hint11_2_2_container").style.display = "block";
};

function hintPthree11_3show() {
  document.getElementById("hintPthree11_3Answer").innerHTML = "How could you give yourself a little window to see out of the box?";
  document.getElementById("hintPthree11_1").style.display = "none";
  document.getElementById("hintPthree11_2").style.display = "none";
  document.getElementById("hint11_3_1_container").style.display = "block";
};

function hintPthree11_3_1show() {
  document.getElementById("hintPthree11_3_1Answer").innerHTML = "Use the pocket knife on the box to make holes.";
  document.getElementById("hint11_3_2_container").style.display = "block";
};

function hintPthree12_1show() {
  document.getElementById("hintPthree12_1Answer").innerHTML = "Ask Marina to talk about herself. She will give you her Rubik's cube to mix it.";
  document.getElementById("hint12_1_1_container").style.display = "block";
};

function hintPthree16_1show() {
  document.getElementById("hintPthree16_1Answer").innerHTML = "Use the pocket knife on the vent.";
  document.getElementById("hint16_1_1_container").style.display = "block";
};

function hintPthree17_1show() {
  document.getElementById("hintPthree17_1Answer").innerHTML = "Have you tried opening doors in the hallway? Does it work?";
  document.getElementById("hintPthree17_2").style.display = "none";
  document.getElementById("hint17_1_1_container").style.display = "block";
};

function hintPthree17_1_1show() {
  document.getElementById("hintPthree17_1_1Answer").innerHTML = "It's risky to go to the common area or the security control room, and you can't open D11. You have to find another way to get out of here. Is there anything around you that could be useful to do it?";
  document.getElementById("hint17_1_2_container").style.display = "block";
};

function hintPthree17_1_2show() {
  document.getElementById("hintPthree17_1_2Answer").innerHTML = "Put the box on the platform trolley and go inside it.";
  document.getElementById("hint17_1_3_container").style.display = "block";
};

function hintPthree17_2show() {
  document.getElementById("hintPthree17_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPthree17_1").style.display = "none";
  document.getElementById("hint17_2_1_container").style.display = "block";
};

function hintPthree19_1show() {
  document.getElementById("hintPthree19_1Answer").innerHTML = "Use the chair of the air vent to reach it.";
  document.getElementById("hint19_1_1_container").style.display = "block";
};

function hintPthree24_1show() {
  document.getElementById("hintPthree24_1Answer").innerHTML = "It's risky to go to the common area or the security control room, and you can't open D11. You have to find another way to get out of here. Is there anything around you that could be useful to do it?";
  document.getElementById("hint24_1_1_container").style.display = "block";
};

function hintPthree24_1_1show() {
  document.getElementById("hintPthree24_1_1Answer").innerHTML = "Put the box on the platform trolley and go inside it.";
  document.getElementById("hint24_1_2_container").style.display = "block";
};

function hintPthree32_1show() {
  document.getElementById("hintPthree32_1Answer").innerHTML = "Give the Rubik's cube to Marina.";
  document.getElementById("hint32_1_1_container").style.display = "block";
};

function hintPthree36_1show() {
  document.getElementById("hintPthree36_1Answer").innerHTML = "It's risky to go to the common area or the security control room, and you can't open D11. You have to find another way to get out of here. Is there anything around you that could be useful to do it?";
  document.getElementById("hint36_1_1_container").style.display = "block";
};

function hintPthree36_1_1show() {
  document.getElementById("hintPthree36_1_1Answer").innerHTML = "Go inside the box on the platform trolley.";
  document.getElementById("hint36_1_2_container").style.display = "block";
};

function hintPthree39_1show() {
  document.getElementById("hintPthree39_1Answer").innerHTML = "Use the pocket knife on the box to make holes.";
  document.getElementById("hint39_1_1_container").style.display = "block";
};

function hintPthreeSPO05_1show() {
  document.getElementById("hintPthreeSPO05_1Answer").innerHTML = "How many symbols of the Laki alphabet each button has? Does it correspond to something?";
  document.getElementById("hintSPO05_1_1_container").style.display = "block";
};

function hintPthreeSPO05_1_1show() {
  document.getElementById("hintPthreeSPO05_1_1Answer").innerHTML = "Every button has as many symbols as the corresponding word has letters. Now it's only necessary to understand the order of the symbols to connect them with the right letters. The words that have double letters can be helpful in this task.";
  document.getElementById("hintSPO05_1_2_container").style.display = "block";
};

function hintPthreeSPO05_1_2show() {
  document.getElementById("hintPthreeSPO05_1_2Answer").innerHTML = "The Lakis write the words starting with the inner symbol and continue outwards. Try to find the letters that spell <b>OPEN</b> now.";
  document.getElementById("hintSPO05_1_3_container").style.display = "block";
};

function hintPthreeSPO05_1_3show() {
  document.getElementById("hintPthreeSPO05_1_3Answer").innerHTML = "The correct letters to spell <b>OPEN</b> are 14, 26, 16 and 20.";
  document.getElementById("hintSPO05_1_4_container").style.display = "block";
};

function hintPthreeSPO06_1show() {
  document.getElementById("hintPthreeSPO06_1Answer").innerHTML = "How many symbols of the Laki alphabet each button has? Does it correspond to something?";
  document.getElementById("hintSPO06_1_1_container").style.display = "block";
};

function hintPthreeSPO06_1_1show() {
  document.getElementById("hintPthreeSPO06_1_1Answer").innerHTML = "Every button has as many symbols as the corresponding word has letters. Now it's only necessary to understand the order of the symbols to connect them with the right letters. The words that have double letters can be helpful in this task.";
  document.getElementById("hintSPO06_1_2_container").style.display = "block";
};

function hintPthreeSPO06_1_2show() {
  document.getElementById("hintPthreeSPO06_1_2Answer").innerHTML = "The Lakis write the words starting with the inner symbol and continue outwards. Try to find the letters that spell <b>OPEN</b> now.";
  document.getElementById("hintSPO06_1_3_container").style.display = "block";
};

function hintPthreeSPO06_1_3show() {
  document.getElementById("hintPthreeSPO06_1_3Answer").innerHTML = "The correct letters to spell <b>OPEN</b> are 14, 26, 16 and 20.";
  document.getElementById("hintSPO06_1_4_container").style.display = "block";
};
