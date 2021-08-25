function hintPtwoKeyPress(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("hintPtwoButton").click();
        return false;
    }
    return true;
};

function hidePtwoHints() {
  document.getElementById("hint02_container").style.display = "none";
  document.getElementById("hint02_1_1_container").style.display = "none";
  document.getElementById("hint02_1_2_container").style.display = "none";
  document.getElementById("hint02_1_3_container").style.display = "none";
  document.getElementById("hint02_2_1_container").style.display = "none";
  document.getElementById("hint02_2_2_container").style.display = "none";
  document.getElementById("hint02_2_3_container").style.display = "none";
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
  document.getElementById("hint06_container").style.display = "none";
  document.getElementById("hint06_1_1_container").style.display = "none";
  document.getElementById("hint06_1_2_container").style.display = "none";
  document.getElementById("hint06_2_1_container").style.display = "none";
  document.getElementById("hint07_container").style.display = "none";
  document.getElementById("hint07_1_1_container").style.display = "none";
  document.getElementById("hint07_1_2_container").style.display = "none";
  document.getElementById("hint07_1_3_container").style.display = "none";
  document.getElementById("hint07_1_4_container").style.display = "none";
  document.getElementById("hint07_2_1_container").style.display = "none";
  document.getElementById("hint09_container").style.display = "none";
  document.getElementById("hint09_1_1_container").style.display = "none";
  document.getElementById("hint09_1_2_container").style.display = "none";
  document.getElementById("hint10_container").style.display = "none";
  document.getElementById("hint10_1_1_container").style.display = "none";
  document.getElementById("hint11_container").style.display = "none";
  document.getElementById("hint11_1_1_container").style.display = "none";
  document.getElementById("hint12_container").style.display = "none";
  document.getElementById("hint12_1_1_container").style.display = "none";
  document.getElementById("hint13_container").style.display = "none";
  document.getElementById("hint13_1_1_container").style.display = "none";
  document.getElementById("hint13_1_2_container").style.display = "none";
  document.getElementById("hint13_1_3_container").style.display = "none";
  document.getElementById("hint13_2_1_container").style.display = "none";
  document.getElementById("hint13_2_2_container").style.display = "none";
  document.getElementById("hint13_3_1_container").style.display = "none";
  document.getElementById("hint13_3_2_container").style.display = "none";
  document.getElementById("hint13_3_3_container").style.display = "none";
  document.getElementById("hint13_4_1_container").style.display = "none";
  document.getElementById("hint13_4_2_container").style.display = "none";
  document.getElementById("hint14_container").style.display = "none";
  document.getElementById("hint14_1_1_container").style.display = "none";
  document.getElementById("hint14_1_2_container").style.display = "none";
  document.getElementById("hint14_2_1_container").style.display = "none";
  document.getElementById("hint15_container").style.display = "none";
  document.getElementById("hint15_1_1_container").style.display = "none";
  document.getElementById("hint16_container").style.display = "none";
  document.getElementById("hint16_1_1_container").style.display = "none";
  document.getElementById("hint17_container").style.display = "none";
  document.getElementById("hint17_1_1_container").style.display = "none";
  document.getElementById("hint17_1_2_container").style.display = "none";
  document.getElementById("hint17_2_1_container").style.display = "none";
  document.getElementById("hint18_container").style.display = "none";
  document.getElementById("hint18_1_1_container").style.display = "none";
  document.getElementById("hint19_container").style.display = "none";
  document.getElementById("hint19_1_1_container").style.display = "none";
  document.getElementById("hint19_1_2_container").style.display = "none";
  document.getElementById("hint19_2_1_container").style.display = "none";
  document.getElementById("hint20_container").style.display = "none";
  document.getElementById("hint20_1_1_container").style.display = "none";
  document.getElementById("hint20_1_2_container").style.display = "none";
  document.getElementById("hint20_1_3_container").style.display = "none";
  document.getElementById("hint20_2_1_container").style.display = "none";
  document.getElementById("hint20_2_2_container").style.display = "none";
  document.getElementById("hint20_2_3_container").style.display = "none";
  document.getElementById("hint21_container").style.display = "none";
  document.getElementById("hint21_1_1_container").style.display = "none";
  document.getElementById("hint22_container").style.display = "none";
  document.getElementById("hint22_1_1_container").style.display = "none";
  document.getElementById("hint22_1_2_container").style.display = "none";
  document.getElementById("hint22_1_3_container").style.display = "none";
  document.getElementById("hint22_2_1_container").style.display = "none";
  document.getElementById("hint23_container").style.display = "none";
  document.getElementById("hint23_1_1_container").style.display = "none";
  document.getElementById("hint23_1_2_container").style.display = "none";
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
  document.getElementById("hint27_container").style.display = "none";
  document.getElementById("hint27_1_1_container").style.display = "none";
  document.getElementById("hint27_1_2_container").style.display = "none";
  document.getElementById("hint27_2_1_container").style.display = "none";
  document.getElementById("hint28_container").style.display = "none";
  document.getElementById("hint28_1_1_container").style.display = "none";
  document.getElementById("hint29_container").style.display = "none";
  document.getElementById("hint29_1_1_container").style.display = "none";
  document.getElementById("hint30_container").style.display = "none";
  document.getElementById("hint30_1_1_container").style.display = "none";
  document.getElementById("hint30_1_2_container").style.display = "none";
  document.getElementById("hint30_1_3_container").style.display = "none";
  document.getElementById("hint31_container").style.display = "none";
  document.getElementById("hint31_1_1_container").style.display = "none";
  document.getElementById("hint32_container").style.display = "none";
  document.getElementById("hint32_1_1_container").style.display = "none";
  document.getElementById("hint33_container").style.display = "none";
  document.getElementById("hint33_1_1_container").style.display = "none";
  document.getElementById("hint33_1_2_container").style.display = "none";
  document.getElementById("hint33_2_1_container").style.display = "none";
  document.getElementById("hint33_2_2_container").style.display = "none";
  document.getElementById("hint33_2_3_container").style.display = "none";
  document.getElementById("hint34_container").style.display = "none";
  document.getElementById("hint34_1_1_container").style.display = "none";
  document.getElementById("hint34_1_2_container").style.display = "none";
  document.getElementById("hint34_2_1_container").style.display = "none";
  document.getElementById("hint34_2_2_container").style.display = "none";
  document.getElementById("hint34_2_3_container").style.display = "none";
  document.getElementById("hint35_container").style.display = "none";
  document.getElementById("hint35_1_1_container").style.display = "none";
  document.getElementById("hint36_container").style.display = "none";
  document.getElementById("hint36_1_1_container").style.display = "none";
  document.getElementById("hint37_container").style.display = "none";
  document.getElementById("hint37_1_1_container").style.display = "none";
  document.getElementById("hint38_container").style.display = "none";
  document.getElementById("hint38_1_1_container").style.display = "none";
  document.getElementById("hint38_1_2_container").style.display = "none";
  document.getElementById("hint38_1_3_container").style.display = "none";
  document.getElementById("hint38_2_1_container").style.display = "none";
  document.getElementById("hint38_2_2_container").style.display = "none";
  document.getElementById("hint39_container").style.display = "none";
  document.getElementById("hint39_1_1_container").style.display = "none";
  document.getElementById("hint39_1_2_container").style.display = "none";
  document.getElementById("hint39_2_1_container").style.display = "none";
  document.getElementById("hint40_container").style.display = "none";
  document.getElementById("hint40_1_1_container").style.display = "none";
  document.getElementById("hint40_1_2_container").style.display = "none";
  document.getElementById("hint40_2_1_container").style.display = "none";
  document.getElementById("hint41_container").style.display = "none";
  document.getElementById("hint41_1_1_container").style.display = "none";
  document.getElementById("hint41_1_2_container").style.display = "none";
  document.getElementById("hint41_2_1_container").style.display = "none";
  document.getElementById("hint41_2_2_container").style.display = "none";
  document.getElementById("hint41_3_1_container").style.display = "none";
  document.getElementById("hint41_3_2_container").style.display = "none";
  document.getElementById("hint41_3_3_container").style.display = "none";
  document.getElementById("hint41_3_4_container").style.display = "none";
  document.getElementById("hint42_container").style.display = "none";
  document.getElementById("hint42_1_1_container").style.display = "none";
  document.getElementById("hint42_2_1_container").style.display = "none";
  document.getElementById("hint42_2_2_container").style.display = "none";
  document.getElementById("hint42_2_3_container").style.display = "none";
  document.getElementById("hint42_2_4_container").style.display = "none";
  document.getElementById("hint42_3_1_container").style.display = "none";
  document.getElementById("hint42_3_2_container").style.display = "none";
  document.getElementById("hint42_3_3_container").style.display = "none";
  document.getElementById("hint42_3_4_container").style.display = "none";
  document.getElementById("hint43_container").style.display = "none";
  document.getElementById("hint43_1_1_container").style.display = "none";
  document.getElementById("hint44_container").style.display = "none";
  document.getElementById("hint44_1_1_container").style.display = "none";
  document.getElementById("hint45_container").style.display = "none";
  document.getElementById("hint45_1_1_container").style.display = "none";
  document.getElementById("hint46_container").style.display = "none";
  document.getElementById("hint46_1_1_container").style.display = "none";
  document.getElementById("hint46_1_2_container").style.display = "none";
  document.getElementById("hint46_1_3_container").style.display = "none";
  document.getElementById("hint46_2_1_container").style.display = "none";
  document.getElementById("hint47_container").style.display = "none";
  document.getElementById("hint47_1_1_container").style.display = "none";
  document.getElementById("hint48_container").style.display = "none";
  document.getElementById("hint48_1_1_container").style.display = "none";
  document.getElementById("hint48_1_2_container").style.display = "none";
  document.getElementById("hint48_2_1_container").style.display = "none";
  document.getElementById("hint49_container").style.display = "none";
  document.getElementById("hint49_1_1_container").style.display = "none";
  document.getElementById("hint49_1_2_container").style.display = "none";
  document.getElementById("hint50_container").style.display = "none";
  document.getElementById("hint50_1_1_container").style.display = "none";
  document.getElementById("hint50_1_2_container").style.display = "none";
  document.getElementById("hint50_1_3_container").style.display = "none";
  document.getElementById("hint50_2_1_container").style.display = "none";
  document.getElementById("hint51_container").style.display = "none";
  document.getElementById("hint51_1_1_container").style.display = "none";
  document.getElementById("hint52_container").style.display = "none";
  document.getElementById("hint52_1_1_container").style.display = "none";
  document.getElementById("hint52_1_2_container").style.display = "none";
  document.getElementById("hint52_1_3_container").style.display = "none";
  document.getElementById("hint52_2_1_container").style.display = "none";
  document.getElementById("hint53_container").style.display = "none";
  document.getElementById("hint53_1_1_container").style.display = "none";
  document.getElementById("hint53_2_1_container").style.display = "none";
  document.getElementById("hint53_2_2_container").style.display = "none";
  document.getElementById("hint53_2_3_container").style.display = "none";
  document.getElementById("hint53_2_4_container").style.display = "none";
  document.getElementById("hint53_3_1_container").style.display = "none";
  document.getElementById("hint53_3_2_container").style.display = "none";
  document.getElementById("hint53_3_3_container").style.display = "none";
  document.getElementById("hint53_3_4_container").style.display = "none";
  document.getElementById("hint54_container").style.display = "none";
  document.getElementById("hint54_1_1_container").style.display = "none";
  document.getElementById("hint54_1_2_container").style.display = "none";
  document.getElementById("hint54_1_3_container").style.display = "none";
  document.getElementById("hint54_1_4_container").style.display = "none";
  document.getElementById("hint54_2_1_container").style.display = "none";
  document.getElementById("hint54_2_2_container").style.display = "none";
  document.getElementById("hint54_2_3_container").style.display = "none";
  document.getElementById("hint54_3_1_container").style.display = "none";
  document.getElementById("hint54_3_2_container").style.display = "none";
  document.getElementById("hint55_container").style.display = "none";
  document.getElementById("hint55_1_1_container").style.display = "none";
  document.getElementById("hint55_1_2_container").style.display = "none";
  document.getElementById("hint55_2_1_container").style.display = "none";
  document.getElementById("hint56_container").style.display = "none";
  document.getElementById("hint56_1_1_container").style.display = "none";
  document.getElementById("hint57_container").style.display = "none";
  document.getElementById("hint57_1_1_container").style.display = "none";
  document.getElementById("hintSPO01_container").style.display = "none";
  document.getElementById("hintSPO01_1_1_container").style.display = "none";
  document.getElementById("hintSPO01_1_2_container").style.display = "none";
  document.getElementById("hintSPO02_container").style.display = "none";
  document.getElementById("hintSPO02_1_1_container").style.display = "none";
  document.getElementById("hintSPO03_container").style.display = "none";
  document.getElementById("hintSPO03_1_1_container").style.display = "none";
  document.getElementById("hintSPO04_container").style.display = "none";
  document.getElementById("hintSPO04_1_1_container").style.display = "none";
  document.getElementById("hintSPO05_container").style.display = "none";
  document.getElementById("hintSPO05_1_1_container").style.display = "none";
  document.getElementById("hintSPO06_container").style.display = "none";
  document.getElementById("hintSPO06_1_1_container").style.display = "none";
}

