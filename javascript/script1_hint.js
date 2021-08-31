function hintPoneKeyPress(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("hintPoneButton").click();
        return false;
    }
    return true;
};

function hidePoneHints() {
  document.getElementById("hint02_container").style.display = "none";
  document.getElementById("hint02_1_1_container").style.display = "none";
  document.getElementById("hint03_container").style.display = "none";
  document.getElementById("hint03_1_1_container").style.display = "none";
  document.getElementById("hint03_1_2_container").style.display = "none";
  document.getElementById("hint03_1_3_container").style.display = "none";
  document.getElementById("hint03_2_1_container").style.display = "none";
  document.getElementById("hint04_container").style.display = "none";
  document.getElementById("hint04_1_1_container").style.display = "none";
  document.getElementById("hint05_container").style.display = "none";
  document.getElementById("hint05_1_1_container").style.display = "none";
  document.getElementById("hint05_1_2_container").style.display = "none";
  document.getElementById("hint05_1_3_container").style.display = "none";
  document.getElementById("hint05_2_1_container").style.display = "none";
  document.getElementById("hint06_container").style.display = "none";
  document.getElementById("hint06_1_1_container").style.display = "none";
  document.getElementById("hint06_1_2_container").style.display = "none";
  document.getElementById("hint06_1_3_container").style.display = "none";
  document.getElementById("hint06_1_4_container").style.display = "none";
  document.getElementById("hint07_container").style.display = "none";
  document.getElementById("hint07_1_1_container").style.display = "none";
  document.getElementById("hint07_1_2_container").style.display = "none";
  document.getElementById("hint07_1_3_container").style.display = "none";
  document.getElementById("hint09_container").style.display = "none";
  document.getElementById("hint09_1_1_container").style.display = "none";
  document.getElementById("hint10_container").style.display = "none";
  document.getElementById("hint10_1_1_container").style.display = "none";
  document.getElementById("hint11_container").style.display = "none";
  document.getElementById("hint11_1_1_container").style.display = "none";
  document.getElementById("hint11_1_2_container").style.display = "none";
  document.getElementById("hint11_1_3_container").style.display = "none";
  document.getElementById("hint11_1_4_container").style.display = "none";
  document.getElementById("hint11_1_5_container").style.display = "none";
  document.getElementById("hint11_1_6_container").style.display = "none";
  document.getElementById("hint11_1_7_container").style.display = "none";
  document.getElementById("hint12_container").style.display = "none";
  document.getElementById("hint12_1_1_container").style.display = "none";
  document.getElementById("hint13_container").style.display = "none";
  document.getElementById("hint13_1_1_container").style.display = "none";
  document.getElementById("hint14_container").style.display = "none";
  document.getElementById("hint14_1_1_container").style.display = "none";
  document.getElementById("hint15_container").style.display = "none";
  document.getElementById("hint15_1_1_container").style.display = "none";
  document.getElementById("hint16_container").style.display = "none";
  document.getElementById("hint16_1_1_container").style.display = "none";
  document.getElementById("hint16_1_2_container").style.display = "none";
  document.getElementById("hint16_1_3_container").style.display = "none";
  document.getElementById("hint16_1_4_container").style.display = "none";
  document.getElementById("hint16_1_5_container").style.display = "none";
  document.getElementById("hint16_1_6_container").style.display = "none";
  document.getElementById("hint16_2_1_container").style.display = "none";
  document.getElementById("hint17_container").style.display = "none";
  document.getElementById("hint17_1_1_container").style.display = "none";
  document.getElementById("hint17_1_2_container").style.display = "none";
  document.getElementById("hint17_1_3_container").style.display = "none";
  document.getElementById("hint17_1_4_container").style.display = "none";
  document.getElementById("hint17_2_1_container").style.display = "none";
  document.getElementById("hint18_container").style.display = "none";
  document.getElementById("hint18_1_1_container").style.display = "none";
  document.getElementById("hint19_container").style.display = "none";
  document.getElementById("hint19_1_1_container").style.display = "none";
  document.getElementById("hint20_container").style.display = "none";
  document.getElementById("hint20_1_1_container").style.display = "none";
  document.getElementById("hint20_1_2_container").style.display = "none";
  document.getElementById("hint20_1_3_container").style.display = "none";
  document.getElementById("hint20_1_4_container").style.display = "none";
  document.getElementById("hint20_1_5_container").style.display = "none";
  document.getElementById("hint20_1_6_container").style.display = "none";
  document.getElementById("hint20_1_7_container").style.display = "none";
  document.getElementById("hint20_1_8_container").style.display = "none";
  document.getElementById("hint20_2_1_container").style.display = "none";
  document.getElementById("hint21_container").style.display = "none";
  document.getElementById("hint21_1_1_container").style.display = "none";
  document.getElementById("hint21_2_1_container").style.display = "none";
  document.getElementById("hint21_2_2_container").style.display = "none";
  document.getElementById("hint21_3_1_container").style.display = "none";
  document.getElementById("hint21_3_2_container").style.display = "none";
  document.getElementById("hint21_4_1_container").style.display = "none";
  document.getElementById("hint21_4_2_container").style.display = "none";
  document.getElementById("hint21_4_3_container").style.display = "none";
  document.getElementById("hint22_container").style.display = "none";
  document.getElementById("hint22_1_1_container").style.display = "none";
  document.getElementById("hint22_2_1_container").style.display = "none";
  document.getElementById("hint22_2_2_container").style.display = "none";
  document.getElementById("hint22_2_3_container").style.display = "none";
  document.getElementById("hint23_container").style.display = "none";
  document.getElementById("hint23_1_1_container").style.display = "none";
  document.getElementById("hint23_2_1_container").style.display = "none";
  document.getElementById("hint23_2_2_container").style.display = "none";
  document.getElementById("hint23_3_1_container").style.display = "none";
  document.getElementById("hint23_3_2_container").style.display = "none";
  document.getElementById("hint24_container").style.display = "none";
  document.getElementById("hint24_1_1_container").style.display = "none";
  document.getElementById("hint24_1_2_container").style.display = "none";
  document.getElementById("hint24_1_3_container").style.display = "none";
  document.getElementById("hint24_2_1_container").style.display = "none";
  document.getElementById("hint25_container").style.display = "none";
  document.getElementById("hint25_1_1_container").style.display = "none";
  document.getElementById("hint25_1_2_container").style.display = "none";
  document.getElementById("hint25_1_3_container").style.display = "none";
  document.getElementById("hint25_2_1_container").style.display = "none";
  document.getElementById("hint25_3_1_container").style.display = "none";
  document.getElementById("hint25_3_2_container").style.display = "none";
  document.getElementById("hint25_3_3_container").style.display = "none";
  document.getElementById("hint26_container").style.display = "none";
  document.getElementById("hint26_1_1_container").style.display = "none";
  document.getElementById("hint27_container").style.display = "none";
  document.getElementById("hint27_1_1_container").style.display = "none";
  document.getElementById("hint27_1_2_container").style.display = "none";
  document.getElementById("hint27_1_3_container").style.display = "none";
  document.getElementById("hint27_2_1_container").style.display = "none";
  document.getElementById("hint28_container").style.display = "none";
  document.getElementById("hint28_1_1_container").style.display = "none";
  document.getElementById("hint28_1_2_container").style.display = "none";
  document.getElementById("hint29_container").style.display = "none";
  document.getElementById("hint29_1_1_container").style.display = "none";
  document.getElementById("hint29_1_2_container").style.display = "none";
  document.getElementById("hint29_1_3_container").style.display = "none";
  document.getElementById("hint29_2_1_container").style.display = "none";
  document.getElementById("hint30_container").style.display = "none";
  document.getElementById("hint30_1_1_container").style.display = "none";
  document.getElementById("hint30_1_2_container").style.display = "none";
  document.getElementById("hint30_1_3_container").style.display = "none";
  document.getElementById("hint31_container").style.display = "none";
  document.getElementById("hint31_1_1_container").style.display = "none";
  document.getElementById("hint31_1_2_container").style.display = "none";
  document.getElementById("hint32_container").style.display = "none";
  document.getElementById("hint32_1_1_container").style.display = "none";
  document.getElementById("hint33_container").style.display = "none";
  document.getElementById("hint33_1_1_container").style.display = "none";
  document.getElementById("hint34_container").style.display = "none";
  document.getElementById("hint34_1_1_container").style.display = "none";
  document.getElementById("hint35_container").style.display = "none";
  document.getElementById("hint35_1_1_container").style.display = "none";
  document.getElementById("hint35_1_2_container").style.display = "none";
  document.getElementById("hint35_1_3_container").style.display = "none";
  document.getElementById("hint35_2_1_container").style.display = "none";
  document.getElementById("hint36_container").style.display = "none";
  document.getElementById("hint36_1_1_container").style.display = "none";
  document.getElementById("hint37_container").style.display = "none";
  document.getElementById("hint37_1_1_container").style.display = "none";
  document.getElementById("hint37_1_2_container").style.display = "none";
  document.getElementById("hint37_1_3_container").style.display = "none";
  document.getElementById("hint37_2_1_container").style.display = "none";
  document.getElementById("hint38_container").style.display = "none";
  document.getElementById("hint38_1_1_container").style.display = "none";
  document.getElementById("hint39_container").style.display = "none";
  document.getElementById("hint39_1_1_container").style.display = "none";
  document.getElementById("hint39_1_2_container").style.display = "none";
  document.getElementById("hint39_2_1_container").style.display = "none";
  document.getElementById("hint39_2_2_container").style.display = "none";
  document.getElementById("hint41_container").style.display = "none";
  document.getElementById("hint41_1_1_container").style.display = "none";
  document.getElementById("hint42_container").style.display = "none";
  document.getElementById("hint42_1_1_container").style.display = "none";
  document.getElementById("hint42_1_2_container").style.display = "none";
  document.getElementById("hint42_2_1_container").style.display = "none";
  document.getElementById("hint42_2_2_container").style.display = "none";
  document.getElementById("hint43_container").style.display = "none";
  document.getElementById("hint43_1_1_container").style.display = "none";
  document.getElementById("hint43_1_2_container").style.display = "none";
  document.getElementById("hint43_1_3_container").style.display = "none";
  document.getElementById("hint43_1_4_container").style.display = "none";
  document.getElementById("hint43_1_5_container").style.display = "none";
  document.getElementById("hint43_1_6_container").style.display = "none";
  document.getElementById("hint43_1_7_container").style.display = "none";
}

