function bookPthreeKeyPress(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("bookPthreeButton").click();
        return false;
    }
    return true;
};

function agent27KeyPress(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("agent27Button").click();
        return false;
    }
    return true;
};

function pearKeyPress(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("pearButton").click();
        return false;
    }
    return true;
};

function haageKeyPress(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("haageButton").click();
        return false;
    }
    return true;
};

function braunKeyPress(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("braunButton").click();
        return false;
    }
    return true;
};

function gibbsKeyPress(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("gibbsButton").click();
        return false;
    }
    return true;
};

function marinaKeyPress(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("marinaButton").click();
        return false;
    }
    return true;
};

function murphyKeyPress(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("murphyButton").click();
        return false;
    }
    return true;
};

function carnerKeyPress(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("carnerButton").click();
        return false;
    }
    return true;
};

function hidePthreeElements() {
  document.getElementById("agent27Field").style.display = "none";
  document.getElementById("pearField").style.display = "none";
  document.getElementById("haageField").style.display = "none";
  document.getElementById("braunField").style.display = "none";
  document.getElementById("gibbsField").style.display = "none";
  document.getElementById("marinaField").style.display = "none";
  document.getElementById("murphyField").style.display = "none";
  document.getElementById("carnerField").style.display = "none";
  document.getElementById("03_Peku").style.display = "none";
}

var door = 1;
var celia = 1;
var kate = 1;

