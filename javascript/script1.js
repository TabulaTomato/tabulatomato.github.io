function bookPoneKeyPress(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("bookPoneButton").click();
        return false;
    }
    return true;
};

function hidePoneElements() {
  document.getElementById("01_End").style.display = "none";
}

console.log = function (param) {return;}

function bookPoneFunction() {
	var x = document.getElementById("bookPoneText").value;
  var randomanswerone = [
  "This isn't working. I should try something else.",
  "That's not the best idea I ever had.",
  "There must be something better to do.",
  "Hmmm...no, I don't think that's it."
];
  var answerone;
  var rulesone;
  if (x == "01") {
  		answerone = "<b>IMPORTANT: You can examine every character this way.<br><br>Now read the text bellow.</b><br><br>I’m Ziggy Wonder, a student at Majorton University. My mother left town yesterday saying that she needs to find herself over the phone. I find it very hard to believe that she would just do something like this and I intend to get to the bottom of it.<br><br><b>IMPORTANT: To see Ziggy's thoughts about her mother, enter '01,23' in the Digital Game Book input field and click 'OK' or press Enter. You have to to put Ziggy's card number first and Lena's card number second, separated by a comma, without spaces.</b>";
      rulesone = "Blabla"
      hidePoneElements();
  } else if (x == "02") {
  		answerone = "A house fly wandering around the library.";
      hidePoneElements();
  } else if (x == "03") {
  		answerone = "Laika is our dog. She is unusually quiet, probably because she misses my mother.";
      hidePoneElements();
  } else if (x == "04") {
  		answerone = "The projector I borrowed from the library.";
      hidePoneElements();
	} else if (x == "05") {
  		answerone = "<b>IMPORTANT: You can examine any card you want, but you have to examine the cards with the magnifying glass symbol.<br><br>Now read the text bellow.</b><br><br>Cookie mix for Laika's favourite cookies. The recipe on the box says to add some freshly chopped pumpkin in the mix before baking.<br><br><b>IMPORTANT: Try to feed Laika with the cookie mix. Enter '03,05' or '05,03' in the Digital Game Book input field and click 'OK' or press Enter.</b>";
      hidePoneElements();
	} else if (x == "06") {
  		answerone = "A cryptex with a six letter opening combination. It's still wet from Laika's saliva.<br><i>You can now open the cryptex by entering the card number <b>06</b> followed by the code in the input field separated by a comma, without spaces.</i>";
      hidePoneElements();
	} else if (x == "07") {
  		answerone = "A poster announcing a lecture on Bavaria by Jocelyn Hill in the library tonight.";
      hidePoneElements();
	} else if (x == "08") {
  		answerone = "My new ability of connecting with animals and plants around me is hard to define. It’s still unclear why I got this ability and what exactly I can do with it. Does it only give me a way to sense their feelings, or does it go beyond that to the point of actually effecting them?";
      hidePoneElements();
	} else if (x == "09") {
  		answerone = "Sandy is my mother’s colleague. They worked together for about 10 years and they became friends in the meantime.";
      hidePoneElements();
	} else if (x == "10") {
  		answerone = "My mother left me clues to find this Emma Korn person. I wonder why.";
      hidePoneElements();
	} else if (x == "11") {
  		answerone = "Jocelyn Hill is holding the lecture at the library tonight. She is sitting alone, looking at her computer and looks quite nervous.";
      hidePoneElements();
	} else if (x == "12") {
  		answerone = "It’s a brand new telescope lens.";
      hidePoneElements();
	} else if (x == "13") {
  		answerone = "There is a parrot flying in Korns’ garden. She must be very loyal to her owners if they let her out in the garden like this.";
      hidePoneElements();
	} else if (x == "14") {
  		answerone = "Mary Davis is my mother’s old friend whose hidden letter Laika brought to me.";
      hidePoneElements();
	} else if (x == "15") {
  		answerone = "The cookies I made for Laika.";
      hidePoneElements();
	} else if (x == "16") {
  		answerone = "The night sky seen with the telescope. It’s breathtaking. My mother left the telescope pointing to the Cygnus constellation.";
      hidePoneElements();
	} else if (x == "17") {
  		answerone = "A rare astronomy book. There is also a message inside written in my mother's handwriting. It says:<br><b>Look at the night sky.<br>α = a corner of Lovelyhood Park.<br>ζ = a corner of the Majorton Square.<br>Go to κ.</b>";
      hidePoneElements();
	} else if (x == "18") {
  		answerone = "Professor Martin is my mineralogy professor at the university. He is an expert in his field.";
      hidePoneElements();
	} else if (x == "19") {
  		answerone = "The money that Jamie gave me. There is around 300 pounds here.";
      hidePoneElements();
	} else if (x == "20") {
  		answerone = "The library projector is mounted on the ceiling.";
      hidePoneElements();
	} else if (x == "21") {
  		answerone = "It’s a photo of a mural on a wall. I can’t recognize where the photo was taken.";
      hidePoneElements();
	} else if (x == "22") {
  		answerone = "Jocelyn’s computer left all alone. It’s password protected.<br><i>You can now enter the password by entering the card number <b>22</b> followed by the password in the input field separated by a comma, without spaces. If you still don't have the password, the following happens:<br>Jocelyn returns from the toilet and I quickly move from the computer. I have to get this password somehow!<br>Return cards <b>26</b> and <b>43</b> from the rejected cards pile and put them on the table. Return card <b>22</b> into the characters/objects deck.</i>";
      hidePoneElements();
	} else if (x == "23") {
  		answerone = "My mother, who suddenly left town yesterday.";
      hidePoneElements();
  } else if (x == "24") {
  		answerone = "It's a letter that Laika brought to me. The letter says:<br><br><b>Dear Lena,<br>I saw this beautiful mural today and it reminded me so much of you. I decided I had to write to you in hope that you come and visit me. I miss you and Ziggy so much.<br>So, I left my apartment and went east, passing all the other buildings in my street. At the end of my street i turned left and quickly arrived to the square. I crossed it diagonally and continued east until I got to the river. After crossing the bridge, I took the first right. I walked a bit more and took the third street on the left. After some shopping, I arrived to the square and crossed it on its northern side. I continued to walk to the east and walked till the end of the street. That's when I saw the mural, right in front of me. All the memories we share came back to me. I really want to see you, Lena. <br>Love,<br>Mary.</b>";
      hidePoneElements();
	} else if (x == "25") {
  		answerone = "My mother’s telescope, placed pointing to the sky. Unfortunately, the lens is broken. I can see a sticker on the telescope with a logo of ‘Outer World Telescopes’. There is also a short text under the logo:<br><b>Find us on the northwest corner of two crossing streets, where couples always in broad daylight meet!</b>";
      hidePoneElements();
	} else if (x == "26") {
  		answerone = "A cup of tea I ordered from Mark, the barista.";
      hidePoneElements();
	} else if (x == "27") {
  		answerone = "The fly is now under my powers. I can move it wherever I want to and feel whatever it feels.";
      hidePoneElements();
	} else if (x == "28") {
  		answerone = "It’s the gem my mother left on Laika. She said that it’s family heritage. I used to take the gem for granted, but now that I think of it, it’s really different from any other stones I have ever seen. It would be good to have my mineralogy professor have a look at it at the University. As I put it on my neck, I start to have a funny feeling of connection with Laika, and even the plants in the house and the garden.<br><i>Take card <b>08</b>.</i><br><br><b>IMPORTANT: The game will sometimes give you a hint you to open a new location. What did Ziggy say about the professor? If you look at Majorton map, you can see that the University is located at the address E62. Enter 'E62' or 'e62' in the Digital Game Book input field to open this location.</b>";
      hidePoneElements();
	} else if (x == "29") {
  		answerone = "These are the mineralogy tests. Professor Martin keeps a good eye on them.";
      hidePoneElements();
	} else if (x == "30") {
  		answerone = "Peter is the salesman in the telescope shop. He seems enthusiastic about his job.";
      hidePoneElements();
	} else if (x == "31") {
  		answerone = "Jamie Elliott is a fellow student. We take mineralogy class together. He has been struggling all year with the class, and the professor definitely doesn’t favour him. He earned a big scholarship last year from his future employer, but he will lose it if he doesn’t pass the year.";
      hidePoneElements();
	} else if (x == "32") {
  		answerone = "Mark is a barista in the tea shop. He is at the bar, cleaning cups.";
      hidePoneElements();
	} else if (x == "33") {
  		answerone = "The mineralogy tests are now unsurveilled.";
      hidePoneElements();
	} else if (x == "34") {
  		answerone = "An empty cup on Jocelyn Hill’s table. She finished her tea.";
      hidePoneElements();
	} else if (x == "35") {
  		answerone = "The spray paint that I took from Loomey.";
      hidePoneElements();
	} else if (x == "36") {
  		answerone = "A pumpkin sprout planted in the Korns’ garden. It should take about three months for a ripe fruit to grow.";
      hidePoneElements();
	} else if (x == "37") {
  		answerone = "The flag of the University, still not up on the pole. They raise it every day at the same time, followed by the University hymn on the speakers.";
      hidePoneElements();
	} else if (x == "38") {
  		answerone = "I can suddenly make the parrot talk about anything I want. All I have to do is ask her.<br><i>You can now treat the parrot as a character and ask it about another character or an object by writing their according numbers in the input field separated by a comma, without spaces. Enter the card number of the parrot <b>38</b> first, and the character/object you want to speak about second.</i>";
      hidePoneElements();
	} else if (x == "39") {
  		answerone = "A note with some numbers written in my mother’s handwriting next to a logo of the library she used to work in. It was found hidden behind the broken lens in my mother’s telescope.";
      hidePoneElements();
	} else if (x == "40") {
  		answerone = "Our dog Laika seems unhappy. She must be missing my mother. I notice something hanging on her collar. It's the gem my mother used to carry on her neckless. Why would she leave it with Laika? <br><i>Take cards <b>03</b> and <b>28</b>. Remove card <b>40</b> from the game.</i>.<br><br><b>IMPORTANT: When you get new cards that don't have their provided slots on a location, put them in empty slots or somewhere on the side of the location.<br><br>All the cards with the hand symbol can be used right now. The objects/plants/animals that don't have this symbol are out of your reach for some reason and you can't use them, but you can talk about them.<br><br><b>Continue with examining the cards you were given. Examine the gem you found on Laika's collar.</b>";
      hidePoneElements();
	} else if (x == "41") {
  		answerone = "A ripe pumpkin fruit.";
      hidePoneElements();
	} else if (x == "42") {
  		answerone = "Loomey is a street artist currently working on a mural next to the telescope shop.";
      hidePoneElements();
	} else if (x == "43") {
  		answerone = "The computer of Jocelyn Hill, where she keeps her lecture on Bavaria.";
      hidePoneElements();
	} else if (x == "LOC01" || x == "loc01") {
  		answerone = "<b>IMPORTANT: Take cards 05, 21, 25 and 40 from the deck and put them face up on their provided slots on the location LOC01 card. <br><br>Every new location will have slots with card numbers written on them. Put these cards facing up on their provided slots each time you get a new location.<br><br>Now read the text bellow.</b><br><br>Our house looks so empty without my mother. Her telescope <b>(25)</b> is placed by the window, pointing at the sky. Our dog, Laika <b>(40)</b> is here, not as cheerful as usual. I can see the mix for Laika's favourite cookies <b>(05)</b> on the kitchen counter. There is also a framed photo <b>(21)</b> on the bar that I've never seen before.<br><br><b>IMPORTANT: Now you can examine your character Ziggy <b>01</b>. Enter '<b>01</b>' in the Digital Game Book input field and click 'OK' or press Enter.</b>";
      hidePoneElements();
	} else if (x == "LOC02" || x == "loc02") {
  		answerone = "'Outer Space Telescopes' shop is open, and a salesman <b>(30)</b> greets me when I walk in. On the other side of the street there is a street artist <b>(42)</b> working on a mural, with some spray paint <b>(35)</b> sitting next to her on the ground.";
      hidePoneElements();
	} else if (x == "LOC03" || x == "loc03") {
  		answerone = "Professor Martin <b>(18)</b> is sitting at his desk in the common working space. He has the tests <b>(29)</b> for tomorrow next to him. A bit further, a fellow student Jamie <b>(31)</b> is studying. I can see the University flag <b>(37)</b> pole through the window.";
      hidePoneElements();
	} else if (x == "LOC04" || x == "loc04") {
  		answerone = "Another World Library is calm, with only a few people browsing the books. There is a poster about a lecture <b>(07)</b> on the library wall. A projector <b>(20)</b> that is used in library events is mounted on the ceiling. The librarian <b>(09)</b> my mother used to work with is not very occupied at the moment. A boring house fly <b>(02)</b> is buzzing around the library.";
      hidePoneElements();
	} else if (x == "LOC05" || x == "loc05") {
  		answerone = "The tea shop is almost empty. I can see a woman <b>(11)</b> sitting in front of her computer <b>(43)</b> at one of the tables. Her cup <b>(34)</b> is empty. The barista <b>(32)</b> is cleaning the cups at the bar.";
      hidePoneElements();
	} else if (x == "LOC06" || x == "loc06") {
  		answerone = "Korn family farm is small, but cozy. The garden is beautiful and well kept, with plenty of herbs and vegetables. A parrot flying around <b>(13)</b> catches my eye, as well as pumpkin sprouts <b>(36)</b>. Mrs Korn <b>(10)</b> is standing by the house doors.";
      hidePoneElements();
	} else if (x == "LOC07" || x == "loc07") {
  		answerone = "Mary Davis' apartment is cozy and nicely furnished. There's a bunch of books on different subjects, beautiful artwork on the walls and a smell of freshly baked biscuits coming from the kitchen. Mary <b>(14)</b> welcomes me with a smile, very surprised to see me.";
      hidePoneElements();
	} else if (x == "01,01") {
  		answerone = "I'm very concerned about my mother. It's not that I don't want her to be happy, but to simply disappear like this is not something I would expect of her.";
      hidePoneElements();
	} else if (x == "01,02") {
  		answerone = "I'm not a big fan of house flies.";
      hidePoneElements();
	} else if (x == "01,03" || x == "01,40") {
  		answerone = "<b>IMPORTANT: You can ask any character about any object/plant/animal this way. Remember to enter the card number of the character you want to speak to first, and the card number of the object/plant/animal you want to speak about second.<br><br>You can communicate to all of the characters marked with the mouth symbol, ask them about other characters, locations and objects/plants/animals. You can also give them an object this way. The characters that aren't marked with the mouth symbol are not here, or can't communicate, so you won't be able to speak to them, but only about them.<br><br>Now read the text bellow.</b><br><br>Laika is quiet. I think she misses my mother and I'd like to do something to cheer her up.<br><br><b>IMPORTANT: To examine the cookie mix, enter '05' in the Digital Game Book input field and click 'OK' or press Enter.</b>";
      hidePoneElements();
	} else if (x == "01,04") {
  		answerone = "This could be useful, maybe not to me but to somebody else.";
      hidePoneElements();
	} else if (x == "01,05") {
  		answerone = "I think that these cookies would definitely cheer up Laika a bit.";
      hidePoneElements();
	} else if (x == "01,06") {
  		answerone = "Hmmm, a cryptex? My mother loves puzzles and codes, but I have a feeling that this is not just a game she left for me to play. It could be serious.";
      hidePoneElements();
	} else if (x == "01,07") {
  		answerone = "It could be interesting, but I’m not in a mood for a lecture today.";
      hidePoneElements();
	} else if (x == "01,08") {
    	answerone = "I don’t know if I'm going crazy or is this really happening. I actually feel like I can sense the tree in the garden. And I swear that I feel how Laika misses my mother. Maybe my mother leaving made me so confused that I’m starting to imagine things.";
      hidePoneElements();
	} else if (x == "01,09") {
  		answerone = "Sandy seems more down to earth than my mother ever was, but I know that they are good friends in spite of those differences.";
      hidePoneElements();
	} else if (x == "01,10") {
  		answerone = "This must be somebody important to my mother, considering all the clues she left for me to find her.";
      hidePoneElements();
	} else if (x == "01,11") {
  		answerone = "The lecturer seems quite nervous. I sense that she is not the type of person that easily speaks in front of an audience.";
      hidePoneElements();
	} else if (x == "01,12") {
  		answerone = "Now that I finally have a new lens, I could check out the night sky.";
      hidePoneElements();
	} else if (x == "01,13") {
  		answerone = "The parrot is flying around, but she's not leaving the garden. Where did the Korns manage to find such a obedient parrot?";
      hidePoneElements();
	} else if (x == "01,14") {
  		answerone = "My mother never spoke about Mary. I can’t help but wonder why she wanted me to find her, and kept her letter in a cryptex? It’s almost as if she wanted to keep her whereabouts secret from someone.";
      hidePoneElements();
	} else if (x == "01,15") {
  		answerone = "The cookies seem great! This mix never disappointed us.";
      hidePoneElements();
	} else if (x == "01,16") {
  		answerone = "It’s magical as always...I can easily recognize Cygnus, my mother showed it to me many times.";
      hidePoneElements();
	} else if (x == "01,17") {
  		answerone = "What a complicated book! Fortunately, I don't think that I have to read all of it. The part in my mother's handwriting is the only thing important, hopefully. If my telescope was fixed I could look at the night sky, like the book says.";
      hidePoneElements();
	} else if (x == "01,18") {
  		answerone = "My mineralogy professor is an expert in his field and has some of the most interesting lectures in the University. He lives for his minerals, really. His tests are not easy to pass, though.";
      hidePoneElements();
	} else if (x == "01,19") {
  		answerone = "Alright! Now I can buy the lens!";
      hidePoneElements();
	} else if (x == "01,20") {
  		answerone = "This projector could be useful. I wonder if I could borrow it.";
      hidePoneElements();
	} else if (x == "01,21") {
  		answerone = "I never noticed this photo before. How come that my mother put it out before leaving? And where was the photo taken? That’s a really nice piece of street art, but I’m not an expert on the subject.";
      hidePoneElements();
	} else if (x == "01,22") {
  		answerone = "With Jocelyn out of the picture, all I have to do is enter her password to get inside the computer and delete the lecture.";
      hidePoneElements();
	} else if (x == "01,23") {
  		answerone = "<b>IMPORTANT: You can ask any character about another character this way. Remember to always enter the card number of the character you want to speak to first and the card number of the character you want to speak about second.<br><br>Now read the text bellow.</b><br><br>My mother is in a way also my best friend. She has this magic power to make you feel better just by looking at you. But I always felt as if she was keeping secrets from me.<br><br><b>IMPORTANT: To hear Ziggy's thoughts on their home, enter '01,LOC01' or '01,loc01' in the Digital Game Book input field and click 'OK' or press Enter.</b>";
      hidePoneElements();
	} else if (x == "01,24") {
  		answerone = "So the photo must have come with the letter. Maybe I could figure out Mary’s address from her story.";
      hidePoneElements();
	} else if (x == "01,25") {
  		answerone = "Oh no! I was excited to look at the sky tonight. It's a little ritual my mother and I often do together.";
      hidePoneElements();
	} else if (x == "01,26") {
  		answerone = "Who could I offer this cup of tea to?";
      hidePoneElements();
	} else if (x == "01,27") {
  		answerone = "I've become the master of this poor little fly. I can make it go wherever I wish to.";
      hidePoneElements();
	} else if (x == "01,28") {
  		answerone = "This gem is the family heritage. My mother never let me touch it before, saying that she's afraid I'd damage it somehow. Now I see that she was hiding this weird power that the gem has from me. What's that all about?";
      hidePoneElements();
	} else if (x == "01,29") {
  		answerone = "The professor keeps his tests on the desk. If I could get him to move for a bit, I could get a better glance at them.";
      hidePoneElements();
	} else if (x == "01,30") {
  		answerone = "He seems to be very passionate about his job.";
      hidePoneElements();
	} else if (x == "01,31") {
  		answerone = "Poor Jamie! There is a big chance he will fail this year of University.";
      hidePoneElements();
	} else if (x == "01,32") {
  		answerone = "If I wasn’t in the middle of an investigation, I would have loved to have a coffee and a chat with this guy. He seems nice.";
      hidePoneElements();
	} else if (x == "01,33") {
  		answerone = "Ok, I have a moment to look at the tests before professor Martin comes back.";
      hidePoneElements();
	} else if (x == "01,34") {
  		answerone = "Jocelyn’s tea cup is empty. Maybe she would like another one?";
      hidePoneElements();
	} else if (x == "01,35") {
  		answerone = "Where could I leave my little mark?";
      hidePoneElements();
	} else if (x == "01,36") {
  		answerone = "I can’t wait till autumn to get some pumpkin! If only I could somehow make it grow faster.";
      hidePoneElements();
	} else if (x == "01,37") {
  		answerone = "This flag goes up at the same time every day, followed by the University song on the speakers. A very boring tradition, if you ask me.";
      hidePoneElements();
	} else if (x == "01,38") {
  		answerone = "It seems that somebody taught the parrot what to say about things. I don't think that it could figure out all of this by its own.";
      hidePoneElements();
	} else if (x == "01,39") {
  		answerone = "I don’t know what this number could mean, but maybe somebody at the library could have an idea about it.";
      hidePoneElements();
	} else if (x == "01,41") {
  		answerone = "Now that’s a full grown pumpkin ready to be picked!";
      hidePoneElements();
	} else if (x == "01,42") {
  		answerone = "She knows a lot about street art. Maybe she could know something about the mural on the photo.";
      hidePoneElements();
	} else if (x == "01,43") {
  		answerone = "If I could get Jocelyn to leave the table I could get into her computer.";
      hidePoneElements();
  } else if (x == "01,LOC01" || x == "01,loc01") {
      answerone = "<b>IMPORTANT: You can ask any character about a location this way. Remember to always enter the card number of the character you want to speak to first and the card number of the location you want to speak about second.<br><br>Now read the text bellow.</b><br><br>It's so strange to be here without my mother. It doesn't really feel like home.<br><br><b>IMPORTANT: To hear Ziggy's thoughts on Laika, enter '01,40' in the Digital Game Book input field and click 'OK' or press Enter.</b>";
      hidePoneElements();
  } else if (x == "01,LOC02" || x == "01,loc02") {
      answerone = "My mother was always passionate about astronomy. This was probably one of her favourite shops in town.";
      hidePoneElements();
  } else if (x == "01,LOC03" || x == "01,loc03") {
      answerone = "The University is vibrant as usual. All of Majorton's residents are very proud of such a good University in their otherwise small and insignificant town.";
      hidePoneElements();
  } else if (x == "01,LOC04" || x == "01,loc04") {
      answerone = "My mother loved her job. Sure, it's not as exciting as some other professions, but she made a big difference here. The library became much more popular since she started to work here. Another reason that makes it hard to believe she would just leave everything so easily.";
      hidePoneElements();
  } else if (x == "01,LOC05" || x == "01,loc05") {
      answerone = "I know that my mother was a loyal customer in this bar. I've been here maybe only a few times myself, usually I took my coffee near the University.";
      hidePoneElements();
  } else if (x == "01,LOC06" || x == "01,loc06") {
      answerone = "This must be a very important place for my mother if she left me all those clues to find it.";
      hidePoneElements();
  } else if (x == "01,LOC07" || x == "01,loc07") {
      answerone = "What could be so secretive about this place? It looks like a terribly normal apartment. You might even say it seems quite boring.";
      hidePoneElements();
	} else if (x == "09,01") {
  		answerone = "Hello my dear. It’s really nice to see you! Could you tell me why Lena didn't show up for work today? She left? Just like that? That's crazy! I mean, she is a bit free spirited, but she was always responsible. I can't believe that she would leave without saying anything to me. She didn't give notice either.";
      hidePoneElements();
	} else if (x == "09,02" || x == "09,27") {
  		answerone = "I know, these flies are so irritating! But I can't waste my time on catching them.";
      hidePoneElements();
	} else if (x == "09,03" || x == "09,40") {
  		answerone = "I’m sure that poor Laika is devastated. She is so attached to your mother.";
      hidePoneElements();
	} else if (x == "09,04") {
  		answerone = "Take it, just return it tomorrow.";
      hidePoneElements();
	} else if (x == "09,05" || x == "09,15") {
			answerone = "Thank you dear, but I don't have a dog.";
      hidePoneElements();
	} else if (x == "09,06") {
			answerone = "I've never seen one of these before. How interesting!";
      hidePoneElements();
	} else if (x == "09,07") {
  		answerone = "Yes, Jocelyn Hill will be giving a lecture here tonight. She came a few hours ago and she is very nervous about it. She went to calm down in the tea shop next door.";
      hidePoneElements();
	} else if (x == "09,08") {
  			answerone = "We can all have these feelings of deep connection with nature sometimes.";
      hidePoneElements();
	} else if (x == "09,09") {
  		answerone = "I’ve worked here for 15 years. And I must say that things started to be more interesting when your mother joined us. She organized all kinds of events, concerts, poetry readings, workshops...I never noticed that she was unhappy here. Actually now that I think about it, lately she did seem a bit distracted, as if something was worrying her.";
      hidePoneElements();
	} else if (x == "09,10") {
  		answerone = "I’m sorry but I’ve never met this woman.";
      hidePoneElements();
	} else if (x == "09,11" || x == "09,38") {
  		answerone = "I’ve never seen somebody so stressed about speaking in front of people. It’s not like she’ll be speaking in a stadium, I’d be surprised if we had more than 50 people in the audience.";
      hidePoneElements();
	} else if (x == "09,12") {
  		answerone = "I’m sorry but I can’t help you with this. I don’t know anything about skygazing.";
      hidePoneElements();
	} else if (x == "09,13") {
			answerone = "Parrots can be good pets. But I'm just not a pet person.";
      hidePoneElements();
	} else if (x == "09,14") {
  		answerone = "I can’t recall your mother mentioning somebody named Mary. But she did speak a few times about a long lost friend. They had a different opinion about a very important thing, that’s what she said. Maybe it was this Mary she was talking about.";
      hidePoneElements();
	} else if (x == "09,16") {
			answerone = "That’s really beautiful. I’m sure you’re better with these things than I am, though. The only constellation I can recognize in the sky is the Great Bear.";
      hidePoneElements();
	} else if (x == "09,17") {
  		answerone = "That's a rare book. Frankly, I’m shocked that someone wrote in it. People don't have any respect for books these days.";
      hidePoneElements();
	} else if (x == "09,18") {
			answerone = "I’ve seen professor Martin quite a few times in the library. A very charming and interesting man. He got close with your mother a few months ago. They used have tea together in the tea shop next door during her break.";
      hidePoneElements();
	} else if (x == "09,19") {
			answerone = "Where did you get all this money? Use it wisely my dear.";
      hidePoneElements();
	} else if (x == "09,20") {
			answerone = "You would like to borrow the projector? Of course I would love to help you, but unfortunately there is a lecture here tonight and we will be using it. I could probably let you have it tomorrow if that’s alright.";
      hidePoneElements();
	} else if (x == "09,21") {
  		answerone = "I can’t help you with identifying the mural. Unfortunately we don't have a good book on street art.";
      hidePoneElements();
	} else if (x == "09,22") {
  		answerone = "Keep an eye on it, Jocelyn would go crazy if something happened to her lecture.";
      hidePoneElements();
	} else if (x == "09,23") {
  		answerone = "Lena left town? That's incredible! I can't believe that she wouldn't say anything to me after all these years of friendship. No, I didn't notice anything very unusual about her lately. She did seem a bit distant though. Sometimes I saw that she isn't listening to what I'm saying and that her mind is somewhere else. And another thing, she became friends with professor Martin from the University not long ago. I even thought that she finally found a man that's worth her attention. Maybe she told him something about her intentions.";
      hidePoneElements();
	} else if (x == "09,24") {
			answerone = "What a curious letter. I would like to help you find her address, but it’s a bit hard without knowing where to start from.";
      hidePoneElements();
	} else if (x == "09,25") {
  		answerone = "Yes, I know that Lena is a passionate amateur astronomer. The lens is broken? I wish I could help you with that, but my paycheck is not until the beginning of next month and I’m kind of broke at the moment.";
      hidePoneElements();
	} else if (x == "09,26") {
  		answerone = "Thank you dear, I already had my tea.";
      hidePoneElements();
	} else if (x == "09,28") {
  		answerone = "I know this gem! Lena always wears it. Sometimes she would joke that it gives her magic powers. It’s stunning, isn’t it?";
      hidePoneElements();
	} else if (x == "09,29" || x == "09,33") {
  		answerone = "I don’t understand why you are asking me about this. Would you like some literature on mineralogy?";
      hidePoneElements();
	} else if (x == "09,30") {
			answerone = "I’ve never met him, but I’m aware of your mother’s fascination with space.";
      hidePoneElements();
	} else if (x == "09,31") {
			answerone = "I’m afraid I don’t know this young man.";
      hidePoneElements();
	} else if (x == "09,32") {
			answerone = "It’s that nice barista from the tea shop. He always welcomes me with a smile.";
      hidePoneElements();
	} else if (x == "09,33") {
			answerone = "I’m completely lost with technology. Lena was dealing with all the computers in the library, I’m very old fashioned I’m afraid.";
      hidePoneElements();
	} else if (x == "09,34") {
			answerone = "Jocelyn drinks tea all afternoon. She says it’s good for relaxing.";
      hidePoneElements();
	} else if (x == "09,35") {
			answerone = "I’m not a big fan of street art, if I’m being honest.";
      hidePoneElements();
	} else if (x == "09,36") {
			answerone = "I’m aware that it’s a bit early for pumpkin. You’ll have to wait till autumn I’m afraid.";
      hidePoneElements();
	} else if (x == "09,37") {
			answerone = "I heard that the University is quite good. Education is very important, Ziggy.";
      hidePoneElements();
	} else if (x == "09,38") {
			answerone = "A talking parrot? Quite amusing, I guess.";
      hidePoneElements();
	} else if (x == "09,39") {
			answerone = "Let me see this...This is a code for a book from our library. Let me just check in our database...It’s in the basement, where we keep only rare editions. Let me get it for you. <br><i>Take card <b>17</b>. Remove card <b>39</b>.</i>";
      hidePoneElements();
	} else if (x == "09,41") {
			answerone = "What a beautiful pumpkin! Where did you get it, it’s not pumpkin season yet?";
      hidePoneElements();
	} else if (x == "09,42") {
			answerone = "I’m not familiar with Loomey’s work. I’m a book person, I find visual arts a bit hard to understand.";
      hidePoneElements();
	} else if (x == "09,43") {
			answerone = "Jocelyn has the lecture on the computer. I think she spent all afternoon reading and memorising it.";
      hidePoneElements();
  } else if (x == "09,LOC01" || x == "09,loc01") {
      answerone = "You have a beautiful house, very pleasant indeed.";
      hidePoneElements();
  } else if (x == "09,LOC02" || x == "09,loc02") {
      answerone = "Sorry, I've never been to this shop. Lena is very much into astronomy, though. But I can't say that I share her passion.";
      hidePoneElements();
  } else if (x == "09,LOC03" || x == "09,loc03") {
      answerone = "We are lucky to have such a good University in town, aren't we? It keeps Majorton alive, with all the students that come from all over the country.";
      hidePoneElements();
  } else if (x == "09,LOC04" || x == "09,loc04") {
      answerone = "I've worked here forever. And I wouldn't change my job for the world. There is something so calming in being surrounded with books all day.";
      hidePoneElements();
  } else if (x == "09,LOC05" || x == "09,loc05") {
      answerone = "The tea shop is really nice and cozy. We often go for a cup of tea there. Well, Lena more often than myself.";
      hidePoneElements();
  } else if (x == "09,LOC06" || x == "09,loc06") {
      answerone = "I've never heard about this farm or its owners.";
      hidePoneElements();
  } else if (x == "09,LOC07" || x == "09,loc07") {
      answerone = "I don't think that I can tell you something about this apartment.";
      hidePoneElements();
	} else if (x == "10,01") {
			answerone = "What a pleasure to finally meet you, Ziggy. Lena told me so much about you. She is very proud of you!";
      hidePoneElements();
	} else if (x == "10,02" || x == "10,27") {
			answerone = "Look, a fly is completely harmless. They are boring, sure, but they are also a useful part of the ecosystem.";
      hidePoneElements();
	} else if (x == "10,03" || x == "10,40") {
			answerone = "Lena brings Laika with her sometimes. She’s a great dog. She isn't particularly fond of our parrot though!";
      hidePoneElements();
	} else if (x == "10,04") {
			answerone = "It’s a good projector. We don’t watch a lot of films here, we usually play board games.";
      hidePoneElements();
	} else if (x == "10,05") {
			answerone = "I could give you some pumpkin, but it's not the season yet.";
      hidePoneElements();
	} else if (x == "10,06") {
			answerone = "Lena left it for you? I'm sorry, but she didn't tell me the code to open it.";
      hidePoneElements();
	} else if (x == "10,07") {
			answerone = "There’s a lecture in the library tonight?";
      hidePoneElements();
	} else if (x == "10,08") {
			answerone = "I know what you mean. I feel like this since I moved to the countryside.";
      hidePoneElements();
	} else if (x == "10,09") {
			answerone = "I’ve never met Lena’s colleague.";
      hidePoneElements();
	} else if (x == "10,10") {
			answerone = "I have lived here with my husband and our kids for the past five years. It takes a lot of time and work to grow a garden but I wouldn't change a thing. I love having fresh produce, I love all the peace, I love the fresh air.";
      hidePoneElements();
	} else if (x == "10,11") {
			answerone = "I’ve never heard of her. You say that she is giving a lecture in the library tonight?";
      hidePoneElements();
	} else if (x == "10,12") {
			answerone = "This must have been expensive. So don’t let me near it, I can be very clumsy!";
      hidePoneElements();
	} else if (x == "10,13") {
			answerone = "We let our parrot Jimmy stretch his wings in the garden. He never escaped. He likes it here. Lena likes him too, she always talked to him as if he understood what she was saying.";
      hidePoneElements();
	} else if (x == "10,14") {
			answerone = "Actually, Lena did mention a friend named Mary. They used to be very close but they grew apart because of a different point of view on something. She got very emotional when she was telling me this. She said that nobody could ever understand her like Mary did.";
      hidePoneElements();
	} else if (x == "10,15") {
			answerone = "Thanks, but we don't have dogs. I'm sure that Laika can eat them all by herself.";
      hidePoneElements();
	} else if (x == "10,16") {
			answerone = "Wow, how beautiful. I would like to know more about stars.";
      hidePoneElements();
	} else if (x == "10,17") {
			answerone = "This literature is way too hard for me to understand. I know that Lena is an astronomy fan, however.";
      hidePoneElements();
	} else if (x == "10,18") {
			answerone = "I've never met professor Martin, but I know that Lena is seeing him for maybe a few months now. She spoke of him with great enthusiasm. I think she didn't tell you about it because she didn't want to put you in a weird position, with him being your professor. Anyway, probably it didn't really work out if she left town. I guess that she needed more from life than what this town could give her.";
      hidePoneElements();
	} else if (x == "10,19") {
			answerone = "Thanks Ziggy, but I won’t take your money. Keep it, I’m sure it will be useful.";
      hidePoneElements();
	} else if (x == "10,20") {
			answerone = "You want to borrow the projector? I don’t know what to say, to bad that the lecture is not happening some other day.";
      hidePoneElements();
	} else if (x == "10,21") {
			answerone = "Oh, I really like the mural in the photo, but I have no idea where the photo could have been taken.";
      hidePoneElements();
	} else if (x == "10,22") {
			answerone = "Girl, it’s really not a good idea to break into someone’s computer.";
      hidePoneElements();
	} else if (x == "10,23") {
			answerone = "Lena is gone? She was acting strange for some time now, so I kind of anticipated that it was leading to something. Lena is my dear friend. We grew close a few years ago, as she joined our environmentalist group 'Earthlings'. We do research on the big polluters in the country, write propositions of stricter laws for protecting the environment, promote zero waste living, that sort of thing. Around 2 months ago, Lena started to research something she didn't want to speak about. She went to Starchester city a few times during this investigation. She didn't want to involve anybody else, she said that the information she discovered could be dangerous. But when I asked her about it ten days ago, she said that she was mistaken. That all her research turned out to be irrelevant. It seemed very strange to me. Three days ago was the last time I saw her. She seemed concerned about something. She made me promise her that I would pass you a message if you ever come here. And she made me memorize it by heart, as if she didn't want any written trace of it. OK, here goes:<br><b>This heavenly Earth carries our dreams.<br>Even idealists sometimes keep escaping.<br>People let envy ruin their hearts.<br>Enemies you awaken raise endless chaos.<br>Only masters identify noises growing frightfully.<br>Insightful nature demands mature allies.<br>Rebuild yourself!</b><br>I'm aware that the message seems meaningless. Sorry Ziggy, that's all she said.";
      hidePoneElements();
	} else if (x == "10,24") {
			answerone = "Hm, this letter sounds almost like a puzzle. You could probably figure out where she lives if you follow her path. And if you knew where to start, of course. And yes, Lena did mention a friend named Mary. They used to be very close but they grew apart because of a different point of view on something.";
      hidePoneElements();
	} else if (x == "10,25") {
			answerone = "Sorry, I really can’t help you with this. We’re still paying off the house, so we’re saving every cent.";
      hidePoneElements();
	} else if (x == "10,26") {
			answerone = "Thanks, but you really didn’t have to bother carrying this cup of tea all this way. I have plenty of herbal tea right here.";
      hidePoneElements();
	} else if (x == "10,28") {
			answerone = "It’s so beautiful, isn’t it? Lena used to wear it. I asked her once how she can wear something so expensive every day, but she said it's just a cheap imitation. Doesn't look cheap to me, that's for sure.";
      hidePoneElements();
	} else if (x == "10,29") {
			answerone = "I don’t know how I could help you with mineralogy tests.";
      hidePoneElements();
	} else if (x == "10,30") {
			answerone = "I don’t think we’ll be getting a telescope anytime soon, but if we do, it’s good to know who to ask.";
      hidePoneElements();
	} else if (x == "10,31") {
			answerone = "I dont now this guy, sorry.";
      hidePoneElements();
	} else if (x == "10,32") {
			answerone = "I’ve never been in that tea shop, so I’ve never seen the man.";
      hidePoneElements();
	} else if (x == "10,33") {
			answerone = "Cheating on your test is not something you should be proud about.";
      hidePoneElements();
	} else if (x == "10,34") {
			answerone = "I have enough cups already. Besides, I’m not very keen on stealing from tea shops.";
      hidePoneElements();
	} else if (x == "10,35") {
			answerone = "I don’t need it for the moment, but if I decide to do some art on my house I’ll let you know.";
      hidePoneElements();
	} else if (x == "10,36") {
			answerone = "Yes, we grow pumpkins. It will take about 3 months for a ripe fruit to develop.";
      hidePoneElements();
	} else if (x == "10,37") {
			answerone = "So, how are things going at the University?";
      hidePoneElements();
	} else if (x == "10,38") {
			answerone = "Jimmy is talking? How is that possible? He never said a word before!";
      hidePoneElements();
	} else if (x == "10,41") {
			answerone = "What? How did this happen? I swear that I don’t use any chemicals. Even if I did, this would be crazy! Sure, you can take this magic pumpkin, I’d be scared to eat it anyway.";
      hidePoneElements();
	} else if (x == "10,42") {
			answerone = "I’ve seen her work, it’s nice, right? She knows Majorton's graffiti scene inside and out, I believe.";
      hidePoneElements();
	} else if (x == "10,43") {
			answerone = "I don’t know much about computers.";
      hidePoneElements();
  } else if (x == "09,LOC01" || x == "09,loc01") {
      answerone = "Lena was a bit reserved. For some reason she never invited us to your house. I didn't want to push her, I respected her privacy.";
      hidePoneElements();
  } else if (x == "09,LOC02" || x == "09,loc02") {
      answerone = "I've never heard of this shop. With the farm, my kids and the Earthlings, I really don't have time for a hobby.";
      hidePoneElements();
  } else if (x == "09,LOC03" || x == "09,loc03") {
      answerone = "Sure, it's a good University. But education today is a bit outdated, in my opinion. Are we really preparing young people for all of the quests that are before them? I don't think so.";
      hidePoneElements();
  } else if (x == "09,LOC04" || x == "09,loc04") {
      answerone = "The library Lena works in? Sure, I go there from time to time to pick a book or two. But I have to admit, with everything I have going on, I don't read as much as I'd like to.";
      hidePoneElements();
  } else if (x == "09,LOC05" || x == "09,loc05") {
      answerone = "I can't say that I know this tea shop. I don't go to bars and cafes a lot.";
      hidePoneElements();
  } else if (x == "09,LOC06" || x == "09,loc06") {
      answerone = "It's a lot of work, but it pays off. I can't emphasize enough how great it is to grow your own food.";
      hidePoneElements();
  } else if (x == "09,LOC07" || x == "09,loc07") {
      answerone = "Sorry, but the address is not familiar to me.";
      hidePoneElements();
	} else if (x == "11,01") {
			answerone = "Hello, nice to meet you. You're Lena's daughter? Sure, I've met her. It was Lena who invited me to do a lecture in the library.";
      hidePoneElements();
	} else if (x == "11,02" || x == "11,27") {
			answerone = "Get that away from me!";
      hidePoneElements();
	} else if (x == "11,03" || x == "11,40") {
			answerone = "What a cute dog!";
      hidePoneElements();
	} else if (x == "11,05") {
			answerone = "I don't know what I'm supposed to do with this.";
      hidePoneElements();
	} else if (x == "11,06") {
			answerone = "I'm a fan of puzzles like this, but I really don't have time to figure it out now. I'm working on my lecture.";
      hidePoneElements();
	} else if (x == "11,07") {
			answerone = "Yes, I’m giving the lecture. Does it show that I’m freaking out about it? I get all stressed out when I’m supposed to talk in front of people. My mind becomes empty and I lose my words...It’s a nightmare!";
      hidePoneElements();
	} else if (x == "11,08") {
			answerone = "Are you talking about a form of biophilia? I find the theory very interesting.";
      hidePoneElements();
	} else if (x == "11,09") {
			answerone = "She tried to calm me down, but it’s useless. I can’t wait to get it over with.";
      hidePoneElements();
	} else if (x == "11,10") {
			answerone = "I don’t know this woman.";
      hidePoneElements();
	} else if (x == "11,11") {
			answerone = "I’m a passionate traveller, and a historian by education. I wrote a couple of books, combining historic facts to the experiences I had during my journeys. I love writing, the problem arrives when I’m supposed to speak in front on people.";
      hidePoneElements();
	} else if (x == "11,12") {
			answerone = "That’s a telescope lens? I don’t know a lot about stargazing.";
      hidePoneElements();
	} else if (x == "11,13") {
			answerone = "I love bird watching, but domesticated parrots are not really as interesting as the ones that you find in the nature.";
      hidePoneElements();
	} else if (x == "11,14") {
			answerone = "I’m sorry, but I’ve never met her.";
      hidePoneElements();
	} else if (x == "11,15") {
			answerone = "Why are you offering me dog cookies? Are you trying to make me sick?";
      hidePoneElements();
	} else if (x == "11,16") {
			answerone = "It’s amazing, the universe I mean. Isn’t it?";
      hidePoneElements();
	} else if (x == "11,17") {
			answerone = "This seems interesting, for someone who is into stars at least. But I really don’t have time for it now.";
      hidePoneElements();
	} else if (x == "11,18") {
			answerone = "I wasn’t a student of professor Martin, I studied history at the University. But I hear that he is completely obsessed with minerals.";
      hidePoneElements();
	} else if (x == "11,19") {
			answerone = "Money will not help me in this situation, but thank you for trying.";
      hidePoneElements();
	} else if (x == "11,20") {
			answerone = "I will be using the projector tonight. I’m sorry, but borrowing it is out of the question. My lecture would be terrible without images.";
      hidePoneElements();
	} else if (x == "11,21") {
			answerone = "I’m not familiar with the mural in the photo.";
      hidePoneElements();
	} else if (x == "11,23") {
			answerone = "Lena organised for me to do the lecture in the library. We fixed the date about three months ago. She seemed fine at first, very responsible and competent, but this last two weeks I preferred to communicate with Sandy. Lena was confused and unfocused whenever I called her, and I find it unprofessional. She left without saying anything? There you go, completely unprofessional.";
      hidePoneElements();
	} else if (x == "11,24") {
			answerone = "The letter sounds a bit like a puzzle. You have you find the location of the mural to solve it, obviously. I love puzzles, don't you?";
      hidePoneElements();
	} else if (x == "11,25") {
			answerone = "I’m sorry, but I have no experience with telescopes.";
      hidePoneElements();
	} else if (x == "11,26") {
			answerone = "Thank you so much, that’s really nice of you. Sluuuurp! <br><i>Jocelyn excuses herself and runs to the toilet. I have a few minutes of alone time with her computer before she comes back.<br><i>Take card <b>22</b>. Remove cards <b>26</b> and <b>43</b>.</i>";
      hidePoneElements();
	} else if (x == "11,28") {
			answerone = "That’s absolutely stunning! I’ve never seen anything like it. Where did you get it from?";
      hidePoneElements();
	} else if (x == "11,29") {
			answerone = "I’m not an expert in mineralogy, but I do know a little. Unfortunately I really don’t have time for it right now.";
      hidePoneElements();
	} else if (x == "11,30") {
			answerone = "I’ve never seen him. Where is this shop?";
      hidePoneElements();
	} else if (x == "11,31") {
			answerone = "I’ve never seen him.";
      hidePoneElements();
	} else if (x == "11,32") {
			answerone = "He’s nice. He had the patience to listen to my fears about tonight. He was very supportive.";
      hidePoneElements();
	} else if (x == "11,33") {
			answerone = "I’ve never cheated on tests. And I’m absolutely against it.";
      hidePoneElements();
	} else if (x == "11,34") {
			answerone = "I would love another cup of tea, thank you so much. Could you get it for me?";
      hidePoneElements();
	} else if (x == "11,35") {
			answerone = "I know you mean well, but I can't speak about spray paint now. I'm freaking out about my lecture, can't you see?";
      hidePoneElements();
	} else if (x == "11,36") {
			answerone = "I know it's not pumpkin season yet. What do you expect me to do about it?";
      hidePoneElements();
	} else if (x == "11,37") {
			answerone = "I went to the University. It was a beautiful time of my life.";
      hidePoneElements();
	} else if (x == "11,39") {
			answerone = "This is a logo of the library I’m giving the lecture at this evening. And this number...I don’t know what it could be.";
      hidePoneElements();
	} else if (x == "11,42") {
			answerone = "I’ve seen a mural that she did in Munich. She is pretty good, isn’t she?";
      hidePoneElements();
	} else if (x == "11,43") {
			answerone = "I have my lecture on it. So at the moment, it’s my most precious possession.";
      hidePoneElements();
  } else if (x == "11,LOC01" || x == "11,loc01") {
      answerone = "The only connection I have with your mother is the lecture I'm giving at the library. She certainly never invited me at her home.";
      hidePoneElements();
  } else if (x == "11,LOC02" || x == "11,loc02") {
      answerone = "I don't know of the shop.";
      hidePoneElements();
  } else if (x == "11,LOC03" || x == "11,loc03") {
      answerone = "I was a student at the University. Considering how small it is, I find it very good.";
      hidePoneElements();
  } else if (x == "11,LOC04" || x == "11,loc04") {
      answerone = "I'm giving the lecture in the library tonight. Fortunately, the library has a projector. Without the photos it wouldn't be very interesting.";
      hidePoneElements();
  } else if (x == "11,LOC05" || x == "11,loc05") {
      answerone = "I came a bit early for the lecture so I came here to take a cup of tea and check my Bavaria material one more time.";
      hidePoneElements();
  } else if (x == "11,LOC06" || x == "11,loc06") {
      answerone = "I'm sorry, but I don't know anything about this.";
      hidePoneElements();
  } else if (x == "11,LOC07" || x == "11,loc07") {
      answerone = "Is this apartment something special? Why would I know anything about it?";
      hidePoneElements();
	} else if (x == "14,01" || x == "14,14" || x == "14,23") {
			answerone = "";
      document.getElementById("01_End").style.display = "block";
	} else if (x == "14,08") {
			answerone = "Yes, I know exactly what you’re talking about. And it’s just the beginning. The gem you’ve been wearing is connecting you with your true nature, one with many talents you've yet to discover. Take very good care of it.";
      hidePoneElements();
	} else if (x == "14,09") {
			answerone = "I haven’t heard from your mother in a very long time. I didn’t even know she was working in a library.";
      hidePoneElements();
	} else if (x == "14,10") {
			answerone = "I’ve never heard of her. Lena and I weren’t in contact for years. But I’m not surprised she was in a environmentalist group.";
      hidePoneElements();
	} else if (x == "14,18") {
			answerone = "Lena was seeing someone? A professor from the University? I'm glad that she was able to finally move forward after the loss of your father. She told you that your father was just a sperm donor? Well Ziggy, that's not true.";
      hidePoneElements();
	} else if (x == "14,28") {
			answerone = "Right, the gem. Well, if you’re wearing it now, you probably realise some changes in you. Are you feeling more connected to living creatures? Even being capable of influencing them in one way or another? That’s the effect of the gem. And some other effects will arrive with time, too. The gem is connecting you with your true nature, so to speak.";
      hidePoneElements();
	} else if (x == "14,32") {
			answerone = "I don't know him, but if he was friends with Lena I'm sure he's a good guy.";
      hidePoneElements();
  } else if (x == "14,LOC01" || x == "14,loc01") {
      answerone = "I haven't been to your house since you were a small child.";
      hidePoneElements();
  } else if (x == "14,LOC02" || x == "14,loc02") {
      answerone = "Sure, I've been there. It's not very surprising I'm interested in astronomy.";
      hidePoneElements();
  } else if (x == "14,LOC03" || x == "14,loc03") {
      answerone = "I have some friends that work at the University. Other than that, I don't really have a connection with it.";
      hidePoneElements();
  } else if (x == "14,LOC04" || x == "14,loc04") {
      answerone = "I didn't even know that Lena works there. I have a library in the neighborhood, so I never went to Another World Library.";
      hidePoneElements();
  } else if (x == "14,LOC05" || x == "14,loc05") {
      answerone = "Sorry, I've never been there.";
      hidePoneElements();
  } else if (x == "14,LOC06" || x == "14,loc06") {
      answerone = "I don't know anything about this farm. I don't know a lot about Lena's life now, as you can see.";
      hidePoneElements();
  } else if (x == "14,LOC07" || x == "14,loc07") {
      answerone = "Welcome to my humble home. I'm so glad you found it.";
      hidePoneElements();
	} else if (x == "18,01") {
			answerone = "Hi, Miss Wonder. Do you have some questions about the test tomorrow? I hope you're prepared.";
      hidePoneElements();
	} else if (x == "18,02" || x == "18,13" || x == "18,27" || x == "18,36" || x == "18,38" || x == "18,41") {
			answerone = "Maybe you would prefer to speak about this to the biology professor?";
      hidePoneElements();
	} else if (x == "18,03" || x == "18,40") {
			answerone = "What a nice dog!";
      hidePoneElements();
	} else if (x == "18,04" || x == "18,22" || x == "18,43") {
			answerone = "You can ask somebody from the tech department about this. I’m sure that they would be helpful.";
      hidePoneElements();
	} else if (x == "18,05") {
			answerone = "I can hardly help you with this.";
      hidePoneElements();
	} else if (x == "18,06") {
			answerone = "A cryptex? Hmmm, I'd love to help you but I don't know how.";
      hidePoneElements();
	} else if (x == "18,07") {
			answerone = "I can’t go to a lecture tonight. There is a great documentary on rock formation on the TV I was planning to see.";
      hidePoneElements();
	} else if (x == "18,08") {
			answerone = "Well, sometimes I feel connected to the minerals. So I won’t judge you.";
      hidePoneElements();
	} else if (x == "18,09") {
			answerone = "Yes, I know her. I’ve been to the library many times.";
      hidePoneElements();
	} else if (x == "18,10" || x == "18,11" || x == "18,14") {
			answerone = "Was she one of my students?";
      hidePoneElements();
	} else if (x == "18,12" || x == "18,17" || x == "18,25") {
			answerone = "It’s not really something I could help you with. You could ask the astronomy department, but I think that they are on a field trip today.";
      hidePoneElements();
	} else if (x == "18,15") {
			answerone = "Thank you, but I don't have a dog. I like to live alone.";
      hidePoneElements();
	} else if (x == "18,16") {
			answerone = "Ah! The universe. So many mysteries yet to unravel.";
      hidePoneElements();
	} else if (x == "18,18") {
			answerone = "I’m here for all your questions on mineralogy. I like it when students are interested in the subject. And if you need somebody to talk to about your loss, feel free to call me anytime.";
      hidePoneElements();
	} else if (x == "18,19") {
			answerone = "You’re not thinking of bribing me I hope? Ziggy, I'm sure you can pass the test without this.";
      hidePoneElements();
	} else if (x == "18,20") {
			answerone = "Yes, I know that the library has a projector. I was at a couple of lectures there myself.";
      hidePoneElements();
	} else if (x == "18,21") {
			answerone = "Oh, you caught me in a field I know absolutely nothing about. Sorry.";
      hidePoneElements();
	} else if (x == "18,23") {
			answerone = "Of course I know your mother, I was very often in the library. In fact, we became friends recently. What, she left town? Well, she never told me about planning to do this. <br><i>Professor Martin really seems to be surprised and somewhat worried to hear this.</i><br>We had great conversations, she is a very intelligent and educated woman. We used to grab a cup of tea together during her break in the tea shop next door to her library. It must be a bit weird for you to hear that your professor was socialising with your mother, but I assure you that we would tell you about it if it developed into something more serious. I guess that it won't be happening now. Did she sound OK over the phone? I mean, I'm sure she's fine, but it does seem unusual that she would leave you like this.";
      hidePoneElements();
	} else if (x == "18,24") {
			answerone = "Hmm, this looks like instructions to find the address of the sender, if you know where to start.";
      hidePoneElements();
	} else if (x == "18,26") {
			answerone = "No, thank you.";
      hidePoneElements();
	} else if (x == "18,28") {
			answerone = "Oh, you brought your mother's gem for me to see. Yes, of course I remember it from your mother, it's hard not to notice such a piece. Let me see it...<br><i>Professor Martin's eyes widen with excitement when I pass him the gem.</i><br> The crystal structure is somewhat unusual, as I'm sure a good student like yourself can see. On a first glance I would say that it’s a grandidierite imitation, but I can't be sure unless I study its chemical composition. Would you be kind enough to give it to me for some time? I would take extreme care of it, of course. I know that although it's probably worthless it must mean a great deal to you.<br><i>The professor seems a bit too eager on keeping the gem. Anyway, I don't intend to lose my newly acquired power that the gem holds, so I say that I can't leave it with him. He doesn't seem very happy about it.</i><br>I'm afraid I can't help you then. I'm a bit surprised that a future scientist like you doesn't want to proceed with the research. But as I said, it's probably just an imitation.";
      hidePoneElements();
	} else if (x == "18,29") {
			answerone = "I'm sure that you're prepared for the test. You're one of my best students.";
      hidePoneElements();
	} else if (x == "18,30") {
			answerone = "Was he one of my students?";
      hidePoneElements();
	} else if (x == "18,31") {
			answerone = "Oh, Jamie. He’s the worst student I have. He’s not so bad on the field, but the minute he gets to the lab, he’s lost. He’s not doing any better in theory either. If he doesn’t pass the test tomorrow, he’s failing the class.";
      hidePoneElements();
	} else if (x == "18,32") {
			answerone = "I've seen him in the tea shop next to the library. They serve a decent cup of tea there.";
      hidePoneElements();
	} else if (x == "18,34") {
			answerone = "That's a beautiful cup, but we are not allowed to receive gifts from students.";
      hidePoneElements();
	} else if (x == "18,35") {
			answerone = "I don’t care much for street art, but that’s just me.";
      hidePoneElements();
	} else if (x == "18,37") {
			answerone = "The pride of our University. Of course I think it’s important. Young people don’t understand the significance of tradition. I still remember when it was switched with a sports team flag by a couple of students a few years ago. We were all in shock when the flag came up. I was unable to continue with my lecture until I was sure that they resolved the situation. It was a pain in the eye to see this disgrace on the flag pole. Outrageous!";
      hidePoneElements();
	} else if (x == "18,39") {
			answerone = "That’s the library logo. I can’t say that the number that’s written under it means something to me.";
      hidePoneElements();
	} else if (x == "18,42") {
			answerone = "No, I don’t know any street artists.";
      hidePoneElements();
  } else if (x == "18,LOC01" || x == "18,loc01") {
      answerone = "I was friends with Lena, but she never invited me to her house. We both found it inappropriate I think, because of you, of course.";
      hidePoneElements();
  } else if (x == "18,LOC02" || x == "18,loc02") {
      answerone = "I'm afraid I don't know about this shop.";
      hidePoneElements();
  } else if (x == "18,LOC03" || x == "18,loc03") {
      answerone = "The University is my second home. Actually, I should say it's my first home, since I spend much more time here than at my place.";
      hidePoneElements();
  } else if (x == "18,LOC04" || x == "18,loc04") {
      answerone = "Yes, I went to the library very often. I'm a scientist, but I enjoy a good work of literature too.";
      hidePoneElements();
  } else if (x == "18,LOC05" || x == "18,loc05") {
      answerone = "I met Lena there for tea on quite a few occasions recently. A nice place.";
      hidePoneElements();
  } else if (x == "18,LOC06" || x == "18,loc06") {
      answerone = "I can't help you with this, I don't know anything about it whatsoever.";
      hidePoneElements();
  } else if (x == "18,LOC07" || x == "18,loc07") {
      answerone = "Is there a reason I should know this address?";
      hidePoneElements();
  } else if (x == "23,01" || x == "23,02" || x == "23,03" || x == "23,04" || x == "23,05" || x == "23,06" || x == "23,07" || x == "23,08" || x == "23,09" || x == "23,10" || x == "23,11" || x == "23,12" || x == "23,13" || x == "23,14" || x == "23,15" || x == "23,16" || x == "23,17" || x == "23,18" || x == "23,19" || x == "23,20" || x == "23,21" || x == "23,22" || x == "23,23" || x == "23,24" || x == "23,25" || x == "23,26" || x == "23,27" || x == "23,28" || x == "23,29" || x == "23,30" || x == "23,31" || x == "23,32" || x == "23,33" || x == "23,34" || x == "23,35" || x == "23,36" || x == "23,37" || x == "23,38" || x == "23,39" || x == "23,40" || x == "23,41" || x == "23,42" || x == "23,43" || x == "23,LOC01" || x == "23,loc01" || x == "23,LOC02" || x == "23,loc02" || x == "23,LOC03" || x == "23,loc03" || x == "23,LOC04" || x == "23,loc04" || x == "23,LOC05" || x == "23,loc05" || x == "23,LOC06" || x == "23,loc06" || x == "23,LOC07" || x == "23,loc07") {
      answerone = "<i>Lena isn't here. You can't talk to her, you can only talk about her.</i>";
      hidePoneElements();
	} else if (x == "30,01") {
			answerone = "Hello, how can I help you?";
      hidePoneElements();
	} else if (x == "30,02" || x == "30,03" || x == "30,05" || x == "30,15" || x == "30,27" || x == "30,40") {
			answerone = "We don’t have any pet food, we are specialised in astronomy equipment.";
      hidePoneElements();
	} else if (x == "30,04" || x == "30,20") {
			answerone = "We don’t have any video equipment, we are specialised in telescopes.";
      hidePoneElements();
	} else if (x == "30,06") {
			answerone = "A beautiful piece. Unfortunately, I don't know how I could help with opening it.";
      hidePoneElements();
	} else if (x == "30,07") {
			answerone = "I’m going to a stargazing event tonight, so I can’t come to the lecture. It will be a cloudless night and we plan to focus on Cygnus.";
      hidePoneElements();
	} else if (x == "30,08") {
			answerone = "I don’t know what to say about this. Are you maybe interested in some of our products?";
      hidePoneElements();
	} else if (x == "30,09" || x == "30,10" || x == "30,11") {
			answerone = "I’m sorry, but I don’t know her.";
      hidePoneElements();
	} else if (x == "30,17") {
			answerone = "This is a rare edition if I'm not mistaken. But I'm afraid I can't help you with the meaning of the handwritten part.";
      hidePoneElements();
	} else if (x == "30,18" || x == "30,31") {
			answerone = "I’m sorry, I don’t know him.";
      hidePoneElements();
	} else if (x == "30,19") {
			answerone = "So you decided to purchase the objective lens? Excellent. That will be 300 pounds. Thank you, and enjoy the stars tonight! <br><i>As I leave the shop, Peter puts the ‘closed’ sign on the door.<br><i>Take card <b>12</b>. Remove cards <b>19</b> and <b>30</b>.</i>";
      hidePoneElements();
	} else if (x == "30,21") {
			answerone = "I’m sorry, but I really can’t help you with this. You could ask the street artist across the street, maybe she knows something about it.";
      hidePoneElements();
	} else if (x == "30,22" || x == "30,43") {
			answerone = "We don’t have any computer equipment, we are specialised in telescopes.";
      hidePoneElements();
	} else if (x == "30,23") {
			answerone = "She does seem familiar, I guess she’s been to the shop once or twice.";
      hidePoneElements();
	} else if (x == "30,25") {
			answerone = "Let me see...Yes, the objective lens is definitely broken. I’m sorry, but I would recommend buying a new one, I don’t think you could repair it. Let me take it off to take a closer look...Oh, there is a paper behind it, here! Why would somebody put a paper behind the lens? Anyway, as I said, the lens is beyond repair. A new lens this diameter would be 300 pounds. Would you like to purchase one? <br><i>My mother puts a monthly allowance on my account and I earn some money giving math lessons to kids. But 300 pounds? I don't have that kind of money. <br>Take card <b>39</b>.</i>";
      hidePoneElements();
	} else if (x == "30,26") {
			answerone = "We don’t have any beverages, we are specialised in astronomy equipment.";
      hidePoneElements();
	} else if (x == "30,28") {
			answerone = "What is it? It’s astonishing!";
      hidePoneElements();
	} else if (x == "30,29" || x == "30,33") {
			answerone = "We have a book on meteorites, but I don’t think it will be sufficient for passing a mineralogy test.";
      hidePoneElements();
	} else if (x == "30,30") {
			answerone = "I’m standing at your service, how can I help you?";
      hidePoneElements();
	} else if (x == "30,32") {
			answerone = "I remember him, he came one time to the shop with his sister. She is part of our stargazing community, a very clever girl.";
      hidePoneElements();
	} else if (x == "30,34") {
			answerone = "We don’t have any tableware, we are specialised in astronomy equipment.";
      hidePoneElements();
	} else if (x == "30,35") {
			answerone = "We don’t hold any art supplies, we are specialised in astronomy equipment.";
      hidePoneElements();
	} else if (x == "30,37") {
			answerone = "I heard that the University has an excellent astrophysics program.";
      hidePoneElements();
	} else if (x == "30,39") {
			answerone = "I just found the paper, I don’t know what it means.";
      hidePoneElements();
	} else if (x == "30,42") {
			answerone = "She is making a mural across the street, I passed by a few times. It will be nice to pass next to a piece of art every day on my way to work.";
      hidePoneElements();
  } else if (x == "30,LOC01" || x == "30,loc01") {
      answerone = "I don't visit my customers at their homes.";
      hidePoneElements();
  } else if (x == "30,LOC02" || x == "30,loc02") {
      answerone = "If you're interested in astronomy equipment, this is the right place for you!";
      hidePoneElements();
  } else if (x == "30,LOC03" || x == "30,loc03") {
      answerone = "I heard that the University has an excellent astrophysics program.";
      hidePoneElements();
  } else if (x == "30,LOC04" || x == "30,loc04") {
      answerone = "I think you've taken a wrong turn, the library is not near here.";
      hidePoneElements();
  } else if (x == "30,LOC05" || x == "30,loc05") {
      answerone = "I don't drink tea. So I've probably never been to this tea shop.";
      hidePoneElements();
  } else if (x == "30,LOC06" || x == "30,loc06" || x == "30,LOC07" || x == "30,loc07") {
      answerone = "I don't know why you're asking me about people's private residences.";
      hidePoneElements();
	} else if (x == "31,01") {
			answerone = "Hi, Ziggy! I would give anything to have your brain right now. I will flunk the test tomorrow.";
      hidePoneElements();
	} else if (x == "31,02" || x == "31,27") {
			answerone = "Collecting flies, are you?";
      hidePoneElements();
	} else if (x == "31,03" || x == "31,40") {
			answerone = "She's a real cutie, what's her name?";
      hidePoneElements();
	} else if (x == "31,04") {
			answerone = "That’s a good projector.";
      hidePoneElements();
	} else if (x == "31,05") {
			answerone = "I can't help you with your cookie problem. I don't have any fresh pumpkin on me.";
      hidePoneElements();
	} else if (x == "31,06") {
			answerone = "I'm not great at code breaking.";
      hidePoneElements();
	} else if (x == "31,07") {
			answerone = "Unless the lecture will magically teach me everything about mineralogy for the test tomorrow, I’m not interested in coming.";
      hidePoneElements();
	} else if (x == "31,08") {
			answerone = "What? Are you trying to tell me you've got some kind of superpowers all of a sudden?";
      hidePoneElements();
	} else if (x == "31,09") {
			answerone = "I know her from the library. She’s a nice lady, I guess.";
      hidePoneElements();
	} else if (x == "31,10") {
			answerone = "I don’t know her, sorry.";
      hidePoneElements();
	} else if (x == "31,11") {
			answerone = "That’s the woman giving the lecture in the library tonight? Well, I’m going to be studying all night for the mineralogy test tomorrow, not that it will be of any use. I think I’m definitely failing it.";
      hidePoneElements();
	} else if (x == "31,17") {
			answerone = "Don’t show me another book, please. My head is already full of mineralogy books, I don’t think I can handle another one.";
      hidePoneElements();
	} else if (x == "31,18") {
			answerone = "I have a test in mineralogy tomorrow, and I will fail for sure. Which means I will be failing the year and losing the scholarship. Unless...Ziggy, what do you say to a little exchange? If you find a way to distract professor Martin and get me a copy of the test, I’ll pay you a nice amount of money. He keeps the tests on the desk, and I know you’re smart enough to think of something. I would never ask this of you if it wasn’t a question of my future!";
      hidePoneElements();
	} else if (x == "31,20") {
			answerone = "I’m not surprised that the library has a projector. It’s usual equipment.";
      hidePoneElements();
	} else if (x == "31,21") {
			answerone = "Nice work! But I know nothing about street art.";
      hidePoneElements();
	} else if (x == "31,22" || x == "31,43") {
			answerone = "Sorry, but I don't know how could I help you with this.";
      hidePoneElements();
	} else if (x == "31,23") {
			answerone = "Your mother left? Just like that? Wow, that must me hard.";
      hidePoneElements();
	} else if (x == "31,25") {
			answerone = "You need a new lens? I guess I could help you, I put some money from the scholarship on the side. But I would need you to do me a favor in return. I have to get a copy of the mineralogy test, or I’m failing it tomorrow. And that means failing this year entirely.";
      hidePoneElements();
	} else if (x == "31,26") {
			answerone = "Thanks, but no thanks. I prefer coffee.";
      hidePoneElements();
	} else if (x == "31,28") {
			answerone = "Wow, that’s amazing! With my limited knowledge in mineralogy I can’t pretend to know what it could be. Did you show it to the professor?";
      hidePoneElements();
	} else if (x == "31,29") {
			answerone = "Ziggy, I’m not going to pass the test tomorrow. The more I learn, the more it seems that I don’t know anything. And my scholarship depends on it. Listen, I know it's not something that you usually do, but you are on much better terms with the professor than I am. Do you think you could take a peek at the test? Get me copy somehow? He keeps the tests on his desk, if you could distract him for a moment maybe it could be done. I would pay you well for this. Please don’t judge me, my future is in question!";
      hidePoneElements();
	} else if (x == "31,30") {
			answerone = "A telescope shop? No, I’ve never been there.";
      hidePoneElements();
	} else if (x == "31,31") {
			answerone = "I’m in a real problem. If I don’t pass the mineralogy test tomorrow, I’m failing this year. If I fail the year, my scholarship is gone. And so is my future. Ziggy, I know it’s not something I should be asking of you, but please help me! I know how smart you are. If you could distract the professor for a moment to get me a copy of the test, you would save me. I would pay you well, I still have money from the scholarship. Please, I’m begging you!";
      hidePoneElements();
	} else if (x == "31,32") {
			answerone = "I don’t know him. I don’t go to tea shops, pubs are more my style.";
      hidePoneElements();
	} else if (x == "31,33") {
			answerone = "Yes! Ziggy, I’m forever grateful for this. And don’t worry, this will be our little secret. Here’s some money for your effort. Well, now that I don’t need to study anymore, I’ll be going. Maybe have a drink with my crew.<br><i>You feel pretty bad about this, but it’s already done. Soon after Jamie leaves the room, professor Martin returns to his desk. He doesn't notice that one of the tests is missing.<br><i>Take card <b>19</b>. Remove cards <b>31</b> and <b>33</b>.</i>";
      hidePoneElements();
	} else if (x == "31,34") {
			answerone = "An empty cup will definitely not help me with my problem.";
      hidePoneElements();
	} else if (x == "31,35") {
			answerone = "What are you planning to do with it? Make graffiti on one of the University buildings?";
      hidePoneElements();
	} else if (x == "31,37") {
			answerone = "Remember this one time when some students changed it for their sports team flag? It might have been before you were a student here. Anyway, when the flag went up, the same time like every other day, it was a complete chaos! Everybody at the University left everything and just looked at it in shock. What’s the deal with that, it’s just a flag!";
      hidePoneElements();
	} else if (x == "31,39") {
			answerone = "This is a logo of the library, right?";
      hidePoneElements();
	} else if (x == "31,42") {
			answerone = "I don’t know her, but she is dank!";
      hidePoneElements();
  } else if (x == "31,LOC01" || x == "31,loc01") {
      answerone = "Is this an invitation to your place? If so, sure!";
      hidePoneElements();
  } else if (x == "31,LOC02" || x == "31,loc02") {
      answerone = "I know nothing of this shop.";
      hidePoneElements();
  } else if (x == "31,LOC03" || x == "31,loc03") {
      answerone = "I swear, if I knew that mineralogy would give me such problems I would have studied something completely different.";
      hidePoneElements();
  } else if (x == "31,LOC04" || x == "31,loc04") {
      answerone = "Sure, I know the library. But it's not like I spend a lot of time there.";
      hidePoneElements();
  } else if (x == "31,LOC05" || x == "31,loc05") {
      answerone = "I'm more of a pub type of person, honestly.";
      hidePoneElements();
  } else if (x == "31,LOC06" || x == "31,loc06") {
      answerone = "Can't help you there. Never heard of the place.";
      hidePoneElements();
  } else if (x == "31,LOC07" || x == "31,loc07") {
      answerone = "Can't help you there. Never heard of the place.";
      hidePoneElements();
	} else if (x == "32,01") {
			answerone = "Hi, what can I get you?";
      hidePoneElements();
	} else if (x == "32,02" || x == "32,27") {
			answerone = "Nice fly!";
      hidePoneElements();
	} else if (x == "32,03" || x == "32,40") {
			answerone = "Nice dog!";
      hidePoneElements();
	} else if (x == "32,04") {
			answerone = "Nice projector. It’s yours?";
      hidePoneElements();
	} else if (x == "32,05") {
			answerone = "Nice cookies mix!";
      hidePoneElements();
	} else if (x == "32,06") {
			answerone = "Wow, how cool is that! But I'm not sure that I can be of any help with it.";
      hidePoneElements();
	} else if (x == "32,07") {
			answerone = "Sure, I’ve seen the poster in the library. That’s Jocelyn Hill right there. She’s freaking out about the lecture.";
      hidePoneElements();
	} else if (x == "32,08") {
			answerone = "Really? How do you do it? Can you connect with me too? I'm an animal.";
      hidePoneElements();
	} else if (x == "32,09") {
			answerone = "Sandy comes very often. We always have a nice little chat.";
      hidePoneElements();
	} else if (x == "32,10") {
			answerone = "No, I’ve never met her. If she ever came to the shop, I would have surely remembered her.";
      hidePoneElements();
	} else if (x == "32,11") {
			answerone = "That’s her, sitting right there. She is completely stressed out. She keeps checking stuff about the lecture on computer. Opens the computer, types her password in, reads a part of the lecture and closes the computer. One minute after, she does it all again. It's obsessive, really.";
      hidePoneElements();
	} else if (x == "32,12") {
			answerone = "My sister is into astronomy. I even once went to this telescope shop with her.";
      hidePoneElements();
	} else if (x == "32,13" || x == "32,38") {
			answerone = "Nice parrot.";
      hidePoneElements();
	} else if (x == "32,14") {
			answerone = "The name doesn’t sound familiar.";
      hidePoneElements();
	} else if (x == "32,15") {
			answerone = "Nice dog cookies.";
      hidePoneElements();
	} else if (x == "32,16") {
			answerone = "Who knows what the universe is hiding from us...";
      hidePoneElements();
	} else if (x == "32,17") {
			answerone = "This looks like hard core astronomy. The handwritten part is kind of strange, don't you think?";
      hidePoneElements();
	} else if (x == "32,18") {
			answerone = "I saw the guy quite a few times here with your mother. They often come for a cup of tea during her break. It started maybe a month ago. She is happy with him, that much I can tell you. They would passionately discuss science, astronomy, geology, that kind of stuff. And the guy seems very much into Lena too. He wouldn't take his eyes of her.";
      hidePoneElements();
	} else if (x == "32,19") {
			answerone = "That’s way too much money for a cup of tea. Besides, it’s on the house.";
      hidePoneElements();
	} else if (x == "32,20") {
			answerone = "Nice projector. The library is well equipped.";
      hidePoneElements();
	} else if (x == "32,21") {
			answerone = "That’s nice! I follow street art a bit, but I’ve never seen this. Oh, did you know that Loomey is doing a mural in town? I love her work.";
      hidePoneElements();
	} else if (x == "32,22") {
			answerone = "Please keep an eye on it, I’m too busy with customers at the moment.";
      hidePoneElements();
	} else if (x == "32,23") {
			answerone = "Lena is your mother? Oh, that's cool, I really like her. She's my favourite customer. What, she left town? I was wondering why she didn't come for her cup of tea today. Well, I did notice that she was acting a bit strange lately. She wouldn't chit chat as much as usual. She seemed kind of buried in her thoughts and concerned about something. Except when she came with that professor, he definitely brought her cheerful side out.";
      hidePoneElements();
	} else if (x == "32,24") {
			answerone = "This sounds like she’s giving directions. I think it would be possible to track her path if we knew the address of the mural.";
      hidePoneElements();
	} else if (x == "32,25") {
			answerone = "Your lens is broken? There is this shop, Outer Space Telescopes where you can find all the parts. I went with my sister once, she’s an amateur astronomer.";
      hidePoneElements();
	} else if (x == "32,26") {
			answerone = "No thanks, I can’t even look at tea anymore.";
      hidePoneElements();
	} else if (x == "32,28") {
			answerone = "I’ve seen this gem on Lena. It’s magical, isn’t it?";
      hidePoneElements();
	} else if (x == "32,29" || x == "32,33") {
			answerone = "I studied anthropology for three years, mineralogy is really not my field.";
      hidePoneElements();
	} else if (x == "32,30") {
			answerone = "Yes, I’ve seen him in the telescope shop the one time I went there with my sister.";
      hidePoneElements();
	} else if (x == "32,31") {
			answerone = "No, I don’t know him.";
      hidePoneElements();
	} else if (x == "32,32") {
			answerone = "I’m just a simple guy. I spend most of my free time in nature or with a good book.";
      hidePoneElements();
	} else if (x == "32,34") {
			answerone = "Another cup of tea? Coming right up!<br><i>Take card <b>26</b>. Remove card <b>34</b>.</i>";
      hidePoneElements();
	} else if (x == "32,35") {
			answerone = "You’re thinking of making street art? Nice.";
      hidePoneElements();
	} else if (x == "32,36") {
			answerone = "When this sprout becomes a pumpkin, promise to make me a pumpkin pie?";
      hidePoneElements();
	} else if (x == "32,37") {
			answerone = "The last year of my studies in the University, a couple of athletes changed it for their sports club flag. When the thing came up, the whole University made a fuss about it. Everybody just stopped whatever they were doing and went out to look at the flag. As if something really important happened. Crazy, believe me.";
      hidePoneElements();
	} else if (x == "32,39") {
			answerone = "That’s the logo of the library next door. And the number...Could be a code for one of their books. Check it with Sandy, the librarian.";
      hidePoneElements();
	} else if (x == "32,41") {
			answerone = "What do you say about making me a pumpkin pie?";
      hidePoneElements();
	} else if (x == "32,42") {
			answerone = "I’m a big fan of her work. I hear she’s in town at the moment, working on a mural. But she is leaving for a street art festival in Brazil tomorrow. She was invited to participate. It’s nice to see that the world has finally started to appreciate her art.";
      hidePoneElements();
	} else if (x == "32,43") {
			answerone = "That’s the computer of Jocelyn Hill. She keeps opening it, writing her password in, checking out a part of her lecture and closing it again. I mean, she must have done it at least twenty times already!";
      hidePoneElements();
  } else if (x == "32,LOC01" || x == "32,loc01") {
      answerone = "Well, Lena and I used to chat here and there, but we weren't as close as for her to invite me at her place.";
      hidePoneElements();
  } else if (x == "32,LOC02" || x == "32,loc02") {
      answerone = "I've been to the shop once with my sister. They have a bunch of nice equipment. Expensive hobby, if you ask me.";
      hidePoneElements();
  } else if (x == "32,LOC03" || x == "32,loc03") {
      answerone = "I studied anthropology. Surprisingly, I couldn't find a job in the field.";
      hidePoneElements();
  } else if (x == "32,LOC04" || x == "32,loc04") {
      answerone = "Of course I go to the library sometimes, it's just next door. And I do love a good book.";
      hidePoneElements();
  } else if (x == "32,LOC05" || x == "32,loc05") {
      answerone = "It's nice to work here. I'd like to try something else eventually, but with my anthropology diploma there aren't a lot of offers.";
      hidePoneElements();
  } else if (x == "32,LOC06" || x == "32,loc06") {
      answerone = "Hmmm, can't say that the address sounds familiar.";
      hidePoneElements();
  } else if (x == "32,LOC07" || x == "32,loc07") {
      answerone = "Hmmm, can't say that the address sounds familiar.";
      hidePoneElements();
	} else if (x == "38,01") {
			answerone = "I love you Ziggy! I love you!";
      hidePoneElements();
	} else if (x == "38,02" || x == "38,08" || x == "38,27" || x == "38,36" || x == "38,41") {
			answerone = "All living crrreatures arrre connected!";
      hidePoneElements();
	} else if (x == "38,03" || x == "38,05" || x == "38,15") {
			answerone = "Feed Laika! Cookies! Laika!";
      hidePoneElements();
	} else if (x == "38,04" || x == "38,20") {
			answerone = "That's from the librrrarrry! My librrrarry!";
      hidePoneElements();
	} else if (x == "38,06" || x == "38,10") {
			answerone = "Firrrst letterrrs! Only firrrst letterrrs!";
      hidePoneElements();
	} else if (x == "38,07" || x == "38,11") {
			answerone = "Lecturrre in the librrrarrry! My librrrarry!";
      hidePoneElements();
	} else if (x == "38,09") {
			answerone = "Sandy is frrriend! My frrriend!";
      hidePoneElements();
	} else if (x == "38,18") {
			answerone = "Is Prrroffesorrr frrrriend? Not surrrre! Not surrrre!";
      hidePoneElements();
	} else if (x == "38,21") {
			answerone = "Find the murrral! The murrral!";
      hidePoneElements();
	} else if (x == "38,22" || x == "38,26" || x == "38,34" || x == "38,42" || x == "38,43") {
			answerone = "<i>The parrot seems confused and has nothing to say about this.</i>";
      hidePoneElements();
	} else if (x == "38,23") {
			answerone = "I left message with Emma! Message!";
      hidePoneElements();
	} else if (x == "38,28") {
			answerone = "Gem gives powerrr! Powerrr!";
      hidePoneElements();
	} else if (x == "38,32") {
			answerone = "Nice boy Marrrk! Nice boy!";
      hidePoneElements();
	} else if (x == "38,38") {
			answerone = "Parrrot Jimmy knows things! Jimmy knows!";
      hidePoneElements();
  } else if (x == "38,LOC01" || x == "38,loc01") {
      answerone = "Home sweet home! Home!";
      hidePoneElements();
  } else if (x == "38,LOC02" || x == "38,loc02") {
      answerone = "Telescope! Telescope!";
      hidePoneElements();
  } else if (x == "38,LOC03" || x == "38,loc03") {
      answerone = "Marrrrrtin! Marrrrtin!";
      hidePoneElements();
  } else if (x == "38,LOC04" || x == "38,loc04") {
      answerone = "Like librrrrarrry! Librrrarrry!";
      hidePoneElements();
  } else if (x == "38,LOC05" || x == "38,loc05") {
      answerone = "Grrrreat tea! Grrreat!";
      hidePoneElements();
  } else if (x == "38,LOC06" || x == "38,loc06") {
      answerone = "I left message with Emma! Message!";
      hidePoneElements();
  } else if (x == "38,LOC07" || x == "38,loc07") {
      answerone = "Marrrry! Go to Marrry!";
      hidePoneElements();
	} else if (x == "42,01") {
			answerone = "It’s nice to meet you. I’d love to chat, but I’m in a middle of a commissioned job, so I don’t have a lot of time.";
      hidePoneElements();
	} else if (x == "42,02" || x == "42,27") {
			answerone = "Should I be interested in this fly? Well, I'm not.";
      hidePoneElements();
	} else if (x == "42,03" || x == "42,40") {
			answerone = "Cute dog.";
      hidePoneElements();
	} else if (x == "42,04") {
			answerone = "You’re kidding me...This is awesome! It will speed me up enormously. Thank you soooo much! Ok, let’s try to help you with finding your mural now. <br><i>Loomey takes a photo of the mural and sends it to a couple of people. After about 20 minutes of texting and calling, finally one of her friends recognizes it.</i><br>The mural is made by an anonymous author, that’s why I couldn’t remember it. But I did see it. It was not far from here actually, but it was removed 7 or 8 years ago. The address is C84. Hope that this helps you, because you helped me a lot.<br><i>Loomey returns to her work politely asking me to leave so that she could focus.<br>Write down or memorize the address and remove cards <b>04</b>, <b>21</b>, <b>42</b> and location card <b>LOC02</b>.</i>";
      hidePoneElements();
	} else if (x == "42,05") {
			answerone = "I’m an artist, not a dog food cook.";
      hidePoneElements();
	} else if (x == "42,06") {
			answerone = "That looks interesting, but I don't have time to explore it right now.";
      hidePoneElements();
	} else if (x == "42,07") {
			answerone = "I’m definitely not going to a lecture tonight. This wall is huge, and I’m running really late. With this tempo, I’ll be working all night, and I still don’t know if I’ll manage to finish. And tomorrow I’m leaving for Brazil.";
      hidePoneElements();
	} else if (x == "42,08") {
			answerone = "Sure, and I have an invisibility cloak.";
      hidePoneElements();
	} else if (x == "42,09") {
			answerone = "I don't remember the last time I was at the library. I'm more of an outdoors person, not very interested in spending time on books.";
      hidePoneElements();
	} else if (x == "42,10") {
			answerone = "No, doesn’t ring a bell.";
      hidePoneElements();
	} else if (x == "42,11") {
			answerone = "Never heard of her.";
      hidePoneElements();
	} else if (x == "42,12") {
			answerone = "I’m glad you got it, but I don’t have time to celebrate right now.";
      hidePoneElements();
	} else if (x == "42,13" || x == "42,38") {
			answerone = "Look, I like animals but I'm kind of in a rush to finish this job right now.";
      hidePoneElements();
	} else if (x == "42,14") {
			answerone = "Sorry, don’t know her.";
      hidePoneElements();
	} else if (x == "42,15") {
			answerone = "I don’t really know what I'm supposed to do with dog cookies. So, If you don't mind, I've got work to do.";
      hidePoneElements();
	} else if (x == "42,16") {
			answerone = "Starry sky...There aren’t many things as beautiful as that. But I’m completely lost in space, for me stars are just a bunch of sparkling dots.";
      hidePoneElements();
	} else if (x == "42,17") {
			answerone = "You expect me to read all this now? You’ve got to be kidding.";
      hidePoneElements();
	} else if (x == "42,18") {
			answerone = "I was never very fond of serious University professors.";
      hidePoneElements();
	} else if (x == "42,19") {
			answerone = "I don’t want your money, what I need is more time!";
      hidePoneElements();
	} else if (x == "42,20") {
			answerone = "A projector would actually save me! I could project the sketch on the wall and transfer it really quickly. If you could get it for me, that would be amazing.";
      hidePoneElements();
	} else if (x == "42,21") {
			answerone = "Let me take a look, I can usually recognize other artists’ work. Hmmm, it seems familiar, but I can’t put my finger on it. I could make a few calls to my friends who know the scene better than me and try to identify it. But the problem is that I’m seriously late with my work. The mural I’m making is a commissioned gig and the company that ordered it gave me wrong dimensions of the wall. It’s huge! So now it will take me at least 6 hours just to transfer the sketch on the wall, and tomorrow I’m flying to Brazil. I’ll be working all night probably, and I’m still not sure I’ll make it. So unless you magically find some equipment that would speed up the process, I really can’t lose time on searching for the origin of the mural on your photo. Sorry, kid.";
      hidePoneElements();
	} else if (x == "42,22" || x == "42,43") {
			answerone = "I'm not very good with computers. My knowledge is pretty basic when it comes to technology.";
      hidePoneElements();
	} else if (x == "42,23") {
			answerone = "Sorry, I’ve never met her.";
      hidePoneElements();
	} else if (x == "42,24") {
			answerone = "Yeah, I don't have time to decipher letters for you.";
      hidePoneElements();
	} else if (x == "42,25") {
			answerone = "There is a telescope shop just across the street, you can probably get it fixed there.";
      hidePoneElements();
	} else if (x == "42,26") {
			answerone = "Does it look like I have time for tea? Well, I don’t.";
      hidePoneElements();
	} else if (x == "42,28") {
			answerone = "Wow! It’s...beautiful!";
      hidePoneElements();
	} else if (x == "42,29" || x == "42,33") {
			answerone = "I’m an artist. I don’t know anything about mineralogy.";
      hidePoneElements();
	} else if (x == "42,30") {
			answerone = "It’s the guy that works in the shop across the street, right? I saw him come out of the shop a few times.";
      hidePoneElements();
	} else if (x == "42,31") {
			answerone = "Doesn’t seem familiar.";
      hidePoneElements();
	} else if (x == "42,32") {
			answerone = "He’s cute, but I don’t know him.";
      hidePoneElements();
	} else if (x == "42,35") {
			answerone = "Ok, I’ll give you one. Take the red, I won’t be needing it.";
      hidePoneElements();
	} else if (x == "42,34" || x == "42,36" || x == "42,41") {
			answerone = "Look, I don’t have time for this.";
      hidePoneElements();
	} else if (x == "42,37") {
			answerone = "The design isn’t very innovative.";
      hidePoneElements();
	} else if (x == "42,39") {
			answerone = "This doesn't make any sense to me.";
      hidePoneElements();
	} else if (x == "42,42") {
			answerone = "I’ve been doing street art for 10 years now, and finally my career is starting to go somewhere. Actually, I’m flying to Brazil tomorrow to participate in a street art festival with some of the greatest artists in the world! I’m also doing commissioned work, like this one right now. It’s not very rewarding, but it put the food on the table. The problem with this particular gig is that the company that ordered it gave me wrong dimensions of the wall, and now I’m super late. I’ve just started, and I’m supposed to transfer the sketch on the wall. But since it’s huge, it will take me at least six hours instead of one, as I planned. If I knew it would be like this, I would have thought of a different technique to do it, but now it’s too late. So I’ll be working all night.";
      hidePoneElements();
  } else if (x == "42,LOC01" || x == "42,loc01") {
      answerone = "Girl, I'd love to visit your pretty little house, but I reeealy don't have time.";
      hidePoneElements();
  } else if (x == "42,LOC02" || x == "42,loc02") {
      answerone = "I guess I can understand why somebody would like to spend their nights looking at the sky. But I prefer other activities, personally.";
      hidePoneElements();
  } else if (x == "42,LOC03" || x == "42,loc03") {
      answerone = "I don't need a diploma to do what i do.";
      hidePoneElements();
  } else if (x == "42,LOC04" || x == "42,loc04") {
      answerone = "I'm not really the type of person to spend my afternoons in a library.";
      hidePoneElements();
  } else if (x == "42,LOC05" || x == "42,loc05") {
      answerone = "I think that tea wouldn't save me right now. Coffee maybe.";
      hidePoneElements();
  } else if (x == "42,LOC06" || x == "42,loc06" || x == "42,LOC07" || x == "42,loc07") {
      answerone = "I don't have time for weird questions about an address I've never heard of.";
      hidePoneElements();
	} else if (x == "02,03" || x == "02,40" || x == "03,02" || x == "03,27" || x == "27,03" || x == "27,40" || x == "40,02" || x == "40,27") {
      answerone = "Laika doesn't mind the fly. She's a peaceful animal.";
      hidePoneElements();
	} else if (x == "02,26" || x == "02,34" || x == "26,02" || x == "34,02" || x == "26,27" || x == "34,27" || x == "27,26" || x == "27,34") {
			answerone = "That's just disgusting. Who would want to drink that?";
      hidePoneElements();
	} else if (x == "02,08" || x == "08,02") {
			answerone = "Well, let's try this gift I apparently have now. Come on little fly, show me what you've got!<br><i> As I use my ability, I begin to feel the sensations of the fly. But not only that, I also gain power over it. It seems that I can make it move wherever I wish to.<br>Take card <b>27</b>. Remove card <b>2</b>.</i>";
      hidePoneElements();
	} else if (x == "03,03" || x == "03,23") {
			answerone = "Woof woof!";
      hidePoneElements();
	} else if (x == "03,05" || x == "05,03") {
			answerone = "<b>IMPORTANT: You can combine any two objects/plants/animals this way. The order of card numbers isn't relevant.<br><br>Now read the text bellow.</b><br><br>I can't make the cookies without the pumpkin. It's the best part!<br><br><b>OK, so you'll have to add some pumpkin to the mix before feeding Laika. Don't worry, you'll find it in one of the new locations. Continue with examining the cards. Examine Laika.</b>";
      hidePoneElements();
	} else if (x == "03,08" || x == "08,03") {
			answerone = "As I focus on Laika, I start to feel that I have some kind of power over her. I can make her do all the tricks perfectly, despite the fact that she is the worst trained dog on this planet. She even manages to bark in a pretty melody. But at the same time I sense that she’s really sad and that she would love to eat some of her favourite cookies that would remind her of my mother. I also feel that she wants to show me something, but she’s way to depressed to do it. And even with my superpowers, I can't change her mind.";
      hidePoneElements();
	} else if (x == "03,05" || x == "03,41" || x == "05,03" || x == "05,40" || x == "41,03" || x == "40,05") {
			answerone = "Cookies are not finished yet!";
      hidePoneElements();
	} else if (x == "03,15" || x == "15,03") {
			answerone = "There you go, Laika! <br><i>Laika barks and eats the cookies with pleasure. She seems to feel much better. After she finishes, she barks to get my attention. I realise that she wants to show me something, so I follow her. She goes in the backyard and starts digging a hole under the apple tree. Not long after, she digs something out. It's a cryptex. I somehow understand that Laika’s telling me how important this is to my mother. After I take it, Laika barks and runs back into the house.<br><i>Take card <b>06</b>. Remove cards <b>03</b>, <b>15</b> and location card <b>LOC01</b>.</i>";
      hidePoneElements();
	} else if (x == "03,26" || x == "26,03" || x == "26,40" || x == "40,26") {
			answerone = "The tea is not for Laika.";
      hidePoneElements();
	} else if (x == "03,13" || x == "03,38" || x == "13,03" || x == "13,40" || x == "40,13") {
			answerone = "I don't think that Laika is very fond of the parrot.";
      hidePoneElements();
	} else if (x == "04,21" || x == "21,04") {
			answerone = "Where and why should I make a projection of this photo?";
      hidePoneElements();
  } else if (x == "05,36" || x == "36,05") {
      answerone = "I don't think that freshly chopped pumpkin and freshly chopped pumpkin sprout are one and the same. I have to get a ripe pumpkin fruit for these cookies.";
      hidePoneElements();
  } else if (x == "05,41" || x == "41,05") {
      answerone = "Finally, let's put this pumpkin in the mix. 30 minutes in the oven and here come the best dog cookies Laika could wish for.<br><i>Take card <b>15</b>. Remove cards <b>05</b> and <b>41</b>.</i>";
      hidePoneElements();
	} else if (x == "07,35" || x == "35,07") {
			answerone = "It wouldn’t do any good if I paint over the lecture poster. The lecture would have still been held.";
      hidePoneElements();
	} else if (x == "08,09" || x == "08,10" || x == "08,11" || x == "08,14" || x == "08,18" || x == "08,30" || x == "08,31" || x == "08,32") {
			answerone = "Unfortunately, it seems  to work only on plants and animals. It would be amazing and in same time terrifying to be able to feel other person’s feelings.";
      hidePoneElements();
	} else if (x == "08,13" || x == "13,08") {
			answerone = "I focus on the parrot and I feel that I start to connect with its mind. At the same time, I start to feel a connection with my mother. I realise that she used to do this too. And then suddenly, the parrot starts talking. <br><i>Take card <b>38</b>. Remove card <b>13</b>.</i>";
      hidePoneElements();
	} else if (x == "08,36" || x == "36,08") {
			answerone = "I focus hard on the sprout, trying to give all the energy I have into it. Even though I’m not really sure what I’m doing, the plant starts to rapidly grow in front of me. In about a minute of my hard work, a flower appears, and in two minutes, there is already a small green fruit. In three minutes, I’ve created a fully grown, completely ripe pumpkin. <br><i>Take card <b>41</b>. Remove card <b>36</b>.</i>";
      hidePoneElements();
	} else if (x == "08,41" || x == "41,08") {
			answerone = "I think this works only when the plant is still planted.";
      hidePoneElements();
	} else if (x == "12,17" || x == "17,12") {
			answerone = "Well sure, a book on astronomy can be useful while looking into space, but I can’t directly use it with the telescope lens.";
      hidePoneElements();
	} else if (x == "12,25" || x == "25,12") {
			answerone = "All right! This should work now. Let’s take a look at the sky tonight.<br><i>Take card <b>16</b>. Remove cards <b>12</b> and <b>25</b>.</i>";
      hidePoneElements();
	} else if (x == "15,26" || x == "26,15") {
			answerone = "Cookies and tea are a great combination, but dog cookies and tea maybe less so.";
      hidePoneElements();
	} else if (x == "17,25" || x == "25,17") {
			answerone = "The book can be useful while looking into space, but it won’t fix the telescope.";
      hidePoneElements();
	} else if (x == "21,35" || x == "35,21") {
			answerone = "I don’t want to spray the paint all over the photo. My mother liked it so much that she had it framed. Why would I destroy it?";
      hidePoneElements();
	} else if (x == "26,43" || x == "43,26") {
			answerone = "I can't just spill the tea all over Jocelyn's computer right in front of her! And even if I had the guts, how can I be sure that it would work?";
      hidePoneElements();
	} else if (x == "27,43" || x == "43,27") {
			answerone = "I send my fly to look at Jocelyn's computer. As she has done a hundred times already, she opens the computer, types her password and checks some facts in her lecture. The fly has a great view over the screen and gives me its mental image of Jocelyn's password. OK, if I knew that it was so simple, I could have guessed it myself. Jocelyn, you really couldn't have come up with something better than 'Jocelyn1234'? <br><i>Write the password down or memorize it and remove card <b>27</b>.</i>";
      hidePoneElements();
	} else if (x == "27,29" || x == "29,27") {
			answerone = "The tests are in a closed folder. There is no way that I can make the fly open the folder to take a look at the tests.";
      hidePoneElements();
	} else if (x == "29,35" || x == "35,29") {
			answerone = "I can’t just spray paint all over the tests! And in front of the professor too.";
      hidePoneElements();
	} else if (x == "29,37" || x == "37,29") {
			answerone = "I don’t know how to use these two together, but I have a feeling that the flag could be useful in my diabolic plan to get the mineralogy test.";
      hidePoneElements();
	} else if (x == "33,35" || x == "35,33") {
			answerone = "If I spray all over the tests, professor Martin will simply make new copies. It’s not a great solution.";
      hidePoneElements();
	} else if (x == "35,37" || x == "37,35") {
			answerone = "Ok, let’s see if I have some talent in arts. I’ll admit it’s not a masterpiece, but it will do the trick. <br><i>I draw some pretty provocative signs on the flag, just in time before it’s supposed to be raised up on the pole. I go back up to professor Martin’s desk and wait for the big flag reveal. I hear the hymn starting on the speakers, and the people around me start to stir. 30 seconds after, everybody is already by the window, commenting on the flag vandalization. Professor Martin also gets up and goes to the window to see what all the fuss is about. The mineralogy tests stay on the desk, unsupervised. <br><i>Take card <b>33</b>. Remove cards <b>29</b>, <b>35</b> and <b>37</b>.</i>";
      hidePoneElements();
	} else if (x == "22,Jocelyn1234" || x == "22,jocelyn1234" || x == "22,JOCELYN1234") {
			answerone = "Well, this is an absolutely terrible thing to do, but I’m doing it anyway. However, to not be a total villain, I’ll copy her lecture on a cloud first and send her a link to download it tomorrow. Anonymously, obviously. I’m really sorry, Jocelyn! <br><i>I delete the lecture from the computer and move on another table. Jocelyn returns from the toilet and checks her computer for the lecture, staying speechless after realising that it's gone. After a few minutes of disbelief, she leaves the tea shop and goes to the library to cancel her lecture. I follow her, and wait for her to finish her conversation with Sandy. As she leaves, I kindly ask Sandy to borrow the projector. Sandy, although a bit suspicious about this unexpected turn of events, lets me have it. <br>Take card <b>04</b>. Remove cards <b>07</b>, <b>11</b>, <b>20</b> and <b>22</b>.</i>";
      hidePoneElements();
	} else if (x == "06,Kepler" || x == "06,kepler" || x == "06,KEPLER") {
			answerone = "It works! There is a rolled piece of paper in the cryptex. It looks like a letter. <br>Take card <b>24</b>. Remove cards <b>06</b> and <b>38</b>.</i>";
      hidePoneElements();
	} else if (x == "E75" || x == "e75") {
			answerone = "This location is already opened.";
      hidePoneElements();
	} else if (x == "D43" || x == "d43") {
			answerone = "Let's check out this telescope shop.<br><i>Take location card <b>LOC02</b>.</i>";
      hidePoneElements();
	} else if (x == "E62" || x == "e62") {
			answerone = "<b>IMPORTANT: You can open new locations this way. Sometimes you can find the address by looking at the map, and sometimes the address will be a solution to a puzzle. Don't forget to open new locations.<br><br>Now read the text bellow.</b><br><br>I'm not really in the mood to return to the University yet, but I could get some information there.<br><i>Take location card <b>LOC03</b></i>.<br><br><b>We're leaving you on your own now. Examine cards, talk to characters, combine objects and open new locations to make progress in the game. If you get stuck, use the hint system on this website. Good luck!</b>";
      hidePoneElements();
	} else if (x == "B40" || x == "b40") {
			answerone = "Maybe there is something in the library worth looking at.<br><i>Take location card <b>LOC04</b>.</i>";
      hidePoneElements();
	} else if (x == "B38" || x == "b38") {
			answerone = "So let's meet this Jocelyn Hill.<br><i>Take location card <b>LOC05</b>.</i>";
      hidePoneElements();
	} else if (x == "B41" || x == "b41") {
			answerone = "There is no tea shop at this address. So I guess it's at the other next door to the library.";
      hidePoneElements();
	} else if (x == "C46" || x == "c46") {
			answerone = "I hope I got the address right from this puzzle my mother left me.<br><i>Take location card <b>LOC06</b>. Remove cards <b>16</b> and <b>17</b>.</i>";
      hidePoneElements();
	} else if (x == "A82" || x == "a82") {
			answerone = "I trace Mary's movements from the apartment to the mural, going backwards. I guess this should be it.<br><i>Take location card <b>LOC07</b>.</i>";
      hidePoneElements();
	} else if (x == "C84" || x == "c84") {
			answerone = "The mural used to be here, but now it's painted over. I'm not sure what should I be looking for here.</i>";
      hidePoneElements();
	} else {
  		answerone = randomanswerone[Math.floor(Math.random()*randomanswerone.length)];
      hidePoneElements();
  	}
  	document.getElementById("bookPoneAnswer").innerHTML = answerone;
  	document.getElementById("bookPoneRules").innerHTML = rulesone;
};

