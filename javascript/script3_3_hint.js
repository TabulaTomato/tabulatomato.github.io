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
  document.getElementById("hint02_container").style.display = "none";
  document.getElementById("hint02_1_1_container").style.display = "none";
  document.getElementById("hint02_1_2_container").style.display = "none";
  document.getElementById("hint02_2_1_container").style.display = "none";
  document.getElementById("hint02_2_2_container").style.display = "none";
  document.getElementById("hint04_container").style.display = "none";
  document.getElementById("hint04_1_1_container").style.display = "none";
  document.getElementById("hint13_container").style.display = "none";
  document.getElementById("hint13_1_1_container").style.display = "none";
  document.getElementById("hint21_container").style.display = "none";
  document.getElementById("hint21_1_1_container").style.display = "none";
  document.getElementById("hint21_1_2_container").style.display = "none";
  document.getElementById("hint21_1_3_container").style.display = "none";
  document.getElementById("hint25_container").style.display = "none";
  document.getElementById("hint25_1_1_container").style.display = "none";
  document.getElementById("hint29_container").style.display = "none";
  document.getElementById("hint29_1_1_container").style.display = "none";
  document.getElementById("hint31_container").style.display = "none";
  document.getElementById("hint31_1_1_container").style.display = "none";
  document.getElementById("hint34_container").style.display = "none";
  document.getElementById("hint34_1_1_container").style.display = "none";
  document.getElementById("hint34_1_2_container").style.display = "none";
  document.getElementById("hint34_1_3_container").style.display = "none";
  document.getElementById("hint35_container").style.display = "none";
  document.getElementById("hint35_1_1_container").style.display = "none";
  document.getElementById("hint38_container").style.display = "none";
  document.getElementById("hint38_1_1_container").style.display = "none";
  document.getElementById("hintSPO07_container").style.display = "none";
  document.getElementById("hintSPO07_1_1_container").style.display = "none";
  document.getElementById("hintSPO07_1_2_container").style.display = "none";
  document.getElementById("hintSPO07_1_3_container").style.display = "none";
  document.getElementById("hintSPO07_1_4_container").style.display = "none";
}