function bookPthreeFunction() {
	var zlowercase = document.getElementById("bookPthreeText").value;
  var z = zlowercase.toUpperCase();
  var randomanswerthree = [
  "This isn't working. I should try something else.",
  "That's not the best idea I ever had.",
  "There must be something better to do.",
  "Hmmm...no, I don't think that's it."
];
  var answerthree;
  if (z == "01") {
  		answerthree = "I'm not sure I'm completely prepared for all of this, but I guess that there's no turning back now.";
      hidePthreeElements();
  } else if (z == "02") {
  		answerthree = "The scary CEO Pear has finally left me alone.";
      hidePthreeElements();
  } else if (z == "04") {
  		answerthree = "The bridge console has a facial recognition software. When I try to manipulate it, I get the message <b>'Access denied'</b>.";
      hidePthreeElements();
  } else if (z == "08") {
  		answerthree = "My ability to connect to animals and plants. I'm completely used to it by now.<br><br><i>To use this ability, enter ability card number <b>08</b> followed by the card number of the plant or animal you want to have an effect on in the Digital Game Book input field, separated by a comma.</i>";
      hidePthreeElements();
  } else if (z == "13") {
  		answerthree = "Agent 27 who works for the PEI.";
      hidePthreeElements();
  } else if (z == "21" || z == "25" || z == "29" || z == "34" || z == "38") {
  		answerthree = "A scientist that works in the PEI's lab.";
      hidePthreeElements();
  } else if (z == "23") {
  		answerthree = "I saw that my mother went somewhere that resembles a lot to a bridge of a spaceship.";
      hidePthreeElements();
  } else if (z == "26") {
  		answerthree = "This ability is incredibly useful right now.<br><br><i>To use this ability, enter ability card number <b>26</b> followed by the card number of the person you want to take the appearance of in the Digital Game Book input field, separated by a comma.</i>";
    hidePthreeElements();
  } else if (z == "31") {
  		answerthree = "The security guard that was in charge of keeping an eye on my mother.";
      hidePthreeElements();
  } else if (z == "33") {
  		answerthree = "My mother right next to me, finally! She seems well and in good shape, thankfully.";
      hidePthreeElements();
  } else if (z == "35") {
  		answerthree = "This man looks so much like me...I don't dare to believe it, but could he be my father? Or am I hallucinating?";
      hidePthreeElements();
  } else if (z == "37") {
  		answerthree = "I guess this is my new ability. I have to only think of somebody, and I immediately see what this person is seeing. I promise to only use it in emergencies like this one.<br><br><i>To use this ability, enter ability card number <b>37</b> followed by the card number of the person whose eyes you want to see through in the Digital Game Book input field, separated by a comma.</i>";
      hidePthreeElements();
  } else if (z == "LOC03") {
  		answerthree = "Timothy Pear finally left the office. I have to figure out how to get to my mother now.<br><br><i>To exit the office, enter 'D02' into the Digital Game Book input field.</i>";
      hidePthreeElements();
  } else if (z == "LOC07") {
  		answerthree = "There is no doubt anymore that the PEI base is actually a spaceship. There is a lot of equipment that I wouldn't know how to handle, but fortunately, my mother <b>(33)</b>, who is an experienced astronaut, is here to help. The ship is operated with the main bridge console <b>(04)</b>.";
      hidePthreeElements();
  } else if (z == "LOC08") {
      answerthree = "It's hard to describe the space I found myself in. It looks fluid, interconnected with my mind and thoughts, changing the moment I focus my eye on something. Besides me, there is nobody. Except, what is that in the distance? Could it be a living person <b>(35)</b>?";
      hidePthreeElements();
  } else if (z == "SPO07") {
      answerthree = "The space map that the Nahukat mothership sent to me along with the instructions on how to travel to Lazarus Black Hole. They said that wormholes make space-time bend. So, if we imagined the 3D space as a 2D surface, and two wormhole mouths on two distant parts of this surface, travelling through it would be as if we bent the surface and put the mouths right on top of each other. Lorentz Wormhole Mouth is the nearest to me, so I should start there. Apparently, most wormholes have multiple tunnels, contrary to what I thought. So, I should choose the one that leads to the Ellis Wormhole entrance. I should enter the corresponding coordinates in the console to do so.<br><br><i>To travel from Lorentz to Ellis, enter bridge console's card number <b>04</b>, followed by a 4 number sequence, in the input field, separated by a comma. For example, if the coordinates to go to Ellis from Lorentz are 1111, enter '04,1111' in the input field and press enter.";
      hidePthreeElements();
  } else if (z == "01,01") {
      answerthree = "This is by far the most dangerous part of my quest of saving my mother. But I have to go through with it!";
      hidePthreeElements();
  } else if (z == "01,02") {
      answerthree = "This guy is obviously the absolute boss around here.";
      hidePthreeElements();
  } else if (z == "01,04") {
      answerthree = "Luckily, my mother is here. Otherwise I wouldn't know what to do with this!";
      hidePthreeElements();
  } else if (z == "01,08") {
      answerthree = "I don't think that there are many plants or animals in this place, but you never know when the power could come in handy.";
      hidePthreeElements();
  } else if (z == "01,10") {
      answerthree = "The rat is so bored that he seems to be eager for a little excitement.";
      hidePthreeElements();
  } else if (z == "01,13") {
      answerthree = "I've got a feeling that even the Lakis are afraid of this guy.";
      hidePthreeElements();
  } else if (z == "01,21") {
      answerthree = "The scientist's break is probably finished by now.";
      hidePthreeElements();
  } else if (z == "01,23") {
      answerthree = "I'm almost reunited with my mother!";
      hidePthreeElements();
  } else if (z == "01,25") {
      answerthree = "Maybe the scientists have returned from their lunch break.";
      hidePthreeElements();
  } else if (z == "01,26") {
      answerthree = "If I didn't have this power, things would be much more complicated right now.";
      hidePthreeElements();
  } else if (z == "01,29") {
      answerthree = "I wonder did he already notice that his keycard is missing.";
      hidePthreeElements();
  } else if (z == "01,31") {
      answerthree = "Now that she knows my mother escaped, we have to move quickly.";
      hidePthreeElements();
  } else if (z == "01,33") {
      answerthree = "Mother, you're finally here!";
      hidePthreeElements();
  } else if (z == "01,34") {
      answerthree = "Is she still in the lab?";
      hidePthreeElements();
  } else if (z == "01,35") {
      answerthree = "Although I'm stranded in a space limbo, seeing my father for the first time this one of the happiest moments of my life.";
      hidePthreeElements();
  } else if (z == "01,37") {
      answerthree = "Wow, this is the ultimate spying power! I always tried to understand other people's perspective on things, but I never thought that I would be able to do it so literally.";
      hidePthreeElements();
  } else if (z == "01,38") {
      answerthree = "Did Fred already finish his lunch?";
      hidePthreeElements();
  } else if (z == "01,LOC03") {
      answerthree = "I have to figure out how to get to my mother now.<br><br><i>To exit the office, enter 'D02' into the Digital Game Book input field.</i>";
      hidePthreeElements();
  } else if (z == "01,LOC07") {
      answerthree = "A spaceship hidden in plain sight, in the middle of Starchester? Unbelievable.";
      hidePthreeElements();
  } else if (z == "01,LOC08") {
      answerthree = "What is this place? I haven't still visited many places from my bucket list, but I can say that I've been inside of a black hole.";
      hidePthreeElements();
  } else if (z == "01,SPO07") {
      answerthree = "If only my mother were here! She is the astronaut in the family, not me! How am I going to figure out the coordinates? I think that space-time isn't the only thing that will be bending, my mind feels rather bent too.";
      hidePthreeElements();
  } else if (z == "02,01" || z == "02,02" || z == "02,04" || z == "02,08" || z == "02,13" || z == "02,21" || z == "02,25" || z == "02,26" || z == "02,28" || z == "02,29" || z == "02,31" || z == "02,33" || z == "02,34" || z == "02,37" || z == "02,38" || z == "02,LOC03" || z == "02,LOC07" || z == "02,SPO07") {
      answerthree = "<i>Timothy Pear isn't here. You can't speak to him, only about him.</i>";
      hidePthreeElements();
  } else if (z == "13,01" || z == "13,02" || z == "13,04" || z == "13,08" || z == "13,13" || z == "13,21" || z == "13,25" || z == "13,26" || z == "13,28" || z == "13,29" || z == "13,31" || z == "13,33" || z == "13,34" || z == "13,37" || z == "13,38" || z == "13,LOC03" || z == "13,LOC07" || z == "13,SPO07") {
      answerthree = "<i>Agent 27 isn't here. You can't speak to him, only about him.</i>";
      hidePthreeElements();
  } else if (z == "21,01" || z == "21,02" || z == "21,04" || z == "21,08" || z == "21,13" || z == "21,21" || z == "21,25" || z == "21,26" || z == "21,28" || z == "21,29" || z == "21,31" || z == "21,33" || z == "21,34" || z == "21,37" || z == "21,38" || z == "21,LOC03" || z == "21,LOC07" || z == "21,SPO07") {
      answerthree = "<i>Laurie Haage isn't here. You can't speak to her, only about her.</i>";
      hidePthreeElements();
  } else if (z == "25,01" || z == "25,02" || z == "25,04" || z == "25,08" || z == "25,13" || z == "25,21" || z == "25,25" || z == "25,26" || z == "25,28" || z == "25,29" || z == "25,31" || z == "25,33" || z == "25,34" || z == "25,37" || z == "25,38" || z == "25,LOC03" || z == "25,LOC07" || z == "25,SPO07") {
      answerthree = "<i>Celia Gibbs isn't here. You can't speak to her, only about her.</i>";
      hidePthreeElements();
  } else if (z == "29,01" || z == "29,02" || z == "29,04" || z == "29,08" || z == "29,13" || z == "29,21" || z == "29,25" || z == "29,26" || z == "29,28" || z == "29,29" || z == "29,31" || z == "29,33" || z == "29,34" || z == "29,37" || z == "29,38" || z == "29,LOC03" || z == "29,LOC07" || z == "29,SPO07") {
      answerthree = "<i>Donald Braun isn't here. You can't speak to him, only about him.</i>";
      hidePthreeElements();
  } else if (z == "31,01" || z == "31,02" || z == "31,04" || z == "31,08" || z == "31,13" || z == "31,21" || z == "31,25" || z == "31,26" || z == "31,28" || z == "31,29" || z == "31,31" || z == "31,33" || z == "31,34" || z == "31,37" || z == "31,38" || z == "31,LOC03" || z == "31,LOC07" || z == "31,SPO07") {
      answerthree = "<i>Marina isn't here. You can't speak to her, only about her.</i>";
      hidePthreeElements();
  } else if (z == "33,01") {
      answerthree = "Ziggy, I'm so proud of you. You managed to find me! When I figured out that the PEI I was investigating were, in fact, the Lakis themselves, it was already too late. They were following my every movement, with Martin's help, and they've poisoned me with their drug so that I would lose my powers. I couldn't risk saying anything to you and put you in danger. They had to be sure that you don't know anything. Otherwise, they would take you immediately too.<br>We have to find a way to stop Lakis' invasion of Earth, and to finally contact our mothership. I don't want to see history repeating!";
      hidePthreeElements();
  } else if (z == "33,02") {
      answerthree = "He came to see me once in my room. He is in charge of everything here, if I understood well.";
      hidePthreeElements();
  } else if (z == "33,04") {
      answerthree = "It seems that they've given access to the console only to a specific individual. The captain of the ship, probably.";
      hidePthreeElements();
  } else if (z == "33,08" || z == "33,26" || z == "33,37") {
      answerthree = "I'm sorry I've never shared this with you before. I was wrong to have kept it a secret, I see that now.";
      hidePthreeElements();
  } else if (z == "33,21") {
      answerthree = "I know she seems nice, but she is just as creepy as the rest of them.";
      hidePthreeElements();
  } else if (z == "33,25") {
      answerthree = "Trust me, I'll be happy if I never see any of their faces again.";
      hidePthreeElements();
  } else if (z == "33,29") {
      answerthree = "He is in charge of the lab. They were trying to get a hold of our powers.";
      hidePthreeElements();
  } else if (z == "33,31") {
      answerthree = "Poor Marina, I've tricked her with her Rubik's cube. The CEO will be giving her a hard time, I'm sure.";
      hidePthreeElements();
  } else if (z == "33,33") {
      answerthree = "It's been hard to stay closed in that room, with nothing but a hope that you will be able to read my clues and find me. When I figured out that the PEI I was investigating were, in fact, the Lakis themselves, it was already too late. They were following my every movement, with Martin's help, and they've poisoned me with their drug so that I would lose my powers. I couldn't risk saying anything to you and put you in danger. They had to be sure that you don't know anything. Otherwise, they would take you immediately too.<br>We have to find a way to stop Lakis' invasion of Earth, and to finally contact our mothership. I don't want to see history repeating!";
      hidePthreeElements();
  } else if (z == "33,34") {
      answerthree = "Kate isn't very fond of me. Well, I guess none of them are.";
      hidePthreeElements();
  } else if (z == "33,38") {
      answerthree = "I've gotten an impression that he is the least competent member of the lab team.";
      hidePthreeElements();
  } else if (z == "33,39") {
      answerthree = "I see that you're also carrying some stuff around. You think that this could be useful?";
      hidePthreeElements();
  } else if (z == "33,LOC07") {
      answerthree = "This is a typical, well-equipped spaceship bridge. It reminds me of the old days. We should try to open the console and contact the Nahukat mothership.";
      hidePthreeElements();
  } else if (z == "34,01" || z == "34,02" || z == "34,04" || z == "34,08" || z == "34,13" || z == "34,21" || z == "34,25" || z == "34,26" || z == "34,28" || z == "34,29" || z == "34,31" || z == "34,33" || z == "34,37" || z == "34,38" || z == "34,34" || z == "34,LOC03" || z == "34,LOC07" || z == "34,SPO07") {
      answerthree = "<i>Kate Carner isn't here. You can't speak to her, only about her.</i>";
      hidePthreeElements();
  } else if (z == "35,01" || z == "35,28" || z == "35,35") {
      answerthree = "<i>Turn the sound on your device on.</i>";
      hidePthreeElements();
      document.getElementById("03_Peku").style.display = "block";
  } else if (z == "35,08" || z == "35,26" || z == "35,37") {
      answerthree = "You have these powers? Does it mean you also have the gem?";
      hidePthreeElements();
  } else if (z == "38,01" || z == "38,02" || z == "38,04" || z == "38,08" || z == "38,13" || z == "38,21" || z == "38,25" || z == "38,26" || z == "38,28" || z == "38,29" || z == "38,38" || z == "38,33" || z == "38,34" || z == "38,37" || z == "38,38" || z == "38,LOC03" || z == "38,LOC07" || z == "38,SPO07") {
      answerthree = "<i>Fred Murphy isn't here. You can't speak to him, only about him.</i>";
      hidePthreeElements();
  } else if (z == "26,01" && celia == 1 && kate == 1 || z == "26,01" && celia == 3 && kate == 1 || z == "26,01" && celia == 1 && kate == 3) {
      answerthree = "I already have my appearance.";
      hidePthreeElements();
  } else if (z == "26,02" && celia == 1 && kate == 1 || z == "26,02" && celia == 3 && kate == 1 || z == "26,02" && celia == 1 && kate == 3) {
      answerthree = "I hope that this is the last time I'll be wearing this face as a mask.<br><i>Use the input field below to act while having the appearance of Timothy Pear. You can always return to your usual form by using the usual input field above.</i>";
      hidePthreeElements();
      document.getElementById("pearField").style.display = "block";
  } else if (z == "26,13" && celia == 1 && kate == 1 || z == "26,13" && celia == 3 && kate == 1 || z == "26,13" && celia == 1 && kate == 3) {
      answerthree = "I've been wearing this face way too much these last few days.<br><i>Use the input field below to act while having the appearance of Agent 27. You can always return to your usual form by using the usual input field above.</i>";
      hidePthreeElements();
      document.getElementById("agent27Field").style.display = "block";
  } else if (z == "26,21" && celia == 1 && kate == 1 || z == "26,21" && celia == 3 && kate == 1 || z == "26,21" && celia == 1 && kate == 3) {
      answerthree = "Let's try with this disguise.<br><i>Use the input field below to act while having the appearance of Laurie Haage. You can always return to your usual form by using the usual input field above.</i>";
      hidePthreeElements();
      document.getElementById("haageField").style.display = "block";
  } else if (z == "26,23" && celia == 1 && kate == 1) {
      answerthree = "If somebody sees me in my mother's costume, they will capture me. I prefer a solution that keeps both of us safe.";
      hidePthreeElements();
  } else if (z == "26,23" && celia == 3 && kate == 1 || z == "26,23" && celia == 1 && kate == 3) {
      answerthree = "There is really no reason for me to take my mother's appearance. She is not the captain of this ship.";
      hidePthreeElements();
  } else if (z == "26,25" && celia == 1 && kate == 1 || z == "26,25" && celia == 3 && kate == 1 || z == "26,25" && celia == 1 && kate == 3) {
      answerthree = "I just have to keep that smile on my face, and everybody will believe it's Celia.<br><i>Use the input field below to act while having the appearance of Celia Gibbs. You can always return to your usual form by using the usual input field above.</i>";
      hidePthreeElements();
      document.getElementById("gibbsField").style.display = "block";
  } else if (z == "26,29" && celia == 1 && kate == 1 || z == "26,34" && celia == 3 && kate == 1 || z == "26,34" && celia == 1 && kate == 3) {
      answerthree = "I can always take the form of dear old Donald again.<br><i>Use the input field below to act while having the appearance of Donald Braun. You can always return to your usual form by using the usual input field above.</i>";
      hidePthreeElements();
      document.getElementById("braunField").style.display = "block";
  } else if (z == "26,31" && celia == 1 && kate == 1 || z == "26,31" && celia == 3 && kate == 1 || z == "26,31" && celia == 1 && kate == 3) {
      answerthree = "Marina, I'll be borrowing your face for a moment.<br><i>Use the input field below to act while having the appearance of Marina. You can always return to your usual form by using the usual input field above.</i>";
      hidePthreeElements();
      document.getElementById("marinaField").style.display = "block";
  } else if (z == "26,34" && celia == 1 && kate == 1 || z == "26,34" && celia == 3 && kate == 1 || z == "26,34" && celia == 1 && kate == 3) {
      answerthree = "I'm sure that I can pull off this Kate costume.<br><i>Use the input field below to act while having the appearance of Kate Carner. You can always return to your usual form by using the usual input field above.</i>";
      hidePthreeElements();
      document.getElementById("carnerField").style.display = "block";
  } else if (z == "26,38" && celia == 1 && kate == 1 || z == "26,38" && celia == 3 && kate == 1 || z == "26,38" && celia == 1 && kate == 3) {
      answerthree = "I guess that Fred won't mind me taking his appearance for a little bit.<br><i>Use the input field below to act while having the appearance of Fred Murphy. You can always return to your usual form by using the usual input field above.</i>";
      hidePthreeElements();
      document.getElementById("murphyField").style.display = "block";
  } else if (z == "26,01" && celia == 2 && kate == 1 || z == "26,02" && celia == 2 && kate == 1 || z == "26,13" && celia == 2 && kate == 1 || z == "26,21" && celia == 2 && kate == 1 || z == "26,23" && celia == 2 && kate == 1 || z == "26,29" && celia == 2 && kate == 1 || z == "26,31" && celia == 2 && kate == 1 || z == "26,34" && celia == 2 && kate == 1 || z == "26,38" && celia == 2 && kate == 1) {
      answerthree = "<i>You can't change your appearance now, somebody could see you. Return to Celia Gibbs input field below using Celia Gibbs appearance.</i>";
      hidePthreeElements();
      document.getElementById("gibbsField").style.display = "block";
  } else if (z == "26,25" && celia == 2 && kate == 1) {
      answerthree = "<i>You already have her appearance. Return to Celia Gibbs input field below.</i>";
      hidePthreeElements();
      document.getElementById("gibbsField").style.display = "block";
  } else if (z == "26,01" && celia == 1 && kate == 2 || z == "26,02" && celia == 1 && kate == 2 || z == "26,13" && celia == 1 && kate == 2 || z == "26,21" && celia == 1 && kate == 2 || z == "26,23" && celia == 1 && kate == 2 || z == "26,25" && celia == 1 && kate == 2 || z == "26,29" && celia == 1 && kate == 2 || z == "26,31" && celia == 1 && kate == 2 || z == "26,38" && celia == 1 && kate == 2) {
      answerthree = "<i>You can't change your appearance now, somebody could see you. Return to Kate Carner input field below using Kate Carner appearance.</i>";
      hidePthreeElements();
      document.getElementById("carnerField").style.display = "block";
  } else if (z == "26,34" && celia == 1 && kate == 2) {
      answerthree = "<i>You already have her appearance. Return to Kate Carner input field below.</i>";
      hidePthreeElements();
      document.getElementById("carnerField").style.display = "block";
  } else if (z == "04,2783" || z == "04,2,7,8,3") {
      answerthree = "The bridge console has a facial recognition software. When I try to manipulate it, i get the message <i>'Access denied'</i>.";
      hidePthreeElements();
  } else if (z == "37,02") {
      answerthree = "The CEO is in the room my mother used to be in, yelling at Marina and figuring out how did she escape.";
      hidePthreeElements();
  } else if (z == "37,13") {
      answerthree = "Agent 27 is in the common area, looking at his phone.";
      hidePthreeElements();
  } else if (z == "37,21") {
      answerthree = "Laurie Haage in the entrance hall, looking at the photo of the lab team.";
      hidePthreeElements();
  } else if (z == "37,23") {
      answerthree = "My mother is somewhere that looks like a spaceship bridge.";
      hidePthreeElements();
  } else if (z == "37,25") {
      answerthree = "Celia Gibbs is in the hallway left to the security control room, speaking to Kate Carner.";
      hidePthreeElements();
  } else if (z == "37,29") {
      answerthree = "Donald Braun is in the common area, and he seems to be searching for something. His keycard, possibly?";
      hidePthreeElements();
  } else if (z == "37,31") {
      answerthree = "Marina is with the CEO in the room my mother escaped from. The CEO is obviously furious about what happened.";
      hidePthreeElements();
  } else if (z == "37,34") {
      answerthree = "Kate Carner is in the hallway left to the security control room, explaining something to Celia Gibbs.";
      hidePthreeElements();
  } else if (z == "37,38") {
      answerthree = "Fred Murphy is still in the common area, speaking to Agent 27, while the latter completely ignores him.";
      hidePthreeElements();
  } else if (z == "D01" || z == "D03" || z == "D04" || z == "D05" || z == "D06" || z == "D07" || z == "D08" || z == "D09" || z == "D10" || z == "D11" || z == "D12" || z == "D13" || z == "D14" || z == "D15" || z == "D16" || z == "D17" || z == "D18" || z == "D19" || z == "D20" || z == "D21" || z == "D22" || z == "D23" || z == "D24" || z == "D25") {
      answerthree = "I can't skip doors. I have to get out of the CEO's office first.";
      hidePthreeElements();
  } else if (z == "D02") {
      answerthree = "I should get to my mother, but I can't really show my face in the entrance hall. Somebody might be there.";
      hidePthreeElements();
	} else {
  		answerthree = randomanswerthree[Math.floor(Math.random()*randomanswerthree.length)];
      hidePthreeElements();
  	}
  	document.getElementById("bookPthreeAnswer").innerHTML = answerthree;
};

