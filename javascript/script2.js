function bookPtwoKeyPress(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("bookPtwoButton").click();
        return false;
    }
    return true;
};

function unknownmanKeyPress(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("unknownmanButton").click();
        return false;
    }
    return true;
};

function deliveryguyKeyPress(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("deliveryguyButton").click();
        return false;
    }
    return true;
};

function turnerKeyPress(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("turnerButton").click();
        return false;
    }
    return true;
};

function hidePtwoElements() {
  document.getElementById("unknownmanField").style.display = "none";
  document.getElementById("deliveryguyField").style.display = "none";
  document.getElementById("turnerField").style.display = "none";
  document.getElementById("02_Martin").style.display = "none";
}

var escape = 1;

function bookPtwoFunction() {
	var ylowercase = document.getElementById("bookPtwoText").value;
  var y = ylowercase.toUpperCase();
  var randomanswertwo = [
  "This isn't working. I should try something else.",
  "That's not the best idea I ever had.",
  "There must be something better to do.",
  "Hmmm...no, I don't think that's it."
];
  var answertwo;
  var guitaraudio = document.getElementById("guitar");
  if (y == "01") {
  		answertwo = "I will do everything it takes to find my mother.";
      hidePtwoElements();
  } else if (y == "02") {
  		answertwo = "A hamburger with extra mayonnaise that Alison gave me.";
      hidePtwoElements();
  } else if (y == "03") {
  		answertwo = "A duct tape roll that was obviously used to silence professor Martin.";
      hidePtwoElements();
  } else if (y == "04") {
  		answertwo = "A tall tree in front of Pretty Things Shop.";
      hidePtwoElements();
  } else if (y == "05") {
  		answertwo = "A security guard in the mayor's office. He seems a bit tired.";
      hidePtwoElements();
  } else if (y == "06") {
  		answertwo = "White powder makeup the mime artist uses to put on his face.";
      hidePtwoElements();
  } else if (y == "07") {
  		answertwo = "The journalist my mother had a meeting with at the hotel.";
      hidePtwoElements();
  } else if (y == "08") {
  		answertwo = "My ability to connect to animals and plants. It's even stronger now than it was before.<br><i>To use this ability, enter ability card number <b>08</b> followed by the card number of the plant or animal you want to have an effect on in the Digital Game Book input field, separated by a comma.</i>";
      hidePtwoElements();
  } else if (y == "09") {
  		answertwo = "Dr Turner's car in front of the hospital. It is new and looks very expensive.";
      hidePtwoElements();
  } else if (y == "10") {
  		answertwo = "The touchscreen tablet that the mayor gave me. It requires a swipe pattern to unlock.<br><i>You can now unlock the touchscreen tablet by entering the card number <b>10</b> followed by the sequence of numbers in the order of the swipe pattern. The card number and the numbers sequence should be separated by a comma, without spaces.</i>";
      hidePtwoElements();
  } else if (y == "11" || y == "57") {
  		answertwo = "Dr Rose Tobin was the physician of the original Nahukat crew that landed on Earth. She works at the hospital and is a very respected member of the community. But even though she likes it here on Earth, she misses our people immensely.";
      hidePtwoElements();
  } else if (y == "12") {
  		answertwo = "The hospital room is on the first floor, above the hospital's parking lot.";
      hidePtwoElements();
  } else if (y == "13") {
  		answertwo = "The man that was asking about me in the hotel. The receptionist described him as a bald man in a leather jacket with sunglasses.";
      hidePtwoElements();
  } else if (y == "14") {
  		answertwo = "A printer in the 'Under the Radar' office.";
      hidePtwoElements();
  } else if (y == "15") {
  		answertwo = "A patient lying in a coma. Her medical chart reads: <br><b>Patient: Jenna Kane <br>Diagnosis: Heavy metal poisoning with kidney, liver and heart damage, severe brain dysfunction <br>Illnes cause: Unknown <br>Current state: Patient entered a state of extreme unresponsiveness 22 hours after hospitalisation</b>";
      hidePtwoElements();
  } else if (y == "16") {
  		answertwo = "I'm sure that Dr Rose could know more about this drug.";
      hidePtwoElements();
  } else if (y == "17") {
  		answertwo = "The tablet is unlocked and has a file named 'PEI_both_sides'. Unfortunately, the file is either encrypted or corrupted. There are a bunch of unreadable signs in the file that don't make any sense.";
      hidePtwoElements();
  } else if (y == "18") {
  		answertwo = "Professor Martin, well and alive. He better start to explain some things.";
      hidePtwoElements();
  } else if (y == "19") {
  		answertwo = "A banknote I found in the metro station.";
      hidePtwoElements();
  } else if (y == "20") {
  		answertwo = "The delivery guy that delivered the hamburger to the 'Under the Radar' office and left when I got there.";
      hidePtwoElements();
  } else if (y == "21") {
  		answertwo = "There is a newspaper on the table. The top page has been torn out. There are some barely visible indentations on the second page.";
      hidePtwoElements();
  } else if (y == "22") {
  		answertwo = "A used glove in the trash bin.";
      hidePtwoElements();
  } else if (y == "23") {
  		answertwo = "There is still no sign from my mother. But I feel that we're getting closer to the truth.";
      hidePtwoElements();
  } else if (y == "24") {
  		answertwo = "The rope that was used to tie up professor Martin.";
      hidePtwoElements();
  } else if (y == "25") {
  		answertwo = "Alison Clarke is the journalist that had a meeting with my mother.";
      hidePtwoElements();
  } else if (y == "26") {
  		answertwo = "My amazing new ability to make me look like anybody in this world. Absolutely crazy.<br><i>To use this ability, enter ability card number <b>26</b> followed by the card number of the person you want to take appearance of in the Digital Game Book input field, separated by a comma. You can choose any person whose card you have on the table.</i>";
      hidePtwoElements();
  } else if (y == "27") {
  		answertwo = "A potpourri bowl with a smell so intense that it could bring the dead back to life.";
      hidePtwoElements();
  } else if (y == "28") {
  		answertwo = "To enter the PEI base, it's necessary to pass the heavily armed soldier.";
      hidePtwoElements();
  } else if (y == "29") {
  		answertwo = "The soldier guarding the entrence is carrying a huge rifle.";
      hidePtwoElements();
  } else if (y == "30") {
  		answertwo = "Ron was the technology specialist in my parents' crew. He now does some freelance programing to bring food to the table, but he spends most of his time still working on fixing the communication system with Nahukat mothership. Without success, unfortunately. He can be very useful in finding information on people, considering his skills in the cyberspace.<br><i>You don't have to visit Ron to speak to him, you can always reach him over the phone. To communicate with Ron, you should put his card number <b>30</b> followed by the card number of what you want to speak about in the Digital Game Book input field, separated by a comma.</i>";
      hidePtwoElements();
  } else if (y == "31") {
  		answertwo = "A street mime artist completely focused on his performance. He isn't answering my questions, obviously. Ah, mime artists.";
      hidePtwoElements();
  } else if (y == "32") {
  		answertwo = "The shop security camera is looking right at Lady's Alley across the road. But it's high on the wall, out of my reach.";
      hidePtwoElements();
  } else if (y == "33" || y == "45") {
  		answertwo = "Starchester's mayor Bundy has been running the city for 10 years already. He's popular enough, keeping the people of Starchester entertained with festivals and expensive city projects. However, a part of the city population accuse him of favoring certain companies and providing them city work, with saving a part of the profit for himself. They don't have any solid evidence on this kind of activity, of course.";
      hidePtwoElements();
  } else if (y == "34") {
  		answertwo = "The phone Mary gave me is equipped with a tracking software Ron installed. That way Ron knows where I am at all time.";
      hidePtwoElements();
  } else if (y == "35") {
  		answertwo = "Jenna Kane is out of coma, awake and capable of speaking.";
      hidePtwoElements();
  } else if (y == "36") {
  		answertwo = "A stray cat lying on the street, watching the mime artist's show.";
      hidePtwoElements();
  } else if (y == "37") {
  		answertwo = "A microSD card from the shop security camera.";
      hidePtwoElements();
  } else if (y == "38") {
  		answertwo = "A receptionist in the Deep Lake Hotel lobby.";
      hidePtwoElements();
  } else if (y == "39") {
  		answertwo = "The cat took a good smell of the glove. He can definitely recognize the smell of the glove's owner now.";
      hidePtwoElements();
  } else if (y == "40") {
  		answertwo = "With the duct tape on the phone, it will be easy to stick it somewhere.";
      hidePtwoElements();
  } else if (y == "41") {
  		answertwo = "A little to do list I wrote. It's hard to remember everything when the day is so exciting.";
      hidePtwoElements();
  } else if (y == "42") {
  		answertwo = "Nurse Barbara is in the reception booth in the hospital. Nothing can pass her eye unnoticed.";
      hidePtwoElements();
  } else if (y == "43") {
  		answertwo = "The street artist's suitcase is lying on the street. There is some cash and his makeup kit inside.";
      hidePtwoElements();
  } else if (y == "44") {
  		answertwo = "A clearly visible smudge appears on the touchscreen.<br><i>You can now unlock the touchscreen tablet by entering the card number <b>44</b> followed by the sequence of numbers in the order of the swipe pattern. The card number and the numbers sequence should be separated by a comma, without spaces.</i>";
      hidePtwoElements();
  } else if (y == "46") {
  		answertwo = "The message the unknown man wrote on the newspaper is now clearly visible. The message says:<br><b>G - 2s, d. B.S.<br>P - 2s, d. S.D.S.<br>B - 1s, d. W.R.</b>";
      hidePtwoElements();
  } else if (y == "47") {
  		answertwo = "The street mime artist stopped with his act. I can finally speak to him.";
      hidePtwoElements();
  } else if (y == "48") {
  		answertwo = "Dr Turner is very respected in the hospital. But probably his colleagues don't know everything about his work.";
      hidePtwoElements();
  } else if (y == "49") {
  		answertwo = "I can clearly see what did nurse Barbara write on her arm.";
      hidePtwoElements();
  } else if (y == "50") {
  		answertwo = "The IV stand has a removable top.";
      hidePtwoElements();
  } else if (y == "51") {
  		answertwo = "A standard HB pencil with the Deep Lake Hotel logo.";
      hidePtwoElements();
  } else if (y == "52") {
  		answertwo = "The cat now does whatever I want him to.";
      hidePtwoElements();
  } else if (y == "53") {
  		answertwo = "The door to this ward is protected by an alphanumeric lock. But even if I manage to find the code, nurse Barbara wouldn't let me near it.";
      hidePtwoElements();
  } else if (y == "54") {
  		answertwo = "There is a lot of cars in the parking lot. I wonder which one is Dr Turner's.";
      hidePtwoElements();
  } else if (y == "55") {
  		answertwo = "The IV stand top with a piece of rope tied to it.";
      hidePtwoElements();
  } else if (y == "56") {
  		answertwo = "The tree bent one if it's branches down to the floor.";
      hidePtwoElements();
  } else if (y == "LOC01") {
  		answertwo = "The hotel lobby is almost empty, with just a couple of guests and a woman <b>(38)</b> behind the reception desk. There is a pencil <b>(51)</b> on the desk just waiting for me to take it. The side tables are decorated with potpourri <b>(27)</b> and there is a newspaper <b>(21)</b> left on one of the tables.";
      hidePtwoElements();
  } else if (y == "LOC02") {
      answertwo = "The Deep Lake metro station isn't very crowded in this time of day. I can spot a banknote <b>(19)</b> on the floor that I hope will bring me some luck in my quest. There is also a metro map <b>(SPO01)</b> on the wall, of course.";
      hidePtwoElements();
  } else if (y == "LOC03") {
      answertwo = "Feather Square is located in the old part of the city and it's very charming with it's old cobblestone pavement and pigeons that the square was named after. Right next to the metro station entrance there is a street mime artist <b>(31)</b> in a middle of performance. His suitcase <b>(43)</b> is lying on the floor next to him, and I can spot his makeup kit <b>(06)</b> inside of it. A stray cat <b>(36)</b> is the artist's only audience.";
      hidePtwoElements();
  } else if (y == "LOC04") {
      answertwo = "Pretty Things Shop is closed. A beautiful tall tree <b>(04)</b> is right in front of the shop's window. There is a security camera <b>(32)</b> on the wall, that could have some interesting footage of the man I'm searching for.";
      hidePtwoElements();
  } else if (y == "LOC05") {
      answertwo = "I'm shocked to see professor Martin <b>(18)</b> tied up to a chair. I untie him immidiately, of course, and end up with a piece od rope <b>(24)</b> he was tied with. There is also some duct tape <b>(03)</b> they used to keep him quiet lying on the floor.";
      hidePtwoElements();
  } else if (y == "LOC06") {
      answertwo = "I'm not a big fan of hospitals, but the Starchester Central Hospital is a very modern and well equipped facility. Dr Rose <b>(11)</b>, the ex member of my parents space mission crew, is in the hall checking her patients' charts. A nurse <b>(42)</b> in charge of the reception desk is sitting behind it. There is an alphanumeric lock <b>(53)</b> for a door right of the reception desk with no indication of what is behind it.";
      hidePtwoElements();
  } else if (y == "LOC07") {
      answertwo = "The mayor's office is peaceful, not a lot of work seems to be taking place here. There is a security guard <b>(05)</b> in the entrance. The doors to mayor's office are closed, and it's hard to know if the mayor <b>(33)</b> is inside or not.";
      hidePtwoElements();
  } else if (y == "LOC08") {
      answertwo = "The 'Under the Radar' office is busy, with phones ringing and people talking in the same time. I can see Alison Clarke <b>(25)</b> sitting at one of the desks. As I enter the office. I pass by a delivery guy <b>(20)</b> bringing a hamburger <b>(02)</b> to Alison. As soon as he leaves the food, the runs out of the office.<br><i>Remove card <b>07</b>.</i>";
      hidePtwoElements();
  } else if (y == "LOC09") {
      answertwo = "I finally enter the secret ward. I go to the first room and find a patient <b>(15)</b> lying in one of the beds. She is either sleeping or unconscious. There is some standard medical equipment in the room, like an IV stand <b>(50)</b>. I can also spot a used rubber glove <b>(22)</b> in the trash bin next to the door.";
      hidePtwoElements();
  } else if (y == "LOC10") {
      answertwo = "There are a lot of cars <b>(54)</b> parked in the parking lot.";
      hidePtwoElements();
  } else if (y == "LOC11") {
      answertwo = "There is no indication of PEI on the building. The only thing standing out of the ordinary are the unusual symbols on the entrance doors <b>(28)</b>. And a heavily armed soldier <b>(29)</b> in front of it, of course.";
      hidePtwoElements();
  } else if (y == "SPO01") {
      answertwo = "The Starchester Metro map is fixed to the wall of the metro station.";
      hidePtwoElements();
  } else if (y == "SPO02") {
      answertwo = "It's a video recording of a man entering a building on the street.";
      hidePtwoElements();
  } else if (y == "SPO03") {
      answertwo = "Another video recording of a man entering a building on the street.";
      hidePtwoElements();
  } else if (y == "SPO04") {
      answertwo = "It's the last video recording of a man entering a building on the street.";
      hidePtwoElements();
  } else if (y == "SPO05") {
      answertwo = "The printed document from the tablet that mayor Bundy gave me still doesn't make a lot of sense.<br><i>This document will give you the name of the doctor in charge of the restricted ward in the hospital. Once you know the name, write it it the Digital Game Book input field and press enter.</i>";
      hidePtwoElements();
  } else if (y == "SPO06") {
      answertwo = "GPS tracking system shows the movements of Dr Turner's car.";
      hidePtwoElements();
  } else if (y == "01,01") {
      answertwo = "I feel like I've grown in these last few days. Now that I know the truth about my mother and I, so many things make more sense.";
      hidePtwoElements();
  } else if (y == "01,02") {
      answertwo = "There sure is a lot of mayonnaise in this burger.";
      hidePtwoElements();
  } else if (y == "01,03") {
      answertwo = "It's always useful to have a roll of duct tape with you.";
      hidePtwoElements();
  } else if (y == "01,04" || y == "04,01") {
      answertwo = "If I could climb up this tree, I could reach the camera. But the branches are to high, I can't get up there.";
      hidePtwoElements();
  } else if (y == "01,05") {
      answertwo = "The security guard looks like his shift here was long and tiresome.";
      hidePtwoElements();
  } else if (y == "01,06") {
      answertwo = "The mime artist doesn't seem to mind if I borrow it. White makeup isn't really my style, but I'll take it. You never know what will become trendy next.";
      hidePtwoElements();
  } else if (y == "01,07") {
      answertwo = "I'm sure this journalist knows something about my mother. I have to find a way to reach her.";
      hidePtwoElements();
  } else if (y == "01,08") {
      answertwo = "I'm so used to having this little power now that it's getting hard to imagine life without it.";
      hidePtwoElements();
  } else if (y == "01,09") {
      answertwo = "What was it that Dr Turner said on the phone? Something about going to the PEI after his visit to the hospital? I'd like to see where this PEI base is, but I can't get into the car. It's locked.";
      hidePtwoElements();
  } else if (y == "01,10") {
      answertwo = "I sure would like to take a look inside mayor's tablet.";
      hidePtwoElements();
  } else if (y == "01,11" || y == "01,57") {
      answertwo = "Dr Rose is a very nice and calm woman. I wouldn't be surprised if she was the most popular doctor around here. During her earthly career she managed to get funding for three research studies already, where she could carefully implement some of advanced medical knowledge of Nahukat.";
      hidePtwoElements();
  } else if (y == "01,12") {
      answertwo = "The window is looking right at the hospital parking lot. Not much of a view, really.";
      hidePtwoElements();
  } else if (y == "01,13") {
      answertwo = "This man is following me? He has to be connected to the disappearance of my mother. Well, I'm not afraid of him! OK, maybe just a little bit.";
      hidePtwoElements();
  } else if (y == "01,14") {
      answertwo = "A standard inkjet office printer. Nothing unusual there.";
      hidePtwoElements();
  } else if (y == "01,15") {
      answertwo = "This poor woman is in a coma. If only I could wake her up somehow...";
      hidePtwoElements();
  } else if (y == "01,16" || y == "16,01") {
      answertwo = "I should give this to Dr Rose for analysis. If somebody can figure out what this is, it's her.";
      hidePtwoElements();
  } else if (y == "01,17") {
      answertwo = "The document on the tablet is very strange. And what's with this name, 'both sides'?";
      hidePtwoElements();
  } else if (y == "01,18") {
      answertwo = "Professor Martin was kidnapped? How did this happen?";
      hidePtwoElements();
  } else if (y == "01,19") {
      answertwo = "A banknote on the floor? It's my lucky day!";
      hidePtwoElements();
  } else if (y == "01,20") {
      answertwo = "The delivery guy seems to be in a hurry. He leaves the takeout on the table and runs out of the office in a matter of seconds.";
      hidePtwoElements();
  } else if (y == "01,21") {
      answertwo = "The front page was obviously torn out. It seems that something was written on it.";
      hidePtwoElements();
  } else if (y == "01,22") {
      answertwo = "It's not very hygienic to take other people's used gloves from the trash bin, but I have a feeling that it night be useful.";
      hidePtwoElements();
  } else if (y == "01,23") {
      answertwo = "Oh mother...what did you get into? I have to find you, and I have to do it fast!";
      hidePtwoElements();
  } else if (y == "01,24") {
      answertwo = "A piece of rope is something every young lady should have in her bag at all times, isn't it?";
      hidePtwoElements();
  } else if (y == "01,25") {
      answertwo = "Now that I've found you Alison, you better talk!";
      hidePtwoElements();
  } else if (y == "01,26") {
      answertwo = "OK, I have to admit that this ability is even cooler than the other one!";
      hidePtwoElements();
  } else if (y == "01,27") {
      answertwo = "This smells way too intense. Every time I open my backpack I almost suffocate. Why am I carrying it around again?";
      hidePtwoElements();
  } else if (y == "01,28" || y == "28,01") {
      answertwo = "I have to pass the soldier first to enter the PEI base.";
      hidePtwoElements();
  } else if (y == "01,29") {
      answertwo = "I can't pretend not to care that this guy is fully armed while I don't have anything to protect me. But I can't stop now!";
      hidePtwoElements();
  } else if (y == "01,30") {
      answertwo = "Ron is great. He's the funniest of the crew, and even though I've just met him, I feel like we know each other for ages. But his light hearted nature doesn't diminish how dangerous he can be if he wants to...Give this guy a computer and he can enter any system in just a few clicks.";
      hidePtwoElements();
  } else if (y == "01,31") {
      answertwo = "The mime artist is starting to annoy me a little. Can't he stop just for a moment so that I can ask him one little question?";
      hidePtwoElements();
  } else if (y == "01,32") {
      answertwo = "If only I could reach it! Well, I guess that they put them so high for a reason.";
      hidePtwoElements();
  } else if (y == "01,33" || y == "01,45") {
      answertwo = "I don't know a lot about the mayor, except that he's been ruling the city for a long time now. And I heard that there are some corruption accusations against him. But it hasn't really caused a big fall of his popularity.";
      hidePtwoElements();
  } else if (y == "01,34") {
      answertwo = "The phone that Mary gave me has a tracking app installed by Ron. Knowing that he can see where I am makes me feel a lot safer.";
      hidePtwoElements();
  } else if (y == "01,35") {
      answertwo = "Wow, I've awaken a woman from a coma! I think that Dr Rose would be proud of me.";
      hidePtwoElements();
  } else if (y == "01,36") {
      answertwo = "I wish that I could have a cat too! But my dog Laika wouldn't like it a lot.";
      hidePtwoElements();
  } else if (y == "01,37") {
      answertwo = "This microSD card must be holding some informative footage.";
      hidePtwoElements();
  } else if (y == "01,38") {
      answertwo = "I have to leave the hotel a good review, she's really helpful.";
      hidePtwoElements();
  } else if (y == "01,39") {
      answertwo = "I've heard that cats have a very developed sense of smell, even stronger than dogs.";
      hidePtwoElements();
  } else if (y == "01,40") {
      answertwo = "I hope that the tape won't leave sticky traces on my new phone.";
      hidePtwoElements();
  } else if (y == "01,41") {
      answertwo = "I have a habit of forgetting what I'm supposed to do. This way it shouldn't happen.";
      hidePtwoElements();
  } else if (y == "01,42") {
      answertwo = "This nurse isn't very helpful, is she?";
      hidePtwoElements();
  } else if (y == "01,43") {
      answertwo = "The artist's suitcase doesn't have a lot of cash in it. People just don't respect live mime like they used to.";
      hidePtwoElements();
  } else if (y == "01,44") {
      answertwo = "Alright, the pattern smudge is super clear.";
      hidePtwoElements();
  } else if (y == "01,46") {
      answertwo = "What could this message mean? What was it that the receptionist said about the man?";
      hidePtwoElements();
  } else if (y == "01,47") {
      answertwo = "Finally the guy wants to talk.";
      hidePtwoElements();
  } else if (y == "01,48") {
      answertwo = "What could Dr Turner be working on in the hospital? I don't think it's anything great if there is all this mystery around it.";
      hidePtwoElements();
  } else if (y == "01,49") {
      answertwo = "Luckily Barbara's memory isn't her strong suit. Now I can easily see the code for the ward lock.";
      hidePtwoElements();
  } else if (y == "01,50") {
      answertwo = "Many objects I encounter seemed useless in the beginning, but they turned out to be very valuable.";
      hidePtwoElements();
  } else if (y == "01,51") {
      answertwo = "A pencil can always come in handy.";
      hidePtwoElements();
  } else if (y == "01,52") {
      answertwo = "Sorry cat, but you will have to help me a little bit.";
      hidePtwoElements();
  } else if (y == "01,53") {
      answertwo = "I wonder what's hiding behind this lock...a zombie ward?";
      hidePtwoElements();
  } else if (y == "01,54") {
      answertwo = "So many cars...Which one could be Dr Turner's?";
      hidePtwoElements();
  } else if (y == "01,55") {
      answertwo = "What a nice anchor I've created!";
      hidePtwoElements();
  } else if (y == "01,56" || y == "32,56" || y == "56,01" || y == "56,32") {
      answertwo = "Nothing easier than getting to this camera now.<br><i>I sit on the bended branch and it lifts me right to the camera. Luckily, it's one of those cameras with local storage.<br><i>Take card <b>37</b>. Remove cards <b>32</b> and <b>56</b>.</i>";
      hidePtwoElements();
  } else if (y == "01,LOC01") {
      answertwo = "I should see if somebody in this hotel remembers my mother.";
      hidePtwoElements();
  } else if (y == "01,LOC02") {
      answertwo = "The man who was asking about me took the metro. I should follow him, he might bring me to my mother.";
      hidePtwoElements();
  } else if (y == "01,LOC03") {
      answertwo = "This is the place where the man got off the metro. But where did he go next?";
      hidePtwoElements();
  } else if (y == "01,LOC04") {
      answertwo = "So, the man went to this shop. But where did he go from here?";
      hidePtwoElements();
  } else if (y == "01,LOC05") {
      answertwo = "Professor Martin! So this is where he disappeared to. But where is my mother?";
      hidePtwoElements();
  } else if (y == "01,LOC06") {
      answertwo = "The hospital is quiet enough. Only a few patients in the waiting room and a nurse on the reception desk. Dr Rose is here too.";
      hidePtwoElements();
  } else if (y == "01,LOC07") {
      answertwo = "It seems as there are not a lot of people in the mayor's office. The security guard is taking his job seriously, not leaving his position and looking around as if something was actually happening here.";
      hidePtwoElements();
  } else if (y == "01,LOC08") {
      answertwo = "'Under the Radar' office is vibrant with young employees chatting and music coming from the radio. I think I see Alison Clarke at one of the tables.";
      hidePtwoElements();
  } else if (y == "01,LOC09") {
      answertwo = "There is only one patient in the room, and she's unconscious.";
      hidePtwoElements();
  } else if (y == "01,LOC10") {
      answertwo = "The parking lot is huge and filled with cars.";
      hidePtwoElements();
  } else if (y == "01,LOC11") {
      answertwo = "I'm finally getting close to finding my mother. I have a feeling she is near.";
      hidePtwoElements();
  } else if (y == "01,SPO01") {
      answertwo = "Starchester's Metro is not very big. I should be able to figure out the way the man took.";
      hidePtwoElements();
  } else if (y == "01,SPO02" || y == "01,SPO03" || y == "01,SPO04") {
      answertwo = "There is a guy entering a door in this video. Is it my guy?";
      hidePtwoElements();
  } else if (y == "01,SPO05") {
      answertwo = "There has to be a way to shed some light on the meaning of this document.";
      hidePtwoElements();
  } else if (y == "01,SPO06") {
      answertwo = "All we have to do is follow Dr Turner's car.";
      hidePtwoElements();
  } else if (y == "05,01") {
      answertwo = "How can I help you, young lady?";
      hidePtwoElements();
  } else if (y == "05,02" || y == "02,05") {
      answertwo = "Thank you, but I can't eat while I'm on duty. And even if I could, there is so much mayo in this burger that it's spilling out. I have to keep my cholesterol in check.";
      hidePtwoElements();
  } else if (y == "05,03") {
      answertwo = "What am I supposed to do with it?";
      hidePtwoElements();
  } else if (y == "05,05") {
      answertwo = "I've been working for the mayor for 6 months now. A nice job, paycheck comes in regularly every month.";
      hidePtwoElements();
  } else if (y == "05,06" || y == "05,27" || y == "05,34") {
      answertwo = "I'm sorry, but I don't understand why are you talking about this.";
      hidePtwoElements();
  } else if (y == "05,07" || y == "05,25") {
      answertwo = "Yes, I think I did see a journalist fitting that description around here. But that's not unusual, there are always journalists here. I couldn't tell you who is she working for, though.";
      hidePtwoElements();
  } else if (y == "05,08") {
      answertwo = "Hmm, sure. I believe you. Making plants and animals do stuff, why not.";
      hidePtwoElements();
  } else if (y == "05,10" || y == "05,17" || y == "05,44") {
      answertwo = "I don't know anything about this. I'm here to guard the doors, not look into my bosses documents.";
      hidePtwoElements();
  } else if (y == "05,11" || y == "05,65") {
      answertwo = "Actually, I know Dr Tobin. She was taking care of my wife when she was at the hospital. Excellent doctor, that one.";
      hidePtwoElements();
  } else if (y == "05,13") {
      answertwo = "It's possible that I saw somebody matching this description with the mayor, but it's not my job to talk about mayor's meetings.";
      hidePtwoElements();
  } else if (y == "05,14") {
      answertwo = "I'm not following. You've seen a printer in a magazine office? Are you sure you're OK?";
      hidePtwoElements();
  } else if (y == "05,16") {
      answertwo = "What is it, some kind of perfume? I hope it's not drugs, young lady!";
      hidePtwoElements();
  } else if (y == "05,20") {
      answertwo = "I don't order a lot, I prefer home-cooked meals.";
      hidePtwoElements();
  } else if (y == "05,23") {
      answertwo = "If I'm not mistaken, she did visit the mayor once. A month ago, maybe more.";
      hidePtwoElements();
  } else if (y == "05,24") {
      answertwo = "Young lady, why do you have a rope with you?";
      hidePtwoElements();
  } else if (y == "05,26") {
      answertwo = "I think you've watched one too many supermen films.";
      hidePtwoElements();
  } else if (y == "05,27") {
      answertwo = "Are you some kind of travelling potpourri salesman? we're not interested.";
      hidePtwoElements();
  } else if (y == "05,30") {
      answertwo = "Why would I know your friend?";
      hidePtwoElements();
  } else if (y == "05,33") {
      answertwo = "I'm sorry, but the mayor asked not to be disturbed. You can make a meeting for next week with his secretary if you want to.";
      hidePtwoElements();
  } else if (y == "05,34") {
      answertwo = "You can find the contact of the office on the city's official website.";
      hidePtwoElements();
  } else if (y == "05,36" || y == "05,39" || y == "05,52") {
      answertwo = "That's a nice cat. Do people carry cats around with them these days?";
      hidePtwoElements();
  } else if (y == "05,41") {
      answertwo = "I'm afraid I have to tell you that you won't be checking off the second thing on that list today.";
      hidePtwoElements();
  } else if (y == "05,42" || y == "05,48") {
      answertwo = "Why would you expect me to know all of the hospital staff?";
      hidePtwoElements();
  } else if (y == "05,49") {
      answertwo = "The nurse wrote the code of a limited access ward on her arm? I could probably teach her a thing or two about security.";
      hidePtwoElements();
  } else if (y == "05,53") {
      answertwo = "Why wouldn't there be a restricted ward in the hospital? You young people think that everything should be in your reach.";
      hidePtwoElements();
  } else if (y == "05,LOC06") {
      answertwo = "We have some of the best doctors in the country.";
      hidePtwoElements();
  } else if (y == "05,LOC09") {
      answertwo = "If you want a guided tour around the building, there is a group starting in 15 minutes.";
      hidePtwoElements();
  } else if (y == "05,LOC08") {
      answertwo = "This must be some new young people magazine. At least I've never heard of it.";
      hidePtwoElements();
  } else if (y == "07,01" || y == "07,02" || y == "07,03" || y == "07,04" || y == "07,05" || y == "07,06" || y == "07,07" || y == "07,08" || y == "07,09" || y == "07,10" || y == "07,11" || y == "07,12" || y == "07,13" || y == "07,14" || y == "07,15" || y == "07,16" || y == "07,17" || y == "07,18" || y == "07,19" || y == "07,20" || y == "07,21" || y == "07,22" || y == "07,23" || y == "07,24" || y == "07,25" || y == "07,26" || y == "07,27" || y == "07,28" || y == "07,29" || y == "07,30" || y == "07,31" || y == "07,32" || y == "07,33" || y == "07,34" || y == "07,35" || y == "07,36" || y == "07,37" || y == "07,38" || y == "07,39" || y == "07,40" || y == "07,41" || y == "07,42" || y == "07,43" || y == "07,44" || y == "07,45" || y == "07,46" || y == "07,47" || y == "07,48" || y == "07,49" || y == "07,50" || y == "07,51" || y == "07,52" || y == "07,53" || y == "07,54" || y == "07,55" || y == "07,56" || y == "07,57" || y == "07,LOC01" || y == "07,LOC02" || y == "07,LOC03" || y == "07,LOC04" || y == "07,LOC05" || y == "07,LOC06" || y == "07,LOC07" || y == "07,LOC08" || y == "07,LOC09" || y == "07,LOC10" || y == "07,LOC11" || y == "07,SPO01" || y == "07,SPO02" || y == "07,SPO03" || y == "07,SPO04" || y == "07,SPO05") {
      answertwo = "<i>You haven't met Alison yet. You can't talk to her, you can only talk about her.</i>";
      hidePtwoElements();
  } else if (y == "11,01") {
      answertwo = "Ziggy, you remind me so much of your mother. You're just as brave as she is. I know it must be hard for you these last couple of days.";
      hidePtwoElements();
  } else if (y == "11,02") {
      answertwo = "Thanks, I already had my lunch.";
      hidePtwoElements();
  } else if (y == "11,03") {
      answertwo = "That's OK, we have a bunch of tape in our storage room.";
      hidePtwoElements();
  } else if (y == "11,05") {
      answertwo = "Oh yes, what a nice family. His wife was my patient a few years ago. Too bad he works for that sketchy mayor Bundy.";
      hidePtwoElements();
  } else if (y == "11,06") {
      answertwo = "I don't wear makeup. Especially not white face powder, that would just scare my patients.";
      hidePtwoElements();
  } else if (y == "11,07") {
      answertwo = "I've never heard of this journalist. But you know what, ask Ron about it. If anybody can dig up something on somebody, it's him.";
      hidePtwoElements();
  } else if (y == "11,08") {
      answertwo = "Yes, this is one of the funniest powers we have. I play chess with my philodendron all the time!";
      hidePtwoElements();
  } else if (y == "11,09") {
      answertwo = "We should follow this car!";
      hidePtwoElements();
  } else if (y == "11,10") {
      answertwo = "Let me take a try...No, that wasn't it.";
      hidePtwoElements();
  } else if (y == "11,11") {
      answertwo = "I've tried to move on, but the truth is that I'm still thinking about Nahukat people every day. Ron hasn't stopped working on the communication system, but we haven't progressed a lot, in all these years.";
      hidePtwoElements();
  } else if (y == "11,12") {
      answertwo = "The view is not the best. What can we do.";
      hidePtwoElements();
  } else if (y == "11,13") {
      answertwo = "This man is asking about you? He must be working for the same people who took your mother.";
      hidePtwoElements();
  } else if (y == "11,14") {
      answertwo = "Why are we talking about a printer? Ziggy, we don't have time for this.";
      hidePtwoElements();
  } else if (y == "11,15") {
      answertwo = "I can't help you with that. There isn't really anything you can do to wake somebody up from a coma. If you find a way, sure let me know how you did it.";
      hidePtwoElements();
  } else if (y == "11,17") {
      answertwo = "Maybe Ron could take a look at this.";
      hidePtwoElements();
  } else if (y == "11,20") {
      answertwo = "Sometimes I order a veggie burger, but I can't say that I know this particular delivery guy.";
      hidePtwoElements();
  } else if (y == "11,22") {
      answertwo = "The medical staff here uses this type of gloves.";
      hidePtwoElements();
  } else if (y == "11,23") {
      answertwo = "You can only imagine how much I miss your mother. And to see you here now, it's unbelievable! We will find Lena, don't worry!";
      hidePtwoElements();
  } else if (y == "11,24") {
      answertwo = "A piece of rope? Seriously, how do you fit all this stuff in that small backpack?";
      hidePtwoElements();
  } else if (y == "11,25") {
      answertwo = "So Lena contacted Alison because of her article? It looks as if this story could be bigger than we thought.";
      hidePtwoElements();
  } else if (y == "11,26") {
      answertwo = "It's the best, isn't it? Look!<br><i>And just like that, my identical twin appeared in front of me. I almost screamed! She turned back to Dr Rose in a second.</i><br>Ha ha! You should have seen your face!";
      hidePtwoElements();
  } else if (y == "11,27") {
      answertwo = "I didn't think that it's possible, but there is such a thing as too much cinnamon.";
      hidePtwoElements();
  } else if (y == "11,28") {
      answertwo = "Ziggy, you try to get pass the soldier and I'll check around to see if there is an another entrance somewhere. Ron, you keep guard in the car.";
      hidePtwoElements();
  } else if (y == "11,29") {
      answertwo = "He is dangerous, but when you use your powers you're even more dangerous, Ziggy. Go get him! I will go to check around, there must be another entrance into this building. Ron, you stay here, keep guard and wait for us in the car.";
      hidePtwoElements();
  } else if (y == "11,30") {
      answertwo = "Ron and I are best friends. He is amazing with techology, but without the right equipment even he can't fix the communication system of our ship. One day, maybe.";
      hidePtwoElements();
  } else if (y == "11,33" || y == "11,45") {
      answertwo = "The mayor is corrupted, I'm sure of it. The fact that all of the big projects in the city go to the hands of contractors, that happen to be his cousins, can't be a coincidence. Nor is all the money that keeps stacking in his bank account.";
      hidePtwoElements();
  } else if (y == "11,34") {
      answertwo = "I'm glad you have this phone with you.";
      hidePtwoElements();
  } else if (y == "11,35") {
      answertwo = "You woke her up? That's really impressive.";
      hidePtwoElements();
  } else if (y == "11,36" || y == "11,39" || y == "11,52") {
      answertwo = "You have a cat now? I thought you had a dog.";
      hidePtwoElements();
  } else if (y == "11,40") {
      answertwo = "What are you doing with your phone? Take care of it, it has a tracking app so that we can know where you are.";
      hidePtwoElements();
  } else if (y == "11,41") {
      answertwo = "So did you manage to find Alison? You should ask Ron about her, he's quite skillful when it comes to finding information on somebody.";
      hidePtwoElements();
  } else if (y == "11,42") {
      answertwo = "That nurse is scary. I swear that she never leaves the desk. I don't know who is in charge of this restricted ward, but I've seen her entering in it. Her memory must be really poor because she has the code written on her arm and she always checks it before going in. You can't see it now because of the long sleeved jacket she's wearing, but it's there. And don't try to take her form to see her arm, our power duplicates only the parts of a person we see.";
      hidePtwoElements();
  } else if (y == "11,44") {
      answertwo = "Well Ziggy, aren't you a clever girl.";
      hidePtwoElements();
  } else if (y == "11,48") {
      answertwo = "So Dr Turner is in charge of the ward? He was acting a little suspicious lately, now that I think about it. Always looking behind his shoulder, if you know what I mean.";
      hidePtwoElements();
  } else if (y == "11,49") {
      answertwo = "You managed to get a look at her arm? Way to go Ziggy!";
      hidePtwoElements();
  } else if (y == "11,50") {
      answertwo = "Sure, use hospital equipment. You need it more than our patients, don't you?";
      hidePtwoElements();
  } else if (y == "11,53") {
      answertwo = "I don't know the code. They've changed it a few months ago and the whole ward became a restricted zone. To tell you the truth, I don't even know which doctor is in charge of it. I've only seen nurse Barbara entering it. I think she has the code written on her arm because she always checks it before entering the ward. I didn't get a good look at it because she's always wearing this long sleeved jacket. It's seems obvious to take her form and look at her arm, but our power doesn't work like that. We only take the appearance of those details we can see on a person.";
      hidePtwoElements();
  } else if (y == "11,54") {
      answertwo = "I can't tell you which car is Dr Turner's. I think he changed cars recently.";
      hidePtwoElements();
  } else if (y == "11,55") {
      answertwo = "Please return the IV stand top as soon as you're finished with this, whatever it is.";
      hidePtwoElements();
  } else if (y == "11,LOC06") {
      answertwo = "It's a nice place to work. But you know that I will never forget my old life and our people.";
      hidePtwoElements();
  } else if (y == "11,LOC07") {
      answertwo = "Did you notice how the office is renovated? Guess who paid for the new rare marble floor. Us, the taxpayers.";
      hidePtwoElements();
  } else if (y == "11,LOC08") {
      answertwo = "I've never read this magazine. Did you find out how is it connected with your mother?";
      hidePtwoElements();
  } else if (y == "11,LOC09") {
      answertwo = "You're telling me that there are people in coma lying in this ward? What are they suffering from?";
      hidePtwoElements();
  } else if (y == "11,LOC10") {
      answertwo = "I couldn't tell you which is Dr Turner's car.";
      hidePtwoElements();
  } else if (y == "11,LOC11") {
      answertwo = "OK, we can't give up now. I will see if there is another way to get in here. Ron, you stay in the car and be ready for our escape. Ziggy, you try to get inside from here. And take care, everybody.";
      hidePtwoElements();
  } else if (y == "11,SPO05") {
      answertwo = "This message is encrypted somehow. If we could only find the code...";
      hidePtwoElements();
  } else if (y == "13,01" || y == "13,02" || y == "13,03" || y == "13,04" || y == "13,05" || y == "13,06" || y == "13,07" || y == "13,08" || y == "13,09" || y == "13,10" || y == "13,11" || y == "13,12" || y == "13,13" || y == "13,14" || y == "13,15" || y == "13,16" || y == "13,17" || y == "13,18" || y == "13,19" || y == "13,20" || y == "13,21" || y == "13,22" || y == "13,23" || y == "13,24" || y == "13,25" || y == "13,26" || y == "13,27" || y == "13,28" || y == "13,29" || y == "13,30" || y == "13,31" || y == "13,32" || y == "13,33" || y == "13,34" || y == "13,35" || y == "13,36" || y == "13,37" || y == "13,38" || y == "13,39" || y == "13,40" || y == "13,41" || y == "13,42" || y == "13,43" || y == "13,44" || y == "13,45" || y == "13,46" || y == "13,47" || y == "13,48" || y == "13,49" || y == "13,50" || y == "13,51" || y == "13,52" || y == "13,53" || y == "13,54" || y == "13,55" || y == "13,56" || y == "13,57" || y == "13,LOC01" || y == "13,LOC02" || y == "13,LOC03" || y == "13,LOC04" || y == "13,LOC05" || y == "13,LOC06" || y == "13,LOC07" || y == "13,LOC08" || y == "13,LOC09" || y == "13,LOC10" || y == "13,LOC11" || y == "13,SPO01" || y == "13,SPO02" || y == "13,SPO03" || y == "13,SPO04" || y == "13,SPO05") {
      answertwo = "<i>The unknown man is not here. You can't talk to him, you can only talk about him.</i>";
      hidePtwoElements();
  } else if (y == "15,01" || y == "15,02" || y == "15,03" || y == "15,04" || y == "15,05" || y == "15,06" || y == "15,07" || y == "15,08" || y == "15,09" || y == "15,10" || y == "15,11" || y == "15,12" || y == "15,13" || y == "15,14" || y == "15,15" || y == "15,16" || y == "15,17" || y == "15,18" || y == "15,19" || y == "15,20" || y == "15,21" || y == "15,22" || y == "15,23" || y == "15,24" || y == "15,25" || y == "15,26" || y == "15,28" || y == "15,29" || y == "15,30" || y == "15,31" || y == "15,32" || y == "15,33" || y == "15,34" || y == "15,35" || y == "15,36" || y == "15,37" || y == "15,38" || y == "15,39" || y == "15,40" || y == "15,41" || y == "15,42" || y == "15,43" || y == "15,44" || y == "15,45" || y == "15,46" || y == "15,47" || y == "15,48" || y == "15,49" || y == "15,50" || y == "15,51" || y == "15,52" || y == "15,53" || y == "15,54" || y == "15,55" || y == "15,56" || y == "15,57" || y == "15,LOC01" || y == "15,LOC02" || y == "15,LOC03" || y == "15,LOC04" || y == "15,LOC05" || y == "15,LOC06" || y == "15,LOC07" || y == "15,LOC08" || y == "15,LOC09" || y == "15,LOC10" || y == "15,LOC11" || y == "15,SPO01" || y == "15,SPO02" || y == "15,SPO03" || y == "15,SPO04" || y == "15,SPO05") {
      answertwo = "<i>Jenna Kane is in a coma. You can't talk to her, you can only talk about her.</i>";
      hidePtwoElements();
  } else if (y == "15,27" || y == "27,15") {
      answertwo = "The super intense potpourri smell woke Jenna Kane up! It's a miracle!<br><i>Take card <b>35</b>. Remove cards <b>15</b> and <b>27</b>.</i>";
      hidePtwoElements();
  } else if (y == "18,01") {
      answertwo = "Ziggy! How did you find me? Oh, I'm sorry about everything...";
      hidePtwoElements();
  } else if (y == "18,03") {
      answertwo = "The kidnapper used this tape to silence me. I don't even want to think about what could have happened if you hadn't come.";
      hidePtwoElements();
  } else if (y == "18,06") {
      answertwo = "I'm not sure that it's the right powder shade for your skin tone.";
      hidePtwoElements();
  } else if (y == "18,07") {
      answertwo = "It was me who told them that Lena did some research in Strchester. Let me explain...";
      hidePtwoElements();
  } else if (y == "18,08" || y == "18,26") {
      answertwo = "I am aware that your gem gives you some special powers. Why do think I was so interested in getting a hold of it?";
      hidePtwoElements();
  } else if (y == "18,13" || y == "18,18" || y == "18,23") {
      answertwo = "<i>Watch the video before reading this text.</i><br><br>So, what information do I have till now? <br>My mother was interested in mayor Bundy. Also, she was speaking to a journalist Alison Clarke in the hotel. I have a drug professor Martin gave me. I should show it to the crew's physician Dr Rose Tobin in the hospital. And I can always call Ron, the crew's tech specialist. He's a man of a lot of information. <br>Many places to go to, so I've written it down and made a little 'to do' list.<br><i>This is the point in the game where it starts to be nonlinear. Remember that you should open more locations to progress in the game.<br>Take cards <b>16</b>, <b>30</b>, <b>33</b>, <b>41</b> and <b>57</b>. Remove cards <b>18</b> and <b>LOC05</b> (but keep the other cards from the location on the table).</i>";
      hidePtwoElements();
      document.getElementById("02_Martin").style.display = "block";
  } else if (y == "18,24") {
      answertwo = "Thank God I'm free!";
      hidePtwoElements();
  } else if (y == "18,27") {
      answertwo = "Please don't put this under my nose. I've been tortured enough already!";
      hidePtwoElements();
  } else if (y == "18,34") {
      answertwo = "What do we do? Will you call for help?";
      hidePtwoElements();
  } else if (y == "18,36" || y == "18,52") {
      answertwo = "Do you always carry an animal around with you?";
      hidePtwoElements();
  } else if (y == "18,LOC05") {
      answertwo = "The kidnapper brought me here yesterday. He blindsided me all the way here so I haven't a clue where we are.";
      hidePtwoElements();
  } else if (y == "20,01" || y == "20,02" || y == "20,03" || y == "20,04" || y == "20,05" || y == "20,06" || y == "20,07" || y == "20,08" || y == "20,09" || y == "20,10" || y == "20,11" || y == "20,12" || y == "20,13" || y == "20,14" || y == "20,15" || y == "20,16" || y == "20,17" || y == "20,18" || y == "20,19" || y == "20,20" || y == "20,21" || y == "20,22" || y == "20,23" || y == "20,24" || y == "20,25" || y == "20,26" || y == "20,27" || y == "20,28" || y == "20,29" || y == "20,30" || y == "20,31" || y == "20,32" || y == "20,33" || y == "20,35" || y == "20,36" || y == "20,37" || y == "20,38" || y == "20,39" || y == "20,40" || y == "20,41" || y == "20,42" || y == "20,43" || y == "20,44" || y == "20,45" || y == "20,46" || y == "20,47" || y == "20,48" || y == "20,49" || y == "20,50" || y == "20,51" || y == "20,52" || y == "20,53" || y == "20,54" || y == "20,55" || y == "20,56" || y == "20,57" || y == "20,LOC01" || y == "20,LOC02" || y == "20,LOC03" || y == "20,LOC04" || y == "20,LOC05" || y == "20,LOC06" || y == "20,LOC07" || y == "20,LOC08" || y == "20,LOC09" || y == "20,LOC10" || y == "20,LOC11" || y == "20,SPO01" || y == "20,SPO02" || y == "20,SPO03" || y == "20,SPO04" || y == "20,SPO05") {
      answertwo = "<i>The delivery guy is no longer here. You can't talk to him, you can only talk about him.</i>";
      hidePtwoElements();
  } else if (y == "20,34" || y == "34,20") {
      answertwo = "I don't really need to order delivery, I already have the food.";
      hidePtwoElements();
  } else if (y == "23,01" || y == "23,02" || y == "23,03" || y == "23,04" || y == "23,05" || y == "23,06" || y == "23,07" || y == "23,08" || y == "23,09" || y == "23,10" || y == "23,11" || y == "23,12" || y == "23,13" || y == "23,14" || y == "23,15" || y == "23,16" || y == "23,17" || y == "23,18" || y == "23,19" || y == "23,20" || y == "23,21" || y == "23,22" || y == "23,23" || y == "23,24" || y == "23,25" || y == "23,26" || y == "23,27" || y == "23,28" || y == "23,29" || y == "23,30" || y == "23,31" || y == "23,32" || y == "23,33" || y == "23,34" || y == "23,35" || y == "23,36" || y == "23,37" || y == "23,38" || y == "23,39" || y == "23,40" || y == "23,41" || y == "23,42" || y == "23,43" || y == "23,44" || y == "23,45" || y == "23,46" || y == "23,47" || y == "23,48" || y == "23,49" || y == "23,50" || y == "23,51" || y == "23,52" || y == "23,53" || y == "23,54" || y == "23,55" || y == "23,56" || y == "23,57" || y == "23,LOC01" || y == "23,LOC02" || y == "23,LOC03" || y == "23,LOC04" || y == "23,LOC05" || y == "23,LOC06" || y == "23,LOC07" || y == "23,LOC08" || y == "23,LOC09" || y == "23,LOC10" || y == "23,LOC11" || y == "23,SPO01" || y == "23,SPO02" || y == "23,SPO03" || y == "23,SPO04" || y == "23,SPO05") {
      answertwo = "<i>Lena isn't here. You can't talk to her, you can only talk about her.</i>";
      hidePtwoElements();
  } else if (y == "25,01") {
      answertwo = "You're Lena Wonder's daughter? And you're telling me she's missing? Oh my God, am I in danger too?";
      hidePtwoElements();
  } else if (y == "25,02") {
      answertwo = "Are you hungry? Feel free to take it, we always order too much anyway.";
      hidePtwoElements();
  } else if (y == "25,03") {
      answertwo = "You're saying that this duct tape was used in kidnapping? Well, if the victim wants to stay anonymous I can't really write about it.";
      hidePtwoElements();
  } else if (y == "25,05") {
      answertwo = "I wouldn't be working for this rapacious politian if it was the last job on Earth. But I guess that the guy has to earn for a living somehow.";
      hidePtwoElements();
  } else if (y == "25,06") {
      answertwo = "I don't wear makeup really. Especially not white one.";
      hidePtwoElements();
  } else if (y == "25,08" || y == "25,26") {
      answertwo = "Look, I'm sure you're great, but I'm only interested in scientific facts. This modern fantasy stuff is not my cup of tea.";
      hidePtwoElements();
  } else if (y == "25,10") {
      answertwo = "Wow, we have to get inside this tablet. There must be a good reason why mayor Bundy wants for it to go away.";
      hidePtwoElements();
  } else if (y == "25,11" || y == "25,57") {
      answertwo = "I read a little about her revolutionary medical research in the media. A remarkable woman.";
      hidePtwoElements();
  } else if (y == "25,13") {
      answertwo = "You're telling me that this guy had your professor spying on Lena and drugging her? And now he's following you? Well, I wouldn't be so sure about him working at the National Security Agency as he says. Your mother was investigating the PEI company, 'Petroleum Extraction Industries'. She noticed that the way they are constructing their wells everywhere in the county is awfully quick and easy. She thought that mayor Bundy has his fingers in this. <br>If you ask me, the guy who is following you is working either for PEI, or for the mayor, and they are afraid that both your mother and you are getting to close to the truth.";
      hidePtwoElements();
  } else if (y == "25,14") {
      answertwo = "Sure, you can use the printer.";
      hidePtwoElements();
  } else if (y == "25,16") {
      answertwo = "You're claiming that your mother was drugged with this? I knew that she could have been digging too deep on some stuff, but drugging her...that's a whole another level. You have to be careful, these guys are not joking at all.";
      hidePtwoElements();
  } else if (y == "25,17") {
      answertwo = "I can't believe we have the file, but we can't read it. How do we figure this out?";
      hidePtwoElements();
  } else if (y == "25,20") {
      answertwo = "The delivery guy? What can I say about him, he brought the food and left.";
      hidePtwoElements();
  } else if (y == "25,23") {
      answertwo = "Yes, I met with Lena in the hotel some time ago. Your mother contacted me because she read my article on strange illnesses reports in the region. At least ten people developed severe diseases in the last few months out of nowhere, all of them coming from villages around Starchester. The hospital's official report was that these patients weren't in any way connected. I thought that this would be too much of a coincidence, so I published a story about it. When it came out, somebody called me. They said they work at the hospital and that something weird is going on there. What concerned this person the most is the fact that nobody knows where these patients are held and what's their current status. They suspect that they might be in a restricted ward, but they don't know who's in charge of it.";
      hidePtwoElements();
  } else if (y == "25,24") {
      answertwo = "You're saying that this rope was used in kidnapping? If the victim wants to share their story, I'm here.";
      hidePtwoElements();
  } else if (y == "25,25") {
      answertwo = "I've written a story about illnesses that appeared in the county during the last few months, but I still didn't get to the bottom of it. The hospital is hiding something, I'm sure. And it's my job to find out what's happening. The public has to know the truth.";
      hidePtwoElements();
  } else if (y == "25,27") {
      answertwo = "Oh, please get it away from me! The smell is way to strong!";
      hidePtwoElements();
  } else if (y == "25,30") {
      answertwo = "I don't know your friend, but from what you're telling me, he seems to be a good potential connection.";
      hidePtwoElements();
  } else if (y == "25,33" || y == "25,45") {
      answertwo = "There are a lot of stories about the mayor I could tell you, but I think that the fact your mother was investigating him is probably what you want to hear about. She had suspicions that he is collaborating with PEI, 'Petroleum Extraction Industries', a company that built a big number of oil wells in the last few years around here and made huge money with it.";
      hidePtwoElements();
  } else if (y == "25,34") {
      answertwo = "I can give you my number, but don't share it with anyone, please.";
      hidePtwoElements();
  } else if (y == "25,36" || y == "25,39" || y == "25,52") {
      answertwo = "You adopted a stray cat? How nice of you!";
      hidePtwoElements();
  } else if (y == "25,41") {
      answertwo = "Well, you found me. Did you manage to do all the things from the list?";
      hidePtwoElements();
  } else if (y == "25,42") {
      answertwo = "I don't know anything about this nurse. Are you suggesting that she's connected to this restricted ward?";
      hidePtwoElements();
  } else if (y == "25,49") {
      answertwo = "You found the code for the ward lock? That's impressive! If only you could pass by that nurse somehow...";
      hidePtwoElements();
  } else if (y == "25,53") {
      answertwo = "My anonymous source from the hospital told me about this ward. I'm dying to know what exactly is hiding in there.";
  } else if (y == "25,LOC06") {
      answertwo = "There is some weird stuff going down in the hospital. There is a restricted ward and nobody knows who is in charge of it.";
      hidePtwoElements();
  } else if (y == "25,LOC07") {
      answertwo = "I doubt that the mayor will want to talk to you, but you can always try.";
      hidePtwoElements();
  } else if (y == "25,LOC08") {
      answertwo = "I love my job, but all the unaswered questions can keep me up at night.";
      hidePtwoElements();
  } else if (y == "25,SPO05") {
      answertwo = "I still don't understand what's written here.";
      hidePtwoElements();
  } else if (y == "29,01" || y == "29,08" || y == "29,11" || y == "29,13" || y == "29,23" || y == "29,26" || y == "29,28"  || y == "29,29" || y == "29,30" || y == "29,33" || y == "29,48" || y == "29,LOC11") {
      answertwo = "I can't just show my face to this soldier. I am already being followed by these people.";
      hidePtwoElements();
  } else if (y == "30,01") {
      answertwo = "Ziggy, it's so great to talk to you. I only wish the circumstances were different.";
      hidePtwoElements();
  } else if (y == "30,02") {
      answertwo = "I don't know how could I eat the burger over the phone.";
      hidePtwoElements();
  } else if (y == "30,03") {
      answertwo = "I have more than enough duct tape at home.";
      hidePtwoElements();
  } else if (y == "30,05") {
      answertwo = "I did a quick check up on him. Married, two kids, working in mayor's office for 6 months. Doesn't seem to have any connection to mayor's business, he's really only a security guard.";
      hidePtwoElements();
  } else if (y == "30,07") {
      answertwo = "Well, it wasn't so easy to track her down because she signs her articles with an alias. But I did find her. She works for an online magazine called 'Under the Radar'. I didn't find their address though. There is a mistake on their contact page, they wrote 'Under the Radar' in their address section. Or maybe that mistake was intentional?";
      hidePtwoElements();
  } else if (y == "30,08" || y == "30,26") {
      answertwo = "I see you're enjoying your new powers. Just be careful, nobody around you should know that you have them.";
      hidePtwoElements();
  } else if (y == "30,09") {
      answertwo = "I checked the number plate, the car is registered under Dr Anthony Turner.";
      hidePtwoElements();
  } else if (y == "30,10") {
      answertwo = "I'm sorry, but there are just too many possible combinations to crack this code by force.";
      hidePtwoElements();
  } else if (y == "30,11" || y == "30,57") {
      answertwo = "Rose is a fantastic physician and an amazing friend. She's at the hospital if you need her.";
      hidePtwoElements();
  } else if (y == "30,12") {
      answertwo = "Ziggy, try to escape through the window! Is it too high?";
      hidePtwoElements();
  } else if (y == "30,13") {
      answertwo = "I don't know who the guy is, but I'm sure he knows what happened to Lena.";
      hidePtwoElements();
  } else if (y == "30,14") {
      answertwo = "This model is famous for it's precise both sides printing.";
      hidePtwoElements();
  } else if (y == "30,15" || y == "30,35") {
      answertwo = "She lives in Marsley, a village near here. And she's not the only one who's sick. There were many locals from the villages around that had serious health issues during the last few months.";
      hidePtwoElements();
  } else if (y == "30,16") {
      answertwo = "This was given to Lena? You should take it to Dr Rose for analysis.";
      hidePtwoElements();
  } else if (y == "30,17") {
      answertwo = "The file you sent me isn't encrypted. And I couldn't find a font like this, not even in the dark web. And what about the name 'PEI_both_sides'? PEI is the oil company that profited the most of mayor Bundy's tax reductions. But what does 'both sides' mean?";
      hidePtwoElements();
  } else if (y == "30,20") {
      answertwo = "I checked the delivery guy. Didn't find anything interesting on him.";
      hidePtwoElements();
  } else if (y == "30,22") {
      answertwo = "Somebody of the hospital staff must have used this glove.";
      hidePtwoElements();
  } else if (y == "30,23") {
      answertwo = "Lena is asking for help. That's why she sent you to us. We have to find her...and soon.";
      hidePtwoElements();
  } else if (y == "30,06" || y == "30,24" || y == "30,50" || y == "30,55") {
      answertwo = "You remind me so much of your father. He always used to make use of a bunch of weird stuff he picked up from here and there.";
      hidePtwoElements();
  } else if (y == "30,25") {
      answertwo = "You found Alison? That's amazing!";
      hidePtwoElements();
  } else if (y == "30,27") {
      answertwo = "I can't smell it over the phone, but I believe you when you say it's too much.";
      hidePtwoElements();
  } else if (y == "30,28") {
      answertwo = "Ziggy, I'm sure you can think of something to get inside. Your mother is waiting for you!";
      hidePtwoElements();
  } else if (y == "30,29") {
      answertwo = "Ziggy, don't let yourself get intimidated by this guy. You have strenght that he doesn't.";
      hidePtwoElements();
  } else if (y == "30,30") {
      answertwo = "I've been working on fixing our communication system since we came to Earth. But I haven't made enough progress still. The technology is so limited on this planet, it's frustrating.";
      hidePtwoElements();
  } else if (y == "30,33" || y == "30,45") {
      answertwo = "Mayor Bundy has been accused of many things. Some of them involve spending tax money on expensive city projects that don't help in solving real problems, like waste managment. Other imply that he's been putting his people on high, well paid and powerful positions. But one rumor could perhaps interest us the most. He significantly lowered the taxes for new businesses as a part of his economy growth policy two years ago. And there was one company who profited from it the most, quickly gaining wealth and monopoly in the region. It was PEI, 'Petroleum Extraction Industries'. He should be in his office now, it's working hours.";
      hidePtwoElements();
  } else if (y == "30,34") {
      answertwo = "You know that I've installed a tracking system so that I can always see where you are. So keep it with you and keep it turned on.";
      hidePtwoElements();
  } else if (y == "30,36" || y == "30,39" || y == "30,52") {
      answertwo = "I understand why you took this cat with you. All of us Nahukat people love animals.";
      hidePtwoElements();
  } else if (y == "30,40") {
      answertwo = "Take care of that phone!";
      hidePtwoElements();
  } else if (y == "30,41") {
      answertwo = "It's a good thing to be writing down what needs to be done. If I can help you with anything, just let me know.";
      hidePtwoElements();
  } else if (y == "30,42") {
      answertwo = "I checked on her. She's been working in the hospital for 7 years and has good reviews from the patients. Except this one time she was caught in shoplifting when she was 17 years old, there really isn't anything suspicious about her.";
      hidePtwoElements();
  } else if (y == "30,44") {
      answertwo = "That's some Poirot work there Ziggy. Nicely done.";
      hidePtwoElements();
  } else if (y == "30,48") {
      answertwo = "Dr Turner a very well respected surgeon. He's been working for the Central Hospital for 4 years, when he moved to Starchester. According to his financial records, he was on a verge of bancrupcy a year ago. And I have information that it was due to large gambling debts he collected over the years. But very soon all of his debts were miraculously covered for.";
      hidePtwoElements();
  } else if (y == "30,49") {
      answertwo = "I was sure you will be able to get the code. You're as resourceful as your parents.";
      hidePtwoElements();
  } else if (y == "30,53") {
      answertwo = "I don't know why this area of hospital would be restricted. Rose could know something about it.";
      hidePtwoElements();
  } else if (y == "30,54") {
      answertwo = "I could find the licence plate number of Dr Turner's car, but it will take some time. And he could return to the car any minute. If there's a quicker way to find it, go for it!";
      hidePtwoElements();
  } else if (y == "30,LOC06") {
      answertwo = "Rose works at the hospital. She told me about this ward that's been a restricted area for 3 months. She still didn't find out what's been going on there.";
      hidePtwoElements();
  } else if (y == "30,LOC07") {
      answertwo = "Ah, our famous mayor Bundy. If you want to know more about lovely Mr Bundy, just ask.";
      hidePtwoElements();
  } else if (y == "30,LOC08") {
      answertwo = "Aha, so it really was under the radar!";
      hidePtwoElements();
  } else if (y == "30,LOC09") {
      answertwo = "So this is where they've been hiding all these sick people!";
      hidePtwoElements();
  } else if (y == "30,LOC10") {
      answertwo = "Dr Turner's car must be parked there somewhere.";
      hidePtwoElements();
  } else if (y == "30,LOC11") {
      answertwo = "Lena must be here!";
      hidePtwoElements();
  } else if (y == "30,SPO05") {
      answertwo = "I wonder how could we shed a light on the meaning of this document.";
      hidePtwoElements();
  } else if (y == "31,01" || y == "31,02" || y == "31,03" || y == "31,04" || y == "31,05" || y == "31,06" || y == "31,07" || y == "31,08" || y == "31,09" || y == "31,10" || y == "31,11" || y == "31,12" || y == "31,13" || y == "31,14" || y == "31,15" || y == "31,16" || y == "31,17" || y == "31,18" || y == "31,19" || y == "31,20" || y == "31,21" || y == "31,22" || y == "31,23" || y == "31,24" || y == "31,25" || y == "31,26" || y == "31,27" || y == "31,28" || y == "31,29" || y == "31,30" || y == "31,31" || y == "31,32" || y == "31,33" || y == "31,34" || y == "31,35" || y == "31,36" || y == "31,37" || y == "31,38" || y == "31,39" || y == "31,40" || y == "31,41" || y == "31,42" || y == "31,43" || y == "31,44" || y == "31,45" || y == "31,46" || y == "31,47" || y == "31,48" || y == "31,49" || y == "31,50" || y == "31,51" || y == "31,52" || y == "31,53" || y == "31,54" || y == "31,55" || y == "31,56" || y == "31,57" || y == "31,LOC01" || y == "31,LOC02" || y == "31,LOC03" || y == "31,LOC04" || y == "31,LOC05" || y == "31,LOC06" || y == "31,LOC07" || y == "31,LOC08" || y == "31,LOC09" || y == "31,LOC10" || y == "31,LOC11" || y == "31,SPO01" || y == "31,SPO02" || y == "31,SPO03" || y == "31,SPO04" || y == "31,SPO05") {
      answertwo = "<i>The mime artist is doing his performance and completely ignores my questions.</i>";
      hidePtwoElements();
  } else if (y == "33,01" || y == "33,02" || y == "33,03" || y == "33,04" || y == "33,05" || y == "33,06" || y == "33,07" || y == "33,08" || y == "33,09" || y == "33,10" || y == "33,11" || y == "33,12" || y == "33,13" || y == "33,14" || y == "33,15" || y == "33,16" || y == "33,17" || y == "33,18" || y == "33,19" || y == "33,20" || y == "33,21" || y == "33,22" || y == "33,23" || y == "33,24" || y == "33,25" || y == "33,26" || y == "33,27" || y == "33,28" || y == "33,29" || y == "33,30" || y == "33,31" || y == "33,32" || y == "33,33" || y == "33,34" || y == "33,35" || y == "33,36" || y == "33,37" || y == "33,38" || y == "33,39" || y == "33,40" || y == "33,41" || y == "33,42" || y == "33,43" || y == "33,44" || y == "33,45" || y == "33,46" || y == "33,47" || y == "33,48" || y == "33,49" || y == "33,50" || y == "33,51" || y == "33,52" || y == "33,53" || y == "33,54" || y == "33,55" || y == "33,56" || y == "33,57" || y == "33,LOC01" || y == "33,LOC02" || y == "33,LOC03" || y == "33,LOC04" || y == "33,LOC05" || y == "33,LOC06" || y == "33,LOC07" || y == "33,LOC08" || y == "33,LOC09" || y == "33,LOC10" || y == "33,LOC11" || y == "33,SPO01" || y == "33,SPO02" || y == "33,SPO03" || y == "33,SPO04" || y == "33,SPO05") {
      answertwo = "<i>The mayor isn't in your reach. You can't talk to him, you can only talk about him.</i>";
      hidePtwoElements();
  } else if (y == "35,01") {
      answertwo = "Who are you and what are you doing here?";
      hidePtwoElements();
  } else if (y == "35,03" || y == "35,40" || y == "35,55") {
      answertwo = "I'm now feeling my best. If you don't have anything important to say, please leave me so I can get some rest.";
      hidePtwoElements();
  } else if (y == "35,08" || y == "35,26") {
      answertwo = "Am I hallucinating? Or is your story just very strange?";
      hidePtwoElements();
  } else if (y == "35,11") {
      answertwo = "The only doctor I've seen since I'm here is Dr Turner.";
      hidePtwoElements();
  } else if (y == "35,13") {
      answertwo = "It could be the guy that was here once with Dr Turner. 'Making sure everything is going as planned', as he said. I'm sure he works for PEI. And I'm sure that PEI is responsible for what's happening to me and the others.";
      hidePtwoElements();
  } else if (y == "35,22") {
      answertwo = "Probably someone of the hospital staff threw it.";
      hidePtwoElements();
  } else if (y == "35,23") {
      answertwo = "Your mother is missing? I'm sorry, but I don't know anything about it.";
      hidePtwoElements();
  } else if (y == "35,30") {
      answertwo = "Your friend can dig up information on anything? Tell him to look into PEI, they've been poisoning the people! The water we drink is polluted and so is the air we breath! Just look at me...And nobody takes responsibility for it!";
      hidePtwoElements();
  } else if (y == "35,33") {
      answertwo = "The mayor lowered the taxes for new companies, so PEI constructed more than 20 wells in Starchester county in only two years. And not only that, the city council changed urban planning documents to enable well construction in protected areas. Like right next to my village, for example. Mayor Bundy was surely well rewarded for his efforts.";
      hidePtwoElements();
  } else if (y == "35,35") {
      answertwo = "I'm finally awake! At least now I can tell somebody all I know! Maybe I was in a coma, but I heard every word that Dr Turner said in front of me. He's been paid to keep me and the other patients of this ward a secret. And by now I'm pretty sure it's PEI that's paying him. The pollution from their oil drills has been destroying our health rapidly. But I guess that money is more important than human lives.";
      hidePtwoElements();
  } else if (y == "35,42") {
      answertwo = "She's the nurse that have been coming to my room and doing the daily rounds.";
      hidePtwoElements();
  } else if (y == "35,48") {
      escape = 2;
      answertwo = "I was completely healthy until recently. And when I got sick, the doctors couldn't find the reason behind it. But now I know what's responsible for me losing my health! <br>Dr Turner thought that I couldn't hear anything, being in a coma, but I did. He is keeping me and the other patients hidden here, out of the public's sight. PEI is paying him to do this.<br>I overheard Dr Turner talking to a guy here in my room. They were saying that the pollution from all that PEI oil drilling in the county is what's making us ill. The guy told to the doctor that he will have bigger problems than gambling debts they covered for him, unless he keeps up the good work...<br><i>In the middle of Jenna's sentence, we hear a car arriving in front of the building. I look at the window and see somebody approaching the hospital. It's Dr Turner himself! What do I do? When nurse Barbara tells him that she already saw him coming in here, he will know that it's somebody using the power of disguise! While I'm panicking, I hear him talking on the phone to someone in front of the hospital entrance.</i><br>I'm at the hospital now. As soon as I finish, I'm coming to the base. Of course I'm alone, I'm not planning on bringing anybody to see that I'm working with PEI!<br><i>Dr Turner will enter the room soon. What do I do?</i>";
      hidePtwoElements();
  } else if (y == "35,50") {
      answertwo = "Why would you need that? Use it, I guess, there is another one in the corner.";
      hidePtwoElements();
  } else if (y == "35,LOC06" || y == "35,LOC09") {
      answertwo = "I've been here for so long.";
      hidePtwoElements();
  } else if (y == "38,01") {
      answertwo = "Oh, Miss Wonder! I hope you found your room to your liking. How can I help you?";
      hidePtwoElements();
  } else if (y == "38,07") {
      answertwo = "It's the woman your mother had a meeting with here at the hotel. I swear that I didn't hear anything they were saying.";
      hidePtwoElements();
  } else if (y == "38,08") {
      answertwo = "Hmm, that's interesting. Will that be all?";
      hidePtwoElements();
  } else if (y == "38,13") {
      answertwo = "Yes, well he asked if you were a guest of the hotel and I answered that I can't comment on that. He tried to bribe me, can you imagine! I politely asked him to leave. He said he will just finish the newspaper and sat at one of the tables. Oh yes, he received a phone call and he wrote something on the newspaper. He tore off the page he's written on and left soon afterwards. I saw him going to the nearest metro station.";
      hidePtwoElements();
  } else if (y == "38,19") {
      answertwo = "Thank you, but keep your tip. You're only a student.";
      hidePtwoElements();
  } else if (y == "38,21") {
      answertwo = "There was a man here. He asked about you, actually. Afterwards, he sat in the lounge and wrote something on the front page while he was talking on the phone. He tore the page off and took it with him.";
      hidePtwoElements();
  } else if (y == "38,23") {
      answertwo = "I remember Mrs Wonder. She is a remarkable person, you can sense it immidiately. She stayed here in two occasions in the last few months. I remember that she had a meeting with a woman in the hotel bar. I overheard them when I was passing by, I think she said her name was Alison Clarke and that she was a journalist.<br><i>I'm just about to thank her and leave, when she stops me.</i><br>Wait! I almost forgot! There was a man here half an hour ago asking if you were the guest of the hotel. He was bald and he was wearing sunglasses and a leather jacket.<br><i>Take cards <b>07</b> and <b>13</b></i>.";
      hidePtwoElements();
  } else if (y == "38,27") {
      answertwo = "It really brights up the atmosphere here, doesn't it? Oh, who am I kidding? I know it's horrible but my boss loves it. I can hardly breath in here! Please take it, you'll be doing me a favor.";
      hidePtwoElements();
  } else if (y == "38,31" || y == "38,43" || y == "38,47") {
      answertwo = "I've seen that mime artist a lot of times. He can get a bit repetative in his act.";
      hidePtwoElements();
  } else if (y == "38,34") {
      answertwo = "I don't usually take phone numbers of customers.";
      hidePtwoElements();
  } else if (y == "38,38") {
      answertwo = "Oh, I don't want to bore you with my personal stories.";
      hidePtwoElements();
  } else if (y == "38,46") {
      answertwo = "The man who was reading the newspaper received a phone call, wrote something down on the front page, tore it off and left.";
      hidePtwoElements();
  } else if (y == "38,51") {
      answertwo = "Feel free to take the pencil.";
      hidePtwoElements();
  } else if (y == "38,LOC01") {
      answertwo = "Here at the 'Deep Lake Hotel' we stand at your service at all times. The breakfast is from 7 to 9am, and the dinner from 7 to 9 pm. Feel free to use the wellness on the first floor.";
      hidePtwoElements();
  } else if (y == "38,LOC02") {
      answertwo = "It's the nearest metro station, only a few minutes from here.";
      hidePtwoElements();
  } else if (y == "38,LOC03") {
      answertwo = "It's the square in the old town. Famous for having a lot of pigeons.";
      hidePtwoElements();
  } else if (y == "38,SPO01") {
      answertwo = "You can find a map of the metro in every station. It's not so complicated to get around here.";
      hidePtwoElements();
  } else if (y == "42,01") {
      answertwo = "How can I help you?";
      hidePtwoElements();
  } else if (y == "42,02") {
      answertwo = "Thank you, but I ordered a salad and I'm waiting for the delivery. They are late, again. And I'm starving! I swear that it's the last time I'm ordering from this bistro.";
      hidePtwoElements();
  } else if (y == "42,03" || y == "42,06" || y == "42,10" || y == "42,14" || y == "42,17" || y == "42,22" || y == "42,24" || y == "42,27" || y == "42,40" || y == "42,44") {
      answertwo = "Miss, there are other people waiting. If you don't need anything, please step out of the line.";
      hidePtwoElements();
  } else if (y == "42,05") {
      answertwo = "Why are you asking me about a security guard who works at the mayor's office?";
      hidePtwoElements();
  } else if (y == "42,07" || y == "42,25") {
      answertwo = "Alison Clarke? I remember her, she was asking some questions around the hospital. Journalism isn't what it used to be.";
      hidePtwoElements();
  } else if (y == "42,08" || y == "42,26") {
      answertwo = "Would you like me to direct you to the psychiatric ward?";
      hidePtwoElements();
  } else if (y == "42,11") {
      answertwo = "Dr Rose is one of our best doctors. She's right there, in the hallway. Do you need to schedule an appointment?";
      hidePtwoElements();
  } else if (y == "42,13") {
      answertwo = "Oh, it's that man who came here once...Ah, actually, never mind, I think I've mistaken him for someone else.";
      hidePtwoElements();
  } else if (y == "42,20") {
      answertwo = "I ordered a salad for lunch, but the delivery is late as usual.";
      hidePtwoElements();
  } else if (y == "42,23") {
      answertwo = "Your mother isn't a patient of ours. I'm sorry, but I can't help you.";
      hidePtwoElements();
  } else if (y == "42,30") {
      answertwo = "I don't know your friend, miss. I really don't have time to chat about everybody you know.";
      hidePtwoElements();
  } else if (y == "42,33" || y == "42,45") {
      answertwo = "I'm not really into politics, but in my opinion the mayor is doing a good job. We never had as many tourists in the city like last year.";
      hidePtwoElements();
  } else if (y == "42,34") {
      answertwo = "I will not give you my phone number. If you want to contact me, call the hospital.";
      hidePtwoElements();
  } else if (y == "42,36" || y == "42,52") {
      answertwo = "This is not a veterinary clinic.";
      hidePtwoElements();
  } else if (y == "42,41") {
      answertwo = "Dr Rose is right there. Should I tell her that she's on your list?";
      hidePtwoElements();
  } else if (y == "42,42") {
      answertwo = "I'm here for all of your questions considering the hospital. But I will not share the details of my private life with you.";
      hidePtwoElements();
  } else if (y == "42,48") {
      answertwo = "Dr Turner is not doing surgery for the last 3 months, he's occupied elsewhere. But Dr Knight who's filling in his place is an excellent surgeon.";
      hidePtwoElements();
  } else if (y == "42,49") {
      answertwo = "Oh...this is just something I scribbled when I was bored during the night shift. Nothing special.";
      hidePtwoElements();
  } else if (y == "42,53") {
      answertwo = "There are no visitors allowed in this ward.";
      hidePtwoElements();
  } else if (y == "42,LOC06") {
      answertwo = "Yes, this is the Central Hospital reception desk. How can I help you?";
      hidePtwoElements();
  } else if (y == "42,LOC07") {
      answertwo = "I've never been to the mayor's office, but I heard that it was renovated recently.";
      hidePtwoElements();
  } else if (y == "42,LOC08") {
      answertwo = "Hmm, never heard of this little online magazine.";
      hidePtwoElements();
  } else if (y == "42,SPO05") {
      answertwo = "This doesn't make any sense to me. Should it?";
      hidePtwoElements();
  } else if (y == "45,01" || y == "45,02" || y == "45,03" || y == "45,04" || y == "45,05" || y == "45,06" || y == "45,07" || y == "45,08" || y == "45,09" || y == "45,10" || y == "45,11" || y == "45,12" || y == "45,13" || y == "45,14" || y == "45,15" || y == "45,16" || y == "45,17" || y == "45,18" || y == "45,19" || y == "45,20" || y == "45,21" || y == "45,22" || y == "45,23" || y == "45,24" || y == "45,25" || y == "45,26" || y == "45,27" || y == "45,28" || y == "45,29" || y == "45,30" || y == "45,31" || y == "45,32" || y == "45,33" || y == "45,34" || y == "45,35" || y == "45,36" || y == "45,37" || y == "45,38" || y == "45,39" || y == "45,40" || y == "45,41" || y == "45,42" || y == "45,43" || y == "45,44" || y == "45,45" || y == "45,46" || y == "45,47" || y == "45,48" || y == "45,49" || y == "45,50" || y == "45,51" || y == "45,52" || y == "45,53" || y == "45,54" || y == "45,55" || y == "45,56" || y == "45,57" || y == "45,LOC01" || y == "45,LOC02" || y == "45,LOC03" || y == "45,LOC04" || y == "45,LOC05" || y == "45,LOC06" || y == "45,LOC07" || y == "45,LOC08" || y == "45,LOC09" || y == "45,LOC10" || y == "45,LOC11" || y == "45,SPO01" || y == "45,SPO02" || y == "45,SPO03" || y == "45,SPO04" || y == "45,SPO05") {
      answertwo = "Who let you in my office? I'm busy now, you can schedule a meeting with my secretary. Please leave.";
      hidePtwoElements();
  } else if (y == "47,01") {
      answertwo = "Thanks for the tip. It's always nice to see that there are still some people who appreciate a good performance.";
      hidePtwoElements();
  } else if (y == "47,06") {
      answertwo = "I can give you some makeup if you want. I have a whole case of it at home.";
      hidePtwoElements();
  } else if (y == "47,07") {
      answertwo = "I don't read the news anymore. My art is the only thing that interests me.";
      hidePtwoElements();
  } else if (y == "47,08") {
      answertwo = "You're a magician of some kind, or?";
      hidePtwoElements();
  } else if (y == "47,13") {
      answertwo = "He did pass here, maybe a half an hour ago. I remember him well because he threw his used metro ticket in my case. Can you believe some people? Anyway, he went to this shop in Carousel St. The one that's looking straight at Lady's Alley. The shop was closed, so he left, but I didn't see where.";
      hidePtwoElements();
  } else if (y == "47,21") {
      answertwo = "I don't read the newspapers. It's better to not spoil your mind with everything that's written in the media.";
      hidePtwoElements();
  } else if (y == "47,23") {
      answertwo = "Sorry, but I haven't seen her.";
      hidePtwoElements();
  } else if (y == "47,27") {
      answertwo = "Wow, this smell is super strong and not at all that great.";
      hidePtwoElements();
  } else if (y == "47,34") {
      answertwo = "Sure, you can make a video. But only during my performance.";
      hidePtwoElements();
  } else if (y == "47,36" || y == "47,52") {
      answertwo = "My street friend seems to like you. If you want to take him, be my guest.";
      hidePtwoElements();
  } else if (y == "47,38") {
      answertwo = "I don't know this woman. I doubt that we are in the same circles.";
      hidePtwoElements();
  } else if (y == "47,43") {
      answertwo = "The money isn't great today. People are too busy these days to stop and enjoy the art.";
      hidePtwoElements();
  } else if (y == "47,47") {
      answertwo = "I may be performing on the street now, but you will see me in theatres soon, trust me.";
      hidePtwoElements();
  } else if (y == "47,LOC01") {
      answertwo = "I've never been to the hotel. I sleep in a squat at the moment.";
      hidePtwoElements();
  } else if (y == "47,LOC03") {
      answertwo = "This has been my spot for a few months now. I don't have a permit so sometimes the police chases me off, but usually they leave me alone.";
      hidePtwoElements();
  } else if (y == "48,01" || y == "48,02" || y == "48,03" || y == "48,04" || y == "48,05" || y == "48,06" || y == "48,07" || y == "48,08" || y == "48,09" || y == "48,10" || y == "48,11" || y == "48,12" || y == "48,13" || y == "48,14" || y == "48,15" || y == "48,16" || y == "48,17" || y == "48,18" || y == "48,19" || y == "48,20" || y == "48,21" || y == "48,22" || y == "48,23" || y == "48,24" || y == "48,25" || y == "48,26" || y == "48,27" || y == "48,28" || y == "48,29" || y == "48,30" || y == "48,31" || y == "48,32" || y == "48,33" || y == "48,34" || y == "48,35" || y == "48,36" || y == "48,37" || y == "48,38" || y == "48,39" || y == "48,40" || y == "48,41" || y == "48,42" || y == "48,43" || y == "48,44" || y == "48,45" || y == "48,46" || y == "48,47" || y == "48,48" || y == "48,49" || y == "48,50" || y == "48,51" || y == "48,52" || y == "48,53" || y == "48,54" || y == "48,55" || y == "48,56" || y == "48,57" || y == "48,LOC01" || y == "48,LOC02" || y == "48,LOC03" || y == "48,LOC04" || y == "48,LOC05" || y == "48,LOC06" || y == "48,LOC07" || y == "48,LOC08" || y == "48,LOC09" || y == "48,LOC10" || y == "48,LOC11" || y == "48,SPO01" || y == "48,SPO02" || y == "48,SPO03" || y == "48,SPO04" || y == "48,SPO05") {
      answertwo = "<i>Dr Turner isn't here. You can't talk to him, you can only talk about him.</i>";
      hidePtwoElements();
  } else if (y == "57,01" || y == "57,02" || y == "57,03" || y == "57,04" || y == "57,05" || y == "57,06" || y == "57,07" || y == "57,08" || y == "57,09" || y == "57,10" || y == "57,11" || y == "57,12" || y == "57,13" || y == "57,14" || y == "57,15" || y == "57,16" || y == "57,17" || y == "57,18" || y == "57,19" || y == "57,20" || y == "57,21" || y == "57,22" || y == "57,23" || y == "57,24" || y == "57,25" || y == "57,26" || y == "57,27" || y == "57,28" || y == "57,29" || y == "57,30" || y == "57,31" || y == "57,32" || y == "57,33" || y == "57,34" || y == "57,35" || y == "57,36" || y == "57,37" || y == "57,38" || y == "57,39" || y == "57,40" || y == "57,41" || y == "57,42" || y == "57,43" || y == "57,44" || y == "57,45" || y == "57,46" || y == "57,47" || y == "57,57" || y == "57,49" || y == "57,50" || y == "57,51" || y == "57,52" || y == "57,53" || y == "57,54" || y == "57,55" || y == "57,56" || y == "57,57" || y == "57,LOC01" || y == "57,LOC02" || y == "57,LOC03" || y == "57,LOC04" || y == "57,LOC05" || y == "57,LOC06" || y == "57,LOC07" || y == "57,LOC08" || y == "57,LOC09" || y == "57,LOC10" || y == "57,LOC11" || y == "57,SPO01" || y == "57,SPO02" || y == "57,SPO03" || y == "57,SPO04" || y == "57,SPO05") {
      answertwo = "<i>Dr Rose isn't here. You can't talk to her, you can only talk about her.</i>";
      hidePtwoElements();
  } else if (y == "02,06" || y == "06,02") {
      answertwo = "I don't see a good reason to put makeup into the food.";
      hidePtwoElements();
  } else if (y == "02,10" || y == "10,02") {
      answertwo = "Dipping the tablet in mayonnaise will not unlock it.";
      hidePtwoElements();
  } else if (y == "02,14" || y == "14,02") {
      answertwo = "The printer isn't hungry. There's plenty of paper in it.";
      hidePtwoElements();
  } else if (y == "02,16" || y == "16,02") {
      answertwo = "Is it really the best idea to drug this food with something that I don't even really know what it is? I don't think so.";
      hidePtwoElements();
  } else if (y == "02,27" || y == "27,02") {
      answertwo = "I don't want to spoil a perfectly good burger.";
      hidePtwoElements();
  } else if (y == "02,34" || y == "34,02") {
      answertwo = "The food isn't photogenic enough to make me want to take a photo of it.";
      hidePtwoElements();
  } else if (y == "02,36" || y == "02,52" || y == "36,02" || y == "52,02") {
      answertwo = "The cat doesn't like mayonnaise.";
      hidePtwoElements();
  } else if (y == "03,09" || y == "09,03") {
      answertwo = "It could be a good idea to tape something to the car, but what?";
      hidePtwoElements();
  } else if (y == "03,10" || y == "10,03") {
      answertwo = "I don't see what good would it do.";
      hidePtwoElements();
  } else if (y == "03,12" || y == "12,03") {
      answertwo = "I don't see how taping the window would help me.";
      hidePtwoElements();
  } else if (y == "03,14" || y == "14,03") {
      answertwo = "There is no need to tape the printer.";
      hidePtwoElements();
  } else if (y == "03,22" || y == "22,03") {
      answertwo = "Taping the rubber glove doesn't seem as such a good idea.";
      hidePtwoElements();
  } else if (y == "03,24" || y == "24,03") {
      answertwo = "I don't want to tie up anybody.";
      hidePtwoElements();
  } else if (y == "03,34" || y == "34,03") {
      answertwo = "Here goes...A phone you can stick anywhere.<br><i>Take card <b>40</b>. Remove cards <b>03</b> nad <b>34</b>.</i>";
      hidePtwoElements();
  } else if (y == "03,36" || y == "03,39" || y == "03,52" || y == "24,36" || y == "24,39" || y == "24,52" || y == "36,03" || y == "36,24" || y == "39,03" || y == "39,24" || y == "52,03" || y == "52,24") {
      answertwo = "I'm not going to tie up my little cat!";
      hidePtwoElements();
  } else if (y == "04,06" || y == "06,04" || y == "06,56" || y == "56,06") {
      answertwo = "The tree doesn't need makeup, it's already very pretty.";
      hidePtwoElements();
  } else if (y == "04,08" || y == "08,04") {
      answertwo = "My little tree, could you do me a favor and bent a branch just a little bit?.<br><i>As I use my special power, the tree gently lowers one of it's branches all the way to the floor.<br>Take card <b>56</b>. Remove card <b>04</b>.</i>";
      hidePtwoElements();
  } else if (y == "04,27" || y == "27,04") {
      answertwo = "I don't want to torture the tree with this smell.";
      hidePtwoElements();
  } else if (y == "04,32" || y == "32,04") {
      answertwo = "It would be great if I could climb up the tree to get the camera, but it's not so easy to do. The branches are too high to reach them.";
      hidePtwoElements();
  } else if (y == "04,34" || y == "34,04"|| y == "34,56" || y == "56,34") {
      answertwo = "I don't have the tree's phone number.";
      hidePtwoElements();
  } else if (y == "04,36" || y == "36,04") {
      answertwo = "I can't force the cat to climb on the tree.";
      hidePtwoElements();
  } else if (y == "04,52" || y == "52,04" || y == "52,56" || y == "56,52") {
      answertwo = "Sure, I can tell the cat to climb the tree, but he can't bring me the camera.";
      hidePtwoElements();
  } else if (y == "06,10" || y == "10,06") {
      answertwo = "I spread some of the powder with a brush on the tablet screen. Well well, look at this...<br><i>Take card <b>44</b>. Remove cards <b>06</b> and <b>10</b>.";
      hidePtwoElements();
  } else if (y == "06,34" || y == "34,06") {
      answertwo = "I like to keep my phone nice and clean.";
      hidePtwoElements();
  } else if (y == "06,36" || y == "06,52" || y == "36,06" || y == "52,06") {
      answertwo = "The cat gives me a look that says 'Don't you even think about it'.";
      hidePtwoElements();
  } else if (y == "06,43" || y == "43,06") {
      answertwo = "The makeup kit is already in the suitcase.";
      hidePtwoElements();
  } else if (y == "06,53" || y == "53,06") {
      answertwo = "I can't touch the lock in front of nurse Barbara. But even if I could, this would reveal the numbers in the code, not their order.";
      hidePtwoElements();
  } else if (y == "08,01" || y == "08,05" || y == "08,11" || y == "08,15" || y == "08,18" || y == "08,25" || y == "08,29" || y == "08,30" || y == "08,31" || y == "08,33" || y == "08,35" || y == "08,38" || y == "08,42" || y == "08,45" || y == "08,47") {
      answertwo = "It would be interesting to read people's minds and make them do stuff, but it's also a bit creepy. Anyway, my power works only on plants and animals.";
      hidePtwoElements();
  } else if (y == "08,27" || y == "27,08") {
      answertwo = "The plants in this potpourri have been dead for a long time, so my power doesn't work on it at all.";
      hidePtwoElements();
  } else if (y == "08,36" || y == "36,08") {
      answertwo = "Come on cat, show me what you're made of.<br><i>As I use the power on the cat, he becomes very collaborative.<br>Take card <b>52</b>. Remove card <b>36</b>.</i>";
      hidePtwoElements();
  } else if (y == "08,52" || y == "52,08") {
      answertwo = "I'm already using my power over the cat.";
      hidePtwoElements();
  } else if (y == "08,56" || y == "56,08") {
      answertwo = "What more can I ask of this tree than what it's already done for me?";
      hidePtwoElements();
  } else if (y == "09,01") {
      answertwo = "I can't get into the car. It's locked, of course.";
      hidePtwoElements();
  } else if (y == "09,34" || y == "34,09") {
      answertwo = "If I could somehow put my phone into the car, we could follow it with the tracking app. But the car is locked, of course.";
      hidePtwoElements();
  } else if (y == "09,40" || y == "40,09") {
      answertwo = "The tracking app on the phone will show us exactly where will the car go.<br><i>I tape the phone to the car, after calling Ron to come with his van to pick me up. I just have enough time to hide behind another car parked nearby when I see Dr Turner leaving the building. Fortunately, Ron arrives shortly after. Rose joins us, and the two of us jump into Ron's van. The chase for Dr Turner begins!<br>Take envelope <b>SPO06</b>. Remove cards <b>09</b>, <b>40</b> and <b>LOC10</b>.</i>";
      hidePtwoElements();
  } else if (y == "10,14" || y == "10,44" || y == "14,10" || y == "14,44") {
      answertwo = "That could work if I actually opened the tablet. I can't connect it to the printer while it's locked.";
      hidePtwoElements();
  } else if (y == "10,1654852" || y == "10,16482" || y == "10,1,6,4,8,2" || y == "10,1,6,5,4,8,5,2" || y == "10,2,5,8,4,5,6,1" || y == "10,2584561" || y == "10,28461" || y == "10,2,8,4,6,1" || y == "44,1654852" || y == "44,16482" || y == "44,1,6,4,8,2" || y == "44,2584561" || y == "44,28461" || y == "44,2,8,4,6,1" || y == "44,1,6,5,4,8,5,2" || y == "44,2,5,8,4,5,6,1") {
      answertwo = "As I repeat the pattern the tablet beeps and unlocks. I am pretty good at this!<br><i>Take card <b>17</b>. Remove card <b>44</b>.</i>";
      hidePtwoElements();
  } else if (y == "12,24" || y == "24,12") {
      answertwo = "I don't really see why would I throw the rope out of the window.";
      hidePtwoElements();
  } else if (y == "12,27" || y == "27,12") {
      answertwo = "The potpourri does smell really intense, but if I've been carrying it for all this time, I'm not going to throw it out of the window now.";
      hidePtwoElements();
  } else if (y == "12,34" || y == "34,12") {
      answertwo = "That's not much of a view to take a photo of it.";
      hidePtwoElements();
  } else if (y == "12,50" && escape == 1 || y == "50,12" && escape == 1) {
      answertwo = "Should I really break the window with the IV stand top? I don't see why.";
      hidePtwoElements();
  } else if (y == "12,50" && escape == 2 || y == "50,12" && escape == 2) {
      answertwo = "I could hook the IV stand top on the window, but I don't know what to do from there.";
      hidePtwoElements();
  } else if (y == "12,55" && escape == 1 || y == "55,12" && escape == 1) {
      answertwo = "I just got to the room. Why would I escape now?";
      hidePtwoElements();
  } else if (y == "12,55" && escape == 2 || y == "55,12" && escape == 2) {
      answertwo = "This may not be the safest thing to do, but I don't have a choice. Here we go!<br><i>I hook my improvised anchor on the window sill and use the rope to climb down the window. Jenna unhooks the anchor and throws it down just before Dr Turner enters the room. That was close!<br>Take card <b>LOC10</b>. Remove cards <b>12</b>, <b>35</b>, <b>55</b> and <b>LOC09</b> (but keep the other cards from the location on the table).</i>";
      hidePtwoElements();
  } else if (y == "14,17" || y == "17,14") {
      answertwo = "The file is called 'PEI_both_sides'. Let's try to print it, on both sides obviously.<br>Take envelope <b>SPO05</b>. Remove cards <b>14</b> and <b>17</b>.</i>";
      hidePtwoElements();
  } else if (y == "14,34" || y == "34,14") {
      answertwo = "There is nothing on my phone that I need to print, really.";
      hidePtwoElements();
  } else if (y == "16,27" || y == "27,16") {
      answertwo = "Why would I drug the potpourri? The smell itself is already poisonous enough.";
      hidePtwoElements();
  } else if (y == "16,36" || y == "16,39" || y == "16,52" || y == "36,16" || y == "39,16" || y == "52,16" || y == "52,46") {
      answertwo = "I don't want to drug poor little cat!";
      hidePtwoElements();
  } else if (y == "19,36" || y == "19,52" || y == "36,19" || y == "52,19") {
      answertwo = "What's a cat supposed to do with the money?";
      hidePtwoElements();
  } else if (y == "19,43" || y == "43,19") {
      answertwo = "Maybe a little tip will make the mime artist a bit more communicative.<br><i>I put the banknote in artist's suitcase and I finally catch his attention. He thanks me and starts a conversation with me.<br>Take card <b>47</b>. Remove cards <b>19</b>, <b>31</b> and <b>43</b>.</i>";
      hidePtwoElements();
  } else if (y == "21,34" || y == "34,21") {
      answertwo = "Taking a photo of the newspaper seems unnecesary. You can find all the news on the internet anyway.";
      hidePtwoElements();
  } else if (y == "21,51" || y == "51,21") {
      answertwo = "This is a little trick my mother taught me when I was a kid. I just have to gently shade the page with the pencil and...here it is!<br><i>The indentations on the page reveal what was written on the top page.<br>Take card <b>46</b>. Remove cards <b>21</b> and <b>51</b>.</i>";
      hidePtwoElements();
  } else if (y == "22,36" || y == "36,22") {
      answertwo = "I try to make the cat smell the glove, but he just turns his head away from it.";
      hidePtwoElements();
  } else if (y == "22,52" || y == "52,22") {
      answertwo = "Let's see if what they say about cats having a super sensitive smell is true.<br><i>The cat smells the glove and confirms to me that he could now recognize the smell of the glove's owner anywhere. <br>Take card <b>39</b>. Remove cards <b>22</b> and <b>52</b>.</i>";
      hidePtwoElements();
  } else if (y == "24,50" || y == "50,24") {
      answertwo = "You can learn how to make all kinds of knots on the internet.<br><i>Take card <b>55</b>. Remove cards <b>24</b> and <b>50</b>.</i>";
      hidePtwoElements();
  } else if (y == "26,01") {
      answertwo = "I already have my own appearance.";
      hidePtwoElements();
  } else if (y == "26,05" || y == "26,07" || y == "26,15" || y == "26,25" || y == "26,29" || y == "26,30" || y == "26,35" || y == "26,45") {
      answertwo = "It's fun to try it for a while, but I'm not getting anywhere with this.";
      hidePtwoElements();
  } else if (y == "26,11") {
      answertwo = "It would be easier to ask the real Rose for help. But I can't think of anything for her to do.";
      hidePtwoElements();
  } else if (y == "26,13") {
      answertwo = "Who would have thought that a leather jacket could look so good on me?<br><i>Use the input field below to act while having the appearance of the unknown man. Use it in the exactly same way as you would use the original one. You can always return to your usual form by using the usual input field above.</i>";
      hidePtwoElements();
      document.getElementById("unknownmanField").style.display = "block";
  } else if (y == "26,20") {
      answertwo = "It takes only a second for me to turn into the delivery guy, looking like him to the last detail. There is even a delivery box on my back.<br><i>Use the input field below to act while having the appearance of the delivery guy. Use it in the exactly same way as you would use the original one. You can always return to your usual form by using the original input field above.</i>";
      hidePtwoElements();
      document.getElementById("deliveryguyField").style.display = "block";
  } else if (y == "26,23") {
      answertwo = "I'm not sure that this would do any good.";
      hidePtwoElements();
  } else if (y == "26,33") {
      answertwo = "It's good to do it for practise, but I don't have a reason to use this mask.";
      hidePtwoElements();
  } else if (y == "26,42") {
      answertwo = "I don't think that's the right person I should be turning into.";
      hidePtwoElements();
  } else if (y == "26,48") {
      answertwo = "It's not that I dream of being a morally questionable doctor, but I'll do whatever is necessary to bring me closer to my goal.<br><i>Use the input field below to act while having the appearance of Dr Turner. Use it in the exactly same way as you would use the original one. You can always return to your usual form by using the usual input field above.</i>";
      hidePtwoElements();
      document.getElementById("turnerField").style.display = "block";
  } else if (y == "27,36" || y == "27,39" || y == "27,52" || y == "36,27" || y == "36,27" || y == "39,27") {
      answertwo = "I put the cat into the potpourri, but he can't stand the smell of it.";
      hidePtwoElements();
  } else if (y == "32,36" || y == "36,32") {
      answertwo = "I'm not sure how to get the cat go to the camera.";
      hidePtwoElements();
  } else if (y == "32,52" || y == "52,32") {
      answertwo = "The cat could climb the tree, but he can't bring me the camera.";
      hidePtwoElements();
  } else if (y == "34,31") {
      answertwo = "I don't have time to film the artist doing his show.";
      hidePtwoElements();
  } else if (y == "34,37" || y == "37,34") {
      answertwo = "Let's see what did this camera record...<br><i>I put the microSD card into my phone and look for the footage of last half an hour.<br>Take special objects cards <b>SPO02</b>, <b>SPO03</b> and <b>SPO04</b>. Remove card <b>37</b>.</i>";
      hidePtwoElements();
  } else if (y == "34,36" || y == "34,39" || y == "34,52" || y == "36,34" || y == "39,34" || y == "52,34") {
      answertwo = "A photo of the cat isn't very useful, but he's just so adorable!";
      hidePtwoElements();
  } else if (y == "36,54" || y == "54,36") {
      answertwo = "I try to make the cat search for Dr Turner's car, but he doesn't budge.";
      hidePtwoElements();
  } else if (y == "39,54" || y == "54,39") {
      answertwo = "Come on cat, you can do it!<br><i>The cat passes through the parking lot and after a few minutes of hesitation, he stops next to a car and meows decisively.<br>Take card <b>09</b>. Remove cards <b>39</b> and <b>54</b>.</i>";
      hidePtwoElements();
  } else if (y == "53,5317" || y == "53,5,3,1,7" || y == "53,6538" || y == "53,6,5,3,8" || y == "53,LIES" || y == "53,L,I,E,S") {
      answertwo = "Even if I know the code, I can't just go right to the lock and enter it. Nurse Barbara is sitting right there.";
      hidePtwoElements();
  } else if (y == "52,54" || y == "54,52") {
      answertwo = "If my obedient cat could smell the doctor, I'm sure he could find his car.";
      hidePtwoElements();
  } else if (y == "M20") {
      answertwo = "The receptionist told me that the man was heading to the metro station. So that's exactly where I'll go.<br><i>Take card <b>LOC02</b>. Remove cards <b>38</b> and <b>LOC01</b> (but keep the other cards from the location on the table).</i>";
      hidePtwoElements();
  } else if (y == "M03" || y == "A29") {
      answertwo = "So this is where the newspaper lead me. But what now?<br><i>Take card <b>LOC03</b>. Remove cards <b>46</b>, <b>SPO01</b> and <b>LOC02</b> (but keep the other cards from the location on the table).</i>";
      hidePtwoElements();
  } else if (y == "A57") {
      answertwo = "This is the shop that the man went to. Where to from here?<br><i>Take card <b>LOC04</b>. Remove cards <b>47</b> and <b>LOC03</b> (but keep the other cards from the location on the table).</i>";
      hidePtwoElements();
  } else if (y == "B33") {
      answertwo = "Security camera footage shows that the sunglasses leather jacket guy went into this building. I go right to the door, and just as I realise that I don't actually know what to do when I face the unknown man, I see the door opening. I back off and somebody comes out of the building. It's...the unknown man!<br>A second before he turns around and sees me, something happens. I feel a new kind of energy going through me. For a brief moment, I think about the mime artist that I spoke to earlier. And then I see my reflection on the window next to me. I AM that mime artist!<br>The unknown man passes right next to me and goes down the street. I have a new power, even more amazing than the old one. I easily return back to my normal self and enter the building.<br><i>Take cards <b>26</b> and <b>LOC05</b>. Remove cards <b>SPO02</b>, <b>SPO03</b>, <b>SPO04</b> and <b>LOC04</b>.</i>";
      hidePtwoElements();
  } else if (y == "G54") {
      answertwo = "I should take the drug to Dr Rose.<br><i>As I arrive to the hospital, I see Dr Rose in the hallway. We move to the side by the coffee machine, so that we can speak in private. I pass her the drug that is supposedly capable of removing our powers. She promises she will send it for analysis immidiately and that she will try to make an antidote. This will take a while, so I should continue with my investigation in the meantime.<br>Take card <b>LOC06</b>. Remove cards <b>16</b> and <b>57</b>.</i>";
      hidePtwoElements();
  } else if (y == "C29") {
      answertwo = "I didn't think that the mayor could be invloved, but if that's what it takes, I'm going to bring the mayor himself down!<br><i>Take card <b>LOC07</b>.</i>";
      hidePtwoElements();
  } else if (y == "H50") {
      answertwo = "I arrive to the 'Starchester Weather Radar' but I don't find anything of interest. But wasn't the magazine address 'Under the Radar'?</i>";
      hidePtwoElements();
  } else if (y == "H51") {
      answertwo = "Finally! This magazine really is under the radar, it wasn't easy to find its whereabouts.<br><i>Take card <b>LOC08</b>. Remove card <b>07</b>.</i>";
      hidePtwoElements();
  } else if (y == "C24" || y == "C30") {
      answertwo = "<i>We arrive to the spot the tracking app lead us to, and park the car across the street on a safe distance, so that nobody would spot us. We're here just in time to see Dr Turner going to the entrance of the building. An armed soldier guarding the doors greets him there and passes him a potion of some kind. Dr Turner drinks it, and a few moments later the soldier lets him in. Dr Rose turns to me and says:</i><br>This thing what he's drinking must be the drug that professor Martin gave you. My analysis of the drug shows that it's function is indeed to make our powers dissapear, so they must be giving it to people that enter as a precaution. Luckily, I've created an antidote.<br><i>Dr Rose gives me a pill and I swallow it, hopefully gaining immunity to this drug. <br>But then Ron, looking at the entrance with his binoculars, whispers in panic:</i><br>Guys, do you see the symbol on the doors? Rose, you know what it is. It's the symbol of Laki civilisation, the same parasite society that attacked and destroyed Nahukat. My worst nightmares have come true: the Lakis are here.<br><i>I manage to articulate a question, shaking with fear:</i><br>But how are Lakis connected with everything? I thought that the PEI is behind all of this.<br><i>Ron puts the binoculars down and says:</i><br>Now I see what does PEI really stand for: 'Planet Earth Invasion'. They are doing it all over again!<br><i>Take card <b>LOC11</b>. Return all of the tracking app cards into the <b>SPO06</b> envelope.</i>";
      hidePtwoElements();
  } else if (y == "DR TURNER" || y == "DRTURNER" || y == "DR. TURNER" || y == "DR.TURNER" || y == "TURNER") {
      answertwo = "Dr Turner is in charge of the restricted ward! It took some time to figure out how to read this document, but it was worth it.<br><i>Take card <b>48</b>. Remove cards <b>25</b>, <b>LOC08</b> and <b>SPO05</b>.</i>";
      hidePtwoElements();
	} else {
  		answertwo = randomanswertwo[Math.floor(Math.random()*randomanswertwo.length)];
      hidePtwoElements();
  	}
  	document.getElementById("bookPtwoAnswer").innerHTML = answertwo;
};

