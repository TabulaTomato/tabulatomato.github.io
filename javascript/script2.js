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

function bundyKeyPress(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("bundyButton").click();
        return false;
    }
    return true;
};

function bookPtwoFunction() {
	var y = document.getElementById("bookPtwoText").value;
  var answertwo;
  var guitaraudio = document.getElementById("guitar");
  var unknownmanContainer = document.getElementById("unknownmanField");
  var deliveryguyContainer = document.getElementById("deliveryguyField");
  var turnerContainer = document.getElementById("turnerField");
  var bundyContainer = document.getElementById("bundyField");
  if (y == "01") {
  		answertwo = "I will do everything it takes to find my mother.";

      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "02") {
  		answertwo = "Some Chinese takeout food that Alison shared with me.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "03") {
  		answertwo = "A duct tape roll that was obviously used to silence professor Martin.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "04") {
  		answertwo = "A tall tree in front of Wild Things Shop.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05") {
  		answertwo = "A security guard in the mayor's office. He seems a bit tired.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "06") {
  		answertwo = "A typical IV stand with a removable top. Well, it's a bit big to carry around, but I guess I could fit the top in my backpack. Why am I taking it? I have no idea. <br><i>Take card <b>50</b>. Remove card <b>06</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "07") {
  		answertwo = "The journalist my mother had a meeting with at the hotel.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "08") {
  		answertwo = "My ability to connect to animals and plants. It's even stronger now than it was before.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "09") {
  		answertwo = "Dr Turner's car in front of the hospital. It is new and seems very expensive.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "10") {
  		answertwo = "The touchscreen lock that I now have access to. It requires a swipe pattern to unlock the door.<br><i>You can now unlock the touchscreen lock by entering the card number <b>10</b> followed by the sequence of numbers in the order of the swipe pattern. The card number and the numbers sequence should be separated by a comma, without spaces.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11" || y == "65") {
  		answertwo = "Dr Rose Tobin was the physician of the original crew that found the planet Earth. A fellow Nakuhatlian, as are Mary and Ron. She is working at the hospital and is a very respected member of the community. But even though she likes it here on Earth, she misses our people immensely.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      mayorguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "12") {
  		answertwo = "The hospital room is on the first floor, above the hospital's parking lot.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "13") {
  		answertwo = "The man that was asking about me in the hotel. The receptionist described him as a well built man in a leather jacket with bright coloured hair and sunglasses.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "14") {
  		answertwo = "A handheld metal detector, attached to the security guard's belt. There isn't a chance that I could take it without him noticing.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "15") {
  		answertwo = "A patient lying in a coma. Her medical chart reads: <br><i>Patient: Jenna Kane <br>Diagnosis: Heavy metal poisoning with kidney, liver and heart damage, severe brain dysfunction <br>Illnes cause: Unknown <br>Current state: Patient entered a state of extreme unresponsiveness 22 hours after hospitalisation</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "16") {
  		answertwo = "A chemical that the people that hired professor Martin gave him to use on my mother. I wonder what does it do... I'm sure that Dr Rose could know more about it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "17") {
  		answertwo = "A touchscreen lock that opens the doors to mayor's office. Unfortunately, it's impossible to get past the security guard.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "18") {
  		answertwo = "Professor Martin, well and alive. He better start to explain some things.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "19") {
  		answertwo = "A coin I found in the metro station.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "20") {
  		answertwo = "The delivery guy that delivered the Chinese takeout to the 'Under the Radar' office.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "21") {
  		answertwo = "There is a newspaper on the table. The top page has been torn out. There are some barely visible indentations on the second page.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "22") {
  		answertwo = "The metal detector is now free to use any way I want to.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "23") {
  		answertwo = "There is still no sign from my mother. But I feel that we're getting closer to the truth.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "24") {
  		answertwo = "The rope that was used to tie up professor Martin.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      mayorguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25") {
  		answertwo = "Alison Clarke is the journalist that had a meeting with my mother.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "26") {
  		answertwo = "My amazing new ability to make me look like anybody in this world. Absolutely crazy.<br><i>To use this ability, enter ability card number <b>16</b> followed by the card number of the person you want to take appearance of in the input field, separated by a comma.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "27") {
  		answertwo = "A potpourri bowl with a smell so intense that it could bring the dead back to life.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "28") {
  		answertwo = "My mother's super useful gem. It's a stone from our home planet that connects us, the Nakuhatlians to our true - in lack of a better term - supernatural selves.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "29") {
  		answertwo = "The soldier guarding the entrence is carrying a huge rifle.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30" || y == "66") {
  		answertwo = "Ron was the technology specialist in my parents' crew. He took care of the ship's system and is extremly handy with everything in the cyberspace. He took the job in the opera because of his love for the human art, but is still working on fixing the communication system with Nahukat mothership. Without success, unfortunately.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "31") {
  		answertwo = "A street musician completely focused on his performance. He's ignoring my efforts to draw his attention.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
      guitaraudio.play();
  } else if (y == "32") {
  		answertwo = "The shop security camera is looking right at Lady's Alley across the road. But it's high on the wall, out of my reach.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "33") {
  		answertwo = "Starchester's mayor Bundy has been running the city for 10 years already. He's popular enough, keeping the people of Starchester entertained with festivals and expensive city projects. However, a part of the city population accuse him of favoring certain companies and providing them city work, with saving a part of the profit for himself. They don't have any solid evidence on this kind of activity, of course.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "34") {
  		answertwo = "The phone Mary gave me is equipped with a tracking software which connects it with the crew's internal communication system. Mary, Ron and Rose know where I am at all time.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "35") {
  		answertwo = "Jenna Kane is out of coma, awake and capable of speaking.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "36") {
  		answertwo = "A cat lying on Alison Clarke's desk. He's purring in peace, not involving in the busy office rhythm around him.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "37") {
  		answertwo = "A microSD card from the shop security camera.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "38") {
  		answertwo = "A receptionist in the Deep Lake Hotel lobby.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "39") {
  		answertwo = "Cat shouldn't be thirsty anymore. He drank half of that bucket!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "40") {
  		answertwo = "With the duct tape on the phone, it will be easy to stick it somewhere.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "41") {
  		answertwo = "There are a lot of cracks in the wooden floor. Who would think that the city opera is in such a bad state?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42") {
  		answertwo = "Nurse Barbara is in the reception booth in the hospital. Nothing can pass her eye unnoticed.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "43") {
  		answertwo = "The street musician's guitar case is lying on the street. There is some cash and a couple of musicians CDs inside.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "44") {
  		answertwo = "A clearly visible smudge appears on the touchscreen.<br><i>You can now unlock the touchscreen lock by entering the card number <b>44</b> followed by the sequence of numbers in the order of the swipe pattern. The card number and the numbers sequence should be separated by a comma, without spaces.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
  } else if (y == "45") {
  		answertwo = "Diana von Raus is one of world's most famous opera singers. She is the lead in the Starchester Opera new production of 'Carmen'. The premiere is scheduled for tonight and you can cut the atmosphere with a knife.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "46") {
  		answertwo = "The super strong sleeping pills that Dr Rose gave me.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "47") {
  		answertwo = "The street musician stopped playing. I can finally speak to him.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "48") {
  		answertwo = "Dr Turner is very respected in the hospital. But probably his colleagues don't know everything about his work.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "49") {
  		answertwo = "I can clearly see what did nurse Barbara write on her arm. There is a drawing of a bird and some words written next to it:<br><b>Graham - Foster<br>Miller - Harris<br>Evans - Campbell<br>Holmes - Lewis.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "50") {
  		answertwo = "The IV stand top that I'm for some reason carrying in my backpack.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "51") {
  		answertwo = "A standard HB pencil with the Deep Lake Hotel logo.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "52") {
  		answertwo = "Cat now does whatever I want him to.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "53") {
  		answertwo = "The door to this ward is protected by an alphanumeric lock. But even if I manage to figure out the code, nurse Barbara gives me the scary eye every time I approach it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "54") {
  		answertwo = "A stunning golden ring I found in the wooden floor.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "55") {
  		answertwo = "The IV stand top I've been carrying around with a piece of rope tied to it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "56") {
  		answertwo = "There is a bucket full of water that the cleaning staff left in the hallway.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "57") {
  		answertwo = "Chinese noodles are now 'seasoned' with some sleeping drug from the pills.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "58") {
  		answertwo = "To enter the PEI base, it's necessary to pass the heavily armed soldier.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "59") {
  		answertwo = "White powder makeup from the opera dressing room.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "60") {
  		answertwo = "Diana von Raus' private phone number. Not many people have this!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "61") {
  		answertwo = "The tree bend one if it's branches down to the floor.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "62") {
  		answertwo = "The message the unknown man wrote on the newspaper is now clearly visible.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "63") {
  		answertwo = "The cat is fully hydrated and ready to listen to my commands.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "64") {
  		answertwo = "The document is written by a local oil company called 'Petroleum Extraction Industries' or PEI. It was founded only a few years ago but it quickly became one of the richest companies in the country. The document is dated from two years ago and it lists all the PEI oil wells planned for construction in the county, and all the urban planning documents that need to be changed to be able to construct them. Many of them were planned in inhabited areas or the ones protected due to water sources and biodiversity. There is even a map showing all the locations included in the document. If all of these wells have really been constructed, it's practicaly an environmental disaster. And mayor Bundy was involved in it.<br><i>Take card <b>SPO05</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "67") {
  		answertwo = "The hospital room is on the first floor, above the hospital's parking lot.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "LOC01" || y == "loc01") {
  		answertwo = "The hotel lobby is almost empty, with just a couple of guests and a woman <b>(38)</b> behind the reception desk. There is a pencil <b>(51)</b> on the desk just waiting for me to take it. The side tables are decorated with potpourri <b>(27)</b> and there is a newspaper <b>(21)</b> left on one of it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "LOC02" || y == "loc02") {
      answertwo = "The Deep Lake metro station isn't very crowded in this time of day. I can spot a coin <b>(19)</b> on the floor that I hope will bring me some luck in my quest. There is also a metro map <b>(SPO01)</b>on the wall, of course.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "LOC03" || y == "loc03") {
      answertwo = "Feather Square is located in the old part of the city and it's very charming with it's old cobblestone pavement and pigeons that the square was named after. Right next to the metro station entrance there is a street musician <b>(31)</b> with his guitar case <b>(43)</b> lying on the floor next to him.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "LOC04" || y == "loc04") {
      answertwo = "Wild Things Shop is closed. A beautiful tall tree <b>(04)</b> is right in front of the shop's window. There is a security camera <b>(32)</b> on the wall, that could have some interesting footage of the man I'm searching.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "LOC05" || y == "loc05") {
      answertwo = "I'm shocked to see professor Martin <b>(18)</b> tied up to a chair. I untie him immidiately, of course, and end up with a piece od rope <b>(24)</b> he was tied with. There is also some duct tape <b>(03)</b> used to keep him quiet on the floor.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "LOC06" || y == "loc06") {
      answertwo = "The Opera staff is in a chaotic state of mind, so I escape to the dressing room. But the atmosphere isn't any calmer there. The famous opera singer, Diana von Raus <b>(45)</b> is walking around the room's cracked floor <b>(41)</b> freaking out, and Ron <b>(30)</b>, your newfound Nakuhat compatriot, is trying to calm her enough to take her to the sound check for tonight's premiere. The costumes are not ready yet, but the tables are filled with theatre makeup <b>(59)</b>.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "LOC07" || y == "loc07") {
      answertwo = "I'm not a big fan of hospitals, but the Starchester Central Hospital is a very modern and well equipped facility. Dr Rose <b>(11)</b>, the ex member of my parents space mission crew, is in the hall checking her patients' charts. A nurse <b>(42)</b> in charge of the reception desk is sitting behind it. Some cleaning appliances are left in the hallway, including a bucket full of water <b>(56)</b>. There is an alphanumeric lock <b>(53)</b> for a door right of the reception desk with no indication of what is behind it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "LOC08" || y == "loc08") {
      answertwo = "The mayor's office is peaceful, not a lot of work seems to be taking place here. There is a security guard <b>(05)</b> in the entrance and he's carrying a metal detector <b>(14)</b>. The doors to mayor's office are closed, and there is a touchscreen lock <b>(17)</b> next to it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "LOC09" || y == "loc09") {
      answertwo = "The 'Under the Radar' office is busy, with phones ringing and people talking in the same time. I can see Alison Clarke <b>(25)</b> sitting at one of the desks. On the middle of her desk there is a cute cat <b>(36)</b> that seems to be a part of 'Under the Radar' family. As I enter the office. I pass by a delivery guy <b>(20)</b> that just dropped some Chinese takeout <b>(02)</b>. As soon as he leaves the food, the runs out of the office.<br><i>Remove card <b>07</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "LOC10" || y == "loc10") {
      answertwo = "I finally enter the secretive limited access ward. I enter the first room and find a patient <b>(15)</b> lying in one of the beds. She is either sleeping or she's unconscious. There is some standard medical equipment in the room, like an IV stand <b>(06)</b>. The window <b>(12)</b> is overlooking the hospital parking lot.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "LOC11" || y == "loc11") {
      answertwo = "There aren't many cars parked in front of the hospital, especially not a lot of expensive ones like the car <b>(09)</b> that Dr Turner came with.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "LOC12" || y == "loc12") {
      answertwo = "There is no indication of PEI on the building. The only thing standing out of the ordinary are the unusual symbols on the entrance doors <b>(58)</b>. And a heavily armed soldier <b>(29)</b> in front of it, of course.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "SPO01" || y == "spo01") {
      answertwo = "The Starchester Metro map is fixed to the wall of the metro station.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "SPO02" || y == "spo02") {
      answertwo = "It's a video recording of a man entering a building on the street.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "SPO03" || y == "spo03") {
      answertwo = "Another video recording of a man entering a building on the street.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "SPO04" || y == "spo04") {
      answertwo = "It's the last video recording of a man entering a building on the street.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "SPO05" || y == "spo05") {
      answertwo = "The map shows the Starchester county with locations of PEI oil wells.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "SPO06" || y == "spo06") {
      answertwo = "GPS tracking system shows the movements of Dr Turner's car.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,01") {
      answertwo = "I feel like I've grown in these last few days. Now that I know the truth about my mother and I, so many things make more sense.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,02") {
      answertwo = "I'm not very hungry, the sandwich I had in the bus on the way here was huge.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,03") {
      answertwo = "It's always useful to have a roll of duct tape with you.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,04") {
      answertwo = "If I could climb up this tree, I could reach the camera. But it's branches are to high, I can't get up there.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,05") {
      answertwo = "The security guard looks like his shift here was long and tiresome.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,06") {
      answertwo = "Just a typical IV stand you can see in every hospital.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,07") {
      answertwo = "I'm sure this journalist knows something about my mother. I have to find a way to reach her.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,08") {
      answertwo = "I'm so used to having this little power now that it's getting hard to imagine life without it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,09") {
      answertwo = "I don't know a lot about cars, but I can tell that this one is super expensive.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,10") {
      answertwo = "I sure would like to take a look around mayor's office.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,11") {
      answertwo = "Dr Rose is a very nice and calm woman. I wouldn't be surprised if she was the most popular doctor around here. During her earthly career she managed to get funding for three research studies already, where she could carefully implement some of advanced Nakuhatlian medical knowledge.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,12") {
      answertwo = "The window is looking right at the hospital parking lot. Not much of a view, really.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,13") {
      answertwo = "This man is following me? He has to be connected to the disappearance of my mother. Well, I'm not affraid of him! OK, maybe just a little bit.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,14") {
      answertwo = "I have a feeling that I could find a good use for this metal detector. But how can I get it?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,15") {
      answertwo = "This poor woman is in a coma. If only I could wake her up somehow...";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,16") {
      answertwo = "I should give this to Dr Rose for analysis. If somebody can figure out what this is, it's her.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,17") {
      answertwo = "The untouchable touchscreen lock. Whenever I get near it, the security guard politely asks me to leave. How could I get around this guy?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,18") {
      answertwo = "Professor Martin betrayed my mother. But I guess that the fact he was kidnapped is punishment enough for the time being.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,19") {
      answertwo = "A coin on the floor? It's my lucky day!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,20") {
      answertwo = "The delivery guy seems to be in a hurry. He leaves the takeout on the table and runs out of the office in a matter of seconds.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,21") {
      answertwo = "The front page it obviously torn out. It seems that something was written on it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,22") {
      answertwo = "Voila! The metal detector is all mine now!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,23") {
      answertwo = "Oh mother...what did you get into? I have to find you, and I have to do it fast!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,24") {
      answertwo = "A piece of rope is something every young lady should have in her bag at all times, isn't it?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,25") {
      answertwo = "Now that I've found you Alison, you better talk!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,26") {
      answertwo = "OK, I have to admit that this ability is even cooler than the other one! It does make me wonder about all the times my mother must have used it. Now that I think of it, probably it wasn't David Bowie who surprised me with a cake for my 10th birthday.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,27") {
      answertwo = "This smells way too intense. Every time I open my backpack I almost suffocate. Why am I carrying it around again?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,28") {
      answertwo = "This gem is my most precious belonging right now.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,29") {
      answertwo = "I can't pretend not to care that this guy is fully armed while I don't have anything to protect me. But I can't stop now!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,30") {
      answertwo = "Ron is great. He's the funniest of the crew, and even though I've just met him, I feel like we know each other for ages. But his light hearted nature doesn't diminish how dangerous he can be if he wants to...Give this guy a computer and he can enter any system in just a few clicks.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,31") {
      answertwo = "The guitar player is starting to annoy me a little. Can't he stop just for a moment so that I can ask him one little question?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
      guitaraudio.play();
  } else if (y == "01,32") {
      answertwo = "If only I could reach it! Well, I guess that they put them so high for a reason.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,33") {
      answertwo = "I don't know a lot about the mayor, except that he's been ruling the city for a long time now. And i heard that there are some corruption accusations against him. But it hasn't really caused a big fall of his popularity.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,34") {
      answertwo = "The phone that Mary gave me has a tracking app that is directly connected to the crew's internal communication system. Knowing that they can see where I am makes me feel a lot safer.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,35") {
      answertwo = "Wow, I've awaken a woman from a coma! I think Dr Rose would be proud of me.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,36") {
      answertwo = "I wish that I could have a cat too! But my dog Laika wouldn't like it a lot.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,37") {
      answertwo = "This microSD card must be holding some informative footage.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,38") {
      answertwo = "I have to leave the hotel a good review, she's really helpful.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,39") {
      answertwo = "You are one thirsty cat!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,40") {
      answertwo = "I hope that the tape won't leave sticky traces on my new phone.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,41") {
      answertwo = "There are so many cracks in this floor that if you wanted to search for something you wouldn't know where to start.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,42") {
      answertwo = "This nurse isn't very helpful, is she?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,43") {
      answertwo = "The musician's guitar case doesn't have a lot of cash in it. People just don't respect live music like they used to.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,44") {
      answertwo = "Alright, the pattern smudge is super clear.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,45") {
      answertwo = "Wow, I feel embarrased in front of such an amazing singer! And I just love her German accent. She's a true diva!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,46") {
      answertwo = "Thanks Rose, I think I'll find a way to use this.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,47") {
      answertwo = "Finally the guy wants to talk.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,48") {
      answertwo = "What could Dr Turner be working on in the hospital? I don't think it's anything great if there is all this mystery around it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,49") {
      answertwo = "Hmmm, what could this mean? I have an impression I've seen these names somewhere already.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,50") {
      answertwo = "A beatiful item in my eclectic backpack collection.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,51") {
      answertwo = "A pencil can always come in handy.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,52") {
      answertwo = "Sorry Cat, but you will have to work for me for a little while.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,53") {
      answertwo = "I wonder what's hiding behind this lock...a zombie ward?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,54") {
      answertwo = "The ring is definitely something, but I prefer my gem.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,55") {
      answertwo = "What a nice anchor I've created!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,56") {
      answertwo = "The water in the bucket seems clean, like it hasn't been used already.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,57") {
      answertwo = "Whoever eats this will take a good long nap after lunch.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,58") {
      answertwo = "I don't know what will I find in this bunker, but I know I have to go inside.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,59") {
      answertwo = "This white makeup is not really my style, but I'll take it anyway. You never know what will become trendy next.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,60") {
      answertwo = "Diana von Raus told me she will return the favor however I want to. I might have an idea what to do with this number.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,61") {
      answertwo = "This makes it more than easy to climb this tree. I may not be a skilled climber, but I have my ways.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,62") {
      answertwo = "What could this message mean? What was it that the receptionist said about the man?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,63") {
      answertwo = "Now what could I do with an obedient cat that drank a little too much water?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,64") {
      answertwo = "Maybe this is what my mother found out. Could it be that it's the mayor who's behind her disappearance?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,67") {
      answertwo = "The window is a bit too high from the ground to jump from. At least for me.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,LOC01" || y == "01,loc01") {
      answertwo = "I should see if somebody in this hotel remembers my mother.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,LOC02" || y == "01,loc02") {
      answertwo = "The man who was asking about me took the metro. I should follow him, he might bring me to my mother.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,LOC03" || y == "01,loc03") {
      answertwo = "This is the place where the man got off the metro. But where did he go next?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,LOC04" || y == "01,loc04") {
      answertwo = "So, the man went to this shop. But where did he go from here?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,LOC05" || y == "01,loc05") {
      answertwo = "Professor Martin! So this is where he disappeared to. But where is my mother?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,LOC06" || y == "01,loc06") {
      answertwo = "The Opera is busy, everybody is getting ready for tonight's premiere. Ron is occupied with Diana von Raus, I don't know will he even have time for me.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,LOC07" || y == "01,loc07") {
      answertwo = "The hospital is quiet enough. Only a few patients in the waiting room and a nurse on the reception desk. Dr Rose is here too.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,LOC08" || y == "01,loc08") {
      answertwo = "It seems as there are not a lot of people in the mayor's office. The security guard is taking his job seriously, not leaving his position and looking around as if something was actually happening here.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,LOC09" || y == "01,loc09") {
      answertwo = "'Under the Radar' office is vibrant with young employees chatting and music coming from the radio. I think I see Alison Clarke at one of the tables.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,LOC10" || y == "01,loc10") {
      answertwo = "There is only one patient in the room, and she's unconscious.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,LOC11" || y == "01,loc11") {
      answertwo = "This car must be super expensive. Dr Turner is sure doing well.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,LOC12" || y == "01,loc12") {
      answertwo = "Hmmm, maybe I'm not really well equipped for this mission. I mean, that's a serious weapon that soldier has.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,SPO01" || y == "01,spo01") {
      answertwo = "Starchester's Metro is not very big. I should be able to figure out the way the man took.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,SPO02" || y == "01,spo02" || y == "01,SPO03" || y == "01,spo03" || y == "01,SPO04" || y == "01,spo04") {
      answertwo = "There is a guy entering a door in this video. Is it my guy?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,SPO05" || y == "01,spo05") {
      answertwo = "There is no way that PEI could have constructed all these wells here if there hadn't been some serious urban planning regulations changes made.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "01,SPO06" || y == "01,spo06") {
      answertwo = "All we have to do is follow Dr Turner's car.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,01") {
      answertwo = "How can I help you, young lady?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,02" || y == "05,57") {
      answertwo = "Actually, I didn't have lunch today...But I can't take food from visitors like that. It would be completely unprofessional.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,03" || y == "05,27" || y == "05,34" || y == "05,56" || y == "05,59") {
      answertwo = "I'm sorry, but I don't understand why are you asking me this.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,05") {
      answertwo = "I'm working double shift today and I still didn't have lunch. Lily from marketing was supposed to bring me a hamburger but she's stuck with work for the campaign and she won't be able to take a break for at least another hour. I swear to you lady, I will die of hunger!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,07" || y == "05,25") {
      answertwo = "Yes, I think I did see a journalist fitting that description around here. But that's not unusual, there are always journalists here. I couldn't tell you who is she working for, though.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,08") {
      answertwo = "Hmm, sure. I believe you. Making plants and animals do stuff, why not.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,10" || y == "05,17" || y == "05,44") {
      answertwo = "Security level is high here, as you can see. And since the mayor is not here, I will ask you to move from his office doors.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,11" || y == "05,65") {
      answertwo = "Actually, I know Dr Tobin. She was taking care of my wife when she was at the hospital. Excellent doctor, that one.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,13") {
      answertwo = "It's possible that I saw somebody matching this description talking to the mayor before, but it's not m job to talk about mayor's meetings.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,14") {
      answertwo = "It's a brand new model with a super high sensitivity. That's right, no metal objects will pass undetected by me, I assure you!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,16") {
      answertwo = "What is it, some kind of perfume? I hope it's not drugs, young lady!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,20") {
      answertwo = "Maybe I should order some food...who knows how long will it take till Lily from marketing brings me my hamburger.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,23") {
      answertwo = "If I'm not mistaken, she did visit the mayor once. A month ago, maybe more.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,24") {
      answertwo = "Young lady, why do you have rope with you?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,26") {
      answertwo = "I think you've watched a few too many superhero films, young lady.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,28") {
      answertwo = "What a stunning jewel. I wish I could afford something like this for my wife.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,30" || y == "05,66") {
      answertwo = "Why would I know some guy that works at the Opera?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,33") {
      answertwo = "I'm sorry, but the mayor is not here. I don't expect he will be returning to the office today, he has a few meetings to attend to.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,36" || y == "05,39" || y == "05,52" || y == "05,63") {
      answertwo = "That's a nice cat. Do people carry cats around with them these days?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,41") {
      answertwo = "I'm sorry, but I don't understand why are you asking me about this.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,42" || y == "05,48") {
      answertwo = "Why would you expect me to know all of the hospital staff?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,45" || y == "05,LOC07" || y == "05,loc07") {
      answertwo = "I'm not a fan of opera but my wife wants to see the new production of 'Carmen'. She says that we can't miss seeing Diana von Raus. I don't think I'll be able to escape it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,46") {
      answertwo = "I don't have problems sleeping. Actually, I'm usually so tired after work that I fall asleep almost immidiately after dinner.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,49") {
      answertwo = "That doesn't mean anything to me.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,53") {
      answertwo = "Why wouldn't there be a restricted ward in the hospital? You young people think that everything should be in your reach.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,63") {
      answertwo = "These names mean nothing to me.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,64" || y == "05,SPO05" || y == "05,spo05") {
      answertwo = "<i>I decide it's not a good idea to show the security guard that I'm in possession of mayor's documents.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,LOC07" || y == "05,loc07") {
      answertwo = "The hospital needs renovation and new equipment. But we have some of the best doctors in the country.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,LOC08" || y == "05,loc08") {
      answertwo = "The mayor isn't here, I'm affraid. And we're not expecting him today. If you want a guided tour around the building, there is one starting in 15 minutes.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,LOC09" || y == "05,loc09") {
      answertwo = "This must be some new generation Z magazine. At least I've never heard of it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "07,01" || y == "07,02" || y == "07,03" || y == "07,04" || y == "07,05" || y == "07,06" || y == "07,07" || y == "07,08" || y == "07,09" || y == "07,10" || y == "07,11" || y == "07,12" || y == "07,13" || y == "07,14" || y == "07,15" || y == "07,16" || y == "07,17" || y == "07,18" || y == "07,19" || y == "07,20" || y == "07,21" || y == "07,22" || y == "07,23" || y == "07,24" || y == "07,25" || y == "07,26" || y == "07,27" || y == "07,28" || y == "07,29" || y == "07,30" || y == "07,31" || y == "07,32" || y == "07,33" || y == "07,34" || y == "07,35" || y == "07,36" || y == "07,37" || y == "07,38" || y == "07,39" || y == "07,40" || y == "07,41" || y == "07,42" || y == "07,43" || y == "07,44" || y == "07,45" || y == "07,46" || y == "07,47" || y == "07,48" || y == "07,49" || y == "07,50" || y == "07,51" || y == "07,52" || y == "07,53" || y == "07,54" || y == "07,55" || y == "07,56" || y == "07,57" || y == "07,58" || y == "07,59" || y == "07,60" || y == "07,61" || y == "07,62" || y == "07,63" || y == "07,64" || y == "07,65" || y == "07,66" || y == "07,67" || y == "07,LOC01" || y == "07,loc01" || y == "07,LOC02" || y == "07,loc02" || y == "07,LOC03" || y == "07,loc03" || y == "07,LOC04" || y == "07,loc04" || y == "07,LOC05" || y == "07,loc05" || y == "07,LOC06" || y == "07,loc06" || y == "07,LOC07" || y == "07,loc07" || y == "07,LOC08" || y == "07,loc08" || y == "07,LOC09" || y == "07,loc09" || y == "07,LOC10" || y == "07,loc10" || y == "07,LOC11" || y == "07,loc11" || y == "07,LOC12" || y == "07,loc12" || y == "07,SPO01" || y == "07,spo01" || y == "07,SPO02" || y == "07,spo02" || y == "07,SPO03" || y == "07,spo03" || y == "07,SPO04" || y == "07,spo04" || y == "07,SPO05" || y == "07,spo05") {
      answertwo = "<i>You haven't met Alison yet. You can't talk to her, you can only talk about her.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,01") {
      answertwo = "Ziggy, you remind me so much of your mother. You're just as brave as she is. I know it must be hard for you these last couple of days. Did you eat today? Have you been sleeping enough? Here, take these, just in case.<br><i>Dr Rose gives me some sleeping pills. I've been sleeping better than I expected, but I still take them. You never know.<br>Take card <b>46</b> (the sleeping pills) if you haven't already.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,02") {
      answertwo = "Thanks, I already had my lunch.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,03") {
      answertwo = "That's OK, we have a bunch of tape in our storage room.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,05") {
      answertwo = "Oh yes, what a nice family. His wife was my patient a few years ago. Too bad he has to work for that slimy mayor Bundy.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,06") {
      answertwo = "We have one next to each bed. It's basic hospital equipment, as I'm sure you're aware of.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,07") {
      answertwo = "I've never heard of this journalist. But you know what, ask Ron about it. If anybody can dig up something on somebody, it's him. He should be in the Opera now.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,08") {
      answertwo = "Yes, this is one of the funniest powers we have. I play chess with my philodendron all the time!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,09") {
      answertwo = "We should follow this car!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,10" || y == "11,17" || y == "11,44") {
      answertwo = "Breaking locks was always something your mother was better in than me. I'm sure you can think of something.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,11") {
      answertwo = "I've tried to move on, but the truth is that I'm still thinking about Nakuhatlians every day. Ron hasn't stopped working on the communication system, but we haven't progressed a lot in all these years.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,12" || y == "11,67") {
      answertwo = "The view is not the best. What can we do.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,13") {
      answertwo = "This man is asking about you? He must be working for the same people who took your mother. We have to figure out where could they be hiding her! All this must be so much pressure on you. Have you been sleeping OK? Take these in case you'll need them<br><i>Dr Rose gives me some sleeping pills. I've been sleeping better than I expected, but I still take them. You never know.<br>Take card <b>46</b> (the sleeping pills) if you haven't already.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,14") {
      answertwo = "I'm not really sure how could I help you steal a metal detector.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,15") {
      answertwo = "I can't help you with that. There isn't really anything you can do to wake somebody up from a coma. If you find a way, sure let me know how you did it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,20") {
      answertwo = "I don't order food a lot. A home cooked meal is much better for your health, you know.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,22") {
      answertwo = "You managed to get that metal detector? Good for you, Ziggy!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,23") {
      answertwo = "You can only imagine how much I miss your mother. And to see you here now, it's unbelievable! We will find Lena, don't worry! How are you holding up? Have you been getting any sleep these last few days? Take these if you'll need to.<br><i>Dr Rose gives me some sleeping pills. I've been sleeping better than I expected, but I still take them. You never know.<br>Take card <b>46</b> (the sleeping pills) if you haven't already.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,24") {
      answertwo = "A piece of rope? Seriously, how do you fit all this stuff in that little backpack?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,25") {
      answertwo = "So Lena contacted Alison because of her article? It looks as if this story could be bigger than we thought.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,26") {
      answertwo = "It's the best, isn't it? Look!<br><i>And just like that, my identical twin appeared in front of me. I almost screamed, when she turned back to Dr Rose and out a hand on my mouth.</i><br>Ha ha! You should have seen your face!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,27") {
      answertwo = "I didn't think that it's possible, but there is such a thing as too much cinnamon.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,28") {
      answertwo = "Keep that with you all the time. And don't lose it, we don't have an unlimitied number of it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,29") {
      answertwo = "He is dangerous, but when you use your powers you're even more dangerous, Ziggy. Go get him! I will go to check around, there must be another entrance into this building. Ron, you stay here, keep guard and wait for us in the car.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,30") {
      answertwo = "Ron and I are best friends. He is amazing with techology, but without the right equipment even he can't fix the communication system of our ship. One day, maybe.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,33") {
      answertwo = "The mayor is corrupted, I'm sure of it. The fact that all of the big projects in the city go to the hands of contractors that his cousins work for can't be a coincidence. Nor is all the money that keeps stacking in his bank account.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,34") {
      answertwo = "I'm glad you have this phone with you. Call me whenever you want.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,35") {
      answertwo = "You woke her up? That's really impressive.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,36" || y == "11,39" || y == "11,52" || y == "11,63") {
      answertwo = "You have a cat? Be careful not to show it to nurse Barbara, she will take it and never let it go. She is CRAZY about cats.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,40") {
      answertwo = "What are you doing with your phone? Take care of it, it has a tracking app so that we can know where you are.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,41") {
      answertwo = "I know, Ron always complains on the terrible state the Opera is in. What can I tell you, the mayor invests in many things, but culture isn't one of them.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,42") {
      answertwo = "That nurse is scary. I swear that she never leaves the desk. I don't know who is in charge of this restricted ward, but I've seen her entering it. Her memory must be really poor because she has the code written on her arm and she always checks it before going in. You can't see it now because of the long sleeved scrub she's wearing, but it's there.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,44") {
      answertwo = "Well Ziggy, aren't you a clever girl.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,45") {
      answertwo = "She is incredibly talented, without a doubt. But Ron tells me that she's quite a diva.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,46") {
      answertwo = "Don't take more than one at a time, they are super strong.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,48") {
      answertwo = "So Dr Turner is in charge of the ward? He is acting a little suspicious lately, now that I think about it. Always looking behind his shoulder, if you know what I mean.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,49") {
      answertwo = "You managed to get a look at her arm? Way to go Ziggy! But I'm affraid I can't help you with figuring this out.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,50") {
      answertwo = "Sure, take hospital equipment. You need it more than our patients, don't you?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,53") {
      answertwo = "I don't know the code. They've changed it a few months ago and the whole ward became a restricted zone. To tell you the truth, I don't even know which doctor is in charge of it. I've only seen nurse Barbara entering it. I think she has a reminder of the code written on her arm because she always checks it before putting the code into the lock. I didn't get a good look at it because she's always wearing this long sleeved jacket.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,54") {
      answertwo = "It's a beautiful ring. But Ziggy, you should return it to it's owner.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,55") {
      answertwo = "Please return the IV stand top as soon as you're finished with this, whatever it is.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,56") {
      answertwo = "Oh, Mike from cleaning must have prepared this to wash the floors with it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,57") {
      answertwo = "Are you one of those people who can't take medicine unless they mix them with their food?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,58") {
      answertwo = "Ziggy, you try to get pass the soldier somehow and I'll check around to see if there's another entrance somewhere. Ron, you keep guard in the car.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,59") {
      answertwo = "I don't wear makeup. Especially not white face powder, that would just scare my patients.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,60") {
      answertwo = "You have Diana von Raus' private number? I'm sure that some people would do anything to have it in their possession.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,63") {
      answertwo = "These names look familiar...";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,64") {
      answertwo = "So, the mayer is responsible for construction permits that PEI got for all of their oil wells? Some people would do anything for money. I'm not surprised that Lena was looking into this.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,66") {
      answertwo = "Ron is at the Opera. If you need anything, he's your man. Especially if it concerns getting information on people.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,LOC06" || y == "11,loc06") {
      answertwo = "Ron is at work now. If you need anything, he'll surely help you out.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,LOC07" || y == "11,loc07") {
      answertwo = "It's a nice place to work. But you know that I will never forget my old life and our people.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,LOC08" || y == "11,loc08") {
      answertwo = "Did you notice how the office is renovated? Guess who paid for the new rare marble floor. Us, the taxpayers.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,LOC09" || y == "11,loc09") {
      answertwo = "I've never read this magazine. Did you find out how is it connected with your mother?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,LOC10" || y == "11,loc10") {
      answertwo = "You're telling me that there are people in coma lying in this ward? What are they suffering from?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,LOC11" || y == "11,loc11") {
      answertwo = "Some people sure love to spend their money.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,LOC12" || y == "11,loc12") {
      answertwo = "OK, we can't give up now. I will see if there is another way to get in here. Ron, you stay in the car and be ready for our escape. Ziggy, you try to get inside from here. And take care, everybody.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "11,SPO05" || y == "11,spo05") {
      answertwo = "PEI sure spread in the area. Aren't these wells way too close to some of the villages?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "13,01" || y == "13,02" || y == "13,03" || y == "13,04" || y == "13,05" || y == "13,06" || y == "13,07" || y == "13,08" || y == "13,09" || y == "13,10" || y == "13,11" || y == "13,12" || y == "13,13" || y == "13,14" || y == "13,15" || y == "13,16" || y == "13,17" || y == "13,18" || y == "13,19" || y == "13,20" || y == "13,21" || y == "13,22" || y == "13,23" || y == "13,24" || y == "13,25" || y == "13,26" || y == "13,27" || y == "13,28" || y == "13,29" || y == "13,30" || y == "13,31" || y == "13,32" || y == "13,33" || y == "13,34" || y == "13,35" || y == "13,36" || y == "13,37" || y == "13,38" || y == "13,39" || y == "13,40" || y == "13,41" || y == "13,42" || y == "13,43" || y == "13,44" || y == "13,45" || y == "13,46" || y == "13,47" || y == "13,48" || y == "13,49" || y == "13,50" || y == "13,51" || y == "13,52" || y == "13,53" || y == "13,54" || y == "13,55" || y == "13,56" || y == "13,57" || y == "13,58" || y == "13,59" || y == "13,60" || y == "13,61" || y == "13,62" || y == "13,63" || y == "13,64" || y == "13,65" || y == "13,66" || y == "13,67" || y == "13,LOC01" || y == "13,loc01" || y == "13,LOC02" || y == "13,loc02" || y == "13,LOC03" || y == "13,loc03" || y == "13,LOC04" || y == "13,loc04" || y == "13,LOC05" || y == "13,loc05" || y == "13,LOC06" || y == "13,loc06" || y == "13,LOC07" || y == "13,loc07" || y == "13,LOC08" || y == "13,loc08" || y == "13,LOC09" || y == "13,loc09" || y == "13,LOC10" || y == "13,loc10" || y == "13,LOC11" || y == "13,loc11" || y == "13,LOC12" || y == "13,loc12" || y == "13,SPO01" || y == "13,spo01" || y == "13,SPO02" || y == "13,spo02" || y == "13,SPO03" || y == "13,spo03" || y == "13,SPO04" || y == "13,spo04" || y == "13,SPO05" || y == "13,spo05") {
      answertwo = "<i>The unknown man is not here. You can't talk to him, you can only talk about him.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "15,01" || y == "15,02" || y == "15,03" || y == "15,04" || y == "15,05" || y == "15,06" || y == "15,07" || y == "15,08" || y == "15,09" || y == "15,10" || y == "15,11" || y == "15,12" || y == "15,13" || y == "15,14" || y == "15,15" || y == "15,16" || y == "15,17" || y == "15,18" || y == "15,19" || y == "15,20" || y == "15,21" || y == "15,22" || y == "15,23" || y == "15,24" || y == "15,25" || y == "15,26" || y == "15,28" || y == "15,29" || y == "15,30" || y == "15,31" || y == "15,32" || y == "15,33" || y == "15,34" || y == "15,35" || y == "15,36" || y == "15,37" || y == "15,38" || y == "15,39" || y == "15,40" || y == "15,41" || y == "15,42" || y == "15,43" || y == "15,44" || y == "15,45" || y == "15,46" || y == "15,47" || y == "15,48" || y == "15,49" || y == "15,50" || y == "15,51" || y == "15,52" || y == "15,53" || y == "15,54" || y == "15,55" || y == "15,56" || y == "15,57" || y == "15,58" || y == "15,59" || y == "15,60" || y == "15,61" || y == "15,62" || y == "15,63" || y == "15,64" || y == "15,65" || y == "15,66" || y == "15,67" || y == "15,LOC01" || y == "15,loc01" || y == "15,LOC02" || y == "15,loc02" || y == "15,LOC03" || y == "15,loc03" || y == "15,LOC04" || y == "15,loc04" || y == "15,LOC05" || y == "15,loc05" || y == "15,LOC06" || y == "15,loc06" || y == "15,LOC07" || y == "15,loc07" || y == "15,LOC08" || y == "15,loc08" || y == "15,LOC09" || y == "15,loc09" || y == "15,LOC10" || y == "15,loc10" || y == "15,LOC11" || y == "15,loc11" || y == "15,LOC12" || y == "15,loc12" || y == "15,SPO01" || y == "15,spo01" || y == "15,SPO02" || y == "15,spo02" || y == "15,SPO03" || y == "15,spo03" || y == "15,SPO04" || y == "15,spo04" || y == "15,SPO05" || y == "15,spo05") {
      answertwo = "<i>Jenna Kane is in a coma. You can't talk to her, you can only talk about her.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "15,27" || y == "27,15") {
      answertwo = "The super intense potpourri smell woke Jenna Kane up! It's a miracle!<br><i>Take card <b>35</b>. Remove cards <b>15</b> and <b>27</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "18,01") {
      answertwo = "Ziggy! How did you find me? Oh, I'm sorry about everything...";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "18,03") {
      answertwo = "The kidnapper used this tape to silence me. I don't even want to think about what could have happened if you hadn't come.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "18,08" || y == "18,26" || y == "18,28") {
      answertwo = "I am aware that your gem gives you some special powers. Why do think I was so interested in getting a hold on it?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "18,13" || y == "18,18" || y == "18,23") {
      answertwo = "I guess I owe you an explanation. Where do I start? Well, it all began a few months ago when I started seeing your mother. It was going well, I thought that I finally found a woman that can make me laugh. And then, five weeks ago, as I arrived home from the university, somebody was waiting for me in front of my house. It was the man with sunglasses, the one that was here a minute ago.<br>Anyway, he told me that he was from National Security Agency and that they've been looking at Lena for some time because they've discovered that your mother is, how do I put this...an extraterrestrial. <br>He told me that the gem Lena was always carrying around her neck held special powers. And that she's planning on using them against us. He asked me to work for them and keep an eye on Lena, reporting everything about her to them. He also gave me a drug to put in her tea when I see her. He said that it would help to put her powers in control. Here, I still have some of it with me. <br><i>He gives me a small bottle with some liquid in it.</i><br>I didn't believe any of it at first. But soon I started to notice strange things going with Lena. And it wasn't only her sudden interest in Starcherster's mayor Bundy. So, finally, I accepted to collaborate with the Agency. You have to understand me Ziggy! I was affraid. Aliens always try to take over the world in films.<br><i>He drugged my mother! I am definitely quitting his class.</i><br>They also promised that they would give me a job in the Agency and that I would be in charge of studying this gem. It was an opportunity I couldn't miss on...<br><i>Selling out my mother for a job? I'm starting to regret to have saved him.</i><br>But when Lena dissapeared I knew something was wrong. The Agency cut off contact with me and I started to worry about Lena. And then somebody broke into my house and kidnapped me! They brought me here and tied me up. Today, the sunglasses guy came and confirmed my fear that it was the Agency, or whoever the hell they are, that took me. Thank God you're here, they were surely planning to get rid of me because I know too much. I'm safe now!<br><i>I arrange with Mary to come and pick up the professor. We decide to hide him in her apartment in Majorton for the time being, while I continue with the investigation.<br>So, what information do I have till now? My mother was interested in mayor Bundy. Also, she was speaking to a journalist Alison Clarke in the hotel. I also have a drug that takes away our powers that professor Martin gave me. I should show it to the crew's physician Dr Rose Tobin in the hospital. There is also Ron Batton, the crew's tech specialist who can get information on everybody in this town. Maybe I could pay him a visit in the city opera. Many places to go to, I better hurry up!<br>Take cards <b>16</b>, <b>33</b>, <b>65</b>, and <b>66</b>. Remove cards <b>18</b> and <b>LOC05<b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "18,24") {
      answertwo = "Thank God I'm free!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "18,27") {
      answertwo = "Please don't put this under my nose. I've been tortured enough already!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "18,34") {
      answertwo = "What do we do? Will you call for help?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "18,LOC05" || y == "11,loc05") {
      answertwo = "The kidnapper brought me here yesterday. He blindsided me of the way here so I haven't a clue where we are.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "20,01" || y == "20,02" || y == "20,03" || y == "20,04" || y == "20,05" || y == "20,06" || y == "20,07" || y == "20,08" || y == "20,09" || y == "20,10" || y == "20,11" || y == "20,12" || y == "20,13" || y == "20,14" || y == "20,15" || y == "20,16" || y == "20,17" || y == "20,18" || y == "20,19" || y == "20,20" || y == "20,21" || y == "20,22" || y == "20,23" || y == "20,24" || y == "20,25" || y == "20,26" || y == "20,27" || y == "20,28" || y == "20,29" || y == "20,30" || y == "20,31" || y == "20,32" || y == "20,33" || y == "20,35" || y == "20,36" || y == "20,37" || y == "20,38" || y == "20,39" || y == "20,40" || y == "20,41" || y == "20,42" || y == "20,43" || y == "20,44" || y == "20,45" || y == "20,46" || y == "20,47" || y == "20,48" || y == "20,49" || y == "20,50" || y == "20,51" || y == "20,52" || y == "20,53" || y == "20,54" || y == "20,55" || y == "20,56" || y == "20,57" || y == "20,58" || y == "20,59" || y == "20,60" || y == "20,61" || y == "20,62" || y == "20,63" || y == "20,64" || y == "20,65" || y == "20,66" || y == "20,67" || y == "20,LOC01" || y == "20,loc01" || y == "20,LOC02" || y == "20,loc02" || y == "20,LOC03" || y == "20,loc03" || y == "20,LOC04" || y == "20,loc04" || y == "20,LOC05" || y == "20,loc05" || y == "20,LOC06" || y == "20,loc06" || y == "20,LOC07" || y == "20,loc07" || y == "20,LOC08" || y == "20,loc08" || y == "20,LOC09" || y == "20,loc09" || y == "20,LOC10" || y == "20,loc10" || y == "20,LOC11" || y == "20,loc11" || y == "20,LOC12" || y == "20,loc12" || y == "20,SPO01" || y == "20,spo01" || y == "20,SPO02" || y == "20,spo02" || y == "20,SPO03" || y == "20,spo03" || y == "20,SPO04" || y == "20,spo04" || y == "20,SPO05" || y == "20,spo05") {
      answertwo = "<i>The delivery guy is no longer here. You can't talk to him, you can only talk about him.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "20,34" || y == "34,20") {
      answertwo = "I don't really need to order delivery, I already have the food.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "23,01" || y == "23,02" || y == "23,03" || y == "23,04" || y == "23,05" || y == "23,06" || y == "23,07" || y == "23,08" || y == "23,09" || y == "23,10" || y == "23,11" || y == "23,12" || y == "23,13" || y == "23,14" || y == "23,15" || y == "23,16" || y == "23,17" || y == "23,18" || y == "23,19" || y == "23,20" || y == "23,21" || y == "23,22" || y == "23,23" || y == "23,24" || y == "23,25" || y == "23,26" || y == "23,27" || y == "23,28" || y == "23,29" || y == "23,30" || y == "23,31" || y == "23,32" || y == "23,33" || y == "23,34" || y == "23,35" || y == "23,36" || y == "23,37" || y == "23,38" || y == "23,39" || y == "23,40" || y == "23,41" || y == "23,42" || y == "23,43" || y == "23,44" || y == "23,45" || y == "23,46" || y == "23,47" || y == "23,48" || y == "23,49" || y == "23,50" || y == "23,51" || y == "23,52" || y == "23,53" || y == "23,54" || y == "23,55" || y == "23,56" || y == "23,57" || y == "23,58" || y == "23,59" || y == "23,60" || y == "23,61" || y == "23,62" || y == "23,63" || y == "23,64" || y == "23,65" || y == "23,66" || y == "23,67" || y == "23,LOC01" || y == "23,loc01" || y == "23,LOC02" || y == "23,loc02" || y == "23,LOC03" || y == "23,loc03" || y == "23,LOC04" || y == "23,loc04" || y == "23,LOC05" || y == "23,loc05" || y == "23,LOC06" || y == "23,loc06" || y == "23,LOC07" || y == "23,loc07" || y == "23,LOC08" || y == "23,loc08" || y == "23,LOC09" || y == "23,loc09" || y == "23,LOC10" || y == "23,loc10" || y == "23,LOC11" || y == "23,loc11" || y == "23,LOC12" || y == "23,loc12" || y == "23,SPO01" || y == "23,spo01" || y == "23,SPO02" || y == "23,spo02" || y == "23,SPO03" || y == "23,spo03" || y == "23,SPO04" || y == "23,spo04" || y == "23,SPO05" || y == "23,spo05") {
      answertwo = "<i>Lena isn't here. You can't talk to her, you can only talk about her.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,01") {
      answertwo = "You're Lena Wonder's daughter? And you're telling me she's missing? Oh my God, am I in danger too?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,02") {
      answertwo = "Feel free to take a box if you're hungry, we always order too much anyway.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,03") {
      answertwo = "You're saying that this duct tape was used in kidnapping? Well, if the victim wants to stay anonymous I can't really write about it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,05") {
      answertwo = "I wouldn't be working for this rapacious politian if it was the last job on Earth. But I guess that the guy has to earn for a living somehow.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,08" || y == "25,26" || y == "25,28") {
      answertwo = "Look, I'm sure you're great, but I'm only interested in scientific facts. This modern fantasy stuff is not my cup of tea.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,11" || y == "25,65") {
      answertwo = "I read a little about her revolutionary medical research in the media. A remarkable woman.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,13") {
      answertwo = "You're telling me that this guy had your professor spying on Lena and drugging her? And now he's following you? Well, I knew that what Lena and I were digging into was dangerous, and I think I might know who this man is working for. But I really can't speak about it, I don't want to get in trouble. Besides, working on this story almost cost me my job. There are some powerful people involved, you see. And my boss didn't want to publish it without strong evidence. We got in a big fight about it. So now I'm still walking on thin ice here. I kind of promised to get an interview with Diana von Raus, and that promise seems impossible to keep.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,14" || y == "25,22") {
      answertwo = "I'm sure you're a great girl, but I can't waste my time on talking about a metal detector.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,16") {
      answertwo = "You're claiming that your mother was drugged with this? I knew that she could have been digging too deep on some stuff, but drugging...that's a whole another level. I don't want you to bring me back into this!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,10" || y == "25,17") {
      answertwo = "You think that I wouldn't want to know what does Bundy hide in his office? If you find out, let me know. Or better not, I have to leave that story behind me and focus on this Diana von Raus interview.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,20") {
      answertwo = "The delivery guy? What can I say about him, he brought the food and left.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,23") {
      answertwo = "Yes, I met with Lena in the hotel some time ago. We shared some information, that's all. But I really can't tell you more, especially considering you told me she's missing. I'm not putting myself in danger! I've got to focus on keeping my job which I almost lost because of this story I was working on with Lena. I'm on the verge to lose the little credibility I still have with my boss. I'm supposed to have an interview with Diana von Raus by tomorrow, and I still have nothing. So I'm sinking deeper in quicksand every minute.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,24") {
      answertwo = "You're saying that this rope was used in kidnapping? Well, if the victim wants to stay anonymous I can't really write about it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,25") {
      answertwo = "I'm finished with investigative journalism. It's way too dangerous. And I almost lost my job because of it. And if I don't deliver the interview with Diana von Raus by tomorrow, my boss will definitely fire me. I'm really sorry about your mother, but I can't help you.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,27") {
      answertwo = "Oh, please get it away from me! The smell is way to strong!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,30" || y == "25,66") {
      answertwo = "He works at the Opera? Do you think that he could get me an interview with Diana von Raus? I would do anything in return. If I don't get this interview my boss will fire me.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,33") {
      answertwo = "I don't care what the mayor is doing and what consequences it has. I'm done with investigative journalism. I will lose my job if I continue with stories like this, my boss won't publish anything without hard evidence. The only thing I'm working on now is getting an interview with Diana von Raus. And I'm not getting anywhere with it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,34") {
      answertwo = "I'm not sure that I want to give you my number. Maybe it's best that I stay out of all this.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,36" || y == "25,39" || y == "25,52" || y == "25,63") {
      answertwo = "He used to always hang around in the street in front of our office so we adopted him. We call him Cat. He's really calm and friendly. You can take him for a while if you like him so much. But bring him back tomorrow, he'll get homesick.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,41") {
      answertwo = "I'm not surprised that the Opera is in a bad state. By the way, did you see Daina von Raus there?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,42") {
      answertwo = "I don't know anything about this nurse. Is she news material?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,45") {
      answertwo = "I feel sick to my stomach just thinking about her. I'm supposed to get an interview with her by tomorrow, but she's not talking to the press apparently. And if I don't have it, my boss will fire me. I would do anything for this interview!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,46") {
      answertwo = "Can I take one for later? I'm affraid I won't be able to sleep tonight.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,49") {
      answertwo = "I don't know what could this mean. These names look familiar, but I can't put my finger on it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,53") {
      answertwo = "A secret ward in the hospital? I know nothing about it! It's not my job to investigate it, my job is to get an interview with Diana von Raus.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,54") {
      answertwo = "This is Diana von Raus' ring? Can I take a photo of it?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,56") {
      answertwo = "Why are you asking me about some bucket?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,57") {
      answertwo = "I've had my part of the lunch, that's an extre box. Please take it, it will spoil otherwise.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,59") {
      answertwo = "You took this makeup from the Opera? Did you maybe ran into Diana von Raus when you were there?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,60") {
      answertwo = "You have Diana's private number for me? And she said she'll give me an interview? You saved my career! Ziggy, you're really something, just like your mother. I owe you a favor, don't I. OK, let's take a walk, you never know who's listening around here.<br><i>We leave the office and as soon as we are out on the street, Alison starts her story.</i><br>So, your mother contacted me because she read my article on strange illnesses reports in the region. At least ten people developed severe diseases in the last few months out of nowhere, all of them coming from villages around Starchester. The hospital's official report was that these patients weren't in any way connected. I thought that this would be too much of a coincidence, so I published a story questioning is the hospital telling the truth. <br><i>Alison takes a pause there, and looks around to make sure that Nobody was listening</i><br>My boss accused me of spreading fake news and almost fired me. But when the story came out, somebody called me. They said that they work at the hospital and that something weird really is going on there. And that I should look into Dr Turner, the doctor that was in charge of these patients. And this person was scared to share this information.<br><i>Alison turnes around once more and I can see that she's getting more and more nervous talking about all of this.</i><br>That's all I know. I hope that this helps you in finding you mother. If anybody asks, we've never spoken together.<br><i>Take card <b>63</b>. Remove cards <b>25</b>, <b>45</b>, <b>60</b> and <b>LOC10</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,64") {
      answertwo = "I knew that the mayor had some hidden business. It's a win-win situation, PEI gains a fortune and Bundy takes a tiny small part of it for himself. And all for a little price of destroying the environment and human health.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,LOC06" || y == "25,loc06") {
      answertwo = "I have to get an interview with Diana von Raus. I told my boss that I would have it by tomorrow. My job is on the line!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,LOC07" || y == "25,loc07") {
      answertwo = "I don't know anything about the hospital! Why are you asking me about it?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,LOC08" || y == "25,loc08") {
      answertwo = "Mayor's actions are not something I'm paid to investigate.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "25,LOC09" || y == "25,loc09") {
      answertwo = "Without this job I'll be in the street. I'm already overdue with paying my rent.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "29,01" || y == "29,08" || y == "29,11" || y == "29,08" || y == "29,13" || y == "29,23" || y == "29,26" || y == "29,28" || y == "29,29" || y == "29,30" || y == "29,33" || y == "29,48" || y == "29,58" || y == "29,LOC12" || y == "29,loc12") {
      answertwo = "<i>I can't just show my face to this soldier. I am already being followed by these people.</i>.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,01") {
      answertwo = "Ziggy, it's so great to see you. I only wish that the circumctances were different.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,02" || y == "30,57") {
      answertwo = "Thanks, but I brought a sandwich from home for lunch.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,03") {
      answertwo = "We have more than enough duct tape here.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,05") {
      answertwo = "I did a quick check up on him. Married, two kids, working in mayor's office for 10 months. Doesn't seem to have any connection to mayor's business, he's really only a security guard.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,06") {
      answertwo = "I'm sure they have IV stands in the hospital. Why are you telling me this?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,07") {
      answertwo = "Well, it wasn't so easy to track her down because she signs her articles with an alias. But I did find her. She works for an online magazine called 'Under the Radar'. I didn't find their address though. There is a mistake on their contact page, they wrote 'Under the Radar' in their address section. Or maybe that mistake was intentional?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,08" || y == "30,26") {
      answertwo = "I see you're enjoying your new powers. Just be careful, nobody around you should know that you have them.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,09") {
      answertwo = "I checked the number plate, the car is registered under mayor Bundy.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,10" || y == "30,17") {
      answertwo = "I'm sorry, but there are just too many possible combinations to crack this code by force.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,11" || y == "30,65") {
      answertwo = "Rose is a fantastic physician and an amazing friend. She's at the hospital if you need her.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,12" || y == "30,67") {
      answertwo = "At least the room gets enough natural light.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,13") {
      answertwo = "I don't know who the guy is, but I'm sure that he knows where is Lena.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,14") {
      answertwo = "Someone could think that there must be a metal detector aomewhere in all this junk we have in the Opera, but there isn't.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,15" || y == "30,35") {
      answertwo = "She lives in Marsley, a village near here. And she's not the only one who's sick. There were many Marsely locals that had serious health issues during the last year.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,16") {
      answertwo = "This was given to Lena? You should take it to Dr Rose for analysis.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,20") {
      answertwo = "I checked the delivery guy. Didn't find anything interesting on him.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,22") {
      answertwo = "Where did you get this metal detector?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,23") {
      answertwo = "Lena is asking for help. That's why she sent you to us. We have to find her...and soon.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,24" || y == "30,50" || y == "30,55") {
      answertwo = "You remind me so much of your father. He always used to carry a bunch of weird stuff around with him.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,25") {
      answertwo = "You found Alison? That's amazing!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,27") {
      answertwo = "It's really hard to breath next to this thing.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,28") {
      answertwo = "Never lose the gem, Ziggy. Never.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,29") {
      answertwo = "Ziggy, don't let yourself get intimidated by this guy. You have strenght that he doesn't.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,30") {
      answertwo = "I know that it seems a bit strange for me to be working in the Opera, but I really like it here. It doesn't mean that I'm not working on fixing our communication system. I work on it every day, but I just don't have the right technology here.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,33") {
      answertwo = "Mayor Bundy has been accused of many things. Some of them involve spending tax money on expensive but insignificant city projects that don't help in solving real problems, like waste managment. Other imply that he's been putting his people on high, well paid and powerful positions. But one rumor could perhaps interest us the most. He significantly lowered the taxes for new companies as a part of his economy growth policy two years ago. And there was one company who profited from it the most, quickly gaining wealth and monopoly in the region. It was PEI, 'Petroleum Extraction Industries'.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,34") {
      answertwo = "You know that I've installed a tracking system so that we can always see where you are. So keep it with you and keep it on.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "05,36" || y == "05,39" || y == "05,52" || y == "05,63") {
      answertwo = "What a nice little cat! Don't show it to Mrs von Raus, she'll freak out if it leaves hair on her costume.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,40") {
      answertwo = "Take care of that phone!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,41") {
      answertwo = "I know that the Opera is in a terrible state. The budget here barely covers the program and the salaries, there is no money left for better maintenance.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,42") {
      answertwo = "I checked on her. She's been working in the hospital for 6 years and has good reviews from the patients. Except this one time she was caught in shoplifting when she was 17 years old, there really isn't anything suspicious about her.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,44") {
      answertwo = "That's some Poirot work there Ziggy. Nicely done.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,45") {
      answertwo = "I have to admit that I feel intimidated in front of Miss Diana. She's absolutely magical! But she's not really easygoing. She lost a ring and she says that she can't perform without it. It's her lucky charm or something. I'm trying to get her to at least do the soundcheck but she won't budge.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,46") {
      answertwo = "I don't need these. I don't sleep a lot, and until I fix our communication system and save Nakuhat people, I don't intend to.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,48") {
      answertwo = "Dr Turner a very well respected surgeon. He's been working for the Central Hospital for 4 years, when he moved to Starchester. According to his financial records, he was on a verge of bancrupcy a year ago. And I have information that it was due to large gambling debts he collected over the years. But very soon all of his debts were miraculously covered for.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,49") {
      answertwo = "Hmm, I'm not sure what to think of it. But I know that there are some PEI oil wells constructed in the county that carry names like the ones written on the arm.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,53") {
      answertwo = "I don't know why this area of hospital would be restricted. Rose could know something about it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,54") {
      answertwo = "Isn't that Diana von Raus' ring?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,56") {
      answertwo = "Ziggy, there must be more important things for us to talk about than this bucket.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,58") {
      answertwo = "Ziggy, I'm sure you can think of something to get inside of that bunker. Your mother is waiting for you!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,59") {
      answertwo = "Sure, take it. There is more than enough makeup, nobody will notice it's gone.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,60") {
      answertwo = "Oh, you have Diana von Raus' private number. Do you think I should invite her for lunch?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,63") {
      answertwo = "Lena was the one who loved to solve puzzles like this one. I'm sorry, but I can't figure this out.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,64") {
      answertwo = "I was aware of some of the mayor's criminal activity, but obviously not all of it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,LOC06" || y == "30,loc06") {
      answertwo = "I love the Opera, it's always overly excited here. Like right now, with all the drama with Miss Diana who says she won't perform tonight unless somebody finds her lucky ring.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,LOC07" || y == "30,loc07") {
      answertwo = "Rose works at the hospital. She told me about this ward that's been a restricted area for 10 months. She still didn't find out what's been going on there.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,LOC08" || y == "30,loc08") {
      answertwo = "Ah, our famous mayor Bundy. If you want to know more about lovely Mr Bundy, just ask.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,LOC09" || y == "30,loc09") {
      answertwo = "Aha, so it really was under the radar!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,LOC10" || y == "30,loc10") {
      answertwo = "Are you saying that PEI is making people sick with their oil drilling?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,LOC11" || y == "30,loc11") {
      answertwo = "Dr Turner sure does well in life, wouldn't you agree?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,LOC12" || y == "30,loc12") {
      answertwo = "Lena must be here!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "30,SPO05" || y == "30,spo05") {
      answertwo = "PEI has built their wells everywhere. They should be put in prison for this, along with faboulous Mr Bundy.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "31,01" || y == "31,02" || y == "31,03" || y == "31,04" || y == "31,05" || y == "31,06" || y == "31,07" || y == "31,08" || y == "31,09" || y == "31,10" || y == "31,11" || y == "31,12" || y == "31,13" || y == "31,14" || y == "31,15" || y == "31,16" || y == "31,17" || y == "31,18" || y == "31,19" || y == "31,20" || y == "31,21" || y == "31,22" || y == "31,23" || y == "31,24" || y == "31,25" || y == "31,26" || y == "31,27" || y == "31,28" || y == "31,29" || y == "31,30" || y == "31,31" || y == "31,32" || y == "31,33" || y == "31,34" || y == "31,35" || y == "31,36" || y == "31,37" || y == "31,38" || y == "31,39" || y == "31,40" || y == "31,41" || y == "31,42" || y == "31,43" || y == "31,44" || y == "31,45" || y == "31,46" || y == "31,47" || y == "31,48" || y == "31,49" || y == "31,50" || y == "31,51" || y == "31,52" || y == "31,53" || y == "31,54" || y == "31,55" || y == "31,56" || y == "31,57" || y == "31,58" || y == "31,59" || y == "31,60" || y == "31,61" || y == "31,62" || y == "31,63" || y == "31,64" || y == "31,65" || y == "31,66" || y == "31,67" || y == "31,LOC01" || y == "31,loc01" || y == "31,LOC02" || y == "31,loc02" || y == "31,LOC03" || y == "31,loc03" || y == "31,LOC04" || y == "31,loc04" || y == "31,LOC05" || y == "31,loc05" || y == "31,LOC06" || y == "31,loc06" || y == "31,LOC07" || y == "31,loc07" || y == "31,LOC08" || y == "31,loc08" || y == "31,LOC09" || y == "31,loc09" || y == "31,LOC10" || y == "31,loc10" || y == "31,LOC11" || y == "31,loc11" || y == "31,LOC12" || y == "31,loc12" || y == "31,SPO01" || y == "31,spo01" || y == "31,SPO02" || y == "31,spo02" || y == "31,SPO03" || y == "31,spo03" || y == "31,SPO04" || y == "31,spo04" || y == "31,SPO05" || y == "31,spo05") {
      answertwo = "<i>The musician is playing the guitar and completely ignoring my questions.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
      guitaraudio.play();
  } else if (y == "33,01" || y == "33,02" || y == "33,03" || y == "33,04" || y == "33,05" || y == "33,06" || y == "33,07" || y == "33,08" || y == "33,09" || y == "33,10" || y == "33,11" || y == "33,12" || y == "33,13" || y == "33,14" || y == "33,15" || y == "33,16" || y == "33,17" || y == "33,18" || y == "33,19" || y == "33,20" || y == "33,21" || y == "33,22" || y == "33,23" || y == "33,24" || y == "33,25" || y == "33,26" || y == "33,27" || y == "33,28" || y == "33,29" || y == "33,30" || y == "33,31" || y == "33,32" || y == "33,33" || y == "33,34" || y == "33,35" || y == "33,36" || y == "33,37" || y == "33,38" || y == "33,39" || y == "33,40" || y == "33,41" || y == "33,42" || y == "33,43" || y == "33,44" || y == "33,45" || y == "33,46" || y == "33,47" || y == "33,48" || y == "33,49" || y == "33,50" || y == "33,51" || y == "33,52" || y == "33,53" || y == "33,54" || y == "33,55" || y == "33,56" || y == "33,57" || y == "33,58" || y == "33,59" || y == "33,60" || y == "33,61" || y == "33,62" || y == "33,63" || y == "33,64" || y == "33,65" || y == "33,66" || y == "33,67" || y == "33,LOC01" || y == "33,loc01" || y == "33,LOC02" || y == "33,loc02" || y == "33,LOC03" || y == "33,loc03" || y == "33,LOC04" || y == "33,loc04" || y == "33,LOC05" || y == "33,loc05" || y == "33,LOC06" || y == "33,loc06" || y == "33,LOC07" || y == "33,loc07" || y == "33,LOC08" || y == "33,loc08" || y == "33,LOC09" || y == "33,loc09" || y == "33,LOC10" || y == "33,loc10" || y == "33,LOC11" || y == "33,loc11" || y == "33,LOC12" || y == "33,loc12" || y == "33,SPO01" || y == "33,spo01" || y == "33,SPO02" || y == "33,spo02" || y == "33,SPO03" || y == "33,spo03" || y == "33,SPO04" || y == "33,spo04" || y == "33,SPO05" || y == "33,spo05") {
      answertwo = "<i>The mayor isn't here. You can't talk to him, you can only talk about him.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "35,01") {
      answertwo = "Who are you and what are you doing here?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "35,03" || y == "35,40" || y == "35,55") {
      answertwo = "I'm now feeling my best. If you don't have anything important to say, please leave me so I can get some rest.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "35,06") {
      answertwo = "It's been keeping me company since I came here.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "35,08" || y == "35,26" || y == "35,28") {
      answertwo = "Am I hallucinating? Or is your story just very strange?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "35,11") {
      answertwo = "The only doctor I've seen since I'm here is Dr Turner.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "35,13") {
      answertwo = "It could be the guy that was here once with Dr Turner. 'Making sure everything is going as planned', as he said. I'm sure he works for PEI. And I'm sure that PEI is responsible for what's happening to me and the others.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "35,23") {
      answertwo = "Your mother is missing? I'm sorry, but I don't know anything about it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "35,30") {
      answertwo = "Your friend can dig up information on anything? Tell him to look into PEI, they've been poisoning the people! The water we drink is polluted and so is the air we breath! Just look at me...And nobody takes responsibility for it!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "35,33") {
      answertwo = "The mayor lowered the taxes for new companies, so PEI constructed more than 20 wells in Starchester county in only two years. And not only that, the city council changed urban planning documents to enable well construction in protected areas. Like right next to my village, for example. Mayor Bundy was surely well rewarded for his efforts.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "35,35") {
      answertwo = "I'm finally awake! At least now I can tell somebody all I know! Maybe I was in a coma, but I heard every word that Dr Turner said in front of me. He's been paid to keep me and the other patients of this ward a secret. And by now I'm pretty sure it's PEI that's paying him. The pollution from their oil drills has been destroying our health rapidly. But I guess that money is more important than human lives.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "35,42") {
      answertwo = "I haven't seen her. There are only two nurses that have been coming to my room, and she's not one of them.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "35,48") {
      answertwo = "I was completely healthy until recently. And when I got sick the doctors couldn't find the reason behind it. But now I know what's responsible for me losing my health! <br>Dr Turner thought that I couldn't hear anything, being in a coma, but I did. He is keeping me and the other patients hidden here, so that nobody would find out what's behind our illnesses. It's the pollution from all that PEI oil drilling in the county! <br>PEI is paying Dr Turner for this. I overheard him talking to a guy here in my room. The guy said that unless he keeps up the good work he will have bigger problems than gambling debts they covered for him...<br><i>In the middle of Jenna's sentence, we hear a car arriving in front of the building. I look at the window and see somebody getting out of a brand new car. It's Dr Turner himself! What do I do? I can't go out pretending to be him now, I risk metting him eye to eye. While I'm panicking, I hear him in the hallway, probably talking on the phone to someone.</i><br>I'm at the hospital now. As soon as I finish, I'm coming to the base. Of course I'm alone, I'm not planning on bringing anybody to see that I'm working for PEI!<br><i>Dr Turner will enter the room soon. What do I do?<br>Take card <b>67</b>. Remove cards <b>12</b>, <b>42</b>, <b>LOC07</b> and <b>LOC08</b></i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "35,50") {
      answertwo = "Why would you need that? Take it I guess, there is another one in the corner.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "35,LOC06" || y == "35,loc06") {
      answertwo = "I'm not fit enough to see 'Carmen'.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "35,LOC07" || y == "35,loc07" || y == "35,LOC10" || y == "35,loc10") {
      answertwo = "I've been here for so long.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "38,01") {
      answertwo = "Oh, Miss Wonder! I hope you found your room to your liking. How can I help you?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "38,07") {
      answertwo = "It's a woman your mother had a meeting with here at the hotel. I swear that I didn't hear anything else they were saying.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "38,08") {
      answertwo = "Hmm, that's interesting. Will that be all?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "38,13") {
      answertwo = "Yes, well he asked if you were a guest of the hotel and I answered that I can't comment on that. He tried to bribe me, can you imagine! I politely asked him to leave. He said he will just finish the newspaper and sat at one of the tables. Oh yes, he received a phone call and he wrote something on the newspaper. He tore off the page he's written on and left soon afterwards. I saw him going to the nearest metro station.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "38,19") {
      answertwo = "Thank you, but keep your tip. You're only a student.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "38,19") {
      answertwo = "Thank you, but keep your tip. You're only a student.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "38,21") {
      answertwo = "The man who asked about you wrote something on the front page while he was talking on the phone. He tore the page off and took it with him.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "38,23") {
      answertwo = "I remember Mrs Wonder. She is a remarkable person, you can sense it immidiately. She stayed here in two occasions in the last few months. I remember that she had a meeting with a woman in the hotel bar. I overheard them when I was passing by, I think she said her name was Alison Clarke and that she was a journalist.<br><i>I'm just about to thank her and leave, when she stops me.</i><br>Wait! I almost forgot! There was a man here a half an hour ago asking if you were the guest of the hotel. He had bright coloured hair and he was wearing sunglasses and a leather jacket.<br><i>Take cards <b>07</b> and <b>13</b></i>.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "38,27") {
      answertwo = "It really brights up the atmosphere here, doesn't it? Oh, who am I kidding? I know it's horrible but my boss loves it. I can hardly breath in here! Take as much as you want, you'll be doing me a favor.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "38,28") {
      answertwo = "Oh, how pretty!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "38,31" || y == "38,43" || y == "38,47") {
      answertwo = "I've seen that street musician a lot of times. He can get a bit repetative in his guitar playing.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "38,34") {
      answertwo = "I don't usually take phone numbers of customers.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "38,38") {
      answertwo = "Oh, I don't want to bore you with my personal stories.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "38,51") {
      answertwo = "Feel free to take the pencil.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "38,62") {
      answertwo = "The man who was reading the newspaper received a phone call and wrote something down on the front page, tore it off and left. I guess that this is what he wrote. By the way, we had a guest  named Lena Wonder here recently, you two aren't related by any chance?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "38,LOC01" || y == "38,loc01") {
      answertwo = "Here at the 'Deep Lake Hotel' we stand at your service at all times. The breakfast is from 7 to 9am, and the dinner from 7 to 9 pm. Feel free to use the wellness on the first floor.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "38,LOC02" || y == "38,loc02") {
      answertwo = "It's the nearest metro station, only a few minutes from here.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "38,LOC03" || y == "38,loc03") {
      answertwo = "It the square in the old town. Famous for having a lot of pidgeons.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "38,SPO01" || y == "38,spo01") {
      answertwo = "You can find a map of the metro in every station. It's not so complicated to get around here.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,01") {
      answertwo = "How can I help you?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,02" || y == "42,54" || y == "42,57") {
      answertwo = "Thank you, but I don't take gifts from patients. They always expect something in return.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,03" || y == "42,14" || y == "42,22" || y == "42,24" || y == "42,27" || y == "42,28" || y == "42,40" || y == "42,41" || y == "42,55" || y == "42,56" || y == "42,59") {
      answertwo = "Miss, there are other people waiting. If you don't need anything, please step out of the line.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,05") {
      answertwo = "Why are you asking me about a security guard who works at the mayor's office?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,06" || y == "42,50") {
      answertwo = "We just had a new equipment supply arrive a week ago.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,07" || y == "42,25") {
      answertwo = "Alison Clarke? I remember her, she was asking some questions around the hospital. Journalism isn't what it used to be.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,08" || y == "42,26") {
      answertwo = "Would you like me to direct you to the psychiatric ward?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,10" || y == "42,17" || y == "42,44") {
      answertwo = "Of course that the mayor's office is locked. Otherwise every curious person like yourself could snoop around it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,11") {
      answertwo = "Dr Rose is one of our best doctors. She's right there, in the hallway. Do you need to schedule an appointment?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,13") {
      answertwo = "Oh, it's that man who came here once...Ah, actually, never mind, I think I've mistaken him for someone else.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,15" || y == "42,35") {
      answertwo = "You don't really expect me to speak to you about our patients? Unless you're a member of their close family you can forget about it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,20") {
      answertwo = "Why are you asking me about a delivery guy? Are you sure you're alright?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,23") {
      answertwo = "Your mother isn't a patient of ours. I'm sorry, but I can't help you.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,30" || y == "42,66") {
      answertwo = "Why are you asking me about a technical support engineer working at the Opera?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,33") {
      answertwo = "I'm not really into politics, but in my opinion the mayor is doing a good job. We never had as many tourists in the city like last year.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,34") {
      answertwo = "I will not take your phone number. If you want to contact me, call the hospital.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,36") {
      answertwo = "Oh my god! Look how cute you are!!! Can I hold him for a bit?<br><i>I give Cat to nurse Barbara and a huge smile appears on her face. She is definitely a cat person. I let her have him for a few minutes.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,39") {
      answertwo = "Oh my god! Look how cute you are!!! Can I hold him for a bit?<br><i>I give Cat to nurse Barbara and a huge smile appears on her face. She is definitely a cat person. I let her have him for a few minutes, hoping that Cat wouldn't be able to hold it after all that water he drank, but nothing happens. He is just too well trained.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,42") {
      answertwo = "I'm here for all of your questions considering the hospital. But I will not share the details of my private life with you.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,45" || y == "42,60") {
      answertwo = "I've heard that Diana von Raus is in the city. But I'm not a big fan of the opera anyway.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,46") {
      answertwo = "These pills are rather strong, so be sure not to take more than one at a time.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,48") {
      answertwo = "Dr Turner is not doing surgery for the last 10 months, he's occupied elsewhere. But Dr Knight who's filling in his place is an excellent surgeon.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,49") {
      answertwo = "Oh...this is just something I scribbled when I was bored during the night shift. Nothing special.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,52") {
      answertwo = "Oh my god! Look how cute you are!!! Can I hold him for a bit?<br><i>I give Cat to nurse Barbara and a huge smile appears on her face. She is definitely a cat person. I let her have him for a few minutes but I don't even know what to make him do to her. Should he scratch her? Should he purr? What good would any of it do?</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,53") {
      answertwo = "Don't touch this! There are no visitors allowed in this ward.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,63") {
      answertwo = "Oh my god! Look how cute you are!!! Can I hold him for a bit?<br><i>I give Cat to nurse Barbara and a huge smile appears on her face. She is definitely a cat person. And then I work my magic...although Cat is very well trained and normally he would never do this, under my orders he pees all over nurse Barbara's jacket. She screams and takes her jacket off, relieving her arms to my little eye.<br>Take card <b>49</b>. Remove card <b>63</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,64") {
      answertwo = "I'm not very interested in politics, sorry.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,LOC06" || y == "42,loc06") {
      answertwo = "I'm not a big fan of the opera.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,LOC07" || y == "42,loc07") {
      answertwo = "Yes, this is the Central Hospital reception desk. How can I help you?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,LOC08" || y == "42,loc08") {
      answertwo = "I've never been to the mayor's office, but I heard that it was renovated recently.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,LOC09" || y == "42,loc09") {
      answertwo = "Hmm, never heard of this little online magazine.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,LOC10" || y == "42,loc10") {
      answertwo = "This ward is a restricted area. Please don't make me repeat it one more time.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "42,SPO05" || y == "42,spo05") {
      answertwo = "Why would you be showing me a map of the county?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,01") {
      answertwo = "Vat do you vant? Are you here für mein makeup?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,02" || y == "45,57") {
      answertwo = "I never eat heavy food before a performance. But I probably von't be performing tonight. Mein Gott, warum?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,03" || y == "45,24" || y == "45,27" || y == "45,40") {
      answertwo = "Zis vill not help me, Fräulein.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,05") {
      answertwo = "If zere vas a security guard in zee Opera, he vould find mein ring! Probably somebody stole it!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,07") {
      answertwo = "Who is zis Frau? I don't speak to journalists.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,08" || y == "45,26") {
      answertwo = "Why do you tell me fairy tales? I have keine Zeit für zis.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,10" || y == "45,17" || y == "45,44") {
      answertwo = "What do I care about zee office of zee mayor? Zee real problem ist mein ring!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,11" || y == "45,65") {
      answertwo = "Maybe I need a doctor, mein Herz is beating very very strongly. I have lost mein ring!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,13") {
      answertwo = "I don't know zis Mann. Why are we speaking about him? Zee real problem is mein ring!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,14") {
      answertwo = "I whish we had a metal detector. Maybe we could find zee ring with it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,20") {
      answertwo = "Why do you speak about a delivery Mann? Vat do I care about him?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,22") {
      answertwo = "Do you zink we can find zee ring vit it?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,23" || y == "45,42") {
      answertwo = "I don't know zis Frau. I have keine Zeit für zis. I have to find zee ring!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,25") {
      answertwo = "Normally I don't give interviews. But if you help me find mein lucky ring I can do zis for you.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,28") {
      answertwo = "It is very beautiful, but it is not mein ring.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,30") {
      answertwo = "Herr Batton is bozering me vit zee sound check. I already said zat if I don't find mein lucky ring, zere is no show tonight!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,33") {
      answertwo = "Herr Bundy came here to meet me zis morning. Very charming Mann.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,34") {
      answertwo = "It is sveet zat you vant to give my your phone number, but let's be honest, I'm not going to call you.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,36" || y == "45,39" || y == "45,52" || y == "45,63") {
      answertwo = "Keep zee cat away from mein costume! I don't vant any cat hair on it!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,41") {
      answertwo = "Look at zis horrible floor! I can't believe I have to vork here. Vat a scandal!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,45") {
      answertwo = "I came here in zee morning, vit mein lucky ring. And zis afternoon I saw zat it's gone! I can't sing vizout mein lucky ring! Somebody has to find mein ring or zee premiere has to be canceled.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,46") {
      answertwo = "If you have somezing else zat I could use to calm myself, zat vould be great.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,53") {
      answertwo = "What do I care about a ward in zee hostpital? Zee real problem ist mein ring!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,54") {
      answertwo = "Mein Gott, you found it! Vat can I do for you, liebe Fräulein, tell me? Here is my private phone number, I vill give zis interview to your journalist friend if zat is vat you vant. Vielen Dank!<br><i>Take card <b>60</b>. Remove card <b>54</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,56") {
      answertwo = "I am an artist. Vay do you bother me vit zis?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,59") {
      answertwo = "Look vat cheap makeup zey make us vear here. It is scandalous!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,60") {
      answertwo = "Ja, zis is my private number. You can give it to zee journalist, but don't give it to anybody else!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,LOC06" || y == "45,loc06") {
      answertwo = "Zis is zee last time I'm singing in zis Opera. Look at the conditions I have to vork in!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,LOC07" || y == "45,loc07") {
      answertwo = "I hope zat I don't end up in zee hospital tonight! Because if I don't get mein ring back soon, I vill surely have a Herz attack!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,LOC08" || y == "45,loc08") {
      answertwo = "Zee mayor vill take me to lunch tomorrow. And give me a tour of his newly renovated office aftervards.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,LOC09" || y == "45,loc09") {
      answertwo = "I hate journalists!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "45,SPO05" || y == "45,spo05") {
      answertwo = "Zis is zee last time zat I will sing in zis county. I am treated vit a big disrespect. Nobody is searching for mein ring!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "47,01") {
      answertwo = "Thanks for the tip. It's always nice to see that there are still some people who appreciate good music.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "47,08") {
      answertwo = "You're a magician of some kind, or?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "47,13") {
      answertwo = "He did pass here, maybe a half an hour ago. I remember him well because he threw his used metro ticket in my case. Can you believe some people? Anyway, he went to this shop in Carousel St. The one that's looking straight at Lady's Alley. The shop was closed so he turned and left, but I didn't see where.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "47,21") {
      answertwo = "I don't read the newspapers. It's better to not spoil your mind with everything that's written in the media.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "47,23") {
      answertwo = "Sorry, but I haven't seen her.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "47,27") {
      answertwo = "Wow, this smell is super strong and not at all that great.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "47,28") {
      answertwo = "What an incredible gem. It must be worth a fortune.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "47,38") {
      answertwo = "I don't know this woman. I doubt that we are moving in the same circles.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "47,43") {
      answertwo = "Would you like to buy a CD?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "47,47") {
      answertwo = "I may be playing on the street now, but you will see me in concert halls soon, trust me.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "47,LOC01" || y == "47,loc01") {
      answertwo = "I've never been to the hotel. I sleep in a squat at the moment.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "47,LOC03" || y == "47,loc03") {
      answertwo = "This has been my spot for a few months now. I don't have a permit so sometimes the police chases me off, but usually they leave me alone.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "48,01" || y == "48,02" || y == "48,03" || y == "48,04" || y == "48,05" || y == "48,06" || y == "48,07" || y == "48,08" || y == "48,09" || y == "48,10" || y == "48,11" || y == "48,12" || y == "48,13" || y == "48,14" || y == "48,15" || y == "48,16" || y == "48,17" || y == "48,18" || y == "48,19" || y == "48,20" || y == "48,21" || y == "48,22" || y == "48,23" || y == "48,24" || y == "48,25" || y == "48,26" || y == "48,27" || y == "48,28" || y == "48,29" || y == "48,30" || y == "48,31" || y == "48,32" || y == "48,33" || y == "48,34" || y == "48,35" || y == "48,36" || y == "48,37" || y == "48,38" || y == "48,39" || y == "48,40" || y == "48,41" || y == "48,42" || y == "48,43" || y == "48,44" || y == "48,45" || y == "48,46" || y == "48,47" || y == "48,48" || y == "48,49" || y == "48,50" || y == "48,51" || y == "48,52" || y == "48,53" || y == "48,54" || y == "48,55" || y == "48,56" || y == "48,57" || y == "48,58" || y == "48,59" || y == "48,60" || y == "48,61" || y == "48,62" || y == "48,63" || y == "48,64" || y == "48,65" || y == "48,66" || y == "48,67" || y == "48,LOC01" || y == "48,loc01" || y == "48,LOC02" || y == "48,loc02" || y == "48,LOC03" || y == "48,loc03" || y == "48,LOC04" || y == "48,loc04" || y == "48,LOC05" || y == "48,loc05" || y == "48,LOC06" || y == "48,loc06" || y == "48,LOC07" || y == "48,loc07" || y == "48,LOC08" || y == "48,loc08" || y == "48,LOC09" || y == "48,loc09" || y == "48,LOC10" || y == "48,loc10" || y == "48,LOC11" || y == "48,loc11" || y == "48,LOC12" || y == "48,loc12" || y == "48,SPO01" || y == "48,spo01" || y == "48,SPO02" || y == "48,spo02" || y == "48,SPO03" || y == "48,spo03" || y == "48,SPO04" || y == "48,spo04" || y == "48,SPO05" || y == "48,spo05") {
      answertwo = "<i>Dr Turner isn't here. You can't talk to him, you can only talk about him.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "65,01" || y == "65,02" || y == "65,03" || y == "65,04" || y == "65,05" || y == "65,06" || y == "65,07" || y == "65,08" || y == "65,09" || y == "65,10" || y == "65,11" || y == "65,12" || y == "65,13" || y == "65,14" || y == "65,15" || y == "65,16" || y == "65,17" || y == "65,18" || y == "65,19" || y == "65,20" || y == "65,21" || y == "65,22" || y == "65,23" || y == "65,24" || y == "65,25" || y == "65,26" || y == "65,27" || y == "65,28" || y == "65,29" || y == "65,30" || y == "65,31" || y == "65,32" || y == "65,33" || y == "65,34" || y == "65,35" || y == "65,36" || y == "65,37" || y == "65,38" || y == "65,39" || y == "65,40" || y == "65,41" || y == "65,42" || y == "65,43" || y == "65,44" || y == "65,45" || y == "65,46" || y == "65,47" || y == "65,65" || y == "65,49" || y == "65,50" || y == "65,51" || y == "65,52" || y == "65,53" || y == "65,54" || y == "65,55" || y == "65,56" || y == "65,57" || y == "65,58" || y == "65,59" || y == "65,60" || y == "65,61" || y == "65,62" || y == "65,63" || y == "65,64" || y == "65,65" || y == "65,66" || y == "65,67" || y == "65,LOC01" || y == "65,loc01" || y == "65,LOC02" || y == "65,loc02" || y == "65,LOC03" || y == "65,loc03" || y == "65,LOC04" || y == "65,loc04" || y == "65,LOC05" || y == "65,loc05" || y == "65,LOC06" || y == "65,loc06" || y == "65,LOC07" || y == "65,loc07" || y == "65,LOC08" || y == "65,loc08" || y == "65,LOC09" || y == "65,loc09" || y == "65,LOC10" || y == "65,loc10" || y == "65,LOC11" || y == "65,loc11" || y == "65,LOC12" || y == "65,loc12" || y == "65,SPO01" || y == "65,spo01" || y == "65,SPO02" || y == "65,spo02" || y == "65,SPO03" || y == "65,spo03" || y == "65,SPO04" || y == "65,spo04" || y == "65,SPO05" || y == "65,spo05") {
      answertwo = "<i>Dr Rose isn't here. You can't talk to her, you can only talk about her.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "66,01" || y == "66,02" || y == "66,03" || y == "66,04" || y == "66,05" || y == "66,06" || y == "66,07" || y == "66,08" || y == "66,09" || y == "66,10" || y == "66,11" || y == "66,12" || y == "66,13" || y == "66,14" || y == "66,15" || y == "66,16" || y == "66,17" || y == "66,18" || y == "66,19" || y == "66,20" || y == "66,21" || y == "66,22" || y == "66,23" || y == "66,24" || y == "66,25" || y == "66,26" || y == "66,27" || y == "66,28" || y == "66,29" || y == "66,30" || y == "66,31" || y == "66,32" || y == "66,33" || y == "66,34" || y == "66,35" || y == "66,36" || y == "66,37" || y == "66,38" || y == "66,39" || y == "66,40" || y == "66,41" || y == "66,42" || y == "66,43" || y == "66,44" || y == "66,45" || y == "66,46" || y == "66,47" || y == "66,66" || y == "66,49" || y == "66,50" || y == "66,51" || y == "66,52" || y == "66,53" || y == "66,54" || y == "66,55" || y == "66,56" || y == "66,57" || y == "66,58" || y == "66,59" || y == "66,60" || y == "66,61" || y == "66,62" || y == "66,63" || y == "66,64" || y == "66,65" || y == "66,66" || y == "66,67" || y == "66,LOC01" || y == "66,loc01" || y == "66,LOC02" || y == "66,loc02" || y == "66,LOC03" || y == "66,loc03" || y == "66,LOC04" || y == "66,loc04" || y == "66,LOC05" || y == "66,loc05" || y == "66,LOC06" || y == "66,loc06" || y == "66,LOC07" || y == "66,loc07" || y == "66,LOC08" || y == "66,loc08" || y == "66,LOC09" || y == "66,loc09" || y == "66,LOC10" || y == "66,loc10" || y == "66,LOC11" || y == "66,loc11" || y == "66,LOC12" || y == "66,loc12" || y == "66,SPO01" || y == "66,spo01" || y == "66,SPO02" || y == "66,spo02" || y == "66,SPO03" || y == "66,spo03" || y == "66,SPO04" || y == "66,spo04" || y == "66,SPO05" || y == "66,spo05") {
      answertwo = "<i>Ron isn't here. You can't talk to him, you can only talk about him.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "02,16" || y == "16,02") {
      answertwo = "Is it really the best idea to drug this food with something that I don't even really know what it is? I don't think so.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "02,27" || y == "27,02") {
      answertwo = "Mixing the potpourri with the Chinese food will just make it uneatable.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "02,34" || y == "34,02") {
      answertwo = "The food isn't photogenic enough to make me want to take a photo of it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "02,36" || y == "02,39" || y == "02,52" || y == "02,63" || y == "36,02" || y == "36,57" || y == "39,02" || y == "39,57" || y == "52,02" || y == "52,57" || y == "57,36" || y == "57,39" || y == "57,52" || y == "57,63" || y == "63,02" || y == "63,57") {
      answertwo = "I don't think that Cat is hungry. He doesn't seem interested in the food.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "02,41" || y == "41,02") {
      answertwo = "Throwing the food in the cracks in the floor won't so any good.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "02,46" || y == "46,02") {
      answertwo = "It's a devious idea, but let's go for it.<br><i>Take card <b>57</b>. Remove cards <b>02</b> and <b>46</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "02,59" || y == "59,02") {
      answertwo = "I don't see a good reason to put makeup into the food.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "03,09" || y == "09,03") {
      answertwo = "It could be a good idea to tape something to the car, but what?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "03,10" || y == "10,03") {
      answertwo = "I don't see what good would it do.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "03,12" || y == "03,67" || y == "12,03" || y == "67,03") {
      answertwo = "I don't see how would taping the window help me.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "03,22" || y == "22,03") {
      answertwo = "Taping the metal detector doesn't seem as such a good idea.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "03,24" || y == "24,03") {
      answertwo = "I don't want to tie up anybody.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "03,34" || y == "34,03") {
      answertwo = "Here goes...I'll admit it's a primitive solution, but it works.<br><i>Take card <b>40</b>. Remove cards <b>03</b> nad <b>34</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "03,36" || y == "03,39" || y == "03,52" || y == "03,63" || y == "24,36" || y == "24,39" || y == "24,52" || y == "24,63" || y == "36,03" || y == "36,24" || y == "39,03" || y == "39,24" || y == "52,03" || y == "52,24" || y == "63,03" || y == "63,24") {
      answertwo = "I'm not going to tie up my little Cat!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "03,41" || y == "41,03") {
      answertwo = "This floor needs serious repair. A duct tape won't do it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "04,08" || y == "08,04") {
      answertwo = "Bow, my little tree, bow in front of your master.<br><i>As I use my special power, the tree gently bends one of it's branches all the way to the floor.<br>Take card <b>61</b>. Remove card <b>04</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "04,27" || y == "27,04") {
      answertwo = "I don't want to torture the tree with this smell.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "04,28" || y == "28,04") {
      answertwo = "I can't use the gem directly on the tree. It's not how it works.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "04,32" || y == "32,04") {
      answertwo = "It would be great if I could climb up the tree to get the camera, but it's to hard. The branches are too high to reach them.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "04,34" || y == "34,04") {
      answertwo = "I don't have the tree's phone number.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "08,01" || y == "08,05" || y == "08,11" || y == "08,15" || y == "08,18" || y == "08,25" || y == "08,29" || y == "08,30" || y == "08,31" || y == "08,35" || y == "08,38" || y == "08,42" || y == "08,45" || y == "08,47") {
      answertwo = "It would be interesting to read people's minds and make them do stuff, but it's also a bit creepy. Anyway, my power works only on plants and animals.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "08,27" || y == "27,08") {
      answertwo = "The plants in this potpourri have been dead for a long time, so my power doesn't work on it at all.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "08,36" || y == "36,08") {
      answertwo = "Come on cat, show me what you're made of.<br><i>The cat is immidiately put under my power and becomes a faithful servant.<br>Take card <b>52</b>. Remove card <b>36</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "08,39" || y == "39,08") {
      answertwo = "Come on cat, show me what you're made of.<br><i>The cat is immidiately put under my power and becomes a faithful servant.<br>Take card <b>63</b>. Remove card <b>39</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "08,52" || y == "52,08") {
      answertwo = "This cat will just continue singing no matter how much more of my power I spend on her. I have to accept that that's all I get from it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "08,61" || y == "61,08") {
      answertwo = "What more can I ask of this tree than what it's already done for me?";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "09,34" || y == "34,09") {
      answertwo = "If I could somehow put my phone into the car, we could follow it with the tracking app. But the car is locked, of course.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "09,40" || y == "40,09") {
      answertwo = "The tracking app on the phone will show us exactly where will the car go.<br><i>I tape the phone to the car, after calling Ron to come with his van to pick me up. I just have enough time to hide behind another car parked nearby when I see Dr Turner leaving the building. Fortunately, Ron arrives only a few minutes after. Rose joins us, and the two of us jump into Ron's car. The chase for Dr Turner begins!<br>Take envelope <b>SPO06</b>. Remove cards <b>09</b>, <b>35</b>, <b>40</b>, <b>LOC10</b> and <b>LOC11</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "10,59" || y == "59,10") {
      answertwo = "I spread some of the powder with a brush on the lock screen. Well well, look at this...<br><i>Take card <b>44</b>. Remove cards <b>10</b> and <b>59</b>.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "12,24" || y == "24,12") {
      answertwo = "I don't really see why would I throw the rope out of the window.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "12,27" || y == "27,12") {
      answertwo = "The potpourri does smell really intense, but if I've been carrying it for all this time, I'm not going to throw it out of the window now.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "12,34" || y == "34,12" || y == "34,67" || y == "67,34") {
      answertwo = "That's not much of a view to take a photo of it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "12,55" || y == "55,12") {
      answertwo = "Why would I do that? I just arrived here.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "14,41" || y == "41,14") {
      answertwo = "That could work if I actually had a metal detector. I have to find a way to get it from the security guard.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "16,27" || y == "27,16") {
      answertwo = "Why would I drug the potpourri? The smell itself is already poisonous enough.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "16,36" || y == "16,39" || y == "16,52" || y == "16,63" || y == "36,16" || y == "36,46" || y == "39,16" || y == "39,46" || y == "46,36" || y == "46,39" || y == "46,52" || y == "46,63" || y == "52,16" || y == "52,46" || y == "63,16" || y == "63,46") {
      answertwo = "I don't want to drug poor little Cat!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "17,59" || y == "59,17") {
      answertwo = "This is actually not a bad idea. But the security guard doesn't let me get near the lock.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "19,43" || y == "43,19") {
      answertwo = "Maybe a little tip will make the musician a bit more communicative.<br><i>I put the coin in musicians guitar case and I finally catch his attention. He thanks me and starts a conversation with me.<br>Take card <b>47</b>. Remove cards <b>19</b>, <b>31</b> and <b>43</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "21,51" || y == "51,21") {
      answertwo = "This is a little trick my mother taught me when I was a kid. I just have to gently shade the page with the pencil and...here it is!<br><i>The indentations on the page reveal what was written on the top page.<br>Take card <b>62</b>. Remove cards <b>21</b> and <b>51</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "22,41" || y == "41,22") {
      answertwo = "I'll find this ring even if it takes me all day!<br><i>Fortunately, even though the Opera is huge and the floor is cracked pretty much everywhere, my metal detector starts ringing in the very beginning of my search. There is something metalic right in the middle of the stage, where Diana von Raus likes to be.<br>Take card <b>54</b>. Remove cards <b>22</b> and <b>41</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "24,50" || y == "50,24") {
      answertwo = "You can learn how to make all kinds of knots on the internet.<br><i>Take card <b>55</b>. Remove cards <b>24</b> and <b>50</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "26,05" || y == "26,07" || y == "26,11" || y == "26,15" || y == "26,23" || y == "26,25" || y == "26,29" || y == "26,30" || y == "26,42" || y == "26,65" || y == "26,66") {
      answertwo = "It's fun to try it for a while, but I'm not getting anywhere with this.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "26,13") {
      answertwo = "Who would have thought that a leather jacket could look so good on me?<br><i>Use the input field bellow to act while having the appearance of the unknown man. You can always return to your usual form by using the usual input field above.</i>";
      unknownmanContainer.style.display = "block";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "26,20") {
      answertwo = "It takes only a second for me to turn into the delivery guy, looking like him to the last detail. There is even a delivery box on my back.<br><i>Use the input field below to act while having the appearance of the delivery guy. You can always return to your usual form by using the original input field above.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "block";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "26,33") {
      answertwo = "It's easy to take mayor Bundy's appearence. Now all I need is to mimic his signature fake smile.<br><i>Use the input field below to act while having the appearance of mayor Bundy. You can always return to your usual form by using the original input field above.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "block";
  } else if (y == "26,45") {
      answertwo = "I take Diana von Raus' appearance, but I can't seem to fake her accent. It's not working, everybody will see that something's wrong. I better not risk it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "26,48") {
      answertwo = "It's not that I dream of being a morally questionable doctor, but I'll do whatever is necessary to bring me closer to my goal.<br><i>Use the input field bellow to act while having the appearance of Dr Turner. You can always return to your usual form by using the usual input field above.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "block";
      bundyContainer.style.display = "none";
  } else if (y == "27,36" || y == "27,39" || y == "27,52" || y == "27,63" || y == "36,27" || y == "36,27" || y == "39,27" || y == "39,27") {
      answertwo = "I put Cat into the potpourri, but he can't stand the smell of it.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "32,61" || y == "61,32") {
      answertwo = "Nothing easier than getting to this camera now.<br><i>I sit on the bended branch and it lifts me right to the camera. Luckily, it's one of those cameras with local storage.<br>Take card <b>37</b>. Remove cards <b>32</b> and <b>61</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
  } else if (y == "34,37" || y == "37,34") {
      answertwo = "Let's see what did this camera record...<br></i>I put the microSD card into my phone and look for the footage of last half an hour.<br>Take special objects cards <b>SPO02</b>, <b>SPO03</b> and <b>SPO04</b>. Remove card <b>37</b>.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "34,36" || y == "34,39" || y == "34,52" || y == "34,63" || y == "36,34" || y == "39,34" || y == "52,34" || y == "63,34") {
      answertwo = "A photo of Cat isn't very useful, but he's just so adorable!";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "36,56" || y == "56,36") {
      answertwo = "I really hope that this water is clean, because Cat drinks a LOT of it.<br><i>Take card <b>39</b>. Remove cards <b>36</b> and <b>56</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "36,59" || y == "39,59" || y == "52,59" || y == "59,36" || y == "59,39" || y == "59,52" || y == "59,63" || y == "63,59") {
      answertwo = "Putting makeup on Cat isn't going to solve anything.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "44,1654852" || y == "44,2584561") {
      answertwo = "As I repeat the pattern the lock beeps and the doors open. I am pretty good at this!<br><i>I enter tha mayor's office and search for something that could bring some light to the story. There is a document in one of the desk drawers that catches my eye.<br>Take card <b>64</b>. Remove card <b>44</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "52,56" || y == "56,52") {
      answertwo = "I really hope that this water is clean, because Cat drinks a LOT of it.<br><i>Take card <b>63</b>. Remove cards <b>52</b> and <b>56</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "55,67" || y == "67,55") {
      answertwo = "This may not be the safest thing to do, but I don't have a choice. Here we go!<br></i>I hook my improvised anchor on the window sill and use the rope to climb down the window. Jenna unhooks the anchor and throws it down just before Dr Turner enters the room. That was close!<br>Take card <b>LOC11</b>. Remove cards <b>35</b>, <b>55</b>, <b>67</b> and <b>LOC10</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "53,2761") {
      answertwo = "Even if I know the code, I can't just go right to the lock and enter it. Nurse Barbara is sitting right there.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "M20" || y == "m20") {
      answertwo = "The receptionist told me that the man was heading to the metro station. So that's exactly where I'll go.<br><i>Take card <b>LOC02</b>. Remove cards <b>38</b> and <b>LOC01</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "M04" || y == "m04" || y == "A69" || y == "a69") {
      answertwo = "So this is where the newspaper lead me. But what now?<br><i>Take card <b>LOC03</b>. Remove cards <b>62</b>, <b>SPO01</b> and <b>LOC02</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "B50" || y == "b50") {
      answertwo = "This is the shop that the man went to. Where to from here?<br><i>Take card <b>LOC04</b>. Remove cards <b>47</b> and <b>LOC03</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "B31" || y == "b31") {
      answertwo = "Security camera footage shows that the sunglasses leather jacket guy went into this building. I go right to the door and just as I'm about to realise that I don't actually know what to do when I face the unknown man, I see it opening. I back off and somebody comes out of the house. It's...the unknown man!<br>And a second before he turns around and sees me, something happens. I feel a new kind of energy going through me. And for a brief moment, I think about the street musician that I spoke to earlier. And then I see my reflection on the window next to me. I AM that musician!<br>The unknown man passes right next to me and goes down the street. I have a new power, even more amazing than the old one. I easily return back to my normal self and enter the building.<br>Take cards <b>26</b> and <b>LOC05</b>. Remove cards <b>SPO02</b>, <b>SPO03</b>, <b>SPO04</b> and <b>LOC04</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "C84" || y == "c84") {
      answertwo = "Ron is working at the Opera. He said that I can come to see him whenever I want to.<br><i>Take card <b>LOC06</b>. Remove card <b>66</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "G70" || y == "g70") {
      answertwo = "I should take the drug to Dr Rose.<br><i>As I arrive to the hospital, I see Dr Rose in the hallway. We move a little on the side by the coffee machine, so that we can speak in private. I pass her the drug that is supposedly capable of removing our powers. She promises that she will send it to analysis immidiately and that she will try to make an antidote. This will take a while, so I should continue with my investigation in the meantime.<br>Take card <b>LOC07</b>. Remove cards <b>16</b> and <b>65</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "C29" || y == "c29") {
      answertwo = "I didn't think that the mayor could be invloved, but if that's what it takes, I'm going to bring down the mayor himself!<br><i>Take card <b>LOC08</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "H70" || y == "h70") {
      answertwo = "Finally! This magazine really is under the radar, it wasn't easy to find its whereabouts.<br><i>Take card <b>LOC09</b>. Remove card <b>07</b>.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  } else if (y == "C24" || y == "C30" || y == "c24" || y == "c30") {
      answertwo = "We arrive to the spot the tracking app lead us to and park across the street on a safe distance, so that nobody would spot us. We're here just in time to see mayor Bundy leaving the building, nodding in the doctor's direction. Dr Turner nods back, obviously not comfortable and goes to the entrance to the building. An armed soldier guarding the doors greets him there and passes him something that looks like a potion of some kind. Dr Turner drinks it, and a few moments later the soldier lets him in. Dr Rose turns to me and says:</i><br>This thing what he's drinking must be the drug that professor Martin gave you. My analysis of the drug shows that it's function is indeed to make our powers dissapear, so they must be giving it to people that enter as a precaution. Luckily, I've created an antidote.<br><i>Dr Rose gives me a pill and I swallow it, hopefully gaining immunity to this drug. <br>But then Ron, looking at the entrance with his binoculars, whispers in panic:</i><br>Guys, do you see the symbol on the doors? Rose, you know what it is. It's the symbol of Laki civilisation, the same parasite society that stole and destroyed Nahukat. My worst nightmares have come true: the Lakis are here.<br><i>I manage to articulate a question, shaking with fear:</i><br>But how are Lakis connected with everything? I thought that PEI is behind all of this.<br><i>Ron puts the binoculars down and takes his head in his hands.</i><br>Now I see what does PEI really stand for: 'Planet Earth Invasion'. They are doing it all over again!<br><i>Take card <b>LOC12</b>. Return all of the tracking app cards into the <b>SPO06</b> envelope.</i>";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
	} else {
  		answertwo = "That's not working. Try something else.";
      unknownmanContainer.style.display = "none";
      deliveryguyContainer.style.display = "none";
      turnerContainer.style.display = "none";
      bundyContainer.style.display = "none";
  	}
  	document.getElementById("bookPtwoAnswer").innerHTML = answertwo;
};