function agent27() {
	var agent27lowercase = document.getElementById("agent27").value;
  var agent27input = agent27lowercase.toUpperCase();
  var agent27answer;
  if (agent27input == "D01" || agent27input == "D03" || agent27input == "D04" || agent27input == "D05" || agent27input == "D06" || agent27input == "D07" || agent27input == "D08" || agent27input == "D09" || agent27input == "D10" || agent27input == "D11" || agent27input == "D12" || agent27input == "D13" || agent27input == "D14" || agent27input == "D15" || agent27input == "D16" || agent27input == "D17" || agent27input == "D18" || agent27input == "D19" || agent27input == "D20" || agent27input == "D21" || agent27input == "D22" || agent27input == "D23" || agent27input == "D24" || agent27input == "D25" || agent27input == "D26" || agent27input == "D27") {
      agent27answer = "I can't skip doors. I have to get out of the CEO's office first.";
  } else if (agent27input == "04") {
      agent27answer = "I'm getting a message <b>'Access denied'</b>. I guess that my favourite Agent isn't the captain of the ship.";
  } else if (agent27input == "D02") {
      agent27answer = "Am I really sure that Agent 27 isn't somewhere just around the corner? I can't risk it. I have to check before so that I don't run into him on my way to the bridge.";
  } else if (agent27input == "26,01" || agent27input == "26,02" || agent27input == "26,21" || agent27input == "26,23" || agent27input == "26,25" || agent27input == "26,29" || agent27input == "26,31" || agent27input == "26,34" || agent27input == "26,38") {
      agent27answer = "I have to get back to my Ziggy appearance to be able to change it into someone else's.";
  } else if (agent27input == "26,13") {
      agent27answer = "I already have his appearance.";
  } else if (agent27input == "37,02") {
      agent27answer = "The CEO is in the room my mother used to be in, yelling at Marina and figuring out how did she escape.";
  } else if (agent27input == "37,13") {
      agent27answer = "Agent 27 is in the common area, looking at his phone.";
  } else if (agent27input == "37,21") {
      agent27answer = "Laurie Haage in the entrance hall, looking at the photo of the lab team.";
  } else if (agent27input == "37,23") {
      agent27answer = "My mother is somewhere that looks like a spaceship bridge.";
  } else if (agent27input == "37,25") {
      agent27answer = "Celia Gibbs is in the hallway left to the security control room, speaking to Kate Carner.";
  } else if (agent27input == "37,29") {
      agent27answer = "Donald Braun is in the common area, and he seems to be searching for something. His keycard, possibly?";
  } else if (agent27input == "37,31") {
      agent27answer = "Marina is with the CEO in the room my mother escaped from. The CEO is obviously furious about what happened.";
  } else if (agent27input == "37,34") {
      agent27answer = "Kate Carner is in the hallway left to the security control room, explaining something to Celia Gibbs.";
  } else if (agent27input == "37,38") {
      agent27answer = "Fred Murphy is still in the common area, speaking to Agent 27, while the latter completely ignores him.";
  } else if (celia == 1 && kate == 1 || celia == 2 && kate == 1 || celia == 1 && kate == 2) {
      agent27answer = "The only reason for me taking Agent 27's appearance is to get to the bridge. I shouldn't waste my time.<br><br><i>To get out of the CEO's office, enter 'D02' into the input field and press enter.</i>";
  } else if (celia == 3 && kate == 1 || celia == 1 && kate == 3) {
      agent27answer = "The only reason for me taking Agent 27's appearance is to operate the console. We don't have a lot of time, we should act fast.";
  }
    document.getElementById("agent27Answer").innerHTML = agent27answer;
}

function haage() {
	var haagelowercase = document.getElementById("haage").value;
  var haageinput = haagelowercase.toUpperCase();
  var haageanswer;
  if (haageinput == "D01" || haageinput == "D03" || haageinput == "D04" || haageinput == "D05" || haageinput == "D06" || haageinput == "D07" || haageinput == "D08" || haageinput == "D09" || haageinput == "D10" || haageinput == "D11" || haageinput == "D12" || haageinput == "D13" || haageinput == "D14" || haageinput == "D15" || haageinput == "D16" || haageinput == "D17" || haageinput == "D18" || haageinput == "D19" || haageinput == "D20" || haageinput == "D21" || haageinput == "D22" || haageinput == "D23" || haageinput == "D24" || haageinput == "D25" || haageinput == "D26" || haageinput == "D27") {
      haageanswer = "I can't skip doors. I have to get out of the CEO's office first.";
  } else if (haageinput == "04") {
      haageanswer = "The console gives a message <b>'Access denied'</b>. Dear old Laurie isn't the captain, obviously.";
  } else if (haageinput == "D02") {
      haageanswer = "Am I really sure that Laurie Haage isn't somewhere just around the corner? I can't risk it. I have to check before so that I don't run into her on my way to the bridge.";
  } else if (haageinput == "26,01" || haageinput == "26,02" || haageinput == "26,13" || haageinput == "26,23" || haageinput == "26,25" || haageinput == "26,29" || haageinput == "26,31" || haageinput == "26,34" || haageinput == "26,38") {
      haageanswer = "I have to get back to my Ziggy appearance to be able to change it into someone else's.";
  } else if (haageinput == "26,21") {
      haageanswer = "I already have her appearance.";
  } else if (haageinput == "37,02") {
      haageanswer = "The CEO is in the room my mother used to be in, yelling at Marina and figuring out how did she escape.";
  } else if (haageinput == "37,13") {
      haageanswer = "Agent 27 is in the common area, looking at his phone.";
  } else if (haageinput == "37,21") {
      haageanswer = "Laurie Haage in the entrance hall, looking at the photo of the lab team.";
  } else if (haageinput == "37,23") {
      haageanswer = "My mother is somewhere that looks like a spaceship bridge.";
  } else if (haageinput == "37,25") {
      haageanswer = "Celia Gibbs is in the hallway left to the security control room, speaking to Kate Carner.";
  } else if (haageinput == "37,29") {
      haageanswer = "Donald Braun is in the common area, and he seems to be searching for something. His keycard, possibly?";
  } else if (haageinput == "37,31") {
      haageanswer = "Marina is with the CEO in the room my mother escaped from. The CEO is obviously furious about what happened.";
  } else if (haageinput == "37,34") {
      haageanswer = "Kate Carner is in the hallway left to the security control room, explaining something to Celia Gibbs.";
  } else if (haageinput == "37,38") {
      haageanswer = "Fred Murphy is still in the common area, speaking to Agent 27, while the latter completely ignores him.";
  } else if (celia == 1 && kate == 1 || celia == 2 && kate == 1 || celia == 1 && kate == 2) {
      haageanswer = "The only reason for me taking Laurie Haage's appearance is to get to the bridge. I shouldn't waste my time.<br><br><i>To get out of the CEO's office, enter 'D02' into the input field and press enter.</i>";
  } else if (celia == 3 && kate == 1 || celia == 1 && kate == 3) {
      haageanswer = "The only reason for me taking Laurie Haage's appearance is to operate the console. We don't have a lot of time, we should act fast.";
  }
    document.getElementById("haageAnswer").innerHTML = haageanswer;
}

function braun() {
	var braunlowercase = document.getElementById("braun").value;
  var brauninput = braunlowercase.toUpperCase();
  var braunanswer;
  if (brauninput == "D01" || brauninput == "D03" || brauninput == "D04" || brauninput == "D05" || brauninput == "D06" || brauninput == "D07" || brauninput == "D08" || brauninput == "D09" || brauninput == "D10" || brauninput == "D11" || brauninput == "D12" || brauninput == "D13" || brauninput == "D14" || brauninput == "D15" || brauninput == "D16" || brauninput == "D17" || brauninput == "D18" || brauninput == "D19" || brauninput == "D20" || brauninput == "D21" || brauninput == "D22" || brauninput == "D23" || brauninput == "D24" || brauninput == "D25" || brauninput == "D26" || brauninput == "D27") {
      braunanswer = "I can't skip doors. I have to get out of the CEO's office first.";
  } else if (brauninput == "04") {
      braunanswer = "The console gives a message <b>'Access denied'</b>. I have to say, it would be hard to imagine Donald as the captain after the lecture he received from the CEO half an hour ago.";
  } else if (brauninput == "D02") {
      braunanswer = "Am I really sure that Donald Braun isn't somewhere just around the corner? I can't risk it. I have to check before so that I don't run into him on my way to the bridge.";
  } else if (brauninput == "26,01" || brauninput == "26,02" || brauninput == "26,13" || brauninput == "26,21" || brauninput == "26,23" || brauninput == "26,25" || brauninput == "26,31" || brauninput == "26,34" || brauninput == "26,38") {
      braunanswer = "I have to get back to my Ziggy appearance to be able to change it into someone else's.";
  } else if (brauninput == "26,29") {
      braunanswer = "I already have his appearance.";
  } else if (brauninput == "37,02") {
      braunanswer = "The CEO is in the room my mother used to be in, yelling at Marina and figuring out how did she escape.";
  } else if (brauninput == "37,13") {
      braunanswer = "Agent 27 is in the common area, looking at his phone.";
  } else if (brauninput == "37,21") {
      braunanswer = "Laurie Haage in the entrance hall, looking at the photo of the lab team.";
  } else if (brauninput == "37,23") {
      braunanswer = "My mother is somewhere that looks like a spaceship bridge.";
  } else if (brauninput == "37,25") {
      braunanswer = "Celia Gibbs is in the hallway left to the security control room, speaking to Kate Carner.";
  } else if (brauninput == "37,29") {
      braunanswer = "Donald Braun is in the common area, and he seems to be searching for something. His keycard, possibly?";
  } else if (brauninput == "37,31") {
      braunanswer = "Marina is with the CEO in the room my mother escaped from. The CEO is obviously furious about what happened.";
  } else if (brauninput == "37,34") {
      braunanswer = "Kate Carner is in the hallway left to the security control room, explaining something to Celia Gibbs.";
  } else if (brauninput == "37,38") {
      braunanswer = "Fred Murphy is still in the common area, speaking to Agent 27, while the latter completely ignores him.";
  } else if (celia == 1 && kate == 1 || celia == 2 && kate == 1 || celia == 1 && kate == 2) {
      braunanswer = "The only reason for me taking Donald Braun's appearance is to get to the bridge. I shouldn't waste my time.<br><br><i>To get out of the CEO's office, enter 'D02' into the input field and press enter.</i>";
  } else if (celia == 3 && kate == 1 || celia == 1 && kate == 3) {
      braunanswer = "The only reason for me taking Donald Braun's appearance is to operate the console. We don't have a lot of time, we should act fast.";
  }
    document.getElementById("braunAnswer").innerHTML = braunanswer;
}