function deliveryGuy() {
	var deliveryguylowercase = document.getElementById("deliveryGuy").value;
  var deliveryguyinput = deliveryguylowercase.toUpperCase();
  var deliveryguyrandom = [
    "That's probably not the best thing to do while wearing a delivery guy costume.",
    "I don't think that this will help.",
    "Doing this while being the delivery guy might not be the best idea.",
    "Shouldn't I be using this delivery guy disguise for something else?",
    "There has to be a better way to use my delivery guy mask than this one."
  ];
  var deliveryguyanswer;
  if (deliveryguyinput == "01") {
  	deliveryguyanswer = "I will do everything it takes to find my mother.";
  } else if (deliveryguyinput == "02") {
  	deliveryguyanswer = "A hamburger with extra mayonnaise that Alison gave me.";
  } else if (deliveryguyinput == "03") {
  	deliveryguyanswer = "A duct tape roll that was obviously used to silence professor Martin.";
  } else if (deliveryguyinput == "05") {
  	deliveryguyanswer = "A security guard in the mayor's office. He seems a bit tired.";
  } else if (deliveryguyinput == "06") {
  	deliveryguyanswer = "White powder makeup the mime artist uses to put on his face.";
  } else if (deliveryguyinput == "07") {
  	deliveryguyanswero = "The journalist my mother had a meeting with at the hotel.";
  } else if (deliveryguyinput == "08") {
  	deliveryguyanswer = "My ability to connect to animals and plants. It's even stronger now than it was before.<br><i>To use this ability, enter ability card number <b>08</b> followed by the card number of the plant or animal you want to have an effect on in the input field, separated by a comma.</i>";
  } else if (deliveryguyinput == "09") {
  	deliveryguyanswer = "Dr Turner's car in front of the hospital. It is new and looks very expensive.";
  } else if (deliveryguyinput == "10") {
  	deliveryguyanswer = "The touchscreen tablet that the mayor gave me. It requires a swipe pattern to unlock.<br><i>You can now unlock the touchscreen tablet by entering the card number <b>10</b> followed by the sequence of numbers in the order of the swipe pattern. The card number and the numbers sequence should be separated by a comma, without spaces.</i>";
  } else if (deliveryguyinput == "11" || deliveryguyinput == "57") {
  	deliveryguyanswer = "Dr Rose Tobin was the physician of the original Nahukat crew that landed on Earth. She works at the hospital and is a very respected member of the community. But even though she likes it here on Earth, she misses our people immensely.";
  } else if (deliveryguyinput == "12") {
  	deliveryguyanswer = "The hospital room is on the first floor, above the hospital's parking lot.";
  } else if (deliveryguyinput == "13") {
  	deliveryguyanswer = "The man that was asking about me in the hotel. The receptionist described him as a bald man in a leather jacket with sunglasses.";
  } else if (deliveryguyinput == "14") {
  	deliveryguyanswer = "A printer in the 'Under the Radar' office.";
  } else if (deliveryguyinput == "15") {
  	deliveryguyanswer = "A patient lying in a coma. Her medical chart reads: <br><i>Patient: Jenna Kane <br>Diagnosis: Heavy metal poisoning with kidney, liver and heart damage, severe brain dysfunction <br>Illnes cause: Unknown <br>Current state: Patient entered a state of extreme unresponsiveness 22 hours after hospitalisation</i>";
  } else if (deliveryguyinput == "16") {
  	deliveryguyanswer = "I'm sure that Dr Rose could know more about this drug.";
  } else if (deliveryguyinput == "17") {
  	deliveryguyanswer = "The tablet is unlocked and has a file named 'PEI_both_sides'. Unfortunately, the file is either encrypted or corrupted. There are a bunch of unreadable signs in the file that don't make any sense.";
  } else if (deliveryguyinput == "18") {
  	deliveryguyanswer = "Professor Martin, well and alive. He better start to explain some things.";
  } else if (deliveryguyinput == "20") {
  	deliveryguyanswer = "The delivery guy that delivered the hamburger to the 'Under the Radar' office and left when I got there. I'm wearing his costume at the moment.";
  } else if (deliveryguyinput == "22") {
  	deliveryguyanswer = "A used glove in the trash bin.";
  } else if (deliveryguyinput == "23") {
  	deliveryguyanswer = "There is still no sign from my mother. But I feel that we're getting closer to the truth.";
  } else if (deliveryguyinput == "24") {
  	deliveryguyanswer = "The rope that was used to tie up professor Martin.";
  } else if (deliveryguyinput == "25") {
  	deliveryguyanswer = "Alison Clarke is the journalist that had a meeting with my mother.";
  } else if (deliveryguyinput == "26") {
  	deliveryguyanswer = "My amazing new ability to make me look like anybody in this world. Absolutely crazy.<br><i>To use this ability, enter ability card number <b>26</b> followed by the card number of the person you want to take appearance of in the input field, separated by a comma. You can choose any person whose card you have on the table.</i>";
  } else if (deliveryguyinput == "27") {
  	deliveryguyanswer = "A potpourri bowl with a smell so intense that it could bring the dead back to life.";
  } else if (deliveryguyinput == "28") {
  	deliveryguyanswer = "To enter the PEI base, it's necessary to pass the heavily armed soldier.";
  } else if (deliveryguyinput == "29") {
  	deliveryguyanswer = "The soldier guarding the entrence is carrying a huge rifle.";
  } else if (deliveryguyinput == "30") {
  	deliveryguyanswer = "Ron was the technology specialist in my parents' crew. He now does some freelance programing to bring food to the table, but he spends most of his time still working on fixing the communication system with Nahukat mothership. Without success, unfortunately. He can be very useful in finding information on people, considering his skills in the cyberspace.<br><i>You don't have to visit Ron to speak to him, you can always reach him over the phone. To communicate with Ron, you should put his card number <b>30</b> followed by the card number of what you want to speak about in the input field, separated by a comma.</i>";
  } else if (deliveryguyinput == "33" || deliveryguyinput == "45") {
  	deliveryguyanswer = "Starchester's mayor Bundy has been running the city for 10 years already. He's popular enough, keeping the people of Starchester entertained with festivals and expensive city projects. However, a part of the city population accuse him of favoring certain companies and providing them city work, with saving a part of the profit for himself. They don't have any solid evidence on this kind of activity, of course.";
  } else if (deliveryguyinput == "34") {
  	deliveryguyanswer = "The phone Mary gave me is equipped with a tracking software Ron installed. That way Ron knows where I am at all time.";
  } else if (deliveryguyinput == "35") {
  	deliveryguyanswer = "Jenna Kane is out of coma, awake and capable of speaking.";
  } else if (deliveryguyinput == "36") {
  	deliveryguyanswer = "A stray cat lying on the street, watching the mime artist's show.";
  } else if (deliveryguyinput == "39") {
  	deliveryguyanswer = "The cat took a good smell of the glove. He can definitely recognize the smell of the glove's owner now.";
  } else if (deliveryguyinput == "40") {
  	deliveryguyanswer = "With the duct tape on the phone, it will be easy to stick it somewhere.";
  } else if (deliveryguyinput == "41") {
  	deliveryguyanswer = "A little to do list I wrote. It's hard to remember everything when the day is so exciting.";
  } else if (deliveryguyinput == "42") {
  	deliveryguyanswer = "Nurse Barbara is in the reception booth in the hospital. Nothing can pass her eye unnoticed.";
  } else if (deliveryguyinput == "44") {
  	deliveryguyanswer = "A clearly visible smudge appears on the touchscreen.<br><i>You can now unlock the touchscreen tablet by entering the card number <b>44</b> followed by the sequence of numbers in the order of the swipe pattern. The card number and the numbers sequence should be separated by a comma, without spaces.</i>";
  } else if (deliveryguyinput == "48") {
  	deliveryguyanswer = "Dr Turner is very respected in the hospital. But probably his colleagues don't know everything about his work.";
  } else if (deliveryguyinput == "49") {
  	deliveryguyanswer = "I can clearly see what did nurse Barbara write on her arm.";
  } else if (deliveryguyinput == "50") {
  	deliveryguyanswer = "The IV stand has a removable top.";
  } else if (deliveryguyinput == "52") {
  	deliveryguyanswer = "The cat now does whatever I want him to.";
  } else if (deliveryguyinput == "53") {
  	deliveryguyanswer = "The door to this ward is protected by an alphanumeric lock. But even if I manage to find the code, nurse Barbara wouldn't let me near it.";
  } else if (deliveryguyinput == "54") {
  	deliveryguyanswer = "There is a lot of cars in the parking lot. I wonder which one is Dr Turner's.";
  } else if (deliveryguyinput == "55") {
  	deliveryguyanswer = "The IV stand top with a piece of rope tied to it.";
  } else if (deliveryguyinput == "LOC05") {
    deliveryguyanswer = "I'm shocked to see professor Martin <b>(18)</b> tied up to a chair. I untie him immidiately, of course, and end up with a piece od rope <b>(24)</b> he was tied with. There is also some duct tape <b>(03)</b> they used to keep him quiet lying on the floor.";
  } else if (deliveryguyinput == "LOC06") {
    deliveryguyanswer = "I'm not a big fan of hospitals, but the Starchester Central Hospital is a very modern and well equipped facility. Dr Rose <b>(11)</b>, the ex member of my parents space mission crew, is in the hall checking her patients' charts. A nurse <b>(42)</b> in charge of the reception desk is sitting behind it. There is an alphanumeric lock <b>(53)</b> for a door right of the reception desk with no indication of what is behind it.";
  } else if (deliveryguyinput == "LOC07") {
    deliveryguyanswer = "The mayor's office is peaceful, not a lot of work seems to be taking place here. There is a security guard <b>(05)</b> in the entrance. The doors to mayor's office are closed, and it's hard to know if the mayor <b>(33)</b> is inside or not.";
  } else if (deliveryguyinput == "LOC08") {
    deliveryguyanswer = "The 'Under the Radar' office is busy, with phones ringing and people talking in the same time. I can see Alison Clarke <b>(25)</b> sitting at one of the desks. As I enter the office. I pass by a delivery guy <b>(20)</b> bringing a hamburger <b>(02)</b> to Alison. As soon as he leaves the food, the runs out of the office.<br><i>Remove card <b>07</b>.</i>";
  } else if (deliveryguyinput == "LOC09") {
    deliveryguyanswer = "I finally enter the secret ward. I go to the first room and find a patient <b>(15)</b> lying in one of the beds. She is either sleeping or unconscious. There is some standard medical equipment in the room, like an IV stand <b>(50)</b>. I can also spot a used rubber glove <b>(22)</b> in the trash bin next to the door.";
  } else if (deliveryguyinput == "LOC10") {
    deliveryguyanswer = "There are a lot of cars <b>(54)</b> parked in the parking lot.";
  } else if (deliveryguyinput == "LOC11") {
    deliveryguyanswer = "There is no indication of PEI on the building. The only thing standing out of the ordinary are the unusual symbols on the entrance doors <b>(28)</b>. And a heavily armed soldier <b>(29)</b> in front of it, of course.";
  } else if (deliveryguyinput == "SPO05") {
    deliveryguyanswer = "The printed document from the tablet that mayor Bundy gave me still doesn't make a lot of sense.<br><i>This document will give you the name of the doctor in charge of the restricted ward in the hospital. Once you know the name, write it it the input field and press enter.</i>";
  } else if (deliveryguyinput == "SPO06") {
    deliveryguyanswer = "GPS tracking system shows the movements of Dr Turner's car.";
  } else if (deliveryguyinput == "01,01") {
    deliveryguyanswer = "I feel like I've grown in these last few days. Now that I know the truth about my mother and I, so many things make more sense.";
  } else if (deliveryguyinput == "01,02") {
    deliveryguyanswer = "There sure is a lot of mayonnaise in this burger.";
  } else if (deliveryguyinput == "01,03") {
    deliveryguyanswer = "It's always useful to have a roll of duct tape with you.";
  } else if (deliveryguyinput == "01,05") {
    deliveryguyanswer = "The security guard looks like his shift here was long and tiresome.";
  } else if (deliveryguyinput == "01,06") {
    deliveryguyanswer = "The mime artist doesn't seem to mind if I borrow it. White makeup isn't really my style, but I'll take it. You never know what will become trendy next.";
  } else if (deliveryguyinput == "01,07") {
    deliveryguyanswer = "I'm sure this journalist knows something about my mother. I have to find a way to reach her.";
  } else if (deliveryguyinput == "01,08") {
    deliveryguyanswer = "I'm so used to having this little power now that it's getting hard to imagine life without it.";
  } else if (deliveryguyinput == "01,09") {
    deliveryguyanswer = "What was it that Dr Turner said on the phone? Something about going to the PEI after his visit to the hospital? I'd like to see where this PEI base is, but I can't get into the car. It's locked.";
  } else if (deliveryguyinput == "01,10") {
    deliveryguyanswer = "I sure would like to take a look inside mayor's tablet.";
  } else if (deliveryguyinput == "01,11" || deliveryguyinput == "01,57") {
    deliveryguyanswer = "Dr Rose is a very nice and calm woman. I wouldn't be surprised if she was the most popular doctor around here. During her earthly career she managed to get funding for three research studies already, where she could carefully implement some of advanced medical knowledge of Nahukat.";
  } else if (deliveryguyinput == "01,12") {
    deliveryguyanswer = "The window is looking right at the hospital parking lot. Not much of a view, really.";
  } else if (deliveryguyinput == "01,13") {
    deliveryguyanswer = "This man is following me? He has to be connected to the disappearance of my mother. Well, I'm not afraid of him! OK, maybe just a little bit.";
  } else if (deliveryguyinput == "01,14") {
    deliveryguyanswer = "A standard inkjet office printer. Nothing unusual there.";
  } else if (deliveryguyinput == "01,15") {
    deliveryguyanswer = "This poor woman is in a coma. If only I could wake her up somehow...";
  } else if (deliveryguyinput == "01,16" || deliveryguyinput == "16,01") {
    deliveryguyanswer = "I should give this to Dr Rose for analysis. If somebody can figure out what this is, it's her.";
  } else if (deliveryguyinput == "01,17") {
    deliveryguyanswer = "The document on the tablet is very strange. And what's with this name, 'both sides'?";
  } else if (deliveryguyinput == "01,18") {
    deliveryguyanswer = "Professor Martin was kidnapped? How did this happen?";
  } else if (deliveryguyinput == "01,20") {
    deliveryguyanswer = "I am super convincible in this delivery guy mask.";
  } else if (deliveryguyinput == "01,22") {
    deliveryguyanswer = "It's not very hygienic to take other people's used gloves from the trash bin, but I have a feeling that it night be useful.";
  } else if (deliveryguyinput == "01,23") {
    deliveryguyanswer = "Oh mother...what did you get into? I have to find you, and I have to do it fast!";
  } else if (deliveryguyinput == "01,24") {
    deliveryguyanswer = "A piece of rope is something every young lady should have in her bag at all times, isn't it?";
  } else if (deliveryguyinput == "01,25") {
    deliveryguyanswer = "Now that I've found you Alison, you better talk!";
  } else if (deliveryguyinput == "01,26") {
    deliveryguyanswer = "OK, I have to admit that this ability is even cooler than the other one!";
  } else if (deliveryguyinput == "01,27") {
    deliveryguyanswer = "This smells way too intense. Every time I open my backpack I almost suffocate. Why am I carrying it around again?";
  } else if (deliveryguyinput == "01,28" || deliveryguyinput == "28,01") {
    deliveryguyanswer = "I have to pass the soldier first to enter the PEI base.";
  } else if (deliveryguyinput == "01,29") {
    deliveryguyanswer = "I can't pretend not to care that this guy is fully armed while I don't have anything to protect me. But I can't stop now!";
  } else if (deliveryguyinput == "01,30") {
    deliveryguyanswer = "Ron is great. He's the funniest of the crew, and even though I've just met him, I feel like we know each other for ages. But his light hearted nature doesn't diminish how dangerous he can be if he wants to...Give this guy a computer and he can enter any system in just a few clicks.";
  } else if (deliveryguyinput == "01,33" || deliveryguyinput == "01,45") {
    deliveryguyanswer = "I don't know a lot about the mayor, except that he's been ruling the city for a long time now. And I heard that there are some corruption accusations against him. But it hasn't really caused a big fall of his popularity.";
  } else if (deliveryguyinput == "01,34") {
    deliveryguyanswer = "The phone that Mary gave me has a tracking app installed by Ron. Knowing that he can see where I am makes me feel a lot safer.";
  } else if (deliveryguyinput == "01,35") {
    deliveryguyanswer = "Wow, I've awaken a woman from a coma! I think that Dr Rose would be proud of me.";
  } else if (deliveryguyinput == "01,36") {
    deliveryguyanswer = "I wish that I could have a cat too! But my dog Laika wouldn't like it a lot.";
  } else if (deliveryguyinput == "01,39") {
    deliveryguyanswer = "I've heard that cats have a very developed sense of smell, even stronger than dogs.";
  } else if (deliveryguyinput == "01,40") {
    deliveryguyanswer = "I hope that the tape won't leave sticky traces on my new phone.";
  } else if (deliveryguyinput == "01,41") {
    deliveryguyanswer = "I have a habit of forgetting what I'm supposed to do. This way it shouldn't happen.";
  } else if (deliveryguyinput == "01,42") {
    deliveryguyanswer = "This nurse isn't very helpful, is she?";
  } else if (deliveryguyinput == "01,44") {
    deliveryguyanswer = "Alright, the pattern smudge is super clear.";
  } else if (deliveryguyinput == "01,48") {
    deliveryguyanswer = "What could Dr Turner be working on in the hospital? I don't think it's anything great if there is all this mystery around it.";
  } else if (deliveryguyinput == "01,49") {
    deliveryguyanswer = "Luckily Barbara's memory isn't her strong suit. Now I can easily see the code for the ward lock.";
  } else if (deliveryguyinput == "01,50") {
    deliveryguyanswer = "Many objects I encounter seemed useless in the beginning, but they turned out to be very valuable.";
  } else if (deliveryguyinput == "01,52") {
    deliveryguyanswer = "Sorry cat, but you will have to help me a little bit.";
  } else if (deliveryguyinput == "01,53") {
    deliveryguyanswer = "I wonder what's hiding behind this lock...a zombie ward?";
  } else if (deliveryguyinput == "01,54") {
    deliveryguyanswer = "So many cars...Which one could be Dr Turner's?";
  } else if (deliveryguyinput == "01,55") {
    deliveryguyanswer = "What a nice anchor I've created!";
  } else if (deliveryguyinput == "01,LOC05") {
    deliveryguyanswer = "Professor Martin! So this is where he disappeared to. But where is my mother?";
  } else if (deliveryguyinput == "01,LOC06") {
    deliveryguyanswer = "The hospital is quiet enough. Only a few patients in the waiting room and a nurse on the reception desk. Dr Rose is here too.";
  } else if (deliveryguyinput == "01,LOC07") {
    deliveryguyanswer = "It seems as there are not a lot of people in the mayor's office. The security guard is taking his job seriously, not leaving his position and looking around as if something was actually happening here.";
  } else if (deliveryguyinput == "01,LOC08") {
    deliveryguyanswer = "'Under the Radar' office is vibrant with young employees chatting and music coming from the radio. I think I see Alison Clarke at one of the tables.";
  } else if (deliveryguyinput == "01,LOC09") {
    deliveryguyanswer = "There is only one patient in the room, and she's unconscious.";
  } else if (deliveryguyinput == "01,LOC10") {
    deliveryguyanswer = "The parking lot is huge and filled with cars.";
  } else if (deliveryguyinput == "01,LOC11") {
    deliveryguyanswer = "I'm finally getting close to finding my mother. I have a feeling she is near.";
  } else if (deliveryguyinput == "01,SPO05") {
    deliveryguyanswer = "There has to be a way to shed some light on the meaning of this document.";
  } else if (deliveryguyinput == "01,SPO06") {
    deliveryguyanswer = "All we have to do is follow Dr Turner's car.";
  } else if (deliveryguyinput == "11,01") {
    deliveryguyanswer = "Oh, it's you Ziggy. I see that you've perfected our power of disguise.";
  } else if (deliveryguyinput == "11,02") {
    deliveryguyanswer = "Thanks, I already had my lunch.";
  } else if (deliveryguyinput == "11,03") {
    deliveryguyanswer = "That's OK, we have a bunch of tape in our storage room.";
  } else if (deliveryguyinput == "11,05") {
    deliveryguyanswer = "Oh yes, what a nice family. His wife was my patient a few years ago. Too bad he works for that sketchy mayor Bundy.";
  } else if (deliveryguyinput == "11,06") {
    deliveryguyanswer = "I don't wear makeup. Especially not white face powder, that would just scare my patients.";
  } else if (deliveryguyinput == "11,07") {
    deliveryguyanswer = "I've never heard of this journalist. But you know what, ask Ron about it. If anybody can dig up something on somebody, it's him.";
  } else if (deliveryguyinput == "11,08") {
    deliveryguyanswer = "Yes, this is one of the funniest powers we have. I play chess with my philodendron all the time!";
  } else if (deliveryguyinput == "11,09") {
    deliveryguyanswer = "We should follow this car!";
  } else if (deliveryguyinput == "11,10") {
    deliveryguyanswer = "Let me take a try...No, that wasn't it.";
  } else if (deliveryguyinput == "11,11") {
    deliveryguyanswer = "I've tried to move on, but the truth is that I'm still thinking about Nahukat people every day. Ron hasn't stopped working on the communication system, but we haven't progressed a lot, in all these years.";
  } else if (deliveryguyinput == "11,12") {
    deliveryguyanswer = "The view is not the best. What can we do.";
  } else if (deliveryguyinput == "11,13") {
    deliveryguyanswer = "This man is asking about you? He must be working for the same people who took your mother.";
  } else if (deliveryguyinput == "11,14") {
    deliveryguyanswer = "Why are we talking about a printer? Ziggy, we don't have time for this.";
  } else if (deliveryguyinput == "11,15") {
    deliveryguyanswer = "I can't help you with that. There isn't really anything you can do to wake somebody up from a coma. If you find a way, sure let me know how you did it.";
  } else if (deliveryguyinput == "11,17") {
    deliveryguyanswer = "Maybe Ron could take a look at this.";
  } else if (deliveryguyinput == "11,20") {
    deliveryguyanswer = "Your delivery guy mask is very believable.";
  } else if (deliveryguyinput == "11,22") {
    deliveryguyanswer = "The medical staff here uses this type of gloves.";
  } else if (deliveryguyinput == "11,23") {
    deliveryguyanswer = "You can only imagine how much I miss your mother. And to see you here now, it's unbelievable! We will find Lena, don't worry!";
  } else if (deliveryguyinput == "11,24") {
    deliveryguyanswer = "A piece of rope? Seriously, how do you fit all this stuff in that small backpack?";
  } else if (deliveryguyinput == "11,25") {
    deliveryguyanswer = "So Lena contacted Alison because of her article? It looks as if this story could be bigger than we thought.";
  } else if (deliveryguyinput == "11,26") {
    deliveryguyanswer = "It's the best, isn't it? Look!<br><i>And just like that, my identical twin appeared in front of me. I almost screamed! She turned back to Dr Rose in a second.</i><br>Ha ha! You should have seen your face!";
  } else if (deliveryguyinput == "11,27") {
    deliveryguyanswer = "I didn't think that it's possible, but there is such a thing as too much cinnamon.";
  } else if (deliveryguyinput == "11,28") {
    deliveryguyanswer = "Ziggy, you try to get pass the soldier and I'll check around to see if there is an another entrance somewhere. Ron, you keep guard in the car.";
  } else if (deliveryguyinput == "11,29") {
    deliveryguyanswer = "He is dangerous, but when you use your powers you're even more dangerous, Ziggy. Go get him! I will go to check around, there must be another entrance into this building. Ron, you stay here, keep guard and wait for us in the car.";
  } else if (deliveryguyinput == "11,30") {
    deliveryguyanswer = "Ron and I are best friends. He is amazing with techology, but without the right equipment even he can't fix the communication system of our ship. One day, maybe.";
  } else if (deliveryguyinput == "11,33" || deliveryguyinput == "11,45") {
    deliveryguyanswer = "The mayor is corrupted, I'm sure of it. The fact that all of the big projects in the city go to the hands of contractors, that happen to be his cousins, can't be a coincidence. Nor is all the money that keeps stacking in his bank account.";
  } else if (deliveryguyinput == "11,34") {
    deliveryguyanswer = "I'm glad you have this phone with you.";
  } else if (deliveryguyinput == "11,35") {
    deliveryguyanswer = "You woke her up? That's really impressive.";
  } else if (deliveryguyinput == "11,36" || deliveryguyinput == "11,39" || deliveryguyinput == "11,52") {
    deliveryguyanswer = "You have a cat now? I thought you had a dog.";
  } else if (deliveryguyinput == "11,40") {
    deliveryguyanswer = "What are you doing with your phone? Take care of it, it has a tracking app so that we can know where you are.";
  } else if (deliveryguyinput == "11,41") {
    deliveryguyanswer = "So did you manage to find Alison? You should ask Ron about her, he's quite skillful when it comes to finding information on somebody.";
  } else if (deliveryguyinput == "11,42") {
    deliveryguyanswer = "That nurse is scary. I swear that she never leaves the desk. I don't know who is in charge of this restricted ward, but I've seen her entering in it. Her memory must be really poor because she has the code written on her arm and she always checks it before going in. You can't see it now because of the long sleeved jacket she's wearing, but it's there. And don't try to take her form to see her arm, our power duplicates only the parts of a person we see.";
  } else if (deliveryguyinput == "11,44") {
    deliveryguyanswer = "Well Ziggy, aren't you a clever girl.";
  } else if (deliveryguyinput == "11,48") {
    deliveryguyanswer = "So Dr Turner is in charge of the ward? He was acting a little suspicious lately, now that I think about it. Always looking behind his shoulder, if you know what I mean.";
  } else if (deliveryguyinput == "11,49") {
    deliveryguyanswer = "You managed to get a look at her arm? Way to go Ziggy!";
  } else if (deliveryguyinput == "11,50") {
    deliveryguyanswer = "Sure, take hospital equipment. You need it more than our patients, don't you?";
  } else if (deliveryguyinput == "11,53") {
    deliveryguyanswer = "I don't know the code. They've changed it a few months ago and the whole ward became a restricted zone. To tell you the truth, I don't even know which doctor is in charge of it. I've only seen nurse Barbara entering it. I think she has the code written on her arm because she always checks it before entering the ward. I didn't get a good look at it because she's always wearing this long sleeved jacket. It's seems obvious to take her form and look at her arm, but our power doesn't work like that. We only take the appearance of those details we can see on a person.";
  } else if (deliveryguyinput == "11,54") {
    deliveryguyanswer = "I can't tell you which car is Dr Turner's. I think he changed cars recently.";
  } else if (deliveryguyinput == "11,55") {
    deliveryguyanswer = "Please return the IV stand top as soon as you're finished with this, whatever it is.";
  } else if (deliveryguyinput == "11,LOC06") {
    deliveryguyanswer = "It's a nice place to work. But you know that I will never forget my old life and our people.";
  } else if (deliveryguyinput == "11,LOC07") {
    deliveryguyanswer = "Did you notice how the office is renovated? Guess who paid for the new rare marble floor. Us, the taxpayers.";
  } else if (deliveryguyinput == "11,LOC08") {
    deliveryguyanswer = "I've never read this magazine. Did you find out how is it connected with your mother?";
  } else if (deliveryguyinput == "11,LOC09") {
    deliveryguyanswer = "You're telling me that there are people in coma lying in this ward? What are they suffering from?";
  } else if (deliveryguyinput == "11,LOC10") {
    deliveryguyanswer = "I couldn't tell you which is Dr Turner's car.";
  } else if (deliveryguyinput == "11,LOC11") {
    deliveryguyanswer = "OK, we can't give up now. I will see if there is another way to get in here. Ron, you stay in the car and be ready for our escape. Ziggy, you try to get inside from here. And take care, everybody.";
  } else if (deliveryguyinput == "11,SPO05") {
    deliveryguyanswer = "This message is encrypted somehow. If we could only find the code...";
  } else if (deliveryguyinput == "30,01") {
    deliveryguyanswer = "Ziggy, it's so great to talk to you. I only wish the circumstances were different.";
  } else if (deliveryguyinput == "30,02") {
    deliveryguyanswer = "I don't know how could I eat the burger over the phone.";
  } else if (deliveryguyinput == "30,03") {
    deliveryguyanswer = "I have more than enough duct tape at home.";
  } else if (deliveryguyinput == "30,05") {
    deliveryguyanswer = "I did a quick check up on him. Married, two kids, working in mayor's office for 6 months. Doesn't seem to have any connection to mayor's business, he's really only a security guard.";
  } else if (deliveryguyinput == "30,07") {
    deliveryguyanswer = "Well, it wasn't so easy to track her down because she signs her articles with an alias. But I did find her. She works for an online magazine called 'Under the Radar'. I didn't find their address though. There is a mistake on their contact page, they wrote 'Under the Radar' in their address section. Or maybe that mistake was intentional?";
  } else if (deliveryguyinput == "30,08" || deliveryguyinput == "30,26") {
    deliveryguyanswer = "I see you're enjoying your new powers. Just be careful, nobody around you should know that you have them.";
  } else if (deliveryguyinput == "30,09") {
    deliveryguyanswer = "I checked the number plate, the car is registered under Dr Anthony Turner.";
  } else if (deliveryguyinput == "30,10") {
    deliveryguyanswer = "I'm sorry, but there are just too many possible combinations to crack this code by force.";
  } else if (deliveryguyinput == "30,11" || deliveryguyinput == "30,57") {
    deliveryguyanswer = "Rose is a fantastic physician and an amazing friend. She's at the hospital if you need her.";
  } else if (deliveryguyinput == "30,12") {
    deliveryguyanswer = "Ziggy, try to escape through the window! Is it too high?";
  } else if (deliveryguyinput == "30,13") {
    deliveryguyanswer = "I don't know who the guy is, but I'm sure he knows what happened to Lena.";
  } else if (deliveryguyinput == "30,14") {
    deliveryguyanswer = "This model is famous for it's precise both sides printing.";
  } else if (deliveryguyinput == "30,15" || deliveryguyinput == "30,35") {
    deliveryguyanswer = "She lives in Marsley, a village near here. And she's not the only one who's sick. There were many locals from the villages around that had serious health issues during the last few months.";
  } else if (deliveryguyinput == "30,16") {
    deliveryguyanswer = "This was given to Lena? You should take it to Dr Rose for analysis.";
  } else if (deliveryguyinput == "30,17") {
    deliveryguyanswer = "The file you sent me isn't encrypted. And I couldn't find a font like this, not even in the dark web. And what about the name 'PEI_both_sides'? PEI is the oil company that profited the most of mayor Bundy's tax reductions. But what does 'both sides' mean?";
  } else if (deliveryguyinput == "30,20") {
    deliveryguyanswer = "I checked the delivery guy. Didn't find anything interesting on him.";
  } else if (deliveryguyinput == "30,22") {
    deliveryguyanswer = "Somebody of the hospital staff must have used this glove.";
  } else if (deliveryguyinput == "30,23") {
    deliveryguyanswer = "Lena is asking for help. That's why she sent you to us. We have to find her...and soon.";
  } else if (deliveryguyinput == "30,06" || deliveryguyinput == "30,24" || deliveryguyinput == "30,50" || deliveryguyinput == "30,55") {
    deliveryguyanswer = "You remind me so much of your father. He always used to make use of a bunch of weird stuff he picked up from here and there.";
  } else if (deliveryguyinput == "30,25") {
    deliveryguyanswer = "You found Alison? That's amazing!";
  } else if (deliveryguyinput == "30,27") {
    deliveryguyanswer = "I can't smell it over the phone, but I believe you when you say it's too much.";
  } else if (deliveryguyinput == "30,28") {
    deliveryguyanswer = "Ziggy, I'm sure you can think of something to get inside. Your mother is waiting for you!";
  } else if (deliveryguyinput == "30,29") {
    deliveryguyanswer = "Ziggy, don't let yourself get intimidated by this guy. You have strenght that he doesn't.";
  } else if (deliveryguyinput == "30,30") {
    deliveryguyanswer = "I've been working on fixing our communication system since we came to Earth. But I haven't made enough progress still. The technology is so limited on this planet, it's frustrating.";
  } else if (deliveryguyinput == "30,33" || deliveryguyinput == "30,45") {
    deliveryguyanswer = "Mayor Bundy has been accused of many things. Some of them involve spending tax money on expensive city projects that don't help in solving real problems, like waste managment. Other imply that he's been putting his people on high, well paid and powerful positions. But one rumor could perhaps interest us the most. He significantly lowered the taxes for new businesses as a part of his economy growth policy two years ago. And there was one company who profited from it the most, quickly gaining wealth and monopoly in the region. It was PEI, 'Petroleum Extraction Industries'. He should be in his office now, it's working hours.";
  } else if (deliveryguyinput == "30,34") {
    deliveryguyanswer = "You know that I've installed a tracking system so that I can always see where you are. So keep it with you and keep it turned on.";
  } else if (deliveryguyinput == "30,36" || deliveryguyinput == "30,39" || deliveryguyinput == "30,52") {
    deliveryguyanswer = "I understand why you took this cat with you. All of us Nahukat people love animals.";
  } else if (deliveryguyinput == "30,40") {
    deliveryguyanswer = "Take care of that phone!";
  } else if (deliveryguyinput == "30,41") {
    deliveryguyanswer = "It's a good thing to be writing down what needs to be done. If I can help you with anything, just let me know.";
  } else if (deliveryguyinput == "30,42") {
    deliveryguyanswer = "I checked on her. She's been working in the hospital for 7 years and has good reviews from the patients. Except this one time she was caught in shoplifting when she was 17 years old, there really isn't anything suspicious about her.";
  } else if (deliveryguyinput == "30,44") {
    deliveryguyanswer = "That's some Poirot work there Ziggy. Nicely done.";
  } else if (deliveryguyinput == "30,48") {
    deliveryguyanswer = "Dr Turner a very well respected surgeon. He's been working for the Central Hospital for 4 years, when he moved to Starchester. According to his financial records, he was on a verge of bancrupcy a year ago. And I have information that it was due to large gambling debts he collected over the years. But very soon all of his debts were miraculously covered for.";
  } else if (deliveryguyinput == "30,49") {
    deliveryguyanswer = "I was sure you will be able to get the code. You're as resourceful as your parents.";
  } else if (deliveryguyinput == "30,53") {
    deliveryguyanswer = "I don't know why this area of hospital would be restricted. Rose could know something about it.";
  } else if (deliveryguyinput == "30,54") {
    deliveryguyanswer = "I could find the licence plate number of Dr Turner's car, but it will take some time. And he could return to the car any minute. If there's a quicker way to find it, go for it!";
  } else if (deliveryguyinput == "30,LOC06") {
    deliveryguyanswer = "Rose works at the hospital. She told me about this ward that's been a restricted area for 3 months. She still didn't find out what's been going on there.";
  } else if (deliveryguyinput == "30,LOC07") {
    deliveryguyanswer = "Ah, our famous mayor Bundy. If you want to know more about lovely Mr Bundy, just ask.";
  } else if (deliveryguyinput == "30,LOC08") {
    deliveryguyanswer = "Aha, so it really was under the radar!";
  } else if (deliveryguyinput == "30,LOC09") {
    deliveryguyanswer = "So this is where they've been hiding all these sick people!";
  } else if (deliveryguyinput == "30,LOC10") {
    deliveryguyanswer = "Dr Turner's car must be parked there somewhere.";
  } else if (deliveryguyinput == "30,LOC11") {
    deliveryguyanswer = "Lena must be here!";
  } else if (deliveryguyinput == "30,SPO05") {
    deliveryguyanswer = "I wonder how could we shed a light on the meaning of this document.";
  } else if (deliveryguyinput == "02,06" || deliveryguyinput == "06,02") {
    deliveryguyanswer = "I don't see a good reason to put makeup into the food.";
  } else if (deliveryguyinput == "02,10" || deliveryguyinput == "10,02") {
    deliveryguyanswer = "Dipping the tablet in mayonnaise will not unlock it.";
  } else if (deliveryguyinput == "02,14" || deliveryguyinput == "14,02") {
    deliveryguyanswer = "The printer isn't hungry. There's plenty of paper in it.";
  } else if (deliveryguyinput == "02,16" || deliveryguyinput == "16,02") {
    deliveryguyanswer = "Is it really the best idea to drug this food with something that I don't even really know what it is? I don't think so.";
  } else if (deliveryguyinput == "02,27" || deliveryguyinput == "27,02") {
    deliveryguyanswer = "I don't want to spoil a perfectly good burger.";
  } else if (deliveryguyinput == "02,34" || deliveryguyinput == "34,02") {
    deliveryguyanswer = "The food isn't photogenic enough to make me want to take a photo of it.";
  } else if (deliveryguyinput == "02,36" || deliveryguyinput == "02,52" || deliveryguyinput == "36,02" || deliveryguyinput == "52,02") {
    deliveryguyanswer = "The cat doesn't like mayonnaise.";
  } else if (deliveryguyinput == "03,09" || deliveryguyinput == "09,03") {
    deliveryguyanswer = "It could be a good idea to tape something to the car, but what?";
  } else if (deliveryguyinput == "03,10" || deliveryguyinput == "10,03") {
    deliveryguyanswer = "I don't see what good would it do.";
  } else if (deliveryguyinput == "03,12" || deliveryguyinput == "12,03") {
    deliveryguyanswer = "I don't see how taping the window would help me.";
  } else if (deliveryguyinput == "03,14" || deliveryguyinput == "14,03") {
    deliveryguyanswer = "There is no need to tape the printer.";
  } else if (deliveryguyinput == "03,22" || deliveryguyinput == "22,03") {
    deliveryguyanswer = "Taping the rubber glove doesn't seem as such a good idea.";
  } else if (deliveryguyinput == "03,24" || deliveryguyinput == "24,03") {
    deliveryguyanswer = "I don't want to tie up anybody.";
  } else if (deliveryguyinput == "03,34" || deliveryguyinput == "34,03") {
    deliveryguyanswer = "Here goes...A phone you can stick anywhere.<br><i>Take card <b>40</b>. Remove cards <b>03</b> nad <b>34</b>.</i>";
  } else if (deliveryguyinput == "03,36" || deliveryguyinput == "03,39" || deliveryguyinput == "03,52" || deliveryguyinput == "24,36" || deliveryguyinput == "24,39" || deliveryguyinput == "24,52" || deliveryguyinput == "36,03" || deliveryguyinput == "36,24" || deliveryguyinput == "39,03" || deliveryguyinput == "39,24" || deliveryguyinput == "52,03" || deliveryguyinput == "52,24") {
    deliveryguyanswer = "I'm not going to tie up my little cat!";
  } else if (deliveryguyinput == "06,10" || deliveryguyinput == "10,06") {
    deliveryguyanswer = "I spread some of the powder with a brush on the tablet screen. Well well, look at this...<br><i>Take card <b>44</b>. Remove cards <b>06</b> and <b>10</b>.";
  } else if (deliveryguyinput == "06,34" || deliveryguyinput == "34,06") {
    deliveryguyanswer = "I like to keep my phone nice and clean.";
  } else if (deliveryguyinput == "06,36" || deliveryguyinput == "06,52" || deliveryguyinput == "36,06" || deliveryguyinput == "52,06") {
    deliveryguyanswer = "The cat gives me a look that says 'Don't you even think about it'.";
  } else if (deliveryguyinput == "06,53" || deliveryguyinput == "53,06") {
    deliveryguyanswer = "I can't touch the lock in front of nurse Barbara. But even if I could, this would reveal the numbers in the code, not their order.";
  } else if (deliveryguyinput == "08,01" || deliveryguyinput == "08,05" || deliveryguyinput == "08,11" || deliveryguyinput == "08,15" || deliveryguyinput == "08,18" || deliveryguyinput == "08,25" || deliveryguyinput == "08,29" || deliveryguyinput == "08,30" || deliveryguyinput == "08,31" || deliveryguyinput == "08,33" || deliveryguyinput == "08,35" || deliveryguyinput == "08,38" || deliveryguyinput == "08,42" || deliveryguyinput == "08,45" || deliveryguyinput == "08,47") {
    deliveryguyanswer = "It would be interesting to read people's minds and make them do stuff, but it's also a bit creepy. Anyway, my power works only on plants and animals.";
  } else if (deliveryguyinput == "08,27" || deliveryguyinput == "27,08") {
    deliveryguyanswer = "The plants in this potpourri have been dead for a long time, so my power doesn't work on it at all.";
  } else if (deliveryguyinput == "08,36" || deliveryguyinput == "36,08") {
    deliveryguyanswer = "Come on cat, show me what you're made of.<br><i>As I use the power on the cat, he becomes very collaborative.<br>Take card <b>52</b>. Remove card <b>36</b>.</i>";
  } else if (deliveryguyinput == "08,52" || deliveryguyinput == "52,08") {
    deliveryguyanswer = "I'm already using my power over the cat.";
  } else if (deliveryguyinput == "08,56" || deliveryguyinput == "56,08") {
    deliveryguyanswer = "What more can I ask of this tree than what it's already done for me?";
  } else if (deliveryguyinput == "09,01") {
    deliveryguyanswer = "I can't get into the car. It's locked, of course.";
  } else if (deliveryguyinput == "09,34" || deliveryguyinput == "34,09") {
    deliveryguyanswer = "If I could somehow put my phone into the car, we could follow it with the tracking app. But the car is locked, of course.";
  } else if (deliveryguyinput == "09,40" || deliveryguyinput == "40,09") {
    deliveryguyanswer = "The tracking app on the phone will show us exactly where will the car go.<br><i>I tape the phone to the car, after calling Ron to come with his van to pick me up. I just have enough time to hide behind another car parked nearby when I see Dr Turner leaving the building. Fortunately, Ron arrives shortly after. Rose joins us, and the two of us jump into Ron's van. The chase for Dr Turner begins!<br>Take envelope <b>SPO06</b>. Remove cards <b>09</b>, <b>40</b> and <b>LOC10</b>.</i>";
  } else if (deliveryguyinput == "10,14" || deliveryguyinput == "10,44" || deliveryguyinput == "14,10" || deliveryguyinput == "14,44") {
    deliveryguyanswer = "That could work if I actually opened the tablet. I can't connect it to the printer while it's locked.";
  } else if (deliveryguyinput == "10,1654852" || deliveryguyinput == "10,16482" || deliveryguyinput == "10,1,6,4,8,2" || deliveryguyinput == "10,1,6,5,4,8,5,2" || deliveryguyinput == "10,2,5,8,4,5,6,1" || deliveryguyinput == "10,2584561" || deliveryguyinput == "10,28461" || deliveryguyinput == "10,2,8,4,6,1" || deliveryguyinput == "44,1654852" || deliveryguyinput == "44,16482" || deliveryguyinput == "44,1,6,4,8,2" || deliveryguyinput == "44,2584561" || deliveryguyinput == "44,28461" || deliveryguyinput == "44,2,8,4,6,1" || deliveryguyinput == "44,1,6,5,4,8,5,2" || deliveryguyinput == "44,2,5,8,4,5,6,1") {
    deliveryguyanswer = "As I repeat the pattern the tablet beeps and unlocks. I am pretty good at this!<br><i>Take card <b>17</b>. Remove card <b>44</b>.</i>";
  } else if (deliveryguyinput == "12,24" || deliveryguyinput == "24,12") {
    deliveryguyanswer = "I don't really see why would I throw the rope out of the window.";
  } else if (deliveryguyinput == "12,27" || deliveryguyinput == "27,12") {
    deliveryguyanswer = "The potpourri does smell really intense, but if I've been carrying it for all this time, I'm not going to throw it out of the window now.";
  } else if (deliveryguyinput == "12,34" || deliveryguyinput == "34,12") {
    deliveryguyanswer = "That's not much of a view to take a photo of it.";
  } else if (deliveryguyinput == "12,50" && escape == 1 || deliveryguyinput == "50,12" && escape == 1) {
    deliveryguyanswer = "Should I really break the window with the IV stand top? I don't see why.";
  } else if (deliveryguyinput == "12,50" && escape == 2 || deliveryguyinput == "50,12" && escape == 2) {
    deliveryguyanswer = "I could hook the IV stand top on the window, but I don't know what to do from there.";
  } else if (deliveryguyinput == "12,55" && escape == 1 || deliveryguyinput == "55,12" && escape == 1) {
    deliveryguyanswer = "I just got to the room. Why would I escape now?";
  } else if (deliveryguyinput == "12,55" && escape == 2 || deliveryguyinput == "55,12" && escape == 2) {
    deliveryguyanswer = "This may not be the safest thing to do, but I don't have a choice. Here we go!<br><i>I hook my improvised anchor on the window sill and use the rope to climb down the window. Jenna unhooks the anchor and throws it down just before Dr Turner enters the room. That was close!<br>Take card <b>LOC10</b>. Remove cards <b>12</b>, <b>35</b>, <b>55</b> and <b>LOC09</b> (but keep the other cards from the location on the table).</i>";
  } else if (deliveryguyinput == "14,17" || deliveryguyinput == "17,14") {
    deliveryguyanswer = "The file is called 'PEI_both_sides'. Let's try to print it, on both sides obviously.<br>Take envelope <b>SPO05</b>. Remove cards <b>14</b> and <b>17</b>.</i>";
  } else if (deliveryguyinput == "14,34" || deliveryguyinput == "34,14") {
    deliveryguyanswer = "There is nothing on my phone that I need to print, really.";
  } else if (deliveryguyinput == "16,27" || deliveryguyinput == "27,16") {
    deliveryguyanswer = "Why would I drug the potpourri? The smell itself is already poisonous enough.";
  } else if (deliveryguyinput == "16,36" || deliveryguyinput == "16,39" || deliveryguyinput == "16,52" || deliveryguyinput == "36,16" || deliveryguyinput == "39,16" || deliveryguyinput == "52,16" || deliveryguyinput == "52,46") {
    deliveryguyanswer = "I don't want to drug poor little cat!";
  } else if (deliveryguyinput == "22,36" || deliveryguyinput == "36,22") {
    deliveryguyanswer = "I try to make the cat smell the glove, but he just turns his head away from it.";
  } else if (deliveryguyinput == "22,52" || deliveryguyinput == "52,22") {
    deliveryguyanswer = "Let's see if what they say about cats having a super sensitive smell is true.<br><i>The cat smells the glove and confirms to me that he could now recognize the smell of the glove's owner anywhere. <br>Take card <b>39</b>. Remove cards <b>22</b> and <b>52</b>.</i>";
  } else if (deliveryguyinput == "24,50" || deliveryguyinput == "50,24") {
    deliveryguyanswer = "You can learn how to make all kinds of knots on the internet.<br><i>Take card <b>55</b>. Remove cards <b>24</b> and <b>50</b>.</i>";
  } else if (deliveryguyinput == "26,01" || deliveryguyinput == "26,05" || deliveryguyinput == "26,07" || deliveryguyinput == "26,11" || deliveryguyinput == "26,13" || deliveryguyinput == "26,15" || deliveryguyinput == "26,23" || deliveryguyinput == "26,25" || deliveryguyinput == "26,29" || deliveryguyinput == "26,30" || deliveryguyinput == "26,33" || deliveryguyinput == "26,35" || deliveryguyinput == "26,42" || deliveryguyinput == "26,45" || deliveryguyinput == "26,48") {
    deliveryguyanswer = "I have to get back to my Ziggy appearance to be able to change it into someone else's.";
  } else if (deliveryguyinput == "26,20") {
    deliveryguyanswer = "I already have his appearance.";
  } else if (deliveryguyinput == "27,36" || deliveryguyinput == "27,39" || deliveryguyinput == "27,52" || deliveryguyinput == "36,27" || deliveryguyinput == "36,27" || deliveryguyinput == "39,27") {
    deliveryguyanswer = "I put the cat into the potpourri, but he can't stand the smell of it.";
  } else if (deliveryguyinput == "34,36" || deliveryguyinput == "34,39" || deliveryguyinput == "34,52" || deliveryguyinput == "36,34" || deliveryguyinput == "39,34" || deliveryguyinput == "52,34") {
    deliveryguyanswer = "A photo of the cat isn't very useful, but he's just so adorable!";
  } else if (deliveryguyinput == "36,54" || deliveryguyinput == "54,36") {
    deliveryguyanswer = "I try to make the cat search for Dr Turner's car, but he doesn't budge.";
  } else if (deliveryguyinput == "39,54" || deliveryguyinput == "54,39") {
    deliveryguyanswer = "Come on cat, you can do it!<br><i>The cat passes through the parking lot and after a few minutes of hesitation, he stops next to a car and meows decisively.<br>Take card <b>09</b>. Remove cards <b>39</b> and <b>54</b>.</i>";
  } else if (deliveryguyinput == "53,5317" || deliveryguyinput == "53,5,3,1,7" || deliveryguyinput == "53,6538" || deliveryguyinput == "53,6,5,3,8" || deliveryguyinput == "53,LIES" || deliveryguyinput == "53,L,I,E,S") {
    deliveryguyanswer = "Even if I know the code, I can't just go right to the lock and enter it. Nurse Barbara is sitting right there.";
  } else if (deliveryguyinput == "52,54" || deliveryguyinput == "54,52") {
    deliveryguyanswer = "If my obedient cat could smell the doctor, I'm sure he could find his car.";
  } else if (deliveryguyinput == "M20") {
    deliveryguyanswer = "The receptionist told me that the man was heading to the metro station. So that's exactly where I'll go.<br><i>Take card <b>LOC02</b>. Remove cards <b>38</b> and <b>LOC01</b> (but keep the other cards from the location on the table).</i>";
  } else if (deliveryguyinput == "M03" || deliveryguyinput == "A29") {
    deliveryguyanswer = "So this is where the newspaper lead me. But what now?<br><i>Take card <b>LOC03</b>. Remove cards <b>46</b>, <b>SPO01</b> and <b>LOC02</b> (but keep the other cards from the location on the table).</i>";
  } else if (deliveryguyinput == "A57") {
    deliveryguyanswer = "This is the shop that the man went to. Where to from here?<br><i>Take card <b>LOC04</b>. Remove cards <b>47</b> and <b>LOC03</b> (but keep the other cards from the location on the table).</i>";
  } else if (deliveryguyinput == "G54") {
    deliveryguyanswer = "I should take the drug to Dr Rose.<br><i>As I arrive to the hospital, I see Dr Rose in the hallway. We move to the side by the coffee machine, so that we can speak in private. I pass her the drug that is supposedly capable of removing our powers. She promises she will send it for analysis immidiately and that she will try to make an antidote. This will take a while, so I should continue with my investigation in the meantime.<br>Take card <b>LOC06</b>. Remove cards <b>16</b> and <b>57</b>.</i>";
  } else if (deliveryguyinput == "C29") {
    deliveryguyanswer = "I didn't think that the mayor could be invloved, but if that's what it takes, I'm going to bring the mayor himself down!<br><i>Take card <b>LOC07</b>.</i>";
  } else if (deliveryguyinput == "H50") {
    deliveryguyanswer = "I arrive to the 'Starchester Weather Radar' but I don't find anything of interest. But wasn't the magazine address 'Under the Radar'?</i>";
  } else if (deliveryguyinput == "H51") {
    deliveryguyanswer = "Finally! This magazine really is under the radar, it wasn't easy to find its whereabouts.<br><i>Take card <b>LOC08</b>. Remove card <b>07</b>.</i>";
  } else if (deliveryguyinput == "C24" || deliveryguyinput == "C30") {
    deliveryguyanswer = "<i>We arrive to the spot the tracking app lead us to, and park the car across the street on a safe distance, so that nobody would spot us. We're here just in time to see Dr Turner going to the entrance of the building. An armed soldier guarding the doors greets him there and passes him a potion of some kind. Dr Turner drinks it, and a few moments later the soldier lets him in. Dr Rose turns to me and says:</i><br>This thing what he's drinking must be the drug that professor Martin gave you. My analysis of the drug shows that it's function is indeed to make our powers dissapear, so they must be giving it to people that enter as a precaution. Luckily, I've created an antidote.<br><i>Dr Rose gives me a pill and I swallow it, hopefully gaining immunity to this drug. <br>But then Ron, looking at the entrance with his binoculars, whispers in panic:</i><br>Guys, do you see the symbol on the doors? Rose, you know what it is. It's the symbol of Laki civilisation, the same parasite society that attacked and destroyed Nahukat. My worst nightmares have come true: the Lakis are here.<br><i>I manage to articulate a question, shaking with fear:</i><br>But how are Lakis connected with everything? I thought that the PEI is behind all of this.<br><i>Ron puts the binoculars down and says:</i><br>Now I see what does PEI really stand for: 'Planet Earth Invasion'. They are doing it all over again!<br><i>Take card <b>LOC11</b>. Return all of the tracking app cards into the <b>SPO06</b> envelope.</i>";
  } else if (deliveryguyinput == "DR TURNER" || deliveryguyinput == "DRTURNER" || deliveryguyinput == "DR. TURNER" || deliveryguyinput == "DR.TURNER" || deliveryguyinput == "TURNER") {
    deliveryguyanswer = "Dr Turner is in charge of the restricted ward! It took some time to figure out how to read this document, but it was worth it.<br><i>Take card <b>48</b>. Remove cards <b>25</b>, <b>LOC08</b> and <b>SPO05</b>.</i>";
  } else if (deliveryguyinput == "05,02" || deliveryguyinput == "02,05") {
    deliveryguyanswer = "I didn't order this. You must be mistaken.";
  } else if (deliveryguyinput == "11,02" || deliveryguyinput == "02,11") {
    deliveryguyanswer = "I definitely didn't order this. Sorry!";
  } else if (deliveryguyinput == "25,02" || deliveryguyinput == "02,25") {
    deliveryguyanswer = "You've already delivered the burger I've ordered.";
  } else if (deliveryguyinput == "42,20" || deliveryguyinput == "20,42") {
    deliveryguyanswer = "Frankly, I'm very dissapointed with your service. I've been waiting forever to this lunch.";
  } else if (deliveryguyinput == "42,02" || deliveryguyinput == "02,42") {
    deliveryguyanswer = "I ordered a salad, not a burger. You're late AND you got the order wrong. Actually...never mind, I'll take it, I'm hungry.<br><i>Nurse Barbara takes the extra mayo hamburger and starts eating as if she's been starving for days. Just as I predected, the mayo spills all over her jacket. She doesn't even notice it until she finishes the burger, but gets quickly annoyed as soon as she realises what happened. She takes the jacket off, cleanes her hands and gets back to work.<br>Take card <b>49</b>. Remove cards <b>02</b> and <b>20</b>. Return to your Ziggy appearence and use the original Game Book input field.</i>";
  } else if (deliveryguyinput == "45,02" || deliveryguyinput == "02,45") {
    deliveryguyanswer = "Who let you pass? I didn't order a burger, anyway!";
	} else {
	  deliveryguyanswer = deliveryguyrandom[Math.floor(Math.random()*deliveryguyrandom.length)];
  }
    document.getElementById("deliveryguyAnswer").innerHTML = deliveryguyanswer;
}