function deliveryGuy() {
  var deliveryguyinput = document.getElementById("deliveryGuy").value;
  var deliveryguyanswer;
  if (deliveryguyinput == "05,57") {
    deliveryguyanswer = "I didn't order this! Actually...never mind, I'll take it, I'm starving. It's already paid for? It must be my luck day!<br><i>The security guard digs into his Chinese noodles as I leave the building. Ten minutes later I return and see poor Tom sleeping like a baby on the chair. Sorry, Tom! I guess you won't be needing your metal detector for some time so I'll be free to borrow it.<br>Take card <b>22</b> and card <b>10</b>. Remove cards <b>05</b>, <b>14</b>, <b>17</b>, <b>20</b> and <b>57</b>. Return to your Ziggy appearence and use the original Game Book input field.</i>";
  } else if (deliveryguyinput == "05,02") {
    deliveryguyinput = "<i>What do I get from the security guard having something to eat? I should probably think this over a little before giving him the food.</i>";
  } else if (deliveryguyinput == "02,46" || deliveryguyinput == "46,02") {
    deliveryguyinput = "It's a devious idea, but let's go for it.<br><i>Take card <b>57</b>. Remove cards <b>02</b> and <b>46</b>.</i>";
	} else {
	  deliveryguyanswer = "That's probably not the best thing to do while wearing a delivery guy costume.";
  }
    document.getElementById("deliveryguyAnswer").innerHTML = deliveryguyanswer;
}

