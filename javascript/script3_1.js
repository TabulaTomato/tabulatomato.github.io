function bookPthreeKeyPress(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("bookPthreeButton").click();
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

function hidePthreeElements() {
  document.getElementById("braunField").style.display = "none";
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
  var ceoaudio = document.getElementById("ceo");
  if (z == "01") {
  		answerthree = "I'm not sure I'm completely prepared for all of this, but I guess that there's no turning back now.";
      hidePthreeElements();
  } else if (z == "05" || z == "40") {
  		answerthree = "A scientist working in the lab.";
      hidePthreeElements();
  } else if (z == "07") {
  		answerthree = "The keycard that opens the doors in the staff quarters.";
      hidePthreeElements();
  } else if (z == "08") {
  		answerthree = "My ability to connect to animals and plants. I'm completely used to it by now.<br><i>To use this ability, enter ability card number <b>08</b> followed by the card number of the plant or animal you want to have an effect on in the Digital Game Book input field, separated by a comma.</i>";
      hidePthreeElements();
  } else if (z == "10") {
  		answerthree = "A very cute white lab rat.";
      hidePthreeElements();
  } else if (z == "21" || z == "25" || z == "29") {
  		answerthree = "One of the scientists on the lab team photo.";
      hidePthreeElements();
  } else if (z == "13") {
  		answerthree = "Agent 27 who works for the PEI. I'm currently wearing his face.";
      hidePthreeElements();
  } else if (z == "15") {
  		answerthree = "The rat is holding the keycard with its little teeth, just like I asked it to.";
      hidePthreeElements();
  } else if (z == "18") {
  		answerthree = "The CEO of PEI. He gives me a look that makes me anxious.";
      hidePthreeElements();
  } else if (z == "20" || z == "38") {
  		answerthree = "A scientist eating his lunch in the common area.";
      hidePthreeElements();
  } else if (z == "22") {
  		answerthree = "There is a drawing of the PEI floor plan on the wall. But, before I get to take a good look, the CEO makes me sit across from him and turn my back to the plan.";
      hidePthreeElements();
  } else if (z == "23") {
  		answerthree = "My mother must be somewhere in this building.";
      hidePthreeElements();
  } else if (z == "26") {
  		answerthree = "This ability is incredibly useful right now.<br><i>To use this ability, enter ability card number <b>26</b> followed by the card number of the person you want to take appearance of in the Digital Game Book input field, separated by a comma.</i>";
    hidePthreeElements();
  } else if (z == "27") {
  		answerthree = "The air vent in the CEO's room is half open.";
      hidePthreeElements();
  } else if (z == "30") {
  		answerthree = "As usual when I use this power, the little creature becomes my worthy partner.";
      hidePthreeElements();
  } else if (z == "37") {
  		answerthree = "I guess this is my new ability. I have to only think of somebody and I immediately see what this person is seeing. I promise to only use it in emergencies like this one.<br><i>To use this ability, enter ability card number <b>37</b> followed by the card number of the person whose eyes you want to see through in the Digital Game Book input field, separated by a comma.</i>";
      hidePthreeElements();
  } else if (z == "LOC01") {
  		answerthree = "There is nobody in the entrance hall. The only interesting thing I spot in there is a group photo <b>SPO01</b> on the wall. I move along to the common area, and I see a scientist <b>20</b> sitting at one of the tables, eating his lunch.";
      hidePthreeElements();
  } else if (z == "LOC02") {
      answerthree = "The laboratory door is open, fortunately. There is a scientist <b>05</b> working there. A white lab rat <b>10</b> seems bored sitting in it's cage. A big poster of periodic table of elements <b>SPO02</b> is on the wall. A locker <b>SPO03</b> with 5 compartments is in the corner of the room.";
      hidePthreeElements();
  } else if (z == "LOC03") {
      answerthree = "CEO's office isn't as fancy as I would have imagined. The CEO <b>18</b> doesn't look very happy. There is a floor plan <b>22<b> on the wall that I noticed when I entered the office, but it's behind my back now.";
      hidePthreeElements();
  } else if (z == "SPO01") {
      answerthree = "What a happy collective! The lab team photo shows five people. <br><i>Take cards <b>21</b>, <b>25<b> and <b>29</b>. The other two scientists you see on the photo are somewhere in the building.";
      hidePthreeElements();
  } else if (z == "SPO02") {
      answerthree = "A periodic table of elements, showing elements symbols with their according atomic numbers above.";
      hidePthreeElements();
  } else if (z == "SPO03") {
      answerthree = "The scientists' locker with five compartments. Each compartment has a 5 number combination lock.<br><i>You can open any of the compartments by entering the compartment's number in the Digital Game Book input field, followed by a 5 number combination, separated by a comma. For example, if you want to open compartment COM01 with the combination 11111, enter 'COM01,11111' in the Digital Game Book input field and press enter.</i>";
      hidePthreeElements();
  } else if (z == "SPO04") {
      answerthree = "I believe that this is what my mother sees at the moment. Maybe I could recognize the room?";
      hidePthreeElements();
  } else if (z == "01,01") {
      answerthree = "This is by far the most dangerous part of my quest of saving my mother. But I have to go through with it!";
      hidePthreeElements();
  } else if (z == "01,05" || z == "01,40") {
      answerthree = "The scientist seems very busy, but keeps an open eye on my every movement nonetheless.";
      hidePthreeElements();
  } else if (z == "01,07") {
      answerthree = "This keycard should be able to open the doors to the staff quarters.";
      hidePthreeElements();
  } else if (z == "01,08") {
      answerthree = "I don't think that there are may plants or animals in this place, but you never know when the power could come in handy.";
      hidePthreeElements();
  } else if (z == "01,10") {
      answerthree = "The rat is so bored that he seems to be eager for a little excitement.";
      hidePthreeElements();
  } else if (z == "01,13") {
      answerthree = "I'm obligated to wear his face a little longer. I'm only hoping that the real Agent 27 won't suddenly appear here.";
      hidePthreeElements();
  } else if (z == "01,15") {
      answerthree = "Thank you rat for doing this for me. You're probably the best living thing here.";
      hidePthreeElements();
  } else if (z == "01,18") {
      answerthree = "For all I know, this guy could be a very important person in the Lakis society. He gives me the creeps.";
      hidePthreeElements();
  } else if (z == "01,20" || z == "01,38") {
      answerthree = "He is occupied with his lunch. But I'm sure that my intimidating Agent 27 disguise will make him chatty.";
      hidePthreeElements();
  } else if (z == "01,21" || z == "01,25" || z == "01,29") {
      answerthree = "I wonder if these scientists know who do they work for. Or are they also Lakis themselves?";
      hidePthreeElements();
  } else if (z == "01,22") {
      answerthree = "It's so frustrating that I can't get a good look of the plan!";
      hidePthreeElements();
  } else if (z == "01,23") {
      answerthree = "I simply know that my mother is here somewhere. I kind of sense it in my body. Must be the efect of my gem.";
      hidePthreeElements();
  } else if (z == "01,26") {
      answerthree = "If I didn't have this power, things would be much more complicated right now.";
      hidePthreeElements();
  } else if (z == "01,30") {
      answerthree = "Don't worry my dear rat! I will not do any experiments on you, I will give you a much better assignment.";
      hidePthreeElements();
  } else if (z == "01,37") {
      answerthree = "Wow, this is the ultimate spying power! I always tried to understand other people's perspective on things, but I never thought that I would be able to do it so literally.";
      hidePthreeElements();
  } else if (z == "01,LOC01") {
      answerthree = "I must have come in a quiet time of the day, there is almost nobody around.";
      hidePthreeElements();
  } else if (z == "01,LOC02") {
      answerthree = "There is some standard lab equipment here, but I can also see a bunch of things that look a lot more sophisticated from what you can normally find in a lab here on Earth.";
      hidePthreeElements();
  } else if (z == "01,LOC03") {
      answerthree = "Why am I stuck in this office now? It seems as if the CEO isn't planning on letting me leave any time soon.";
      hidePthreeElements();
  } else if (z == "01,SPO01") {
      answerthree = "Such happy faces, working hard to colonize yet another planet.";
      hidePthreeElements();
  } else if (z == "01,SPO02") {
      answerthree = "It looks as a standard periodic table of elements.";
      hidePthreeElements();
  } else if (z == "01,SPO03") {
      answerthree = "Perhaps one of the scientists is keeping something useful in their locker compartment. But how do I open it?";
      hidePthreeElements();
  } else if (z == "01,SPO04") {
      answerthree = "How sad to think that my mother was held in this room for all this time.";
      hidePthreeElements();
  } else if (z == "05,01") {
      answerthree = "The girl isn't a threat, I'm sure. But I'm certain that you have more information on this than I.";
      hidePthreeElements();
  } else if (z == "05,05") {
      answerthree = "I love it here on Earth. What a rich planet! Our boss chose well.";
      hidePthreeElements();
  } else if (z == "05,07") {
      answerthree = "I have my card with me, of course.";
      hidePthreeElements();
  } else if (z == "05,08" || z == "05,26" || z == "05,37") {
      answerthree = "Yes Agent, I know that the boss wants us to find a way to obtain the powers ourselves. Sincerely, if our predecessors haven't been able to do it in all thos years they held Nahukat in occupation, I don't know how to do it here, on Earth. At least we've created the drug that suppresses them, that's already a great accomplishment.";
      hidePthreeElements();
  } else if (z == "05,10" || z == "05,30") {
      answerthree = "I have to admit that I've developed a certain attachment to it, just like humans do with their pets. Strange, isn't it?";
      hidePthreeElements();
  } else if (z == "05,13") {
      answerthree = "I'm here to help you with anything you need, Agent 27.";
      hidePthreeElements();
  } else if (z == "05,20") {
      answerthree = "Fred is so annoying. He's always around me. Do you see how he stood next to me on the photo? He even asked for a locker compartment next to mine. I should really complain to the boss about it.";
      hidePthreeElements();
  } else if (z == "05,21") {
      answerthree = "I assure you that she is the most valuable person in the lab. I couldn't say the same for Fred, though.";
      hidePthreeElements();
  } else if (z == "05,23") {
      answerthree = "She calmed down these last two days and stopped screaming for help all night long. We can finally get some sleep in the quarters.";
      hidePthreeElements();
  } else if (z == "05,25") {
      answerthree = "She seems cheerful, but she's a typical Laki. Did you know that everything in her room is colored dark?";
      hidePthreeElements();
  } else if (z == "05,29") {
      answerthree = "His has a very strange sense of humour. The joke of calling me 208668 got really old really fast.";
      hidePthreeElements();
  } else if (z == "05,LOC01") {
      answerthree = "I think that most of the team went out for lunch. That's why there's almost nobody in the common area.";
      hidePthreeElements();
  } else if (z == "05,LOC02") {
      answerthree = "We're working hard, but we're not getting close on figuring out how to transfer the Nahukat people powers onto us.";
      hidePthreeElements();
  } else if (z == "05,SPO01") {
      answerthree = "It's not the best photo of me. We took it on the Nahukat occupation holiday this year.";
      hidePthreeElements();
  } else if (z == "05,SPO02") {
      answerthree = "We thought that the human depiction of the table of elements was more decorative than Lakis', so we put this one in the lab.";
      hidePthreeElements();
  } else if (z == "05,SPO03") {
      answerthree = "We only keep our work clothes and that sort of things here.";
      hidePthreeElements();
  } else if (z == "13,01" || z == "13,05" || z == "13,07" || z == "13,08" || z == "13,10" || z == "13,13" || z == "13,18" || z == "13,20" || z == "13,21" || z == "13,22" || z == "13,23" || z == "13,25" || z == "13,26" || z == "13,27" || z == "13,29" || z == "13,30" || z == "13,37" || z == "13,LOC01" || z == "13,LOC02" || z == "13,LOC03" || z == "13,SPO01" || z == "13,SPO02" || z == "13,SPO03") {
      answerthree = "<i>Agent 27 isn't here. You can't talk with him, only about him.</i>";
      hidePthreeElements();
  } else if (z == "18,01" || z == "18,05" || z == "18,07" || z == "18,08" || z == "18,10" || z == "18,13" || z == "18,18" || z == "18,20" || z == "18,21" || z == "18,22" || z == "18,23" || z == "18,25" || z == "18,26" || z == "18,27" || z == "18,29" || z == "18,30" || z == "18,37" || z == "18,LOC01" || z == "18,LOC02" || z == "18,LOC03" || z == "18,SPO01" || z == "18,SPO02" || z == "18,SPO03") {
      answerthree = "<i>I try to stop his monologue, but he seems to completely ignore all my efforts. He just goes on and on, without saying anything relevant. Fortunately, I can turn my sound off.</i>";
      ceoaudio.play();
      hidePthreeElements();
  } else if (z == "20,01") {
      answerthree = "Oh...don't let me interfere with your desicions with what to do about the girl. I work in the lab, you work on the field.";
      hidePthreeElements();
  } else if (z == "20,05") {
      answerthree = "Kate...She's such a wonderful woman. She will accept my invitation for dinner one day, I'm sure. I just have to be patient.";
      hidePthreeElements();
  } else if (z == "20,07") {
      answerthree = "It's right here, always in my pocket.";
      hidePthreeElements();
  } else if (z == "20,08" || z == "20,26" || z == "20,37") {
      answerthree = "As you know, the drug we created to block the powers in people of Nahukat works perfectly. But how could we get these powers...well I'm afraid that we haven't had a lot of progress there. Tell the boss that he should be just a bit more patient with us. We'll find a way eventually now that we have Lena.";
      hidePthreeElements();
  } else if (z == "20,10" || z == "20,30") {
      answerthree = "It's a very resistant rat. It survived all the tests we already did with it.";
      hidePthreeElements();
  } else if (z == "20,13") {
      answerthree = "Would you put in a nice word for me with the boss? I know he's not happy with our lack of progress in the lab, but we need more time.";
      hidePthreeElements();
  } else if (z == "20,20") {
      answerthree = "When we had to move from Nahukat because we've drained all of it's resources, I have to admit that I started to doubt our way of life. But now that we've found Earth, I can see that our leader was right all along. We can colonize other planets forever!";
      hidePthreeElements();
  } else if (z == "20,21") {
      answerthree = "If she wasn't a scientist, she would have been an artist. I know drawing is a very human habit, but she's really good at it. Did you see her drawings of insects? They're everywhere.";
      hidePthreeElements();
  } else if (z == "20,23") {
      answerthree = "She's a great example of how well we could live on this planet. If Nahukat people survived here, Lakis should be able to adjust very well too. And I'm sure we have at least 50 beautiful years ahead of us until we destroy the planet's nature.";
      hidePthreeElements();
  } else if (z == "20,25") {
      answerthree = "She's very dark, that one. She even painted her locker compartment dark, did you notice?";
      hidePthreeElements();
  } else if (z == "20,29") {
      answerthree = "Just a type of person you can rely on, really careful. The only one of us who leaves their keycard in their locker compartment when they go out on a break, like we're supposed to. Oh...please don't say this to the boss! He's not happy with the lab team already, I don't want him to think that we're not following the security orders as well.";
      hidePthreeElements();
  } else if (z == "20,LOC01") {
      answerthree = "I prefer to take my break here. I believe that most of the others went out for lunch.";
      hidePthreeElements();
  } else if (z == "20,LOC02") {
      answerthree = "I love working at the lab! If the boss asks you about it, make sure I said so.";
      hidePthreeElements();
  } else if (z == "20,SPO01") {
      answerthree = "Aren't we a beautiful and happy family?";
      hidePthreeElements();
  } else if (z == "20,SPO02") {
      answerthree = "Braun makes the most use of it. He is the chemist of the team, as you know.";
      hidePthreeElements();
  } else if (z == "20,SPO03") {
      answerthree = "We all changed our lock combinations into something that was easier to remember than the random ones that we were given in the beginning.";
      hidePthreeElements();
  } else if (z == "21,01" || z == "21,05" || z == "21,07" || z == "21,08" || z == "21,10" || z == "21,13" || z == "21,18" || z == "21,20" || z == "21,21" || z == "21,22" || z == "21,21" || z == "21,25" || z == "21,26" || z == "21,27" || z == "21,29" || z == "21,30" || z == "21,37" || z == "21,LOC01" || z == "21,LOC02" || z == "21,LOC03" || z == "21,SPO01" || z == "21,SPO02" || z == "21,SPO03") {
      answerthree = "<i>Laurie Haage isn't here. You can't talk with her, only about her.</i>";
      hidePthreeElements();
  } else if (z == "23,01" || z == "23,05" || z == "23,07" || z == "23,08" || z == "23,10" || z == "23,13" || z == "23,18" || z == "23,20" || z == "23,21" || z == "23,22" || z == "23,23" || z == "23,25" || z == "23,26" || z == "23,27" || z == "23,29" || z == "23,30" || z == "23,37" || z == "23,LOC01" || z == "23,LOC02" || z == "23,LOC03" || z == "23,SPO01" || z == "23,SPO02" || z == "23,SPO03") {
      answerthree = "<i>Lena isn't here. You can't talk to her, only about her.</i>";
      hidePthreeElements();
  } else if (z == "25,01" || z == "25,05" || z == "25,07" || z == "25,08" || z == "25,10" || z == "25,13" || z == "25,18" || z == "25,20" || z == "25,21" || z == "25,22" || z == "25,23" || z == "25,25" || z == "25,26" || z == "25,27" || z == "25,29" || z == "25,30" || z == "25,37" || z == "25,LOC01" || z == "25,LOC02" || z == "25,LOC03" || z == "25,SPO01" || z == "25,SPO02" || z == "25,SPO03") {
      answerthree = "<i>Celia Gibbs isn't here. You can't talk to her, only about her.</i>";
      hidePthreeElements();
  } else if (z == "29,01" || z == "29,05" || z == "29,07" || z == "29,08" || z == "29,10" || z == "29,13" || z == "29,18" || z == "29,20" || z == "29,21" || z == "29,22" || z == "29,23" || z == "29,29" || z == "29,26" || z == "29,27" || z == "29,29" || z == "29,30" || z == "29,37" || z == "29,LOC01" || z == "29,LOC02" || z == "29,LOC03" || z == "29,SPO01" || z == "29,SPO02" || z == "29,SPO03") {
      answerthree = "<i>Donald Braun isn't here. You can't talk to him, only about him.</i>";
      hidePthreeElements();
  } else if (z == "07,10" || z == "10,07") {
      answerthree = "I try to give the card to the rat but he doesn't react to my efforts.";
      hidePthreeElements();
  } else if (z == "07,27" || z == "27,07") {
      answerthree = "Even if I could manage to throw the keycard right into the air vent, I don't think that that would do any good.";
      hidePthreeElements();
  } else if (z == "07,30" || z == "30,07") {
      answerthree = "Take it, my secret partner!<br><i>I carefully give the keycard to the rat, taking care that the CEO doesn't notice anything. Luckily, he is so into his speech of criticizing me that he doesn't see anything.<br>Take card <b>15</b>. Return card <b>07</b> in the characters/objects deck, you will need it later. Remove card <b>30</b>.";
      hidePthreeElements();
  } else if (z == "08,10" || z == "10,08") {
      answerthree = "I hope you don't mind helping me for a bit, my little friend!<br><i>The rat is actually happy to communicate with somebody else than the lab team that's been doing experiments on him for weeks.<br>Take card <b>30</b>. Remove card <b>10</b>.";
      hidePthreeElements();
  } else if (z == "08,30" || z == "30,08") {
      answerthree = "The rat is alredy helping me. I don't have to use my power again on him.";
      hidePthreeElements();
  } else if (z == "10,22" || z == "22,10") {
      answerthree = "The rat doesn't find the plan as interesting as I do.";
      hidePthreeElements();
  } else if (z == "10,27" || z == "27,10") {
      answerthree = "How am I supposed to make this rat go into the air vent?";
      hidePthreeElements();
  } else if (z == "15,22" || z == "22,15") {
      answerthree = "It seems like a good idea to make the rat take the keycard somwhere, but in the actual building, not on it's plan drawing.";
      hidePthreeElements();
  } else if (z == "22,27" || z == "27,22") {
      answerthree = "Taking the plan from the wall and throwing it into the air vent with CEO in front of me, seems not only very difficult but also pointless.";
      hidePthreeElements();
  } else if (z == "22,30" || z == "30,22") {
      answerthree = "I think that I can read the plan much better than the rat. I am a student of the University, after all.";
      hidePthreeElements();
  } else if (z == "26,05" || z == "26,20" || z == "26,21" || z == "26,25") {
      answerthree = "Is this really the right person I should turn into?";
      hidePthreeElements();
  } else if (z == "26,13") {
      answerthree = "I'm already in Agent 27's costume.";
      hidePthreeElements();
  } else if (z == "26,18") {
      answerthree = "Turning myself into the PEI CEO in front of him will only make him realise that I have powers and get me locked up.";
      hidePthreeElements();
  } else if (z == "26,23") {
      answerthree = "Pretending that I'm my mother won't help me save her. They know she's locked up so seeing her suddenly appear here could only blow my cover.";
      hidePthreeElements();
  } else if (z == "26,29") {
      answerthree = "Let's give it a go.<br><i>Use the input field below to act while having the appearance of Donald Braun. You can always return to your usual form by using the usual input field above.</i>";
      document.getElementById("braunField").style.display = "block";
      document.getElementById("clickToVent").style.display = "none";
  } else if (z == "27,30" || z == "30,27") {
      answerthree = "It's a good idea, but I won't send him into the air vent empty handed.";
      hidePthreeElements();
  } else if (z == "37,18") {
      answerthree = "I see myself as the CEO sees me. A strange feeling, really. But I also get to get a good look on the map right behind my back. And there is something else that catches my eye, in CEO's peripheral vision. A half opened air vent.<br><i>Take card <b>27</b> and map parts <b>MAP04</b>, <b>MAP05</b> and <b>MAP06</b> and put them on the right places next to tha map parts already on the table. Remove card <b>22</b>.</b>";
      hidePthreeElements();
  } else if (z == "37,05") {
      answerthree = "She's still working. As much as I would like to observe what are they doing in the laboratory, I don't have time for it now.";
      hidePthreeElements();
  } else if (z == "37,13") {
      answerthree = "I see the road in front of Agent 27's eyes, and his hands on the wheel. He is driving.";
      hidePthreeElements();
  } else if (z == "37,20") {
      answerthree = "He is still in the common area, eating his lunch. Looking through his eyes while he's eating isn't an especially enjoyable feeling.";
      hidePthreeElements();
  } else if (z == "37,21" || z == "37,25") {
      answerthree = "She is in a restaurant somewhere. I see two of her lab team members sitting at the table.";
      hidePthreeElements();
  } else if (z == "37,23") {
      answerthree = "My mother is in a room.<br><i>You can see what does Lena see through her eyes depicted on card <b>SPO04</b>.</i>";
      hidePthreeElements();
  } else if (z == "37,29") {
      answerthree = "He is in a restaurant somewhere. I see two of his lab team members sitting at the table.";
      hidePthreeElements();
  } else if (z == "D01") {
      answerthree = "I just got here, I don't want to go out.";
      hidePthreeElements();
  } else if (z == "D02") {
      answerthree = "This door is locked. I can't get in.";
      hidePthreeElements();
  } else if (z == "D03") {
      answerthree = "The door is open. The room seems to be a laboratory.<br><i>Take card <b>LOC02</b> and map part <b>MAP02</b>. Place the map part right of the entrance hall.</i>";
      hidePthreeElements();
  } else if (z == "D04" || z == "D05") {
      answerthree = "This door is locked. There is a card lock on it, but where do I get a keycard?";
      hidePthreeElements();
  } else if (z == "COM05,35797" || z == "COM05,3,5,7,9,7") {
      answerthree = "I can't just go opening scientists' locker compartments in front of Dr Carner. I doubt that Agent 27 has the authority to do that.";
      hidePthreeElements();
	} else {
  		answerthree = randomanswerthree[Math.floor(Math.random()*randomanswerthree.length)];
      hidePthreeElements();
  	}
  	document.getElementById("bookPthreeAnswer").innerHTML = answerthree;
};

function hideBraunElements() {
  document.getElementById("clickToVent").style.display = "none";
}

var donald = 1;

function braun() {
	var braunlowercase = document.getElementById("braun").value;
  var brauninput = braunlowercase.toUpperCase();
  var braunrandom = [
    "That's probably not the best thing to do while wearing Donald Braun costume.",
    "I don't think that this will help.",
    "Doing this while being Donald Braun might not be the best idea.",
    "Shouldn't I be using this Donald Braun disguise for something else?",
    "There has to be a better way to use my Donald Braun mask than this one."
  ];
  var braunanswer;
  var ceoaudio = document.getElementById("ceo");
  if (brauninput == "01") {
    	braunanswer = "I'm not sure I'm completely prepared for all of this, but I guess that there's no turning back now.";
      hideBraunElements();
  } else if (brauninput == "05" || brauninput == "40") {
  		braunanswer = "A scientist working in the lab.";
      hideBraunElements();
  } else if (brauninput == "07") {
  		braunanswer = "The keycard that opens the doors in the staff quarters.";
      hideBraunElements();
  } else if (brauninput == "08") {
  		braunanswer = "My ability to connect to animals and plants. I'm completely used to it by now.<br><i>To use this ability, enter ability card number <b>08</b> followed by the card number of the plant or animal you want to have an effect on in the Digital Game Book input field, separated by a comma.</i>";
      hideBraunElements();
  } else if (brauninput == "10") {
  		braunanswer = "A very cute white lab rat.";
      hideBraunElements();
  } else if (brauninput == "21" || brauninput == "25") {
  		braunanswer = "One of the scientists on the lab team photo.";
      hideBraunElements();
  } else if (brauninput == "13") {
  		braunanswer = "Agent 27 who works for the PEI.";
      hideBraunElements();
  } else if (brauninput == "15") {
  		braunanswer = "The rat is holding the keycard with its little teeth, just like I asked it to.";
      hideBraunElements();
  } else if (brauninput == "18") {
  		braunanswer = "The CEO of PEI. He gives me a look that makes me anxious.";
      hideBraunElements();
  } else if (brauninput == "20" || brauninput == "38") {
  		braunanswer = "A scientist eating his lunch in the common area.";
      hideBraunElements();
  } else if (brauninput == "22") {
  		braunanswer = "There is a drawing of the PEI floor plan on the wall. But, before I get to take a good look, the CEO makes me sit across from him and turn my back to the plan.";
      hideBraunElements();
  } else if (brauninput == "23") {
  		braunanswer = "My mother must be somewhere in this building.";
      hideBraunElements();
  } else if (brauninput == "26") {
  		braunanswer = "This ability is incredibly useful right now.<br><i>To use this ability, enter ability card number <b>26</b> followed by the card number of the person you want to take appearance of in the Digital Game Book input field, separated by a comma.</i>";
      hideBraunElements();
  } else if (brauninput == "27") {
  		braunanswer = "The air vent in the CEO's room is half open.";
      hideBraunElements();
  } else if (brauninput == "29") {
  		braunanswer = "Donald Braun, a scientist whose appearance I borrowed.";
      hideBraunElements();
  } else if (brauninput == "30") {
  		braunanswer = "As usual when I use this power, the little creature becomes my worthy partner.";
      hideBraunElements();
  } else if (brauninput == "37") {
  		braunanswer = "I guess this is my new ability. I have to only think of somebody and I immediately see what this person is seeing. I promise to only use it in emergencies like this one.<br><i>To use this ability, enter ability card number <b>37</b> followed by the card number of the person whose eyes you want to see through in the Digital Game Book input field, separated by a comma.</i>";
      hideBraunElements();
  } else if (brauninput == "LOC01") {
  		braunanswer = "There is nobody in the entrance hall. The only interesting thing I spot in there is a group photo <b>SPO01</b> on the wall. I move along to the common area, and I see a scientist <b>20</b> sitting at one of the tables, eating his lunch.";
      hideBraunElements();
  } else if (brauninput == "LOC02") {
      braunanswer = "The laboratory door is open, fortunately. There is a scientist <b>05</b> working there. A white lab rat <b>10</b> seems bored sitting in it's cage. A big poster of periodic table of elements <b>SPO02</b> is on the wall. A locker <b>SPO03</b> with 5 compartments is in the corner of the room.";
      hideBraunElements();
  } else if (brauninput == "LOC03") {
      braunanswer = "CEO's office isn't as fancy as I would have imagined. The CEO <b>18</b> doesn't look very happy. There is a floor plan <b>22</b> on the wall that I noticed when I entered the office, but it's behind my back now.";
      hideBraunElements();
  } else if (brauninput == "SPO01") {
      braunanswer = "What a happy collective! The lab team photo shows five people. <br><i>Take cards <b>21</b>, <b>25<b> and <b>29</b>. You will find the other two scientists in the photo somewhere in the building.";
      hideBraunElements();
  } else if (brauninput == "SPO02") {
      braunanswer = "A periodic table of elements, showing elements symbols with their according atomic numbers above.";
      hideBraunElements();
  } else if (brauninput == "SPO03") {
      braunanswer = "The scientists' locker with five compartments. Each compartment has a 5 number combination lock.<br><i>You can open any of the compartments by entering the compartment's number in the Digital Game Book input field, followed by a 5 number combination, separated by a comma. For example, if you want to open compartment COM01 with the combination 11111, enter 'COM01,11111' in the Digital Game Book input field and press enter.</i>";
      hideBraunElements();
  } else if (brauninput == "SPO04") {
      braunanswer = "I believe that this is what my mother sees at the moment. Maybe I could recognize the room?";
      hideBraunElements();
  } else if (brauninput == "01,01") {
      braunanswer = "This is by far the most dangerous part of my quest of saving my mother. But I have to go through with it!";
      hideBraunElements();
  } else if (brauninput == "01,05" || brauninput == "01,40") {
      braunanswer = "The scientist seems very busy, but keeps an open eye on my every movement nonetheless.";
      hideBraunElements();
  } else if (brauninput == "01,07") {
      braunanswer = "This keycard should be able to open the doors to the staff quarters.";
      hideBraunElements();
  } else if (brauninput == "01,08") {
      braunanswer = "I don't think that there are may plants or animals in this place, but you never know when the power could come in handy.";
      hideBraunElements();
  } else if (brauninput == "01,10") {
      braunanswer = "The rat is so bored that he seems to be eager for a little excitement.";
      hideBraunElements();
  } else if (brauninput == "01,13") {
      braunanswer = "I have a feeling that Agent 27 has a his rank in the Laki society.";
      hideBraunElements();
  } else if (brauninput == "01,15") {
      braunanswer = "Thank you rat for doing this for me. You're probably the best living thing here.";
      hideBraunElements();
  } else if (brauninput == "01,18") {
      braunanswer = "For all I know, this guy could be a very important person in the Lakis society. He gives me the creeps.";
      hideBraunElements();
  } else if (brauninput == "01,20" || brauninput == "01,38") {
      braunanswer = "He is occupied with his lunch. But I'm sure that my intimidating Agent 27 disguise will make him chatty.";
      hideBraunElements();
  } else if (brauninput == "01,21" || brauninput == "01,25") {
      braunanswer = "I wonder if these scientists know who do they work for. Or are they also Lakis themselves?";
      hideBraunElements();
  } else if (brauninput == "01,22") {
      braunanswer = "It's so frustrating that I can't get a good look of the plan!";
      hideBraunElements();
  } else if (brauninput == "01,23") {
      braunanswer = "I simply know that my mother is here somewhere. I kind of sense it in my body. Must be the efect of my gem.";
      hideBraunElements();
  } else if (brauninput == "01,26") {
      braunanswer = "If I didn't have this power, things would be much more complicated right now.";
      hideBraunElements();
  } else if (brauninput == "01,29") {
      braunanswer = "I don't like being this guy any more than Agent 27. But I have to do what I have to do.";
      hideBraunElements();
  } else if (brauninput == "01,30") {
      braunanswer = "Don't worry my dear rat! I will not do any experiments on you, I will give you a much better assignment.";
      hideBraunElements();
  } else if (brauninput == "01,37") {
      braunanswer = "Wow, this is the ultimate spying power! I always tried to understand other people's perspective on things, but I never thought that I would be able to do it so literally.";
      hideBraunElements();
  } else if (brauninput == "01,LOC01") {
      braunanswer = "I must have come in a quiet time of the day, there is almost nobody around.";
      hideBraunElements();
  } else if (brauninput == "01,LOC02") {
      braunanswer = "There is some standard lab equipment here, but I can also see a bunch of things that look a lot more sophisticated from what you can normally find in a lab here on Earth.";
      hideBraunElements();
  } else if (brauninput == "01,LOC03") {
      braunanswer = "Why am I stuck in this office now? It seems as if the CEO isn't planning on letting me leave any time soon.";
      hideBraunElements();
  } else if (brauninput == "01,SPO01") {
      braunanswer = "Such happy faces, working hard to colonize yet another planet.";
      hideBraunElements();
  } else if (brauninput == "01,SPO02") {
      braunanswer = "It looks as a standard periodic table of elements.";
      hideBraunElements();
  } else if (brauninput == "01,SPO03") {
      braunanswer = "Perhaps one of the scientists is keeping something useful in their locker compartment. But how do I open it?";
      hideBraunElements();
  } else if (brauninput == "01,SPO04") {
      braunanswer = "How sad to think that my mother was held in this room for all this time.";
      hideBraunElements();
  } else if (brauninput == "05,01") {
      braunanswer = "Are you really worried about this girl? I'm sure she hasn't got a clue about what's happening.";
      hideBraunElements();
  } else if (brauninput == "05,05") {
      braunanswer = "Well yes, I stayed to finish this instead of going to a restaurant. I'm sure that the boss will appreciate that I'm working so hard.";
  } else if (brauninput == "05,07") {
      braunanswer = "I have my card with me, of course.";
      hideBraunElements();
  } else if (brauninput == "05,08" || brauninput == "05,26" || brauninput == "05,37") {
      braunanswer = "The results of the tests on the rat still show no progress on understanding these powers. But I'm starting taking a new approach with Dr Haage, we will be starting with the test tomorrow.";
      hideBraunElements();
  } else if (brauninput == "05,10" || brauninput == "05,30") {
      braunanswer = "He's been with us for a long time now. It's amazing that he's still alive, considering.";
      hideBraunElements();
  } else if (brauninput == "05,13") {
      braunanswer = "He was here before and he seemed to be interested in our lockers. Do you think that the boss is spying on us?";
      hideBraunElements();
  } else if (brauninput == "05,20") {
      braunanswer = "He is in the common area, I think. The further away from me, the better.";
      hideBraunElements();
  } else if (brauninput == "05,21" || brauninput == "05,25") {
      braunanswer = "I don't know where she is. You were just in a restaurant toghether, weren't you?";
      hideBraunElements();
  } else if (brauninput == "05,23") {
      braunanswer = "We've taken samples of Lena's blood again this morning. They are there, in the cabinet.";
      hideBraunElements();
  } else if (brauninput == "05,29") {
      braunanswer = "You've returned early from your break? It's nice to know that I'm not the only one thinking about work.";
      hideBraunElements();
  } else if (brauninput == "05,LOC01") {
      braunanswer = "Murphy is still on his break in the common area.";
      hideBraunElements();
  } else if (brauninput == "05,LOC02") {
      braunanswer = "You know that I love being in the lab. I still feel uncomfortable between humans.";
      hideBraunElements();
  } else if (brauninput == "05,SPO01") {
      braunanswer = "It's not the best photo of me.";
      hideBraunElements();
  } else if (brauninput == "05,SPO02") {
      braunanswer = "I swear I will take the table of elements and hide it unless you stop calling me 208668.";
      hideBraunElements();
  } else if (brauninput == "05,SPO03") {
      braunanswer = "Agent 27 was here before, and he seemed to be very interested in our lockers. That was strange.";
      hideBraunElements();
  } else if (brauninput == "13,01" || brauninput == "13,05" || brauninput == "13,07" || brauninput == "13,08" || brauninput == "13,10" || brauninput == "13,13" || brauninput == "13,18" || brauninput == "13,20" || brauninput == "13,21" || brauninput == "13,22" || brauninput == "13,23" || brauninput == "13,25" || brauninput == "13,26" || brauninput == "13,27" || brauninput == "13,29" || brauninput == "13,30" || brauninput == "13,37" || brauninput == "13,LOC01" || brauninput == "13,LOC02" || brauninput == "13,LOC03" || brauninput == "13,SPO01" || brauninput == "13,SPO02" || brauninput == "13,SPO03") {
      braunanswer = "<i>Agent 27 isn't here. You can't talk with him, only about him.</i>";
      hideBraunElements();
  } else if (brauninput == "18,01" || brauninput == "18,05" || brauninput == "18,07" || brauninput == "18,08" || brauninput == "18,10" || brauninput == "18,13" || brauninput == "18,18" || brauninput == "18,20" || brauninput == "18,21" || brauninput == "18,22" || brauninput == "18,23" || brauninput == "18,25" || brauninput == "18,26" || brauninput == "18,27" || brauninput == "18,29" || brauninput == "18,30" || brauninput == "18,37" || brauninput == "18,LOC01" || brauninput == "18,LOC02" || brauninput == "18,LOC03" || brauninput == "18,SPO01" || brauninput == "18,SPO02" || brauninput == "18,SPO03") {
      braunanswer = "<i>I try to stop his monologue, but he seems to completely ignore all my efforts. Fortunately, I can turn my sound off.</i>";
      ceoaudio.play();
      hideBraunElements();
  } else if (brauninput == "20,01") {
      braunanswer = "I feel a little sorry for the girl. Well, not everyone can be Laki. Did you hear what i did there? Ha ha ha!";
      hideBraunElements();
  } else if (brauninput == "20,07") {
      braunanswer = "It's right here, always in my pocket.";
      hideBraunElements();
  } else if (brauninput == "20,08" || brauninput == "20,26" || brauninput == "20,37") {
      braunanswer = "Sometimes I dream about us finally having their powers. Imagine all that we could do. We would be the most powerful civilization in the universe!";
      hideBraunElements();
  } else if (brauninput == "20,10" || brauninput == "20,30") {
      braunanswer = "Kate is doing all sorts of experiments on it. It's almost hard to watch.";
      hideBraunElements();
  } else if (brauninput == "20,13") {
      braunanswer = "That Agent is speaking bad about us to the boss, I'm sure. He was here before, asking all kind of questions.";
      hideBraunElements();
  } else if (brauninput == "20,20") {
      braunanswer = "You know that I don't like to go to restaurants with you. Humans make me nervous.";
      hideBraunElements();
  } else if (brauninput == "20,21") {
      braunanswer = "Kate loves working with her.";
      hideBraunElements();
  } else if (brauninput == "20,23") {
      braunanswer = "I'm glad I moved to the other wing, It was impossible to sleep in the room next to her, with all her crying for help.";
      hideBraunElements();
  } else if (brauninput == "20,25") {
      braunanswer = "She scares me a little.";
      hideBraunElements();
  } else if (brauninput == "20,29") {
      braunanswer = "I love how you call Kate 208668! How clever!";
      hideBraunElements();
  } else if (brauninput == "20,LOC01") {
      braunanswer = "I prefer to take my break here.";
      hideBraunElements();
  } else if (brauninput == "20,LOC02") {
      braunanswer = "It seems that we spend hours and hours in that lab without any success.";
      hideBraunElements();
  } else if (brauninput == "20,SPO01") {
      braunanswer = "Aren't we a beautiful and happy family?";
      hideBraunElements();
  } else if (brauninput == "20,SPO02") {
      braunanswer = "Ha ha ha, your jokes with the table of elements are wicked! Like the one when you call Kate 208668, it's a good one!";
      hideBraunElements();
  } else if (brauninput == "20,SPO03") {
      braunanswer = "I'm sure you're the only one that leaves his card in the locker when you go out.";
      hideBraunElements();
  } else if (brauninput == "21,01" || brauninput == "21,05" || brauninput == "21,07" || brauninput == "21,08" || brauninput == "21,10" || brauninput == "21,13" || brauninput == "21,18" || brauninput == "21,20" || brauninput == "21,21" || brauninput == "21,22" || brauninput == "21,23" || brauninput == "21,25" || brauninput == "21,26" || brauninput == "21,27" || brauninput == "21,29" || brauninput == "21,30" || brauninput == "21,37" || brauninput == "21,LOC01" || brauninput == "21,LOC02" || brauninput == "21,LOC03" || brauninput == "21,SPO01" || brauninput == "21,SPO02" || brauninput == "21,SPO03") {
      braunanswer = "<i>Laurie Haage isn't here. You can't talk with her, only about her.</i>";
      hideBraunElements();
  } else if (brauninput == "23,01" || brauninput == "23,05" || brauninput == "23,07" || brauninput == "23,08" || brauninput == "23,10" || brauninput == "23,13" || brauninput == "23,18" || brauninput == "23,20" || brauninput == "23,21" || brauninput == "23,22" || brauninput == "23,23" || brauninput == "23,25" || brauninput == "23,26" || brauninput == "23,27" || brauninput == "23,29" || brauninput == "23,30" || brauninput == "23,37" || brauninput == "23,LOC01" || brauninput == "23,LOC02" || brauninput == "23,LOC03" || brauninput == "23,SPO01" || brauninput == "23,SPO02" || brauninput == "23,SPO03") {
      braunanswer = "<i>Lena isn't here. You can't talk to her, only about her.</i>";
      hideBraunElements();
  } else if (brauninput == "25,01" || brauninput == "25,05" || brauninput == "25,07" || brauninput == "25,08" || brauninput == "25,10" || brauninput == "25,13" || brauninput == "25,18" || brauninput == "25,20" || brauninput == "25,21" || brauninput == "25,22" || brauninput == "25,23" || brauninput == "25,25" || brauninput == "25,26" || brauninput == "25,27" || brauninput == "25,29" || brauninput == "25,30" || brauninput == "25,37" || brauninput == "25,LOC01" || brauninput == "25,LOC02" || brauninput == "25,LOC03" || brauninput == "25,SPO01" || brauninput == "25,SPO02" || brauninput == "25,SPO03") {
      braunanswer = "<i>Celia Gibbs isn't here. You can't talk to her, only about her.</i>";
      hideBraunElements();
  } else if (brauninput == "29,01" || brauninput == "29,05" || brauninput == "29,07" || brauninput == "29,08" || brauninput == "29,10" || brauninput == "29,13" || brauninput == "29,18" || brauninput == "29,20" || brauninput == "29,21" || brauninput == "29,22" || brauninput == "29,23" || brauninput == "29,25" || brauninput == "29,26" || brauninput == "29,27" || brauninput == "29,29" || brauninput == "29,30" || brauninput == "29,37" || brauninput == "29,LOC01" || brauninput == "29,LOC02" || brauninput == "29,LOC03" || brauninput == "29,SPO01" || brauninput == "29,SPO02" || brauninput == "29,SPO03") {
      braunanswer = "<i>Donald Braun isn't here. You can't talk to her, only about her.</i>";
      hideBraunElements();
  } else if (brauninput == "07,10" || brauninput == "10,07") {
      braunanswer = "I try to give the card to the rat but he doesn't react to my efforts.";
      hideBraunElements();
  } else if (brauninput == "07,30" || brauninput == "30,07") {
      braunanswer = "Take it, my secret partner!<br><i>I carefully give the keycard to the rat, taking care that the CEO doesn't notice anything. Luckily, he is so into his speech of criticizing me that he doesn't see anything.<br>Take card <b>15</b>. Return card <b>07</b> in the characters/objects deck. Remove card </b>30</b>.";
      hideBraunElements();
  } else if (brauninput == "07,27" || brauninput == "27,07") {
      braunanswer = "Even if I could manage to throw the keycard right into the air vent, I don't think that that would do any good.";
      hideBraunElements();
  } else if (brauninput == "08,10" || brauninput == "10,08") {
      braunanswer = "I hope you don't mind helping me for a bit, my little friend!<br><i>The rat is actually happy to communicate with somebody else than the lab team that's been doing experiments on him for weeks.<br>Take card <b>30</b>. Remove card <b>10</b>.";
      hideBraunElements();
  } else if (brauninput == "08,15" || brauninput == "08,30" || brauninput == "15,08" || brauninput == "30,08") {
      braunanswer = "The rat is alredy helping me. I don't have to use my power again on him.";
      hideBraunElements();
  } else if (brauninput == "10,22" || brauninput == "22,10") {
      braunanswer = "The rat doesn't find the plan as interesting as I do.";
      hideBraunElements();
  } else if (brauninput == "10,27" || brauninput == "27,10") {
      braunanswer = "How am I supposed to make this rat go into the air vent?";
      hideBraunElements();
  } else if (brauninput == "15,22" || brauninput == "22,15") {
      braunanswer = "It seems like a good idea to make the rat take the keycard somwhere, but in the actual building, not on it's plan drawing.";
      hideBraunElements();
  } else if (brauninput == "15,27" || brauninput == "27,15") {
      braunanswer = "Come on rat, it's adventure time!<br><i>While the CEO is still talking with no end, the rat discretely goes to the air vent, carrying the keycard.<br><i>Remove cards <b>15</b> and <b>27</b>.<br>You can now guide the rat through the ventilation ducts.</i>";
      document.getElementById("clickToVent").style.display = "block";
  } else if (brauninput == "22,30" || brauninput == "30,22") {
      braunanswer = "I think that I can read the plan much better than the rat. I am a student of the University, after all.";
      hideBraunElements();
  } else if (brauninput == "22,27" || brauninput == "27,22") {
      braunanswer = "Taking the plan from the wall and throwing it into the air vent with CEO in front of me, seems not only very difficult but also pointless.";
      hideBraunElements();
  } else if (brauninput == "26,05" || brauninput == "26,13" || brauninput == "26,18" || brauninput == "26,20" || brauninput == "26,21" || brauninput == "26,23" || brauninput == "26,25") {
      braunanswer = "I have to get back to my Ziggy appearance to be able to change it into someone else.";
      hideBraunElements();
  } else if (brauninput == "27,30" || brauninput == "30,27") {
      braunanswer = "It's a good idea, but I won't send him into the air vent empty handed.";
      hideBraunElements();
  } else if (brauninput == "37,23") {
      braunanswer = "My mother is still in the same room, obviously. If only I could get to her somehow.";
      hideBraunElements();
  } else if (brauninput == "37,18") {
      braunanswer = "I see myself as the CEO sees me. A strange feeling, really. But I also get to get a good look on the map right behind my back. And there is something else that catches my eye, in CEO's peripheral vision. A half opened air vent.<br><i>Take card <b>27</b> and map parts <b>MAP04</b>, <b>MAP05</b> and <b>MAP06</b> and put them on the right places next to tha map parts already on the table. Remove card <b>22</b>.</b>";
      hideBraunElements();
  } else if (brauninput == "37,05" || brauninput == "37,40") {
      braunanswer = "She's still working. As much as I would like to observe what are they doing in the laboratory, I don't have time for it now.";
      hideBraunElements();
  } else if (brauninput == "37,13") {
      braunanswer = "I see the road in front of Agent 27's eyes, and his hands on the wheel. He is driving.";
      hideBraunElements();
  } else if (brauninput == "37,23") {
      braunanswer = "My mother is in a room.<br><i>You can see what does Lena see through her eyes depicted on card <b>SPO04</b>.</i>";
      hideBraunElements();
  } else if (brauninput == "37,20" || brauninput == "37,38") {
      braunanswer = "He is still in the common area, eating his lunch. Looking through his eyes while he's eating isn't an especially enjoyable feeling.";
      hideBraunElements();
  } else if (brauninput == "37,21" || brauninput == "37,25") {
      braunanswer = "She is in a restaurant somewhere. I see two of her lab team members sitting at the table.";
      hideBraunElements();
  } else if (brauninput == "37,29") {
      braunanswer = "He is in a restaurant somewhere. I see two of his lab team members sitting at the table.";
      hideBraunElements();
  } else if (brauninput == "COM05,35797" || brauninput == "COM05,3,5,7,9,7") {
      donald = 2;
      braunanswer = "Aha!<br><i>The combination lock opens and I take the keycard. Now I can finally pass the door in the common area.<br>But just as I'm about to leave, a man enters the lab and starts yelling at me. It seems to be the boss. He orders me to follow him into his office, locks the office door, tells me to sit and starts to lecture me. I get pretty bored soon enough and I start to think about my mother. Suddenly, an image appears in front of my face. An image of a room.</i> <br>Could it be that I'm seeing what she is seeing?<br><i>Take cards <b>07</b>, <b>37</b>, <b>38</b>, <b>40</b>, <b>LOC03</b>, <b>SPO04</b>, and map part <b>MAP03</b>. Place the map part left of the entrance hall.<br>Remove cards <b>05</b> and <b>20</b>. <br>Remove cards <b>SPO01</b>, <b>SPO02</b> and <b>SPO03</b>. <br>Remove cards <b>LOC01</b> and <b>LOC02</b> (but keep the other cards from the location on the table).<br>You can't use your ability to take someone's appearance now, while the CEO is watching you. Turn the card <b>26</b> upside down for the time being. Continue to play in Donald Braun appearance, using this input field.</i>";
      hideBraunElements();
  } else if (brauninput == "D01" && donald == 1) {
      braunanswer = "I just got here, I don't want to go out.";
      hideBraunElements();
  } else if (brauninput == "D01" && donald == 2) {
      braunanswer = "I can't get out of CEO's office. He locked me in it and he seems to want to lecture me for a long time.";
      hideBraunElements();
  } else if (brauninput == "D02" && donald == 1) {
      braunanswer = "This door is locked. I can't get in.";
      hideBraunElements();
  } else if (brauninput == "D02" && donald == 2) {
      braunanswer = "I can't get out of CEO's office. He locked me in it and he seems to want to lecture me for a long time.";
      hideBraunElements();
  } else if (brauninput == "D03" && donald == 1) {
      braunanswer = "The door is open. The room seems to be a laboratory.<br><i>Take card <b>LOC02</b> and map part <b>MAP02</b>. Place the map part right of the entrance hall.</i>";
      hideBraunElements();
  } else if (brauninput == "D03" && donald == 2) {
      braunanswer = "I can't get out of CEO's office. He locked me in it and he seems to want to lecture me for a long time.";
      hideBraunElements();
  } else if (brauninput == "D04" && donald == 1 || brauninput == "D05" && donald == 1) {
      braunanswer = "This door is locked. There is a card lock on it, but where do I get a keycard?";
      hideBraunElements();
  } else if (brauninput == "D04" && donald == 2 || brauninput == "D05" && donald == 2) {
      braunanswer = "I can't get out of CEO's office. He locked me in it and he seems to want to lecture me for a long time.";
      hideBraunElements();
	} else {
	    braunanswer = braunrandom[Math.floor(Math.random()*braunrandom.length)];
      hideBraunElements();
  }
    document.getElementById("braunAnswer").innerHTML = braunanswer;
}