function unknownMan() {
	var unknownmanlowercase = document.getElementById("unknownMan").value;
  var unknownmaninput = unknownmanlowercase.toUpperCase();
  var unknownmanrandom = [
    "That's probably not the best thing to do while wearing the unknown man costume.",
    "I don't think that this will help.",
    "Doing this while being the unknown man might not be the best idea.",
    "Shouldn't I be using this unknown man disguise for something else?",
    "There has to be a better way to use my unknown man mask than this one."
  ];
  var unknownmananswer;
  if (unknownmaninput == "01") {
  	unknownmananswer = "I will do everything it takes to find my mother.";
  } else if (unknownmaninput == "02") {
  	unknownmananswer = "A hamburger with extra mayonnaise that Alison gave me.";
  } else if (unknownmaninput == "03") {
  	unknownmananswer = "A duct tape roll that was obviously used to silence professor Martin.";
  } else if (unknownmaninput == "05") {
  	unknownmananswer = "A security guard in the mayor's office. He seems a bit tired.";
  } else if (unknownmaninput == "06") {
  	unknownmananswer = "White powder makeup the mime artist uses to put on his face.";
  } else if (unknownmaninput == "07") {
  	unknownmananswero = "The journalist my mother had a meeting with at the hotel.";
  } else if (unknownmaninput == "08") {
  	unknownmananswer = "My ability to connect to animals and plants. It's even stronger now than it was before.<br><i>To use this ability, enter ability card number <b>08</b> followed by the card number of the plant or animal you want to have an effect on in the input field, separated by a comma.</i>";
  } else if (unknownmaninput == "09") {
  	unknownmananswer = "Dr Turner's car in front of the hospital. It is new and looks very expensive.";
  } else if (unknownmaninput == "10") {
  	unknownmananswer = "The touchscreen tablet that the mayor gave me. It requires a swipe pattern to unlock.<br><i>You can now unlock the touchscreen tablet by entering the card number <b>10</b> followed by the sequence of numbers in the order of the swipe pattern. The card number and the numbers sequence should be separated by a comma, without spaces.</i>";
  } else if (unknownmaninput == "11" || unknownmaninput == "57") {
  	unknownmananswer = "Dr Rose Tobin was the physician of the original Nahukat crew that landed on Earth. She works at the hospital and is a very respected member of the community. But even though she likes it here on Earth, she misses our people immensely.";
  } else if (unknownmaninput == "12") {
  	unknownmananswer = "The hospital room is on the first floor, above the hospital's parking lot.";
  } else if (unknownmaninput == "13") {
  	unknownmananswer = "The man that I'm currently pretending to be.";
  } else if (unknownmaninput == "14") {
  	unknownmananswer = "A printer in the 'Under the Radar' office.";
  } else if (unknownmaninput == "15") {
  	unknownmananswer = "A patient lying in a coma. Her medical chart reads: <br><i>Patient: Jenna Kane <br>Diagnosis: Heavy metal poisoning with kidney, liver and heart damage, severe brain dysfunction <br>Illnes cause: Unknown <br>Current state: Patient entered a state of extreme unresponsiveness 22 hours after hospitalisation</i>";
  } else if (unknownmaninput == "16") {
  	unknownmananswer = "I'm sure that Dr Rose could know more about this drug.";
  } else if (unknownmaninput == "17") {
  	unknownmananswer = "The tablet is unlocked and has a file named 'PEI_both_sides'. Unfortunately, the file is either encrypted or corrupted. There are a bunch of unreadable signs in the file that don't make any sense.";
  } else if (unknownmaninput == "18") {
  	unknownmananswer = "Professor Martin, well and alive. He better start to explain some things.";
  } else if (unknownmaninput == "20") {
  	unknownmananswer = "The delivery guy that delivered the hamburger to the 'Under the Radar' office and left when I got there.";
  } else if (unknownmaninput == "22") {
  	unknownmananswer = "A used glove in the trash bin.";
  } else if (unknownmaninput == "23") {
  	unknownmananswer = "There is still no sign from my mother. But I feel that we're getting closer to the truth.";
  } else if (unknownmaninput == "24") {
  	unknownmananswer = "The rope that was used to tie up professor Martin.";
  } else if (unknownmaninput == "25") {
  	unknownmananswer = "Alison Clarke is the journalist that had a meeting with my mother.";
  } else if (unknownmaninput == "26") {
  	unknownmananswer = "My amazing new ability to make me look like anybody in this world. Absolutely crazy.<br><i>To use this ability, enter ability card number <b>26</b> followed by the card number of the person you want to take appearance of in the input field, separated by a comma. You can choose any person whose card you have on the table.</i>";
  } else if (unknownmaninput == "27") {
  	unknownmananswer = "A potpourri bowl with a smell so intense that it could bring the dead back to life.";
  } else if (unknownmaninput == "28") {
    unknownmananswer = "<i>I go directly to the door, when the soldier stops me.</i><br>It's you, Agent 27. I'm sorry to make you do this, but you know the protocol.<br><i>The soldier gives me a small bottle with a drug, just like the one professor Martin gave me. I drink it, as I saw Dr Turner do it. I'm sweating with stress...will Dr Rose's antidote work? A few seconds pass and I still look like the ugly, leather loving, kidnapping criminal named Agent 27, as it seems.</i><br>All is good, go ahead.<br><i>The soldier opens the entrance doors, and...I'm in! Mother, here I come!</i><br><br><b>Chapter Two of the game is now finished. To continue Ziggy's adventure and finally save Lena, start Chapter Three. Thank you for playing!</b>";
  } else if (unknownmaninput == "29") {
  	unknownmananswer = "The soldier guarding the entrence is carrying a huge rifle.";
  } else if (unknownmaninput == "30") {
  	unknownmananswer = "Ron was the technology specialist in my parents' crew. He now does some freelance programing to bring food to the table, but he spends most of his time still working on fixing the communication system with Nahukat mothership. Without success, unfortunately. He can be very useful in finding information on people, considering his skills in the cyberspace.<br><i>You don't have to visit Ron to speak to him, you can always reach him over the phone. To communicate with Ron, you should put his card number <b>30</b> followed by the card number of what you want to speak about in the input field, separated by a comma.</i>";
  } else if (unknownmaninput == "33" || unknownmaninput == "45") {
  	unknownmananswer = "Starchester's mayor Bundy has been running the city for 10 years already. He's popular enough, keeping the people of Starchester entertained with festivals and expensive city projects. However, a part of the city population accuse him of favoring certain companies and providing them city work, with saving a part of the profit for himself. They don't have any solid evidence on this kind of activity, of course.";
  } else if (unknownmaninput == "34") {
  	unknownmananswer = "The phone Mary gave me is equipped with a tracking software Ron installed. That way Ron knows where I am at all time.";
  } else if (unknownmaninput == "35") {
  	unknownmananswer = "Jenna Kane is out of coma, awake and capable of speaking.";
  } else if (unknownmaninput == "36") {
  	unknownmananswer = "A stray cat lying on the street, watching the mime artist's show.";
  } else if (unknownmaninput == "39") {
  	unknownmananswer = "The cat took a good smell of the glove. He can definitely recognize the smell of the glove's owner now.";
  } else if (unknownmaninput == "40") {
  	unknownmananswer = "With the duct tape on the phone, it will be easy to stick it somewhere.";
  } else if (unknownmaninput == "41") {
  	unknownmananswer = "A little to do list I wrote. It's hard to remember everything when the day is so exciting.";
  } else if (unknownmaninput == "42") {
  	unknownmananswer = "Nurse Barbara is in the reception booth in the hospital. Nothing can pass her eye unnoticed.";
  } else if (unknownmaninput == "44") {
  	unknownmananswer = "A clearly visible smudge appears on the touchscreen.<br><i>You can now unlock the touchscreen tablet by entering the card number <b>44</b> followed by the sequence of numbers in the order of the swipe pattern. The card number and the numbers sequence should be separated by a comma, without spaces.</i>";
  } else if (unknownmaninput == "48") {
  	unknownmananswer = "Dr Turner is very respected in the hospital. But probably his colleagues don't know everything about his work.";
  } else if (unknownmaninput == "49") {
  	unknownmananswer = "I can clearly see what did nurse Barbara write on her arm.";
  } else if (unknownmaninput == "50") {
  	unknownmananswer = "The IV stand has a removable top.";
  } else if (unknownmaninput == "52") {
  	unknownmananswer = "The cat now does whatever I want him to.";
  } else if (unknownmaninput == "53") {
  	unknownmananswer = "The door to this ward is protected by an alphanumeric lock. But even if I manage to find the code, nurse Barbara wouldn't let me near it.";
  } else if (unknownmaninput == "54") {
  	unknownmananswer = "There is a lot of cars in the parking lot. I wonder which one is Dr Turner's.";
  } else if (unknownmaninput == "55") {
  	unknownmananswer = "The IV stand top with a piece of rope tied to it.";
  } else if (unknownmaninput == "LOC05") {
    unknownmananswer = "I'm shocked to see professor Martin <b>(18)</b> tied up to a chair. I untie him immidiately, of course, and end up with a piece od rope <b>(24)</b> he was tied with. There is also some duct tape <b>(03)</b> they used to keep him quiet lying on the floor.";
  } else if (unknownmaninput == "LOC06") {
    unknownmananswer = "I'm not a big fan of hospitals, but the Starchester Central Hospital is a very modern and well equipped facility. Dr Rose <b>(11)</b>, the ex member of my parents space mission crew, is in the hall checking her patients' charts. A nurse <b>(42)</b> in charge of the reception desk is sitting behind it. There is an alphanumeric lock <b>(53)</b> for a door right of the reception desk with no indication of what is behind it.";
  } else if (unknownmaninput == "LOC07") {
    unknownmananswer = "The mayor's office is peaceful, not a lot of work seems to be taking place here. There is a security guard <b>(05)</b> in the entrance. The doors to mayor's office are closed, and it's hard to know if the mayor <b>(33)</b> is inside or not.";
  } else if (unknownmaninput == "LOC08") {
    unknownmananswer = "The 'Under the Radar' office is busy, with phones ringing and people talking in the same time. I can see Alison Clarke <b>(25)</b> sitting at one of the desks. As I enter the office. I pass by a delivery guy <b>(20)</b> bringing a hamburger <b>(02)</b> to Alison. As soon as he leaves the food, the runs out of the office.<br><i>Remove card <b>07</b>.</i>";
  } else if (unknownmaninput == "LOC09") {
    unknownmananswer = "I finally enter the secret ward. I go to the first room and find a patient <b>(15)</b> lying in one of the beds. She is either sleeping or unconscious. There is some standard medical equipment in the room, like an IV stand <b>(50)</b>. I can also spot a used rubber glove <b>(22)</b> in the trash bin next to the door.";
  } else if (unknownmaninput == "LOC10") {
    unknownmananswer = "There are a lot of cars <b>(54)</b> parked in the parking lot.";
  } else if (unknownmaninput == "LOC11") {
    unknownmananswer = "There is no indication of PEI on the building. The only thing standing out of the ordinary are the unusual symbols on the entrance doors <b>(28)</b>. And a heavily armed soldier <b>(29)</b> in front of it, of course.";
  } else if (unknownmaninput == "SPO05") {
    unknownmananswer = "The printed document from the tablet that mayor Bundy gave me still doesn't make a lot of sense.<br><i>This document will give you the name of the doctor in charge of the restricted ward in the hospital. Once you know the name, write it it the input field and press enter.</i>";
  } else if (unknownmaninput == "SPO06") {
    unknownmananswer = "GPS tracking system shows the movements of Dr Turner's car.";
  } else if (unknownmaninput == "01,01") {
    unknownmananswer = "I feel like I've grown in these last few days. Now that I know the truth about my mother and I, so many things make more sense.";
  } else if (unknownmaninput == "01,02") {
    unknownmananswer = "There sure is a lot of mayonnaise in this burger.";
  } else if (unknownmaninput == "01,03") {
    unknownmananswer = "It's always useful to have a roll of duct tape with you.";
  } else if (unknownmaninput == "01,05") {
    unknownmananswer = "The security guard looks like his shift here was long and tiresome.";
  } else if (unknownmaninput == "01,50") {
    unknownmananswer = "Just a typical IV stand you can see in every hospital.";
  } else if (unknownmaninput == "01,06") {
    unknownmananswer = "The mime artist doesn't seem to mind if I borrow it. White makeup isn't really my style, but I'll take it. You never know what will become trendy next.";
  } else if (unknownmaninput == "01,07") {
    unknownmananswer = "I'm sure this journalist knows something about my mother. I have to find a way to reach her.";
  } else if (unknownmaninput == "01,08") {
    unknownmananswer = "I'm so used to having this little power now that it's getting hard to imagine life without it.";
  } else if (unknownmaninput == "01,09") {
    unknownmananswer = "What was it that Dr Turner said on the phone? Something about going to the PEI after his visit to the hospital? I'd like to see where this PEI base is, but I can't get into the car. It's locked.";
  } else if (unknownmaninput == "01,10") {
    unknownmananswer = "I sure would like to take a look inside mayor's tablet.";
  } else if (unknownmaninput == "01,11" || unknownmaninput == "01,57") {
    unknownmananswer = "Dr Rose is a very nice and calm woman. I wouldn't be surprised if she was the most popular doctor around here. During her earthly career she managed to get funding for three research studies already, where she could carefully implement some of advanced medical knowledge of Nahukat.";
  } else if (unknownmaninput == "01,12") {
    unknownmananswer = "The window is looking right at the hospital parking lot. Not much of a view, really.";
  } else if (unknownmaninput == "01,13") {
    unknownmananswer = "It feels weird to be in the skin of my nemesis.";
  } else if (unknownmaninput == "01,14") {
    unknownmananswer = "A standard inkjet office printer. Nothing unusual there.";
  } else if (unknownmaninput == "01,15") {
    unknownmananswer = "This poor woman is in a coma. If only I could wake her up somehow...";
  } else if (unknownmaninput == "01,16" || unknownmaninput == "16,01") {
    unknownmananswer = "I should give this to Dr Rose for analysis. If somebody can figure out what this is, it's her.";
  } else if (unknownmaninput == "01,17") {
    unknownmananswer = "The document on the tablet is very strange. And what's with this name, 'both sides'?";
  } else if (unknownmaninput == "01,18") {
    unknownmananswer = "Professor Martin was kidnapped? How did this happen?";
  } else if (unknownmaninput == "01,20") {
    unknownmananswer = "The delivery guy seems to be in a hurry. He leaves the takeout on the table and runs out of the office in a matter of seconds.";
  } else if (unknownmaninput == "01,22") {
    unknownmananswer = "It's not very hygienic to take other people's used gloves from the trash bin, but I have a feeling that it night be useful.";
  } else if (unknownmaninput == "01,23") {
    unknownmananswer = "Oh mother...what did you get into? I have to find you, and I have to do it fast!";
  } else if (unknownmaninput == "01,24") {
    unknownmananswer = "A piece of rope is something every young lady should have in her bag at all times, isn't it?";
  } else if (unknownmaninput == "01,25") {
    unknownmananswer = "Now that I've found you Alison, you better talk!";
  } else if (unknownmaninput == "01,26") {
    unknownmananswer = "OK, I have to admit that this ability is even cooler than the other one!";
  } else if (unknownmaninput == "01,27") {
    unknownmananswer = "This smells way too intense. Every time I open my backpack I almost suffocate. Why am I carrying it around again?";
  } else if (unknownmaninput == "01,28" || unknownmaninput == "28,01") {
    unknownmananswer = "I have to pass the soldier first to enter the PEI base.";
  } else if (unknownmaninput == "01,29") {
    unknownmananswer = "I can't pretend not to care that this guy is fully armed while I don't have anything to protect me. But I can't stop now!";
  } else if (unknownmaninput == "01,30") {
    unknownmananswer = "Ron is great. He's the funniest of the crew, and even though I've just met him, I feel like we know each other for ages. But his light hearted nature doesn't diminish how dangerous he can be if he wants to...Give this guy a computer and he can enter any system in just a few clicks.";
  } else if (unknownmaninput == "01,33" || unknownmaninput == "01,45") {
    unknownmananswer = "I don't know a lot about the mayor, except that he's been ruling the city for a long time now. And I heard that there are some corruption accusations against him. But it hasn't really caused a big fall of his popularity.";
  } else if (unknownmaninput == "01,34") {
    unknownmananswer = "The phone that Mary gave me has a tracking app installed by Ron. Knowing that he can see where I am makes me feel a lot safer.";
  } else if (unknownmaninput == "01,35") {
    unknownmananswer = "Wow, I've awaken a woman from a coma! I think that Dr Rose would be proud of me.";
  } else if (unknownmaninput == "01,36") {
    unknownmananswer = "I wish that I could have a cat too! But my dog Laika wouldn't like it a lot.";
  } else if (unknownmaninput == "01,39") {
    unknownmananswer = "I've heard that cats have a very developed sense of smell, even stronger than dogs.";
  } else if (unknownmaninput == "01,40") {
    unknownmananswer = "I hope that the tape won't leave sticky traces on my new phone.";
  } else if (unknownmaninput == "01,41") {
    unknownmananswer = "I have a habit of forgetting what I'm supposed to do. This way it shouldn't happen.";
  } else if (unknownmaninput == "01,42") {
    unknownmananswer = "This nurse isn't very helpful, is she?";
  } else if (unknownmaninput == "01,44") {
    unknownmananswer = "Alright, the pattern smudge is super clear.";
  } else if (unknownmaninput == "01,48") {
    unknownmananswer = "What could Dr Turner be working on in the hospital? I don't think it's anything great if there is all this mystery around it.";
  } else if (unknownmaninput == "01,49") {
    unknownmananswer = "Luckily Barbara's memory isn't her strong suit. Now I can easily see the code for the ward lock.";
  } else if (unknownmaninput == "01,50") {
    unknownmananswer = "Many objects I encounter seemed useless in the beginning, but they turned out to be very valuable.";
  } else if (unknownmaninput == "01,52") {
    unknownmananswer = "Sorry cat, but you will have to help me a little bit.";
  } else if (unknownmaninput == "01,53") {
    unknownmananswer = "I wonder what's hiding behind this lock...a zombie ward?";
  } else if (unknownmaninput == "01,54") {
    unknownmananswer = "So many cars...Which one could be Dr Turner's?";
  } else if (unknownmaninput == "01,55") {
    unknownmananswer = "What a nice anchor I've created!";
  } else if (unknownmaninput == "01,LOC05") {
    unknownmananswer = "Professor Martin! So this is where he disappeared to. But where is my mother?";
  } else if (unknownmaninput == "01,LOC06") {
    unknownmananswer = "The hospital is quiet enough. Only a few patients in the waiting room and a nurse on the reception desk. Dr Rose is here too.";
  } else if (unknownmaninput == "01,LOC07") {
    unknownmananswer = "It seems as there are not a lot of people in the mayor's office. The security guard is taking his job seriously, not leaving his position and looking around as if something was actually happening here.";
  } else if (unknownmaninput == "01,LOC08") {
    unknownmananswer = "'Under the Radar' office is vibrant with young employees chatting and music coming from the radio. I think I see Alison Clarke at one of the tables.";
  } else if (unknownmaninput == "01,LOC09") {
    unknownmananswer = "There is only one patient in the room, and she's unconscious.";
  } else if (unknownmaninput == "01,LOC10") {
    unknownmananswer = "The parking lot is huge and filled with cars.";
  } else if (unknownmaninput == "01,LOC11") {
    unknownmananswer = "I'm finally getting close to finding my mother. I have a feeling she is near.";
  } else if (unknownmaninput == "01,SPO05") {
    unknownmananswer = "There has to be a way to shed some light on the meaning of this document.";
  } else if (unknownmaninput == "01,SPO06") {
    unknownmananswer = "All we have to do is follow Dr Turner's car.";
  } else if (unknownmaninput == "11,01") {
    unknownmananswer = "Oh, it's you Ziggy. I see that you've perfected our power of disguise.";
  } else if (unknownmaninput == "11,02") {
    unknownmananswer = "Thanks, I already had my lunch.";
  } else if (unknownmaninput == "11,03") {
    unknownmananswer = "That's OK, we have a bunch of tape in our storage room.";
  } else if (unknownmaninput == "11,05") {
    unknownmananswer = "Oh yes, what a nice family. His wife was my patient a few years ago. Too bad he works for that sketchy mayor Bundy.";
  } else if (unknownmaninput == "11,06") {
    unknownmananswer = "I don't wear makeup. Especially not white face powder, that would just scare my patients.";
  } else if (unknownmaninput == "11,07") {
    unknownmananswer = "I've never heard of this journalist. But you know what, ask Ron about it. If anybody can dig up something on somebody, it's him.";
  } else if (unknownmaninput == "11,08") {
    unknownmananswer = "Yes, this is one of the funniest powers we have. I play chess with my philodendron all the time!";
  } else if (unknownmaninput == "11,09") {
    unknownmananswer = "We should follow this car!";
  } else if (unknownmaninput == "11,10") {
    unknownmananswer = "Let me take a try...No, that wasn't it.";
  } else if (unknownmaninput == "11,11") {
    unknownmananswer = "I've tried to move on, but the truth is that I'm still thinking about Nahukat people every day. Ron hasn't stopped working on the communication system, but we haven't progressed a lot, in all these years.";
  } else if (unknownmaninput == "11,12") {
    unknownmananswer = "The view is not the best. What can we do.";
  } else if (unknownmaninput == "11,13") {
    unknownmananswer = "You look pretty scary in this disguise.";
  } else if (unknownmaninput == "11,14") {
    unknownmananswer = "Why are we talking about a printer? Ziggy, we don't have time for this.";
  } else if (unknownmaninput == "11,15") {
    unknownmananswer = "I can't help you with that. There isn't really anything you can do to wake somebody up from a coma. If you find a way, sure let me know how you did it.";
  } else if (unknownmaninput == "11,17") {
    unknownmananswer = "Maybe Ron could take a look at this.";
  } else if (unknownmaninput == "11,20") {
    unknownmananswer = "Sometimes I order a veggie burger, but I can't say that I know this particular delivery guy.";
  } else if (unknownmaninput == "11,22") {
    unknownmananswer = "The medical staff here uses this type of gloves.";
  } else if (unknownmaninput == "11,23") {
    unknownmananswer = "You can only imagine how much I miss your mother. And to see you here now, it's unbelievable! We will find Lena, don't worry!";
  } else if (unknownmaninput == "11,24") {
    unknownmananswer = "A piece of rope? Seriously, how do you fit all this stuff in that small backpack?";
  } else if (unknownmaninput == "11,25") {
    unknownmananswer = "So Lena contacted Alison because of her article? It looks as if this story could be bigger than we thought.";
  } else if (unknownmaninput == "11,26") {
    unknownmananswer = "It's the best, isn't it? Look!<br><i>And just like that, my identical twin appeared in front of me. I almost screamed! She turned back to Dr Rose in a second.</i><br>Ha ha! You should have seen your face!";
  } else if (unknownmaninput == "11,27") {
    unknownmananswer = "I didn't think that it's possible, but there is such a thing as too much cinnamon.";
  } else if (unknownmaninput == "11,28") {
    unknownmananswer = "Ziggy, you try to get pass the soldier and I'll check around to see if there is an another entrance somewhere. Ron, you keep guard in the car.";
  } else if (unknownmaninput == "11,29") {
    unknownmananswer = "He is dangerous, but when you use your powers you're even more dangerous, Ziggy. Go get him! I will go to check around, there must be another entrance into this building. Ron, you stay here, keep guard and wait for us in the car.";
  } else if (unknownmaninput == "11,30") {
    unknownmananswer = "Ron and I are best friends. He is amazing with techology, but without the right equipment even he can't fix the communication system of our ship. One day, maybe.";
  } else if (unknownmaninput == "11,33" || unknownmaninput == "11,45") {
    unknownmananswer = "The mayor is corrupted, I'm sure of it. The fact that all of the big projects in the city go to the hands of contractors, that happen to be his cousins, can't be a coincidence. Nor is all the money that keeps stacking in his bank account.";
  } else if (unknownmaninput == "11,34") {
    unknownmananswer = "I'm glad you have this phone with you.";
  } else if (unknownmaninput == "11,35") {
    unknownmananswer = "You woke her up? That's really impressive.";
  } else if (unknownmaninput == "11,36" || unknownmaninput == "11,39" || unknownmaninput == "11,52") {
    unknownmananswer = "You have a cat now? I thought you had a dog.";
  } else if (unknownmaninput == "11,40") {
    unknownmananswer = "What are you doing with your phone? Take care of it, it has a tracking app so that we can know where you are.";
  } else if (unknownmaninput == "11,41") {
    unknownmananswer = "So did you manage to find Alison? You should ask Ron about her, he's quite skillful when it comes to finding information on somebody.";
  } else if (unknownmaninput == "11,42") {
    unknownmananswer = "That nurse is scary. I swear that she never leaves the desk. I don't know who is in charge of this restricted ward, but I've seen her entering in it. Her memory must be really poor because she has the code written on her arm and she always checks it before going in. You can't see it now because of the long sleeved jacket she's wearing, but it's there. And don't try to take her form to see her arm, our power duplicates only the parts of a person we see.";
  } else if (unknownmaninput == "11,44") {
    unknownmananswer = "Well Ziggy, aren't you a clever girl.";
  } else if (unknownmaninput == "11,48") {
    unknownmananswer = "So Dr Turner is in charge of the ward? He was acting a little suspicious lately, now that I think about it. Always looking behind his shoulder, if you know what I mean.";
  } else if (unknownmaninput == "11,49") {
    unknownmananswer = "You managed to get a look at her arm? Way to go Ziggy!";
  } else if (unknownmaninput == "11,50") {
    unknownmananswer = "Sure, take hospital equipment. You need it more than our patients, don't you?";
  } else if (unknownmaninput == "11,53") {
    unknownmananswer = "I don't know the code. They've changed it a few months ago and the whole ward became a restricted zone. To tell you the truth, I don't even know which doctor is in charge of it. I've only seen nurse Barbara entering it. I think she has the code written on her arm because she always checks it before entering the ward. I didn't get a good look at it because she's always wearing this long sleeved jacket. It's seems obvious to take her form and look at her arm, but our power doesn't work like that. We only take the appearance of those details we can see on a person.";
  } else if (unknownmaninput == "11,54") {
    unknownmananswer = "I can't tell you which car is Dr Turner's. I think he changed cars recently.";
  } else if (unknownmaninput == "11,55") {
    unknownmananswer = "Please return the IV stand top as soon as you're finished with this, whatever it is.";
  } else if (unknownmaninput == "11,LOC06") {
    unknownmananswer = "It's a nice place to work. But you know that I will never forget my old life and our people.";
  } else if (unknownmaninput == "11,LOC07") {
    unknownmananswer = "Did you notice how the office is renovated? Guess who paid for the new rare marble floor. Us, the taxpayers.";
  } else if (unknownmaninput == "11,LOC08") {
    unknownmananswer = "I've never read this magazine. Did you find out how is it connected with your mother?";
  } else if (unknownmaninput == "11,LOC09") {
    unknownmananswer = "You're telling me that there are people in coma lying in this ward? What are they suffering from?";
  } else if (unknownmaninput == "11,LOC10") {
    unknownmananswer = "I couldn't tell you which is Dr Turner's car.";
  } else if (unknownmaninput == "11,LOC11") {
    unknownmananswer = "OK, we can't give up now. I will see if there is another way to get in here. Ron, you stay in the car and be ready for our escape. Ziggy, you try to get inside from here. And take care, everybody.";
  } else if (unknownmaninput == "11,SPO05") {
    unknownmananswer = "This message is encrypted somehow. If we could only find the code...";
  } else if (unknownmaninput == "30,01") {
    unknownmananswer = "Ziggy, it's so great to talk to you. I only wish the circumstances were different.";
  } else if (unknownmaninput == "30,02") {
    unknownmananswer = "I don't know how could I eat the burger over the phone.";
  } else if (unknownmaninput == "30,03") {
    unknownmananswer = "I have more than enough duct tape at home.";
  } else if (unknownmaninput == "30,05") {
    unknownmananswer = "I did a quick check up on him. Married, two kids, working in mayor's office for 6 months. Doesn't seem to have any connection to mayor's business, he's really only a security guard.";
  } else if (unknownmaninput == "30,07") {
    unknownmananswer = "Well, it wasn't so easy to track her down because she signs her articles with an alias. But I did find her. She works for an online magazine called 'Under the Radar'. I didn't find their address though. There is a mistake on their contact page, they wrote 'Under the Radar' in their address section. Or maybe that mistake was intentional?";
  } else if (unknownmaninput == "30,08" || unknownmaninput == "30,26") {
    unknownmananswer = "I see you're enjoying your new powers. Just be careful, nobody around you should know that you have them.";
  } else if (unknownmaninput == "30,09") {
    unknownmananswer = "I checked the number plate, the car is registered under Dr Anthony Turner.";
  } else if (unknownmaninput == "30,10") {
    unknownmananswer = "I'm sorry, but there are just too many possible combinations to crack this code by force.";
  } else if (unknownmaninput == "30,11" || unknownmaninput == "30,57") {
    unknownmananswer = "Rose is a fantastic physician and an amazing friend. She's at the hospital if you need her.";
  } else if (unknownmaninput == "30,12") {
    unknownmananswer = "Ziggy, try to escape through the window! Is it too high?";
  } else if (unknownmaninput == "30,13") {
    unknownmananswer = "I don't know who the guy is, but I'm sure he knows what happened to Lena.";
  } else if (unknownmaninput == "30,14") {
    unknownmananswer = "This model is famous for it's precise both sides printing.";
  } else if (unknownmaninput == "30,15" || unknownmaninput == "30,35") {
    unknownmananswer = "She lives in Marsley, a village near here. And she's not the only one who's sick. There were many locals from the villages around that had serious health issues during the last few months.";
  } else if (unknownmaninput == "30,16") {
    unknownmananswer = "This was given to Lena? You should take it to Dr Rose for analysis.";
  } else if (unknownmaninput == "30,17") {
    unknownmananswer = "The file you sent me isn't encrypted. And I couldn't find a font like this, not even in the dark web. And what about the name 'PEI_both_sides'? PEI is the oil company that profited the most of mayor Bundy's tax reductions. But what does 'both sides' mean?";
  } else if (unknownmaninput == "30,20") {
    unknownmananswer = "I checked the delivery guy. Didn't find anything interesting on him.";
  } else if (unknownmaninput == "30,22") {
    unknownmananswer = "Somebody of the hospital staff must have used this glove.";
  } else if (unknownmaninput == "30,23") {
    unknownmananswer = "Lena is asking for help. That's why she sent you to us. We have to find her...and soon.";
  } else if (unknownmaninput == "30,06" || unknownmaninput == "30,24" || unknownmaninput == "30,50" || unknownmaninput == "30,55") {
    unknownmananswer = "You remind me so much of your father. He always used to make use of a bunch of weird stuff he picked up from here and there.";
  } else if (unknownmaninput == "30,25") {
    unknownmananswer = "You found Alison? That's amazing!";
  } else if (unknownmaninput == "30,27") {
    unknownmananswer = "I can't smell it over the phone, but I believe you when you say it's too much.";
  } else if (unknownmaninput == "30,28") {
    unknownmananswer = "Ziggy, I'm sure you can think of something to get inside. Your mother is waiting for you!";
  } else if (unknownmaninput == "30,29") {
    unknownmananswer = "Ziggy, don't let yourself get intimidated by this guy. You have strenght that he doesn't.";
  } else if (unknownmaninput == "30,30") {
    unknownmananswer = "I've been working on fixing our communication system since we came to Earth. But I haven't made enough progress still. The technology is so limited on this planet, it's frustrating.";
  } else if (unknownmaninput == "30,33" || unknownmaninput == "30,45") {
    unknownmananswer = "Mayor Bundy has been accused of many things. Some of them involve spending tax money on expensive city projects that don't help in solving real problems, like waste managment. Other imply that he's been putting his people on high, well paid and powerful positions. But one rumor could perhaps interest us the most. He significantly lowered the taxes for new businesses as a part of his economy growth policy two years ago. And there was one company who profited from it the most, quickly gaining wealth and monopoly in the region. It was PEI, 'Petroleum Extraction Industries'. He should be in his office now, it's working hours.";
  } else if (unknownmaninput == "30,34") {
    unknownmananswer = "You know that I've installed a tracking system so that I can always see where you are. So keep it with you and keep it turned on.";
  } else if (unknownmaninput == "30,36" || unknownmaninput == "30,39" || unknownmaninput == "30,52") {
    unknownmananswer = "I understand why you took this cat with you. All of us Nahukat people love animals.";
  } else if (unknownmaninput == "30,40") {
    unknownmananswer = "Take care of that phone!";
  } else if (unknownmaninput == "30,41") {
    unknownmananswer = "It's a good thing to be writing down what needs to be done. If I can help you with anything, just let me know.";
  } else if (unknownmaninput == "30,42") {
    unknownmananswer = "I checked on her. She's been working in the hospital for 7 years and has good reviews from the patients. Except this one time she was caught in shoplifting when she was 17 years old, there really isn't anything suspicious about her.";
  } else if (unknownmaninput == "30,44") {
    unknownmananswer = "That's some Poirot work there Ziggy. Nicely done.";
  } else if (unknownmaninput == "30,48") {
    unknownmananswer = "Dr Turner a very well respected surgeon. He's been working for the Central Hospital for 4 years, when he moved to Starchester. According to his financial records, he was on a verge of bancrupcy a year ago. And I have information that it was due to large gambling debts he collected over the years. But very soon all of his debts were miraculously covered for.";
  } else if (unknownmaninput == "30,49") {
    unknownmananswer = "I was sure you will be able to get the code. You're as resourceful as your parents.";
  } else if (unknownmaninput == "30,53") {
    unknownmananswer = "I don't know why this area of hospital would be restricted. Rose could know something about it.";
  } else if (unknownmaninput == "30,54") {
    unknownmananswer = "I could find the licence plate number of Dr Turner's car, but it will take some time. And he could return to the car any minute. If there's a quicker way to find it, go for it!";
  } else if (unknownmaninput == "30,LOC06") {
    unknownmananswer = "Rose works at the hospital. She told me about this ward that's been a restricted area for 3 months. She still didn't find out what's been going on there.";
  } else if (unknownmaninput == "30,LOC07") {
    unknownmananswer = "Ah, our famous mayor Bundy. If you want to know more about lovely Mr Bundy, just ask.";
  } else if (unknownmaninput == "30,LOC08") {
    unknownmananswer = "Aha, so it really was under the radar!";
  } else if (unknownmaninput == "30,LOC09") {
    unknownmananswer = "So this is where they've been hiding all these sick people!";
  } else if (unknownmaninput == "30,LOC10") {
    unknownmananswer = "Dr Turner's car must be parked there somewhere.";
  } else if (unknownmaninput == "30,LOC11") {
    unknownmananswer = "Lena must be here!";
  } else if (unknownmaninput == "30,SPO05") {
    unknownmananswer = "I wonder how could we shed a light on the meaning of this document.";
  } else if (unknownmaninput == "02,06" || unknownmaninput == "06,02") {
    unknownmananswer = "I don't see a good reason to put makeup into the food.";
  } else if (unknownmaninput == "02,10" || unknownmaninput == "10,02") {
    unknownmananswer = "Dipping the tablet in mayonnaise will not unlock it.";
  } else if (unknownmaninput == "02,14" || unknownmaninput == "14,02") {
    unknownmananswer = "The printer isn't hungry. There's plenty of paper in it.";
  } else if (unknownmaninput == "02,16" || unknownmaninput == "16,02") {
    unknownmananswer = "Is it really the best idea to drug this food with something that I don't even really know what it is? I don't think so.";
  } else if (unknownmaninput == "02,27" || unknownmaninput == "27,02") {
    unknownmananswer = "I don't want to spoil a perfectly good burger.";
  } else if (unknownmaninput == "02,34" || unknownmaninput == "34,02") {
    unknownmananswer = "The food isn't photogenic enough to make me want to take a photo of it.";
  } else if (unknownmaninput == "02,36" || unknownmaninput == "02,52" || unknownmaninput == "36,02" || unknownmaninput == "52,02") {
    unknownmananswer = "The cat doesn't like mayonnaise.";
  } else if (unknownmaninput == "03,09" || unknownmaninput == "09,03") {
    unknownmananswer = "It could be a good idea to tape something to the car, but what?";
  } else if (unknownmaninput == "03,10" || unknownmaninput == "10,03") {
    unknownmananswer = "I don't see what good would it do.";
  } else if (unknownmaninput == "03,12" || unknownmaninput == "12,03") {
    unknownmananswer = "I don't see how taping the window would help me.";
  } else if (unknownmaninput == "03,14" || unknownmaninput == "14,03") {
    unknownmananswer = "There is no need to tape the printer.";
  } else if (unknownmaninput == "03,22" || unknownmaninput == "22,03") {
    unknownmananswer = "Taping the rubber glove doesn't seem as such a good idea.";
  } else if (unknownmaninput == "03,24" || unknownmaninput == "24,03") {
    unknownmananswer = "I don't want to tie up anybody.";
  } else if (unknownmaninput == "03,34" || unknownmaninput == "34,03") {
    unknownmananswer = "Here goes...A phone you can stick anywhere.<br><i>Take card <b>40</b>. Remove cards <b>03</b> nad <b>34</b>.</i>";
  } else if (unknownmaninput == "03,36" || unknownmaninput == "03,39" || unknownmaninput == "03,52" || unknownmaninput == "24,36" || unknownmaninput == "24,39" || unknownmaninput == "24,52" || unknownmaninput == "36,03" || unknownmaninput == "36,24" || unknownmaninput == "39,03" || unknownmaninput == "39,24" || unknownmaninput == "52,03" || unknownmaninput == "52,24") {
    unknownmananswer = "I'm not going to tie up my little cat!";
  } else if (unknownmaninput == "06,10" || unknownmaninput == "10,06") {
    unknownmananswer = "I spread some of the powder with a brush on the tablet screen. Well well, look at this...<br><i>Take card <b>44</b>. Remove cards <b>06</b> and <b>10</b>.";
  } else if (unknownmaninput == "06,34" || unknownmaninput == "34,06") {
    unknownmananswer = "I like to keep my phone nice and clean.";
  } else if (unknownmaninput == "06,36" || unknownmaninput == "06,52" || unknownmaninput == "36,06" || unknownmaninput == "52,06") {
    unknownmananswer = "The cat gives me a look that says 'Don't you even think about it'.";
  } else if (unknownmaninput == "06,53" || unknownmaninput == "53,06") {
    unknownmananswer = "I can't touch the lock in front of nurse Barbara. But even if I could, this would reveal the numbers in the code, not their order.";
  } else if (unknownmaninput == "08,01" || unknownmaninput == "08,05" || unknownmaninput == "08,11" || unknownmaninput == "08,15" || unknownmaninput == "08,18" || unknownmaninput == "08,25" || unknownmaninput == "08,29" || unknownmaninput == "08,30" || unknownmaninput == "08,31" || unknownmaninput == "08,33" || unknownmaninput == "08,35" || unknownmaninput == "08,38" || unknownmaninput == "08,42" || unknownmaninput == "08,45" || unknownmaninput == "08,47") {
    unknownmananswer = "It would be interesting to read people's minds and make them do stuff, but it's also a bit creepy. Anyway, my power works only on plants and animals.";
  } else if (unknownmaninput == "08,27" || unknownmaninput == "27,08") {
    unknownmananswer = "The plants in this potpourri have been dead for a long time, so my power doesn't work on it at all.";
  } else if (unknownmaninput == "08,36" || unknownmaninput == "36,08") {
    unknownmananswer = "Come on cat, show me what you're made of.<br><i>As I use the power on the cat, he becomes very collaborative.<br>Take card <b>52</b>. Remove card <b>36</b>.</i>";
  } else if (unknownmaninput == "08,52" || unknownmaninput == "52,08") {
    unknownmananswer = "I'm already using my power over the cat.";
  } else if (unknownmaninput == "08,56" || unknownmaninput == "56,08") {
    unknownmananswer = "What more can I ask of this tree than what it's already done for me?";
  } else if (unknownmaninput == "09,01") {
    unknownmananswer = "I can't get into the car. It's locked, of course.";
  } else if (unknownmaninput == "09,34" || unknownmaninput == "34,09") {
    unknownmananswer = "If I could somehow put my phone into the car, we could follow it with the tracking app. But the car is locked, of course.";
  } else if (unknownmaninput == "09,40" || unknownmaninput == "40,09") {
    unknownmananswer = "The tracking app on the phone will show us exactly where will the car go.<br><i>I tape the phone to the car, after calling Ron to come with his van to pick me up. I just have enough time to hide behind another car parked nearby when I see Dr Turner leaving the building. Fortunately, Ron arrives shortly after. Rose joins us, and the two of us jump into Ron's van. The chase for Dr Turner begins!<br>Take envelope <b>SPO06</b>. Remove cards <b>09</b>, <b>40</b> and <b>LOC10</b>.</i>";
  } else if (unknownmaninput == "10,14" || unknownmaninput == "10,44" || unknownmaninput == "14,10" || unknownmaninput == "14,44") {
    unknownmananswer = "That could work if I actually opened the tablet. I can't connect it to the printer while it's locked.";
  } else if (unknownmaninput == "10,1654852" || unknownmaninput == "10,16482" || unknownmaninput == "10,1,6,4,8,2" || unknownmaninput == "10,1,6,5,4,8,5,2" || unknownmaninput == "10,2,5,8,4,5,6,1" || unknownmaninput == "10,2584561" || unknownmaninput == "10,28461" || unknownmaninput == "10,2,8,4,6,1" || unknownmaninput == "44,1654852" || unknownmaninput == "44,16482" || unknownmaninput == "44,1,6,4,8,2" || unknownmaninput == "44,2584561" || unknownmaninput == "44,28461" || unknownmaninput == "44,2,8,4,6,1" || unknownmaninput == "44,1,6,5,4,8,5,2" || unknownmaninput == "44,2,5,8,4,5,6,1") {
    unknownmananswer = "As I repeat the pattern the tablet beeps and unlocks. I am pretty good at this!<br><i>Take card <b>17</b>. Remove card <b>44</b>.</i>";
  } else if (unknownmaninput == "12,24" || unknownmaninput == "24,12") {
    unknownmananswer = "I don't really see why would I throw the rope out of the window.";
  } else if (unknownmaninput == "12,27" || unknownmaninput == "27,12") {
    unknownmananswer = "The potpourri does smell really intense, but if I've been carrying it for all this time, I'm not going to throw it out of the window now.";
  } else if (unknownmaninput == "12,34" || unknownmaninput == "34,12") {
    unknownmananswer = "That's not much of a view to take a photo of it.";
  } else if (unknownmaninput == "12,50" && escape == 1 || unknownmaninput == "50,12" && escape == 1) {
    unknownmananswer = "Should I really break the window with the IV stand top? I don't see why.";
  } else if (unknownmaninput == "12,50" && escape == 2 || unknownmaninput == "50,12" && escape == 2) {
    unknownmananswer = "I could hook the IV stand top on the window, but I don't know what to do from there.";
  } else if (unknownmaninput == "12,55" && escape == 1 || unknownmaninput == "55,12" && escape == 1) {
    unknownmananswer = "I just got to the room. Why would I escape now?";
  } else if (unknownmaninput == "12,55" && escape == 2 || unknownmaninput == "55,12" && escape == 2) {
    unknownmananswer = "This may not be the safest thing to do, but I don't have a choice. Here we go!<br><i>I hook my improvised anchor on the window sill and use the rope to climb down the window. Jenna unhooks the anchor and throws it down just before Dr Turner enters the room. That was close!<br>Take card <b>LOC10</b>. Remove cards <b>12</b>, <b>35</b>, <b>55</b> and <b>LOC09</b> (but keep the other cards from the location on the table).</i>";
  } else if (unknownmaninput == "14,17" || unknownmaninput == "17,14") {
    unknownmananswer = "The file is called 'PEI_both_sides'. Let's try to print it, on both sides obviously.<br>Take envelope <b>SPO05</b>. Remove cards <b>14</b> and <b>17</b>.</i>";
  } else if (unknownmaninput == "14,34" || unknownmaninput == "34,14") {
    unknownmananswer = "There is nothing on my phone that I need to print, really.";
  } else if (unknownmaninput == "16,27" || unknownmaninput == "27,16") {
    unknownmananswer = "Why would I drug the potpourri? The smell itself is already poisonous enough.";
  } else if (unknownmaninput == "16,36" || unknownmaninput == "16,39" || unknownmaninput == "16,52" || unknownmaninput == "36,16" || unknownmaninput == "39,16" || unknownmaninput == "52,16" || unknownmaninput == "52,46") {
    unknownmananswer = "I don't want to drug poor little cat!";
  } else if (unknownmaninput == "22,36" || unknownmaninput == "36,22") {
    unknownmananswer = "I try to make the cat smell the glove, but he just turns his head away from it.";
  } else if (unknownmaninput == "22,52" || unknownmaninput == "52,22") {
    unknownmananswer = "Let's see if what they say about cats having a super sensitive smell is true.<br><i>The cat smells the glove and confirms to me that he could now recognize the smell of the glove's owner anywhere. <br>Take card <b>39</b>. Remove cards <b>22</b> and <b>52</b>.</i>";
  } else if (unknownmaninput == "24,50" || unknownmaninput == "50,24") {
    unknownmananswer = "You can learn how to make all kinds of knots on the internet.<br><i>Take card <b>55</b>. Remove cards <b>24</b> and <b>50</b>.</i>";
  } else if (unknownmaninput == "26,01" || unknownmaninput == "26,05" || unknownmaninput == "26,07" || unknownmaninput == "26,11" || unknownmaninput == "26,15" || unknownmaninput == "26,20" || unknownmaninput == "26,23" || unknownmaninput == "26,25" || unknownmaninput == "26,29" || unknownmaninput == "26,30" || unknownmaninput == "26,33" || unknownmaninput == "26,35" || unknownmaninput == "26,42" || unknownmaninput == "26,45" || unknownmaninput == "26,48") {
    unknownmananswer = "I have to get back to my Ziggy appearance to be able to change it into someone else's.";
  } else if (unknownmaninput == "26,13") {
    unknownmananswer = "I already have his appearance.";
  } else if (unknownmaninput == "27,36" || unknownmaninput == "27,39" || unknownmaninput == "27,52" || unknownmaninput == "36,27" || unknownmaninput == "36,27" || unknownmaninput == "39,27") {
    unknownmananswer = "I put the cat into the potpourri, but he can't stand the smell of it.";
  } else if (unknownmaninput == "34,36" || unknownmaninput == "34,39" || unknownmaninput == "34,52" || unknownmaninput == "36,34" || unknownmaninput == "39,34" || unknownmaninput == "52,34") {
    unknownmananswer = "A photo of the cat isn't very useful, but he's just so adorable!";
  } else if (unknownmaninput == "36,54" || unknownmaninput == "54,36") {
    unknownmananswer = "I try to make the cat search for Dr Turner's car, but he doesn't budge.";
  } else if (unknownmaninput == "39,54" || unknownmaninput == "54,39") {
    unknownmananswer = "Come on cat, you can do it!<br><i>The cat passes through the parking lot and after a few minutes of hesitation, he stops next to a car and meows decisively.<br>Take card <b>09</b>. Remove cards <b>39</b> and <b>54</b>.</i>";
  } else if (unknownmaninput == "53,5317" || unknownmaninput == "53,5,3,1,7" || unknownmaninput == "53,6538" || unknownmaninput == "53,6,5,3,8" || unknownmaninput == "53,LIES" || unknownmaninput == "53,L,I,E,S") {
    unknownmananswer = "Even if I know the code, I can't just go right to the lock and enter it. Nurse Barbara is sitting right there.";
  } else if (unknownmaninput == "52,54" || unknownmaninput == "54,52") {
    unknownmananswer = "If my obedient cat could smell the doctor, I'm sure he could find his car.";
  } else if (unknownmaninput == "M20") {
    unknownmananswer = "The receptionist told me that the man was heading to the metro station. So that's exactly where I'll go.<br><i>Take card <b>LOC02</b>. Remove cards <b>38</b> and <b>LOC01</b> (but keep the other cards from the location on the table).</i>";
  } else if (unknownmaninput == "M03" || unknownmaninput == "A29") {
    unknownmananswer = "So this is where the newspaper lead me. But what now?<br><i>Take card <b>LOC03</b>. Remove cards <b>46</b>, <b>SPO01</b> and <b>LOC02</b> (but keep the other cards from the location on the table).</i>";
  } else if (unknownmaninput == "A57") {
    unknownmananswer = "This is the shop that the man went to. Where to from here?<br><i>Take card <b>LOC04</b>. Remove cards <b>47</b> and <b>LOC03</b> (but keep the other cards from the location on the table).</i>";
  } else if (unknownmaninput == "G54") {
    unknownmananswer = "I should take the drug to Dr Rose.<br><i>As I arrive to the hospital, I see Dr Rose in the hallway. We move to the side by the coffee machine, so that we can speak in private. I pass her the drug that is supposedly capable of removing our powers. She promises she will send it for analysis immidiately and that she will try to make an antidote. This will take a while, so I should continue with my investigation in the meantime.<br>Take card <b>LOC06</b>. Remove cards <b>16</b> and <b>57</b>.</i>";
  } else if (unknownmaninput == "C29") {
    unknownmananswer = "I didn't think that the mayor could be invloved, but if that's what it takes, I'm going to bring the mayor himself down!<br><i>Take card <b>LOC07</b>.</i>";
  } else if (unknownmaninput == "H50") {
    unknownmananswer = "I arrive to the 'Starchester Weather Radar' but I don't find anything of interest. But wasn't the magazine address 'Under the Radar'?</i>";
  } else if (unknownmaninput == "H51") {
    unknownmananswer = "Finally! This magazine really is under the radar, it wasn't easy to find its whereabouts.<br><i>Take card <b>LOC08</b>. Remove card <b>07</b>.</i>";
  } else if (unknownmaninput == "C24" || unknownmaninput == "C30") {
    unknownmananswer = "<i>We arrive to the spot the tracking app lead us to, and park the car across the street on a safe distance, so that nobody would spot us. We're here just in time to see Dr Turner going to the entrance of the building. An armed soldier guarding the doors greets him there and passes him a potion of some kind. Dr Turner drinks it, and a few moments later the soldier lets him in. Dr Rose turns to me and says:</i><br>This thing what he's drinking must be the drug that professor Martin gave you. My analysis of the drug shows that it's function is indeed to make our powers dissapear, so they must be giving it to people that enter as a precaution. Luckily, I've created an antidote.<br><i>Dr Rose gives me a pill and I swallow it, hopefully gaining immunity to this drug. <br>But then Ron, looking at the entrance with his binoculars, whispers in panic:</i><br>Guys, do you see the symbol on the doors? Rose, you know what it is. It's the symbol of Laki civilisation, the same parasite society that attacked and destroyed Nahukat. My worst nightmares have come true: the Lakis are here.<br><i>I manage to articulate a question, shaking with fear:</i><br>But how are Lakis connected with everything? I thought that the PEI is behind all of this.<br><i>Ron puts the binoculars down and says:</i><br>Now I see what does PEI really stand for: 'Planet Earth Invasion'. They are doing it all over again!<br><i>Take card <b>LOC11</b>. Return all of the tracking app cards into the <b>SPO06</b> envelope.</i>";
  } else if (unknownmaninput == "DR TURNER" || unknownmaninput == "DRTURNER" || unknownmaninput == "DR. TURNER" || unknownmaninput == "DR.TURNER" || unknownmaninput == "TURNER") {
    unknownmananswer = "Dr Turner is in charge of the restricted ward! It took some time to figure out how to read this document, but it was worth it.<br><i>Take card <b>48</b>. Remove cards <b>25</b>, <b>LOC08</b> and <b>SPO05</b>.</i>";
  } else if (unknownmaninput == "29,01") {
    unknownmananswer = "I wouldn't worry about the girl. What could she do, all by herself?";
  } else if (unknownmaninput == "29,08" || unknownmaninput == "29,26") {
    unknownmananswer = "Nobody can get in her by using their powers. That's why we make everybody take to drug before entering. But you already know that.";
  } else if (unknownmaninput == "29,13") {
    unknownmananswer = "Agent 27, are you here for the meeting?";
  } else if (unknownmaninput == "29,23") {
    unknownmananswer = "She's still not talking, no matter what we do to her.";
  } else if (unknownmaninput == "29,28") {
    unknownmananswer = "Oh, it's you, Agent 27. I'm sorry to make you do this, but you know the protocol.<br><i>The soldier gives me a small bottle with a drug, just like the one professor Martin gave me. I drink it, as I saw Dr Turner do it. I'm sweating with stress..will Dr Rose's antidote work? A few seconds pass and I still look like the ugly, leather loving, kidnapping criminal named Agent 27, as it seems.</i><br>All is good, go ahead.<br><i>The soldier opens the entrance doors, and...I'm in! Mother, here I come!</i><br><br><b>Chapter Two of the game is now finished. To continue Ziggy's adventure and finally save Lena, start Chapter Three. Thank you for playing!</b>";
  } else if (unknownmaninput == "29,29") {
    unknownmananswer = "Nobody will get past me without me checking them out first. No exceptions, rules are rules.";
  } else if (unknownmaninput == "29,48") {
    unknownmananswer = "Dr Turner is already here, he just came in.";
  } else if (unknownmaninput == "05,01") {
    unknownmananswer = "She was here, looking for the mayor. I told her that he's busy.";
  } else if (unknownmaninput == "05,02") {
    unknownmananswer = "No, thank you, sir.";
  } else if (unknownmaninput == "05,03" || unknownmaninput == "05,26" || unknownmaninput == "05,36" || unknownmaninput == "05,52") {
    unknownmananswer = "I'm sorry, I'm not following you. Are you here to speak to the mayor?";
  } else if (unknownmaninput == "05,06" || unknownmaninput == "05,08" || unknownmaninput == "05,27" || unknownmaninput == "05,34" || unknownmaninput == "05,41") {
    unknownmananswer = "I have to say that I'm not sure what are you talking about.";
  } else if (unknownmaninput == "05,14" || unknownmaninput == "05,24" || unknownmaninput == "05,39" || unknownmaninput == "05,40" || unknownmaninput == "05,53") {
    unknownmananswer = "I feel like I'm on a quiz! Why are you asking me this?";
  } else if (unknownmaninput == "05,05") {
    unknownmananswer = "I am well, thank you for asking.";
  } else if (unknownmaninput == "05,07" || unknownmaninput == "05,25") {
    unknownmananswer = "She's been here, trying to get an interview with the mayor. Those journalists, they only write fairy tales these days.";
  } else if (unknownmaninput == "05,11" || unknownmaninput == "05,57") {
    unknownmananswer = "You know Dr Rose? She is a fantastic physician, wouldn't you agree?";
  } else if (unknownmaninput == "05,13") {
    unknownmananswer = "Yes sir, of course I recognize you. Are you here to speak to the mayor?";
  } else if (unknownmaninput == "05,20") {
    unknownmananswer = "Sure, there is food delivered here occasionally. But I can't say that I remember that particular delivery guy.";
  } else if (unknownmaninput == "05,23") {
    unknownmananswer = "I've seen that lady, she wanted to talk to the mayor. You should probably ask him what was it about.";
  } else if (unknownmaninput == "05,30") {
    unknownmananswer = "I don't know the man. He hasn't been here as far as I recall.";
  } else if (unknownmaninput == "05,33") {
    unknownmananswer = "Mr Bundy is in his office, let me check if he's available.<br><i>The security guard leaves his post and goes to the office. He returns shortly after.</i><br>Mr Bundy will see you now.<br><i>Take card <b>45</b>. Remove cards <b>05</b> and <b>33</b>.</i>";
  } else if (unknownmaninput == "05,42") {
    unknownmananswer = "I don't know this woman. I'm sorry.";
  } else if (unknownmaninput == "42,01" || unknownmaninput == "42,07" || unknownmaninput == "42,25") {
    unknownmananswer = "I'm sorry, but I can't discuss patients or visitors with you.";
  } else if (unknownmaninput == "42,02") {
    unknownmananswer = "Thank you sir, I'm waiting for my salad to be delivered.";
  } else if (unknownmaninput == "42,03" || unknownmaninput == "42,34" || unknownmaninput == "42,40" || unknownmaninput == "42,44") {
    unknownmananswer = "Sir, I'm not sure I understand what you're asking me. Are you here for an appointment, or are you looking for the doctor?";
  } else if (unknownmaninput == "42,05" || unknownmaninput == "42,23" || unknownmaninput == "42,30") {
    unknownmananswer = "I really don't know who are you talking about.";
  } else if (unknownmaninput == "42,06" || unknownmaninput == "42,14" || unknownmaninput == "42,26") {
    unknownmananswer = "I must say that I don't understand what are talking about. The doctor should come in half an hour, you can wait for him in the waiting room if you need him.";
  } else if (unknownmaninput == "42,08" || unknownmaninput == "42,17" || unknownmaninput == "42,36" || unknownmaninput == "42,41") {
    unknownmananswer = "I can't help you with that. Actually, I don't really know what's the point of these questions.";
  } else if (unknownmaninput == "42,10" || unknownmaninput == "42,24" || unknownmaninput == "42,39" || unknownmaninput == "42,52") {
    unknownmananswer = "Answering silly questions is not really in my job description. Is there anything related to the hospital I can help you with?";
  } else if (unknownmaninput == "42,11") {
    unknownmananswer = "Dr Rose is right over there. Do you have an appointment?";
  } else if (unknownmaninput == "42,13" || unknownmaninput == "42,53") {
    unknownmananswer = "Yes sir, I know you've been here before. Unfortunately, I can't let you inside the ward without doctor's presence.";
  } else if (unknownmaninput == "42,20") {
    unknownmananswer = "I ordered a salad, but it still hasn't arrived.";
  } else if (unknownmaninput == "42,33" || unknownmaninput == "42,45") {
    unknownmananswer = "I don't care if you work with the mayor, I can't let you inside the ward without doctor's presence.";
  } else if (unknownmaninput == "42,42") {
    unknownmananswer = "Hello sir, how can I help you?";
  } else if (unknownmaninput == "42,48") {
    unknownmananswer = "The doctor isn't here, but he should be coming in later today.";
  } else if (unknownmaninput == "42,49") {
    unknownmananswer = "Oh...that's nothing. I was bored so I drew on my arm. Can I help you with something?";
  } else if (unknownmaninput == "45,01") {
    unknownmananswer = "I don't know if the girl you're talking about was here. I told the security guard not to bother me with visitors. Unless you came, of course.";
  } else if (unknownmaninput == "45,01") {
    unknownmananswer = "I don't know if the girl you're talking about was here. I told the security guard not to bother me with visitors. Unless you came, of course.";
  } else if (unknownmaninput == "45,02" || unknownmaninput == "45,11" || unknownmaninput == "45,24" || unknownmaninput == "45,30" || unknownmaninput == "45,39") {
    unknownmananswer = "Listen, I'm sure you're as busy as I am. So let's cut to the chase. There are more important things to speak about.";
  } else if (unknownmaninput == "45,03" || unknownmaninput == "45,14" || unknownmaninput == "45,27" || unknownmaninput == "45,34" || unknownmaninput == "45,36") {
    unknownmananswer = "I hope that these questions are not the real reason you came here.";
  } else if (unknownmaninput == "45,06" || unknownmaninput == "45,20" || unknownmaninput == "45,24" || unknownmaninput == "45,40" || unknownmaninput == "45,52") {
    unknownmananswer = "I trust you're here to speak of other things than that.";
  } else if (unknownmaninput == "45,08" || unknownmaninput == "45,20" || unknownmaninput == "45,26" || unknownmaninput == "45,42") {
    unknownmananswer = "Agent, if this is your idea of humour I assure you that I don't find it funny. Can we please get to business?";
  } else if (unknownmaninput == "45,07" || unknownmaninput == "45,25") {
    unknownmananswer = "She's been here, asking questions. But don't worry, she doesn't have a clue. And we better keep it that way. Here is the copy of the document for your boss. He already knows the code.<br><i>The mayor says he has work to do and politely asks me to leave. I can feel that he's quite intimidated by my unknown man presence, but he doesn't want me to notice.<br>Take card <b>10</b>. Remove cards <b>45</b> and <b>LOC07</b>.<br>Return to your Ziggy appearence and use the original Game Book input field.</i>";
  } else if (unknownmaninput == "45,13" || unknownmaninput == "45,45") {
    unknownmananswer = "Your boss sent you here to see me? Well, I'm not going to keep you, I know what you came for. Here is the copy of the document. Your boss already knows the code.<br><i>The mayor says he has work to do and politely asks me to leave. I can feel that he's quite intimidated by my unknown man presence, but he doesn't want me to notice.<br>Take card <b>10</b>. Remove cards <b>45</b> and <b>LOC07</b>.<br>Return to your Ziggy appearence and use the original Game Book input field.</i>";
  } else if (unknownmaninput == "45,23") {
    unknownmananswer = "You know very well that I don't want to know anything more than I need to. As far as I'm concerned, our business is finished. Here is the copy of the document for your boss. He already knows the code.<br><i>The mayor says he has work to do and politely asks me to leave. I can feel that he's quite intimidated by my unknown man presence, but he doesn't want me to notice it.<br>Take card <b>10</b>. Remove cards <b>45</b> and <b>LOC07</b>.<br>Return to your Ziggy appearence and use the original Game Book input field.</i>";
	} else {
	  unknownmananswer = unknownmanrandom[Math.floor(Math.random()*unknownmanrandom.length)];
  }
    document.getElementById("unknownmanAnswer").innerHTML = unknownmananswer;
}

