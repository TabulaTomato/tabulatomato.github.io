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
  document.getElementById("hint05_container").style.display = "none";
  document.getElementById("hint05_1_1_container").style.display = "none";
  document.getElementById("hint07_container").style.display = "none";
  document.getElementById("hint07_1_1_container").style.display = "none";
  document.getElementById("hint07_1_2_container").style.display = "none";
  document.getElementById("hint07_1_3_container").style.display = "none";
  document.getElementById("hint07_2_1_container").style.display = "none";
  document.getElementById("hint10_container").style.display = "none";
  document.getElementById("hint10_1_1_container").style.display = "none";
  document.getElementById("hint15_container").style.display = "none";
  document.getElementById("hint15_1_1_container").style.display = "none";
  document.getElementById("hint15_1_2_container").style.display = "none";
  document.getElementById("hint15_2_1_container").style.display = "none";
  document.getElementById("hint18_container").style.display = "none";
  document.getElementById("hint18_1_1_container").style.display = "none";
  document.getElementById("hint20_container").style.display = "none";
  document.getElementById("hint20_1_1_container").style.display = "none";
  document.getElementById("hint20_1_2_container").style.display = "none";
  document.getElementById("hint20_2_1_container").style.display = "none";
  document.getElementById("hint20_2_2_container").style.display = "none";
  document.getElementById("hint21_container").style.display = "none";
  document.getElementById("hint21_1_1_container").style.display = "none";
  document.getElementById("hint21_1_2_container").style.display = "none";
  document.getElementById("hint21_2_1_container").style.display = "none";
  document.getElementById("hint21_2_2_container").style.display = "none";
  document.getElementById("hint22_container").style.display = "none";
  document.getElementById("hint22_1_1_container").style.display = "none";
  document.getElementById("hint25_container").style.display = "none";
  document.getElementById("hint25_1_1_container").style.display = "none";
  document.getElementById("hint25_1_2_container").style.display = "none";
  document.getElementById("hint25_2_1_container").style.display = "none";
  document.getElementById("hint25_2_2_container").style.display = "none";
  document.getElementById("hint27_container").style.display = "none";
  document.getElementById("hint27_1_1_container").style.display = "none";
  document.getElementById("hint27_1_2_container").style.display = "none";
  document.getElementById("hint29_container").style.display = "none";
  document.getElementById("hint29_1_1_container").style.display = "none";
  document.getElementById("hint29_1_2_container").style.display = "none";
  document.getElementById("hint29_1_3_container").style.display = "none";
  document.getElementById("hint29_1_4_container").style.display = "none";
  document.getElementById("hint29_1_5_container").style.display = "none";
  document.getElementById("hint29_1_6_container").style.display = "none";
  document.getElementById("hint29_1_7_container").style.display = "none";
  document.getElementById("hint29_1_8_container").style.display = "none";
  document.getElementById("hint29_1_9_container").style.display = "none";
  document.getElementById("hint29_1_10_container").style.display = "none";
  document.getElementById("hint29_2_1_container").style.display = "none";
  document.getElementById("hint29_2_2_container").style.display = "none";
  document.getElementById("hint30_container").style.display = "none";
  document.getElementById("hint30_1_1_container").style.display = "none";
  document.getElementById("hint30_2_1_container").style.display = "none";
  document.getElementById("hint30_3_1_container").style.display = "none";
  document.getElementById("hint30_3_2_container").style.display = "none";
  document.getElementById("hint30_3_3_container").style.display = "none";
  document.getElementById("hintSPO01_container").style.display = "none";
  document.getElementById("hintSPO01_1_1_container").style.display = "none";
  document.getElementById("hintSPO01_2_1_container").style.display = "none";
  document.getElementById("hintSPO01_2_2_container").style.display = "none";
  document.getElementById("hintSPO02_container").style.display = "none";
  document.getElementById("hintSPO02_1_1_container").style.display = "none";
  document.getElementById("hintSPO02_1_2_container").style.display = "none";
  document.getElementById("hintSPO02_1_3_container").style.display = "none";
  document.getElementById("hintSPO02_1_4_container").style.display = "none";
  document.getElementById("hintSPO02_2_1_container").style.display = "none";
  document.getElementById("hintSPO03_container").style.display = "none";
  document.getElementById("hintSPO03_1_1_container").style.display = "none";
  document.getElementById("hintSPO03_1_2_container").style.display = "none";
  document.getElementById("hintSPO03_1_3_container").style.display = "none";
  document.getElementById("hintSPO03_1_4_container").style.display = "none";
  document.getElementById("hintSPO03_1_5_container").style.display = "none";
  document.getElementById("hintSPO03_1_6_container").style.display = "none";
  document.getElementById("hintSPO03_1_7_container").style.display = "none";
  document.getElementById("hintSPO03_1_8_container").style.display = "none";
  document.getElementById("hintSPO03_1_9_container").style.display = "none";
  document.getElementById("hintSPO04_container").style.display = "none";
  document.getElementById("hintSPO04_1_1_container").style.display = "none";
  document.getElementById("hintSPO04_1_2_container").style.display = "none";
  document.getElementById("hintSPO04_2_1_container").style.display = "none";
}