function hintPtwoFunction() {
	var yhintlowercase = document.getElementById("hintPtwoText").value;
  var yhint = yhintlowercase.toUpperCase();
  var hintanswertwo;
  if (yhint == "01") {
  		hintanswertwo = "To hear Ziggy's thoughts on things, enter Ziggy's card number <b>01</b> followed by the card number of the object or character you want to hear her thoughts about in the Digital Game Book input field, separated by a comma.";
      hidePtwoHints();
  } else if (yhint == "02") {
  		hintanswertwo = "Did you open LOC06?";
      hidePtwoHints();
      document.getElementById("hint02_container").style.display = "block";
      document.getElementById("hintPtwo02_1").style.display = "block";
      document.getElementById("hintPtwo02_2").style.display = "block";
  } else if (yhint == "03") {
  		hintanswertwo = "Do you have character/object card 09?";
      hidePtwoHints();
      document.getElementById("hint03_container").style.display = "block";
      document.getElementById("hintPtwo03_1").style.display = "block";
      document.getElementById("hintPtwo03_2").style.display = "block";
  } else if (yhint == "04") {
  		hintanswertwo = "The camera is to high for you to reach it. Is there a way you could make the tree help you in your task?";
      hidePtwoHints();
      document.getElementById("hint04_container").style.display = "block";
  } else if (yhint == "05") {
  		hintanswertwo = "The mayor said that he isn't taking any visits. Is there somebody that he would make an exception for?";
      hidePtwoHints();
      document.getElementById("hint05_container").style.display = "block";
  } else if (yhint == "06") {
  		hintanswertwo = "Have you talked to the mayor?";
      hidePtwoHints();
      document.getElementById("hint06_container").style.display = "block";
      document.getElementById("hintPtwo06_1").style.display = "block";
      document.getElementById("hintPtwo06_2").style.display = "block";
  } else if (yhint == "07") {
  		hintanswertwo = "Do you have character/object card 41?";
      hidePtwoHints();
      document.getElementById("hint07_container").style.display = "block";
      document.getElementById("hintPtwo07_1").style.display = "block";
      document.getElementById("hintPtwo07_2").style.display = "block";
  } else if (yhint == "08") {
  		hintanswertwo = "To use this power, enter card number <b>08</b> followed by the card number of the plant or animal you want to use it on, separated by a comma.";
      hidePtwoHints();
  } else if (yhint == "09") {
  		hintanswertwo = "Dr Turner said that he will go to the PEI base after he finished his visit to the hospital. Maybe there is a way to follow his car.";
      hidePtwoHints();
      document.getElementById("hint09_container").style.display = "block";
  } else if (yhint == "10") {
  		hintanswertwo = "You need a swipe pattern to unlock the tablet. How could you discover this pattern with the objects you have?";
      hidePtwoHints();
      document.getElementById("hint10_container").style.display = "block";
  } else if (yhint == "11") {
  		hintanswertwo = "Dr Rose should know things about hospital staff.";
      hidePtwoHints();
      document.getElementById("hint11_container").style.display = "block";
  } else if (yhint == "12") {
  		hintanswertwo = "What objects you have could you use to climb down the hospital window?";
      hidePtwoHints();
      document.getElementById("hint12_container").style.display = "block";
  } else if (yhint == "13") {
  		hintanswertwo = "Click on a button depending on which locations you've opened.";
      hidePtwoHints();
      document.getElementById("hint13_container").style.display = "block";
      document.getElementById("hintPtwo13_1").style.display = "block";
      document.getElementById("hintPtwo13_2").style.display = "block";
      document.getElementById("hintPtwo13_3").style.display = "block";
      document.getElementById("hintPtwo13_4").style.display = "block";
  } else if (yhint == "14") {
  		hintanswertwo = "Have you already used the white powder with brush?";
      hidePtwoHints();
      document.getElementById("hint14_container").style.display = "block";
      document.getElementById("hintPtwo14_1").style.display = "block";
      document.getElementById("hintPtwo14_2").style.display = "block";
  } else if (yhint == "15") {
  		hintanswertwo = "There is something in your possesion that can 'bring the dead back to life'.";
      hidePtwoHints();
      document.getElementById("hint15_container").style.display = "block";
  } else if (yhint == "16") {
  		hintanswertwo = "Dr Rose can examine the drug. Find the hospital on the Starchester map and enter the address in the Digital Game Book input field.";
      hidePtwoHints();
      document.getElementById("hint16_container").style.display = "block";
  } else if (yhint == "17") {
  		hintanswertwo = "Have you opened LOC08?";
      hidePtwoHints();
      document.getElementById("hint17_container").style.display = "block";
      document.getElementById("hintPtwo17_1").style.display = "block";
      document.getElementById("hintPtwo17_2").style.display = "block";
  } else if (yhint == "18") {
  		hintanswertwo = "Talk to professor Martin to find out what happened to him.";
      hidePtwoHints();
      document.getElementById("hint18_container").style.display = "block";
  } else if (yhint == "19") {
  		hintanswertwo = "Have you opened LOC03?";
      hidePtwoHints();
      document.getElementById("hint19_container").style.display = "block";
      document.getElementById("hintPtwo19_1").style.display = "block";
      document.getElementById("hintPtwo19_2").style.display = "block";
  } else if (yhint == "20") {
  		hintanswertwo = "Did you open LOC06?";
      hidePtwoHints();
      document.getElementById("hint20_container").style.display = "block";
      document.getElementById("hintPtwo20_1").style.display = "block";
      document.getElementById("hintPtwo20_2").style.display = "block";
  } else if (yhint == "21") {
  		hintanswertwo = "The newspaper has indentations on the second page. Can you do something to make them more visible?";
      hidePtwoHints();
      document.getElementById("hint18_container").style.display = "block";
  } else if (yhint == "22") {
  		hintanswertwo = "Have you opened LOC10?";
      hidePtwoHints();
      document.getElementById("hint22_container").style.display = "block";
      document.getElementById("hintPtwo22_1").style.display = "block";
      document.getElementById("hintPtwo22_2").style.display = "block";
  } else if (yhint == "23") {
  		hintanswertwo = "Click on a button depending on which locations you've opened.";
      hidePtwoHints();
      document.getElementById("hint23_container").style.display = "block";
      document.getElementById("hintPtwo23_1").style.display = "block";
      document.getElementById("hintPtwo23_2").style.display = "block";
      document.getElementById("hintPtwo23_3").style.display = "block";
  } else if (yhint == "24") {
  		hintanswertwo = "Do you have character/object card 12?";
      hidePtwoHints();
      document.getElementById("hint24_container").style.display = "block";
      document.getElementById("hintPtwo24_1").style.display = "block";
      document.getElementById("hintPtwo24_2").style.display = "block";
  } else if (yhint == "25") {
  		hintanswertwo = "Alison Clarke had a meeting with Lena in the hotel. What was it about?";
      hidePtwoHints();
      document.getElementById("hint25_container").style.display = "block";
  } else if (yhint == "26") {
  		hintanswertwo = "To use this power, enter card number <b>26</b> followed by the card number of the person you want to take the appearance of, separated by a comma.";
      hidePtwoHints();
  } else if (yhint == "27") {
  		hintanswertwo = "Have you opened LOC09?";
      hidePtwoHints();
      document.getElementById("hint27_container").style.display = "block";
      document.getElementById("hintPtwo27_1").style.display = "block";
      document.getElementById("hintPtwo27_2").style.display = "block";
  } else if (yhint == "28") {
  		hintanswertwo = "You should disguise to enter the PEI base.";
      hidePtwoHints();
      document.getElementById("hint28_container").style.display = "block";
  } else if (yhint == "29") {
  		hintanswertwo = "You should disguise to enter the PEI base.";
      hidePtwoHints();
      document.getElementById("hint29_container").style.display = "block";
  } else if (yhint == "30") {
  		hintanswertwo = "Ron is a good source of information about people in Starchester.";
      hidePtwoHints();
      document.getElementById("hint30_container").style.display = "block";
  } else if (yhint == "31") {
  		hintanswertwo = "Maybe the mime artist saw the unknown man passing by. How could you make him talk?";
      hidePtwoHints();
      document.getElementById("hint31_container").style.display = "block";
  } else if (yhint == "32") {
  		hintanswertwo = "The camera is too high for you to reach it. Is there anything you could do to make it easier for you to climb the tree?";
      hidePtwoHints();
      document.getElementById("hint32_container").style.display = "block";
  } else if (yhint == "33") {
  		hintanswertwo = "Have you opened LOC07?";
      hidePtwoHints();
      document.getElementById("hint33_container").style.display = "block";
      document.getElementById("hintPtwo33_1").style.display = "block";
      document.getElementById("hintPtwo33_2").style.display = "block";
  } else if (yhint == "34") {
  		hintanswertwo = "Click on a button depending on which character/object cards you have.";
      hidePtwoHints();
      document.getElementById("hint34_container").style.display = "block";
      document.getElementById("hintPtwo34_1").style.display = "block";
      document.getElementById("hintPtwo34_2").style.display = "block";
  } else if (yhint == "35") {
  		hintanswertwo = "Jena Kane is hidden in the secret ward of Starcherster hospital. She probably knows something about it.";
      hidePtwoHints();
      document.getElementById("hint35_container").style.display = "block";
  } else if (yhint == "36") {
  		hintanswertwo = "Is there something you can do to make the cat more collaborative?";
      hidePtwoHints();
      document.getElementById("hint36_container").style.display = "block";
  } else if (yhint == "37") {
  		hintanswertwo = "Is there something you have that you can use to see the content fo the microSD card?";
      hidePtwoHints();
      document.getElementById("hint37_container").style.display = "block";
  } else if (yhint == "38") {
  		hintanswertwo = "Do you have character/object card 46?";
      hidePtwoHints();
      document.getElementById("hint38_container").style.display = "block";
      document.getElementById("hintPtwo38_1").style.display = "block";
      document.getElementById("hintPtwo38_2").style.display = "block";
  } else if (yhint == "39") {
  		hintanswertwo = "Have you opened LOC10?";
      hidePtwoHints();
      document.getElementById("hint39_container").style.display = "block";
      document.getElementById("hintPtwo39_1").style.display = "block";
      document.getElementById("hintPtwo39_2").style.display = "block";
  } else if (yhint == "40") {
  		hintanswertwo = "Do you have character/object card 09?";
      hidePtwoHints();
      document.getElementById("hint40_container").style.display = "block";
      document.getElementById("hintPtwo40_1").style.display = "block";
      document.getElementById("hintPtwo40_2").style.display = "block";
  } else if (yhint == "41") {
  		hintanswertwo = "Click on a button depending on which action you want a hint for.";
      hidePtwoHints();
      document.getElementById("hint41_container").style.display = "block";
      document.getElementById("hintPtwo41_1").style.display = "block";
      document.getElementById("hintPtwo41_2").style.display = "block";
      document.getElementById("hintPtwo41_3").style.display = "block";
  } else if (yhint == "42") {
  		hintanswertwo = "Click on a button depending on your progress in the game.";
      hidePtwoHints();
      document.getElementById("hint42_container").style.display = "block";
      document.getElementById("hintPtwo42_1").style.display = "block";
      document.getElementById("hintPtwo42_2").style.display = "block";
      document.getElementById("hintPtwo42_3").style.display = "block";
  } else if (yhint == "43") {
  		hintanswertwo = "Could you do something to catch the mime artist's attention?";
      hidePtwoHints();
      document.getElementById("hint43_container").style.display = "block";
  } else if (yhint == "44") {
  		hintanswertwo = "Simply write the swipe pattern sequence following the lock card number in the Digital Game Book input field, separated by a comma.";
      hidePtwoHints();
      document.getElementById("hint44_container").style.display = "block";
  } else if (yhint == "45") {
  		hintanswertwo = "What could mayor have to say? You should start a conversation with him.";
      hidePtwoHints();
      document.getElementById("hint45_container").style.display = "block";
  } else if (yhint == "46") {
  		hintanswertwo = "Have you opened LOC02?";
      hidePtwoHints();
      document.getElementById("hint46_container").style.display = "block";
      document.getElementById("hintPtwo46_1").style.display = "block";
      document.getElementById("hintPtwo46_2").style.display = "block";
  } else if (yhint == "47") {
  		hintanswertwo = "Is there a possibility that the mime artist had seen something on the street?";
      hidePtwoHints();
      document.getElementById("hint47_container").style.display = "block";
  } else if (yhint == "48") {
  		hintanswertwo = "Did you open LOC06?";
      hidePtwoHints();
      document.getElementById("hint48_container").style.display = "block";
      document.getElementById("hintPtwo48_1").style.display = "block";
      document.getElementById("hintPtwo48_2").style.display = "block";
  } else if (yhint == "49") {
  		hintanswertwo = "What if you would put another perspective on nurse Barbara's arm?";
      hidePtwoHints();
      document.getElementById("hint49_container").style.display = "block";
  } else if (yhint == "50") {
  		hintanswertwo = "Do you have character/object card 12?";
      hidePtwoHints();
      document.getElementById("hint50_container").style.display = "block";
      document.getElementById("hintPtwo50_1").style.display = "block";
      document.getElementById("hintPtwo50_2").style.display = "block";
  } else if (yhint == "51") {
  		hintanswertwo = "Is there anything around you you could use the pencil on?";
      hidePtwoHints();
      document.getElementById("hint51_container").style.display = "block";
  } else if (yhint == "52") {
  		hintanswertwo = "Have you opened LOC10?";
      hidePtwoHints();
      document.getElementById("hint52_container").style.display = "block";
      document.getElementById("hintPtwo52_1").style.display = "block";
      document.getElementById("hintPtwo52_2").style.display = "block";
  } else if (yhint == "53") {
  		hintanswertwo = "Click on a button depending on your progress in the game.";
      hidePtwoHints();
      document.getElementById("hint53_container").style.display = "block";
      document.getElementById("hintPtwo53_1").style.display = "block";
      document.getElementById("hintPtwo53_2").style.display = "block";
      document.getElementById("hintPtwo53_3").style.display = "block";
  } else if (yhint == "54") {
  		hintanswertwo = "Click on a button depending on your progress in the game.";
      hidePtwoHints();
      document.getElementById("hint54_container").style.display = "block";
      document.getElementById("hintPtwo54_1").style.display = "block";
      document.getElementById("hintPtwo54_2").style.display = "block";
      document.getElementById("hintPtwo54_3").style.display = "block";
  } else if (yhint == "55") {
  		hintanswertwo = "Do you have character/object card 12?";
      hidePtwoHints();
      document.getElementById("hint55_container").style.display = "block";
      document.getElementById("hintPtwo55_1").style.display = "block";
      document.getElementById("hintPtwo55_2").style.display = "block";
  } else if (yhint == "56") {
  		hintanswertwo = "Would it be useful to climb up the tree?";
      hidePtwoHints();
      document.getElementById("hint56_container").style.display = "block";
  } else if (yhint == "57") {
  		hintanswertwo = "Dr Rose works in the hospital. She could know about things that are happening around there.";
      hidePtwoHints();
      document.getElementById("hint57_container").style.display = "block";
  } else if (yhint == "SPO01") {
  		hintanswertwo = "Take a look at the metro map. Could the message that the unknown man wrote on the newspaper give directions for his movements?";
      hidePtwoHints();
      document.getElementById("hintSPO01_container").style.display = "block";
  } else if (yhint == "SPO02") {
  		hintanswertwo = "Take a look at the security camera footage. Where was the camera pointing to? Look at the Starchester map and compare it to the footage.";
      hidePtwoHints();
      document.getElementById("hintSPO02_container").style.display = "block";
  } else if (yhint == "SPO03") {
  		hintanswertwo = "Take a look at the security camera footage. Where was the camera pointing to? Look at the Starchester map and compare it to the footage.";
      hidePtwoHints();
      document.getElementById("hintSPO03_container").style.display = "block";
  } else if (yhint == "SPO04") {
  		hintanswertwo = "Take a look at the security camera footage. Where was the camera pointing to? Look at the Starchester map and compare it to the footage.";
      hidePtwoHints();
      document.getElementById("hintSPO04_container").style.display = "block";
  } else if (yhint == "SPO05") {
  		hintanswertwo = "The document could be readable with a little help of an external reading condition.";
      hidePtwoHints();
      document.getElementById("hintSPO05_container").style.display = "block";
  } else if (yhint == "SPO06") {
  		hintanswertwo = "The tracking system images show Dr Turner's car in different positions in the city. Place the images on the map to track Dr Turner's movements.";
      hidePtwoHints();
      document.getElementById("hintSPO06_container").style.display = "block";
	} else {
  		hintanswertwo = "A card with this number doesn't exist. Try something else.";
      hidePtwoHints();
  }
  	document.getElementById("hintPtwoAnswer").innerHTML = hintanswertwo;
};