function unknownMan() {
  var unknownmaninput = document.getElementById("unknownMan").value;
  var unknownmananswer;
  if (unknownmaninput == "29,01") {
    unknownmananswer = "I wouldn't worry about the girl. What could she do, all by herself?";
  } else if (unknownmaninput == "29,08" || unknownmaninput == "29,26") {
    unknownmananswer = "Nobody can get in her by using their powers. That's why we make everybody take to drug before entering. But you already know that.";
  } else if (unknownmaninput == "29,13") {
    unknownmananswer = "Agent 27, are you here for the meeting?";
  } else if (unknownmaninput == "29,23") {
    unknownmananswer = "She's still not talking, no matter what we do to her.";
  } else if (unknownmaninput == "29,29") {
    unknownmananswer = "Nobody will get past me without me checking them out first. No exceptions, rules are rules.";
  } else if (unknownmaninput == "29,33") {
    unknownmananswer = "Mr Bundy was here a minute ago, you just missed him.";
  } else if (unknownmaninput == "29,48") {
    unknownmananswer = "Dr Turner is already here, he just came in.";
  } else if (unknownmaninput == "29,58") {
    unknownmananswer = "Oh, it's you, Agent 27. I'm sorry to make you do this, but you know the protocol.<br><i>The soldier gives me a small bottle with a drug, just like the one professor Martin gave me. I drink it, as I saw Dr Turner do it. I'm sweating with stress..will Dr Rose's antidote work? A few seconds pass and I still look like the ugly, leather loving, kidnapping criminal named Agent 27, as it seems.</i><br>All is good, go ahead.<br><i>The soldier opens the entrance doors, and...I'm in! Mother, here I come!<br>Chapter Two of the game is now finished. To continue Ziggy's adventure and finally save Lena, start Chapter Three. Thank you for playing!</i>";
  } else if (unknownmaninput == "05,33") {
    unknownmananswer = "I'm sorry, but the mayor is not in the office. You can leave your contact information with the secretary, and I'm sure that he will get back to you.";
  } else if (unknownmaninput == "05,17") {
    unknownmananswer = "I can't let you in, the mayor isn't here.";
  } else if (unknownmaninput == "42,48") {
    unknownmananswer = "The doctor isn't here, but he should be coming later today.";
  } else if (unknownmaninput == "42,53") {
    unknownmananswer = "I'm sorry, but you're not authorised to visit the ward without the doctor. I can't let you pass.";
  } else if (unknownmaninput == "58") {
    unknownmananswer = "<i>I go directly to the door, when the soldier stops me.</i><br>It's you, Agent 27. I'm sorry to make you do this, but you know the protocol.<br><i>The soldier gives me a small bottle with a drug, just like the one professor Martin gave me. I drink it, as I saw Dr Turner do it. I'm sweating with stress..will Dr Rose's antidote work? A few seconds pass and I still look like the ugly, leather loving, kidnapping criminal named Agent 27, as it seems.</i><br>All is good, go ahead.<br><i>The soldier opens the entrance doors, and...I'm in! Mother, here I come!<br>Chapter Two of the game is now finished. To continue Ziggy's adventure and finally save Lena, start Chapter Three. Thank you for playing!</i>";
	} else {
	  unknownmananswer = "That's probably not the best thing to do while wearing the unknown man costume.";
  }
    document.getElementById("unknownmanAnswer").innerHTML = unknownmananswer;
}