function hintPthreeFunction() {
	var zhintlowercase = document.getElementById("hintPthreeText").value;
  var zhint = zhintlowercase.toUpperCase();
  var hintanswerthree;
  if (zhint == "01") {
  		hintanswerthree = "To hear Ziggy's thoughts on things, enter Ziggy's card number <b>01</b> followed by the card number of the object or character you want to hear her thoughts about in the Digital Game Book input field, separated by a comma.";
      hidePthreeHints();
  } else if (zhint == "05") {
  		hintanswerthree = "Did you talk to Kate? She could know something interesting.";
      hidePthreeHints();
      document.getElementById("hint05_container").style.display = "block";
  } else if (zhint == "07") {
  		hintanswerthree = "Do you have character/object card 22?";
      hidePthreeHints();
      document.getElementById("hint07_container").style.display = "block";
      document.getElementById("hintPthree07_1").style.display = "block";
      document.getElementById("hintPthree07_2").style.display = "block";
  } else if (zhint == "08") {
  		hintanswerthree = "To use this power, enter card number <b>08</b> followed by the card number of the plant or animal you want to use it on, separated by a comma.";
      hidePthreeHints();
  } else if (zhint == "10") {
  		hintanswerthree = "Is there anything special you could do with this rat?";
      hidePthreeHints();
      document.getElementById("hint10_container").style.display = "block";
  } else if (zhint == "13") {
  		hintanswerthree = "Agent 27 serves as a mask to hide your identity in front of the Lakis.";
      hidePthreeHints();
  } else if (zhint == "15") {
  		hintanswerthree = "Do you have character/object card 22?";
      hidePthreeHints();
      document.getElementById("hint15_container").style.display = "block";
      document.getElementById("hintPthree15_1").style.display = "block";
      document.getElementById("hintPthree15_2").style.display = "block";
  } else if (zhint == "18") {
  		hintanswerthree = "The CEO is seated in front of you. What is the significance of this in relation to your surroundings?";
      hidePthreeHints();
      document.getElementById("hint18_container").style.display = "block";
  } else if (zhint == "20") {
  		hintanswerthree = "Have you opened LOC02?";
      hidePthreeHints();
      document.getElementById("hint20_container").style.display = "block";
      document.getElementById("hintPthree20_1").style.display = "block";
      document.getElementById("hintPthree20_2").style.display = "block";
  } else if (zhint == "21") {
  		hintanswerthree = "Have you opened LOC02?";
      hidePthreeHints();
      document.getElementById("hint21_container").style.display = "block";
      document.getElementById("hintPthree21_1").style.display = "block";
      document.getElementById("hintPthree21_2").style.display = "block";
  } else if (zhint == "22") {
  		hintanswerthree = "The CEO is seated in front of you. How could this information help you with taking a better look at the floor plan?";
      hidePthreeHints();
      document.getElementById("hint22_container").style.display = "block";
  } else if (zhint == "23") {
  		hintanswerthree = "To ask somebody about your mother, input their card number into the Digital Game Book input field, followed by Lena's card number <b>23</b>, separated by a comma.";
      hidePthreeHints();
  } else if (zhint == "25") {
  		hintanswerthree = "Have you opened LOC02?";
      hidePthreeHints();
      document.getElementById("hint25_container").style.display = "block";
      document.getElementById("hintPthree25_1").style.display = "block";
      document.getElementById("hintPthree25_2").style.display = "block";
  } else if (zhint == "26") {
  		hintanswerthree = "To use this power, enter card number <b>26</b> followed by the card number of the person you want to take the appearance of, separated by a comma.";
      hidePthreeHints();
  } else if (zhint == "27") {
  		hintanswerthree = "The CEO locked you in his office. Have you figured out in which room your mother is? If you could get her the keycard, she would be able to get out the room herself.";
      hidePthreeHints();
      document.getElementById("hint27_container").style.display = "block";
  } else if (zhint == "29") {
  		hintanswerthree = "Have you opened LOC02?";
      hidePthreeHints();
      document.getElementById("hint29_container").style.display = "block";
      document.getElementById("hintPthree29_1").style.display = "block";
      document.getElementById("hintPthree29_2").style.display = "block";
  } else if (zhint == "30") {
  		hintanswerthree = "Click on a button depending on your progress in the game.";
      hidePthreeHints();
      document.getElementById("hint30_container").style.display = "block";
      document.getElementById("hintPthree30_1").style.display = "block";
      document.getElementById("hintPthree30_2").style.display = "block";
      document.getElementById("hintPthree30_3").style.display = "block";
  } else if (zhint == "34") {
  		hintanswerthree = "You are not supposed to use this card yet.";
      hidePthreeHints();
  } else if (zhint == "37") {
  		hintanswerthree = "To use this power, enter card number <b>37</b> followed by the card number of the person whose eyes you want to see through, separated by a comma.";
      hidePthreeHints();
  } else if (zhint == "38") {
  		hintanswerthree = "You are not supposed to use this card yet.";
      hidePthreeHints();
  } else if (zhint == "SPO01") {
  		hintanswerthree = "Have you opened LOC02?";
      hidePthreeHints();
      document.getElementById("hintSPO01_container").style.display = "block";
      document.getElementById("hintPthreeSPO01_1").style.display = "block";
      document.getElementById("hintPthreeSPO01_2").style.display = "block";
  } else if (zhint == "SPO02") {
  		hintanswerthree = "Did you figure out which locker compartment you should open?";
      hidePthreeHints();
      document.getElementById("hintSPO02_container").style.display = "block";
      document.getElementById("hintPthreeSPO02_1").style.display = "block";
      document.getElementById("hintPthreeSPO02_2").style.display = "block";
  } else if (zhint == "SPO03") {
  		hintanswerthree = "Did you inform yourself on the laboratory gossip?";
      hidePthreeHints();
      document.getElementById("hintSPO03_container").style.display = "block";
  } else if (zhint == "SPO04") {
  		hintanswerthree = "Do you have character/object card 22?";
      hidePthreeHints();
      document.getElementById("hintSPO04_container").style.display = "block";
      document.getElementById("hintPthreeSPO04_1").style.display = "block";
      document.getElementById("hintPthreeSPO04_2").style.display = "block";
	} else {
  		hintanswerthree = "A card with this number doesn't exist. Try something else.";
      hidePthreeHints();
  }
  	document.getElementById("hintPthreeAnswer").innerHTML = hintanswerthree;
};

