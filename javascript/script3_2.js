function bookPthreeKeyPress(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("bookPthreeButton").click();
        return false;
    }
    return true;
};

function hidePthreeElements() {
  document.getElementById("clickToBridge").style.display = "none";
}

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
  if (z == "03") {
  		answerthree = "The vent is too high for me to reach it.";
      hidePthreeElements();
  } else if (z == "06") {
  		answerthree = "The replacement chair Marina ordered for me. <br><i>Take cards <b>17</b> and <b>19</b>. Remove card <b>06</b>.</i>";
      hidePthreeElements();
  } else if (z == "07") {
  		answerthree = "The keycard that opens the doors in the staff quarters.<br><i>To use the card, enter the keycard card's number <b>07</b>, followed by the number of the door you want to open in the Digital Game Book input field, separated by a comma. For example, if you want to open door D01, enter '07,D01' in the Digital Game Book input field and press enter.</i>";
      hidePthreeElements();
  } else if (z == "09") {
  		answerthree = "Marina's Rubik's cube. I could simply mix it, by I know that she will solve it very quickly. I have to think of a better idea.";
      hidePthreeElements();
  } else if (z == "11") {
  		answerthree = "A classic pocket knife I found hidden under the chair seat cushion.";
      hidePthreeElements();
  } else if (z == "12") {
  		answerthree = "Marina, the security guard that's in charge of guarding the door of the room they keep me in. She likes to speak about herself. And she loves her Rubik's cube, she's very proud of how quickly she can solve it. I guess she's bored with standing here as much as I am.";
      hidePthreeElements();
  } else if (z == "14") {
  		answerthree = "<i>I sit on the chair and...AAAAA! It breaks! As I fall on the floor and fortunately don't hurt myself a lot, I find a pocket knife hidden under the chair seat cushion. <br>Marina notices what happened and, after asking am I OK, immediately calls somebody to ask for a new chair to be delivered.</i><br>'We may be holding you here against your will, but you should at least have a decent chair. They will deliver it shortly.'<i>, she says. <br>Take card <b>11</b>. Remove card <b>14</b>.</i>";
      hidePthreeElements();
  } else if (z == "16") {
  		answerthree = "The vent is closed shut. Two screws are holding the cover.";
      hidePthreeElements();
  } else if (z == "17") {
  		answerthree = "An empty box the chair was delivered in. It's quite big considering it was holding only a chair.";
      hidePthreeElements();
  } else if (z == "19") {
  		answerthree = "The new chair that was delivered to me.";
      hidePthreeElements();
  } else if (z == "24") {
  		answerthree = "The platform trolley they used to deliver the box with the chair is still here in the hallway.";
      hidePthreeElements();
  } else if (z == "28") {
  		answerthree = "This must look ridiculous, but now I can both see and move around.";
      hidePthreeElements();
  } else if (z == "31") {
  		answerthree = "Marina, a security guard who works for the PEI.";
      hidePthreeElements();
  } else if (z == "32") {
  		answerthree = "I've changed the positions of two parts of the cube. It should be unsolvable now.";
      hidePthreeElements();
  } else if (z == "33") {
  		answerthree = "I've been held here by the Lakis for too long. Could it be possible that Ziggy managed to find me?";
      hidePthreeElements();
  } else if (z == "36") {
  		answerthree = "The box is now on the trolley.";
      hidePthreeElements();
  } else if (z == "39") {
  		answerthree = "The box is just big enough for me to fit in it.";
      hidePthreeElements();
  } else if (z == "LOC04") {
  		answerthree = "The Lakis have kept me in this room since they kidnapped me. There's almost nothing here. An old chair <b>(14)</b>, an even older table, a bed, an empty closet, and an air vent <b>(03)</b> that brings oxygen into this windowless prison. The woman that guards my door, Marina <b>(12)</b>, is turning her Rubik's cube, which seems to be the thing she enjoys the most.";
      hidePthreeElements();
  } else if (z == "LOC05") {
      answerthree = "The hallway is empty, fortunately. The platform trolley <b>(24)</b> my chair was brought on is still there.";
      hidePthreeElements();
  } else if (z == "LOC06") {
      answerthree = "Marina <b>(31)</b> is here, still occupied with her Rubik's cube. The system remote controller <b>(SPO05)</b>, <b>(SPO06)</b> is lying on the desk behind her.";
      hidePthreeElements();
  } else if (z == "SPO05") {
      answerthree = "This is the front side of the remote controller for the security system of the floor. The front side of the remote controller has buttons for some of the standard functions. However, I don't see a button for opening the doors on the floor.";
      hidePthreeElements();
  } else if (z == "SPO06") {
      answerthree = "This is the backside of the remote controller for the security system of the floor. It has buttons with symbols of the Lakis alphabet. I never learned it in school, it didn't seem relevant at the time.<br><i>To use the controller to open all the doors on the floor, enter special object card number SPO06 in the Digital Game Book input field, followed by the sequence of numbers corresponding to the right letters of the Lakis alphabet on the remote controller, spelling 'OPEN', separated by commas. For example, if you think that 'OPEN' is spelled with the first four letters on the remote controller, enter 'SPO06,01,02,03,04' in the Digital Game Book input field.";
      hidePthreeElements();
  } else if (z == "12,09" || z == "09,12") {
      answerthree = "Go ahead, mix it up!";
      hidePthreeElements();
  } else if (z == "12,11") {
      answerthree = "I decide that I will not show her the pocket knife I found in the chair.";
      hidePthreeElements();
  } else if (z == "12,14") {
      answerthree = "The man who was here before you complained that it was wobbly. In my opinion, at least the boss could order you a proper chair.";
      hidePthreeElements();
  } else if (z == "12,12") {
      answerthree = "Oh, did I tell you I've beaten my previous record for solving the Rubik's cube? It's 55 seconds now! It doesn't matter how well the cube is mixed in the beginning, I'll solve it in no time. Here, try to mix it up as hard as you can. Come on! <br><i>Marina gives me her Rubik's cube to mix it up, as I've done already multiple times.<br>Take card <b>09</b> if you haven't already.</i>";
      hidePthreeElements();
  } else if (z == "12,32" || z == "32,12") {
      answerthree = "You've mixed it up? OK, count my time!<br><i>Marina takes the cube and starts turning it. After half of minute, she becomes agitated.</i><br>I don't understand, something's wrong...How did you mix this so well? I'll be back in the moment. I can't concentrate with you looking at me like this.<br><i>Marina leaves, and at the same time delivery arrives. The Lakis kindly bring me a new chair.<br>Take card <b>06</b>. Remove cards <b>12</b> and <b>32</b>.</i>";
      hidePthreeElements();
  } else if (z == "12,33") {
      answerthree = "Are you up for mixing up my Rubik's cube one more time? Here, try to mix it up as hard as you can, and I'll solve it in a minute. Come on! <br><i>Marina gives me her Rubik's cube to mix it up, as I've done already multiple times.<br>Take card <b>09</b> if you haven't already.</i>";
      hidePthreeElements();
  } else if (z == "12,03" || z == "12,16") {
      answerthree = "Did you hear a sound coming from the air vent? Hmmm, I don't hear anything anymore. I guess I imagined it.";
      hidePthreeElements();
  } else if (z == "31,07" || z == "31,33" || z == "31,42" || z == "31,31" || z == "31,LOC06" || z == "31,SPO05" || z == "31,SPO06") {
      answerthree = "<i>It's probably best not to speak to Marina and make her realise I'm hiding in a box right under her nose.</i>";
      hidePthreeElements();
  } else if (z == "33,03" || z == "33,16") {
      answerthree = "There is obviously something there that wants me to open it.";
      hidePthreeElements();
  } else if (z == "33,06") {
      answerthree = "The box is rather big for holding just a chair. Not a very economical packaging solution, in my opinion.";
      hidePthreeElements();
  } else if (z == "33,07") {
      answerthree = "Ziggy, I'm sure it was you who sent me this key. That means that you're here!";
      hidePthreeElements();
  } else if (z == "33,09") {
      answerthree = "Now, how do I mix this up so hard to keep Marina occupied for a long time?";
      hidePthreeElements();
  } else if (z == "33,11") {
      answerthree = "Thank you, my unknown friend, for leaving this unexpected present.";
      hidePthreeElements();
  } else if (z == "33,12") {
      answerthree = "Marina is very passionate about her Rubik's cube. We seem to have similar interests. In other circumstances, we could have even been friends.";
      hidePthreeElements();
  } else if (z == "33,14") {
      answerthree = "It looks as if it could break any second. What can I do, it's the only chair I've got.'";
      hidePthreeElements();
  } else if (z == "33,17") {
      answerthree = "This box is huge.";
      hidePthreeElements();
  } else if (z == "33,19") {
      answerthree = "A brand new chair. The Lakis are very generous with people that kidnap and planets they occupy.";
      hidePthreeElements();
  } else if (z == "33,24") {
      answerthree = "The person who delivered the chair left the platform trolley in the hallway.";
      hidePthreeElements();
  } else if (z == "33,28") {
      answerthree = "I wish that my escape was a bit more elegant, but what can we do.";
      hidePthreeElements();
  } else if (z == "33,31") {
      answerthree = "Marina is still occupied with the cube. I wonder how long will it take for her to figure out what I did.";
      hidePthreeElements();
  } else if (z == "33,32") {
      answerthree = "I believe that Marina won't be able to solve this one. Well, she wanted me to make it hard, didn't she?";
      hidePthreeElements();
  } else if (z == "33,33") {
      answerthree = "I have to figure out how to escape from here, but also what to do about the Lakis secret attack on Earth.";
      hidePthreeElements();
  } else if (z == "33,36" || z == "36,33") {
      answerthree = "Hopefully, this will take me somewhere where I could have a better chance of escape. It's a risk, but I don't have any other choice, really.<br><i>I enter the box, and I fit perfectly. All those years of yoga have done miracles on my flexibility. I wait there for around five minutes, when I hear somebody walking in the hallway. They take the trolley and bring it to another room.<br></i> Marina, somebody left a package in the hallway. Don't let me bother you, I'll just leave it here, by the other desk. And please call somebody from the delivery to take the trolley. What's with this department, leaving packages in the middle of the hallway like that?<br><i>What do I do now? I don't see anything!<br>Take card <b>39</b>. Remove card <b>36</b>.</i>";
      hidePthreeElements();
  } else if (z == "33,39") {
      answerthree = "This is super uncomfortable, but I hope it won't last long.";
      hidePthreeElements();
  } else if (z == "33,LOC04") {
      answerthree = "Will I ever get out of here? Marina says they held the guy that was here before me for four months. And then he...disappeared.";
      hidePthreeElements();
  } else if (z == "33,LOC05") {
      answerthree = "I haven't left the room for days! Except for going to the bathroom in Marina's company.";
      hidePthreeElements();
  } else if (z == "33,LOC06") {
      answerthree = "This is where the security system of the entire floor is controlled from. If I figure out this system, I have access to any of the rooms on the floor.";
      hidePthreeElements();
  } else if (z == "33,SPO05") {
      answerthree = "It would be great if there were a button for opening the doors on the floor.";
      hidePthreeElements();
  } else if (z == "33,SPO06") {
      answerthree = "How am I supposed to figure out how to write in Lakis alphabet? Why isn't there an 'OPEN' button on the front side like all the other ones?";
      hidePthreeElements();
  } else if (z == "03,06" || z == "06,03" || z == "03,17" || z == "17,03") {
      answerthree = "I don't think that the cardboard would hold my weight if I tried to climb on it.";
      hidePthreeElements();
  } else if (z == "03,09" || z == "09,03") {
      answerthree = "Throwing the Rubik's cube on the vent cover will not open it.";
      hidePthreeElements();
  } else if (z == "03,11" || z == "11,03") {
      answerthree = "I might be able to open the air vent with the pocket knife, but I can't reach it. It's too high.";
      hidePthreeElements();
  } else if (z == "03,14" || z == "14,03") {
      answerthree = "<i>I bring the chair to the vent while Marina isn't looking and climb on it...AAAAA! It breaks! As I fall on the floor and fortunately don't hurt myself a lot, I notice a pocket knife hidden under the chair seat cushion. <br>Marina notices what happened and, after asking am I OK, immediately calls somebody to ask for a new chair to be delivered.</i><br>'We may be holding you here against your will, but you should at least have a decent chair. They will deliver it shortly.'<i>, she says. <br>Take card <b>11</b>. Remove card <b>14</b>.</i>";
      hidePthreeElements();
  } else if (z == "03,19" || z == "19,03") {
      answerthree = "I bring the chair to the air vent and climb on it.<br><i>Take card <b>16</b>. Remove cards <b>03</b> and <b>19</b>.</i> ";
      hidePthreeElements();
  } else if (z == "06,11" || z == "11,06") {
      answerthree = "I open the box with the pocket knife and find the replacement chair inside.<br><i>Take cards <b>17</b> and <b>19</b>. Remove card <b>06</b>.</i>";
      hidePthreeElements();
  } else if (z == "07,11" || z == "11,07") {
      answerthree = "There is no way I will be cutting this card!";
      hidePthreeElements();
  } else if (z == "09,11" || z == "11,09") {
      answerthree = "This might work!<br><i>I turn my back to the door, so that Marina couldn't see what I'm doing, and I use the pocket knife to push two of the cube parts out of their place. I switch their places afterwards. The cube should be unsolvable now.<br>Take card <b>32</b>. Remove card <b>09</b>.</i>";
      hidePthreeElements();
  } else if (z == "11,17" || z == "11,41" || z == "11,36" || z == "17,11" || z == "41,11" || z == "36,11") {
      answerthree = "There is no point in cutting the box at the moment.";
      hidePthreeElements();
  } else if (z == "11,19" || z == "19,11") {
      answerthree = "Maybe I should carve a message into the chair in case there is another prisoner here after me, but I simply don't have time for that now.";
      hidePthreeElements();
  } else if (z == "11,24" || z == "24,11") {
      answerthree = "Cutting into the platform trolley seems like a lot of work for nothing.";
      hidePthreeElements();
  } else if (z == "11,32" || z == "32,11") {
      answerthree = "I already mixed up the Rubik's cube, there's no point in repeating it.";
      hidePthreeElements();
  } else if (z == "11,16" || z == "16,11") {
      answerthree = "I should be able to unscrew the vent cover with the pocket knife.<br><i>As I remove the screws and open the air vent, I see a pretty little rat carrying a keycard.</i><br>Ziggy, this must be your doing. This means that you're definitely here!<br><i>I use the keycard on the door and step into the hallway.<br>Take cards <b>07</b> and <b>LOC05</b>. Remove cards <b>16</b> and <b>LOC04</b> (but keep the other cards from the location on the table).</i>";
      hidePthreeElements();
  } else if (z == "11,39" || z == "39,11") {
      answerthree = "If I cut out a few holes in the box, I could orientate myself a bit better.<br><i>I quietly cut out a tiny hole in front of me. I see Marina sitting with her back facing me. She's still completely into solving her Rubik's cube. I cut out a couple more holes in the box.<br>Take cards <b>28</b> and <b>LOC06</b>. Remove cards <b>11</b>, <b>39</b> and <b>LOC05</b>.</i>";
      hidePthreeElements();
  } else if (z == "17,19" || z == "19,17" || z == "19,41" || z == "19,36" || z == "41,19" || z == "36,19") {
      answerthree = "I just took the chair out of the box. Why would I want to put it back?";
      hidePthreeElements();
  } else if (z == "17,24" || z == "24,17") {
      answerthree = "There we go! Ready for delivery.<br><i>Take card <b>36</b>. Remove cards <b>17</b> and <b>24</b>.</i>";
      hidePthreeElements();
  } else if (z == "SPO06,14,26,16,20" || z == "SPO06,14261620") {
      answerthree = "This should open the doors on the floor, and allow both me and Ziggy to escape.<br><i>I press the buttons on the controller, and it works. I move the trolley to the doors opposite from the one that I entered from, still in the box, as quietly as possible. I try to slide the door, and it opens easily. Alright! Ziggy, I hope you're watching where I'm going now. Come meet me!<br>Return cards <b>31</b> and <b>33</b> to the character/object deck.<br>Take map parts <b>MAP07</b>, <b>MAP08</b> and <b>MAP09</b>, and place them above the map parts you already have, on their right places. <br>Remove cards <b>07</b>, <b>28</b>, <b>SPO05</b>, <b>SPO06</b> and <b>LOC06</b>.</i>";
      document.getElementById("clickToBridge").style.display = "block";
  } else if (z == "D05" || z == "D07" || z == "D09" || z == "D11" || z == "D17" || z == "D18" || z == "D19" || z == "D20" || z == "D21") {
      answerthree = "I can't pass the door without the keycard.<br><i>If you have the keycard use it to open the door. To do that, enter the keycard card's number, followed by the number of the door you want to open in the Digital Game Book input field, separated by a comma. For example, if you want to open door D01, enter '07,D01' in the Digital Game Book input field and press enter.</i>";
      hidePthreeElements();
  } else if (z == "D01" || z == "D02" || z == "D03" || z == "D04" || z == "D06" || z == "D08" || z == "D10" || z == "D12" || z == "D13" || z == "D14" || z == "D15" || z == "D16") {
      answerthree = "I can't skip doors. If I want to go there, I have to open another door first.";
      hidePthreeElements();
  } else if (z == "07,D05" || z == "D05,07") {
      answerthree = "I'm afraid to go there. I remember that the door leads to the common area, and there's a great possibility that someone is there now and that they could see me.";
      hidePthreeElements();
  } else if (z == "07,D07" || z == "D07,07") {
      answerthree = "I'm pretty sure that Marina is in there. I wouldn't want for her to see that I've escaped.";
      hidePthreeElements();
  } else if (z == "07,D09" || z == "D09,07") {
      answerthree = "What? The elevator is out of order? Well, that's just my luck!";
      hidePthreeElements();
  } else if (z == "07,D11" || z == "D11,07") {
      answerthree = "This seems like a good way to go. Maybe there is another exit on that side of the floor. What? The keycard isn't working on this door! It seems to have another locking system. What are they keeping there? It must be something important if even the lab team doesn't have access to it.";
      hidePthreeElements();
  } else if (z == "07,D17" || z == "D17,07") {
      answerthree = "I check it out, but I don't find anything that would help me.";
      hidePthreeElements();
  } else if (z == "07,D18" || z == "D18,07") {
      answerthree = "I never want to go back into that room again!";
      hidePthreeElements();
  } else if (z == "07,D19" || z == "D19,07") {
      answerthree = "There is nothing really interesting in the bathroom.";
      hidePthreeElements();
  } else if (z == "07,D20" || z == "D20,07") {
      answerthree = "I don't find anything useful in this room.";
      hidePthreeElements();
  } else if (z == "07,D21" || z == "D21,07") {
      answerthree = "All of these rooms are pretty similar, and there is nothing I can use in any of them.";
      hidePthreeElements();
	} else {
  		answerthree = randomanswerthree[Math.floor(Math.random()*randomanswerthree.length)];
      hidePthreeElements();
  	}
  	document.getElementById("bookPthreeAnswer").innerHTML = answerthree;
};