function turner() {
  var turnerinput = document.getElementById("turner").value;
  var turneranswer;
  if (turnerinput == "53") {
    turneranswer = "I go straight to the lock, nodding to nurse Barbara. She lets me pass without a word. This power is really cool.<i>You can now unlock the ward alphanumeric lock by entering the card number <b>53</b> followed by a number code, sepparated by a comma, without spaces.</i>";
  } else if (turnerinput == "42,01") {
  	turneranswer = "There was a girl asking about the ward here earlier. But I didn't let her near it, of course.";
  } else if (turnerinput == "42,11") {
  	turneranswer = "Dr Rose doesn't know anything about the ward. I am a professional and I follow the orders.";
  } else if (turnerinput == "42,13") {
  	turneranswer = "I didn't even notice that there was a man with you the other day. That's none of my business.";
  } else if (turnerinput == "42,53") {
  	turneranswer = "You're here to do your round? You're a little early today.";
  } else if (turnerinput == "42,23") {
  	turneranswer = "I don't have her listed as a patient. Should I know her?";
  } else if (turnerinput == "42,42") {
  	turneranswer = "I've been here all morning. There was only one girl asking about the ward, nothing unusual other than that.";
  } else if (turnerinput == "42,48") {
  	turneranswer = "Hello Doctor, you came a bit earlier for your round today.";
  } else if (turnerinput == "53,2761") {
      turneranswer = "This must be it...<br><i>I enter the code and it works. I will finally get to see what's hidden in this ward.<br>Take card <b>LOC10</b>. Remove cards <b>53</b>, <b>LOC08</b>, <b>LOC09</b> and <b>SPO05</b>. Return to your Ziggy appearence and use the original Game Book input field.</i>";
	} else {
	  turneranswer = "That's probably not the best thing to do while wearing the Dr Turner costume.";
  }
    document.getElementById("turnerAnswer").innerHTML = turneranswer;
}