function togglePoneLOC01() {
  if (document.getElementById("hintPoneLOC01").style.display == "block") {
    document.getElementById("hintPoneLOC01").style.display = "none";
    document.getElementById("locPoneLOC01").value = "Location LOC01";
  }
  else {
    document.getElementById("hintPoneLOC01").style.display = "block";
    document.getElementById("locPoneLOC01").value = "Hide hints for LOC01";
  }
};

function togglePone05() {
  if (document.getElementById("hintPone05_1").style.display == "block") {
    document.getElementById("hintPone05_1").style.display = "none";
    document.getElementById("hintPone05").value = "Card 05";
  }
  else {
    document.getElementById("hintPone05_1").style.display = "block";
    document.getElementById("hintPone05_1Answer").innerHTML = "If you haven't already, examine Laika by entering her card number in the Digital Game Book input field."
    document.getElementById("hintPone05").value = "Hide hints for card 05";
  }
};

function togglePone21() {
  if (document.getElementById("hintPone21_1").style.display == "block") {
    document.getElementById("hintPone21_1").style.display = "none";
    document.getElementById("hintPone21").value = "Card 21";
  }
  else {
    document.getElementById("hintPone21_1").style.display = "block";
    document.getElementById("hintPone21_1Answer").innerHTML = "You should get information from a character on another location about the mural."
    document.getElementById("hintPone21").value = "Hide hints for card 21";
  }
};