function hintPtwo02_1show() {
  document.getElementById("hintPtwo02_1Answer").innerHTML = "There is somebody in the hospital that didn't have their lunch yet.";
  document.getElementById("hintPtwo02_2").style.display = "none";
  document.getElementById("hint02_1_1_container").style.display = "block";
};

function hintPtwo02_1_1show() {
  document.getElementById("hintPtwo02_1_1Answer").innerHTML = "Maybe nurse Barbara would take the burger if it was given by the right person.";
  document.getElementById("hint02_1_2_container").style.display = "block";
};

function hintPtwo02_1_2show() {
  document.getElementById("hintPtwo02_1_2Answer").innerHTML = "Take the appearance of the delivery guy and give the burger to nurse Barbara.";
  document.getElementById("hint02_1_3_container").style.display = "block";
};

function hintPtwo02_2show() {
  document.getElementById("hintPtwo02_2Answer").innerHTML = "Take a look at your 'Note to yourself' list. Did you go to all the locations written on the list?";
  document.getElementById("hintPtwo02_1").style.display = "none";
  document.getElementById("hint02_2_1_container").style.display = "block";
};

function hintPtwo02_2_1show() {
  document.getElementById("hintPtwo02_2_1Answer").innerHTML = "Find the hospital on the Starchester map and enter the address in the Digital Game Book input field.";
  document.getElementById("hint02_2_2_container").style.display = "block";
};