function marina() {
	var marinalowercase = document.getElementById("marina").value;
  var marinainput = marinalowercase.toUpperCase();
  var marinanswer;
  if (marinainput == "D01" || marinainput == "D03" || marinainput == "D04" || marinainput == "D05" || marinainput == "D06" || marinainput == "D07" || marinainput == "D08" || marinainput == "D09" || marinainput == "D10" || marinainput == "D11" || marinainput == "D12" || marinainput == "D13" || marinainput == "D14" || marinainput == "D15" || marinainput == "D16" || marinainput == "D17" || marinainput == "D18" || marinainput == "D19" || marinainput == "D20" || marinainput == "D21" || marinainput == "D22" || marinainput == "D23" || marinainput == "D24" || marinainput == "D25" || marinainput == "D26" || marinainput == "D27") {
      marinanswer = "I can't skip doors. I have to get out of the CEO's office first.";
  } else if (marinainput == "04") {
      marinanswer = "I'm getting a message <b>'Access denied'</b>. Marina must be head of security, nothing more.";
  } else if (marinainput == "D02") {
      marinanswer = "Marina just left here with the CEO. If anybody is in the entrance hall, they would be very surprised to see her leave here again. I can't risk it.";
  } else if (marinainput == "26,01" || marinainput == "26,02" || marinainput == "26,13" || marinainput == "26,21" || marinainput == "26,23" || marinainput == "26,25" || marinainput == "26,29" || marinainput == "26,34" || marinainput == "26,38") {
      marinanswer = "I have to get back to my Ziggy appearance to be able to change it into someone else's.";
  } else if (marinainput == "26,31") {
      marinanswer = "I already have her appearance.";
  } else if (marinainput == "37,02") {
      marinanswer = "The CEO is in the room my mother used to be in, yelling at Marina and figuring out how did she escape.";
  } else if (marinainput == "37,13") {
      marinanswer = "Agent 27 is in the common area, looking at his phone.";
  } else if (marinainput == "37,21") {
      marinanswer = "Laurie Haage in the entrance hall, looking at the photo of the lab team.";
  } else if (marinainput == "37,23") {
      marinanswer = "My mother is somewhere that looks like a spaceship bridge.";
  } else if (marinainput == "37,25") {
      marinanswer = "Celia Gibbs is in the hallway left to the security control room, speaking to Kate Carner.";
  } else if (marinainput == "37,29") {
      marinanswer = "Donald Braun is in the common area, and he seems to be searching for something. His keycard, possibly?";
  } else if (marinainput == "37,31") {
      marinanswer = "Marina is with the CEO in the room my mother escaped from. The CEO is obviously furious about what happened.";
  } else if (marinainput == "37,34") {
      marinanswer = "Kate Carner is in the hallway left to the security control room, explaining something to Celia Gibbs.";
  } else if (marinainput == "37,38") {
      marinanswer = "Fred Murphy is still in the common area, speaking to Agent 27, while the latter completely ignores him.";
  } else if (celia == 1 && kate == 1 || celia == 2 && kate == 1 || celia == 1 && kate == 2) {
      marinanswer = "The only reason for me taking Marina's appearance is to get to the bridge. I shouldn't waste my time.<br><br><i>To get out of the CEO's office, enter 'D02' into the input field and press enter.</i>";
  } else if (celia == 3 && kate == 1 || celia == 1 && kate == 3) {
      marinanswer = "The only reason for me taking Marina's appearance is to operate the console. We don't have a lot of time, we should act fast.";
  }
    document.getElementById("marinaAnswer").innerHTML = marinanswer;
}

function murphy() {
	var murphylowercase = document.getElementById("murphy").value;
  var murphyinput = murphylowercase.toUpperCase();
  var murphyanswer;
  if (murphyinput == "D01" || murphyinput == "D03" || murphyinput == "D04" || murphyinput == "D05" || murphyinput == "D06" || murphyinput == "D07" || murphyinput == "D08" || murphyinput == "D09" || murphyinput == "D10" || murphyinput == "D11" || murphyinput == "D12" || murphyinput == "D13" || murphyinput == "D14" || murphyinput == "D15" || murphyinput == "D16" || murphyinput == "D17" || murphyinput == "D18" || murphyinput == "D19" || murphyinput == "D20" || murphyinput == "D21" || murphyinput == "D22" || murphyinput == "D23" || murphyinput == "D24" || murphyinput == "D25" || murphyinput == "D26" || murphyinput == "D27") {
      murphyanswer = "I can't skip doors. I have to get out of the CEO's office first.";
  } else if (murphyinput == "04") {
      murphyanswer = "I'm getting a message <b>'Access denied'</b>. It would be hard to imagine Fred as the ship's captain. I'm under the impression that his colleagues don't have a lot of respect for him.";
  } else if (murphyinput == "D02") {
      murphyanswer = "Am I really sure that Fred Murphy isn't somewhere just around the corner? I can't risk it. I have to check before so that I don't run into him on my way to the bridge.";
  } else if (murphyinput == "26,01" || murphyinput == "26,02" || murphyinput == "26,13" || murphyinput == "26,21" || murphyinput == "26,23" || murphyinput == "26,25" || murphyinput == "26,29" || murphyinput == "26,31" || murphyinput == "26,34") {
      murphyanswer = "I have to get back to my Ziggy appearance to be able to change it into someone else's.";
  } else if (murphyinput == "26,38") {
      murphyanswer = "I already have his appearance.";
  } else if (murphyinput == "37,02") {
      murphyanswer = "The CEO is in the room my mother used to be in, yelling at Marina and figuring out how did she escape.";
  } else if (murphyinput == "37,13") {
      murphyanswer = "Agent 27 is in the common area, looking at his phone.";
  } else if (murphyinput == "37,21") {
      murphyanswer = "Laurie Haage in the entrance hall, looking at the photo of the lab team.";
  } else if (murphyinput == "37,23") {
      murphyanswer = "My mother is somewhere that looks like a spaceship bridge.";
  } else if (murphyinput == "37,25") {
      murphyanswer = "Celia Gibbs is in the hallway left to the security control room, speaking to Kate Carner.";
  } else if (murphyinput == "37,29") {
      murphyanswer = "Donald Braun is in the common area, and he seems to be searching for something. His keycard, possibly?";
  } else if (murphyinput == "37,31") {
      murphyanswer = "Marina is with the CEO in the room my mother escaped from. The CEO is obviously furious about what happened.";
  } else if (murphyinput == "37,34") {
      murphyanswer = "Kate Carner is in the hallway left to the security control room, explaining something to Celia Gibbs.";
  } else if (murphyinput == "37,38") {
      murphyanswer = "Fred Murphy is still in the common area, speaking to Agent 27, while the latter completely ignores him.";
  } else if (celia == 1 && kate == 1 || celia == 2 && kate == 1 || celia == 1 && kate == 2) {
      murphyanswer = "The only reason for me taking Fred Murphy's appearance is to get to the bridge. I shouldn't waste my time.<br><br><i>To get out of the CEO's office, enter 'D02' into the input field and press enter.</i>";
  } else if (celia == 3 && kate == 1 || celia == 1 && kate == 3) {
      murphyanswer = "The only reason for me taking Fred Murphy's appearance is to operate the console. We don't have a lot of time, we should act fast.";
  }
    document.getElementById("murphyAnswer").innerHTML = murphyanswer;
}

function hidePearElements() {
  document.getElementById("pearTake").style.display = "none";
  document.getElementById("pearTCard1").style.display = "none";
  document.getElementById("pearTCard2").style.display = "none";
  document.getElementById("pearTCard3").style.display = "none";
  document.getElementById("pearTCard4").style.display = "none";
  document.getElementById("pearRemove").style.display = "none";
  document.getElementById("pearRCard1").style.display = "none";
  document.getElementById("pearRCard2").style.display = "none";
  document.getElementById("pearRCard3").style.display = "none";
  document.getElementById("pearRCard4").style.display = "none";
  document.getElementById("pearRCard5").style.display = "none";
  document.getElementById("pearRCard6").style.display = "none";
  document.getElementById("pearRCard7").style.display = "none";
  document.getElementById("pearRCard8").style.display = "none";
  document.getElementById("pearReturn").style.display = "none";
}