function showhintPone21_2() {
  document.getElementById("hintPone21_2").style.display = "block";
  document.getElementById("hintPone21_2Answer").innerHTML = "There is somebody around 'Outer Space Telescopes' that could know something about street art."
};

function showhintPone21_3() {
  document.getElementById("hintPone21_3").style.display = "block";
  document.getElementById("hintPone21_3Answer").innerHTML = "This mural is clearly connected to another object. If you still don't have card 24, return to this later."
};

function showhintPone21_4() {
  document.getElementById("hintPone21_4").style.display = "block";
  document.getElementById("hintPone21_4Answer").innerHTML = "Mary left home and described the way she took to the mural. So how can you get her address?"
};

function showhintPone21_5() {
  document.getElementById("hintPone21_5").style.display = "block";
  document.getElementById("hintPone21_5Answer").innerHTML = "Track Mary's movements backwards, from the mural to her apartment, using the Majorton map."
};

function showhintPone21_6() {
  document.getElementById("hintPone21_6").style.display = "block";
  document.getElementById("hintPone21_6Answer").innerHTML = "Mary's address is A82."
};

function togglePone25() {
  if (document.getElementById("hintPone25_1").style.display == "block") {
    document.getElementById("hintPone25_1").style.display = "none";
    document.getElementById("hintPone25").value = "Card 25";
  }
  else {
    document.getElementById("hintPone25_1").style.display = "block";
    document.getElementById("hintPone25_1Answer").innerHTML = "If you examine the telescope, you should have information on a new location."
    document.getElementById("hintPone25").value = "Hide hints for card 25";
  }
};