function hintPtwo02_2_2show() {
  document.getElementById("hintPtwo02_2_2Answer").innerHTML = "Go to the address G54.";
  document.getElementById("hint02_2_3_container").style.display = "block";
};

function hintPtwo03_1show() {
  document.getElementById("hintPtwo03_1Answer").innerHTML = "Dr Turner said that he will go to the PEI base after he finished his visit to the hospital. Maybe there is a way to follow his car.";
  document.getElementById("hintPtwo03_2").style.display = "none";
  document.getElementById("hint03_1_1_container").style.display = "block";
};

function hintPtwo03_1_1show() {
  document.getElementById("hintPtwo03_1_1Answer").innerHTML = "Is there anything you have that could help you follow the car's movements?";
  document.getElementById("hint03_1_2_container").style.display = "block";
};

function hintPtwo03_1_2show() {
  document.getElementById("hintPtwo03_1_2Answer").innerHTML = "Put the duct tape on your phone, which has a GPS tracking system, and stick it to the car afterwards.";
  document.getElementById("hint03_1_3_container").style.display = "block";
};

function hintPtwo03_2show() {
  document.getElementById("hintPtwo03_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPtwo03_1").style.display = "none";
  document.getElementById("hint03_2_1_container").style.display = "block";
};

function hintPtwo04_1show() {
  document.getElementById("hintPtwo04_1Answer").innerHTML = "Use your power of connecting with plants and animals to make the tree help you.";
  document.getElementById("hint04_1_1_container").style.display = "block";
};

function hintPtwo05_1show() {
  document.getElementById("hintPtwo05_1Answer").innerHTML = "You know that the mayor collaborated with PEI. Is there somebody who you suspect could be working for them?";
  document.getElementById("hint05_1_1_container").style.display = "block";
};

function hintPtwo05_1_1show() {
  document.getElementById("hintPtwo05_1_1Answer").innerHTML = "Take the appearance of the unknown man and ask the security guard to see mayor Bundy.";
  document.getElementById("hint05_1_2_container").style.display = "block";
};

function hintPtwo06_1show() {
  document.getElementById("hintPtwo06_1Answer").innerHTML = "You need a swipe pattern to unlock the tablet. How could you discover this pattern with the objects you have?";
  document.getElementById("hintPtwo06_2").style.display = "none";
  document.getElementById("hint06_1_1_container").style.display = "block";
};

function hintPtwo06_1_1show() {
  document.getElementById("hintPtwo06_1_1Answer").innerHTML = "Use the white powder on the tablet. This will show the trace of the swipe pattern.";
  document.getElementById("hint06_1_2_container").style.display = "block";
};

function hintPtwo06_2show() {
  document.getElementById("hintPtwo06_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPtwo06_1").style.display = "none";
  document.getElementById("hint06_2_1_container").style.display = "block";
};

function hintPtwo07_1show() {
  document.getElementById("hintPtwo07_1Answer").innerHTML = "There is a character that can give useful information about people in this city. Ask them about Alison.";
  document.getElementById("hintPtwo07_2").style.display = "none";
  document.getElementById("hint07_1_1_container").style.display = "block";
};

function hintPtwo07_1_1show() {
  document.getElementById("hintPtwo07_1_1Answer").innerHTML = "Ron can dig up information about anybody. He could help you find Alison.";
  document.getElementById("hint07_1_2_container").style.display = "block";
};

function hintPtwo07_1_2show() {
  document.getElementById("hintPtwo07_1_2Answer").innerHTML = "You need to find the address of 'Under the Radar' magazine. What could 'Under the Radar' mean? Take a good look at Starchester map.";
  document.getElementById("hint07_1_3_container").style.display = "block";
};

function hintPtwo07_1_3show() {
  document.getElementById("hintPtwo07_1_3Answer").innerHTML = "There is a 'Starchester Weather Radar' on address H50. 'Under the Radar' is under it, on address H51.";
  document.getElementById("hint07_1_4_container").style.display = "block";
};

function hintPtwo07_2show() {
  document.getElementById("hintPtwo07_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPtwo07_1").style.display = "none";
  document.getElementById("hint07_2_1_container").style.display = "block";
};

function hintPtwo09_1show() {
  document.getElementById("hintPtwo09_1Answer").innerHTML = "Is there anything you have that could help you follow the car's movements?";
  document.getElementById("hint09_1_1_container").style.display = "block";
};

function hintPtwo09_1_1show() {
  document.getElementById("hintPtwo09_1_1Answer").innerHTML = "Put the duct tape on your phone, which has a GPS tracking system, and stick it to the car afterwards.";
  document.getElementById("hint09_1_2_container").style.display = "block";
};

function hintPtwo10_1show() {
  document.getElementById("hintPtwo10_1Answer").innerHTML = "Use the white powder on the tablet. This will show the trace of the swipe pattern.";
  document.getElementById("hint10_1_1_container").style.display = "block";
};

function hintPtwo11_1show() {
  document.getElementById("hintPtwo11_1Answer").innerHTML = "Ask Dr Rose about nurse Barbara.";
  document.getElementById("hint11_1_1_container").style.display = "block";
};

function hintPtwo12_1show() {
  document.getElementById("hintPtwo12_1Answer").innerHTML = "Use the rope on the IV stand top to make an anchor. Now you can use it to climb down the window.";
  document.getElementById("hint12_1_1_container").style.display = "block";
};

function hintPtwo13_1show() {
  document.getElementById("hintPtwo13_1Answer").innerHTML = "You should try to find more about the unknown man.";
  document.getElementById("hintPtwo13_2").style.display = "none";
  document.getElementById("hintPtwo13_3").style.display = "none";
  document.getElementById("hintPtwo13_4").style.display = "none";
  document.getElementById("hint13_1_1_container").style.display = "block";
};

function hintPtwo13_1_1show() {
  document.getElementById("hintPtwo13_1_1Answer").innerHTML = "Ask receptionist Nina about the unknown man. Pay attention to where did he go when he left the hotel.";
  document.getElementById("hint13_1_2_container").style.display = "block";
};

function hintPtwo13_1_2show() {
  document.getElementById("hintPtwo13_1_2Answer").innerHTML = "Follow the man to the nearest metro station. Go to the address M20.";
  document.getElementById("hint13_1_3_container").style.display = "block";
};

function hintPtwo13_2show() {
  document.getElementById("hintPtwo13_2Answer").innerHTML = "Maybe the mime artist saw the unknown man passing by. How could you make him talk?";
  document.getElementById("hintPtwo13_1").style.display = "none";
  document.getElementById("hintPtwo13_3").style.display = "none";
  document.getElementById("hintPtwo13_4").style.display = "none";
  document.getElementById("hint13_2_1_container").style.display = "block";
};

function hintPtwo13_2_1show() {
  document.getElementById("hintPtwo13_2_1Answer").innerHTML = "Put the banknote you found in the metro station into the artist's suitcase. This will make him talk.";
  document.getElementById("hint13_2_2_container").style.display = "block";
};

function hintPtwo13_3show() {
  document.getElementById("hintPtwo13_3Answer").innerHTML = "The mayor said that he isn't taking any visits. Is there somebody that he would make an exception for?";
  document.getElementById("hintPtwo13_1").style.display = "none";
  document.getElementById("hintPtwo13_2").style.display = "none";
  document.getElementById("hintPtwo13_4").style.display = "none";
  document.getElementById("hint13_3_1_container").style.display = "block";
};