function hintPthree05_1show() {
  document.getElementById("hintPthree05_1Answer").innerHTML = "Ask Kate about her colleagues. She could be helpful with figuring out how to get the keycard for the staff quarters.";
  document.getElementById("hint05_1_1_container").style.display = "block";
};

function hintPthree07_1show() {
  document.getElementById("hintPthree07_1Answer").innerHTML = "The CEO locked you in his office. Have you figured out in which room your mother is? If you could get her the keycard, she would be able to get out the room herself.";
  document.getElementById("hintPthree07_2").style.display = "none";
  document.getElementById("hint07_1_1_container").style.display = "block";
};

function hintPthree07_1_1show() {
  document.getElementById("hintPthree07_1_1Answer").innerHTML = "You have a little friend that could help you in this quest. Is there a way to make him bring the keycard to your mother?";
  document.getElementById("hint07_1_2_container").style.display = "block";
};

function hintPthree07_1_2show() {
  document.getElementById("hintPthree07_1_2Answer").innerHTML = "Use your ability to connect to plants and animals on the lab rat. Give him the keycard and take him to your mother's room through the ventilation ducts.";
  document.getElementById("hint07_1_3_container").style.display = "block";
};

function hintPthree07_2show() {
  document.getElementById("hintPthree07_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPthree07_1").style.display = "none";
  document.getElementById("hint07_2_1_container").style.display = "block";
};