function showhintPone25_2() {
  document.getElementById("hintPone25_2").style.display = "block";
  document.getElementById("hintPone25_2Answer").innerHTML = "Look at the map. Are there streets that fit to the description given in the shop add?"
};

function showhintPone25_3() {
  document.getElementById("hintPone25_3").style.display = "block";
  document.getElementById("hintPone25_3Answer").innerHTML = "The shop add says: <i>Find us on the northwest corner of two crossing streets, where couples always in broad daylight meet!</i> There is a junction of streets <i>Lovers Lane</i> and <i>Sunny Road</i> on the Majorton map. The address of the northwest corner of this junction is D43."
};

function showhintPone25_4() {
  document.getElementById("hintPone25_4").style.display = "block";
  document.getElementById("hintPone25_4Answer").innerHTML = "Did you ask about the telescope in the shop? You need something from another location before you can fix it."
};

function togglePone40() {
  if (document.getElementById("hintPone40_1").style.display == "block") {
    document.getElementById("hintPone40_1").style.display = "none";
    document.getElementById("hintPone40").value = "Card 40";
  }
  else {
    document.getElementById("hintPone40_1").style.display = "block";
    document.getElementById("hintPone40_1Answer").innerHTML = "You need to examine Laika."
    document.getElementById("hintPone40").value = "Hide hints for card 40";
  }
};