function hintPtwo13_3_1show() {
  document.getElementById("hintPtwo13_3_1Answer").innerHTML = "You know that the mayor collaborated with PEI. Is there somebody who you suspect could be working for them?";
  document.getElementById("hint13_3_2_container").style.display = "block";
};

function hintPtwo13_3_2show() {
  document.getElementById("hintPtwo13_3_2Answer").innerHTML = "Take the appearance of the unknown man and ask the security guard to see mayor Bundy.";
  document.getElementById("hint13_3_3_container").style.display = "block";
};

function hintPtwo13_4show() {
  document.getElementById("hintPtwo13_4Answer").innerHTML = "You should disguise if you want to enter the PEI base. Is there someone you know is working for the PEI?";
  document.getElementById("hintPtwo13_1").style.display = "none";
  document.getElementById("hintPtwo13_2").style.display = "none";
  document.getElementById("hintPtwo13_3").style.display = "none";
  document.getElementById("hint13_4_1_container").style.display = "block";
};

function hintPtwo13_4_1show() {
  document.getElementById("hintPtwo13_4_1Answer").innerHTML = "Take the appearance of the unknown man and ask the soldier about the entrance to the base.";
  document.getElementById("hint13_4_2_container").style.display = "block";
};

function hintPtwo14_1show() {
  document.getElementById("hintPtwo14_1Answer").innerHTML = "The document is named 'PEI_both_sides'. What can you do on both sides?";
  document.getElementById("hintPtwo14_2").style.display = "none";
  document.getElementById("hint14_1_1_container").style.display = "block";
};

function hintPtwo14_1_1show() {
  document.getElementById("hintPtwo14_1_1Answer").innerHTML = "You should print the document.";
  document.getElementById("hint14_1_2_container").style.display = "block";
};

function hintPtwo14_2show() {
  document.getElementById("hintPtwo14_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPtwo14_1").style.display = "none";
  document.getElementById("hint14_2_1_container").style.display = "block";
};

function hintPtwo15_1show() {
  document.getElementById("hintPtwo15_1Answer").innerHTML = "Use the potpourri on Jena Kane to wake her up.";
  document.getElementById("hint15_1_1_container").style.display = "block";
};

function hintPtwo16_1show() {
  document.getElementById("hintPtwo16_1Answer").innerHTML = "Go to the address G54.";
  document.getElementById("hint16_1_1_container").style.display = "block";
};

function hintPtwo17_1show() {
  document.getElementById("hintPtwo17_1Answer").innerHTML = "The document is named 'PEI_both_sides'. What can you do on both sides?";
  document.getElementById("hintPtwo17_2").style.display = "none";
  document.getElementById("hint17_1_1_container").style.display = "block";
};

function hintPtwo17_1_1show() {
  document.getElementById("hintPtwo17_1_1Answer").innerHTML = "You should print the document.";
  document.getElementById("hint17_1_2_container").style.display = "block";
};

function hintPtwo17_2show() {
  document.getElementById("hintPtwo17_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPtwo17_1").style.display = "none";
  document.getElementById("hint17_2_1_container").style.display = "block";
};

function hintPtwo18_1show() {
  document.getElementById("hintPtwo18_1Answer").innerHTML = "Ask professor Martin about Lena.";
  document.getElementById("hint18_1_1_container").style.display = "block";
};

function hintPtwo19_1show() {
  document.getElementById("hintPtwo19_1Answer").innerHTML = "Maybe the mime artist saw the unknown man passing by. How could you make him talk?";
  document.getElementById("hintPtwo19_2").style.display = "none";
  document.getElementById("hint19_1_1_container").style.display = "block";
};

function hintPtwo19_1_1show() {
  document.getElementById("hintPtwo19_1_1Answer").innerHTML = "Put the banknote you found in the metro station into the artist's suitcase. This will make him talk.";
  document.getElementById("hint19_1_2_container").style.display = "block";
};

function hintPtwo19_2show() {
  document.getElementById("hintPtwo19_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPtwo19_1").style.display = "none";
  document.getElementById("hint19_2_1_container").style.display = "block";
};

function hintPtwo20_1show() {
  document.getElementById("hintPtwo20_1Answer").innerHTML = "There is somebody in the hospital that didn't have their lunch yet.";
  document.getElementById("hintPtwo20_2").style.display = "none";
  document.getElementById("hint20_1_1_container").style.display = "block";
};

function hintPtwo20_1_1show() {
  document.getElementById("hintPtwo20_1_1Answer").innerHTML = "Maybe nurse Barbara would take the burger if it was given by the right person.";
  document.getElementById("hint20_1_2_container").style.display = "block";
};

function hintPtwo20_1_2show() {
  document.getElementById("hintPtwo20_1_2Answer").innerHTML = "Take the appearance of the delivery guy and give the burger to nurse Barbara.";
  document.getElementById("hint20_1_3_container").style.display = "block";
};

function hintPtwo20_2show() {
  document.getElementById("hintPtwo20_2Answer").innerHTML = "Take a look at your 'Note to yourself' list. Did you go to all the locations written on the list?";
  document.getElementById("hintPtwo20_1").style.display = "none";
  document.getElementById("hint20_2_1_container").style.display = "block";
};

function hintPtwo20_2_1show() {
  document.getElementById("hintPtwo20_2_1Answer").innerHTML = "Find the hospital on the Starchester map and enter the address in the Digital Game Book input field.";
  document.getElementById("hint20_2_2_container").style.display = "block";
};

function hintPtwo20_2_2show() {
  document.getElementById("hintPtwo20_2_2Answer").innerHTML = "Go to the address G54.";
  document.getElementById("hint20_2_3_container").style.display = "block";
};

function hintPtwo21_1show() {
  document.getElementById("hintPtwo21_1Answer").innerHTML = "Use the pencil on the newspaper to shade the paper.";
  document.getElementById("hint21_1_1_container").style.display = "block";
};

function hintPtwo22_1show() {
  document.getElementById("hintPtwo22_1Answer").innerHTML = "Dr Turner said he is going to the PEI base after his visit to the hospital. You should find Dr Turner's car to follow him. You have a glove that he probably used. Could you somehow use it to find the car?";
  document.getElementById("hintPtwo22_2").style.display = "none";
  document.getElementById("hint22_1_1_container").style.display = "block";
};

function hintPtwo22_1_1show() {
  document.getElementById("hintPtwo22_1_1Answer").innerHTML = "Some animals have a great sense of smell.";
  document.getElementById("hint22_1_2_container").style.display = "block";
};

function hintPtwo22_1_2show() {
  document.getElementById("hintPtwo22_1_2Answer").innerHTML = "Use your power to connect to plants and animals on the cat. Cat can then smell the glove and find the car based on Dr Turner's scent.";
  document.getElementById("hint22_1_3_container").style.display = "block";
};

function hintPtwo22_2show() {
  document.getElementById("hintPtwo22_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPtwo22_1").style.display = "none";
  document.getElementById("hint22_2_1_container").style.display = "block";
};

function hintPtwo23_1show() {
  document.getElementById("hintPtwo23_1Answer").innerHTML = "You should try to find more about Lena. She stayed in this hotel the last two times she visited Starchester.";
  document.getElementById("hintPtwo23_2").style.display = "none";
  document.getElementById("hintPtwo23_3").style.display = "none";
  document.getElementById("hint23_1_1_container").style.display = "block";
};

function hintPtwo23_1_1show() {
  document.getElementById("hintPtwo23_1_1Answer").innerHTML = "Ask receptionist Nina about Lena.";
  document.getElementById("hint23_1_2_container").style.display = "block";
};

function hintPtwo23_2show() {
  document.getElementById("hintPtwo23_2Answer").innerHTML = "You know that professor Martin used to see your mother. The fact that he was kidnapped in the same time she went missing is hardly a coincidence.";
  document.getElementById("hintPtwo23_1").style.display = "none";
  document.getElementById("hintPtwo23_3").style.display = "none";
  document.getElementById("hint23_2_1_container").style.display = "block";
};

function hintPtwo23_2_1show() {
  document.getElementById("hintPtwo23_2_1Answer").innerHTML = "Ask professor Martin about Lena.";
  document.getElementById("hint23_2_2_container").style.display = "block";
};

function hintPtwo23_3show() {
  document.getElementById("hintPtwo23_3Answer").innerHTML = "Alison Clarke had a meeting with Lena in the hotel. What was it about?";
  document.getElementById("hintPtwo23_1").style.display = "none";
  document.getElementById("hintPtwo23_2").style.display = "none";
  document.getElementById("hint23_3_1_container").style.display = "block";
};

function hintPtwo23_3_1show() {
  document.getElementById("hintPtwo23_3_1Answer").innerHTML = "Ask Alison Clarke about Lena.";
  document.getElementById("hint23_3_2_container").style.display = "block";
};

function hintPtwo24_1show() {
  document.getElementById("hintPtwo24_1Answer").innerHTML = "You have to escape the room before Dr Turner comes. Is there something in your inventory that could help you climb down the window?";
  document.getElementById("hintPtwo24_2").style.display = "none";
  document.getElementById("hint24_1_1_container").style.display = "block";
};

function hintPtwo24_1_1show() {
  document.getElementById("hintPtwo24_1_1Answer").innerHTML = "You can use the rope to climb down the window, but you should attach it to something before.";
  document.getElementById("hint24_1_2_container").style.display = "block";
};

function hintPtwo24_1_2show() {
  document.getElementById("hintPtwo24_1_2Answer").innerHTML = "Attach the rope to the IV stand top.";
  document.getElementById("hint24_1_3_container").style.display = "block";
};

function hintPtwo24_2show() {
  document.getElementById("hintPtwo24_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPtwo24_1").style.display = "none";
  document.getElementById("hint24_2_1_container").style.display = "block";
};