function hintPoneFunction() {
	var xhintlowercase = document.getElementById("hintPoneText").value;
  var xhint = xhintlowercase.toUpperCase();
  var hintanswerone;
  if (xhint == "01") {
  		hintanswerone = "To hear Ziggy's thoughts on things, enter Ziggy's card number <b>01</b> followed by the card number of the object or character you want to hear her thoughts about in the Digital Game Book input field, separated by a comma.";
      hidePoneHints();
  } else if (xhint == "02") {
  		hintanswerone = "Is there anything special you could do with animals?";
      hidePoneHints();
      document.getElementById("hint02_container").style.display = "block";
  } else if (xhint == "03") {
  		hintanswerone = "Have you opened LOC06?";
      hidePoneHints();
      document.getElementById("hint03_container").style.display = "block";
      document.getElementById("hintPone03_1").style.display = "block";
      document.getElementById("hintPone03_2").style.display = "block";
  } else if (xhint == "04") {
  		hintanswerone = "Who could you give the projector to? Somebody would find it very useful.";
      hidePoneHints();
      document.getElementById("hint04_container").style.display = "block";
  } else if (xhint == "05") {
  		hintanswerone = "Have you opened LOC06?";
      hidePoneHints();
      document.getElementById("hint05_container").style.display = "block";
      document.getElementById("hintPone05_1").style.display = "block";
      document.getElementById("hintPone05_2").style.display = "block";
  } else if (xhint == "06") {
  		hintanswerone = "Your mother left you clues for opening this cryptex. Have you talked to everbody?";
      hidePoneHints();
      document.getElementById("hint06_container").style.display = "block";
  } else if (xhint == "07") {
  		hintanswerone = "Did you ask anybody about the lecture?";
      hidePoneHints();
      document.getElementById("hint07_container").style.display = "block";
  } else if (xhint == "08") {
  		hintanswerone = "To use this power, enter card number <b>08</b> followed by the card number of the plant or animal you want to use it on, separated by a comma.";
      hidePoneHints();
  } else if (xhint == "09") {
  		hintanswerone = "What brought you to the library? Also, what can you find on this location?";
      hidePoneHints();
      document.getElementById("hint09_container").style.display = "block";
  } else if (xhint == "10") {
  		hintanswerone = "Your mother left you a bunch of clues to find this person. That cannot be a coincidence.";
      hidePoneHints();
      document.getElementById("hint10_container").style.display = "block";
  } else if (xhint == "11") {
  		hintanswerone = "Why is Jocelyn's lecture important? Is there something connected to it that you could use?";
      hidePoneHints();
      document.getElementById("hint11_container").style.display = "block";
  } else if (xhint == "12") {
  		hintanswerone = "There is something you can put the new lens in.";
      hidePoneHints();
      document.getElementById("hint12_container").style.display = "block";
  } else if (xhint == "13") {
  		hintanswerone = "Is there something special that you can do with animals?";
      hidePoneHints();
      document.getElementById("hint13_container").style.display = "block";
  } else if (xhint == "14") {
  		hintanswerone = "Who brought you here? What could you ask Mary about?";
      hidePoneHints();
      document.getElementById("hint14_container").style.display = "block";
  } else if (xhint == "15") {
  		hintanswerone = "Dog cookies are usually for dogs.";
      hidePoneHints();
      document.getElementById("hint15_container").style.display = "block";
  } else if (xhint == "16") {
  		hintanswerone = "Have you opened LOC04?";
      hidePoneHints();
      document.getElementById("hint16_container").style.display = "block";
      document.getElementById("hintPone16_1").style.display = "block";
      document.getElementById("hintPone16_2").style.display = "block";
  } else if (xhint == "17") {
  		hintanswerone = "Do you have character/object card 16?";
      hidePoneHints();
      document.getElementById("hint17_container").style.display = "block";
      document.getElementById("hintPone17_1").style.display = "block";
      document.getElementById("hintPone17_2").style.display = "block";
  } else if (xhint == "18") {
  		hintanswerone = "What does professor Martin teach? What should you ask him about?";
      hidePoneHints();
      document.getElementById("hint18_container").style.display = "block";
  } else if (xhint == "19") {
  		hintanswerone = "Is there somewhere you could do a little shopping?";
      hidePoneHints();
      document.getElementById("hint19_container").style.display = "block";
  } else if (xhint == "20") {
  		hintanswerone = "Have you opened LOC05?";
      hidePoneHints();
      document.getElementById("hint20_container").style.display = "block";
      document.getElementById("hintPone20_1").style.display = "block";
      document.getElementById("hintPone20_2").style.display = "block";
  } else if (xhint == "21") {
  		hintanswerone = "Click on a button depending on your progress in the game.";
      hidePoneHints();
      document.getElementById("hint21_container").style.display = "block";
      document.getElementById("hintPone21_1").style.display = "block";
      document.getElementById("hintPone21_2").style.display = "block";
      document.getElementById("hintPone21_3").style.display = "block";
      document.getElementById("hintPone21_4").style.display = "block";
  } else if (xhint == "22") {
  		hintanswerone = "Do you have the computer password?";
      hidePoneHints();
      document.getElementById("hint22_container").style.display = "block";
      document.getElementById("hintPone22_1").style.display = "block";
      document.getElementById("hintPone22_2").style.display = "block";
  } else if (xhint == "23") {
  		hintanswerone = "Click on a button depending on which locations you've opened.";
      hidePoneHints();
      document.getElementById("hint23_container").style.display = "block";
      document.getElementById("hintPone23_1").style.display = "block";
      document.getElementById("hintPone23_2").style.display = "block";
      document.getElementById("hintPone23_3").style.display = "block";
  } else if (xhint == "24") {
  		hintanswerone = "Do you have the address of where the mural used to be?";
      hidePoneHints();
      document.getElementById("hint24_container").style.display = "block";
      document.getElementById("hintPone24_1").style.display = "block";
      document.getElementById("hintPone24_2").style.display = "block";
  } else if (xhint == "25") {
  		hintanswerone = "Click on a button depending on which locations you've opened.";
      hidePoneHints();
      document.getElementById("hint25_container").style.display = "block";
      document.getElementById("hintPone25_1").style.display = "block";
      document.getElementById("hintPone25_2").style.display = "block";
      document.getElementById("hintPone25_3").style.display = "block";
  } else if (xhint == "26") {
  		hintanswerone = "Is there somebody around that seems to enjoy their tea a lot?";
      hidePoneHints();
      document.getElementById("hint26_container").style.display = "block";
  } else if (xhint == "27") {
  		hintanswerone = "Have you opened LOC05?";
      hidePoneHints();
      document.getElementById("hint27_container").style.display = "block";
      document.getElementById("hintPone27_1").style.display = "block";
      document.getElementById("hintPone27_2").style.display = "block";
  } else if (xhint == "28") {
  		hintanswerone = "Examining the gem will suggest opening a new location.";
      hidePoneHints();
      document.getElementById("hint28_container").style.display = "block";
  } else if (xhint == "29") {
  		hintanswerone = "Have you opened LOC02?";
      hidePoneHints();
      document.getElementById("hint29_container").style.display = "block";
      document.getElementById("hintPone29_1").style.display = "block";
      document.getElementById("hintPone29_2").style.display = "block";
  } else if (xhint == "30") {
  		hintanswerone = "What brought you here? what should you ask Peter?";
      hidePoneHints();
      document.getElementById("hint30_container").style.display = "block";
  } else if (xhint == "31") {
  		hintanswerone = "Did you speak to Jamie? Is there something bothering him?";
      hidePoneHints();
      document.getElementById("hint31_container").style.display = "block";
  } else if (xhint == "32") {
  		hintanswerone = "Baristas usually notice stuff about their customers. Also, they take drink orders.";
      hidePoneHints();
      document.getElementById("hint32_container").style.display = "block";
  } else if (xhint == "33") {
  		hintanswerone = "Is there somebody that would like to take a look at the tests?";
      hidePoneHints();
      document.getElementById("hint33_container").style.display = "block";
  } else if (xhint == "34") {
  		hintanswerone = "Is there somebody around that seems to enjoy their tea a lot?";
      hidePoneHints();
      document.getElementById("hint34_container").style.display = "block";
  } else if (xhint == "35") {
  		hintanswerone = "Have you opened LOC03?";
      hidePoneHints();
      document.getElementById("hint35_container").style.display = "block";
      document.getElementById("hintPone35_1").style.display = "block";
      document.getElementById("hintPone35_2").style.display = "block";
  } else if (xhint == "36") {
  		hintanswerone = "Is there something you can do to influence the sprout's growth?";
      hidePoneHints();
      document.getElementById("hint36_container").style.display = "block";
  } else if (xhint == "37") {
  		hintanswerone = "Have you opened LOC03?";
      hidePoneHints();
      document.getElementById("hint37_container").style.display = "block";
      document.getElementById("hintPone37_1").style.display = "block";
      document.getElementById("hintPone37_2").style.display = "block";
  } else if (xhint == "38") {
  		hintanswerone = "Lena obviously talked to this parrot. It could know some important things.";
      hidePoneHints();
      document.getElementById("hint38_container").style.display = "block";
  } else if (xhint == "39") {
  		hintanswerone = "Have you opened LOC04?";
      hidePoneHints();
      document.getElementById("hint39_container").style.display = "block";
      document.getElementById("hintPone39_1").style.display = "block";
      document.getElementById("hintPone39_2").style.display = "block";
  } else if (xhint == "40") {
  		hintanswerone = "Examine card <b>40</b> in the Digital Game Book.";
      hidePoneHints();
  } else if (xhint == "41") {
  		hintanswerone = "What did you need the pumpkin for?";
      hidePoneHints();
      document.getElementById("hint41_container").style.display = "block";
  } else if (xhint == "42") {
  		hintanswerone = "Have you opened LOC04?";
      hidePoneHints();
      document.getElementById("hint42_container").style.display = "block";
      document.getElementById("hintPone42_1").style.display = "block";
      document.getElementById("hintPone42_2").style.display = "block";
  } else if (xhint == "43") {
  		hintanswerone = "Jocelyn keeps her lecture on her computer. Why is Jocelyn's lecture important? Is there something connected to it that you could use?";
      hidePoneHints();
      document.getElementById("hint43_container").style.display = "block";
	} else {
  		hintanswerone = "A card with this number doesn't exist. Try something else.";
      hidePoneHints();
  }
  	document.getElementById("hintPoneAnswer").innerHTML = hintanswerone;
};