function togglePoneLOC02() {
  if (document.getElementById("hintPoneLOC02").style.display == "block") {
    document.getElementById("hintPoneLOC02").style.display = "none";
    document.getElementById("locPoneLOC02").value = "Location LOC02";
  }
  else {
    document.getElementById("hintPoneLOC02").style.display = "block";
    document.getElementById("locPoneLOC02").value = "Hide hints for LOC02";
  }
};

function togglePone30() {
  if (document.getElementById("hintPone30_1").style.display == "block") {
    document.getElementById("hintPone30_1").style.display = "none";
    document.getElementById("hintPone30").value = "Card 30";
  }
  else {
    document.getElementById("hintPone30_1").style.display = "block";
    document.getElementById("hintPone30_1Answer").innerHTML = "Talk to Peter about the thing that brought you here."
    document.getElementById("hintPone30").value = "Hide hints for card 30";
  }
};

function showhintPone30_2() {
  document.getElementById("hintPone30_2").style.display = "block";
  document.getElementById("hintPone30_2Answer").innerHTML = "If you ask Peter about the telescope, that should bring you to open a new location. Use the map to find it."
};

function showhintPone30_3() {
  document.getElementById("hintPone30_3").style.display = "block";
  document.getElementById("hintPone30_3Answer").innerHTML = "You will need to find some money. But this isn't the right place to find it."
};