function pear() {
	var pearlowercase = document.getElementById("pear").value;
  var pearinput = pearlowercase.toUpperCase();
  var pearrandom = [
    "This doesn't work. I should try something else.",
    "I don't think that this will help.",
    "Hmmm, no.",
    "This doesn't seem to be the right thing to do.",
  ];
  var pearanswer;
  var peartake;
  var peartcard1;
  var peartcard2;
  var peartcard3;
  var peartcard4;
  var pearremove;
  var pearrcard1;
  var pearrcard2;
  var pearrcard3;
  var pearrcard4;
  var pearrcard5;
  var pearrcard6;
  var pearrcard7;
  var pearrcard8;
  var pearreturn;
  if (pearinput == "01") {
  		pearanswer = "I'm not sure I'm completely prepared for all of this, but I guess that there's no turning back now.";
      hidePearElements();
  } else if (pearinput == "02") {
  		pearanswer = "The scary CEO Pear that I borrowed the face from.";
      hidePearElements();
  } else if (pearinput == "04") {
  		pearanswer = "The bridge console scans my face and gives me a message: <b>Welcome captain Pear.</b><br>We manage to make contact with Nahukat mothership. My mother is out of herself, explaining to the person on the other side who she is, and what's happened during all this time since they've left. The man on the other side seems to be in disbelief at first, but quickly gets ecstatic, just like my mother.<br>After establishing where the call is coming from, the Nahukat mothership informs us that it will take them three years to get to Earth. But both my mother and I know that Lakis could do a lot of damage by then.<br>We explain the situation to the mothership, and they suggest a radical plan - we should take the Laki spaceship away from Earth, with all of the Lakis on board. There is a black hole within our reach, and sending the Lakis there will make it impossible for them to invade another planet ever again.<br>My mother insists that she goes alone, but we soon realise that she can't navigate the ship. With all that drug in her system that the Lakis had been giving her, she will need some time to get her powers back. She can't take the form of captain Timothy Pear, so she won't be able to operate the console. I convince her that the only solution is that I go. We agree that there is no point in both of us taking that risk, in case that something goes wrong and somebody has to think of a plan B.<br>My mother leaves in tears through the escape pod exit, wishing me luck.<br>OK, now for the plan. I'm supposed to take the ship to the event horizon of Lazarus Black Hole, and leave with the escape pod to avoid being sucked in together with the Laki spaceship. Timing will be crucial for the success of the operation. The Nahukat mothership sends me a space map along with the instructions on how to fly the ship. I should be able to figure out how to do all of that in five minutes, right?";
      hidePearElements();
      document.getElementById("pearTake").style.display = "block";
      document.getElementById("pearTCard1").style.display = "inline";
      document.getElementById("pearRemove").style.display = "block";
      document.getElementById("pearRCard1").style.display = "inline";
      document.getElementById("pearRCard2").style.display = "inline";
      document.getElementById("pearRCard3").style.display = "inline";
      document.getElementById("pearRCard4").style.display = "inline";
      document.getElementById("pearRCard5").style.display = "inline";
      document.getElementById("pearRCard6").style.display = "inline";
      document.getElementById("pearRCard7").style.display = "inline";
      document.getElementById("pearRCard8").style.display = "inline";
      peartake = "<i>Take envelope:</i>";
      peartcard1 = "SPO07";
      pearremove = "<i>Remove <b>all of the map parts</b> and cards:</i>";
      pearrcard1 = "13";
      pearrcard2 = "21";
      pearrcard3 = "25";
      pearrcard4 = "29";
      pearrcard5 = "31";
      pearrcard6 = "33";
      pearrcard7 = "34";
      pearrcard8 = "38";
  } else if (pearinput == "08") {
  		pearanswer = "My ability to connect to animals and plants. I'm completely used to it by now.<br><br><i>To use this ability, enter ability card number <b>08</b> followed by the card number of the plant or animal you want to have an effect on in the input field, separated by a comma.</i>";
      hidePearElements();
  } else if (pearinput == "13") {
  		pearanswer = "Agent 27 who works for the PEI.";
      hidePearElements();
  } else if (pearinput == "21" || pearinput == "25" || pearinput == "29" || pearinput == "34" || pearinput == "38") {
  		pearanswer = "A scientist that works in the PEI's lab.";
      hidePearElements();
  } else if (pearinput == "23") {
  		pearanswer = "I saw that my mother went somewhere that resembles a lot to a bridge of a spaceship.";
      hidePearElements();
  } else if (pearinput == "26") {
  		pearanswer = "This ability is incredibly useful right now.<br><br><i>You can only change your appearance by using your original Digital Game Book input field above. To use this ability, enter ability card number <b>26</b> followed by the card number of the person you want to take the appearance of in the input field, separated by a comma.</i>";
      hidePearElements();
  } else if (pearinput == "28") {
  		pearanswer = "My mother's super useful gem. It's a stone from our home planet that connects us, the Nahukat people, to our true - in lack of a better term - supernatural selves.";
      hidePearElements();
  } else if (pearinput == "31") {
  		pearanswer = "The security guard that was in charge of keeping an eye on my mother.";
      hidePearElements();
  } else if (pearinput == "33") {
  		pearanswer = "My mother right next to me, finally! She seems well and in good shape, thankfully.";
      hidePearElements();
  } else if (pearinput == "37") {
  		pearanswer = "I guess this is my new ability. I have to only think of somebody, and I immediately see what this person is seeing. I promise to only use it in emergencies like this one.<br><br><i>To use this ability, enter ability card number <b>37</b> followed by the card number of the person whose eyes you want to see through in the input field, separated by a comma.</i>";
      hidePearElements();
  } else if (pearinput == "LOC03") {
      pearanswer = "I have to figure out how to get to my mother now.<br><br><i>To exit the office, enter 'D02' into the Digital Game Book input field.</i>";
      hidePearElements();
  } else if (pearinput == "LOC07") {
  		pearanswer = "There is no doubt anymore that the PEI base is actually a spaceship. There is a lot of equipment that I wouldn't know how to handle, but fortunately, my mother <b>(33)</b>, who is an experienced astronaut, is here to help. The ship is operated with the main bridge console. <b>(04)</b>.";
      hidePearElements();
  } else if (pearinput == "SPO07") {
      pearanswer = "The space map that the Nahukat mothership sent to me along with the instructions on how to travel to Lazarus Black Hole. They said that wormholes make space-time bend. So, if we imagined the 3D space as a 2D surface, and two wormhole mouths on two distant parts of this surface, travelling through it would be as if we bent the surface and put the mouths right on top of each other. Lorentz Wormhole Mouth is the nearest to me, so I should start there. Apparently, most wormholes have multiple tunnels, contrary to what I thought. So, I should choose the one that leads to the Ellis Wormhole entrance. I should enter the corresponding coordinates in the console to do so.<br><br><i>To travel from Lorentz to Ellis, enter bridge console's card number <b>04</b>, followed by a 4 number sequence, in the input field, separated by a comma. For example, if the coordinates to go to Ellis from Lorentz are 1111, enter '04,1111' in the input field and press enter.";
      hidePearElements();
  } else if (pearinput == "01,01") {
      pearanswer = "This is by far the most dangerous part of my quest of saving my mother. But I have to go through with it!";
      hidePearElements();
  } else if (pearinput == "01,02") {
      pearanswer = "This guy is obviously the absolute boss around here.";
      hidePearElements();
  } else if (pearinput == "01,04") {
      pearanswer = "Luckily, my mother is here. Otherwise I wouldn't know what to do with this!";
      hidePearElements();
  } else if (pearinput == "01,08") {
      pearanswer = "I don't think that there are many plants or animals in this place, but you never know when the power could come in handy.";
      hidePearElements();
  } else if (pearinput == "01,13") {
      pearanswer = "I've got a feeling that even the Lakis are afraid of this guy.";
      hidePearElements();
  } else if (pearinput == "01,21") {
      pearanswer = "The scientist's break is probably finished by now.";
      hidePearElements();
  } else if (pearinput == "01,23") {
      pearanswer = "I'm almost reunited with my mother!";
      hidePearElements();
  } else if (pearinput == "01,25") {
      pearanswer = "Maybe the scientists have returned from their lunch break.";
      hidePearElements();
  } else if (pearinput == "01,26") {
      pearanswer = "If I didn't have this power, things would be much more complicated right now.";
      hidePearElements();
  } else if (pearinput == "01,29") {
      pearanswer = "I wonder did he already notice that his keycard is missing.";
      hidePearElements();
  } else if (pearinput == "01,31") {
      pearanswer = "Now that she knows my mother escaped, we have to move quickly.";
      hidePearElements();
  } else if (pearinput == "01,33") {
      pearanswer = "Mother, you're finally here!";
      hidePearElements();
  } else if (pearinput == "01,34") {
      pearanswer = "Is she still in the lab?";
      hidePearElements();
  } else if (pearinput == "01,35") {
      pearanswer = "Although I'm stranded in a space limbo, seeing my father for the first time this one of the happiest moments of my life.";
      hidePearElements();
  } else if (pearinput == "01,37") {
      pearanswer = "Wow, this is the ultimate spying power! I always tried to understand other people's perspective on things, but I never thought that I would be able to do it so literally.";
      hidePearElements();
  } else if (pearinput == "01,38") {
      pearanswer = "Did Fred already finish his lunch?";
      hidePearElements();
  } else if (pearinput == "01,LOC03") {
      pearanswer = "I have to figure out how to get to my mother now.<br><br><i>To exit the office, enter 'D02' into the Digital Game Book input field.</i>";
      hidePearElements();
  } else if (pearinput == "01,LOC07") {
      pearanswer = "A spaceship hidden in plain sight, in the middle of Starchester? Unbelievable.";
      hidePearElements();
  } else if (pearinput == "01,SPO07") {
      pearanswer = "If only my mother were here! She is the astronaut in the family, not me! How am I going to figure out the coordinates? I think that space-time isn't the only thing that will be bending, my mind feels rather bent too.";
      hidePearElements();
  } else if (pearinput == "02,01" || pearinput == "02,02" || pearinput == "02,04" || pearinput == "02,08" || pearinput == "02,13" || pearinput == "02,21" || pearinput == "02,25" || pearinput == "02,26" || pearinput == "02,28" || pearinput == "02,29" || pearinput == "02,31" || pearinput == "02,33" || pearinput == "02,34" || pearinput == "02,37" || pearinput == "02,38" || pearinput == "02,LOC03" || pearinput == "02,LOC07" || pearinput == "02,SPO07") {
      pearanswer = "<i>Timothy Pear isn't here. You can't speak to him, only about him.</i>";
      hidePearElements();
  } else if (pearinput == "13,01" || pearinput == "13,02" || pearinput == "13,04" || pearinput == "13,08" || pearinput == "13,13" || pearinput == "13,21" || pearinput == "13,25" || pearinput == "13,26" || pearinput == "13,28" || pearinput == "13,29" || pearinput == "13,31" || pearinput == "13,33" || pearinput == "13,34" || pearinput == "13,37" || pearinput == "13,38" || pearinput == "13,LOC03" || pearinput == "13,LOC07" || pearinput == "13,SPO07") {
      pearanswer = "<i>Agent 27 isn't here. You can't speak to him, only about him.</i>";
      hidePearElements();
  } else if (pearinput == "21,01" || pearinput == "21,02" || pearinput == "21,04" || pearinput == "21,08" || pearinput == "21,13" || pearinput == "21,21" || pearinput == "21,25" || pearinput == "21,26" || pearinput == "21,28" || pearinput == "21,29" || pearinput == "21,31" || pearinput == "21,33" || pearinput == "21,34" || pearinput == "21,37" || pearinput == "21,38" || pearinput == "21,LOC03" || pearinput == "21,LOC07" || pearinput == "21,SPO07") {
      pearanswer = "<i>Laurie Haage isn't here. You can't speak to her, only about her.</i>";
      hidePearElements();
  } else if (pearinput == "25,01" || pearinput == "25,02" || pearinput == "25,04" || pearinput == "25,08" || pearinput == "25,13" || pearinput == "25,21" || pearinput == "25,25" || pearinput == "25,26" || pearinput == "25,28" || pearinput == "25,29" || pearinput == "25,31" || pearinput == "25,33" || pearinput == "25,34" || pearinput == "25,37" || pearinput == "25,38" || pearinput == "25,LOC03" || pearinput == "25,LOC07" || pearinput == "25,SPO07") {
      pearanswer = "<i>Celia Gibbs isn't here. You can't speak to her, only about her.</i>";
      hidePearElements();
  } else if (pearinput == "29,01" || pearinput == "29,02" || pearinput == "29,04" || pearinput == "29,08" || pearinput == "29,13" || pearinput == "29,21" || pearinput == "29,25" || pearinput == "29,26" || pearinput == "29,28" || pearinput == "29,29" || pearinput == "29,31" || pearinput == "29,33" || pearinput == "29,34" || pearinput == "29,37" || pearinput == "29,38" || pearinput == "29,LOC03" || pearinput == "29,LOC07" || pearinput == "29,SPO07") {
      pearanswer = "<i>Donald Braun isn't here. You can't speak to him, only about him.</i>";
      hidePearElements();
  } else if (pearinput == "31,01" || pearinput == "31,02" || pearinput == "31,04" || pearinput == "31,08" || pearinput == "31,13" || pearinput == "31,21" || pearinput == "31,25" || pearinput == "31,26" || pearinput == "31,28" || pearinput == "31,29" || pearinput == "31,31" || pearinput == "31,33" || pearinput == "31,34" || pearinput == "31,37" || pearinput == "31,38" || pearinput == "31,LOC03" || pearinput == "31,LOC07" || pearinput == "31,SPO07") {
      pearanswer = "<i>Marina isn't here. You can't speak to her, only about her.</i>";
      hidePearElements();
  } else if (pearinput == "33,01") {
      pearanswer = "Ziggy, I'm so proud of you. You managed to find me! When I figured out that the PEI I was investigating were, in fact, the Lakis themselves, it was already too late. They were following my every movement, with Martin's help, and they've poisoned me with their drug so that I would lose my powers. I couldn't risk saying anything to you and put you in danger. They had to be sure that you don't know anything. Otherwise, they would take you immediately too.<br>We have to find a way to stop Lakis' invasion of Earth, and to finally contact our mothership. I don't want to see history repeating!";
      hidePearElements();
  } else if (pearinput == "33,02") {
      pearanswer = "He came to see me once in my room. He is in charge of everything here, if I understood well.";
      hidePearElements();
  } else if (pearinput == "33,04") {
      pearanswer = "It seems that they've given access to the console only to a specific individual. The captain of the ship, probably.";
      hidePearElements();
  } else if (pearinput == "33,08" || pearinput == "33,26" || pearinput == "33,37") {
      pearanswer = "I'm sorry I've never shared this with you before. I was wrong to have kept it a secret, I see that now.";
      hidePearElements();
  } else if (pearinput == "33,21") {
      pearanswer = "I know she seems nice, but she is just as creepy as the rest of them.";
      hidePearElements();
  } else if (pearinput == "33,25") {
      pearanswer = "Trust me, I'll be happy if I never see any of their faces again.";
      hidePearElements();
  } else if (pearinput == "33,29") {
      pearanswer = "He is in charge of the lab. They were trying to get a hold of our powers.";
      hidePearElements();
  } else if (pearinput == "33,31") {
      pearanswer = "Poor Marina, I've tricked her with her Rubik's cube. The CEO will be giving her a hard time, I'm sure.";      hidePearElements();
  } else if (pearinput == "33,33") {
      pearanswer = "It's been hard to stay closed in that room, with nothing but a hope that you will be able to read my clues and find me. When I figured out that the PEI I was investigating were, in fact, the Lakis themselves, it was already too late. They were following my every movement, with Martin's help, and they've poisoned me with their drug so that I would lose my powers. I couldn't risk saying anything to you and put you in danger. They had to be sure that you don't know anything. Otherwise, they would take you immediately too.<br>We have to find a way to stop Lakis' invasion of Earth, and to finally contact our mothership. I don't want to see history repeating!";
      hidePearElements();
  } else if (pearinput == "33,34") {
      pearanswer = "Kate isn't very fond of me. Well, I guess none of them are.";
      hidePearElements();
  } else if (pearinput == "33,38") {
      pearanswer = "I've gotten an impression that he is the least competent member of the lab team.";
      hidePearElements();
  } else if (pearinput == "33,LOC07") {
      pearanswer = "This is a typical, well-equipped spaceship bridge. It reminds me of the old days. We should try to open the console and contact the Nhukat mothership.";
      hidePearElements();
  } else if (pearinput == "34,01" || pearinput == "34,02" || pearinput == "34,04" || pearinput == "34,08" || pearinput == "34,13" || pearinput == "34,21" || pearinput == "34,25" || pearinput == "34,26" || pearinput == "34,28" || pearinput == "34,29" || pearinput == "34,31" || pearinput == "34,33" || pearinput == "34,37" || pearinput == "34,38" || pearinput == "34,34" || pearinput == "34,LOC03" || pearinput == "34,LOC07" || pearinput == "34,SPO07") {
      pearanswer = "<i>Kate Carner isn't here. You can't speak to her, only about her.</i>";
      hidePearElements();
  } else if (pearinput == "38,01" || pearinput == "38,02" || pearinput == "38,04" || pearinput == "38,08" || pearinput == "38,13" || pearinput == "38,21" || pearinput == "38,25" || pearinput == "38,26" || pearinput == "38,28" || pearinput == "38,29" || pearinput == "38,38" || pearinput == "38,33" || pearinput == "38,34" || pearinput == "38,37" || pearinput == "38,38" || pearinput == "38,LOC03" || pearinput == "38,LOC07" || pearinput == "38,SPO07") {
      pearanswer = "<i>Fred Murphy isn't here. You can't speak to him, only about him.</i>";
      hidePearElements();
  } else if (pearinput == "04,2783" || pearinput == "04,2,7,8,3") {
      pearanswer = "As I reach the Lorentz wormhole entrance, I see four different tunnels. I enter the coordinates into the console, and the ship goes right into one of them.<br>AAAAAAAA! This is super fast and super scary!<br>The ship exits the tunnel, and there are five new choices ahead of me. Nahukat mothership sends me a message to continue from Ellis to the Visser Wormhole entrance.<br><br><i>To go to Visser from Ellis, enter bridge console card number followed by the corresponding coordinates in the input field, separated by a comma.</i>";
      hidePearElements();
  } else if (pearinput == "04,1370" || pearinput == "04,1,3,7,0") {
      pearanswer = "I enter the coordinates into the console, and the ship goes to one of the tunnels. I go through this next passage feeling less scared after I've already done this once before. At the end of the tunnel, there are three new tunnels I can choose from. Nahukat mothership tells me to go directly to Lazarus Black Hole, the exit of the tunnel is right next to it.<br><br><i>To go to Lazarus Black Hole from Visser, enter bridge console card number followed by the corresponding coordinates in the input field, separated by a comma.</i>";
      hidePearElements();
  } else if (pearinput == "04,4163" || pearinput == "04,4,1,6,3") {
      pearanswer = "Here goes nothing!<br>I enter the final coordinates into the console, and after a disturbing but quick ride, I find myself right in front of the black hole. It's breathtaking! I find myself gazing into it when I hear the Lakis forcing their way into the bridge. I hurry to the escape pod, prepared to take off as soon as we get near to the event horizon.<br>3...2...1...and go! What's happening? Have I left the ship too late? I can't...fight...the gravity...";
      hidePearElements();
      document.getElementById("pearTake").style.display = "block";
      document.getElementById("pearTCard1").style.display = "inline";
      document.getElementById("pearRemove").style.display = "block";
      document.getElementById("pearRCard1").style.display = "inline";
      document.getElementById("pearRCard2").style.display = "inline";
      document.getElementById("pearRCard3").style.display = "inline";
      document.getElementById("pearRCard4").style.display = "inline";
      document.getElementById("pearReturn").style.display = "block";
      peartake = "<i>Take location card:</i>";
      peartcard1 = "LOC08";
      pearremove = "<i>Remove cards:</i>";
      pearrcard1 = "02";
      pearrcard2 = "04";
      pearrcard3 = "SPO07";
      pearrcard4 = "LOC07";
      pearreturn = "<b>Return to your Ziggy appearance and use the usual input field above.</b>";
  } else if (pearinput == "26,01" || pearinput == "26,13" || pearinput == "26,21" || pearinput == "26,23" || pearinput == "26,25" || pearinput == "26,29" || pearinput == "26,31" || pearinput == "26,34" || pearinput == "26,38") {
      pearanswer = "I have to get back to my Ziggy appearance to be able to change it into someone else's.";
      hidePearElements();
  } else if (pearinput == "26,02") {
      pearanswer = "I already have his appearance.";
      hidePearElements();
  } else if (pearinput == "37,02") {
      pearanswer = "The CEO is in the room my mother used to be in, yelling at Marina and figuring out how did she escape.";
      hidePearElements();
  } else if (pearinput == "37,13") {
      pearanswer = "Agent 27 is in the common area, looking at his phone.";
      hidePearElements();
  } else if (pearinput == "37,21") {
      pearanswer = "Laurie Haage in the entrance hall, looking at the photo of the lab team.";
      hidePearElements();
  } else if (pearinput == "37,23") {
      pearanswer = "My mother is somewhere that looks like a spaceship bridge.";
      hidePearElements();
  } else if (pearinput == "37,25") {
      pearanswer = "Celia Gibbs is in the hallway left to the security control room, speaking to Kate Carner.";
      hidePearElements();
  } else if (pearinput == "37,29") {
      pearanswer = "Donald Braun is in the common area, and he seems to be searching for something. His keycard, possibly?";
      hidePearElements();
  } else if (pearinput == "37,31") {
      pearanswer = "Marina is with the CEO in the room my mother escaped from. The CEO is obviously furious about what happened.";
      hidePearElements();
  } else if (pearinput == "37,34") {
      pearanswer = "Kate Carner is in the hallway left to the security control room, explaining something to Celia Gibbs.";
      hidePearElements();
  } else if (pearinput == "37,38") {
      pearanswer = "Fred Murphy is still in the common area, speaking to Agent 27, while the latter completely ignores him.";
      hidePearElements();
  } else if (pearinput == "D01" || pearinput == "D03" || pearinput == "D04" || pearinput == "D05" || pearinput == "D06" || pearinput == "D07" || pearinput == "D08" || pearinput == "D09" || pearinput == "D10" || pearinput == "D11" || pearinput == "D12" || pearinput == "D13" || pearinput == "D14" || pearinput == "D15" || pearinput == "D16" || pearinput == "D17" || pearinput == "D18" || pearinput == "D19" || pearinput == "D20" || pearinput == "D21" || pearinput == "D22" || pearinput == "D23" || pearinput == "D24" || pearinput == "D25" || pearinput == "D26" || pearinput == "D27") {
      pearanswer = "I can't skip doors. I have to get out of the CEO's office first.";
      hidePearElements();
  } else if (pearinput == "D02") {
      pearanswer = "The CEO just left the room, and there is a great chance that somebody saw him do it. I can't risk pretending I was the CEO, they would immediately know that something's wrong.";
      hidePearElements();
	} else {
	    pearanswer = pearrandom[Math.floor(Math.random()*pearrandom.length)];
      hidePearElements();
  }
    document.getElementById("pearAnswer").innerHTML = pearanswer;
  	document.getElementById("pearTake").innerHTML = peartake;
  	document.getElementById("pearTCard1").innerHTML = peartcard1;
  	document.getElementById("pearTCard2").innerHTML = peartcard2;
  	document.getElementById("pearTCard3").innerHTML = peartcard3;
  	document.getElementById("pearTCard4").innerHTML = peartcard4;
  	document.getElementById("pearRemove").innerHTML = pearremove;
  	document.getElementById("pearRCard1").innerHTML = pearrcard1;
  	document.getElementById("pearRCard2").innerHTML = pearrcard2;
  	document.getElementById("pearRCard3").innerHTML = pearrcard3;
  	document.getElementById("pearRCard4").innerHTML = pearrcard4;
  	document.getElementById("pearRCard5").innerHTML = pearrcard5;
  	document.getElementById("pearRCard6").innerHTML = pearrcard6;
  	document.getElementById("pearRCard7").innerHTML = pearrcard7;
  	document.getElementById("pearRCard8").innerHTML = pearrcard8;
  	document.getElementById("pearReturn").innerHTML = pearreturn;
}