function bundy() {
  var bundyinput = document.getElementById("bundy").value;
  var bundyanswer;
  if (bundyinput == "10") {
    bundyanswer = "The touchscreen lock that I now have access to. It requires a swipe pattern to unlock the door.<br><i>You can now unlock the touchscreen lock by entering the card number <b>10</b> followed by the sequence of numbers in the order of the swipe pattern. The card number and the numbers sequence should be separated by a comma, without spaces.</i>";
  } else if (bundyinput == "17") {
    bundyanswer = "I approach the lock and security guard just nods his head and let's me get to it. Yeah!<br><i>You can now unlock the touchscreen lock by entering the card number <b>17</b> followed by the sequence of numbers in the order of the swipe pattern. The card number and the numbers sequence should be separated by a comma, without spaces.</i>";
  } else if (bundyinput == "44") {
  	bundyanswer = "A clearly visible smudge appears on the touchscreen.<br><i>You can now unlock the touchscreen lock by entering the card number <b>44</b> followed by the sequence of numbers in the order of the swipe pattern. The card number and the numbers sequence should be separated by a comma, without spaces.</i>";
  } else if (bundyinput == "05,13") {
  	bundyanswer = "The mister you had meetings with? I don't know what could I say about him, you know him much better than me.";
  } else if (bundyinput == "05,17") {
  	bundyanswer = "Hello Mr Bundy. I was here while you were gone, not letting anyone in, of course.";
  } else if (bundyinput == "05,33") {
  	bundyanswer = "I thought you were in a meeting.";
  } else if (bundyinput == "10,59" || bundyinput == "59,10") {
  	bundyanswer = "I spread some of the powder with a brush on the lock screen. Well well, look at this...<br><i>Take card <b>44</b>. Remove cards <b>10</b> and <b>59</b>.";
  } else if (bundyinput == "17,59" || bundyinput == "59,17") {
  	bundyanswer = "I spread some of the powder with a brush on the lock screen. Well well, look at this...<br><i>Take card <b>44</b>. Remove cards <b>17</b> and <b>59</b>.";
  } else if (bundyinput == "42,48") {
  	bundyanswer = "The doctor isn't here, I'll let him know you were asking for him.";
  } else if (bundyinput == "42,53") {
  	bundyanswer = "Hello Mr Bundy. The doctor isn't here, so I'm affraid I can't let you in.";
  } else if (bundyinput == "44,1654852" || bundyinput == "44,2584561") {
    bundyanswer = "As I repeat the pattern the lock beeps and the doors open. I am pretty good at this!<br><i>I enter tha mayor's office and search for something that could bring some light to the story. There is a document in one of the desk drawers that catches my eye.<br>Take card <b>64</b>. Remove card <b>44</b>. Return to your Ziggy appearence and use the original Game Book input field.</i>";
  } else if (bundyinput == "58", bundyinput == "29,01" || bundyinput == "29,08" || bundyinput == "29,11" || bundyinput == "29,13" || bundyinput == "29,23" || bundyinput == "29,26" || bundyinput == "29,29" || bundyinput == "29,30" || bundyinput == "29,33" || bundyinput == "29,48" || bundyinput == "29,58") {
  	bundyanswer = "<i>I decide it may not be the best idea to enter as mayor Bundy. He was just here. What if he forgot something and comes back?</i>";
	} else {
	  bundyanswer = "That's probably not the best thing to do while wearing the Dr bundy costume.";
  }
    document.getElementById("bundyAnswer").innerHTML = bundyanswer;
}