function togglePone42() {
  if (document.getElementById("hintPone42_1").style.display == "block") {
    document.getElementById("hintPone42_1").style.display = "none";
    document.getElementById("hintPone42").value = "Card 42";
  }
  else {
    document.getElementById("hintPone42_1").style.display = "block";
    document.getElementById("hintPone42_1Answer").innerHTML = "Talk to Loomey about something that's close to her profession."
    document.getElementById("hintPone42").value = "Hide hints for card 42";
  }
};

function showhintPone42_2() {
  document.getElementById("hintPone42_2").style.display = "block";
  document.getElementById("hintPone42_2Answer").innerHTML = "If you ask Loomey about the mural, she will tell you that she needs something to finish her work so that she would have time to help you. You can find this in another location."
};

function showhintPone42_3() {
  document.getElementById("hintPone42_3").style.display = "block";
  document.getElementById("hintPone42_3Answer").innerHTML = "Loomey will help you if you get her the projector."
};

function togglePone35() {
  if (document.getElementById("hintPone35_1").style.display == "block") {
    document.getElementById("hintPone35_1").style.display = "none";
    document.getElementById("hintPone35").value = "Card 35";
  }
  else {
    document.getElementById("hintPone35_1").style.display = "block";
    document.getElementById("hintPone35_1Answer").innerHTML = "There is something in another location you can use the spray on."
    document.getElementById("hintPone35").value = "Hide hints for card 35";
  }
};