function hintPone02_1show() {
  document.getElementById("hintPone02_1Answer").innerHTML = "Use your power to connect to plants and animals on the fly.";
  document.getElementById("hint02_1_1_container").style.display = "block";
};

function hintPone03_1show() {
  document.getElementById("hintPone03_1Answer").innerHTML = "There is something in this location that could help you with cheering up Laika.";
  document.getElementById("hintPone03_2").style.display = "none";
  document.getElementById("hint03_1_1_container").style.display = "block";
};

function hintPone03_1_1show() {
  document.getElementById("hintPone03_1_1Answer").innerHTML = "You should add freshly chopped pumpkin to the dog cookie mix. But how could you quickly get pumpkin out of a pumpkin sprout?";
  document.getElementById("hint03_1_2_container").style.display = "block";
};

function hintPone03_1_2show() {
  document.getElementById("hintPone03_1_2Answer").innerHTML = "Use your ability to connect to plants and animals on the pumpkin sprout. You can now make some dog cookies and feed Laika.";
  document.getElementById("hint03_1_3_container").style.display = "block";
};

function hintPone03_2show() {
  document.getElementById("hintPone03_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPone03_1").style.display = "none";
  document.getElementById("hint03_2_1_container").style.display = "block";
};

function hintPone04_1show() {
  document.getElementById("hintPone04_1Answer").innerHTML = "Give the projector to Loomey to help her with her mural.";
  document.getElementById("hint04_1_1_container").style.display = "block";
};