function hintPtwo25_1show() {
  document.getElementById("hintPtwo25_1Answer").innerHTML = "Ask Alison Clarke about Lena.";
  document.getElementById("hint25_1_1_container").style.display = "block";
};

function hintPtwo27_1show() {
  document.getElementById("hintPtwo27_1Answer").innerHTML = "This potpourri has a smell so strong that it 'could bring the dead back to life'.";
  document.getElementById("hintPtwo27_2").style.display = "none";
  document.getElementById("hint27_1_1_container").style.display = "block";
};

function hintPtwo27_1_1show() {
  document.getElementById("hintPtwo27_1_1Answer").innerHTML = "Use the potpourri on Jena Kane to wake her up.";
  document.getElementById("hint27_1_2_container").style.display = "block";
};

function hintPtwo27_2show() {
  document.getElementById("hintPtwo27_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPtwo27_1").style.display = "none";
  document.getElementById("hint27_2_1_container").style.display = "block";
};

function hintPtwo28_1show() {
  document.getElementById("hintPtwo28_1Answer").innerHTML = "Take the appearance of the unknown man and ask the soldier about the PEI base entrance to enter the base.";
  document.getElementById("hint28_1_1_container").style.display = "block";
};

function hintPtwo29_1show() {
  document.getElementById("hintPtwo29_1Answer").innerHTML = "Take the appearance of the unknown man and ask the soldier about the PEI base entrance to enter the base.";
  document.getElementById("hint29_1_1_container").style.display = "block";
};

function hintPtwo30_1show() {
  document.getElementById("hintPtwo30_1Answer").innerHTML = "Ron could help you find Alison.";
  document.getElementById("hint30_1_1_container").style.display = "block";
};

function hintPtwo30_1_1show() {
  document.getElementById("hintPtwo30_1_1Answer").innerHTML = "You need to find the address of 'Under the Radar' magazine. What could 'Under the Radar' mean? Take a good look at Starchester map.";
  document.getElementById("hint30_1_2_container").style.display = "block";
};

function hintPtwo30_1_2show() {
  document.getElementById("hintPtwo30_1_2Answer").innerHTML = "There is a 'Starchester Weather Radar' on address H50. 'Under the Radar' is under it, on address H51.";
  document.getElementById("hint30_1_3_container").style.display = "block";
};

function hintPtwo31_1show() {
  document.getElementById("hintPtwo31_1Answer").innerHTML = "Put the banknote you found in the metro station into the artist's suitcase. This will make him talk.";
  document.getElementById("hint31_1_1_container").style.display = "block";
};

function hintPtwo32_1show() {
  document.getElementById("hintPtwo32_1Answer").innerHTML = "Use your power to connect to plants and animals on the tree. It should be very easy to climb it and reach the camera afterwards.";
  document.getElementById("hint32_1_1_container").style.display = "block";
};

function hintPtwo33_1show() {
  document.getElementById("hintPtwo33_1Answer").innerHTML = "Mayor should be in his office. Search for it on the Starchester map.";
  document.getElementById("hintPtwo33_2").style.display = "none";
  document.getElementById("hint33_1_1_container").style.display = "block";
};

function hintPtwo33_1_1show() {
  document.getElementById("hintPtwo33_1_1Answer").innerHTML = "Go to address C29.";
  document.getElementById("hint33_1_2_container").style.display = "block";
};

function hintPtwo33_2show() {
  document.getElementById("hintPtwo33_2Answer").innerHTML = "The mayor said that he isn't taking any visits. Is there somebody that he would make an exception for?";
  document.getElementById("hintPtwo33_1").style.display = "none";
  document.getElementById("hint33_2_1_container").style.display = "block";
};

function hintPtwo33_2_1show() {
  document.getElementById("hintPtwo33_2_1Answer").innerHTML = "You know that the mayor collaborated with PEI. Is there somebody who you suspect could be working for them?";
  document.getElementById("hint33_2_2_container").style.display = "block";
};

function hintPtwo33_2_2show() {
  document.getElementById("hintPtwo33_2_2Answer").innerHTML = "Take the appearance of the unknown man and ask the security guard to see mayor Bundy.";
  document.getElementById("hint33_2_3_container").style.display = "block";
};

function hintPtwo34_1show() {
  document.getElementById("hintPtwo34_1Answer").innerHTML = "How can you see the content of the microSD card?";
  document.getElementById("hintPtwo34_2").style.display = "none";
  document.getElementById("hint34_1_1_container").style.display = "block";
};

function hintPtwo34_1_1show() {
  document.getElementById("hintPtwo34_1_1Answer").innerHTML = "Enter the microSD card into your phone.";
  document.getElementById("hint34_1_2_container").style.display = "block";
};

function hintPtwo34_2show() {
  document.getElementById("hintPtwo34_2Answer").innerHTML = "Dr Turner said that he will go to the PEI base after he finished his visit to the hospital. Maybe there is a way to follow his car.";
  document.getElementById("hintPtwo34_1").style.display = "none";
  document.getElementById("hint34_2_1_container").style.display = "block";
};

function hintPtwo34_2_1show() {
  document.getElementById("hintPtwo34_2_1Answer").innerHTML = "Is there anything you have that could help you follow the car's movements?";
  document.getElementById("hint34_2_2_container").style.display = "block";
};

function hintPtwo34_2_2show() {
  document.getElementById("hintPtwo34_2_2Answer").innerHTML = "Put the duct tape on your phone, which has a GPS tracking system, and stick it to the car afterwards.";
  document.getElementById("hint34_2_3_container").style.display = "block";
};

function hintPtwo35_1show() {
  document.getElementById("hintPtwo35_1Answer").innerHTML = "Ask Jena Kane about Dr Turner.";
  document.getElementById("hint35_1_1_container").style.display = "block";
};

function hintPtwo36_1show() {
  document.getElementById("hintPtwo36_1Answer").innerHTML = "Use your power to connect to plants and animals on the cat.";
  document.getElementById("hint36_1_1_container").style.display = "block";
};

function hintPtwo37_1show() {
  document.getElementById("hintPtwo37_1Answer").innerHTML = "Enter the microSD card into your phone.";
  document.getElementById("hint37_1_1_container").style.display = "block";
};

function hintPtwo38_1show() {
  document.getElementById("hintPtwo38_1Answer").innerHTML = "Receptionst Nina seems talkative. You could ask her about people she has seen in the hotel.";
  document.getElementById("hintPtwo38_2").style.display = "none";
  document.getElementById("hint38_1_1_container").style.display = "block";
};

function hintPtwo38_1_1show() {
  document.getElementById("hintPtwo38_1_1Answer").innerHTML = "Ask receptionist Nina about the unknown man. Pay attention to where did he go when he left the hotel.";
  document.getElementById("hint38_1_2_container").style.display = "block";
};

function hintPtwo38_1_2show() {
  document.getElementById("hintPtwo38_1_2Answer").innerHTML = "Follow the man to the nearest metro station. Go to the address M20.";
  document.getElementById("hint38_1_3_container").style.display = "block";
};

function hintPtwo38_2show() {
  document.getElementById("hintPtwo38_2Answer").innerHTML = "Receptionst Nina seems talkative. You could ask her about people she has seen in the hotel.";
  document.getElementById("hintPtwo38_1").style.display = "none";
  document.getElementById("hint38_2_1_container").style.display = "block";
};

function hintPtwo38_2_1show() {
  document.getElementById("hintPtwo38_2_1Answer").innerHTML = "Ask receptionist Nina about Lena. She stayed in this hotel the last two times she was in Starchester.";
  document.getElementById("hint38_2_2_container").style.display = "block";
};

function hintPtwo39_1show() {
  document.getElementById("hintPtwo39_1Answer").innerHTML = "Is there something that the cat could find for you?";
  document.getElementById("hintPtwo39_2").style.display = "none";
  document.getElementById("hint39_1_1_container").style.display = "block";
};

function hintPtwo39_1_1show() {
  document.getElementById("hintPtwo39_1_1Answer").innerHTML = "Use the cat on the cars parked in the parking lot. She can find the glove owner's car.";
  document.getElementById("hint39_1_2_container").style.display = "block";
};

function hintPtwo39_2show() {
  document.getElementById("hintPtwo39_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPtwo39_1").style.display = "none";
  document.getElementById("hint39_2_1_container").style.display = "block";
};

function hintPtwo40_1show() {
  document.getElementById("hintPtwo40_1Answer").innerHTML = "The phone has a tracking system. Is there anything you would like to track?";
  document.getElementById("hintPtwo40_2").style.display = "none";
  document.getElementById("hint40_1_1_container").style.display = "block";
};

function hintPtwo40_1_1show() {
  document.getElementById("hintPtwo40_1_1Answer").innerHTML = "Attach the phone to Dr Turner's car. He is going to the PEI base afterwards. This way you can discretly follow him.";
  document.getElementById("hint40_1_2_container").style.display = "block";
};

function hintPtwo40_2show() {
  document.getElementById("hintPtwo40_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPtwo40_1").style.display = "none";
  document.getElementById("hint40_2_1_container").style.display = "block";
};

function hintPtwo41_1show() {
  document.getElementById("hintPtwo41_1Answer").innerHTML = "Take a look on the Starchester map.";
  document.getElementById("hintPtwo41_2").style.display = "none";
  document.getElementById("hintPtwo41_3").style.display = "none";
  document.getElementById("hint41_1_1_container").style.display = "block";
};

function hintPtwo41_1_1show() {
  document.getElementById("hintPtwo41_1_1Answer").innerHTML = "Enter address G54 into the Digital Game Book input field.";
  document.getElementById("hint41_1_2_container").style.display = "block";
};

function hintPtwo41_2show() {
  document.getElementById("hintPtwo41_2Answer").innerHTML = "Take a look on the Starchester map.";
  document.getElementById("hintPtwo41_1").style.display = "none";
  document.getElementById("hintPtwo41_3").style.display = "none";
  document.getElementById("hint41_2_1_container").style.display = "block";
};