function showhintPone35_2() {
  document.getElementById("hintPone35_2").style.display = "block";
  document.getElementById("hintPone35_2Answer").innerHTML = "Did you go to the University? There is somebody there that could use your help."
};

function showhintPone35_3() {
  document.getElementById("hintPone35_3").style.display = "block";
  document.getElementById("hintPone35_3Answer").innerHTML = "How could you use the spray paint to help Jamie?"
};

function showhintPone35_4() {
  document.getElementById("hintPone35_4").style.display = "block";
  document.getElementById("hintPone35_4Answer").innerHTML = "Use the spray paint on the University flag."
};

function togglePoneLOC03() {
  if (document.getElementById("hintPoneLOC03").style.display == "block") {
    document.getElementById("hintPoneLOC03").style.display = "none";
    document.getElementById("locPoneLOC03").value = "Location LOC03";
  }
  else {
    document.getElementById("hintPoneLOC03").style.display = "block";
    document.getElementById("locPoneLOC03").value = "Hide hints for LOC03";
  }
};

function togglePone18() {
  if (document.getElementById("hintPone18_1").style.display == "block") {
    document.getElementById("hintPone18_1").style.display = "none";
    document.getElementById("hintPone18").value = "Card 18";
  }
  else {
    document.getElementById("hintPone18_1").style.display = "block";
    document.getElementById("hintPone18_1Answer").innerHTML = "What brought you to the University? What does professor Martin teach?"
    document.getElementById("hintPone18").value = "Hide hints for card 18";
  }
};

function showhintPone18_2() {
  document.getElementById("hintPone18_2").style.display = "block";
  document.getElementById("hintPone18_2Answer").innerHTML = "Ask professor Martin about the gem."
};

function togglePone31() {
  if (document.getElementById("hintPone31_1").style.display == "block") {
    document.getElementById("hintPone31_1").style.display = "none";
    document.getElementById("hintPone31").value = "Card 31";
  }
  else {
    document.getElementById("hintPone31_1").style.display = "block";
    document.getElementById("hintPone31_1Answer").innerHTML = "You can ask Jamie about the characters and objects that you see in the University."
    document.getElementById("hintPone31").value = "Hide hints for card 31";
  }
};

function showhintPone31_2() {
  document.getElementById("hintPone31_2").style.display = "block";
  document.getElementById("hintPone31_2Answer").innerHTML = "Is there something you could do to make professor Martin look away from the tests? You should use an object from another location."
};

function showhintPone31_3() {
  document.getElementById("hintPone31_3").style.display = "block";
  document.getElementById("hintPone31_3Answer").innerHTML = "Use the spray paint on the University flag."
};

function togglePone29() {
  if (document.getElementById("hintPone29_1").style.display == "block") {
    document.getElementById("hintPone29_1").style.display = "none";
    document.getElementById("hintPone29").value = "Card 29";
  }
  else {
    document.getElementById("hintPone29_1").style.display = "block";
    document.getElementById("hintPone29_1Answer").innerHTML = "Talk to Jaime about this."
    document.getElementById("hintPone29").value = "Hide hints for card 29";
  }
};

function showhintPone29_2() {
  document.getElementById("hintPone29_2").style.display = "block";
  document.getElementById("hintPone29_2Answer").innerHTML = "Is there something you could do to make professor Martin look away from the tests? You should use an object from another location."
};

function showhintPone29_3() {
  document.getElementById("hintPone29_3").style.display = "block";
  document.getElementById("hintPone29_3Answer").innerHTML = "Use the spray paint on the University flag."
};

function togglePone37() {
  if (document.getElementById("hintPone37_1").style.display == "block") {
    document.getElementById("hintPone37_1").style.display = "none";
    document.getElementById("hintPone37").value = "Card 37";
  }
  else {
    document.getElementById("hintPone37_1").style.display = "block";
    document.getElementById("hintPone37_1Answer").innerHTML = "Talk to Jaime about characters and objects that you see in the University."
    document.getElementById("hintPone37").value = "Hide hints for card 37";
  }
};

function showhintPone37_2() {
  document.getElementById("hintPone37_2").style.display = "block";
  document.getElementById("hintPone37_2Answer").innerHTML = "Could you use the flag somehow to help Jamie? You should use an object from another location."
};

function showhintPone37_3() {
  document.getElementById("hintPone37_3").style.display = "block";
  document.getElementById("hintPone37_3Answer").innerHTML = "Use the spray paint on the University flag."
};

function togglePoneLOC04() {
  if (document.getElementById("hintPoneLOC04").style.display == "block") {
    document.getElementById("hintPoneLOC04").style.display = "none";
    document.getElementById("locPoneLOC04").value = "Location LOC04";
  }
  else {
    document.getElementById("hintPoneLOC04").style.display = "block";
    document.getElementById("locPoneLOC04").value = "Hide hints for LOC04";
  }
};

function togglePone09() {
  if (document.getElementById("hintPone09_1").style.display == "block") {
    document.getElementById("hintPone09_1").style.display = "none";
    document.getElementById("hintPone09").value = "Card 09";
  }
  else {
    document.getElementById("hintPone09_1").style.display = "block";
    document.getElementById("hintPone09_1Answer").innerHTML = "Ask Sandy about the object that brought you to the library. Also, it's always a good idea to ask about the things that you find in the location."
    document.getElementById("hintPone09").value = "Hide hints for card 09";
  }
};

function showhintPone09_2() {
  document.getElementById("hintPone09_2").style.display = "block";
  document.getElementById("hintPone09_2Answer").innerHTML = "Sandy should know something about the paper with the library logo. She also knows about the lecture that will be held in the library."
};

function togglePone02() {
  if (document.getElementById("hintPone02_1").style.display == "block") {
    document.getElementById("hintPone02_1").style.display = "none";
    document.getElementById("hintPone02").value = "Card 02";
  }
  else {
    document.getElementById("hintPone02_1").style.display = "block";
    document.getElementById("hintPone02_1Answer").innerHTML = "You have something special that you can use with animals."
    document.getElementById("hintPone02").value = "Hide hints for card 02";
  }
};

function showhintPone02_2() {
  document.getElementById("hintPone02_2").style.display = "block";
  document.getElementById("hintPone02_2Answer").innerHTML = "Use your ability to connect to animals and plants on the house fly."
};

function togglePone07() {
  if (document.getElementById("hintPone07_1").style.display == "block") {
    document.getElementById("hintPone07_1").style.display = "none";
    document.getElementById("hintPone07").value = "Card 07";
  }
  else {
    document.getElementById("hintPone07_1").style.display = "block";
    document.getElementById("hintPone07_1Answer").innerHTML = "Sandy could know something about the lecture."
    document.getElementById("hintPone07").value = "Hide hints for card 07";
  }
};

function showhintPone07_2() {
  document.getElementById("hintPone07_2").style.display = "block";
  document.getElementById("hintPone07_2Answer").innerHTML = "Jocelyn Hill is in the tea shop next door. Use the map to find the tea shop."
};

function showhintPone07_3() {
  document.getElementById("hintPone07_3").style.display = "block";
  document.getElementById("hintPone07_3Answer").innerHTML = "The address of the tea shop is B38."
};

function togglePone20() {
  if (document.getElementById("hintPone20_1").style.display == "block") {
    document.getElementById("hintPone20_1").style.display = "none";
    document.getElementById("hintPone20").value = "Card 20";
  }
  else {
    document.getElementById("hintPone20_1").style.display = "block";
    document.getElementById("hintPone20_1Answer").innerHTML = "Sandy could know something about the projector."
    document.getElementById("hintPone20").value = "Hide hints for card 20";
  }
};

function showhintPone20_2() {
  document.getElementById("hintPone20_2").style.display = "block";
  document.getElementById("hintPone20_2Answer").innerHTML = "You should ask about the lecture Sandy was talking about."
};


function showhintPone20_3() {
  document.getElementById("hintPone20_3").style.display = "block";
  document.getElementById("hintPone20_3Answer").innerHTML = "Jocelyn Hill is in the tea shop next door. Use the map to find the tea shop."
};

function showhintPone20_4() {
  document.getElementById("hintPone20_4").style.display = "block";
  document.getElementById("hintPone20_4Answer").innerHTML = "The address of the tea shop is B38."
};

function showhintPone20_5() {
  document.getElementById("hintPone20_5").style.display = "block";
  document.getElementById("hintPone20_5Answer").innerHTML = "If you want to borrow the projector, you should do something to sabotage the lecture."
};

function showhintPone20_6() {
  document.getElementById("hintPone20_6").style.display = "block";
  document.getElementById("hintPone20_6Answer").innerHTML = "Talk to somebody about Jocelyn."
};

function showhintPone20_7() {
  document.getElementById("hintPone20_7").style.display = "block";
  document.getElementById("hintPone20_7Answer").innerHTML = "Is there something in your power that could see her computer password? Also, Jocelyn is maybe thirsty."
};

function showhintPone20_8() {
  document.getElementById("hintPone20_8").style.display = "block";
  document.getElementById("hintPone20_8Answer").innerHTML = "Use the hypnotised house fly on the computer. When you have Jocelyn's password, you can offer her a cup of tea. This will send her to the toilet, when you can enter the password in her computer."
};

function togglePoneLOC05() {
  if (document.getElementById("hintPoneLOC05").style.display == "block") {
    document.getElementById("hintPoneLOC05").style.display = "none";
    document.getElementById("locPoneLOC05").value = "Location LOC05";
  }
  else {
    document.getElementById("hintPoneLOC05").style.display = "block";
    document.getElementById("locPoneLOC05").value = "Hide hints for LOC05";
  }
};

function togglePone11() {
  if (document.getElementById("hintPone11_1").style.display == "block") {
    document.getElementById("hintPone11_1").style.display = "none";
    document.getElementById("hintPone11").value = "Card 11";
  }
  else {
    document.getElementById("hintPone11_1").style.display = "block";
    document.getElementById("hintPone11_1Answer").innerHTML = "Why is Jocelyn's lecture important? Is there something connected to it that you could use?"
    document.getElementById("hintPone11").value = "Hide hints for card 11";
  }
};

function showhintPone11_2() {
  document.getElementById("hintPone11_2").style.display = "block";
  document.getElementById("hintPone11_2Answer").innerHTML = "If you want to take the projector, you have to sabotage Jocelyn's lecture."
};

function togglePone32() {
  if (document.getElementById("hintPone32_1").style.display == "block") {
    document.getElementById("hintPone32_1").style.display = "none";
    document.getElementById("hintPone32").value = "Card 32";
  }
  else {
    document.getElementById("hintPone32_1").style.display = "block";
    document.getElementById("hintPone32_1Answer").innerHTML = "Baristas usually notice stuff about their customers. Also, they take drink orders."
    document.getElementById("hintPone32").value = "Hide hints for card 32";
  }
};

function showhintPone32_2() {
  document.getElementById("hintPone32_2").style.display = "block";
  document.getElementById("hintPone32_2Answer").innerHTML = "Ask Mark about Jocelyn. And order her some tea, her cup is empty."
};

function togglePone34() {
  if (document.getElementById("hintPone34_1").style.display == "block") {
    document.getElementById("hintPone34_1").style.display = "none";
    document.getElementById("hintPone34").value = "Card 34";
  }
  else {
    document.getElementById("hintPone34_1").style.display = "block";
    document.getElementById("hintPone34_1Answer").innerHTML = "The cup is empty. Maybe Jocelyn would like more tea?"
    document.getElementById("hintPone34").value = "Hide hints for card 34";
  }
};

function showhintPone34_2() {
  document.getElementById("hintPone34_2").style.display = "block";
  document.getElementById("hintPone34_2Answer").innerHTML = "Ask Mark for another cup of tea."
};

function togglePone43() {
  if (document.getElementById("hintPone43_1").style.display == "block") {
    document.getElementById("hintPone43_1").style.display = "none";
    document.getElementById("hintPone43").value = "Card 43";
  }
  else {
    document.getElementById("hintPone43_1").style.display = "block";
    document.getElementById("hintPone43_1Answer").innerHTML = "Maybe you can ask somebody about Jocelyn or her computer. People can be very observant."
    document.getElementById("hintPone43").value = "Hide hints for card 43";
  }
};

function showhintPone43_2() {
  document.getElementById("hintPone43_2").style.display = "block";
  document.getElementById("hintPone43_2Answer").innerHTML = "Is there something in your power that could see Jocelyn's password?"
};

function showhintPone43_3() {
  document.getElementById("hintPone43_3").style.display = "block";
  document.getElementById("hintPone43_3Answer").innerHTML = "Is there anything that you can use that is small and can easily get everywhere?"
};

function showhintPone43_4() {
  document.getElementById("hintPone43_4").style.display = "block";
  document.getElementById("hintPone43_4Answer").innerHTML = "Use the hypnotised house fly on Jocelyn's computer."
};