function hintPone05_1show() {
  document.getElementById("hintPone05_1Answer").innerHTML = "There is something in this location that could help you with the cookie mix.";
  document.getElementById("hintPone05_2").style.display = "none";
  document.getElementById("hint05_1_1_container").style.display = "block";
};

function hintPone05_1_1show() {
  document.getElementById("hintPone05_1_1Answer").innerHTML = "You should add freshly chopped pumpkin to the dog cookie mix. But how could you quickly get pumpkin out of a pumpkin sprout?";
  document.getElementById("hint05_1_2_container").style.display = "block";
};

function hintPone05_1_2show() {
  document.getElementById("hintPone05_1_2Answer").innerHTML = "Use your ability to connect to plants and animals on the pumpkin sprout. You can now make some dog cookies.";
  document.getElementById("hint05_1_3_container").style.display = "block";
};

function hintPone05_2show() {
  document.getElementById("hintPone05_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPone05_1").style.display = "none";
  document.getElementById("hint05_2_1_container").style.display = "block";
};

function hintPone06_1show() {
  document.getElementById("hintPone06_1Answer").innerHTML = "There is a reason why your mother led you to Korns' farm.";
  document.getElementById("hint06_1_1_container").style.display = "block";
};

function hintPone06_1_1show() {
  document.getElementById("hintPone06_1_1Answer").innerHTML = "Both Emma and the parrot can say something about this.";
  document.getElementById("hint06_1_2_container").style.display = "block";
};

function hintPone06_1_2show() {
  document.getElementById("hintPone06_1_2Answer").innerHTML = "Ask Emma about your mother. Use the power to connect to plants and animals on the parrot and ask it about Emma or the cryptex.";
  document.getElementById("hint06_1_3_container").style.display = "block";
};

function hintPone06_1_3show() {
  document.getElementById("hintPone06_1_3Answer").innerHTML = "Your mother left a bizzare message with Emma. If you ask the talkative parrot about this, it tells you to read only the first letters of the message. The message says: <br><i>The code is KEPLER. They are coming. Find Mary. Enter KEPLER in the cryptex to open it.</i>";
  document.getElementById("hint06_1_4_container").style.display = "block";
};

function hintPone07_1show() {
  document.getElementById("hintPone07_1Answer").innerHTML = "Sandy could know something about the lecture.";
  document.getElementById("hint07_1_1_container").style.display = "block";
};

function hintPone07_1_1show() {
  document.getElementById("hintPone07_1_1Answer").innerHTML = "Jocelyn Hill is in the tea shop next door. Use the map to find the tea shop.";
  document.getElementById("hint07_1_2_container").style.display = "block";
};

function hintPone07_1_2show() {
  document.getElementById("hintPone07_1_2Answer").innerHTML = "The address of the tea shop is B38.";
  document.getElementById("hint07_1_3_container").style.display = "block";
};

function hintPone09_1show() {
  document.getElementById("hintPone09_1Answer").innerHTML = "Sandy should know something about the paper with the library logo. She also knows about the lecture that will be held in the library.";
  document.getElementById("hint09_1_1_container").style.display = "block";
};

function hintPone10_1show() {
  document.getElementById("hintPone10_1Answer").innerHTML = "Ask Emma about your mother.";
  document.getElementById("hint10_1_1_container").style.display = "block";
};

function hintPone11_1show() {
  document.getElementById("hintPone11_1Answer").innerHTML = "If you want to take the projector, you have to sabotage Jocelyn's lecture.";
  document.getElementById("hint11_1_1_container").style.display = "block";
};

function hintPone11_1_1show() {
  document.getElementById("hintPone11_1_1Answer").innerHTML = "You could delete the lecture from her computer. To do that, you would have to find her password first, of course.";
  document.getElementById("hint11_1_2_container").style.display = "block";
};

function hintPone11_1_2show() {
  document.getElementById("hintPone11_1_2Answer").innerHTML = "Barista has a good look on what's going on in the the shop. Have you talked to him?";
  document.getElementById("hint11_1_3_container").style.display = "block";
};

function hintPone11_1_3show() {
  document.getElementById("hintPone11_1_3Answer").innerHTML = "If you ask the barista about Jocelyn, he will tell you that she's writing the password into her computer over and over again. Is there something small and inconspicuous that could help you get a glimpse of her keyboard?";
  document.getElementById("hint11_1_4_container").style.display = "block";
};

function hintPone11_1_4show() {
  document.getElementById("hintPone11_1_4Answer").innerHTML = "Use your ability to connect to plants and animals on the fly. You can then make it fly over the keybord and observe Jocelyn write in the password.";
  document.getElementById("hint11_1_5_container").style.display = "block";
};

function hintPone11_1_5show() {
  document.getElementById("hintPone11_1_5Answer").innerHTML = "Jocelyn's tea cup is empty at the moment. Maybe she would like some more?";
  document.getElementById("hint11_1_6_container").style.display = "block";
};

function hintPone11_1_6show() {
  document.getElementById("hintPone11_1_6Answer").innerHTML = "Order a cup of the from the barista and offer it to Jocelyn. This will make her leave her computer for a moment.";
  document.getElementById("hint11_1_7_container").style.display = "block";
};