function hintPtwo41_2_1show() {
  document.getElementById("hintPtwo41_2_1Answer").innerHTML = "Enter address C29 into the Digital Game Book input field.";
  document.getElementById("hint41_2_2_container").style.display = "block";
};

function hintPtwo41_3show() {
  document.getElementById("hintPtwo41_3Answer").innerHTML = "Somebody you know has approach to information about people. Maybe they could help find Alison.";
  document.getElementById("hintPtwo41_1").style.display = "none";
  document.getElementById("hintPtwo41_2").style.display = "none";
  document.getElementById("hint41_3_1_container").style.display = "block";
};

function hintPtwo41_3_1show() {
  document.getElementById("hintPtwo41_3_1Answer").innerHTML = "Ask Ron about Alison.";
  document.getElementById("hint41_3_2_container").style.display = "block";
};

function hintPtwo41_3_2show() {
  document.getElementById("hintPtwo41_3_2Answer").innerHTML = "What does 'Under the Radar' mean? Take a look on Starchester map.";
  document.getElementById("hint41_3_3_container").style.display = "block";
};

function hintPtwo41_3_3show() {
  document.getElementById("hintPtwo41_3_3Answer").innerHTML = "The magazine's address is H51, right under Starchester Weather Radar.";
  document.getElementById("hint41_3_4_container").style.display = "block";
};

function hintPtwo42_1show() {
  document.getElementById("hintPtwo42_1Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPtwo42_2").style.display = "none";
  document.getElementById("hintPtwo42_3").style.display = "none";
  document.getElementById("hint42_1_1_container").style.display = "block";
};

function hintPtwo42_2show() {
  document.getElementById("hintPtwo42_2Answer").innerHTML = "People in the hospital could know something about nurse Barbara and the restricted ward.";
  document.getElementById("hintPtwo42_1").style.display = "none";
  document.getElementById("hintPtwo42_3").style.display = "none";
  document.getElementById("hint42_2_1_container").style.display = "block";
};

function hintPtwo42_2_1show() {
  document.getElementById("hintPtwo42_2_1Answer").innerHTML = "Ask Rose about nurse Barbara. She must have seen something.";
  document.getElementById("hint42_2_2_container").style.display = "block";
};

function hintPtwo42_2_2show() {
  document.getElementById("hintPtwo42_2_2Answer").innerHTML = "Did you speak to nurse Barbara? Did she have her lunch today?";
  document.getElementById("hint42_2_3_container").style.display = "block";
};

function hintPtwo42_2_3show() {
  document.getElementById("hintPtwo42_2_3Answer").innerHTML = "Take the appearance od the delivery guy and deliver the burger to nurse Barbara. She will spill the mayo on her jacket and take it off.";
  document.getElementById("hint42_2_4_container").style.display = "block";
};

function hintPtwo42_3show() {
  document.getElementById("hintPtwo42_3Answer").innerHTML = "If you still don't have card 49, reenter 42 into the input field and click on the hint 'I've opened LOC08'. If you have card 49, click on the button below.";
  document.getElementById("hintPtwo42_1").style.display = "none";
  document.getElementById("hintPtwo42_2").style.display = "none";
  document.getElementById("hint42_3_1_container").style.display = "block";
};

function hintPtwo42_3_1show() {
  document.getElementById("hintPtwo42_3_1Answer").innerHTML = "Did you understand the message on SPO05? Not everybody can go into the ward. But there is a person that nurse Barbara will surely let pass her.";
  document.getElementById("hint42_3_2_container").style.display = "block";
};

function hintPtwo42_3_2show() {
  document.getElementById("hintPtwo42_3_2Answer").innerHTML = "Look at SPO05 in front of a light source. You will find a name of a doctor in the message.";
  document.getElementById("hint42_3_3_container").style.display = "block";
};

function hintPtwo42_3_3show() {
  document.getElementById("hintPtwo42_3_3Answer").innerHTML = "Take the appearance of Dr Turner and examine the ward lock. Nurse Barbara will let you pass.";
  document.getElementById("hint42_3_4_container").style.display = "block";
};

function hintPtwo43_1show() {
  document.getElementById("hintPtwo43_1Answer").innerHTML = "Put the banknote you found in the metro station into the mime artist's suitcase.";
  document.getElementById("hint43_1_1_container").style.display = "block";
};

function hintPtwo44_1show() {
  document.getElementById("hintPtwo44_1Answer").innerHTML = "Enter '44,1654852' into the Digital Game Book input field and press enter.";
  document.getElementById("hint44_1_1_container").style.display = "block";
};

function hintPtwo45_1show() {
  document.getElementById("hintPtwo45_1Answer").innerHTML = "Ask mayor Bundy about himself, or about the unknown man.";
  document.getElementById("hint45_1_1_container").style.display = "block";
};

function hintPtwo46_1show() {
  document.getElementById("hintPtwo46_1Answer").innerHTML = "Look carefully at the message. What could <i>G</i>, <i>P</i> and <i>B</i> mean? And how about <i>s</i> and <i>d</i>?";
  document.getElementById("hintPtwo46_2").style.display = "none";
  document.getElementById("hint46_1_1_container").style.display = "block";
};

function hintPtwo46_1_1show() {
  document.getElementById("hintPtwo46_1_1Answer").innerHTML = "The message in the newspaper is connected to the metro map. The unknown man must have written down the directions for his metro ride.";
  document.getElementById("hint46_1_2_container").style.display = "block";
};

function hintPtwo46_1_1show() {
  document.getElementById("hintPtwo46_1_1Answer").innerHTML = "<i>G</i> means 'Green Line', <i>P</i> means 'Pink Line', and <i>B</i> means 'Blue Line'. Small <i>s</i> means 'station', and small <i>d</i> means 'direction'. You should take Green Line and go for 2 stations in the direction Bard St. Then take Pink Line and go for 2 stations in the direction Sewenth Dwarf St. Finally, take Blue Line and go for 1 station in the direction Water Road. You should get off the train at Feather Square, station M03.";
  document.getElementById("hint46_1_2_container").style.display = "block";
};

function hintPtwo46_2show() {
  document.getElementById("hintPtwo46_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPtwo46_1").style.display = "none";
  document.getElementById("hint46_2_1_container").style.display = "block";
};

function hintPtwo47_1show() {
  document.getElementById("hintPtwo47_1Answer").innerHTML = "Ask the mime artist about the unknown man.";
  document.getElementById("hint47_1_1_container").style.display = "block";
};

function hintPtwo48_1show() {
  document.getElementById("hintPtwo48_1Answer").innerHTML = "The doctor is in charge of a restricted ward in the hospital. How can you get in it?";
  document.getElementById("hintPtwo48_2").style.display = "none";
  document.getElementById("hint48_1_1_container").style.display = "block";
};

function hintPtwo48_1_1show() {
  document.getElementById("hintPtwo48_1_1Answer").innerHTML = "Take the appearance of Dr Turner and open the ward lock.";
  document.getElementById("hint48_1_2_container").style.display = "block";
};

function hintPtwo48_2show() {
  document.getElementById("hintPtwo48_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPtwo48_1").style.display = "none";
  document.getElementById("hint48_2_1_container").style.display = "block";
};

function hintPtwo49_1show() {
  document.getElementById("hintPtwo49_1Answer").innerHTML = "Look at nurse Barbara's arm on the side like she would if she would look at it.";
  document.getElementById("hint49_1_1_container").style.display = "block";
};

function hintPtwo49_1_1show() {
  document.getElementById("hintPtwo49_1_1Answer").innerHTML = "The code for the ward lock is 'LIES', or '6538'.";
  document.getElementById("hint49_1_2_container").style.display = "block";
};

function hintPtwo50_1show() {
  document.getElementById("hintPtwo50_1Answer").innerHTML = "You have to escape the room before Dr Turner comes. Is there something in your inventory that could help you climb down the window?";
  document.getElementById("hintPtwo50_2").style.display = "none";
  document.getElementById("hint50_1_1_container").style.display = "block";
};

function hintPtwo50_1_1show() {
  document.getElementById("hintPtwo50_1_1Answer").innerHTML = "You can use the rope to climb down the window, but you should attach it to something before.";
  document.getElementById("hint50_1_2_container").style.display = "block";
};

function hintPtwo50_1_2show() {
  document.getElementById("hintPtwo50_1_2Answer").innerHTML = "Attach the rope to the IV stand top and use it to ascape through the window.";
  document.getElementById("hint50_1_3_container").style.display = "block";
};

function hintPtwo50_2show() {
  document.getElementById("hintPtwo50_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPtwo50_1").style.display = "none";
  document.getElementById("hint50_2_1_container").style.display = "block";
};

function hintPtwo51_1show() {
  document.getElementById("hintPtwo51_1Answer").innerHTML = "Use the pencil on the newspaper to shade the indentations and make them visible.";
  document.getElementById("hint51_1_1_container").style.display = "block";
};

function hintPtwo52_1show() {
  document.getElementById("hintPtwo52_1Answer").innerHTML = "Is there something that the cat could find for you?";
  document.getElementById("hintPtwo52_2").style.display = "none";
  document.getElementById("hint52_1_1_container").style.display = "block";
};

function hintPtwo52_1_1show() {
  document.getElementById("hintPtwo52_1_1Answer").innerHTML = "Cats have an amazing sense of smell. Is there something in your inventory that could lead the cat to Dr Turner's car?";
  document.getElementById("hint52_1_2_container").style.display = "block";
};

function hintPtwo52_1_2show() {
  document.getElementById("hintPtwo52_1_2Answer").innerHTML = "Give the cat the used glove to smell. After that, use the cat on the cars parked in the parking lot.";
  document.getElementById("hint52_1_3_container").style.display = "block";
};