function hintPthreeFunction() {
	var zhintlowercase = document.getElementById("hintPthreeText").value;
  var zhint = zhintlowercase.toUpperCase();
  var hintanswerthree;
  if (zhint == "01") {
  		hintanswerthree = "To hear Ziggy's thoughts on things, enter Ziggy's card number <b>01</b> followed by the card number of the object or character you want to hear her thoughts about in the Digital Game Book input field, separated by a comma.";
      hidePthreeHints();
  } else if (zhint == "02") {
  		hintanswerthree = "Have you opened LOC07?";
      hidePthreeHints();
      document.getElementById("hint02_container").style.display = "block";
      document.getElementById("hintPthree02_1").style.display = "block";
      document.getElementById("hintPthree02_2").style.display = "block";
  } else if (zhint == "04") {
  		hintanswerthree = "The bridge console has a face recognition system. Who is the captain of the Laki ship?";
      hidePthreeHints();
      document.getElementById("hint04_container").style.display = "block";
  } else if (zhint == "08") {
  		hintanswerthree = "To use this power, enter card number <b>08</b> followed by the card number of the plant or animal you want to use it on, separated by a comma.";
      hidePthreeHints();
  } else if (zhint == "13") {
  		hintanswerthree = "You have to get to the bridge to meet your mother. But you can't walk out of the CEO's office looking your usual self. Is there a way to find out where everybody is so that you can know whose appearance to take?";
      hidePthreeHints();
      document.getElementById("hint13_container").style.display = "block";
  } else if (zhint == "21") {
  		hintanswerthree = "You have to get to the bridge to meet your mother. But you can't walk out of the CEO's office looking your usual self. Is there a way to find out where everybody is so that you can know whose appearance to take?";
      hidePthreeHints();
      document.getElementById("hint21_container").style.display = "block";
  } else if (zhint == "23") {
  		hintanswerthree = "To ask somebody about your mother, input their card number into the Digital Game Book input field, followed by Lena's card number <b>23</b>, separated by a comma.";
      hidePthreeHints();
  } else if (zhint == "25") {
  		hintanswerthree = "You have to get to the bridge to meet your mother. But you can't walk out of the CEO's office looking your usual self. Is there a way to find out where everybody is so that you can know whose appearance to take?";
      hidePthreeHints();
      document.getElementById("hint25_container").style.display = "block";
  } else if (zhint == "26") {
  		hintanswerthree = "To use this power, enter card number <b>26</b> followed by the card number of the person you want to take the appearance of, separated by a comma.";
      hidePthreeHints();
  } else if (zhint == "29") {
  		hintanswerthree = "You have to get to the bridge to meet your mother. But you can't walk out of the CEO's office looking your usual self. Is there a way to find out where everybody is so that you can know whose appearance to take?";
      hidePthreeHints();
      document.getElementById("hint29_container").style.display = "block";
  } else if (zhint == "31") {
  		hintanswerthree = "You have to get to the bridge to meet your mother. But you can't walk out of the CEO's office looking your usual self. Is there a way to find out where everybody is so that you can know whose appearance to take?";
      hidePthreeHints();
      document.getElementById("hint31_container").style.display = "block";
  } else if (zhint == "33") {
  		hintanswerthree = "Now that you've finally found your mother, we can't give a hint, but rather a big applause!";
      hidePthreeHints();
  } else if (zhint == "34") {
  		hintanswerthree = "You have to get to the bridge to meet your mother. But you can't walk out of the CEO's office looking your usual self. Is there a way to find out where everybody is so that you can know whose appearance to take?";
      hidePthreeHints();
      document.getElementById("hint34_container").style.display = "block";
  } else if (zhint == "35") {
  		hintanswerthree = "We're sure your father would like to explain what happened to him.";
      hidePthreeHints();
      document.getElementById("hint35_container").style.display = "block";
  } else if (zhint == "37") {
  		hintanswerthree = "To use this power, enter card number <b>37</b> followed by the card number of the person whose eyes you want to see through, separated by a comma.";
      hidePthreeHints();
  } else if (zhint == "38") {
  		hintanswerthree = "You have to get to the bridge to meet your mother. But you can't walk out of the CEO's office looking your usual self. Is there a way to find out where everybody is so that you can know whose appearance to take?";
      hidePthreeHints();
      document.getElementById("hint38_container").style.display = "block";
  } else if (zhint == "40") {
  		hintanswerthree = "You are not supposed to use this card yet.";
      hidePthreeHints();
  } else if (zhint == "SPO07") {
  		hintanswerthree = "What are wormholes? What in the explanation you were given by the Nahukat mothership could you apply on your space map?";
      hidePthreeHints();
      document.getElementById("hintSPO07_container").style.display = "block";
	} else {
  		hintanswerthree = "A card with this number doesn't exist. Try something else.";
      hidePthreeHints();
  }
  	document.getElementById("hintPthreeAnswer").innerHTML = hintanswerthree;
};

function hintPthree02_1show() {
  document.getElementById("hintPthree02_1Answer").innerHTML = "You have to get to the bridge to meet your mother. But you can't walk out of the CEO's office looking your usual self. Is there a way to find out where everybody is so that you can know whose appearance to take?";
  document.getElementById("hintPthree02_2").style.display = "none";
  document.getElementById("hint02_1_1_container").style.display = "block";
};

function hintPthree02_1_1show() {
  document.getElementById("hintPthree02_1_1Answer").innerHTML = "Use your ability to see through someone's eyes on the Lakis. That way you can position all of them on the map, see whose appearance to take and find a safe path to the bridge.";
  document.getElementById("hint02_1_2_container").style.display = "block";
};

function hintPthree02_2show() {
  document.getElementById("hintPthree02_2Answer").innerHTML = "The bridge console has a face recognition system. Who is the captain of the Laki ship?";
  document.getElementById("hintPthree02_1").style.display = "none";
  document.getElementById("hint02_2_1_container").style.display = "block";
};

function hintPthree02_2_1show() {
  document.getElementById("hintPthree02_2_1Answer").innerHTML = "Take the appearance of the CEO Timothy Pear to be able to control the ship.";
  document.getElementById("hint02_2_2_container").style.display = "block";
};

function hintPthree04_1show() {
  document.getElementById("hintPthree04_1Answer").innerHTML = "Take the appearance of the CEO Timothy Pear to be able to control the ship.";
  document.getElementById("hint04_1_1_container").style.display = "block";
};

function hintPthree13_1show() {
  document.getElementById("hintPthree13_1Answer").innerHTML = "Use your ability to see through someone's eyes on the Lakis. That way you can position all of them on the map, see whose appearance to take and find a safe path to the bridge.";
  document.getElementById("hint13_1_1_container").style.display = "block";
};