function hintPthree10_1show() {
  document.getElementById("hintPthree10_1Answer").innerHTML = "Use your ability to connect to plants and animals on the lab rat.";
  document.getElementById("hint10_1_1_container").style.display = "block";
};

function hintPthree15_1show() {
  document.getElementById("hintPthree15_1Answer").innerHTML = "The CEO locked you in his office. Have you figured out in which room your mother is? If you could get her the keycard, she would be able to get out the room herself.";
  document.getElementById("hintPthree15_2").style.display = "none";
  document.getElementById("hint15_1_1_container").style.display = "block";
};

function hintPthree15_1_1show() {
  document.getElementById("hintPthree15_1_1Answer").innerHTML = "Send the rat to your mother's room through the ventilation ducts.";
  document.getElementById("hint15_1_2_container").style.display = "block";
};

function hintPthree15_2show() {
  document.getElementById("hintPthree15_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPthree15_1").style.display = "none";
  document.getElementById("hint15_2_1_container").style.display = "block";
};

function hintPthree18_1show() {
  document.getElementById("hintPthree18_1Answer").innerHTML = "Use your ability to look through someone's eyes on CEO Timothy Pear. This way you can take a better look on the floor map behind you.";
  document.getElementById("hint18_1_1_container").style.display = "block";
};

function hintPthree20_1show() {
  document.getElementById("hintPthree20_1Answer").innerHTML = "Did you talk to Fred? He could know something interesting.";
  document.getElementById("hintPthree20_2").style.display = "none";
  document.getElementById("hint20_1_1_container").style.display = "block";
};

function hintPthree20_1_1show() {
  document.getElementById("hintPthree20_1_1Answer").innerHTML = "Ask Fred about his colleagues. He could be helpful with figuring out how to get the keycard for the staff quarters.";
  document.getElementById("hint20_1_2_container").style.display = "block";
};

function hintPthree20_2show() {
  document.getElementById("hintPthree20_2Answer").innerHTML = "Have you tried to open the doors in the entrance hall and the common area?";
  document.getElementById("hintPthree20_1").style.display = "none";
  document.getElementById("hint20_2_1_container").style.display = "block";
};

function hintPthree20_2_1show() {
  document.getElementById("hintPthree20_2_1Answer").innerHTML = "Open door D02.";
  document.getElementById("hint20_2_2_container").style.display = "block";
};

function hintPthree21_1show() {
  document.getElementById("hintPthree21_1Answer").innerHTML = "As always, if the person isn't here, you can't talk to them, but you can talk about them.";
  document.getElementById("hintPthree21_2").style.display = "none";
  document.getElementById("hint21_1_1_container").style.display = "block";
};

function hintPthree21_1_1show() {
  document.getElementById("hintPthree21_1_1Answer").innerHTML = "Talk to Fred and Kate about their colleagues. They could help with figuring out how to get the keycard for the staff quarters.";
  document.getElementById("hint21_1_2_container").style.display = "block";
};

function hintPthree21_2show() {
  document.getElementById("hintPthree21_2Answer").innerHTML = "Have you tried to open the doors in the entrance hall and the common area?";
  document.getElementById("hintPthree21_1").style.display = "none";
  document.getElementById("hint21_2_1_container").style.display = "block";
};

function hintPthree21_2_1show() {
  document.getElementById("hintPthree21_2_1Answer").innerHTML = "Open door D02.";
  document.getElementById("hint21_2_2_container").style.display = "block";
};

function hintPthree22_1show() {
  document.getElementById("hintPthree22_1Answer").innerHTML = "Use your ability to look through someone's eyes on CEO Timothy Pear. This way you can take a better look on the floor map behind you.";
  document.getElementById("hint22_1_1_container").style.display = "block";
};