function hintPtwo52_2show() {
  document.getElementById("hintPtwo52_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPtwo52_1").style.display = "none";
  document.getElementById("hint52_2_1_container").style.display = "block";
};

function hintPtwo53_1show() {
  document.getElementById("hintPtwo53_1Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPtwo53_2").style.display = "none";
  document.getElementById("hintPtwo53_3").style.display = "none";
  document.getElementById("hint53_1_1_container").style.display = "block";
};

function hintPtwo53_2show() {
  document.getElementById("hintPtwo53_2Answer").innerHTML = "People in the hospital could know something about the restricted ward.";
  document.getElementById("hintPtwo53_1").style.display = "none";
  document.getElementById("hintPtwo53_3").style.display = "none";
  document.getElementById("hint53_2_1_container").style.display = "block";
};

function hintPtwo53_2_1show() {
  document.getElementById("hintPtwo53_2_1Answer").innerHTML = "Ask Rose about the restricted ward. She must have seen something.";
  document.getElementById("hint53_2_2_container").style.display = "block";
};

function hintPtwo53_2_2show() {
  document.getElementById("hintPtwo53_2_2Answer").innerHTML = "Did you speak to nurse Barbara? Did she have her lunch today?";
  document.getElementById("hint53_2_3_container").style.display = "block";
};

function hintPtwo53_2_3show() {
  document.getElementById("hintPtwo53_2_3Answer").innerHTML = "Take the appearance od the delivery guy and deliver the burger to nurse Barbara. She will spill the mayo on her jacket and take it off.";
  document.getElementById("hint53_2_4_container").style.display = "block";
};

function hintPtwo53_3show() {
  document.getElementById("hintPtwo53_3Answer").innerHTML = "If you still don't have card 49, reenter 53 into the input field and click on the hint 'I've opened LOC08'. If you have card 49, click on the button below.";
  document.getElementById("hintPtwo53_1").style.display = "none";
  document.getElementById("hintPtwo53_2").style.display = "none";
  document.getElementById("hint53_3_1_container").style.display = "block";
};

function hintPtwo53_3_1show() {
  document.getElementById("hintPtwo53_3_1Answer").innerHTML = "Did you understand the message on SPO05? Not everybody can go into the ward. But there is a person that nurse Barbara will surely let pass her.";
  document.getElementById("hint53_3_2_container").style.display = "block";
};

function hintPtwo53_3_2show() {
  document.getElementById("hintPtwo53_3_2Answer").innerHTML = "Look at SPO05 in front of a light source. You will find a name of a doctor in the message.";
  document.getElementById("hint53_3_3_container").style.display = "block";
};

function hintPtwo53_3_3show() {
  document.getElementById("hintPtwo53_3_3Answer").innerHTML = "Take the appearance of Dr Turner and examine the ward lock. Nurse Barbara will let you pass.";
  document.getElementById("hint53_3_4_container").style.display = "block";
};

function hintPtwo54_1show() {
  document.getElementById("hintPtwo54_1Answer").innerHTML = "Don't you have a special connection with animals?";
  document.getElementById("hintPtwo54_2").style.display = "none";
  document.getElementById("hintPtwo54_3").style.display = "none";
  document.getElementById("hint54_1_1_container").style.display = "block";
};

function hintPtwo54_1_1show() {
  document.getElementById("hintPtwo54_1_1Answer").innerHTML = "Use your power to connect to plants and animals on the cat. Now that it's obedient, is there something he could help you find?";
  document.getElementById("hint54_1_2_container").style.display = "block";
};

function hintPtwo54_1_2show() {
  document.getElementById("hintPtwo54_1_2Answer").innerHTML = "The cat could maybe recognize the smell of Dr Turner and find his car. But he would have to have something to compare the smell to first.";
  document.getElementById("hint54_1_3_container").style.display = "block";
};

function hintPtwo54_1_3show() {
  document.getElementById("hintPtwo54_1_3Answer").innerHTML = "Give the obedient cat the used glove to smell it. Send the cat to search for Dr Turner's car in the parking lot afterwards.";
  document.getElementById("hint54_1_4_container").style.display = "block";
};

function hintPtwo54_2show() {
  document.getElementById("hintPtwo54_2Answer").innerHTML = "Is there something the cat could help you find?";
  document.getElementById("hintPtwo54_1").style.display = "none";
  document.getElementById("hintPtwo54_3").style.display = "none";
  document.getElementById("hint54_2_1_container").style.display = "block";
};

function hintPtwo54_2_1show() {
  document.getElementById("hintPtwo54_2_1Answer").innerHTML = "The cat could maybe recognize the smell of Dr Turner and find his car. But he would have to have something to compare the smell to first.";
  document.getElementById("hint54_2_2_container").style.display = "block";
};

function hintPtwo54_2_2show() {
  document.getElementById("hintPtwo54_2_2Answer").innerHTML = "Give the obedient cat the used glove to smell it. Send the cat to search for Dr Turner's car in the parking lot afterwards.";
  document.getElementById("hint54_2_3_container").style.display = "block";
};

function hintPtwo54_3show() {
  document.getElementById("hintPtwo54_3Answer").innerHTML = "Is there something the cat could help you find?";
  document.getElementById("hintPtwo54_1").style.display = "none";
  document.getElementById("hintPtwo54_2").style.display = "none";
  document.getElementById("hint54_3_1_container").style.display = "block";
};

function hintPtwo54_3_1show() {
  document.getElementById("hintPtwo54_3_1Answer").innerHTML = "Send the cat to search for Dr Turner's car in the parking lot.";
  document.getElementById("hint54_3_2_container").style.display = "block";
};

function hintPtwo55_1show() {
  document.getElementById("hintPtwo55_1Answer").innerHTML = "You have to escape the room before Dr Turner comes.";
  document.getElementById("hintPtwo55_2").style.display = "none";
  document.getElementById("hint55_1_1_container").style.display = "block";
};

function hintPtwo55_1_1show() {
  document.getElementById("hintPtwo55_1_1Answer").innerHTML = "Use the IV stand top with rope attached as an anchor to climb down the window.";
  document.getElementById("hint55_1_2_container").style.display = "block";
};

function hintPtwo55_2show() {
  document.getElementById("hintPtwo55_2Answer").innerHTML = "You are not supposed to use this card yet. Return to this puzzle later.";
  document.getElementById("hintPtwo55_1").style.display = "none";
  document.getElementById("hint55_2_1_container").style.display = "block";
};

function hintPtwo56_1show() {
  document.getElementById("hintPtwo56_1Answer").innerHTML = "Climb up the tree to get to the security camera. Combine the tree with the camera in the Digital Game Book input field to do it.";
  document.getElementById("hint56_1_1_container").style.display = "block";
};

function hintPtwo57_1show() {
  document.getElementById("hintPtwo57_1Answer").innerHTML = "Ask Dr Rose about nurse Barbara or the restricted ward.";
  document.getElementById("hint57_1_1_container").style.display = "block";
};

function hintPtwoSPO01_1show() {
  document.getElementById("hintPtwoSPO01_1Answer").innerHTML = "Look carefully at the message. What could <i>G</i>, <i>P</i> and <i>B</i> mean? And how about <i>s</i> and <i>d</i>?";
  document.getElementById("hintSPO01_1_1_container").style.display = "block";
};

function hintPtwoSPO01_1_1show() {
  document.getElementById("hintPtwoSPO01_1_1Answer").innerHTML = "<i>G</i> means 'Green Line', <i>P</i> means 'Pink Line', and <i>B</i> means 'Blue Line'. Small <i>s</i> means 'station', and small <i>d</i> means 'direction'. You should take Green Line and go for 2 stations in the direction Bard St. Then take Pink Line and go for 2 stations in the direction Sewenth Dwarf St. Finally, take Blue Line and go for 1 station in the direction Water Road. You should get off the train at Feather Square, station M03.";
  document.getElementById("hintSPO01_1_2_container").style.display = "block";
};

function hintPtwoSPO02_1show() {
  document.getElementById("hintPtwoSPO02_1Answer").innerHTML = "The unknown man is visible on security camera footage on SPO03. When you look at the Starchester map, you can see that the buliding he is entering in is in the address B33. Enter this address in the Digital Game Book input field.";
  document.getElementById("hintSPO02_1_1_container").style.display = "block";
};

function hintPtwoSPO03_1show() {
  document.getElementById("hintPtwoSPO03_1Answer").innerHTML = "The unknown man is visible on security camera footage on SPO03. When you look at the Starchester map, you can see that the buliding he is entering in is in the address B33. Enter this address in the Digital Game Book input field.";
  document.getElementById("hintSPO03_1_1_container").style.display = "block";
};

function hintPtwoSPO04_1show() {
  document.getElementById("hintPtwoSPO04_1Answer").innerHTML = "The unknown man is visible on security camera footage on SPO03. When you look at the Starchester map, you can see that the buliding he is entering in is in the address B33. Enter this address in the Digital Game Book input field.";
  document.getElementById("hintSPO04_1_1_container").style.display = "block";
};

function hintPtwoSPO05_1show() {
  document.getElementById("hintPtwoSPO05_1Answer").innerHTML = "Put the document in front of a light source and read it. You will find the name of the doctor in charge of the restricted ward in the hospital: Dr Turner. Enter his name in the Digital Game Book input field.";
  document.getElementById("hintSPO05_1_1_container").style.display = "block";
};

function hintPtwoSPO06_1show() {
  document.getElementById("hintPtwoSPO06_1Answer").innerHTML = "When you put all the images of the tracking system on the Starchester map, you can see that the car on the last one is in front of the address C24. Enter this address in the Digital Game Book input field.";
  document.getElementById("hintSPO06_1_1_container").style.display = "block";
};