function hintPthree21_1show() {
  document.getElementById("hintPthree21_1Answer").innerHTML = "Use your ability to see through someone's eyes on the Lakis. That way you can position all of them on the map, see whose appearance to take and find a safe path to the bridge.";
  document.getElementById("hint21_1_1_container").style.display = "block";
};

function hintPthree21_1_1show() {
  document.getElementById("hintPthree21_1_1Answer").innerHTML = "Celia Gibbs is in the corridor left to the security control room. This means that you can safely take her form to pass the entrance hall and the common area.";
  document.getElementById("hint21_1_2_container").style.display = "block";
};

function hintPthree21_1_2show() {
  document.getElementById("hintPthree21_1_2Answer").innerHTML = "Take the path through the corridor right from the security control room. This way you will not pass next to Celia Gibbs on your way to the bridge.";
  document.getElementById("hint21_1_3_container").style.display = "block";
};

function hintPthree25_1show() {
  document.getElementById("hintPthree25_1Answer").innerHTML = "Use your ability to see through someone's eyes on the Lakis. That way you can position all of them on the map, see whose appearance to take and find a safe path to the bridge.";
  document.getElementById("hint25_1_1_container").style.display = "block";
};

function hintPthree29_1show() {
  document.getElementById("hintPthree29_1Answer").innerHTML = "Use your ability to see through someone's eyes on the Lakis. That way you can position all of them on the map, see whose appearance to take and find a safe path to the bridge.";
  document.getElementById("hint29_1_1_container").style.display = "block";
};

function hintPthree31_1show() {
  document.getElementById("hintPthree31_1Answer").innerHTML = "Use your ability to see through someone's eyes on the Lakis. That way you can position all of them on the map, see whose appearance to take and find a safe path to the bridge.";
  document.getElementById("hint31_1_1_container").style.display = "block";
};

function hintPthree34_1show() {
  document.getElementById("hintPthree34_1Answer").innerHTML = "Use your ability to see through someone's eyes on the Lakis. That way you can position all of them on the map, see whose appearance to take and find a safe path to the bridge.";
  document.getElementById("hint34_1_1_container").style.display = "block";
};

function hintPthree34_1_1show() {
  document.getElementById("hintPthree34_1_1Answer").innerHTML = "Kate Carner is in the corridor left to the security control room. This means that you can safely take her form to pass the entrance hall and the common area.";
  document.getElementById("hint34_1_2_container").style.display = "block";
};

function hintPthree34_1_2show() {
  document.getElementById("hintPthree34_1_2Answer").innerHTML = "Take the path through the corridor right from the security control room. This way you will not pass next to Kate Carner on your way to the bridge.";
  document.getElementById("hint34_1_3_container").style.display = "block";
};

function hintPthree35_1show() {
  document.getElementById("hintPthree35_1Answer").innerHTML = "Ask your father to speak about himself.";
  document.getElementById("hint35_1_1_container").style.display = "block";
};

function hintPthree38_1show() {
  document.getElementById("hintPthree38_1Answer").innerHTML = "Use your ability to see through someone's eyes on the Lakis. That way you can position all of them on the map, see whose appearance to take and find a safe path to the bridge.";
  document.getElementById("hint38_1_1_container").style.display = "block";
};

function hintPthreeSPO07_1show() {
  document.getElementById("hintPthreeSPO07_1Answer").innerHTML = "Wormholes make the space-time bend. It's hard to imagine a 3D space bending, but bending a 2D surface is a piece of cake.";
  document.getElementById("hintSPO07_1_1_container").style.display = "block";
};

function hintPthreeSPO07_1_1show() {
  document.getElementById("hintPthreeSPO07_1_1Answer").innerHTML = "If two wormhole mouths would get on top of each other on the space map, what would happen to the map? And what is the significance of the three colors on the map?";
  document.getElementById("hintSPO07_1_2_container").style.display = "block";
};

function hintPthreeSPO07_1_2show() {
  document.getElementById("hintPthreeSPO07_1_2Answer").innerHTML = "If you put Lorentz mouth on top of Ellis mouth and fold the map, you should see the blue lines on the map form coordinates. Repeat this for the other two travels.";
  document.getElementById("hintSPO07_1_3_container").style.display = "block";
};

function hintPthreeSPO07_1_3show() {
  document.getElementById("hintPthreeSPO07_1_3Answer").innerHTML = "The coordinates to go from Lorentz to Ellis are 2783. The coordinates to go from Ellis to Visser are 1370. The coordinates to go from Visser to Lazarus black hole are 4163.";
  document.getElementById("hintSPO07_1_4_container").style.display = "block";
};