function hintPone12_1show() {
  document.getElementById("hintPone12_1Answer").innerHTML = "Use the lens on the telescope to fix it.";
  document.getElementById("hint12_1_1_container").style.display = "block";
};

function hintPone13_1show() {
  document.getElementById("hintPone13_1Answer").innerHTML = "Use your ability to connect to plants and animals on the parrot.";
  document.getElementById("hint13_1_1_container").style.display = "block";
};

function hintPone14_1show() {
  document.getElementById("hintPone14_1Answer").innerHTML = "Ask Mary about your mother.";
  document.getElementById("hint14_1_1_container").style.display = "block";
};

function hintPone15_1show() {
  document.getElementById("hintPone15_1Answer").innerHTML = "Give the cookies to Laika.";
  document.getElementById("hint15_1_1_container").style.display = "block";
};

function hintPone16_1show() {
  document.getElementById("hintPone16_1Answer").innerHTML = "What brought you to this location? Did you talk about it?";
  document.getElementById("hintPone16_2").style.display = "none";
  document.getElementById("hint16_1_1_container").style.display = "block";
};

function hintPone16_1_1show() {
  document.getElementById("hintPone16_1_1Answer").innerHTML = "Sandy should know something about the paper with the library logo.";
  document.getElementById("hint16_1_2_container").style.display = "block";
};

function hintPone16_1_2show() {
  document.getElementById("hintPone16_1_2Answer").innerHTML = "The message in the astronomy book and the image of the night sky give you a clue on how to open a new location.";
  document.getElementById("hint16_1_3_container").style.display = "block";
};

function hintPone16_1_3show() {
  document.getElementById("hintPone16_1_3Answer").innerHTML = "Look at the map. What does the message in the astronomy book say? Does the form of Cygnus constellation remind you of something?";
  document.getElementById("hint16_1_4_container").style.display = "block";
};

function hintPone16_1_4show() {
  document.getElementById("hintPone16_1_4Answer").innerHTML = "You can find the form of Cygnus constellation on the map by using the instructions in the message. The stars marked with letters of the Greek alphabet correspond to certain locations on the map.";
  document.getElementById("hint16_1_5_container").style.display = "block";
};

function hintPone16_1_5show() {
  document.getElementById("hintPone16_1_5Answer").innerHTML = "The address is C46.";
  document.getElementById("hint16_1_6_container").style.display = "block";
};

function hintPone16_2show() {
  document.getElementById("hintPone16_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPone16_1").style.display = "none";
  document.getElementById("hint16_2_1_container").style.display = "block";
};

function hintPone17_1show() {
  document.getElementById("hintPone17_1Answer").innerHTML = "The message in the astronomy book and the image of the night sky give you a clue on how to open a new location.";
  document.getElementById("hintPone17_2").style.display = "none";
  document.getElementById("hint17_1_1_container").style.display = "block";
};

function hintPone17_1_1show() {
  document.getElementById("hintPone17_1_1Answer").innerHTML = "Look at the map. What does the message in the astronomy book say? Does the form of Cygnus constellation remind you of something?";
  document.getElementById("hint17_1_2_container").style.display = "block";
};

function hintPone17_1_2show() {
  document.getElementById("hintPone17_1_2Answer").innerHTML = "You can find the form of Cygnus constellation on the map by using the instructions in the message. The stars marked with letters of the Greek alphabet correspond to certain locations on the map.";
  document.getElementById("hint17_1_3_container").style.display = "block";
};

function hintPone17_1_3show() {
  document.getElementById("hintPone17_1_3Answer").innerHTML = "The address is C46.";
  document.getElementById("hint17_1_4_container").style.display = "block";
};

function hintPone17_2show() {
  document.getElementById("hintPone17_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPone17_1").style.display = "none";
  document.getElementById("hint17_2_1_container").style.display = "block";
};

function hintPone18_1show() {
  document.getElementById("hintPone18_1Answer").innerHTML = "Ask professor Martin about the gem. And feel free to ask him about things connected to the University as well.";
  document.getElementById("hint18_1_1_container").style.display = "block";
};

function hintPone19_1show() {
  document.getElementById("hintPone19_1Answer").innerHTML = "Give the money to salesman Peter to purchase a new telescope lens.";
  document.getElementById("hint19_1_1_container").style.display = "block";
};

function hintPone20_1show() {
  document.getElementById("hintPone20_1Answer").innerHTML = "Did you ask Sandy about the projector?";
  document.getElementById("hintPone20_2").style.display = "none";
  document.getElementById("hint20_1_1_container").style.display = "block";
};

function hintPone20_1_1show() {
  document.getElementById("hintPone20_1_1Answer").innerHTML = "If you want to take the projector, you have to sabotage Jocelyn's lecture.";
  document.getElementById("hint20_1_2_container").style.display = "block";
};

function hintPone20_1_2show() {
  document.getElementById("hintPone20_1_2Answer").innerHTML = "You could delete the lecture from her computer. To do that, you would have to find her password first, of course.";
  document.getElementById("hint20_1_3_container").style.display = "block";
};

function hintPone20_1_3show() {
  document.getElementById("hintPone20_1_3Answer").innerHTML = "Barista has a good look on what's going on in the the shop. Have you talked to him?";
  document.getElementById("hint20_1_4_container").style.display = "block";
};

function hintPone20_1_4show() {
  document.getElementById("hintPone20_1_4Answer").innerHTML = "If you ask the barista about Jocelyn, he will tell you that she's writing the password into her computer over and over again. Is there something small and inconspicuous that could help you get a glimpse of her keyboard?";
  document.getElementById("hint20_1_5_container").style.display = "block";
};

function hintPone20_1_5show() {
  document.getElementById("hintPone20_1_5Answer").innerHTML = "Use your ability to connect to plants and animals on the fly. You can then make it fly over the keybord and observe Jocelyn write in the password.";
  document.getElementById("hint20_1_6_container").style.display = "block";
};

function hintPone20_1_6show() {
  document.getElementById("hintPone20_1_6Answer").innerHTML = "Jocelyn's tea cup is empty at the moment. Maybe she would like some more?";
  document.getElementById("hint20_1_7_container").style.display = "block";
};

function hintPone20_1_7show() {
  document.getElementById("hintPone20_1_7Answer").innerHTML = "Order a cup of the from the barista and offer it to Jocelyn. This will make her leave her computer for a moment.";
  document.getElementById("hint20_1_8_container").style.display = "block";
};

function hintPone20_2show() {
  document.getElementById("hintPone20_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPone20_1").style.display = "none";
  document.getElementById("hint20_2_1_container").style.display = "block";
};

function hintPone21_1show() {
  document.getElementById("hintPone21_1Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPone21_2").style.display = "none";
  document.getElementById("hintPone21_3").style.display = "none";
  document.getElementById("hintPone21_4").style.display = "none";
  document.getElementById("hint21_1_1_container").style.display = "block";
};