function turner() {
	var turnerlowercase = document.getElementById("turner").value;
  var turnerinput = turnerlowercase.toUpperCase();
  var turnerrandom = [
    "That's probably not the best thing to do while wearing Dr Turner costume.",
    "I don't think that this will help.",
    "Doing this while being Dr Turner might not be the best idea.",
    "Shouldn't I be using this Dr Turner disguise for something else?",
    "There has to be a better way to use my Dr Turner mask than this one."
  ];
  var turneranswer;
  if (turnerinput == "01") {
  	turneranswer = "I will do everything it takes to find my mother.";
  } else if (turnerinput == "02") {
  	turneranswer = "A hamburger with extra mayonnaise that Alison gave me.";
  } else if (turnerinput == "03") {
  	turneranswer = "A duct tape roll that was obviously used to silence professor Martin.";
  } else if (turnerinput == "05") {
  	turneranswer = "A security guard in the mayor's office. He seems a bit tired.";
  } else if (turnerinput == "06") {
  	turneranswer = "White powder makeup the mime artist uses to put on his face.";
  } else if (turnerinput == "07") {
  	turneranswero = "The journalist my mother had a meeting with at the hotel.";
  } else if (turnerinput == "08") {
  	turneranswer = "My ability to connect to animals and plants. It's even stronger now than it was before.<br><i>To use this ability, enter ability card number <b>08</b> followed by the card number of the plant or animal you want to have an effect on in the input field, separated by a comma.</i>";
  } else if (turnerinput == "09") {
  	turneranswer = "Dr Turner's car in front of the hospital. It is new and looks very expensive.";
  } else if (turnerinput == "10") {
  	turneranswer = "The touchscreen tablet that the mayor gave me. It requires a swipe pattern to unlock.<br><i>You can now unlock the touchscreen tablet by entering the card number <b>10</b> followed by the sequence of numbers in the order of the swipe pattern. The card number and the numbers sequence should be separated by a comma, without spaces.</i>";
  } else if (turnerinput == "11" || turnerinput == "57") {
  	turneranswer = "Dr Rose Tobin was the physician of the original Nahukat crew that landed on Earth. She works at the hospital and is a very respected member of the community. But even though she likes it here on Earth, she misses our people immensely.";
  } else if (turnerinput == "12") {
  	turneranswer = "The hospital room is on the first floor, above the hospital's parking lot.";
  } else if (turnerinput == "13") {
  	turneranswer = "The man that was asking about me in the hotel. The receptionist described him as a bald man in a leather jacket with sunglasses.";
  } else if (turnerinput == "14") {
  	turneranswer = "A printer in the 'Under the Radar' office.";
  } else if (turnerinput == "15") {
  	turneranswer = "A patient lying in a coma. Her medical chart reads: <br><i>Patient: Jenna Kane <br>Diagnosis: Heavy metal poisoning with kidney, liver and heart damage, severe brain dysfunction <br>Illnes cause: Unknown <br>Current state: Patient entered a state of extreme unresponsiveness 22 hours after hospitalisation</i>";
  } else if (turnerinput == "16") {
  	turneranswer = "I'm sure that Dr Rose could know more about this drug.";
  } else if (turnerinput == "17") {
  	turneranswer = "The tablet is unlocked and has a file named 'PEI_both_sides'. Unfortunately, the file is either encrypted or corrupted. There are a bunch of unreadable signs in the file that don't make any sense.";
  } else if (turnerinput == "18") {
  	turneranswer = "Professor Martin, well and alive. He better start to explain some things.";
  } else if (turnerinput == "20") {
  	turneranswer = "The delivery guy that delivered the hamburger to the 'Under the Radar' office and left when I got there.";
  } else if (turnerinput == "22") {
  	turneranswer = "A used glove in the trash bin.";
  } else if (turnerinput == "23") {
  	turneranswer = "There is still no sign from my mother. But I feel that we're getting closer to the truth.";
  } else if (turnerinput == "24") {
  	turneranswer = "The rope that was used to tie up professor Martin.";
  } else if (turnerinput == "25") {
  	turneranswer = "Alison Clarke is the journalist that had a meeting with my mother.";
  } else if (turnerinput == "26") {
  	turneranswer = "My amazing new ability to make me look like anybody in this world. Absolutely crazy.<br><i>To use this ability, enter ability card number <b>26</b> followed by the card number of the person you want to take appearance of in the input field, separated by a comma. You can choose any person whose card you have on the table.</i>";
  } else if (turnerinput == "27") {
  	turneranswer = "A potpourri bowl with a smell so intense that it could bring the dead back to life.";
  } else if (turnerinput == "28") {
  	turneranswer = "It wouldn't be the best idea to disguise into Dr Turner. The soldier just saw him entering the building.";
  } else if (turnerinput == "29") {
  	turneranswer = "The soldier guarding the entrence is carrying a huge rifle.";
  } else if (turnerinput == "30") {
  	turneranswer = "Ron was the technology specialist in my parents' crew. He now does some freelance programing to bring food to the table, but he spends most of his time still working on fixing the communication system with Nahukat mothership. Without success, unfortunately. He can be very useful in finding information on people, considering his skills in the cyberspace.<br><i>You don't have to visit Ron to speak to him, you can always reach him over the phone. To communicate with Ron, you should put his card number <b>30</b> followed by the card number of what you want to speak about in the input field, separated by a comma.</i>";
  } else if (turnerinput == "33" || turnerinput == "45") {
  	turneranswer = "Starchester's mayor Bundy has been running the city for 10 years already. He's popular enough, keeping the people of Starchester entertained with festivals and expensive city projects. However, a part of the city population accuse him of favoring certain companies and providing them city work, with saving a part of the profit for himself. They don't have any solid evidence on this kind of activity, of course.";
  } else if (turnerinput == "34") {
  	turneranswer = "The phone Mary gave me is equipped with a tracking software Ron installed. That way Ron knows where I am at all time.";
  } else if (turnerinput == "35") {
  	turneranswer = "Jenna Kane is out of coma, awake and capable of speaking.";
  } else if (turnerinput == "36") {
  	turneranswer = "A stray cat lying on the street, watching the mime artist's show.";
  } else if (turnerinput == "39") {
  	turneranswer = "The cat took a good smell of the glove. He can definitely recognize the smell of the glove's owner now.";
  } else if (turnerinput == "40") {
  	turneranswer = "With the duct tape on the phone, it will be easy to stick it somewhere.";
  } else if (turnerinput == "41") {
  	turneranswer = "A little to do list I wrote. It's hard to remember everything when the day is so exciting.";
  } else if (turnerinput == "42") {
  	turneranswer = "Nurse Barbara is in the reception booth in the hospital. Nothing can pass her eye unnoticed.";
  } else if (turnerinput == "44") {
  	turneranswer = "A clearly visible smudge appears on the touchscreen.<br><i>You can now unlock the touchscreen tablet by entering the card number <b>44</b> followed by the sequence of numbers in the order of the swipe pattern. The card number and the numbers sequence should be separated by a comma, without spaces.</i>";
  } else if (turnerinput == "48") {
  	turneranswer = "Dr Turner whose appearance I've took is in charge of the restricted hospital ward.";
  } else if (turnerinput == "49") {
  	turneranswer = "I can clearly see what did nurse Barbara write on her arm.";
  } else if (turnerinput == "50") {
  	turneranswer = "The IV stand has a removable top.";
  } else if (turnerinput == "52") {
  	turneranswer = "The cat now does whatever I want him to.";
  } else if (turnerinput == "54") {
  	turneranswer = "There is a lot of cars in the parking lot. I wonder which one is Dr Turner's.";
  } else if (turnerinput == "55") {
  	turneranswer = "The IV stand top with a piece of rope tied to it.";
  } else if (turnerinput == "LOC05") {
    turneranswer = "I'm shocked to see professor Martin <b>(18)</b> tied up to a chair. I untie him immidiately, of course, and end up with a piece od rope <b>(24)</b> he was tied with. There is also some duct tape <b>(03)</b> they used to keep him quiet lying on the floor.";
  } else if (turnerinput == "LOC06") {
    turneranswer = "I'm not a big fan of hospitals, but the Starchester Central Hospital is a very modern and well equipped facility. Dr Rose <b>(11)</b>, the ex member of my parents space mission crew, is in the hall checking her patients' charts. A nurse <b>(42)</b> in charge of the reception desk is sitting behind it. There is an alphanumeric lock <b>(53)</b> for a door right of the reception desk with no indication of what is behind it.";
  } else if (turnerinput == "LOC07") {
    turneranswer = "The mayor's office is peaceful, not a lot of work seems to be taking place here. There is a security guard <b>(05)</b> in the entrance. The doors to mayor's office are closed, and it's hard to know if the mayor <b>(33)</b> is inside or not.";
  } else if (turnerinput == "LOC08") {
    turneranswer = "The 'Under the Radar' office is busy, with phones ringing and people talking in the same time. I can see Alison Clarke <b>(25)</b> sitting at one of the desks. As I enter the office. I pass by a delivery guy <b>(20)</b> bringing a hamburger <b>(02)</b> to Alison. As soon as he leaves the food, the runs out of the office.<br><i>Remove card <b>07</b>.</i>";
  } else if (turnerinput == "LOC09") {
    turneranswer = "I finally enter the secret ward. I go to the first room and find a patient <b>(15)</b> lying in one of the beds. She is either sleeping or unconscious. There is some standard medical equipment in the room, like an IV stand <b>(50)</b>. I can also spot a used rubber glove <b>(22)</b> in the trash bin next to the door.";
  } else if (turnerinput == "LOC10") {
    turneranswer = "There are a lot of cars <b>(54)</b> parked in the parking lot.";
  } else if (turnerinput == "LOC11") {
    turneranswer = "There is no indication of PEI on the building. The only thing standing out of the ordinary are the unusual symbols on the entrance doors <b>(28)</b>. And a heavily armed soldier <b>(29)</b> in front of it, of course.";
  } else if (turnerinput == "SPO05") {
    turneranswer = "The printed document from the tablet that mayor Bundy gave me still doesn't make a lot of sense.<br><i>This document will give you the name of the doctor in charge of the restricted ward in the hospital. Once you know the name, write it it the input field and press enter.</i>";
  } else if (turnerinput == "SPO06") {
    turneranswer = "GPS tracking system shows the movements of Dr Turner's car.";
  } else if (turnerinput == "01,01") {
    turneranswer = "I feel like I've grown in these last few days. Now that I know the truth about my mother and I, so many things make more sense.";
  } else if (turnerinput == "01,02") {
    turneranswer = "There sure is a lot of mayonnaise in this burger.";
  } else if (turnerinput == "01,03") {
    turneranswer = "It's always useful to have a roll of duct tape with you.";
  } else if (turnerinput == "01,05") {
    turneranswer = "The security guard looks like his shift here was long and tiresome.";
  } else if (turnerinput == "01,06") {
    turneranswer = "The mime artist doesn't seem to mind if I borrow it. White makeup isn't really my style, but I'll take it. You never know what will become trendy next.";
  } else if (turnerinput == "01,07") {
    turneranswer = "I'm sure this journalist knows something about my mother. I have to find a way to reach her.";
  } else if (turnerinput == "01,08") {
    turneranswer = "I'm so used to having this little power now that it's getting hard to imagine life without it.";
  } else if (turnerinput == "01,09") {
    turneranswer = "What was it that Dr Turner said on the phone? Something about going to the PEI after his visit to the hospital? I'd like to see where this PEI base is, but I can't get into the car. It's locked.";
  } else if (turnerinput == "01,10") {
    turneranswer = "I sure would like to take a look inside mayor's tablet.";
  } else if (turnerinput == "01,11" || turnerinput == "01,57") {
    turneranswer = "Dr Rose is a very nice and calm woman. I wouldn't be surprised if she was the most popular doctor around here. During her earthly career she managed to get funding for three research studies already, where she could carefully implement some of advanced medical knowledge of Nahukat.";
  } else if (turnerinput == "01,12") {
    turneranswer = "The window is looking right at the hospital parking lot. Not much of a view, really.";
  } else if (turnerinput == "01,13") {
    turneranswer = "This man is following me? He has to be connected to the disappearance of my mother. Well, I'm not afraid of him! OK, maybe just a little bit.";
  } else if (turnerinput == "01,14") {
    turneranswer = "A standard inkjet office printer. Nothing unusual there.";
  } else if (turnerinput == "01,15") {
    turneranswer = "This poor woman is in a coma. If only I could wake her up somehow...";
  } else if (turnerinput == "01,16" || turnerinput == "16,01") {
    turneranswer = "I should give this to Dr Rose for analysis. If somebody can figure out what this is, it's her.";
  } else if (turnerinput == "01,17") {
    turneranswer = "The document on the tablet is very strange. And what's with this name, 'both sides'?";
  } else if (turnerinput == "01,18") {
    turneranswer = "Professor Martin was kidnapped? How did this happen?";
  } else if (turnerinput == "01,20") {
    turneranswer = "The delivery guy seems to be in a hurry. He leaves the takeout on the table and runs out of the office in a matter of seconds.";
  } else if (turnerinput == "01,22") {
    turneranswer = "It's not very hygienic to take other people's used gloves from the trash bin, but I have a feeling that it night be useful.";
  } else if (turnerinput == "01,23") {
    turneranswer = "Oh mother...what did you get into? I have to find you, and I have to do it fast!";
  } else if (turnerinput == "01,24") {
    turneranswer = "A piece of rope is something every young lady should have in her bag at all times, isn't it?";
  } else if (turnerinput == "01,25") {
    turneranswer = "Now that I've found you Alison, you better talk!";
  } else if (turnerinput == "01,26") {
    turneranswer = "OK, I have to admit that this ability is even cooler than the other one!";
  } else if (turnerinput == "01,27") {
    turneranswer = "This smells way too intense. Every time I open my backpack I almost suffocate. Why am I carrying it around again?";
  } else if (turnerinput == "01,28" || turnerinput == "28,01") {
    turneranswer = "I have to pass the soldier first to enter the PEI base.";
  } else if (turnerinput == "01,29") {
    turneranswer = "I can't pretend not to care that this guy is fully armed while I don't have anything to protect me. But I can't stop now!";
  } else if (turnerinput == "01,30") {
    turneranswer = "Ron is great. He's the funniest of the crew, and even though I've just met him, I feel like we know each other for ages. But his light hearted nature doesn't diminish how dangerous he can be if he wants to...Give this guy a computer and he can enter any system in just a few clicks.";
  } else if (turnerinput == "01,33" || turnerinput == "01,45") {
    turneranswer = "I don't know a lot about the mayor, except that he's been ruling the city for a long time now. And I heard that there are some corruption accusations against him. But it hasn't really caused a big fall of his popularity.";
  } else if (turnerinput == "01,34") {
    turneranswer = "The phone that Mary gave me has a tracking app installed by Ron. Knowing that he can see where I am makes me feel a lot safer.";
  } else if (turnerinput == "01,35") {
    turneranswer = "Wow, I've awaken a woman from a coma! I think that Dr Rose would be proud of me.";
  } else if (turnerinput == "01,36") {
    turneranswer = "I wish that I could have a cat too! But my dog Laika wouldn't like it a lot.";
  } else if (turnerinput == "01,39") {
    turneranswer = "I've heard that cats have a very developed sense of smell, even stronger than dogs.";
  } else if (turnerinput == "01,40") {
    turneranswer = "I hope that the tape won't leave sticky traces on my new phone.";
  } else if (turnerinput == "01,41") {
    turneranswer = "I have a habit of forgetting what I'm supposed to do. This way it shouldn't happen.";
  } else if (turnerinput == "01,42") {
    turneranswer = "This nurse isn't very helpful, is she?";
  } else if (turnerinput == "01,44") {
    turneranswer = "Alright, the pattern smudge is super clear.";
  } else if (turnerinput == "01,48") {
    turneranswer = "I think that my cover is working fabulously.";
  } else if (turnerinput == "01,49") {
    turneranswer = "Luckily Barbara's memory isn't her strong suit. Now I can easily see the code for the ward lock.";
  } else if (turnerinput == "01,50") {
    turneranswer = "Many objects I encounter seemed useless in the beginning, but they turned out to be very valuable.";
  } else if (turnerinput == "01,52") {
    turneranswer = "Sorry cat, but you will have to help me a little bit.";
  } else if (turnerinput == "01,53") {
    turneranswer = "I wonder what's hiding behind this lock...a zombie ward?";
  } else if (turnerinput == "01,54") {
    turneranswer = "So many cars...Which one could be Dr Turner's?";
  } else if (turnerinput == "01,55") {
    turneranswer = "What a nice anchor I've created!";
  } else if (turnerinput == "01,LOC05") {
    turneranswer = "Professor Martin! So this is where he disappeared to. But where is my mother?";
  } else if (turnerinput == "01,LOC06") {
    turneranswer = "The hospital is quiet enough. Only a few patients in the waiting room and a nurse on the reception desk. Dr Rose is here too.";
  } else if (turnerinput == "01,LOC07") {
    turneranswer = "It seems as there are not a lot of people in the mayor's office. The security guard is taking his job seriously, not leaving his position and looking around as if something was actually happening here.";
  } else if (turnerinput == "01,LOC08") {
    turneranswer = "'Under the Radar' office is vibrant with young employees chatting and music coming from the radio. I think I see Alison Clarke at one of the tables.";
  } else if (turnerinput == "01,LOC09") {
    turneranswer = "There is only one patient in the room, and she's unconscious.";
  } else if (turnerinput == "01,LOC10") {
    turneranswer = "The parking lot is huge and filled with cars.";
  } else if (turnerinput == "01,LOC11") {
    turneranswer = "I'm finally getting close to finding my mother. I have a feeling she is near.";
  } else if (turnerinput == "01,SPO05") {
    turneranswer = "There has to be a way to shed some light on the meaning of this document.";
  } else if (turnerinput == "01,SPO06") {
    turneranswer = "All we have to do is follow Dr Turner's car.";
  } else if (turnerinput == "11,01") {
    turneranswer = "Oh, it's you Ziggy. I see that you've perfected our power of disguise.";
  } else if (turnerinput == "11,02") {
    turneranswer = "Thanks, I already had my lunch.";
  } else if (turnerinput == "11,03") {
    turneranswer = "That's OK, we have a bunch of tape in our storage room.";
  } else if (turnerinput == "11,05") {
    turneranswer = "Oh yes, what a nice family. His wife was my patient a few years ago. Too bad he works for that sketchy mayor Bundy.";
  } else if (turnerinput == "11,06") {
    turneranswer = "I don't wear makeup. Especially not white face powder, that would just scare my patients.";
  } else if (turnerinput == "11,07") {
    turneranswer = "I've never heard of this journalist. But you know what, ask Ron about it. If anybody can dig up something on somebody, it's him.";
  } else if (turnerinput == "11,08") {
    turneranswer = "Yes, this is one of the funniest powers we have. I play chess with my philodendron all the time!";
  } else if (turnerinput == "11,09") {
    turneranswer = "We should follow this car!";
  } else if (turnerinput == "11,10") {
    turneranswer = "Let me take a try...No, that wasn't it.";
  } else if (turnerinput == "11,11") {
    turneranswer = "I've tried to move on, but the truth is that I'm still thinking about Nahukat people every day. Ron hasn't stopped working on the communication system, but we haven't progressed a lot, in all these years.";
  } else if (turnerinput == "11,12") {
    turneranswer = "The view is not the best. What can we do.";
  } else if (turnerinput == "11,13") {
    turneranswer = "This man is asking about you? He must be working for the same people who took your mother.";
  } else if (turnerinput == "11,14") {
    turneranswer = "Why are we talking about a printer? Ziggy, we don't have time for this.";
  } else if (turnerinput == "11,15") {
    turneranswer = "I can't help you with that. There isn't really anything you can do to wake somebody up from a coma. If you find a way, sure let me know how you did it.";
  } else if (turnerinput == "11,17") {
    turneranswer = "Maybe Ron could take a look at this.";
  } else if (turnerinput == "11,20") {
    turneranswer = "Sometimes I order a veggie burger, but I can't say that I know this particular delivery guy.";
  } else if (turnerinput == "11,22") {
    turneranswer = "The medical staff here uses this type of gloves.";
  } else if (turnerinput == "11,23") {
    turneranswer = "You can only imagine how much I miss your mother. And to see you here now, it's unbelievable! We will find Lena, don't worry!";
  } else if (turnerinput == "11,24") {
    turneranswer = "A piece of rope? Seriously, how do you fit all this stuff in that small backpack?";
  } else if (turnerinput == "11,25") {
    turneranswer = "So Lena contacted Alison because of her article? It looks as if this story could be bigger than we thought.";
  } else if (turnerinput == "11,26") {
    turneranswer = "It's the best, isn't it? Look!<br><i>And just like that, my identical twin appeared in front of me. I almost screamed! She turned back to Dr Rose in a second.</i><br>Ha ha! You should have seen your face!";
  } else if (turnerinput == "11,27") {
    turneranswer = "I didn't think that it's possible, but there is such a thing as too much cinnamon.";
  } else if (turnerinput == "11,28") {
    turneranswer = "Ziggy, you try to get pass the soldier and I'll check around to see if there is an another entrance somewhere. Ron, you keep guard in the car.";
  } else if (turnerinput == "11,29") {
    turneranswer = "He is dangerous, but when you use your powers you're even more dangerous, Ziggy. Go get him! I will go to check around, there must be another entrance into this building. Ron, you stay here, keep guard and wait for us in the car.";
  } else if (turnerinput == "11,30") {
    turneranswer = "Ron and I are best friends. He is amazing with techology, but without the right equipment even he can't fix the communication system of our ship. One day, maybe.";
  } else if (turnerinput == "11,33" || turnerinput == "11,45") {
    turneranswer = "The mayor is corrupted, I'm sure of it. The fact that all of the big projects in the city go to the hands of contractors, that happen to be his cousins, can't be a coincidence. Nor is all the money that keeps stacking in his bank account.";
  } else if (turnerinput == "11,34") {
    turneranswer = "I'm glad you have this phone with you.";
  } else if (turnerinput == "11,35") {
    turneranswer = "You woke her up? That's really impressive.";
  } else if (turnerinput == "11,36" || turnerinput == "11,39" || turnerinput == "11,52") {
    turneranswer = "You have a cat now? I thought you had a dog.";
  } else if (turnerinput == "11,40") {
    turneranswer = "What are you doing with your phone? Take care of it, it has a tracking app so that we can know where you are.";
  } else if (turnerinput == "11,41") {
    turneranswer = "So did you manage to find Alison? You should ask Ron about her, he's quite skillful when it comes to finding information on somebody.";
  } else if (turnerinput == "11,42") {
    turneranswer = "That nurse is scary. I swear that she never leaves the desk. I don't know who is in charge of this restricted ward, but I've seen her entering in it. Her memory must be really poor because she has the code written on her arm and she always checks it before going in. You can't see it now because of the long sleeved jacket she's wearing, but it's there. And don't try to take her form to see her arm, our power duplicates only the parts of a person we see.";
  } else if (turnerinput == "11,44") {
    turneranswer = "Well Ziggy, aren't you a clever girl.";
  } else if (turnerinput == "11,48") {
    turneranswer = "You look exactly like Dr Turner. Well done.";
  } else if (turnerinput == "11,49") {
    turneranswer = "You managed to get a look at her arm? Way to go Ziggy!";
  } else if (turnerinput == "11,50") {
    turneranswer = "Sure, take hospital equipment. You need it more than our patients, don't you?";
  } else if (turnerinput == "11,53") {
    turneranswer = "I don't know the code. They've changed it a few months ago and the whole ward became a restricted zone. To tell you the truth, I don't even know which doctor is in charge of it. I've only seen nurse Barbara entering it. I think she has the code written on her arm because she always checks it before entering the ward. I didn't get a good look at it because she's always wearing this long sleeved jacket. It's seems obvious to take her form and look at her arm, but our power doesn't work like that. We only take the appearance of those details we can see on a person.";
  } else if (turnerinput == "11,54") {
    turneranswer = "I can't tell you which car is Dr Turner's. I think he changed cars recently.";
  } else if (turnerinput == "11,55") {
    turneranswer = "Please return the IV stand top as soon as you're finished with this, whatever it is.";
  } else if (turnerinput == "11,LOC06") {
    turneranswer = "It's a nice place to work. But you know that I will never forget my old life and our people.";
  } else if (turnerinput == "11,LOC07") {
    turneranswer = "Did you notice how the office is renovated? Guess who paid for the new rare marble floor. Us, the taxpayers.";
  } else if (turnerinput == "11,LOC08") {
    turneranswer = "I've never read this magazine. Did you find out how is it connected with your mother?";
  } else if (turnerinput == "11,LOC09") {
    turneranswer = "You're telling me that there are people in coma lying in this ward? What are they suffering from?";
  } else if (turnerinput == "11,LOC10") {
    turneranswer = "I couldn't tell you which is Dr Turner's car.";
  } else if (turnerinput == "11,LOC11") {
    turneranswer = "OK, we can't give up now. I will see if there is another way to get in here. Ron, you stay in the car and be ready for our escape. Ziggy, you try to get inside from here. And take care, everybody.";
  } else if (turnerinput == "11,SPO05") {
    turneranswer = "This message is encrypted somehow. If we could only find the code...";
  } else if (turnerinput == "30,01") {
    turneranswer = "Ziggy, it's so great to talk to you. I only wish the circumstances were different.";
  } else if (turnerinput == "30,02") {
    turneranswer = "I don't know how could I eat the burger over the phone.";
  } else if (turnerinput == "30,03") {
    turneranswer = "I have more than enough duct tape at home.";
  } else if (turnerinput == "30,05") {
    turneranswer = "I did a quick check up on him. Married, two kids, working in mayor's office for 6 months. Doesn't seem to have any connection to mayor's business, he's really only a security guard.";
  } else if (turnerinput == "30,07") {
    turneranswer = "Well, it wasn't so easy to track her down because she signs her articles with an alias. But I did find her. She works for an online magazine called 'Under the Radar'. I didn't find their address though. There is a mistake on their contact page, they wrote 'Under the Radar' in their address section. Or maybe that mistake was intentional?";
  } else if (turnerinput == "30,08" || turnerinput == "30,26") {
    turneranswer = "I see you're enjoying your new powers. Just be careful, nobody around you should know that you have them.";
  } else if (turnerinput == "30,09") {
    turneranswer = "I checked the number plate, the car is registered under Dr Anthony Turner.";
  } else if (turnerinput == "30,10") {
    turneranswer = "I'm sorry, but there are just too many possible combinations to crack this code by force.";
  } else if (turnerinput == "30,11" || turnerinput == "30,57") {
    turneranswer = "Rose is a fantastic physician and an amazing friend. She's at the hospital if you need her.";
  } else if (turnerinput == "30,12") {
    turneranswer = "Ziggy, try to escape through the window! Is it too high?";
  } else if (turnerinput == "30,13") {
    turneranswer = "I don't know who the guy is, but I'm sure he knows what happened to Lena.";
  } else if (turnerinput == "30,14") {
    turneranswer = "This model is famous for it's precise both sides printing.";
  } else if (turnerinput == "30,15" || turnerinput == "30,35") {
    turneranswer = "She lives in Marsley, a village near here. And she's not the only one who's sick. There were many locals from the villages around that had serious health issues during the last few months.";
  } else if (turnerinput == "30,16") {
    turneranswer = "This was given to Lena? You should take it to Dr Rose for analysis.";
  } else if (turnerinput == "30,17") {
    turneranswer = "The file you sent me isn't encrypted. And I couldn't find a font like this, not even in the dark web. And what about the name 'PEI_both_sides'? PEI is the oil company that profited the most of mayor Bundy's tax reductions. But what does 'both sides' mean?";
  } else if (turnerinput == "30,20") {
    turneranswer = "I checked the delivery guy. Didn't find anything interesting on him.";
  } else if (turnerinput == "30,22") {
    turneranswer = "Somebody of the hospital staff must have used this glove.";
  } else if (turnerinput == "30,23") {
    turneranswer = "Lena is asking for help. That's why she sent you to us. We have to find her...and soon.";
  } else if (turnerinput == "30,06" || turnerinput == "30,24" || turnerinput == "30,50" || turnerinput == "30,55") {
    turneranswer = "You remind me so much of your father. He always used to make use of a bunch of weird stuff he picked up from here and there.";
  } else if (turnerinput == "30,25") {
    turneranswer = "You found Alison? That's amazing!";
  } else if (turnerinput == "30,27") {
    turneranswer = "I can't smell it over the phone, but I believe you when you say it's too much.";
  } else if (turnerinput == "30,28") {
    turneranswer = "Ziggy, I'm sure you can think of something to get inside. Your mother is waiting for you!";
  } else if (turnerinput == "30,29") {
    turneranswer = "Ziggy, don't let yourself get intimidated by this guy. You have strenght that he doesn't.";
  } else if (turnerinput == "30,30") {
    turneranswer = "I've been working on fixing our communication system since we came to Earth. But I haven't made enough progress still. The technology is so limited on this planet, it's frustrating.";
  } else if (turnerinput == "30,33" || turnerinput == "30,45") {
    turneranswer = "Mayor Bundy has been accused of many things. Some of them involve spending tax money on expensive city projects that don't help in solving real problems, like waste managment. Other imply that he's been putting his people on high, well paid and powerful positions. But one rumor could perhaps interest us the most. He significantly lowered the taxes for new businesses as a part of his economy growth policy two years ago. And there was one company who profited from it the most, quickly gaining wealth and monopoly in the region. It was PEI, 'Petroleum Extraction Industries'. He should be in his office now, it's working hours.";
  } else if (turnerinput == "30,34") {
    turneranswer = "You know that I've installed a tracking system so that I can always see where you are. So keep it with you and keep it turned on.";
  } else if (turnerinput == "30,36" || turnerinput == "30,39" || turnerinput == "30,52") {
    turneranswer = "I understand why you took this cat with you. All of us Nahukat people love animals.";
  } else if (turnerinput == "30,40") {
    turneranswer = "Take care of that phone!";
  } else if (turnerinput == "30,41") {
    turneranswer = "It's a good thing to be writing down what needs to be done. If I can help you with anything, just let me know.";
  } else if (turnerinput == "30,42") {
    turneranswer = "I checked on her. She's been working in the hospital for 7 years and has good reviews from the patients. Except this one time she was caught in shoplifting when she was 17 years old, there really isn't anything suspicious about her.";
  } else if (turnerinput == "30,44") {
    turneranswer = "That's some Poirot work there Ziggy. Nicely done.";
  } else if (turnerinput == "30,48") {
    turneranswer = "Dr Turner a very well respected surgeon. He's been working for the Central Hospital for 4 years, when he moved to Starchester. According to his financial records, he was on a verge of bancrupcy a year ago. And I have information that it was due to large gambling debts he collected over the years. But very soon all of his debts were miraculously covered for.";
  } else if (turnerinput == "30,49") {
    turneranswer = "I was sure you will be able to get the code. You're as resourceful as your parents.";
  } else if (turnerinput == "30,53") {
    turneranswer = "I don't know why this area of hospital would be restricted. Rose could know something about it.";
  } else if (turnerinput == "30,54") {
    turneranswer = "I could find the licence plate number of Dr Turner's car, but it will take some time. And he could return to the car any minute. If there's a quicker way to find it, go for it!";
  } else if (turnerinput == "30,LOC06") {
    turneranswer = "Rose works at the hospital. She told me about this ward that's been a restricted area for 3 months. She still didn't find out what's been going on there.";
  } else if (turnerinput == "30,LOC07") {
    turneranswer = "Ah, our famous mayor Bundy. If you want to know more about lovely Mr Bundy, just ask.";
  } else if (turnerinput == "30,LOC08") {
    turneranswer = "Aha, so it really was under the radar!";
  } else if (turnerinput == "30,LOC09") {
    turneranswer = "So this is where they've been hiding all these sick people!";
  } else if (turnerinput == "30,LOC10") {
    turneranswer = "Dr Turner's car must be parked there somewhere.";
  } else if (turnerinput == "30,LOC11") {
    turneranswer = "Lena must be here!";
  } else if (turnerinput == "30,SPO05") {
    turneranswer = "I wonder how could we shed a light on the meaning of this document.";
  } else if (turnerinput == "02,06" || turnerinput == "06,02") {
    turneranswer = "I don't see a good reason to put makeup into the food.";
  } else if (turnerinput == "02,10" || turnerinput == "10,02") {
    turneranswer = "Dipping the tablet in mayonnaise will not unlock it.";
  } else if (turnerinput == "02,14" || turnerinput == "14,02") {
    turneranswer = "The printer isn't hungry. There's plenty of paper in it.";
  } else if (turnerinput == "02,16" || turnerinput == "16,02") {
    turneranswer = "Is it really the best idea to drug this food with something that I don't even really know what it is? I don't think so.";
  } else if (turnerinput == "02,27" || turnerinput == "27,02") {
    turneranswer = "I don't want to spoil a perfectly good burger.";
  } else if (turnerinput == "02,34" || turnerinput == "34,02") {
    turneranswer = "The food isn't photogenic enough to make me want to take a photo of it.";
  } else if (turnerinput == "02,36" || turnerinput == "02,52" || turnerinput == "36,02" || turnerinput == "52,02") {
    turneranswer = "The cat doesn't like mayonnaise.";
  } else if (turnerinput == "03,09" || turnerinput == "09,03") {
    turneranswer = "It could be a good idea to tape something to the car, but what?";
  } else if (turnerinput == "03,10" || turnerinput == "10,03") {
    turneranswer = "I don't see what good would it do.";
  } else if (turnerinput == "03,12" || turnerinput == "12,03") {
    turneranswer = "I don't see how taping the window would help me.";
  } else if (turnerinput == "03,14" || turnerinput == "14,03") {
    turneranswer = "There is no need to tape the printer.";
  } else if (turnerinput == "03,22" || turnerinput == "22,03") {
    turneranswer = "Taping the rubber glove doesn't seem as such a good idea.";
  } else if (turnerinput == "03,24" || turnerinput == "24,03") {
    turneranswer = "I don't want to tie up anybody.";
  } else if (turnerinput == "03,34" || turnerinput == "34,03") {
    turneranswer = "Here goes...A phone you can stick anywhere.<br><i>Take card <b>40</b>. Remove cards <b>03</b> nad <b>34</b>.</i>";
  } else if (turnerinput == "03,36" || turnerinput == "03,39" || turnerinput == "03,52" || turnerinput == "24,36" || turnerinput == "24,39" || turnerinput == "24,52" || turnerinput == "36,03" || turnerinput == "36,24" || turnerinput == "39,03" || turnerinput == "39,24" || turnerinput == "52,03" || turnerinput == "52,24") {
    turneranswer = "I'm not going to tie up my little cat!";
  } else if (turnerinput == "06,10" || turnerinput == "10,06") {
    turneranswer = "I spread some of the powder with a brush on the tablet screen. Well well, look at this...<br><i>Take card <b>44</b>. Remove cards <b>06</b> and <b>10</b>.";
  } else if (turnerinput == "06,34" || turnerinput == "34,06") {
    turnerinput = "I like to keep my phone nice and clean.";
  } else if (turnerinput == "06,36" || turnerinput == "06,52" || turnerinput == "36,06" || turnerinput == "52,06") {
    turneranswer = "The cat gives me a look that says 'Don't you even think about it'.";
  } else if (turnerinput == "06,53" || turnerinput == "53,06") {
    turneranswer = "This would reveal the numbers in the code, not their order.";
  } else if (turnerinput == "08,01" || turnerinput == "08,05" || turnerinput == "08,11" || turnerinput == "08,15" || turnerinput == "08,18" || turnerinput == "08,25" || turnerinput == "08,29" || turnerinput == "08,30" || turnerinput == "08,31" || turnerinput == "08,33" || turnerinput == "08,35" || turnerinput == "08,38" || turnerinput == "08,42" || turnerinput == "08,45" || turnerinput == "08,47") {
    turneranswer = "It would be interesting to read people's minds and make them do stuff, but it's also a bit creepy. Anyway, my power works only on plants and animals.";
  } else if (turnerinput == "08,27" || turnerinput == "27,08") {
    turneranswer = "The plants in this potpourri have been dead for a long time, so my power doesn't work on it at all.";
  } else if (turnerinput == "08,36" || turnerinput == "36,08") {
    turneranswer = "Come on cat, show me what you're made of.<br><i>As I use the power on the cat, he becomes very collaborative.<br>Take card <b>52</b>. Remove card <b>36</b>.</i>";
  } else if (turnerinput == "08,52" || turnerinput == "52,08") {
    turneranswer = "I'm already using my power over the cat.";
  } else if (turnerinput == "08,56" || turnerinput == "56,08") {
    turneranswer = "What more can I ask of this tree than what it's already done for me?";
  } else if (turnerinput == "09,01") {
    turneranswer = "I can't get into the car. It's locked, of course.";
  } else if (turnerinput == "09,34" || turnerinput == "34,09") {
    turneranswer = "If I could somehow put my phone into the car, we could follow it with the tracking app. But the car is locked, of course.";
  } else if (turnerinput == "09,40" || turnerinput == "40,09") {
    turneranswer = "The tracking app on the phone will show us exactly where will the car go.<br><i>I tape the phone to the car, after calling Ron to come with his van to pick me up. I just have enough time to hide behind another car parked nearby when I see Dr Turner leaving the building. Fortunately, Ron arrives shortly after. Rose joins us, and the two of us jump into Ron's van. The chase for Dr Turner begins!<br>Take envelope <b>SPO06</b>. Remove cards <b>09</b>, <b>40</b> and <b>LOC10</b>.</i>";
  } else if (turnerinput == "10,14" || turnerinput == "10,44" || turnerinput == "14,10" || turnerinput == "14,44") {
    turneranswer = "That could work if I actually opened the tablet. I can't connect it to the printer while it's locked.";
  } else if (turnerinput == "10,1654852" || turnerinput == "10,16482" || turnerinput == "10,1,6,4,8,2" || turnerinput == "10,1,6,5,4,8,5,2" || turnerinput == "10,2,5,8,4,5,6,1" || turnerinput == "10,2584561" || turnerinput == "10,28461" || turnerinput == "10,2,8,4,6,1" || turnerinput == "44,1654852" || turnerinput == "44,16482" || turnerinput == "44,1,6,4,8,2" || turnerinput == "44,2584561" || turnerinput == "44,28461" || turnerinput == "44,2,8,4,6,1" || turnerinput == "44,1,6,5,4,8,5,2" || turnerinput == "44,2,5,8,4,5,6,1") {
    turneranswer = "As I repeat the pattern the tablet beeps and unlocks. I am pretty good at this!<br><i>Take card <b>17</b>. Remove card <b>44</b>.</i>";
  } else if (turnerinput == "12,24" || turnerinput == "24,12") {
    turneranswer = "I don't really see why would I throw the rope out of the window.";
  } else if (turnerinput == "12,27" || turnerinput == "27,12") {
    turneranswer = "The potpourri does smell really intense, but if I've been carrying it for all this time, I'm not going to throw it out of the window now.";
  } else if (turnerinput == "12,34" || turnerinput == "34,12") {
    turneranswer = "That's not much of a view to take a photo of it.";
  } else if (turnerinput == "12,50" && escape == 1 || turnerinput == "50,12" && escape == 1) {
    turneranswer = "turneranswer";
  } else if (turnerinput == "12,50" && escape == 2 || turnerinput == "50,12" && escape == 2) {
    turneranswer = "I could hook the IV stand top on the window, but I don't know what to do from there.";
  } else if (turnerinput == "12,55" && escape == 1 || turnerinput == "55,12" && escape == 1) {
    turneranswer = "I just got to the room. Why would I escape now?";
  } else if (turnerinput == "12,55" && escape == 2 || turnerinput == "55,12" && escape == 2) {
    turneranswer = "This may not be the safest thing to do, but I don't have a choice. Here we go!<br><i>I hook my improvised anchor on the window sill and use the rope to climb down the window. Jenna unhooks the anchor and throws it down just before Dr Turner enters the room. That was close!<br>Take card <b>LOC10</b>. Remove cards <b>12</b>, <b>35</b>, <b>55</b> and <b>LOC09</b> (but keep the other cards from the location on the table).</i>";
  } else if (turnerinput == "14,17" || turnerinput == "17,14") {
    turneranswer = "The file is called 'PEI_both_sides'. Let's try to print it, on both sides obviously.<br>Take envelope <b>SPO05</b>. Remove cards <b>14</b> and <b>17</b>.</i>";
  } else if (turnerinput == "14,34" || turnerinput == "34,14") {
    turneranswer = "There is nothing on my phone that I need to print, really.";
  } else if (turnerinput == "16,27" || turnerinput == "27,16") {
    turneranswer = "Why would I drug the potpourri? The smell itself is already poisonous enough.";
  } else if (turnerinput == "16,36" || turnerinput == "16,39" || turnerinput == "16,52" || turnerinput == "36,16" || turnerinput == "39,16" || turnerinput == "52,16" || turnerinput == "52,46") {
    turneranswer = "I don't want to drug poor little cat!";
  } else if (turnerinput == "22,36" || turnerinput == "36,22") {
    turneranswer = "I try to make the cat smell the glove, but he just turns his head away from it.";
  } else if (turnerinput == "22,52" || turnerinput == "52,22") {
    turneranswer = "Let's see if what they say about cats having a super sensitive smell is true.<br><i>The cat smells the glove and confirms to me that he could now recognize the smell of the glove's owner anywhere. <br>Take card <b>39</b>. Remove cards <b>22</b> and <b>52</b>.</i>";
  } else if (turnerinput == "24,50" || turnerinput == "50,24") {
    turneranswer = "You can learn how to make all kinds of knots on the internet.<br><i>Take card <b>55</b>. Remove cards <b>24</b> and <b>50</b>.</i>";
  } else if (turnerinput == "26,01" || turnerinput == "26,05" || turnerinput == "26,07" || turnerinput == "26,11" || turnerinput == "26,13" || turnerinput == "26,15" || turnerinput == "26,20" || turnerinput == "26,23" || turnerinput == "26,25" || turnerinput == "26,29" || turnerinput == "26,30" || turnerinput == "26,33" || turnerinput == "26,35" || turnerinput == "26,42" || turnerinput == "26,45") {
    turneranswer = "I have to get back to my Ziggy appearance to be able to change it into someone else's.";
  } else if (turnerinput == "26,48") {
    turneranswer = "I already have his appearance.";
  } else if (turnerinput == "27,36" || turnerinput == "27,39" || turnerinput == "27,52" || turnerinput == "36,27" || turnerinput == "36,27" || turnerinput == "39,27") {
    turneranswer = "I put the cat into the potpourri, but he can't stand the smell of it.";
  } else if (turnerinput == "34,36" || turnerinput == "34,39" || turnerinput == "34,52" || turnerinput == "36,34" || turnerinput == "39,34" || turnerinput == "52,34") {
    turneranswer = "A photo of the cat isn't very useful, but he's just so adorable!";
  } else if (turnerinput == "36,54" || turnerinput == "54,36") {
    turneranswer = "I try to make the cat search for Dr Turner's car, but he doesn't budge.";
  } else if (turnerinput == "39,54" || turnerinput == "54,39") {
    turneranswer = "Come on cat, you can do it!<br><i>The cat passes through the parking lot and after a few minutes of hesitation, he stops next to a car and meows decisively.<br>Take card <b>09</b>. Remove cards <b>39</b> and <b>54</b>.</i>";
  } else if (turnerinput == "52,54" || turnerinput == "54,52") {
    turneranswer = "If my obedient cat could smell the doctor, I'm sure he could find his car.";
  } else if (turnerinput == "M20") {
    turneranswer = "The receptionist told me that the man was heading to the metro station. So that's exactly where I'll go.<br><i>Take card <b>LOC02</b>. Remove cards <b>38</b> and <b>LOC01</b> (but keep the other cards from the location on the table).</i>";
  } else if (turnerinput == "M03" || turnerinput == "A29") {
    turneranswer = "So this is where the newspaper lead me. But what now?<br><i>Take card <b>LOC03</b>. Remove cards <b>46</b>, <b>SPO01</b> and <b>LOC02</b> (but keep the other cards from the location on the table).</i>";
  } else if (turnerinput == "A57") {
    turneranswer = "This is the shop that the man went to. Where to from here?<br><i>Take card <b>LOC04</b>. Remove cards <b>47</b> and <b>LOC03</b> (but keep the other cards from the location on the table).</i>";
  } else if (turnerinput == "G54") {
    turneranswer = "I should take the drug to Dr Rose.<br><i>As I arrive to the hospital, I see Dr Rose in the hallway. We move to the side by the coffee machine, so that we can speak in private. I pass her the drug that is supposedly capable of removing our powers. She promises she will send it for analysis immidiately and that she will try to make an antidote. This will take a while, so I should continue with my investigation in the meantime.<br>Take card <b>LOC06</b>. Remove cards <b>16</b> and <b>57</b>.</i>";
  } else if (turnerinput == "C29") {
    turneranswer = "I didn't think that the mayor could be invloved, but if that's what it takes, I'm going to bring the mayor himself down!<br><i>Take card <b>LOC07</b>.</i>";
  } else if (turnerinput == "H50") {
    turneranswer = "I arrive to the 'Starchester Weather Radar' but I don't find anything of interest. But wasn't the magazine address 'Under the Radar'?</i>";
  } else if (turnerinput == "H51") {
    turneranswer = "Finally! This magazine really is under the radar, it wasn't easy to find its whereabouts.<br><i>Take card <b>LOC08</b>. Remove card <b>07</b>.</i>";
  } else if (turnerinput == "C24" || turnerinput == "C30") {
    turneranswer = "<i>We arrive to the spot the tracking app lead us to, and park the car across the street on a safe distance, so that nobody would spot us. We're here just in time to see Dr Turner going to the entrance of the building. An armed soldier guarding the doors greets him there and passes him a potion of some kind. Dr Turner drinks it, and a few moments later the soldier lets him in. Dr Rose turns to me and says:</i><br>This thing what he's drinking must be the drug that professor Martin gave you. My analysis of the drug shows that it's function is indeed to make our powers dissapear, so they must be giving it to people that enter as a precaution. Luckily, I've created an antidote.<br><i>Dr Rose gives me a pill and I swallow it, hopefully gaining immunity to this drug. <br>But then Ron, looking at the entrance with his binoculars, whispers in panic:</i><br>Guys, do you see the symbol on the doors? Rose, you know what it is. It's the symbol of Laki civilisation, the same parasite society that attacked and destroyed Nahukat. My worst nightmares have come true: the Lakis are here.<br><i>I manage to articulate a question, shaking with fear:</i><br>But how are Lakis connected with everything? I thought that the PEI is behind all of this.<br><i>Ron puts the binoculars down and says:</i><br>Now I see what does PEI really stand for: 'Planet Earth Invasion'. They are doing it all over again!<br><i>Take card <b>LOC11</b>. Return all of the tracking app cards into the <b>SPO06</b> envelope.</i>";
  } else if (turnerinput == "DR TURNER" || turnerinput == "DRTURNER" || turnerinput == "DR. TURNER" || turnerinput == "DR.TURNER" || turnerinput == "TURNER") {
    turneranswer = "Dr Turner is in charge of the restricted ward! It took some time to figure out how to read this document, but it was worth it.<br><i>Take card <b>48</b>. Remove cards <b>25</b>, <b>LOC08</b> and <b>SPO05</b>.</i>";
  } else if (turnerinput == "53") {
    turneranswer = "I go straight to the lock, nodding to nurse Barbara. She lets me pass without a word. This power is really cool.<br><i>You can now unlock the ward alphanumeric lock by entering the card number <b>53</b> followed by a number code, separated by a comma, without spaces.</i>";
  } else if (turnerinput == "53,5317" || turnerinput == "53,5,3,1,7") {
    turneranswer = "I enter the code and nothing happens. Did I read the code on nurse Barbara's arm how I was supposed to?";
  } else if (turnerinput == "53,6538" || turnerinput == "53,6,5,3,8" || turnerinput == "53,LIES" || turnerinput == "53,L,I,E,S") {
    turneranswer = "This must be it...<br><i>I enter the code and it works. I will finally get to see what's hidden in this ward.<br>Take card <b>LOC09</b>. Remove cards <b>41</b>, <b>42</b>, <b>49</b>, <b>53</b> and <b>LOC06</b> (but keep the other cards from the location on the table). <br>Return to your Ziggy appearence and use the original Game Book input field.</i>";
  } else if (turnerinput == "42,01") {
  	turneranswer = "There was a girl asking about the ward here earlier. But I didn't let her near it, of course.";
  } else if (turnerinput == "42,02") {
  	turneranswer = "Doctor, that's very kind of you. But I alredy ordered a salad. The delivery is late, and it's the fourth time this month.";
  } else if (turnerinput == "42,03" || turnerinput == "42,06" || turnerinput == "42,08" || turnerinput == "42,10" || turnerinput == "42,14" || turnerinput == "42,17" || turnerinput == "42,24" || turnerinput == "42,26" || turnerinput == "42,34" || turnerinput == "42,39" || turnerinput == "42,40" || turnerinput == "42,41" || turnerinput == "42,44") {
    turneranswer = "Doctor, I'm not sure I understand what you're asking me. Are you here for your round of the ward?";
  } else if (turnerinput == "42,05" || turnerinput == "42,23" || turnerinput == "42,30") {
    turneranswer = "I'm sorry doctor, I don't know this person.";
  } else if (turnerinput == "42,07" || turnerinput == "42,25") {
  	turneranswer = "There was a journalist here some time ago. But I can assure you that I'm not sharing any information with the press.";
  } else if (turnerinput == "42,11") {
  	turneranswer = "Dr Rose doesn't know anything about the ward. I am a professional and I follow the orders.";
  } else if (turnerinput == "42,13") {
  	turneranswer = "I didn't even notice that there was a man with you the other day. That's none of my business.";
  } else if (turnerinput == "42,20") {
  	turneranswer = "I'm waiting for my lunch to be delivered. I ordered a salad ages ago.";
  } else if (turnerinput == "42,27") {
  	turneranswer = "Doctor, It's not that I question your skills, but are you sure wes should have this horrid smell around the patients?";
  } else if (turnerinput == "42,36" || turnerinput == "42,52") {
  	turneranswer = "I konw that you're my superior, but I'm obligated to remind you that it's forbidden to bring animals in the hospital.";
  } else if (turnerinput == "42,53") {
  	turneranswer = "You're here to do your round? You're a little early today.";
  } else if (turnerinput == "42,42") {
  	turneranswer = "I've been here all morning. There was only one girl asking about the ward, nothing unusual other than that.";
  } else if (turnerinput == "42,48") {
  	turneranswer = "Hello Doctor, you came a bit earlier for your round today.";
  } else if (turnerinput == "42,49") {
  	turneranswer = "Oh, you must think I'm very indiscreet. I assure you, I let nobody get close to the ward.";
  } else if (turnerinput == "29,01" || turnerinput == "29,08" || turnerinput == "29,13" || turnerinput == "29,23" || turnerinput == "29,26" || turnerinput == "29,28" || turnerinput == "29,29" || turnerinput == "29,48") {
    turneranswer = "It wouldn't be the best idea to disguise into Dr Turner. The soldier just saw him entering the building.";
	} else {
	  turneranswer = turnerrandom[Math.floor(Math.random()*turnerrandom.length)];
  }
    document.getElementById("turnerAnswer").innerHTML = turneranswer;
}