function hideGibbsElements() {
  document.getElementById("gibbsTake").style.display = "none";
  document.getElementById("gibbsTCard1").style.display = "none";
  document.getElementById("gibbsRemove").style.display = "none";
  document.getElementById("gibbsRCard1").style.display = "none";
  document.getElementById("gibbsReturn").style.display = "none";
  document.getElementById("gibbsNCard1").style.display = "none";
  document.getElementById("gibbsContinue").style.display = "none";
}

function gibbs() {
	var gibbslowercase = document.getElementById("gibbs").value;
  var gibbsinput = gibbslowercase.toUpperCase();
  var gibbsanswer;
  var gibbstake;
  var gibbstcard1;
  var gibbsremove;
  var gibbsrcard1;
  var gibbsreturn;
  var gibbsncard1;
  var gibbscontinue;
  if (gibbsinput == "D01" || gibbsinput == "D03" || gibbsinput == "D06" || gibbsinput == "D07" || gibbsinput == "D08" || gibbsinput == "D09" || gibbsinput == "D10" || gibbsinput == "D12" || gibbsinput == "D13" || gibbsinput == "D14" || gibbsinput == "D15" || gibbsinput == "D16" || gibbsinput == "D17" || gibbsinput == "D18" || gibbsinput == "D19" || gibbsinput == "D20" || gibbsinput == "D21" || gibbsinput == "D26" || gibbsinput == "D27") {
      gibbsanswer = "I should go meet my mother on the bridge.";
      hideGibbsElements();
  } else if (gibbsinput == "04") {
      gibbsanswer = "I'm getting a message <b>'Access denied'</b>. Well, I guess she is a big young to be in charge of the ship.";
      hideGibbsElements();
  } else if (gibbsinput == "D02" && door == 1) {
      door = 2;
      celia = 2;
      gibbsanswer = "I open the door and go to the entrance hall. Laurie Haage is there, and she nods in my direction. I can also see Agent 27, Donald Braun, and Fred Murphy in the common area.";
      hideGibbsElements();
      document.getElementById("gibbsRemove").style.display = "block";
      document.getElementById("gibbsRCard1").style.display = "inline";
      document.getElementById("gibbsReturn").style.display = "block";
      document.getElementById("gibbsNCard1").style.display = "inline";
      document.getElementById("gibbsContinue").style.display = "block";
      gibbsremove = "<i>Remove card:</i>";
      gibbsrcard1 = "LOC03";
      gibbsreturn = "<i>You can't use your ability to take someone's appearance right now, in front of the Lakis. Turn the following card over, face down, for the time being:</i>";
      gibbsncard1 = "26";
      gibbscontinue = "<b>Continue to play in Celia Gibbs' appearance, using this input field.</b>";
  } else if (gibbsinput == "D02" && door == 2 || gibbsinput == "D02" && door == 3 || gibbsinput == "D02" && door == 4) {
      gibbsanswer = "I should go meet my mother on the bridge.";
      hideGibbsElements();
  } else if (gibbsinput == "D04" && door == 1) {
      gibbsanswer = "I can't skip doors.";
      hideGibbsElements();
  } else if (gibbsinput == "D04" && door == 2) {
      gibbsanswer = "Am I really sure that this is a safe path to take? Maybe I should check it before.";
      hideGibbsElements();
  } else if (gibbsinput == "D05" && door == 1) {
      gibbsanswer = "I can't skip doors.";
      hideGibbsElements();
  } else if (gibbsinput == "D05" && door == 2) {
      door = 3;
      gibbsanswer = "I pass the common area, trying not to make eye contact with anybody. I open the door and find myself in the corridor right to the security control room. I hear the CEO yelling from one of the rooms in the right staff quarters wing.";
      hideGibbsElements();
  } else if (gibbsinput == "D05" && door == 3 || gibbsinput == "D05" && door == 4) {
      gibbsanswer = "I should go meet my mother on the bridge.";
      hideGibbsElements();
  } else if (gibbsinput == "D11" && door == 1 || gibbsinput == "D11" && door == 2) {
      gibbsanswer = "I can't skip doors.";
      hideGibbsElements();
  } else if (gibbsinput == "D11" && door == 3) {
      door = 4;
      gibbsanswer = "I pass the doors and enter a corridor that should lead me to the bridge.";
      hideGibbsElements();
  } else if (gibbsinput == "D11" && door == 4) {
      gibbsanswer = "I should go meet my mother on the bridge.";
      hideGibbsElements();
  } else if (gibbsinput == "D22" && door == 1 || gibbsinput == "D22" && door == 2 || gibbsinput == "D22" && door == 3) {
      gibbsanswer = "I can't skip doors.";
      hideGibbsElements();
  } else if (gibbsinput == "D22" && door == 4) {
      gibbsanswer = "This looks like an escape pod. An there is another exit from here!";
      hideGibbsElements();
  } else if (gibbsinput == "D23" && door == 1 || gibbsinput == "D23" && door == 2 || gibbsinput == "D23" && door == 3) {
      gibbsanswer = "I can't skip doors.";
      hideGibbsElements();
  } else if (gibbsinput == "D23" && door == 4) {
      celia = 3;
      gibbsanswer = "I finally get to the bridge. My mother is there, and I quickly change my appearance back to Ziggy. This brings a smile of relief to her face, and we jump into each other's arms.";
      hideGibbsElements();
      document.getElementById("gibbsTake").style.display = "block";
      document.getElementById("gibbsTCard1").style.display = "inline";
      document.getElementById("gibbsRemove").style.display = "block";
      document.getElementById("gibbsRCard1").style.display = "inline";
      document.getElementById("gibbsReturn").style.display = "block";
      document.getElementById("gibbsNCard1").style.display = "inline";
      document.getElementById("gibbsContinue").style.display = "block";
      gibbstake = "<i>Take location card:</i>";
      gibbstcard1 = "LOC07";
      gibbsremove = "<i>Remove card:</i>";
      gibbsrcard1 = "23";
      gibbsreturn = "<i>You can use your power again. Turn the following card over, face up:</i>";
      gibbsncard1 = "26";
      gibbscontinue = "<b>Return to your Ziggy appearance and use the usual input field above.</b>";
  } else if (gibbsinput == "D24" && door == 1 || gibbsinput == "D24" && door == 2 || gibbsinput == "D24" && door == 3) {
      gibbsanswer = "I can't skip doors.";
      hideGibbsElements();
  } else if (gibbsinput == "D24" && door == 4) {
      gibbsanswer = "A storage filled with things. I don't have time to look through all of it, really.";
      hideGibbsElements();
  } else if (gibbsinput == "D25" && door == 1 || gibbsinput == "D25" && door == 2 || gibbsinput == "D25" && door == 3) {
      gibbsanswer = "I can't skip doors.";
      hideGibbsElements();
  } else if (gibbsinput == "D25" && door == 4) {
      gibbsanswer = "A cryogenic chamber! If there were still any doubts that this is a spaceship, for sure there aren't anymore.";
      hideGibbsElements();
  } else if (gibbsinput == "26,01" && celia == 1 && kate == 1 || gibbsinput == "26,02" && celia == 1 && kate == 1 || gibbsinput == "26,13" && celia == 1 && kate == 1 || gibbsinput == "26,21" && celia == 1 && kate == 1 || gibbsinput == "26,23" && celia == 1 && kate == 1 || gibbsinput == "26,29" && celia == 1 && kate == 1 || gibbsinput == "26,31" && celia == 1 && kate == 1 || gibbsinput == "26,34" && celia == 1 &&  kate == 1 || gibbsinput == "26,38" && celia == 1 && kate == 1 || gibbsinput == "26,01" && celia == 1 && kate == 2 || gibbsinput == "26,02" && celia == 1 && kate == 2 || gibbsinput == "26,13" && celia == 1 && kate == 2 || gibbsinput == "26,21" && celia == 1 && kate == 2 || gibbsinput == "26,23" && celia == 1 && kate == 2 || gibbsinput == "26,29" && celia == 1 && kate == 2 || gibbsinput == "26,31" && celia == 1 && kate == 2 || gibbsinput == "26,34" && celia == 1 &&  kate == 1 || gibbsinput == "26,38" && celia == 1 && kate == 2 || gibbsinput == "26,01" && celia == 3 && kate == 1 || gibbsinput == "26,02" && celia == 3 && kate == 1 || gibbsinput == "26,13" && celia == 3 && kate == 1 || gibbsinput == "26,21" && celia == 3 && kate == 1 || gibbsinput == "26,23" && celia == 3 && kate == 1 || gibbsinput == "26,29" && celia == 3 && kate == 1 || gibbsinput == "26,31" && celia == 3 && kate == 1 || gibbsinput == "26,34" && celia == 3 && kate == 1 || gibbsinput == "26,38" && celia == 3 && kate == 1 || gibbsinput == "26,01" && celia == 1 && kate == 3 || gibbsinput == "26,02" && celia == 1 && kate == 3 || gibbsinput == "26,13" && celia == 1 && kate == 3 || gibbsinput == "26,21" && celia == 1 && kate == 3 || gibbsinput == "26,23" && celia == 1 && kate == 3 || gibbsinput == "26,29" && celia == 1 && kate == 3 || gibbsinput == "26,31" && celia == 1 && kate == 3 || gibbsinput == "26,34" && celia == 1 && kate == 3 || gibbsinput == "26,38" && celia == 1 && kate == 3) {
      gibbsanswer = "I have to get back to my Ziggy appearance to be able to change it into someone else's.";
      hideGibbsElements();
  } else if (gibbsinput == "26,01" && celia == 2 && kate == 1 || gibbsinput == "26,02" && celia == 2 && kate == 1 || gibbsinput == "26,13" && celia == 2 && kate == 1 || gibbsinput == "26,21" && celia == 2 && kate == 1 || gibbsinput == "26,23" && celia == 2 && kate == 1 || gibbsinput == "26,29" && celia == 2 && kate == 1 || gibbsinput == "26,31" && celia == 2 && kate == 1 || gibbsinput == "26,34" && celia == 2 && kate == 1 || gibbsinput == "26,38" && celia == 2 && kate == 1) {
      gibbsanswer = "<i>You can't change your appearance now. It's too risky, somebody could see you.</i>";
      hideGibbsElements();
  } else if (gibbsinput == "26,25") {
      gibbsanswer = "I already have her appearance.";
      hideGibbsElements();
  } else if (gibbsinput == "37,02") {
      gibbsanswer = "The CEO is in the room my mother used to be in, yelling at Marina and figuring out how did she escape.";
      hideGibbsElements();
  } else if (gibbsinput == "37,13") {
      gibbsanswer = "Agent 27 is in the common area, looking at his phone.";
      hideGibbsElements();
  } else if (gibbsinput == "37,21") {
      gibbsanswer = "Laurie Haage in the entrance hall, looking at the photo of the lab team.";
      hideGibbsElements();
  } else if (gibbsinput == "37,23") {
      gibbsanswer = "My mother is somewhere that looks like a spaceship bridge.";
      hideGibbsElements();
  } else if (gibbsinput == "37,25") {
      gibbsanswer = "Celia Gibbs is in the hallway left to the security control room, speaking to Kate Carner.";
      hideGibbsElements();
  } else if (gibbsinput == "37,29") {
      gibbsanswer = "Donald Braun is in the common area, and he seems to be searching for something. His keycard, possibly?";
      hideGibbsElements();
  } else if (gibbsinput == "37,31") {
      gibbsanswer = "Marina is with the CEO in the room my mother escaped from. The CEO is obviously furious about what happened.";
      hideGibbsElements();
  } else if (gibbsinput == "37,34") {
      gibbsanswer = "Kate Carner is in the hallway left to the security control room, explaining something to Celia Gibbs.";
      hideGibbsElements();
  } else if (gibbsinput == "37,38") {
      gibbsanswer = "Fred Murphy is still in the common area, speaking to Agent 27, while the latter completely ignores him.";
      hideGibbsElements();
  } else if (celia == 1 && kate == 1 || celia == 1 && kate == 2) {
      gibbsanswer = "The only reason for me taking Celia Gibbs's appearance is to get to the bridge. I shouldn't waste my time.<br><i>To get out of the CEO's office, enter 'D02' into the input field and press enter.</i>";
      hideGibbsElements();
  } else if (celia == 2 && kate == 1) {
      gibbsanswer = "The only reason for me taking Celia Gibbs's appearance is to get to the bridge. I shouldn't waste my time.";
      hideGibbsElements();
  } else if (celia == 3 && kate == 1 || celia == 1 && kate == 3) {
      gibbsanswer = "The only reason for me taking Celia Gibbs's appearance is to operate the console. We don't have a lot of time, we should act fast.";
      hideGibbsElements();
  }
    document.getElementById("gibbsAnswer").innerHTML = gibbsanswer;
  	document.getElementById("gibbsTake").innerHTML = gibbstake;
  	document.getElementById("gibbsTCard1").innerHTML = gibbstcard1;
  	document.getElementById("gibbsRemove").innerHTML = gibbsremove;
  	document.getElementById("gibbsRCard1").innerHTML = gibbsrcard1;
  	document.getElementById("gibbsReturn").innerHTML = gibbsreturn;
  	document.getElementById("gibbsNCard1").innerHTML = gibbsncard1;
  	document.getElementById("gibbsContinue").innerHTML = gibbscontinue;
}