function hintPone21_2show() {
  document.getElementById("hintPone21_2Answer").innerHTML = "There is somebody around 'Outer Space Telescopes' that could know something about street art.";
  document.getElementById("hintPone21_1").style.display = "none";
  document.getElementById("hintPone21_3").style.display = "none";
  document.getElementById("hintPone21_4").style.display = "none";
  document.getElementById("hint21_2_1_container").style.display = "block";
};

function hintPone21_2_1show() {
  document.getElementById("hintPone21_2_1Answer").innerHTML = "Ask Loomey about the mural.";
  document.getElementById("hint21_2_2_container").style.display = "block";
};

function hintPone21_3show() {
  document.getElementById("hintPone21_3Answer").innerHTML = "Somebody could use the projector and help you in exchange for your service.";
  document.getElementById("hintPone21_1").style.display = "none";
  document.getElementById("hintPone21_2").style.display = "none";
  document.getElementById("hintPone21_4").style.display = "none";
  document.getElementById("hint21_3_1_container").style.display = "block";
};

function hintPone21_3_1show() {
  document.getElementById("hintPone21_3_1Answer").innerHTML = "Give the projector to Loomey.";
  document.getElementById("hint21_3_2_container").style.display = "block";
};

function hintPone21_4show() {
  document.getElementById("hintPone21_4Answer").innerHTML = "You have to have the address where the mural used to be to solve this puzzle. Mary writes in her letter how she left home and describes the way she took to the mural. So how can you get her address?";
  document.getElementById("hintPone21_1").style.display = "none";
  document.getElementById("hintPone21_2").style.display = "none";
  document.getElementById("hintPone21_3").style.display = "none";
  document.getElementById("hint21_4_1_container").style.display = "block";
};

function hintPone21_4_1show() {
  document.getElementById("hintPone21_4_1Answer").innerHTML = "Track Mary's movements backwards, from the mural to her apartment, using the Majorton map.";
  document.getElementById("hint21_4_2_container").style.display = "block";
};

function hintPone21_4_2show() {
  document.getElementById("hintPone21_4_2Answer").innerHTML = "Mary's address is A82.";
  document.getElementById("hint21_4_3_container").style.display = "block";
};

function hintPone22_1show() {
  document.getElementById("hintPone22_1Answer").innerHTML = "Use the password on the computer.";
  document.getElementById("hintPone22_2").style.display = "none";
  document.getElementById("hint22_1_1_container").style.display = "block";
};

function hintPone22_2show() {
  document.getElementById("hintPone22_2Answer").innerHTML = "Barista has a good look on what's going on in the the shop. Have you talked to him?";
  document.getElementById("hintPone22_1").style.display = "none";
  document.getElementById("hint22_2_1_container").style.display = "block";
};

function hintPone22_2_1show() {
  document.getElementById("hintPone22_2_1Answer").innerHTML = "If you ask the barista about Jocelyn, he will tell you that she's writing the password into her computer over and over again. Is there something small and inconspicuous that could help you get a glimpse of her keyboard?";
  document.getElementById("hint22_2_2_container").style.display = "block";
};

function hintPone22_2_2show() {
  document.getElementById("hintPone22_2_2Answer").innerHTML = "Use your ability to connect to plants and animals on the fly. You can then make it fly over the keybord and observe Jocelyn write in the password.";
  document.getElementById("hint22_2_3_container").style.display = "block";
};

function hintPone23_1show() {
  document.getElementById("hintPone23_1Answer").innerHTML = "You can ask the characters you run into about your mother. Most of them will have something to say about her.";
  document.getElementById("hintPone23_2").style.display = "none";
  document.getElementById("hintPone23_3").style.display = "none";
  document.getElementById("hint23_1_1_container").style.display = "block";
};

function hintPone23_2show() {
  document.getElementById("hintPone23_2Answer").innerHTML = "Your mother left you clues to find this place. There must be something important about it.";
  document.getElementById("hintPone23_1").style.display = "none";
  document.getElementById("hintPone23_3").style.display = "none";
  document.getElementById("hint23_2_1_container").style.display = "block";
};

function hintPone23_2_1show() {
  document.getElementById("hintPone23_2_1Answer").innerHTML = "Ask Emma about Lena.";
  document.getElementById("hint23_2_2_container").style.display = "block";
};

function hintPone23_3show() {
  document.getElementById("hintPone23_3Answer").innerHTML = "This woman is obviously somebody that your mother wanted you to meet, considering all of the clues she left you to find her.";
  document.getElementById("hintPone23_1").style.display = "none";
  document.getElementById("hintPone23_2").style.display = "none";
  document.getElementById("hint23_3_1_container").style.display = "block";
};

function hintPone23_3_1show() {
  document.getElementById("hintPone23_3_1Answer").innerHTML = "Ask Mary about Lena.";
  document.getElementById("hint23_3_2_container").style.display = "block";
};

function hintPone24_1show() {
  document.getElementById("hintPone24_1Answer").innerHTML = "Mary writes in her letter how she left home and describes the way she took to the mural. So how can you get her address?";
  document.getElementById("hintPone24_2").style.display = "none";
  document.getElementById("hint24_1_1_container").style.display = "block";
};

function hintPone24_1_1show() {
  document.getElementById("hintPone24_1_1Answer").innerHTML = "Track Mary's movements backwards, from the mural to her apartment, using the Majorton map.";
  document.getElementById("hint24_1_2_container").style.display = "block";
};

function hintPone24_1_2show() {
  document.getElementById("hintPone24_1_2Answer").innerHTML = "Mary's address is A82.";
  document.getElementById("hint24_1_3_container").style.display = "block";
};

function hintPone24_2show() {
  document.getElementById("hintPone24_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPone24_1").style.display = "none";
  document.getElementById("hint24_2_1_container").style.display = "block";
};

function hintPone25_1show() {
  document.getElementById("hintPone25_1Answer").innerHTML = "If you examine the telescope, you should have information on a new location.";
  document.getElementById("hintPone25_2").style.display = "none";
  document.getElementById("hintPone25_3").style.display = "none";
  document.getElementById("hint25_1_1_container").style.display = "block";
};

function hintPone25_1_1show() {
  document.getElementById("hintPone25_1_1Answer").innerHTML = "Look at the map. Are there streets that fit to the description given in the shop add?";
  document.getElementById("hint25_1_2_container").style.display = "block";
};

function hintPone25_1_2show() {
  document.getElementById("hintPone25_1_2Answer").innerHTML = "The shop add says: <br><i>Find us on the northwest corner of two crossing streets, where couples always in broad daylight meet!</i><br>There is a junction of streets Lovers Lane and Sunny Road on the Majorton map. The address of the northwest corner of this junction is D43.";
  document.getElementById("hint25_1_3_container").style.display = "block";
};