function togglePoneLOC06() {
  if (document.getElementById("hintPoneLOC06").style.display == "block") {
    document.getElementById("hintPoneLOC06").style.display = "none";
    document.getElementById("locPoneLOC06").value = "Location LOC06";
  }
  else {
    document.getElementById("hintPoneLOC06").style.display = "block";
    document.getElementById("locPoneLOC06").value = "Hide hints for LOC06";
  }
};

function togglePone10() {
  if (document.getElementById("hintPone10_1").style.display == "block") {
    document.getElementById("hintPone10_1").style.display = "none";
    document.getElementById("hintPone10").value = "Card 10";
  }
  else {
    document.getElementById("hintPone10_1").style.display = "block";
    document.getElementById("hintPone10_1Answer").innerHTML = "Somebody left you a bunch of clues to find Emma. So you should probably talk to her about this person."
    document.getElementById("hintPone10").value = "Hide hints for card 10";
  }
};

function showhintPone10_2() {
  document.getElementById("hintPone10_2").style.display = "block";
  document.getElementById("hintPone10_2Answer").innerHTML = "Ask Emma about your mother."
};

function togglePone13() {
  if (document.getElementById("hintPone13_1").style.display == "block") {
    document.getElementById("hintPone13_1").style.display = "none";
    document.getElementById("hintPone13").value = "Card 13";
  }
  else {
    document.getElementById("hintPone13_1").style.display = "block";
    document.getElementById("hintPone13_1Answer").innerHTML = "Don't you have something special to do with animals?"
    document.getElementById("hintPone13").value = "Hide hints for card 13";
  }
};

function showhintPone13_2() {
  document.getElementById("hintPone13_2").style.display = "block";
  document.getElementById("hintPone13_2Answer").innerHTML = "Use your ability on the parrot."
};

function togglePone36() {
  if (document.getElementById("hintPone36_1").style.display == "block") {
    document.getElementById("hintPone36_1").style.display = "none";
    document.getElementById("hintPone36").value = "Card 36";
  }
  else {
    document.getElementById("hintPone36_1").style.display = "block";
    document.getElementById("hintPone36_1Answer").innerHTML = "How could you make the sprout become a pumpkin?"
    document.getElementById("hintPone36").value = "Hide hints for card 36";
  }
};

function showhintPone36_2() {
  document.getElementById("hintPone36_2").style.display = "block";
  document.getElementById("hintPone36_2Answer").innerHTML = "Use your ability on the sprout."
};

function togglePoneLOC07() {
  if (document.getElementById("hintPoneLOC07").style.display == "block") {
    document.getElementById("hintPoneLOC07").style.display = "none";
    document.getElementById("locPoneLOC07").value = "Location LOC07";
  }
  else {
    document.getElementById("hintPoneLOC07").style.display = "block";
    document.getElementById("locPoneLOC07").value = "Hide hints for LOC07";
  }
};

function togglePone14() {
  if (document.getElementById("hintPone14_1").style.display == "block") {
    document.getElementById("hintPone14_1").style.display = "none";
    document.getElementById("hintPone14").value = "Card 14";
  }
  else {
    document.getElementById("hintPone14_1").style.display = "block";
    document.getElementById("hintPone14_1Answer").innerHTML = "Who brought you here?"
    document.getElementById("hintPone14").value = "Hide hints for card 14";
  }
};

function showhintPone14_2() {
  document.getElementById("hintPone14_2").style.display = "block";
  document.getElementById("hintPone14_2Answer").innerHTML = "Ask Mary about your mother."
};

function togglePoneOther() {
  if (document.getElementById("hintPoneOther").style.display == "block") {
    document.getElementById("hintPoneOther").style.display = "none";
    document.getElementById("locPoneOther").value = "Other cards";
  }
  else {
    document.getElementById("hintPoneOther").style.display = "block";
    document.getElementById("locPoneOther").value = "Hide hints for other cards";
  }
};

function togglePone01() {
  if (document.getElementById("hintPone01_1").style.display == "block") {
    document.getElementById("hintPone01_1").style.display = "none";
    document.getElementById("hintPone01").value = "Card 01";
  }
  else {
    document.getElementById("hintPone01_1").style.display = "block";
    document.getElementById("hintPone01_1Answer").innerHTML = "Nothing mysterious about Ziggy. You don't need a hint for her."
    document.getElementById("hintPone01").value = "Hide hints for card 01";
  }
};

function togglePone03() {
  if (document.getElementById("hintPone03_1").style.display == "block") {
    document.getElementById("hintPone03_1").style.display = "none";
    document.getElementById("hintPone03").value = "Card 03";
  }
  else {
    document.getElementById("hintPone03_1").style.display = "block";
    document.getElementById("hintPone03_1Answer").innerHTML = "You need to find pumpkin on another location to add to the cookies mix. Then you can feed Laika."
    document.getElementById("hintPone03").value = "Hide hints for card 03";
  }
};

function togglePone04() {
  if (document.getElementById("hintPone04_1").style.display == "block") {
    document.getElementById("hintPone04_1").style.display = "none";
    document.getElementById("hintPone04").value = "Card 04";
  }
  else {
    document.getElementById("hintPone04_1").style.display = "block";
    document.getElementById("hintPone04_1Answer").innerHTML = "Who could use this projector? You've met this person on one of the locations."
    document.getElementById("hintPone04").value = "Hide hints for card 04";
  }
};

function showhintPone04_2() {
  document.getElementById("hintPone04_2").style.display = "block";
  document.getElementById("hintPone04_2Answer").innerHTML = "Give the projector to Loomey."
};

function togglePone06() {
  if (document.getElementById("hintPone06_1").style.display == "block") {
    document.getElementById("hintPone06_1").style.display = "none";
    document.getElementById("hintPone06").value = "Card 06";
  }
  else {
    document.getElementById("hintPone06_1").style.display = "block";
    document.getElementById("hintPone06_1Answer").innerHTML = "Your mother surely left you clues for opening this cryptex. Have you talked to everybody?"
    document.getElementById("hintPone06").value = "Hide hints for card 06";
  }
};

function showhintPone06_2() {
  document.getElementById("hintPone06_2").style.display = "block";
  document.getElementById("hintPone06_2Answer").innerHTML = "There is a reason why your mother led you to Korns' farm."
};

function showhintPone06_3() {
  document.getElementById("hintPone06_3").style.display = "block";
  document.getElementById("hintPone06_3Answer").innerHTML = "Both Emma and the parrot can say something about this."
};

function showhintPone06_4() {
  document.getElementById("hintPone06_4").style.display = "block";
  document.getElementById("hintPone06_4Answer").innerHTML = "Ask Emma about your mother. Ask the talkative parrot about Emma or the cryptex."
};

function showhintPone06_5() {
  document.getElementById("hintPone06_5").style.display = "block";
  document.getElementById("hintPone06_5Answer").innerHTML = "Your mother left a bizzare message with Emma. If you ask the talkative parrot about this, it tells you to read only the first letters of the message. The message then says: <i>The code is KEPLER. They are coming. Find Mary.</i> Enter KEPLER in the cryptex to open it."
};

function togglePone08() {
  if (document.getElementById("hintPone08_1").style.display == "block") {
    document.getElementById("hintPone08_1").style.display = "none";
    document.getElementById("hintPone08").value = "Card 08";
  }
  else {
    document.getElementById("hintPone08_1").style.display = "block";
    document.getElementById("hintPone08_1Answer").innerHTML = "Use this ability with the animals and plants in the game, and you can't go wrong."
    document.getElementById("hintPone08").value = "Hide hints for card 08";
  }
};

function togglePone12() {
  if (document.getElementById("hintPone12_1").style.display == "block") {
    document.getElementById("hintPone12_1").style.display = "none";
    document.getElementById("hintPone12").value = "Card 12";
  }
  else {
    document.getElementById("hintPone12_1").style.display = "block";
    document.getElementById("hintPone12_1Answer").innerHTML = "Now when you have the lens, you can finally fix your telescope."
    document.getElementById("hintPone12").value = "Hide hints for card 12";
  }
};

function togglePone15() {
  if (document.getElementById("hintPone15_1").style.display == "block") {
    document.getElementById("hintPone15_1").style.display = "none";
    document.getElementById("hintPone15").value = "Card 15";
  }
  else {
    document.getElementById("hintPone15_1").style.display = "block";
    document.getElementById("hintPone15_1Answer").innerHTML = "Laika would love to eat these cookies."
    document.getElementById("hintPone15").value = "Hide hints for card 15";
  }
};

function togglePone16() {
  if (document.getElementById("hintPone16_1").style.display == "block") {
    document.getElementById("hintPone16_1").style.display = "none";
    document.getElementById("hintPone16").value = "Card 16";
  }
  else {
    document.getElementById("hintPone16_1").style.display = "block";
    document.getElementById("hintPone16_1Answer").innerHTML = "There is an object connected to this puzzle that your mother left you."
    document.getElementById("hintPone16").value = "Hide hints for card 16";
  }
};

function showhintPone16_2() {
  document.getElementById("hintPone16_2").style.display = "block";
  document.getElementById("hintPone16_2Answer").innerHTML = "Do you have card 17? The message there gives you a clue on how to find a new location."
};

function showhintPone16_3() {
  document.getElementById("hintPone16_3").style.display = "block";
  document.getElementById("hintPone16_3Answer").innerHTML = "Look at the map. What does the message in the astronomy book say? Does the form of Cygnus constellation remind you of something?"
};

function showhintPone16_4() {
  document.getElementById("hintPone16_4").style.display = "block";
  document.getElementById("hintPone16_4Answer").innerHTML = "You can find the form of Cygnus constellation on the map by using the instructions in the message."
};

function showhintPone16_5() {
  document.getElementById("hintPone16_5").style.display = "block";
  document.getElementById("hintPone16_5Answer").innerHTML = "The address is C46."
};

function togglePone17() {
  if (document.getElementById("hintPone17_1").style.display == "block") {
    document.getElementById("hintPone17_1").style.display = "none";
    document.getElementById("hintPone17").value = "Card 17";
  }
  else {
    document.getElementById("hintPone17_1").style.display = "block";
    document.getElementById("hintPone17_1Answer").innerHTML = "If you still don't have card 16 you can't solve this puzzle."
    document.getElementById("hintPone17").value = "Hide hints for card 17";
  }
};

function showhintPone17_2() {
  document.getElementById("hintPone17_2").style.display = "block";
  document.getElementById("hintPone17_2Answer").innerHTML = "Look at the map. What does the message in the astronomy book say? Does the form of Cygnus constellation remind you of something?"
};

function showhintPone17_3() {
  document.getElementById("hintPone17_3").style.display = "block";
  document.getElementById("hintPone17_3Answer").innerHTML = "You can find the form of Cygnus constellation on the map by using the instructions in the message."
};

function showhintPone17_4() {
  document.getElementById("hintPone17_4").style.display = "block";
  document.getElementById("hintPone17_4Answer").innerHTML = "The address is C46."
};

function togglePone19() {
  if (document.getElementById("hintPone19_1").style.display == "block") {
    document.getElementById("hintPone19_1").style.display = "none";
    document.getElementById("hintPone19").value = "Card 19";
  }
  else {
    document.getElementById("hintPone19_1").style.display = "block";
    document.getElementById("hintPone19_1Answer").innerHTML = "You can buy a new lens for the telescope with this money."
    document.getElementById("hintPone19").value = "Hide hints for card 19";
  }
};

function togglePone22() {
  if (document.getElementById("hintPone22_1").style.display == "block") {
    document.getElementById("hintPone22_1").style.display = "none";
    document.getElementById("hintPone22").value = "Card 22";
  }
  else {
    document.getElementById("hintPone22_1").style.display = "block";
    document.getElementById("hintPone22_1Answer").innerHTML = "Did you get the password to the computer? Use it."
    document.getElementById("hintPone22").value = "Hide hints for card 22";
  }
};

function togglePone23() {
  if (document.getElementById("hintPone23_1").style.display == "block") {
    document.getElementById("hintPone23_1").style.display = "none";
    document.getElementById("hintPone23").value = "Card 23";
  }
  else {
    document.getElementById("hintPone23_1").style.display = "block";
    document.getElementById("hintPone23_1Answer").innerHTML = "You can ask other characters about Lena. Many of them will have interesting things to say."
    document.getElementById("hintPone23").value = "Hide hints for card 23";
  }
};

function togglePone24() {
  if (document.getElementById("hintPone24_1").style.display == "block") {
    document.getElementById("hintPone24_1").style.display = "none";
    document.getElementById("hintPone24").value = "Card 24";
  }
  else {
    document.getElementById("hintPone24_1").style.display = "block";
    document.getElementById("hintPone24_1Answer").innerHTML = "Did you get the address of the mural? If you still don't have you can't solve this puzzle."
    document.getElementById("hintPone24").value = "Hide hints for card 24";
  }
};

function showhintPone24_2() {
  document.getElementById("hintPone24_2").style.display = "block";
  document.getElementById("hintPone24_2Answer").innerHTML = "Mary left home and described the way she took to the mural. So how can you get her address?"
};

function showhintPone24_3() {
  document.getElementById("hintPone24_3").style.display = "block";
  document.getElementById("hintPone24_3Answer").innerHTML = "Track Mary's movements backwards, from the mural to her apartment, using the Majorton map."
};

function togglePone26() {
  if (document.getElementById("hintPone26_1").style.display == "block") {
    document.getElementById("hintPone26_1").style.display = "none";
    document.getElementById("hintPone26").value = "Card 26";
  }
  else {
    document.getElementById("hintPone26_1").style.display = "block";
    document.getElementById("hintPone26_1Answer").innerHTML = "You could Jocelyn some tea."
    document.getElementById("hintPone26").value = "Hide hints for card 26";
  }
};

function togglePone27() {
  if (document.getElementById("hintPone27_1").style.display == "block") {
    document.getElementById("hintPone27_1").style.display = "none";
    document.getElementById("hintPone27").value = "Card 27";
  }
  else {
    document.getElementById("hintPone27_1").style.display = "block";
    document.getElementById("hintPone27_1Answer").innerHTML = "There is a location where you could use the fly as a little spy."
    document.getElementById("hintPone27").value = "Hide hints for card 27";
  }
};

function showhintPone27_2() {
  document.getElementById("hintPone27_2").style.display = "block";
  document.getElementById("hintPone27_2Answer").innerHTML = "Have you opened location LOC05? There is something there that you would like to get your eyes on, but the fly can do it much more discretely."
};

function showhintPone27_3() {
  document.getElementById("hintPone27_3").style.display = "block";
  document.getElementById("hintPone27_3Answer").innerHTML = "Use the fly on Jocelyn's computer to see her password."
};

function togglePone28() {
  if (document.getElementById("hintPone28_1").style.display == "block") {
    document.getElementById("hintPone28_1").style.display = "none";
    document.getElementById("hintPone28").value = "Card 28";
  }
  else {
    document.getElementById("hintPone28_1").style.display = "block";
    document.getElementById("hintPone28_1Answer").innerHTML = "Examine the gem to get a hint for a new location."
    document.getElementById("hintPone28").value = "Hide hints for card 28";
  }
};

function togglePone33() {
  if (document.getElementById("hintPone33_1").style.display == "block") {
    document.getElementById("hintPone33_1").style.display = "none";
    document.getElementById("hintPone33").value = "Card 33";
  }
  else {
    document.getElementById("hintPone33_1").style.display = "block";
    document.getElementById("hintPone33_1Answer").innerHTML = "Jamie would love to take a look on the tests."
    document.getElementById("hintPone33").value = "Hide hints for card 33";
  }
};

function togglePone38() {
  if (document.getElementById("hintPone38_1").style.display == "block") {
    document.getElementById("hintPone38_1").style.display = "none";
    document.getElementById("hintPone38").value = "Card 38";
  }
  else {
    document.getElementById("hintPone38_1").style.display = "block";
    document.getElementById("hintPone38_1Answer").innerHTML = "Lena obviously talked to this parrot. It could know some important things."
    document.getElementById("hintPone38").value = "Hide hints for card 38";
  }
};

function showhintPone38_2() {
  document.getElementById("hintPone38_2").style.display = "block";
  document.getElementById("hintPone38_2Answer").innerHTML = "Ask the parrot about Emma."
};

function togglePone39() {
  if (document.getElementById("hintPone39_1").style.display == "block") {
    document.getElementById("hintPone39_1").style.display = "none";
    document.getElementById("hintPone39").value = "Card 39";
  }
  else {
    document.getElementById("hintPone39_1").style.display = "block";
    document.getElementById("hintPone39_1Answer").innerHTML = "The paper gives you a hint for opening a new location."
    document.getElementById("hintPone39").value = "Hide hints for card 39";
  }
};

function showhintPone39_2() {
  document.getElementById("hintPone39_2").style.display = "block";
  document.getElementById("hintPone39_2Answer").innerHTML = "Go to the library on the address B40."
};

function showhintPone39_3() {
  document.getElementById("hintPone39_3").style.display = "block";
  document.getElementById("hintPone39_3Answer").innerHTML = "Show this paper to Sandy."
};

function togglePone41() {
  if (document.getElementById("hintPone41_1").style.display == "block") {
    document.getElementById("hintPone41_1").style.display = "none";
    document.getElementById("hintPone41").value = "Card 41";
  }
  else {
    document.getElementById("hintPone41_1").style.display = "block";
    document.getElementById("hintPone41_1Answer").innerHTML = "Use the pumpkin with the cookies mix."
    document.getElementById("hintPone41").value = "Hide hints for card 41";
  }
};