function hideCarnerElements() {
  document.getElementById("carnerTake").style.display = "none";
  document.getElementById("carnerTCard1").style.display = "none";
  document.getElementById("carnerRemove").style.display = "none";
  document.getElementById("carnerRCard1").style.display = "none";
  document.getElementById("carnerReturn").style.display = "none";
  document.getElementById("carnerNCard1").style.display = "none";
  document.getElementById("carnerContinue").style.display = "none";
}

function carner() {
	var carnerlowercase = document.getElementById("carner").value;
  var carnerinput = carnerlowercase.toUpperCase();
  var carneranswer;
  var carnertake;
  var carnertcard1;
  var carnerremove;
  var carnerrcard1;
  var carnerreturn;
  var carnerncard1;
  var carnercontinue;
  if (carnerinput == "D01" || carnerinput == "D03" || carnerinput == "D06" || carnerinput == "D07" || carnerinput == "D08" || carnerinput == "D09" || carnerinput == "D10" || carnerinput == "D12" || carnerinput == "D13" || carnerinput == "D14" || carnerinput == "D15" || carnerinput == "D16" || carnerinput == "D17" || carnerinput == "D18" || carnerinput == "D19" || carnerinput == "D20" || carnerinput == "D21" || carnerinput == "D26" || carnerinput == "D27") {
      carneranswer = "I should go meet my mother on the bridge.";
      hideCarnerElements();
  } else if (carnerinput == "04") {
      carneranswer = "I'm getting a message <b>'Access denied'</b>. Kate doesn't seem to be the captain of the ship. She is more of a lab geek.";
      hideCarnerElements();
  } else if (carnerinput == "D02" && door == 1) {
      door = 2;
      kate = 2;
      carneranswer = "I open the door and go to the entrance hall. Laurie Haage is there, and she nods in my direction. I can also see Agent 27, Donald Braun, and Fred Murphy in the common area.";
      hideCarnerElements();
      document.getElementById("carnerRemove").style.display = "block";
      document.getElementById("carnerRCard1").style.display = "inline";
      document.getElementById("carnerReturn").style.display = "block";
      document.getElementById("carnerNCard1").style.display = "inline";
      document.getElementById("carnerContinue").style.display = "block";
      carnerremove = "<i>Remove card:</i>";
      carnerrcard1 = "LOC03";
      carnerreturn = "<i>You can't use your ability to take someone's appearance right now, in front of the Lakis. Turn the following card over, face down, for the time being:</i>";
      carnerncard1 = "26";
      carnercontinue = "<b>Continue to play in Kate Carner's appearance, using this input field.</b>";
  } else if (carnerinput == "D02" && door == 2 || carnerinput == "D02" && door == 3 || carnerinput == "D02" && door == 4) {
      carneranswer = "I should go meet my mother on the bridge.";
      hideCarnerElements();
  } else if (carnerinput == "D04" && door == 1) {
      carneranswer = "I can't skip doors.";
      hideCarnerElements();
  } else if (carnerinput == "D04" && door == 2) {
      carneranswer = "Am I really sure that this is a safe path to take? Maybe I should check it before.";
      hideCarnerElements();
  } else if (carnerinput == "D05" && door == 1) {
      carneranswer = "I can't skip doors.";
      hideCarnerElements();
  } else if (carnerinput == "D05" && door == 2) {
      door = 3;
      carneranswer = "I pass the common area, trying not to make eye contact with anybody. I open the door and find myself in the corridor right to the security control room. I hear the CEO yelling from one of the rooms in the right staff quarters wing.";
      hideCarnerElements();
  } else if (carnerinput == "D05" && door == 3 || carnerinput == "D05" && door == 4) {
      carneranswer = "I should go meet my mother on the bridge.";
      hideCarnerElements();
  } else if (carnerinput == "D11" && door == 1 || carnerinput == "D11" && door == 2) {
      carneranswer = "I can't skip doors.";
      hideCarnerElements();
  } else if (carnerinput == "D11" && door == 3) {
      door = 4;
      carneranswer = "I pass the doors and enter a corridor that should lead me to the bridge.";
      hideCarnerElements();
  } else if (carnerinput == "D11" && door == 4) {
      carneranswer = "I should go meet my mother on the bridge.";
      hideCarnerElements();
  } else if (carnerinput == "D22" && door == 1 || carnerinput == "D22" && door == 2 || carnerinput == "D22" && door == 3) {
      carneranswer = "I can't skip doors.";
      hideCarnerElements();
  } else if (carnerinput == "D22" && door == 4) {
      carneranswer = "This looks like an escape pod. An there is another exit from here!";
      hideCarnerElements();
  } else if (carnerinput == "D23" && door == 1 || carnerinput == "D23" && door == 2 || carnerinput == "D23" && door == 3) {
      carneranswer = "I can't skip doors.";
      hideCarnerElements();
  } else if (carnerinput == "D23" && door == 4) {
      kate = 3;
      carneranswer = "I finally get to the bridge. My mother is there, and I quickly change my appearance back to Ziggy. This brings a smile of relief to her face, and we jump into each other's arms.";
      hideCarnerElements();
      document.getElementById("carnerTake").style.display = "block";
      document.getElementById("carnerTCard1").style.display = "inline";
      document.getElementById("carnerRemove").style.display = "block";
      document.getElementById("carnerRCard1").style.display = "inline";
      document.getElementById("carnerReturn").style.display = "block";
      document.getElementById("carnerNCard1").style.display = "inline";
      document.getElementById("carnerContinue").style.display = "block";
      carnertake = "<i>Take location card:</i>";
      carnertcard1 = "LOC07";
      carnerremove = "<i>Remove card:</i>";
      carnerrcard1 = "23";
      carnerreturn = "<i>You can use your power again. Turn the following card over, face up:</i>";
      carnerncard1 = "26";
      carnercontinue = "<b>Return to your Ziggy appearance and use the usual input field above.</b>";
  } else if (carnerinput == "D24" && door == 1 || carnerinput == "D24" && door == 2 || carnerinput == "D24" && door == 3) {
      carneranswer = "I can't skip doors.";
      hideCarnerElements();
  } else if (carnerinput == "D24" && door == 4) {
      carneranswer = "A storage filled with things. I don't have time to look through all of it, really.";
      hideCarnerElements();
  } else if (carnerinput == "D25" && door == 1 || carnerinput == "D25" && door == 2 || carnerinput == "D25" && door == 3) {
      carneranswer = "I can't skip doors.";
      hideCarnerElements();
  } else if (carnerinput == "D25" && door == 4) {
      carneranswer = "A cryogenic chamber! If there were still any doubts that this is a spaceship, for sure there aren't anymore.";
      hideCarnerElements();
  } else if (carnerinput == "26,01" && celia == 1 && kate == 1 || carnerinput == "26,02" && celia == 1 && kate == 1 || carnerinput == "26,13" && celia == 1 && kate == 1 || carnerinput == "26,21" && celia == 1 && kate == 1 || carnerinput == "26,23" && celia == 1 && kate == 1 || carnerinput == "26,25" && celia == 1 && kate == 1 || carnerinput == "26,29" && celia == 1 && kate == 1 || carnerinput == "26,31" && celia == 1 &&  kate == 1 || carnerinput == "26,38" && celia == 1 && kate == 1 || carnerinput == "26,01" && celia == 2 && kate == 1 || carnerinput == "26,02" && celia == 2 && kate == 1 || carnerinput == "26,13" && celia == 2 && kate == 1 || carnerinput == "26,21" && celia == 2 && kate == 1 || carnerinput == "26,23" && celia == 2 && kate == 1 || carnerinput == "26,25" && celia == 2 && kate == 1 || carnerinput == "26,29" && celia == 2 && kate == 1 || carnerinput == "26,31" && celia == 1 &&  kate == 1 || carnerinput == "26,38" && celia == 2 && kate == 1 || carnerinput == "26,01" && celia == 3 && kate == 1 || carnerinput == "26,02" && celia == 3 && kate == 1 || carnerinput == "26,13" && celia == 3 && kate == 1 || carnerinput == "26,21" && celia == 3 && kate == 1 || carnerinput == "26,23" && celia == 3 && kate == 1 || carnerinput == "26,25" && celia == 3 && kate == 1 || carnerinput == "26,29" && celia == 3 && kate == 1 || carnerinput == "26,31" && celia == 3 && kate == 1 || carnerinput == "26,38" && celia == 3 && kate == 1 || carnerinput == "26,01" && celia == 1 && kate == 3 || carnerinput == "26,02" && celia == 1 && kate == 3 || carnerinput == "26,13" && celia == 1 && kate == 3 || carnerinput == "26,21" && celia == 1 && kate == 3 || carnerinput == "26,23" && celia == 1 && kate == 3 || carnerinput == "26,25" && celia == 1 && kate == 3 || carnerinput == "26,29" && celia == 1 && kate == 3 || carnerinput == "26,31" && celia == 1 && kate == 3 || carnerinput == "26,38" && celia == 1 && kate == 3) {
      carneranswer = "I have to get back to my Ziggy appearance to be able to change it into someone else's.";
      hideCarnerElements();
  } else if (carnerinput == "26,01" && celia == 1 && kate == 2 || carnerinput == "26,02" && celia == 1 && kate == 2 || carnerinput == "26,13" && celia == 1 && kate == 2 || carnerinput == "26,21" && celia == 1 && kate == 2 || carnerinput == "26,23" && celia == 1 && kate == 2 || carnerinput == "26,25" && celia == 1 && kate == 2 || carnerinput == "26,29" && celia == 1 && kate == 2 || carnerinput == "26,31" && celia == 1 && kate == 2 || carnerinput == "26,38" && celia == 1 && kate == 2) {
      carneranswer = "<i>You can't change your appearance now. It's too risky, somebody could see you.</i>";
      hideCarnerElements();
  } else if (carnerinput == "26,34") {
      carneranswer = "I already have her appearance.";
      hideCarnerElements();
  } else if (carnerinput == "37,02") {
      carneranswer = "The CEO is in the room my mother used to be in, yelling at Marina and figuring out how did she escape.";
      hideCarnerElements();
  } else if (carnerinput == "37,13") {
      carneranswer = "Agent 27 is in the common area, looking at his phone.";
      hideCarnerElements();
  } else if (carnerinput == "37,21") {
      carneranswer = "Laurie Haage in the entrance hall, looking at the photo of the lab team.";
      hideCarnerElements();
  } else if (carnerinput == "37,23") {
      carneranswer = "My mother is somewhere that looks like a spaceship bridge.";
      hideCarnerElements();
  } else if (carnerinput == "37,25") {
      carneranswer = "Celia Gibbs is in the hallway left to the security control room, speaking to Kate Carner.";
      hideCarnerElements();
  } else if (carnerinput == "37,29") {
      carneranswer = "Donald Braun is in the common area, and he seems to be searching for something. His keycard, possibly?";
      hideCarnerElements();
  } else if (carnerinput == "37,31") {
      carneranswer = "Marina is with the CEO in the room my mother escaped from. The CEO is obviously furious about what happened.";
      hideCarnerElements();
  } else if (carnerinput == "37,34") {
      carneranswer = "Kate Carner is in the hallway left to the security control room, explaining something to Celia Gibbs.";
      hideCarnerElements();
  } else if (carnerinput == "37,38") {
      carneranswer = "Fred Murphy is still in the common area, speaking to Agent 27, while the latter completely ignores him.";
      hideCarnerElements();
  } else if (celia == 1 && kate == 1 || celia == 2 && kate == 1) {
      carneranswer = "The only reason for me taking Kate Carner's appearance is to get to the bridge. I shouldn't waste my time.<br><i>To get out of the CEO's office, enter 'D02' into the input field and press enter.</i>";
      hideCarnerElements();
  } else if (celia == 1 && kate == 2) {
      carneranswer = "The only reason for me taking Kate Carner's appearance is to get to the bridge. I shouldn't waste my time.";
      hideCarnerElements();
  } else if (celia == 3 && kate == 1 || celia == 1 && kate == 3) {
      carneranswer = "The only reason for me taking Kate Carner's appearance is to operate the console. We don't have a lot of time, we should act fast.";
      hideCarnerElements();
  }
    document.getElementById("carnerAnswer").innerHTML = carneranswer;
  	document.getElementById("carnerTake").innerHTML = carnertake;
  	document.getElementById("carnerTCard1").innerHTML = carnertcard1;
  	document.getElementById("carnerRemove").innerHTML = carnerremove;
  	document.getElementById("carnerRCard1").innerHTML = carnerrcard1;
  	document.getElementById("carnerReturn").innerHTML = carnerreturn;
  	document.getElementById("carnerNCard1").innerHTML = carnerncard1;
  	document.getElementById("carnerContinue").innerHTML = carnercontinue;
}