function hintPone25_2show() {
  document.getElementById("hintPone25_2Answer").innerHTML = "Did you speak to Peter about the telescope? You should find some money to buy a new lens. To do this, you have to open another location.";
  document.getElementById("hintPone25_1").style.display = "none";
  document.getElementById("hintPone25_3").style.display = "none";
  document.getElementById("hint25_2_1_container").style.display = "block";
};

function hintPone25_3show() {
  document.getElementById("hintPone25_3Answer").innerHTML = "Did you speak to Jamie? Is there something bothering him?";
  document.getElementById("hintPone25_1").style.display = "none";
  document.getElementById("hintPone25_2").style.display = "none";
  document.getElementById("hint25_3_1_container").style.display = "block";
};

function hintPone25_3_1show() {
  document.getElementById("hintPone25_3_1Answer").innerHTML = "Jamie wants you to get him the mineralogy test. Is there something you could do to make professor Martin look away from the tests?";
  document.getElementById("hint25_3_2_container").style.display = "block";
};

function hintPone25_3_2show() {
  document.getElementById("hintPone25_3_2Answer").innerHTML = "Use the spray paint on the University flag. Jamie will pay you for your efforts and then you can buy a new lens.";
  document.getElementById("hint25_3_3_container").style.display = "block";
};

function hintPone26_1show() {
  document.getElementById("hintPone26_1Answer").innerHTML = "Maybe Jocelyn would like some tea.";
  document.getElementById("hint26_1_1_container").style.display = "block";
};

function hintPone27_1show() {
  document.getElementById("hintPone27_1Answer").innerHTML = "Barista has a good look on what's going on in the the shop. Have you talked to him?";
  document.getElementById("hintPone27_2").style.display = "none";
  document.getElementById("hint27_1_1_container").style.display = "block";
};

function hintPone27_1_1show() {
  document.getElementById("hintPone27_1_1Answer").innerHTML = "If you ask the barista about Jocelyn, he will tell you that she's writing the password into her computer over and over again. How could you get a good look at her doing it?";
  document.getElementById("hint27_1_2_container").style.display = "block";
};

function hintPone27_1_2show() {
  document.getElementById("hintPone27_1_2Answer").innerHTML = "You can make the fly hover over the keybord and observe Jocelyn write in the password.";
  document.getElementById("hint27_1_3_container").style.display = "block";
};

function hintPone27_2show() {
  document.getElementById("hintPone27_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPone27_1").style.display = "none";
  document.getElementById("hint27_2_1_container").style.display = "block";
};

function hintPone28_1show() {
  document.getElementById("hintPone28_1Answer").innerHTML = "You should find the University on the Majorton map and visit your professor.";
  document.getElementById("hint28_1_1_container").style.display = "block";
};

function hintPone28_1_1show() {
  document.getElementById("hintPone28_1_1Answer").innerHTML = "The address of the University is E62.";
  document.getElementById("hint28_1_2_container").style.display = "block";
};

function hintPone29_1show() {
  document.getElementById("hintPone29_1Answer").innerHTML = "Did you speak to Jamie? Is there something bothering him?";
  document.getElementById("hintPone29_2").style.display = "none";
  document.getElementById("hint29_1_1_container").style.display = "block";
};

function hintPone29_1_1show() {
  document.getElementById("hintPone29_1_1Answer").innerHTML = "Jamie wants you to get him the mineralogy test. Is there something you could do to make professor Martin look away from the tests?";
  document.getElementById("hint29_1_2_container").style.display = "block";
};

function hintPone29_1_2show() {
  document.getElementById("hintPone29_1_2Answer").innerHTML = "Use the spray paint on the University flag.";
  document.getElementById("hint29_1_3_container").style.display = "block";
};

function hintPone29_2show() {
  document.getElementById("hintPone29_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPone29_1").style.display = "none";
  document.getElementById("hint29_2_1_container").style.display = "block";
};

function hintPone30_1show() {
  document.getElementById("hintPone30_1Answer").innerHTML = "You should ask Peter about the telescope.";
  document.getElementById("hint30_1_1_container").style.display = "block";
};

function hintPone30_1_1show() {
  document.getElementById("hintPone30_1_1Answer").innerHTML = "The object you got suggests you should open a new location. Take a look at the map.";
  document.getElementById("hint30_1_2_container").style.display = "block";
};

function hintPone30_1_2show() {
  document.getElementById("hintPone30_1_2Answer").innerHTML = "The address of the library is B40.";
  document.getElementById("hint30_1_3_container").style.display = "block";
};

function hintPone31_1show() {
  document.getElementById("hintPone31_1Answer").innerHTML = "Jamie wants you to get him the mineralogy test. Is there something you could do to make professor Martin look away from the tests?";
  document.getElementById("hint31_1_1_container").style.display = "block";
};

function hintPone31_1_1show() {
  document.getElementById("hintPone31_1_1Answer").innerHTML = "Use the spray paint on the University flag.";
  document.getElementById("hint31_1_2_container").style.display = "block";
};

function hintPone32_1show() {
  document.getElementById("hintPone32_1Answer").innerHTML = "Ask Mark about Jocelyn. And order her some tea, her cup is empty.";
  document.getElementById("hint32_1_1_container").style.display = "block";
};

function hintPone33_1show() {
  document.getElementById("hintPone33_1Answer").innerHTML = "Show the tests to Jamie.";
  document.getElementById("hint33_1_1_container").style.display = "block";
};

function hintPone34_1show() {
  document.getElementById("hintPone34_1Answer").innerHTML = "Ask Mark for another cup of tea and offer it to Jocelyn.";
  document.getElementById("hint34_1_1_container").style.display = "block";
};

function hintPone35_1show() {
  document.getElementById("hintPone35_1Answer").innerHTML = "Did you speak to Jamie? Is there something bothering him?";
  document.getElementById("hintPone35_2").style.display = "none";
  document.getElementById("hint35_1_1_container").style.display = "block";
};

function hintPone35_1_1show() {
  document.getElementById("hintPone35_1_1Answer").innerHTML = "Jamie wants you to get him the mineralogy test. Is there something you could do to make professor Martin look away from the tests?";
  document.getElementById("hint35_1_2_container").style.display = "block";
};

function hintPone35_1_2show() {
  document.getElementById("hintPone35_1_2Answer").innerHTML = "Use the spray paint on the University flag.";
  document.getElementById("hint35_1_3_container").style.display = "block";
};

function hintPone35_2show() {
  document.getElementById("hintPone35_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPone35_1").style.display = "none";
  document.getElementById("hint35_2_1_container").style.display = "block";
};

function hintPone36_1show() {
  document.getElementById("hintPone36_1Answer").innerHTML = "Use your ability to connect to plants and animals on the sprout.";
  document.getElementById("hint36_1_1_container").style.display = "block";
};

function hintPone37_1show() {
  document.getElementById("hintPone37_1Answer").innerHTML = "Did you speak to Jamie? Is there something bothering him?";
  document.getElementById("hintPone37_2").style.display = "none";
  document.getElementById("hint37_1_1_container").style.display = "block";
};