function hintPthree25_1show() {
  document.getElementById("hintPthree25_1Answer").innerHTML = "As always, if the person isn't here, you can't talk to them, but you can talk about them.";
  document.getElementById("hintPthree25_2").style.display = "none";
  document.getElementById("hint25_1_1_container").style.display = "block";
};

function hintPthree25_1_1show() {
  document.getElementById("hintPthree25_1_1Answer").innerHTML = "Talk to Fred and Kate about their colleagues. They could help with figuring out how to get the keycard for the staff quarters.";
  document.getElementById("hint25_1_2_container").style.display = "block";
};

function hintPthree25_2show() {
  document.getElementById("hintPthree25_2Answer").innerHTML = "Have you tried to open the doors in the entrance hall and the common area?";
  document.getElementById("hintPthree25_1").style.display = "none";
  document.getElementById("hint25_2_1_container").style.display = "block";
};

function hintPthree25_2_1show() {
  document.getElementById("hintPthree25_2_1Answer").innerHTML = "Open door D02.";
  document.getElementById("hint25_2_2_container").style.display = "block";
};

function hintPthree27_1show() {
  document.getElementById("hintPthree27_1Answer").innerHTML = "You have a little friend that could help you in this quest. Is there a way to make him bring the keycard to your mother?";
  document.getElementById("hint27_1_1_container").style.display = "block";
};

function hintPthree27_1_1show() {
  document.getElementById("hintPthree27_1_1Answer").innerHTML = "Use your ability to connect to plants and animals on the lab rat. Give him the keycard and take him to your mother's room through the ventilation ducts.";
  document.getElementById("hint27_1_2_container").style.display = "block";
};

function hintPthree29_1show() {
  document.getElementById("hintPthree29_1Answer").innerHTML = "As always, if the person isn't here, you can't talk to them, but you can talk about them.";
  document.getElementById("hintPthree29_2").style.display = "none";
  document.getElementById("hint29_1_1_container").style.display = "block";
};

function hintPthree29_1_1show() {
  document.getElementById("hintPthree29_1_1Answer").innerHTML = "Talk to Fred about Donald. He might know something interesting about him.";
  document.getElementById("hint29_1_2_container").style.display = "block";
};

function hintPthree29_1_2show() {
  document.getElementById("hintPthree29_1_2Answer").innerHTML = "Talk to Fred and Kate about their colleagues. It will help to identify which locker compartment belongs to Donald Braun.";
  document.getElementById("hint29_1_3_container").style.display = "block";
};

function hintPthree29_1_3show() {
  document.getElementById("hintPthree29_1_3Answer").innerHTML = "The fourth compartment has a drawing of an insect so it belongs to Laurie Haage. The third compartment is colored in the darkest color, so it must belong to Celia Gibbs. Fred Murphy asked for a compartment next to the one of Kate Carner, so the first two compartments have to belong to the two of them. The fifth compartment belongs to Donald Braun.";
  document.getElementById("hint29_1_4_container").style.display = "block";
};

function hintPthree29_1_4show() {
  document.getElementById("hintPthree29_1_4Answer").innerHTML = "What did Kate say about Donald Braun? Can you connect this nickname he has for her to something you see on the table?";
  document.getElementById("hint29_1_5_container").style.display = "block";
};

function hintPthree29_1_5show() {
  document.getElementById("hintPthree29_1_5Answer").innerHTML = "Take a look at the periodic table of elements. The nickname is connected to it.";
  document.getElementById("hint29_1_6_container").style.display = "block";
};

function hintPthree29_1_6show() {
  document.getElementById("hintPthree29_1_6Answer").innerHTML = "20 is the atomic number of Ca, 86 is the atomic number of Rn, and 68 it the atomic number of Er. What could Donald Braun's locker combination be?";
  document.getElementById("hint29_1_7_container").style.display = "block";
};

function hintPthree29_1_7show() {
  document.getElementById("hintPthree29_1_7Answer").innerHTML = "The combination for Donald Braun's locker compartment is 35797, made of atomic numbers of Br, Au and N.";
  document.getElementById("hint29_1_8_container").style.display = "block";
};

function hintPthree29_1_8show() {
  document.getElementById("hintPthree29_1_8Answer").innerHTML = "There is only one person that nobody would suspect opening the locker compartment of Donald Braun.";
  document.getElementById("hint29_1_9_container").style.display = "block";
};

function hintPthree29_1_9show() {
  document.getElementById("hintPthree29_1_9Answer").innerHTML = "Take the appearance of Donald Braun with your ability and open his locker compartment.";
  document.getElementById("hint29_1_10_container").style.display = "block";
};

function hintPthree29_2show() {
  document.getElementById("hintPthree29_2Answer").innerHTML = "Have you tried to open the doors in the entrance hall and the common area?";
  document.getElementById("hintPthree29_1").style.display = "none";
  document.getElementById("hint29_2_1_container").style.display = "block";
};

function hintPthree29_2_1show() {
  document.getElementById("hintPthree29_2_1Answer").innerHTML = "Open door D02.";
  document.getElementById("hint29_2_2_container").style.display = "block";
};

function hintPthree30_1show() {
  document.getElementById("hintPthree30_1Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPthree30_2").style.display = "none";
  document.getElementById("hintPthree30_3").style.display = "none";
  document.getElementById("hint30_1_1_container").style.display = "block";
};

function hintPthree30_2show() {
  document.getElementById("hintPthree30_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPthree30_1").style.display = "none";
  document.getElementById("hintPthree30_3").style.display = "none";
  document.getElementById("hint30_2_1_container").style.display = "block";
};

function hintPthree30_3show() {
  document.getElementById("hintPthree30_3Answer").innerHTML = "The CEO locked you in his office. Have you figured out in which room your mother is? If you could get her the keycard, she would be able to get out the room herself.";
  document.getElementById("hintPthree30_1").style.display = "none";
  document.getElementById("hintPthree30_2").style.display = "none";
  document.getElementById("hint30_3_1_container").style.display = "block";
};

function hintPthree30_3_1show() {
  document.getElementById("hintPthree30_3_1Answer").innerHTML = "You have a little friend that could help you in this quest. Is there a way to make him bring the keycard to your mother?";
  document.getElementById("hint30_3_2_container").style.display = "block";
};

function hintPthree30_3_2show() {
  document.getElementById("hintPthree30_3_2Answer").innerHTML = "Give the rat the keycard and take him to your mother's room through the ventilation ducts.";
  document.getElementById("hint30_3_3_container").style.display = "block";
};

function hintPthreeSPO01_1show() {
  document.getElementById("hintPthreeSPO01_1Answer").innerHTML = "The photo could be helpful with figuring out which locker compartment belongs to whom.";
  document.getElementById("hintPthreeSPO01_2").style.display = "none";
  document.getElementById("hintSPO01_1_1_container").style.display = "block";
};

function hintPthreeSPO01_2show() {
  document.getElementById("hintPthreeSPO01_2Answer").innerHTML = "Have you tried to open the doors in the entrance hall and the common area?";
  document.getElementById("hintPthreeSPO01_1").style.display = "none";
  document.getElementById("hintSPO01_2_1_container").style.display = "block";
};

function hintPthreeSPO01_2_1show() {
  document.getElementById("hintPthreeSPO01_2_1Answer").innerHTML = "Open door D02.";
  document.getElementById("hintSPO01_2_2_container").style.display = "block";
};

function hintPthreeSPO02_1show() {
  document.getElementById("hintPthreeSPO02_1Answer").innerHTML = "Have you talked to Kate about her colleagues?";
  document.getElementById("hintPthreeSPO02_2").style.display = "none";
  document.getElementById("hintSPO02_1_1_container").style.display = "block";
};

function hintPthreeSPO02_1_1show() {
  document.getElementById("hintPthreeSPO02_1_1Answer").innerHTML = "What did Kate say about Donald Braun? Can you connect this nickname he has for her to the periodic table of elements?";
  document.getElementById("hintSPO02_1_2_container").style.display = "block";
};

function hintPthreeSPO02_1_2show() {
  document.getElementById("hintPthreeSPO02_1_2Answer").innerHTML = "20 is the atomic number of Ca, 86 is the atomic number of Rn, and 68 it the atomic number of Er. What could Donald Braun's locker combination be?";
  document.getElementById("hintSPO02_1_3_container").style.display = "block";
};