function hintPone37_1_1show() {
  document.getElementById("hintPone37_1_1Answer").innerHTML = "Jamie wants you to get him the mineralogy test. Is there something you could do to make professor Martin look away from the tests?";
  document.getElementById("hint37_1_2_container").style.display = "block";
};

function hintPone37_1_2show() {
  document.getElementById("hintPone37_1_2Answer").innerHTML = "Use the spray paint on the University flag.";
  document.getElementById("hint37_1_3_container").style.display = "block";
};

function hintPone37_2show() {
  document.getElementById("hintPone37_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPone37_1").style.display = "none";
  document.getElementById("hint37_2_1_container").style.display = "block";
};

function hintPone38_1show() {
  document.getElementById("hintPone38_1Answer").innerHTML = "Ask the parrot about Emma.";
  document.getElementById("hint38_1_1_container").style.display = "block";
};

function hintPone39_1show() {
  document.getElementById("hintPone39_1Answer").innerHTML = "What brought you here? Should you show it to somebody?";
  document.getElementById("hintPone39_2").style.display = "none";
  document.getElementById("hint39_1_1_container").style.display = "block";
};

function hintPone39_1_1show() {
  document.getElementById("hintPone39_1_1Answer").innerHTML = "Show the paper to Sandy.";
  document.getElementById("hint39_1_2_container").style.display = "block";
};

function hintPone39_2show() {
  document.getElementById("hintPone39_2Answer").innerHTML = "The paper suggests opening a new location. Take a look at Majorton map.";
  document.getElementById("hintPone39_1").style.display = "none";
  document.getElementById("hint39_2_1_container").style.display = "block";
};

function hintPone39_2_1show() {
  document.getElementById("hintPone39_2_1Answer").innerHTML = "The address of the library is B40.";
  document.getElementById("hint39_2_2_container").style.display = "block";
};

function hintPone41_1show() {
  document.getElementById("hintPone41_1Answer").innerHTML = "Add the pumpkin to the cookie mix.";
  document.getElementById("hint41_1_1_container").style.display = "block";
};

function hintPone41_1_1show() {
  document.getElementById("hintPone41_1_1Answer").innerHTML = "Enter address G54 into the Digital Game Book input field.";
  document.getElementById("hint41_1_2_container").style.display = "block";
};

function hintPone41_2show() {
  document.getElementById("hintPone41_2Answer").innerHTML = "Take a look on the Starchester map.";
  document.getElementById("hintPone41_1").style.display = "none";
  document.getElementById("hintPone41_3").style.display = "none";
  document.getElementById("hint41_2_1_container").style.display = "block";
};

function hintPone41_2_1show() {
  document.getElementById("hintPone41_2_1Answer").innerHTML = "Enter address C29 into the Digital Game Book input field.";
  document.getElementById("hint41_2_2_container").style.display = "block";
};

function hintPone41_3show() {
  document.getElementById("hintPone41_3Answer").innerHTML = "Somebody you know has approach to information about people. Maybe they could help find Alison.";
  document.getElementById("hintPone41_1").style.display = "none";
  document.getElementById("hintPone41_2").style.display = "none";
  document.getElementById("hint41_3_1_container").style.display = "block";
};

function hintPone41_3_1show() {
  document.getElementById("hintPone41_3_1Answer").innerHTML = "Ask Ron about Alison.";
  document.getElementById("hint41_3_2_container").style.display = "block";
};

function hintPone41_3_2show() {
  document.getElementById("hintPone41_3_2Answer").innerHTML = "What does 'Under the Radar' mean? Take a look on Starchester map.";
  document.getElementById("hint41_3_3_container").style.display = "block";
};

function hintPone41_3_3show() {
  document.getElementById("hintPone41_3_3Answer").innerHTML = "The magazine's address is H51, right under Starchester Weather Radar.";
  document.getElementById("hint41_3_4_container").style.display = "block";
};

function hintPone42_1show() {
  document.getElementById("hintPone42_1Answer").innerHTML = "Loomey is a street artist. Is there something you could talk to her about?";
  document.getElementById("hintPone42_2").style.display = "none";
  document.getElementById("hint42_1_1_container").style.display = "block";
};

function hintPone42_1_1show() {
  document.getElementById("hintPone42_1_1Answer").innerHTML = "Ask Loomey about the mural on the photo.";
  document.getElementById("hint42_1_2_container").style.display = "block";
};

function hintPone42_2show() {
  document.getElementById("hintPone42_2Answer").innerHTML = "Loomey would help you find the address of the mural, but she has to finish her job first. Is there anything you could give her to speed her up?";
  document.getElementById("hintPone42_1").style.display = "none";
  document.getElementById("hint42_2_1_container").style.display = "block";
};

function hintPone42_2_1show() {
  document.getElementById("hintPone42_2_1Answer").innerHTML = "Loomey will help you if you get her the projector. If you need a hint on how to do it, ask for a hint for card <b>20</b>.";
  document.getElementById("hint42_2_2_container").style.display = "block";
};

function hintPone43_1show() {
  document.getElementById("hintPone43_1Answer").innerHTML = "If you want to take the projector, you have to sabotage Jocelyn's lecture.";
  document.getElementById("hint43_1_1_container").style.display = "block";
};

function hintPone43_1_1show() {
  document.getElementById("hintPone43_1_1Answer").innerHTML = "You could delete the lecture from her computer. To do that, you would have to find her password first, of course.";
  document.getElementById("hint43_1_2_container").style.display = "block";
};

function hintPone43_1_2show() {
  document.getElementById("hintPone43_1_2Answer").innerHTML = "Barista has a good look on what's going on in the the shop. Have you talked to him?";
  document.getElementById("hint43_1_3_container").style.display = "block";
};

function hintPone43_1_3show() {
  document.getElementById("hintPone43_1_3Answer").innerHTML = "If you ask the barista about Jocelyn, he will tell you that she's writing the password into her computer over and over again. Is there something small and inconspicuous that could help you get a glimpse of her keyboard?";
  document.getElementById("hint43_1_4_container").style.display = "block";
};

function hintPone43_1_4show() {
  document.getElementById("hintPone43_1_4Answer").innerHTML = "Use your ability to connect to plants and animals on the fly. You can then make it fly over the keybord and observe Jocelyn write in the password.";
  document.getElementById("hint43_1_5_container").style.display = "block";
};

function hintPone43_1_5show() {
  document.getElementById("hintPone43_1_5Answer").innerHTML = "Jocelyn's tea cup is empty at the moment. Maybe she would like some more?";
  document.getElementById("hint43_1_6_container").style.display = "block";
};

function hintPone43_1_6show() {
  document.getElementById("hintPone43_1_6Answer").innerHTML = "Order a cup of the from the barista and offer it to Jocelyn. This will make her leave her computer for a moment.";
  document.getElementById("hint43_1_7_container").style.display = "block";
};