function hintPthreeSPO02_1_3show() {
  document.getElementById("hintPthreeSPO02_1_3Answer").innerHTML = "The combination for Donald Braun's locker compartment is 35797, made of atomic numbers of Br, Au and N.";
  document.getElementById("hintSPO02_1_4_container").style.display = "block";
};

function hintPthreeSPO02_2show() {
  document.getElementById("hintPthreeSPO02_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPthreeSPO02_1").style.display = "none";
  document.getElementById("hintSPO02_2_1_container").style.display = "block";
};

function hintPthreeSPO03_1show() {
  document.getElementById("hintPthreeSPO03_1Answer").innerHTML = "Talk to Fred about Donald. He might know something interesting about him.";
  document.getElementById("hintSPO03_1_1_container").style.display = "block";
};

function hintPthreeSPO03_1_1show() {
  document.getElementById("hintPthreeSPO03_1_1Answer").innerHTML = "Talk to Fred and Kate about their colleagues. It will help to identify which locker compartment belongs to Donald Braun.";
  document.getElementById("hintSPO03_1_2_container").style.display = "block";
};

function hintPthreeSPO03_1_2show() {
  document.getElementById("hintPthreeSPO03_1_2Answer").innerHTML = "The fourth compartment has a drawing of an insect so it belongs to Laurie Haage. The third compartment is colored in the darkest color, so it must belong to Celia Gibbs. Fred Murphy asked for a compartment next to the one of Kate Carner, so the first two compartments have to belong to the two of them. The fifth compartment belongs to Donald Braun.";
  document.getElementById("hintSPO03_1_3_container").style.display = "block";
};

function hintPthreeSPO03_1_3show() {
  document.getElementById("hintPthreeSPO03_1_3Answer").innerHTML = "What did Kate say about Donald Braun? Can you connect this nickname he has for her to something you see on the table?";
  document.getElementById("hintSPO03_1_4_container").style.display = "block";
};

function hintPthreeSPO03_1_4show() {
  document.getElementById("hintPthreeSPO03_1_4Answer").innerHTML = "Take a look at the periodic table of elements. The nickname is connected to it.";
  document.getElementById("hintSPO03_1_5_container").style.display = "block";
};

function hintPthreeSPO03_1_5show() {
  document.getElementById("hintPthreeSPO03_1_5Answer").innerHTML = "20 is the atomic number of Ca, 86 is the atomic number of Rn, and 68 it the atomic number of Er. What could Donald Braun's locker combination be?";
  document.getElementById("hintSPO03_1_6_container").style.display = "block";
};

function hintPthreeSPO03_1_6show() {
  document.getElementById("hintPthreeSPO03_1_6Answer").innerHTML = "The combination for Donald Braun's locker compartment is 35797, made of atomic numbers of Br, Au and N.";
  document.getElementById("hintSPO03_1_7_container").style.display = "block";
};

function hintPthreeSPO03_1_7show() {
  document.getElementById("hintPthreeSPO03_1_7Answer").innerHTML = "There is only one person that nobody would suspect opening the locker compartment of Donald Braun.";
  document.getElementById("hintSPO03_1_8_container").style.display = "block";
};

function hintPthreeSPO03_1_8show() {
  document.getElementById("hintPthreeSPO03_1_8Answer").innerHTML = "Take the appearance of Donald Braun with your ability and open his locker compartment.";
  document.getElementById("hintSPO03_1_9_container").style.display = "block";
};

function hintPthreeSPO04_1show() {
  document.getElementById("hintPthreeSPO04_1Answer").innerHTML = "The vision of the room as you see it through your mother's eyes is enough for you to figure out where is she. Take a look at the map.";
  document.getElementById("hintPthreeSPO04_2").style.display = "none";
  document.getElementById("hintSPO04_1_1_container").style.display = "block";
};

function hintPthreeSPO04_1_1show() {
  document.getElementById("hintPthreeSPO04_1_1Answer").innerHTML = "Lena is in the staff quarters, in the room with the door D18.";
  document.getElementById("hintSPO04_1_2_container").style.display = "block";
};

function hintPthreeSPO04_2show() {
  document.getElementById("hintPthreeSPO04_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPthreeSPO04_1").style.display = "none";
  document.getElementById("hintSPO04_2_1_container").style.display = "block";
};
