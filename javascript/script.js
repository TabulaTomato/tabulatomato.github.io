let vh = window.innerHeight * 0.1

document.documentElement.style.setProperty('--vh', `${vh}px`);

function bookKeyPress(e)
{
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('bookButton').click();
        return false;
    }
    return true;
};

function bookFunction() {
	var x = document.getElementById("bookText").value;
  	var answer;
  	if (x == "01") {
  		answer = "I’m Ziggy Wonder, a student in the Majorton University. My mother left town yesterday saying that she needs to find herself over the phone. I find it very hard to believe that she would just do something like this and I intent to get to the bottom of it.";
  } else if (x == "02") {
  		answer = "A house fly wandering around the library.";
  } else if (x == "03") {
  		answer = "Laika is our dog. She is unusualy quiet, probably because she misses my mother.";
  } else if (x == "04") {
  		answer = "The projector I borrowed from the library.";
	} else if (x == "05") {
  		answer = "Cookies mix for Laika's favourite cookies. The recipe on the box says to add some fresh chopped pumpkin in the mix before baking.";
	} else if (x == "06") {
  		answer = "A cryptex with a six letter opening combination. It's still wet from Laika's saliva.<br><i>You can now open the cryptex by entering the card number <b>06</b> followed by the code in the input field separated by a comma, without spaces.</i>";
	} else if (x == "07") {
  		answer = "A poster announcing a lecture on Bavaria by Jocelyn Hill in the library tonight.";
	} else if (x == "08") {
  		answer = "My new ability of connecting with animals and plants around me is hard to define. It’s still unclear why did I get this ability and what exactly can I do with it. Does it only give me a way to sense their feelings, or does it go beyond that to the point of actually effecting them?";
	} else if (x == "09") {
  		answer = "Sandy is my mother’s colleague. They work together for about 10 years and they became friends in the meantime.";
	} else if (x == "10") {
  		answer = "My mother left me clues to find this Emma Korn person. I wonder why.";
	} else if (x == "11") {
  		answer = "Jocelyn Hill is holding the lecture at the library tonight. She is sitting alone, looking at her computer and looks quite nervous.";
	} else if (x == "12") {
  		answer = "It’s a brand new telescope lens.";
	} else if (x == "13") {
  		answer = "There is a parrot flying in Korns’ garden. She must be very loyal to her owners if they let her out in the garden like this.";
	} else if (x == "14") {
  		answer = "Mary Davis is my mother’s old friend whose hidden letter Laika brought to me.";
	} else if (x == "15") {
  		answer = "The cookies I made for Laika.";
	} else if (x == "16") {
  		answer = "The night sky seen with the telescope. It’s breathtaking. My mother left the telescope pointing to the Cygnus constellation.";
	} else if (x == "17") {
  		answer = "A rare astronomy book. There is also a message inside written in my mother's handwriting. It says:<br><b>Look at the night sky.<br>α = a corner of Kids Park.<br>ζ = a corner of the Main Square.<br>Go between ι and κ.</b>";
	} else if (x == "18") {
  		answer = "Professor Martin is my mineralogy professor in the university. He is an expert in his field.";
	} else if (x == "19") {
  		answer = "The money that Jamie gave me. There is around 700 pounds here.";
	} else if (x == "20") {
  		answer = "The library projector is mounted on the ceiling.";
	} else if (x == "21") {
  		answer = "It’s a photo of a mural on a wall. I can’t recognize where the photo was taken.";
	} else if (x == "22") {
  		answer = "Jocelyn’s computer left all alone. It’s password protected.<br><i>You can now enter the password by entering the card number <b>22</b> followed by the password in the input field separated by a comma, without spaces. If you still don't have the password, the following happens:<br>Jocelyn returns from the toilet and I quickly move from the computer. I have to get this password somehow!<br>Return cards <b>34</b> and <b>43</b> from the rejected cards pile. Return card <b>22</b> into the characters/objects deck.</i>";
	} else if (x == "23") {
  		answer = "My mother, who suddenly left town yesterday.";
  } else if (x == "24") {
  		answer = "It's a letter that Laika brought to me. The letter says:<br><b>Dear Lena,<br>I saw this beautiful mural today and it reminded me so much of you. I decided I have to write to you in hope that you come and visit me. I miss you so much.<br>So, I left my apartment and went west, passing all the other buildings in my street. When I reached the end of the street, I turned right and quickly arrived to the square. I crossed the square walking on it's eastern side and got to the bridge. When I crossed the river I turned right. From there, I took the first left. I walked a bit more and took the second street on the right. After some shopping, I turned right on the next junction and there it was, right in front of me. All the memories we share came back to me. I really want to see you, Lena. <br>Love,<br>Mary.</b>";
	} else if (x == "25") {
  		answer = "My mother’s telescope, placed pointing in the sky. Unfortunately, the lens is broken. I can see a sticker on the telescope with a logo of ‘Outer World Telescopes’. There is also a short text under the logo:<br><b>Find us on number nine of the street that always shines!</b>";
	} else if (x == "26") {
  		answer = "A cup of tea I ordered from Mark, the barista.";
	} else if (x == "27") {
  		answer = "The fly is now under my powers. I can move it wherever I want to and feel whatever it feels.";
	} else if (x == "28") {
  		answer = "It’s the gem my mother left on Laika. She said that it’s family heritage. I used to take the gem for granted, but now that I think of it, it’s really different from any other stones I ever saw. It could be good to have my mineralogy professor have a look at it at the university. As I put it on my neck, I start to have a funny feeling of connection with Laika, and even the plants in the house and the garden.<br><i>Take card <b>08</b>.</i>";
	} else if (x == "29") {
  		answer = "These are the mineralogy tests. Professor Martin keeps a good look on them.";
	} else if (x == "30") {
  		answer = "Peter is the salesman in the telescope shop. He seems enthusiastic about his job.";
	} else if (x == "31") {
  		answer = "Jamie Elliott is a fellow student. We take mineralogy class together. He has been struggling all year with the class, and the professor definitely doesn’t favour him. He earned a big scholarship last year from his future employer, but he will lose it if he doesn’t pass the year.";
	} else if (x == "32") {
  		answer = "Mark is a barista in the tea shop. He is at the bar, cleaning cups.";
	} else if (x == "33") {
  		answer = "The mineralogy tests are now unsurveilled.";
	} else if (x == "34") {
  		answer = "An empty cup on Jocelyn Hill’s table. She finished her tea.";
	} else if (x == "35") {
  		answer = "The spray paint that I took from Loomey.";
	} else if (x == "36") {
  		answer = "A pumpkin sprout planted in the Korns’ garden. It should take about three months for a ripe fruit to grow.";
	} else if (x == "37") {
  		answer = "The flag of the university, still not up on the pole. They bring it up every day at the same time, followed by the university hymn on the speakers.";
	} else if (x == "38") {
  		answer = "I can suddenly make the parrot talk about anything I want. All I have to do is ask her.<br><i>You can now treat the parrot as a character and ask it about another character or an object by writing their according numbers in the input field separated by a comma, without spaces. Write the number of the parrot <b>38</b> first, and the character/object you want to speak about second.</i>";
	} else if (x == "39") {
  		answer = "A note with some numbers written in my mother’s handwriting next to a logo of the library she used to work in. It was found hidden behind the broken lens in my mother’s telescope.";
	} else if (x == "40") {
  		answer = "Our dog Laika seems unhappy. She must be missing my mother. I notice something hanging on her collar. It's the gem my mother used to carry on her neckless. Why would she leace it with Laika? <br><i>Take cards <b>03</b> and <b>28</b>. Remove card <b>40</b>.</i>";
	} else if (x == "41") {
  		answer = "A ripe pumpkin fruit.";
	} else if (x == "42") {
  		answer = "Loomey is a street artist currently working on a mural next to the telescope shop.";
	} else if (x == "43") {
  		answer = "The computer of Jocelyn Hill, where she keeps her lecture on Bavaria.";
	} else if (x == "A" || x == "a") {
  		answer = "Our house looks so empty without my mother. Her telescope <b>(25)</b> is placed by the window, pointing at the sky. Our dog, Laika <b>(40)</b> is here, not as cheerful as usual. I can see mix for Laika's favourite cookies <b>(05)</b> on the kitchen counter. There is also a framed photo <b>(21)</b> on the bar that I've never seen before.";
	} else if (x == "B" || x == "b") {
  		answer = "'Outer Space Telescopes' shop is open, and a salesman <b>(30)</b> greets me when I walk in. On the other side of the street there is a street artist <b>(42)</b> working on a mural, with some spray paint <b>(35)</b> sitting next to her on the floor.";
	} else if (x == "C" || x == "c") {
  		answer = "Professor Martin <b>(18)</b> is sitting at his desk in the common working space. He has the tests <b>(29)</b> for tomorrow next to him. A bit further, a fellow student Jamie <b>(31)</b> is studying. I can see the university flag's <b>(37)</b> pole through the window.";
	} else if (x == "D" || x == "d") {
  		answer = "Another World Library is calm, with only a few people browsing the books. There is a poster about a lecture <b>(07)</b> on the library wall. A projector <b>(20)</b> that is used in library events is mounted on the ceiling. The librarian <b>(09)</b> my mother used to work with is not very occupied at the moment. A boring house fly <b>(02)</b> is buzzing around the library.";
	} else if (x == "E" || x == "e") {
  		answer = "The tea shop is almost empty. I can see a woman <b>(11)</b> sitting in front of her computer <b>(43)</b> on one of the tables. Her cup <b>(34)</b> is empty. The barista <b>(32)</b> is cleaning the cups at the bar.";
	} else if (x == "F" || x == "f") {
  		answer = "Korn family farm is small, but cozy. The garden is beautiful and well kept, with plenty of herbs and vegetables. A parrot flying around <b>(13)</b> catches my eye, as well as pumpkin sprouts <b>(36)</b>. Mrs Korn <b>10</b> is standing by the house doors.";
	} else if (x == "G" || x == "g") {
  		answer = "Mary Davis' apartment is cozy and nicely furnished. There's a bunch of books on different subjects, beautiful artwork on the walls and a smell of freshly baked biscuits coming from the kitchen. Mary <b>(14)</b> welcomes me with a smile, very surprised to see me.";
	} else if (x == "01,01") {
  		answer = "I'm very concerned about m mother. It's not that I don't want her to be happy, but to simply dissapear like this is not something I wuold expect of her.";
	} else if (x == "01,02") {
  		answer = "I'm not a big fan of house flies.";
	} else if (x == "01,03") {
  		answer = "Laika is quiet. I think she misses my mother and I'd like to do something to cheer her up.";
	} else if (x == "01,04") {
  		answer = "This could be useful, maybe not to me but to somebody else.";
	} else if (x == "01,05") {
  		answer = "I think that these cookies would definitely cheer up Laika a bit.";
	} else if (x == "01,06") {
  		answer = "Hmmm, a cryptex? My mother loves puzzles and codes, but I have a feeling that this is not just a game she left for me to play. It could be serious.";
	} else if (x == "01,07") {
  		answer = "It could be interesting, but I’m not in a mood for a lecture today.";
	} else if (x == "01,08") {
    		answer = "I don’t know am I going crazy or is this really happening. I actually feel like I can sense the tree in the garden. And I swear that I feel how Laika misses my mother. Maybe my mother leaving made me so confused that I’m starting to imagine things.";
	} else if (x == "01,09") {
  		answer = "Sandy seems more down to earth than my mother ever was, but I know that they are good friends in spite of those differences.";
	} else if (x == "01,10") {
  		answer = "This must be somebody important to my mother, considering all the clues she left for me to find her.";
	} else if (x == "01,11") {
  		answer = "The lecturer seems quite nervous. I sense that she is not the type of person that easily speaks in front of an audience.";
	} else if (x == "01,12") {
  		answer = "Now that I finally have a new lens, I could check out the night sky.";
	} else if (x == "01,13") {
  		answer = "The parrot is flying around, but she's not leaving the garden. Where did the Korns manage to find such a obedient parrot?";
	} else if (x == "01,14") {
  		answer = "My mother never spoke about her. I can’t help but wonder why did my mother want me to find her, and kept her letter in a cryptex? It’s almost as if she wanted to keep her whereabouts secret from someone.";
	} else if (x == "01,15") {
  		answer = "The cookies seem great! This mix never disappointed us.";
	} else if (x == "01,16") {
  		answer = "It’s magical as always...I can easily recognize Cygnus, my mother showed it to me many times.";
	} else if (x == "01,17") {
  		answer = "What a complicated book! Fortunately, I don't think that I have to read all of it. The part in my mother's handwriting is the only thing important, hopefully.";
	} else if (x == "01,18") {
  		answer = "My mineralogy professor is an expert in his field and has some of the most interesting lectures in the university. He lives for his minerals, really. His tests are not easy to pass, though.";
	} else if (x == "01,19") {
  		answer = "Alright! Now I can buy the lens!";
	} else if (x == "01,20") {
  		answer = "This projector could be useful. I wonder if I could borrow it.";
	} else if (x == "01,21") {
  		answer = "I never noticed this photo before. How come that my mother put it out before leaving? And where was the photo taken? That’s a really nice piece of street art, but I’m not an expert on the subject.";
	} else if (x == "01,22") {
  		answer = "With Jocelyn out of the picture, all I have to do is enter her password to get inside the computer and delete the lecture.";
	} else if (x == "01,23") {
  		answer = "My mother is in a way also my best friend. She has this magic power to make you feel better just by looking at you. But I always felt as if she was keeping secrets from me.";
	} else if (x == "01,24") {
  		answer = "So the photo must have come with the letter. Maybe I could figure out Mary’s address from her story.";
	} else if (x == "01,25") {
  		answer = "Oh no! I was excited to look at the sky tonight. It's a little ritual my mother and I often do together.";
	} else if (x == "01,26") {
  		answer = "Who could I offer this cup of tea to?";
	} else if (x == "01,27") {
  		answer = "I've become the master of this poor little fly. I can make it go wherever I wish to.";
	} else if (x == "01,28") {
  		answer = "This gem is the family heritage. My mother never let me touch it before, saying that she's afraid I'd damage it somehow. Now I see that she was hiding this weird power that the gem has from me. What's that all about?";
	} else if (x == "01,29") {
  		answer = "The professor keeps his tests on the desk. If I could get him to move for a bit, I could get a better glance at them.";
	} else if (x == "01,30") {
  		answer = "He seems to be very passionate about his job.";
	} else if (x == "01,31") {
  		answer = "Poor Jamie! There is a big chance he will fail this year of university.";
	} else if (x == "01,32") {
  		answer = "If I wasn’t in the middle of an investigation, I would have loved to have a coffee and a chat with this guy. He seems nice.";
	} else if (x == "01,33") {
  		answer = "Ok, I have a moment to look at the tests before professor Martin comes back.";
	} else if (x == "01,34") {
  		answer = "Jocelyn’s tea cup is empty. Maybe she would like another one?";
	} else if (x == "01,35") {
  		answer = "Where could I leave my little mark?";
	} else if (x == "01,36") {
  		answer = "I can’t wait till autumn to get some pumpkin! If only I could somehow make it grow faster.";
	} else if (x == "01,37") {
  		answer = "This flag goes up at the same time every day, followed by the university song on the speakers. A very boring tradition, if you ask me.";
	} else if (x == "01,38") {
  		answer = "It seems that somebody taught the parrot what to say about things. I don't think that it could figure out all of this by its own.";
	} else if (x == "01,39") {
  		answer = "I don’t know what this number could mean, but maybe somebody at the library could have an idea about it.";
	} else if (x == "01,41") {
  		answer = "Now that’s a full grown pumpkin ready to be picked!";
	} else if (x == "01,42") {
  		answer = "She knows a lot about street art. Maybe she could know something about the mural on the photo.";
	} else if (x == "01,43") {
  		answer = "If I could get Jocelyn to leave the table I could get into her computer.";
	} else if (x == "09,01") {
  		answer = "Hello my dear. It’s really nice to see you! Could you tell me why Lena didn't shop up for work today? She left? Just like that? That's crazy! I mean, she is a bit free spirited, if you know what I mean, but she was always responsible. I can't believe that she would leave without saying anything to me. She didn't give notice either.";
	} else if (x == "09,02" || x == "09,27") {
  		answer = "I know, these flies are so irritating! But I can't waste my time on cathing them.";
	} else if (x == "09,03" || x == "09,40") {
  		answer = "I’m sure that poor Laika is devastated. She is so attached to your mother.";
	} else if (x == "09,04") {
  		answer = "Take it, just return it tomorrow.";
	} else if (x == "09,05" || x == "09,15") {
			answer = "Thank you dear, but I don't have a dog.";
	} else if (x == "09,06") {
			answer = "I've never seen one of these before. How interesting!";
	} else if (x == "09,07") {
  		answer = "Yes, Jocelyn Hill will be giving a lecture here tonight. She came a few hours ago and she is very nervous about it. She went to calm down in the tea shop next door.";
	} else if (x == "09,08") {
  			answer = "We can all have these feelings of deep connection with nature sometimes.";
	} else if (x == "09,09") {
  		answer = "I’ve worked here for 15 years. And I must say that things started to be more interesting when your mother joined us. She organized all kinds of events, concerts, poetry readings, workshops...I never noticed that she was unhappy here. Actually now that I think about it, lately she did seem a bit under the weather, as if something was worrying her.";
	} else if (x == "09,10") {
  		answer = "I’m sorry but I’ve never met this woman.";
	} else if (x == "09,11" || x == "09,38") {
  		answer = "I’ve never seen somebody so stressed about speaking in front of people. It’s not like she’ll be speaking in a stadium, I’d be surprised if we had more than 50 people in the audience.";
	} else if (x == "09,12") {
  		answer = "I’m sorry but I can’t help you with this. I don’t know anything about skygazing.";
	} else if (x == "09,13") {
			answer = "Parrots can be good pets. But I'm just not a pet person.";
	} else if (x == "09,14") {
  		answer = "I can’t recall your mother mentioning somebody named Mary. But she did speak a few times about a long lost friend. They had a different opinion about a very important thing, that’s what she said. Maybe it was this Mary she was talking about.";
	} else if (x == "09,16") {
			answer = "That’s really beautiful. I’m sure you’re better with these things than I am, though. The only constellation I can recognize in the sky is the Great Bear.";
	} else if (x == "09,17") {
  		answer = "That's a rare book. Frankly, I’m shocked that someone wrote ophysicsn the pages. People don't have any respect for books these days.";
	} else if (x == "09,18") {
			answer = "I’ve seen professor Martin quite a few times in the library. A very charming and interesting man. He got close with your mother not long before she got sick. They used take a tea together in the tea shop next door during her break.";
	} else if (x == "09,19") {
			answer = "Where did you get all this money? Use it wisely my dear.";
	} else if (x == "09,20") {
			answer = "You would like to borrow the projector? Of course I would love to help you, but unfortunatelly there is a lecture here tonight and we will be using it. I could probably let you have it tomorrow if that’s alright.";
	} else if (x == "09,21") {
  		answer = "I can’t help you with identifying the mural. Unfortunately we don't have a good book on street art.";
	} else if (x == "09,22") {
  		answer = "Keep an eye on it, Jocelyn would go crazy if something happened to her lecture.";
	} else if (x == "09,23") {
  		answer = "Lena left town? That's incredible! I can't believe that she wouldn't say anything to me after all these years of friendship. No, I didn't notice anything very unusual about her lately. She did seem a bit distant though. Sometimes I saw that she isn't listening to what I'm saying and that her mind is somewhere else. And another thing, she became friends with professor Martin from the university not long ago. I even thought that she finally found a man that's worth her attention. Maybe she told him something about her intentions.";
	} else if (x == "09,24") {
			answer = "What a curious letter. I would like to help you find her address, but it’s a bit hard without knowing where to start from.";
	} else if (x == "09,25") {
  		answer = "Yes, I know that Lena is a passionate amateur astronomer. The lens is broken? I wish I could help you with that, but my paycheck is not until the beginning of next month and I’m kind of broke at the moment.";
	} else if (x == "09,26") {
  		answer = "Thank you dear, I already had my tea.";
	} else if (x == "09,28") {
  		answer = "I know this gem! Lena always wears it. Sometimes she would joke that it gives her magic powers. It’s stunning, isn’t it?";
	} else if (x == "09,29" || x == "09,33") {
  		answer = "I don’t understand why are you asking me about this. Would you like some literature on mineralogy?";
	} else if (x == "09,30") {
			answer = "I’ve never met him, but I’m aware of your mother’s fascination with space.";
	} else if (x == "09,31") {
			answer = "I’m afraid I don’t know this young man.";
	} else if (x == "09,32") {
			answer = "It’s that nice barista from the tea shop. He always welcomes me with a smile.";
	} else if (x == "09,33") {
			answer = "I’m completely lost with technology. Lena was dealing with all the computers in the library, I’m very old fashioned I’m afraid.";
	} else if (x == "09,34") {
			answer = "Jocelyn drinks tea all afternoon. She says it’s good for relaxing.";
	} else if (x == "09,35") {
			answer = "I’m not a big fan of street art, if I’m being honest.";
	} else if (x == "09,36") {
			answer = "I’m aware that it’s a bit early for pumpkin. You’ll have to wait till autumn I’m afraid.";
	} else if (x == "09,37") {
			answer = "I heard that the University is quite good. Education is very important, Ziggy.";
	} else if (x == "09,38") {
			answer = "A talking parrot? Quite amusing, I guess.";
	} else if (x == "09,39") {
			answer = "Let me see this...This is a code for a book from our library. Let me just check in our database...It’s in the basement, where we keep only rare editions. Let me get it for you. <br><i>Take card <b>17</b>. Remove card <b>39</b>.</i>";
	} else if (x == "09,41") {
			answer = "What a beautiful pumpkin! Where did you get it, it’s not pumpkin season yet?";
	} else if (x == "09,42") {
			answer = "I’m not familiar with Loomey’s work. I’m a book person, I find visual arts a bit hard to understand.";
	} else if (x == "09,43") {
			answer = "Jocelyn has the lecture on the computer. I think she spent all afternoon reading and memorising it.";
	} else if (x == "10,01") {
			answer = "What a pleasure to finally meet you, Ziggy. Lena told me so much about you. She is very proud of you!";
	} else if (x == "10,02" || x == "10,27") {
			answer = "Look, a fly is completely harmless. They are boring, sure, but they are also a useful part of the ecosystem.";
	} else if (x == "10,03" || x == "10,40") {
			answer = "Lena brings Laika with her sometimes. She’s a great dog. She isn't particularly fond of our parrot though!";
	} else if (x == "10,04") {
			answer = "It’s a good projector. We don’t watch a lot of films here, we usualy play board games.";
	} else if (x == "10,05") {
				answer = "I could give you some pumpkin, but it's not the season yet.";
	} else if (x == "10,06") {
			answer = "Lena left it for you? I'm sorry, but she didn't tell me the code to open it.";
	} else if (x == "10,07") {
			answer = "There’s a lecture in the library tonight?";
	} else if (x == "10,08") {
			answer = "I know what you mean. I feel like this since I moved to the countryside.";
	} else if (x == "10,09") {
			answer = "I’ve never met Lena’s colleague.";
	} else if (x == "10,10") {
			answer = "I have lived here with my husband and our kids for the past five years. It takes a lot of time and work to grow a garden but I wouldn't change a thing. I love having fresh produce, I love all the peace, I love the fresh air.";
	} else if (x == "10,11") {
			answer = "I’ve never heard of her. You say that she is giving a lecture in the library tonight?";
	} else if (x == "10,12") {
			answer = "This must have been expensive. So don’t let me near it, I can be very clumsy!";
	} else if (x == "10,13") {
			answer = "We let our parrot Jimmy strech his wings in the garden. He never escaped. He likes it here. Lena likes him to, she always talked to him as if he understood what she was saying.";
	} else if (x == "10,14") {
			answer = "Actually, Lena did mention a friend named Mary. They used to be very close but they grew apart because of a different point of view on something. She got very emotional when she was telling me this. She said that nobody could ever understand her like Mary did.";
	} else if (x == "10,15") {
			answer = "Thanks, but we don't have dogs. I'm sure that Laika can eat them all by herself.";
	} else if (x == "10,16") {
			answer = "Wow, how beautiful. I would like to know more about stars.";
	} else if (x == "10,17") {
			answer = "This literature is way to hard for me to understand. I know that Lena is an astronomy fan, however.";
	} else if (x == "10,18") {
			answer = "I've never met proffesor Martin, but I know that Lena is seeing him for maybe a month now. She spoke of him with great enthusiasm. I think she didn't tell you about it because she didn't want to put you in a weird position, with him being your professor. Anyway, probably it didn't really work out if she left town. I guess that she needed more of life than what this town could give her.";
	} else if (x == "10,19") {
			answer = "Thanks Ziggy, but I won’t take your money. Keep it, I’m sure it will be useful.";
	} else if (x == "10,20") {
			answer = "You want to borrow the projector, but there is a lecture tonight? I don’t know what to say, to bad that the lecture is not happening some other day.";
	} else if (x == "10,21") {
			answer = "Oh, I really like the mural in the photo, but I have no idea who could the artist be. Or where the photo could have been taken.";
	} else if (x == "10,22") {
			answer = "Girl, it’s really not a good idea to break into someone’s computer.";
	} else if (x == "10,23") {
			answer = "Lena is gone? She was acting strange for some time now, so I kind of anticipated that it was leading to something. Lena is my dear friend. We grew close a few years ago, as she joined our environmentalist group the Earthlings. We do research on the big polluters in the country, write propositions of stricter laws for protecting the environment, promote zero waste living, that sort of thing. About 2 months ago, Lena started to do research on something she didn't want to speak about. She said that the information she discovered could be dangerous. But when I asked her about it about ten days ago, she said that she was mistaken. That all her research turned out to be irrelevant. It did seem a bit strange to me. If it's so irrelevant, why wouldn't she say more. The last time I saw her was three days ago. She seemed concerned about something. She made me promise her that I would pass you a message if you ever come here. And she made me memorize it by heart, as if she didn't want any written trace of it. OK, here goes:<br><b>This heavenly Earth carries our dreams.<br>Even idealists sometimes keep escaping.<br>People let envy ruin their hearts.<br>Enemies you awaken raise endless chaos.<br>Only masters identify noises growing frightfully.<br>Insightful nature demands mature allies.<br>Rebuild yourself!</b><br>I'm aware that the message seems meaningless. Sorry Ziggy, that's all she said.";
	} else if (x == "10,24") {
			answer = "Hm, this letter sounds almost like a puzzle. You could probably figure out where she lives if you follow her path. And if you knew where to start, of course. And yes, Lena did mention a friend named Mary. They used to be very close but they grew apart because of a different point of view on something.";
	} else if (x == "10,25") {
			answer = "Sorry, I really can’t help you with this. We’re still paying off the house, so we’re saving every cent.";
	} else if (x == "10,26") {
			answer = "Thanks, but you really didn’t have to bother to carry this cup of tea all this way. I have plenty of herbal tea right here.";
	} else if (x == "10,28") {
			answer = "It’s so beautiful, isn’t it? Lena used to wear it. I asked her once how can she wear something so expensive every day, but she said it's just a cheap imitation. Doesn't look cheap to me, that's for sure.";
	} else if (x == "10,29") {
			answer = "I don’t know how could I help you with mineralogy tests.";
	} else if (x == "10,30") {
			answer = "I don’t think we’ll be getting a telescope anytime soon, but if we do, it’s good to know who to ask.";
	} else if (x == "10,31") {
			answer = "I dont now this guy, sorry.";
	} else if (x == "10,32") {
			answer = "I’ve never been in that tea shop, so I’ve never seen the man.";
	} else if (x == "10,33") {
			answer = "Cheating on your test is not something you should be proud about.";
	} else if (x == "10,34") {
			answer = "I have enough cups already. Besides, I’m not very keen on stealing from tea shops.";
	} else if (x == "10,35") {
			answer = "I don’t need it for the moment, but if I decide to do some art on my house I’ll let you know.";
	} else if (x == "10,36") {
			answer = "Yes, we grow pumpkins. It will take about 3 months for a ripe fruit to develop.";
	} else if (x == "10,37") {
			answer = "So, how are things going at the University?";
	} else if (x == "10,38") {
			answer = "Jimmy is talking? How is that possible? He never said a word before!";
	} else if (x == "10,41") {
			answer = "What? How did this happen? I swear that I don’t use any chemicals. Even if I did, this would be crazy! Sure, you can take this magic pumpkin, I’d be scared to eat it anyway.";
	} else if (x == "10,42") {
			answer = "I’ve seen her work, it’s nice, right? She knows Majorton's graffiti scene inside and out, I believe.";
	} else if (x == "10,43") {
			answer = "I don’t know much about computers.";
	} else if (x == "11,01") {
			answer = "Hello, nice to meet you. You're Lena's daughter? Sure, I've met her. It was Lena who invited me to do a lecture in the library.";
	} else if (x == "11,02" || x == "11,27") {
			answer = "Get that away from me!";
	} else if (x == "11,03" || x == "11,40") {
			answer = "What a cute dog!";
	} else if (x == "11,05") {
			answer = "I don't know what I'm supposed to do with this.";
	} else if (x == "11,06") {
			answer = "I'm a fan of puzzles like this, but I really don't have time to figure it out now. I'm working on my lecture.";
	} else if (x == "11,07") {
			answer = "Yes, I’m giving the lecture. Does it show that I’m freaking out about it? I get all stressed out when I’m supposed to talk in front of people. My mind becomes empty and I lose my words...It’s a nightmare!";
	} else if (x == "11,08") {
			answer = "Are you talking about a form of biophilia? I find the theory very interesting.";
	} else if (x == "11,09") {
			answer = "She tried to calm me down, but it’s useless. I can’t wait to get it over with.";
	} else if (x == "11,10") {
			answer = "I don’t know this woman.";
	} else if (x == "11,11") {
			answer = "I’m a passionate traveler, and a historian by education. I wrote a couple of books, combining historic facts to the experiences I had during my journeys. I love writing, the problem arrives when I’m supposed to speak in front on people.";
	} else if (x == "11,12") {
			answer = "That’s a telescope lens? I don’t know a lot about stargazing.";
	} else if (x == "11,13") {
			answer = "I love bird watching, but domesticated parrots are not really as interesting as the ones that you find in the nature.";
	} else if (x == "11,14") {
			answer = "I’m sorry, but I’ve never met her.";
	} else if (x == "11,15") {
			answer = "Why are you offering me dog cookies? Are you trying to make me sick?";
	} else if (x == "11,16") {
			answer = "It’s amazing, the universe I mean. Isn’t it?";
	} else if (x == "11,17") {
			answer = "This seems interesting, for someone who is into stars at least. But I really don’t have time for it now.";
	} else if (x == "11,18") {
			answer = "I wasn’t a student of professor Martin, I studied history in the university. But I hear that he is completely obsessed with minerals.";
	} else if (x == "11,19") {
			answer = "Money will not help me in this situation, but thank you for trying.";
	} else if (x == "11,20") {
			answer = "I will be using the projector tonight. I’m sorry, but borrowing it is out of the question. My lecture would be terrible without images.";
	} else if (x == "11,21") {
			answer = "I’m not familiar with the mural in the photo.";
	} else if (x == "11,23") {
			answer = "Lena organised for me to do the lecture in the library. We fixed the date about three months ago. She seemed fine at first, very responsible and competent, but this last two weeks I prefered to communicate with Sandy. Lena was confused and unfocused whenever I called her, and I find it unprofessional. She left without saying anything? There you go, completely unprofessional.";
	} else if (x == "11,24") {
			answer = "The letter sounds a bit like a puzzle. You have you find the location of the mural to solve it, obviously. I love puzzles, don't you?";
	} else if (x == "11,25") {
			answer = "I’m sorry, but I have no experience in telescopes.";
	} else if (x == "11,26") {
			answer = "Thank you so much, that’s really nice of you. Sluuuurp! <br><i>Jocelyn excuses herself and runs to the toilet. I have a few minutes of alone time with her computer before she comes back.<br><i>Take card <b>22</b>. Remove cards <b>26</b> and <b>43</b>.</i>";
	} else if (x == "11,28") {
			answer = "That’s absolutely stunning! I’ve never seen anything like it. Where did you get it from?";
	} else if (x == "11,29") {
			answer = "I’m not an expert in mineralogy, but I do know a little. Unfortunately I really don’t have time for it right now.";
	} else if (x == "11,30") {
			answer = "I’ve never seen him. Where is this shop?";
	} else if (x == "11,31") {
			answer = "I’ve never seen him.";
	} else if (x == "11,32") {
			answer = "He’s nice. He had the patience to listen to my fears about tonight. He was very supportive.";
	} else if (x == "11,33") {
			answer = "I’ve never cheated on tests. And I’m absolutely against it.";
	} else if (x == "11,34") {
			answer = "I would love another cup of tea, thank you so much. Could you get it for me?";
	} else if (x == "11,35") {
			answer = "I know you mean well, but I can't speak about spray paint now. I'm freaking out about my lecture, can't you see?";
	} else if (x == "11,36") {
			answer = "I know it's not pumpkin season yet. What do you expect me to do about it?";
	} else if (x == "11,37") {
			answer = "I went to the University. It was a beautiful time of my life.";
	} else if (x == "11,39") {
			answer = "This is a logo of the library I’m giving the lecture at this evening. And this number...I don’t know what it could be.";
	} else if (x == "11,42") {
			answer = "I’ve seen a mural that she did in Munich. She is pretty good, isn’t she?";
	} else if (x == "11,43") {
			answer = "I have my lecture on it. So at the moment, it’s my most precious possession.";
	} else if (x == "14,01" || x == "14,14" || x == "14,23") {
			answer = "I can’t believe I’m speaking to you, Ziggy. The last time I saw you, you were a small child, and now you’re all grown up. How did you even find me, Lena and I aren't in contact for years...What? She left? And you can't reach her anymore? That's something that I find very hard to understand. You're the single most precious thing on this world for her. Ziggy, if she left you clues to find me, then she is probably in some kind of trouble. Otherwise, she would never have let me talk to you. And there is a lot for me to tell you. You should probably sit down to hear this.<br><i>Mary shows you to the couch and offers you some biscuits and coffee.</i><br>So, you probably realised that your mother had some secrets. And she didn't want you to know any of them, but I think that something made her change her mind. Maybe she let clues for you in case that something happens to her. And if somebody hurt her, it's possible that all of us are in danger.<br><i>Mary takes a sip of her coffee and looks me straight into the eyes.</i><br>I see that she gave you the gem. You must have noticed that it gives you some...powers. And these powers will grow. That's because the gem connects you with your true nature. And your nature...our nature is not from this world. Ziggy, we are not human.<br><i>I actually start to freak out a bit and wonder if this Mary person is in her right mind. But why would my mother send me to her if she isn't? Meanwhile, Mary continues with her story.</i><br>We come from a planet that humans call Kepler-22b, orbiting a star in Cygnus constellation. We call it Nahukat.<br><i>'Nahukat' is just the closest that I can do to repeat what Mary just pronounced. It really does sound like a completely different language...Or more like another way to produce sound.</i><br>Our species was forced to leave our planet about 300 years ago, saving the small number of us that survived from extinction - exactly 24.398 to be precise. Our planet was colonised by a parasite civilisation, one we call the Lakis. They established their power over Nahukat and then slightly drained its resources.<br><i>Mary stops for a second to put herself together. It's obviously not easy for her to talk about all of this.</i><br>Your mother and I were born and raised on the ship, educated to be astronauts and trained for missions in search of a habitable planet. Two of us left the mothership 28 years ago in a crew of five. Needless to say that the five of us became best friends. Not only that, but Lena fell in love with one of our crew members: your father.<br><i>My father! I always knew that the story about a sperm donor was suspicious.</i><br>Our mission was actually incredibly successful! In just a few years we came across Voyager, one of Earth's spacecrafts, where we found a Golden Record. It was describing a planet with everything we were looking for, and even had something like a map so we could locate the planet. We were absolutely ecstatic about the discovery! But when we tried to communicate with the mothership, we found out that our communication system was corrupted. While we were berthing to Voyager, a part of the spacecraft hit our ship and disabled our antenna. One of us had to go out and fix it. You're guessing right, it was Peku, your father.<br><i>Mary's eyes fill with tears.</i><br> When he got out, he saw that the antenna is completely destroyed, and not only this - one of our modules suffered a lot of damage. He had to react fast, otherwise we would all die. He entered into the module to undock it from the rest of the ship. That's when something went terribly wrong. One of the oxygen tanks in the module was hit during the accident and as Peku disconnected the module it exploded. So Peku sacrificed his life to save us. To save you, too.<br><i>Mary stops for a moment and I see the pain in her eyes.</i><br> We didn't have a way to contact our mothership. All we had were instructions how to get to Earth and hope of fixing our communication system once we get there. And so we went on this last search for the planet we were hoping of inhabiting. The four of us with you in your mother's belly landed on Earth 20 years ago. You were born here, a few months later. And despite all of our efforts, we still didn't manage to construct an antenna strong enough to contact our nation. The technology here is just not yet developed enough.<br><i>Mary takes a deep breath.</i><br> The first two years of our life on Earth, Lena was focused on our goal as much as the rest of us, while trying to create a normal life for both of you in the same time. But she was taking extreme care not to speak about our origin or our task when you were around. She wanted you to have a happy, human childhood, keeping the truth a secret. I didn't agree with this. I thought that you have to know who you are. And as you grew, we fought about it more and more. Finally, when you were four years old, and with our research in fixing our communication system having no progress whatsoever, she decided to cut off our friendship completely. She was afraid that I will tell you something. I tried to contact her a few times during the years by sending her letters. I never got a response. Until now, that is.<br><i>Mary takes my hand.</i><br> Ziggy, it's time to start living your true life. I will introduce you to the rest of the crew and teach you everything you have to know about us. And as I already said, your mother certainly didn't leave you alone intentionally. We have to find out what happened to her. She sent you to me with a reason, there is surely something dangerous going on. But don't be scared, you're not alone in this!<br><i>Chapter One of the game is now finished. To unravel the mystery of Lena's disappearence and continue Ziggy's adventure, start Chapter Two. Thank you for playing!</i>";
	} else if (x == "14,08") {
			answer = "Yes, I know exactly what you’re talking about. And it’s just the beginning. The gem you’ve been wearing is connecting you with your true nature, one with many talents you've yet to discover. Take very good care of it.";
	} else if (x == "14,09") {
			answer = "I haven’t heard from your mother in a very long time. I didn’t even know she was working in a library.";
	} else if (x == "14,10") {
			answer = "I’ve never heard of her. Lena and I weren’t in contact for years. But I’m not surprised she was in a enviornmentalist group.";
	} else if (x == "14,18") {
			answer = "Lena was seeing someone? A professor from the university? I'm glad that she was able to finally move forward after the loss of your father. She told you that your father was just a sperm donor? Well Ziggy, that's not true.";
	} else if (x == "14,28") {
			answer = "Right, the gem. Well, if you’re wearing it now, you probably realise some changes in you. Are you feeling more connected to living creatures? Even being capable of influencing them in one way or another? That’s the effect of the gem. And some other effects will arrive with time, too. The gem is connecting you with your true nature, so to speak.";
	} else if (x == "14,32") {
			answer = "I don't know him, but if he was friends with Lena I'm sure he's a good guy.";
	} else if (x == "18,01") {
			answer = "Hi, Miss Wonder. Do you have some questions about the test tomorrow? I hope you're prepared.";
	} else if (x == "18,02" || x == "18,13" || x == "18,27" || x == "18,36" || x == "18,38" || x == "18,41") {
			answer = "Maybe you would prefer to speak about this to the biology professor?";
	} else if (x == "18,03" || x == "18,40") {
			answer = "What a nice dog!";
	} else if (x == "18,04" || x == "18,22" || x == "18,43") {
			answer = "You can ask somebody from the tech department about this. I’m sure that they would be helpful.";
	} else if (x == "18,05") {
			answer = "I can hardly help you with this.";
	} else if (x == "18,06") {
			answer = "A cryptex? Hmmm, I'd love to help you but I don't know how.";
	} else if (x == "18,07") {
			answer = "I can’t go to a lecture tonight. There is a great documentary on rock formation on the TV I was planing to see.";
	} else if (x == "18,08") {
			answer = "Well, sometimes I feel connected to the minerals. So I won’t judge you.";
	} else if (x == "18,09") {
			answer = "Yes, I know her. I’ve been to the library many times.";
	} else if (x == "18,10" || x == "18,11" || x == "18,14") {
			answer = "Was she one of my students?";
	} else if (x == "18,12" || x == "18,17" || x == "18,25") {
			answer = "It’s not really something I could help you with. You could ask the astronomy department, but I think that they are on a field trip today.";
	} else if (x == "18,15") {
			answer = "Thank you, but I don't have a dog. I like to live alone.";
	} else if (x == "18,16") {
			answer = "Ah! The universe. So many mysteries yet to unravel.";
	} else if (x == "18,18") {
			answer = "I’m here for all your questions on mineralogy. I like it when students are interested in the subject. And if you need somebody to talk to about your loss, feel free to call me anytime.";
	} else if (x == "18,19") {
			answer = "You’re not thinking of bribing me I hope? Ziggy, I'm sure you can pass the test without this.";
	} else if (x == "18,20") {
			answer = "Yes, I know that the library has a projector. I was on a couple of lectures there myself.";
	} else if (x == "18,21") {
			answer = "Oh, you caught me in a field I konw absolutely nothing about. Sorry.";
	} else if (x == "18,23") {
			answer = "Of course I know your mother, I was very often in the library. In fact, we became friends recently. What, she left town? Well, she never told me about planning to do this. <br><i>Professor Martin really seems to be surprised and somewhat worried to hear this.</i><br>We had great conversations, she is a very intelligent and educated woman. We used to grab a cup of tea together during her break in the tea shop next door to her library. It must be a bit weird for you to hear that your professor was socialising with your mother, but I assure you that we would tell you about it if it developed into something more serious. I guess that it won't be happening now. Did she sound OK over the phone? I mean, I'm sure she's fine, but it does seem unusual that she would leave you like this.";
	} else if (x == "18,24") {
			answer = "Hmm, it looks like instructions to find the address of the sender, if you know where to start.";
	} else if (x == "18,26") {
			answer = "No, thank you.";
	} else if (x == "18,28") {
			answer = "Oh, you brought your mother's gem for me to see. Yes, od course I remember it from your mother, it's hard not to notice such a piece. Let me see it...<br><i>Professor Martin's eyes widen with excitement when I pass him the gem.</i><br> The crystal structure is somewhat unusual, as I'm sure a good student like yourself can see. On a first glance I would say that it’s a grandidierite imitation, but I can't be sure unless I study it's chemical composition. Would you be kind enough to give it to me for some time? I would take extreme care of it, of course. I know that although it's probably worthless it must mean a great deal to you.<br><i>The professor seems a bit too eager on keeping the gem. Anyway, I don't intend to lose my newly acquired power that the gem holds, so I say that I can't leave it with him. He doesn't seem very happy about it.</i><br>I'm afraid I can't help you then. I'm a bit surprised that a future scientist like you doesn't want to proceed with the research. But as I said, it's probably just an imitation.";
	} else if (x == "18,29") {
			answer = "I'm sure that you're prepared for the test. You're one of my best students.";
	} else if (x == "18,30") {
			answer = "Was he one of my students?";
	} else if (x == "18,31") {
			answer = "Oh, Jamie. He’s the worst student I have. He’s not so bad on the field, but the minute he gets to the lab, he’s lost. He’s not doing any better in theory either. If he doesn’t pass the test tomorrow, he’s failing the class.";
	} else if (x == "18,32") {
			answer = "I've seen him in the tea shop next to the library. They serve a decent cup of tea there.";
	} else if (x == "18,34") {
			answer = "That's a beautiful cup, but we are not allowed to receive gifts from students.";
	} else if (x == "18,35") {
			answer = "I don’t care much for street art, but that’s just me.";
	} else if (x == "18,37") {
			answer = "The pride of our university. Of course I think it’s important. Young people don’t understand the significance of tradition. I still remember when it was switched with a sports team flag by a couple of students a few years ago. We were all in shock when the flag came up. I was unable to continue with my lecture untill I was sure that they resolved the situation. It was a pain in the eye to see this disgrace on the flag pole. Outraiges!";
	} else if (x == "18,39") {
			answer = "That’s the library logo. I can’t say that the number that’s written under it means something to me.";
	} else if (x == "18,42") {
			answer = "No, I don’t know any street artists.";
	} else if (x == "30,01") {
			answer = "Hello, how can I help you?";
	} else if (x == "30,02" || x == "30,03" || x == "30,05" || x == "30,15" || x == "30,27" || x == "30,40") {
			answer = "We don’t have any pet food, we are specialised in astronomy equipment.";
	} else if (x == "30,04" || x == "30,20") {
			answer = "We don’t have any video equipment, we are specialised in telescopes.";
	} else if (x == "30,06") {
			answer = "A beautiful piece. Unfortunately, I don't know how could I help with opening it.";
	} else if (x == "30,07") {
			answer = "I’m going to a stargazing event tonight, so I can’t come to the lecture. It will be a cloudless night and we plan to focus on Cygnus.";
	} else if (x == "30,08") {
			answer = "I don’t know what to say about this. Are you maybe interested in some of our products?";
	} else if (x == "30,09" || x == "30,10" || x == "30,11") {
			answer = "I’m sorry, but I don’t know her.";
	} else if (x == "30,17") {
			answer = "This is a rare edition if I'm not mistaken. But i'm affraid I can't help you with the meaning of the handwritten part.";
	} else if (x == "30,18" || x == "30,31") {
			answer = "I’m sorry, I don’t know him.";
	} else if (x == "30,19") {
			answer = "So you decided to purchase the objective lens? Excellent. That will be 700 pounds. Thank you, and enjoy the stars tonight! <br><i>As I leave the shop, Peter puts the ‘closed’ sign on the door.<br><i>Take card <b>12</b>. Remove cards <b>19</b> and <b>30</b>.</i>";
	} else if (x == "30,21") {
			answer = "I’m sorry, but I really can’t help you with this. You could ask the street artist across the street, maybe she knows something about it.";
	} else if (x == "30,22" || x == "30,43") {
			answer = "We don’t have any computer equipment, we are specialised in telescopes.";
	} else if (x == "30,23") {
			answer = "She does seem familiar, I guess she’s been to the shop once or twice.";
	} else if (x == "30,25") {
			answer = "Let me see...Yes, the objective lens is definitely broken. I’m sorry, but I would recommend buying a new one, I don’t think you could repair it. Let me take it off to take a closer look...Oh, there is a paper behind it, here! Why would somebody put a paper behind the lens? Anyway, as I said, the lens is beyond repair. A new lens this diameter would be 700 pounds. Would you like to purchase one? <br><i>My mother puts a monthly allowance on my account and I earn some money giving math lessons to kids. But 700 pounds? I don't have that kind of money. <br>Take card <b>39</b>.</i>";
	} else if (x == "30,26") {
			answer = "We don’t have any beverages, we are specialised in astronomy equipment.";
	} else if (x == "30,28") {
			answer = "What is it? It’s astonishing!";
	} else if (x == "30,29" || x == "30,33") {
			answer = "We have a book on meteorites, but I don’t think it will be sufficient for passing a mineralogy test.";
	} else if (x == "30,30") {
			answer = "I’m standing at your service, how can I help you?";
	} else if (x == "30,32") {
			answer = "I remember him, he came one time to the shop with his sister. She is part of our stargazing community, a very clever girl.";
	} else if (x == "30,34") {
			answer = "We don’t have any tableware, we are specialised in astronomy equipment.";
	} else if (x == "30,35") {
			answer = "We don’t hold any art supplies, we are specialised in astronomy equipment.";
	} else if (x == "30,37") {
			answer = "I heard that the university has an excellent astrophysics program.";
	} else if (x == "30,39") {
			answer = "I just found the paper, I don’t know what it means.";
	} else if (x == "30,42") {
			answer = "She is making a mural across the street, I passed by a few times. It will be mice to pass next to a piece of art every day on my way to work.";
	} else if (x == "31,01") {
			answer = "Hi, Ziggy! I would give anything to have your head right now. I will flunk the test tomorrow.";
	} else if (x == "31,02" || x == "31,27") {
			answer = "Collecting flies, are you?";
	} else if (x == "31,03" || x == "31,40") {
			answer = "She's a real cutie, what's her name?";
	} else if (x == "31,04") {
			answer = "That’s a good projector.";
	} else if (x == "31,05") {
			answer = "I can't help you with your cookie problem. I don't have any fresh pumpkin on me.";
	} else if (x == "31,06") {
			answer = "I'm not great in code breaking.";
	} else if (x == "31,07") {
			answer = "Unless the lecture will magically teach me everything about mineralogy for the test tomorrow, I’m not interested in coming.";
	} else if (x == "31,08") {
			answer = "What? Are you trying to tell me you've got some kind of superpowers all of a sudden?";
	} else if (x == "31,09") {
			answer = "I know her from the library. She’s a nice lady, I guess.";
	} else if (x == "31,10") {
			answer = "I don’t know her, sorry.";
	} else if (x == "31,11") {
			answer = "That’s the woman giving the lecture in the library tonight? Well, I’m going to be studying all night for the mineralogy test tomorrow, not that it will be of any use. I think I’m definitely failing it.";
	} else if (x == "31,17") {
			answer = "Don’t show me another book, please. My head is already full of mineralogy books, I don’t think I can handle another one.";
	} else if (x == "31,18") {
			answer = "I have a test in mineralogy tomorrow, and I will fail for sure. Which means I will be failing the year and losing the scholarship. Unless...Ziggy, what do you say to a little exchange? If you find a way to distract professor Martin and get me a copy of the test, I’ll pay you a nice amount of money. He keeps the tests on the desk, and I know you’re smart enough to think of something. I would never ask this of you if it wasn’t a question of my future!";
	} else if (x == "31,20") {
			answer = "I’m not surprised that the library has a projector. It’s usual equipment.";
	} else if (x == "31,21") {
			answer = "Nice work! But I know nothing about street art.";
	} else if (x == "31,22" || x == "31,43") {
			answer = "Sorry, but I don't know how could I help you with this.";
	} else if (x == "31,23") {
			answer = "Your mother left? Just like that? Wow, that must me hard.";
	} else if (x == "31,25") {
			answer = "You need a new lens? I guess I could help you, I put some money from the scholarship on the side. But I would need you to do me a favor in return. I have to get a copy of the mineralogy test, or I’m failing it tomorrow. And that means failing this year entirely.";
	} else if (x == "31,26") {
			answer = "Thanks, but no thanks. I prefer coffee.";
	} else if (x == "31,28") {
			answer = "Wow, that’s amazing! With my limited knowledge in mineralogy I can’t pretend to know what it could be. Did you show it to the professor?";
	} else if (x == "31,29") {
			answer = "Ziggy, I’m not going to pass the test tomorrow. The more I learn, the more it seems that I don’t know anything. And my scholarship depends on it. Listen, I know it's not something that you usually do, but you are on much better terms with the professor than I am. Do you think you could take a peek at the test? Get me copy somehow? He keeps the tests on his desk, if you could distract him for a moment maybe it could be done. I would pay you well for this. Please don’t judge me, my future is in question!";
	} else if (x == "31,30") {
			answer = "A telescope shop? No, I’ve never been there.";
	} else if (x == "31,31") {
			answer = "I’m in a real problem. If I don’t pass the mineralogy test tomorrow, I’m failing this year. If I fail the year, my scholarship is gone. And so is my future. Ziggy, I know it’s not something I should be asking of you, but please help me! I know how smart you are. If you could distract the professor for a moment to get me a copy of the test, you would save me. I would pay you well, I still have money from the scholarship. Please, I’m begging you!";
	} else if (x == "31,32") {
			answer = "I don’t know him. I don’t go to tea shops, pubs are more my style.";
	} else if (x == "31,33") {
			answer = "Yes! Ziggy, I’m forever grateful for this. And don’t worry, this will be our little secret. Here’s the money, as promissed. Well, now that I don’t need to study anymore, I’ll be going. Maybe have a drink with my crew.<br><i>You feel pretty bad about this, but it’s already done. Soon after Jamie leaves the room, professor Martin returnes to his desk. He doesn't notice that one of the tests is missing.<br><i>Take card <b>19</b>. Remove cards <b>31</b> and <b>33</b>.</i>";
	} else if (x == "31,34") {
			answer = "An empty cup will definitely not help me with my problem.";
	} else if (x == "31,35") {
			answer = "What are you planning to do with it? Make graffiti on one of the university buildings?";
	} else if (x == "31,37") {
			answer = "Remember this one time when some students changed it for their sports team flag? It might have been before you were a student here. Anyway, when the flag went up, the same time like every other day, it was a complete chaos! Everybody on the university left everything and just looked at it in shock. What’s the deal with that, it’s just a flag!";
	} else if (x == "31,39") {
			answer = "This is a logo of the library, right?";
	} else if (x == "31,42") {
			answer = "I don’t know her, but she is dank!";
	} else if (x == "32,01") {
			answer = "Hi, what can I get you?";
	} else if (x == "32,02" || x == "32,27") {
			answer = "Nice fly!";
	} else if (x == "32,03" || x == "32,40") {
			answer = "Nice dog!";
	} else if (x == "32,04") {
			answer = "Nice projector. It’s yours?";
	} else if (x == "32,05") {
			answer = "Nice cookies mix!";
	} else if (x == "32,06") {
			answer = "Wow, how cool is that! But I'm not sure that I can be of any help with it.";
	} else if (x == "32,07") {
			answer = "Sure, I’ve seen the poster in the library. That’s Jocelyn Hill right there. She’s freaking out about the lecture.";
	} else if (x == "32,08") {
			answer = "Really? How do you do it? Can you connect with me too? I'm an animal.";
	} else if (x == "32,09") {
			answer = "Sandy comes very often. We always have a nice little chat.";
	} else if (x == "32,10") {
			answer = "No, I’ve never met her. If she ever came to the shop, I would have surely remembered her.";
	} else if (x == "32,11") {
			answer = "That’s her, sitting right there. She is completely stressed out. She keeps checking stuff about the lecture on computer. Opens the computer, writes her password in, reads a part of the lecture and closes the computer. One minute after, she does it all again. It's obsessive, really.";
	} else if (x == "32,12") {
			answer = "My sister is into astronomy. I even once went to this telescope shop with her.";
	} else if (x == "32,13" || x == "32,38") {
			answer = "Nice parrot.";
	} else if (x == "32,14") {
			answer = "The name doesn’t sound familiar.";
	} else if (x == "32,15") {
			answer = "Nice dog cookies.";
	} else if (x == "32,16") {
			answer = "Who knows what the universe is hiding from us...";
	} else if (x == "32,17") {
			answer = "This looks like hard core astronomy. The handwritten part is kind of strange, don't you think?";
	} else if (x == "32,18") {
			answer = "I saw the guy quite a few times here with your mother. They often come for a cup of tea during her break. It started maybe a month ago. She is happy with him, that much I can tell you. They would passionately discuss science, astronomy, geology, that kind of stuff. And the guy seems very much into Lena too. He wouldn't take his eyes of her.";
	} else if (x == "32,19") {
			answer = "That’s way too much money for a cup of tea. Besides, it’s on the house.";
	} else if (x == "32,20") {
			answer = "Nice projector. The library is well equiped.";
	} else if (x == "32,21") {
			answer = "That’s nice! I follow street art a bit, but I’ve never seen this. Oh, did you know that Loomey is doing a mural in town? I love her work.";
	} else if (x == "32,22") {
			answer = "Please keep an eye on it, I’m too busy with customers at the moment.";
	} else if (x == "32,23") {
			answer = "Lena is your mother? Oh, that's cool, I really like her. She's my favourite customer. What, she left town? I was wondering why she didn't come for her cup of tea today. Well, I did notice that she was acting a bit strange lately. She wouldn't chit chat as much as usual. She seemed kind of burried into her thoughts and concerned about something. Except when she came with that professor, he definitely brought her cheerful side out.";
	} else if (x == "32,24") {
			answer = "This sounds like she’s giving directions. I think it would be possible to track her path if we knew the address of the mural.";
	} else if (x == "32,25") {
			answer = "Your lens is broken? There is this shop, Outer Space Telescopes where you can find all the parts. I went with my sister once, she’s an amateur astronomer.";
	} else if (x == "32,26") {
			answer = "No thanks, I can’t even look at tea anymore.";
	} else if (x == "32,28") {
			answer = "I’ve seen this gem on Lena. It’s magical, isn’t it?";
	} else if (x == "32,29" || x == "32,33") {
			answer = "I studied antropology for three years, mineralogy is really not my field.";
	} else if (x == "32,30") {
			answer = "Yes, I’ve seen him in the telescope shop the one time I went there with my sister.";
	} else if (x == "32,31") {
			answer = "No, I don’t know him.";
	} else if (x == "32,32") {
			answer = "I’m just a simple guy. I spend most of my free time in nature or with a good book.";
	} else if (x == "32,34") {
			answer = "Another cup of tea? Coming right up!<br><i>Take card <b>26</b>. Remove card <b>34</b>.</i>";
	} else if (x == "32,35") {
			answer = "You’re thinking of making street art? Nice.";
	} else if (x == "32,36") {
			answer = "When this sprout becomes a pumpkin, promise to make me a pumpkin pie?";
	} else if (x == "32,37") {
			answer = "The last year of my studies in the university, a couple of athletes changed it for their sports club flag. When the thing came up, the whole university made a fuss about it. Everybody just stopped whatever they were doing and went out to look at the flag. As if something really important happened. Crazy, believe me.";
	} else if (x == "32,39") {
			answer = "That’s the logo of the library next door. And the number...Could be a code for one of their books. Check it with Sandy, the librarian.";
	} else if (x == "32,41") {
			answer = "What do you say about making me a pumpkin pie?";
	} else if (x == "32,42") {
			answer = "I’m a big fan of her work. I hear she’s in town at the moment, working on a mural. But she is leaving for a street art festival in Brazil tomorrow. She was invited to participate. It’s nice to see that finally the world starts to appreciate her art.";
	} else if (x == "32,43") {
			answer = "That’s the computer of Jocelyn Hill. She keeps opening it, writing her password in, checking out a part of her lecture and closing it again. I mean, she must have done it at least twenty times already!";
	} else if (x == "38,01") {
			answer = "I love you Ziggy! I love you!";
	} else if (x == "38,02" || x == "38,08" || x == "38,27" || x == "38,36" || x == "38,41") {
			answer = "All living crrreatures arrre connected!";
	} else if (x == "38,03" || x == "38,05" || x == "38,15") {
			answer = "Feed Laika! Cookies! Laika!";
	} else if (x == "38,04" || x == "38,20") {
			answer = "That's from the librrrarrry! My librrrarry!";
	} else if (x == "38,06" || x == "38,10") {
			answer = "Firrrst letterrrs! Only firrrst letterrrs!";
	} else if (x == "38,07" || x == "38,11") {
			answer = "Lecturrre in the librrrarrry! My librrrarry!";
	} else if (x == "38,09") {
			answer = "Sandy is frrriend! My frrriend!";
	} else if (x == "38,18") {
			answer = "Like prrroffesorrr! I like!";
	} else if (x == "38,21") {
			answer = "Find the murrral! The murrral!";
	} else if (x == "38,22" || x == "38,26" || x == "38,34" || x == "38,42" || x == "38,43") {
			answer = "<i>The parrot seems confused and has nothing to say about this.</i>";
	} else if (x == "38,23") {
			answer = "I left message with Emma! Message!";
	} else if (x == "38,28") {
			answer = "Gem gives powerrr! Powerrr!";
	} else if (x == "38,32") {
			answer = "Nice boy Marrrk! Nice boy!";
	} else if (x == "38,38") {
			answer = "Parrrot Jimmy knows things! Jimmy knows!";
	} else if (x == "42,01") {
			answer = "It’s nice to meet you. I’d love to chat, but I’m in a middle of a commissioned job, so I don’t have a lot of time.";
	} else if (x == "42,02" || x == "42,27") {
			answer = "Should I be interested in this fly? Well, I'm not.";
	} else if (x == "42,03" || x == "42,40") {
			answer = "Cute dog.";
	} else if (x == "42,04") {
			answer = "You’re kidding me...This is awesome! It will speed me up enormously. Thank you soooo much! Ok, let’s try to help you with finding your mural now. <br><i>Loomey takes a photo of the mural and sends it to a couple people. After about 20 minutes of texting and calling, finally one of her friends recognizes it.</i><br>The mural is made by an anonymous author, that’s why I couldn’t remember it. But I did see it. It was not far from here actually, but it's been removed 7 or 8 years ago. The address is 2 Time St, but it was made on the back of the building, so the photo was taken from Bold St. Hope that this helps you, because you helped me a lot.<br><i>Loomey returns to her work politely asking me to leave so that she could focus.<br>Remove cards <b>04</b> and <b>42</b>.</i>";
	} else if (x == "42,05") {
			answer = "I’m an artist, not a dog food cook.";
	} else if (x == "42,06") {
			answer = "That looks interesting, but I don't have time to explore it right now.";
	} else if (x == "42,07") {
			answer = "I’m definitely not going to a lecture tonight. This wall is huge, and I’m running really late. With this tempo, I’ll be working all night, and I still don’t know if I’ll manage to finish. And tomorrow I’m leaving for Brazil.";
	} else if (x == "42,08") {
				answer = "Sure, and I have an invisibility cloak.";
	} else if (x == "42,09") {
			answer = "I don't remember the last time I was at the library. I'm more of a outdoors person, not very interested in spending time on books.";
	} else if (x == "42,10") {
			answer = "No, doesn’t ring a bell.";
	} else if (x == "42,11") {
			answer = "Never heard of her.";
	} else if (x == "42,12") {
			answer = "I’m glad you got it, but I don’t have time to celebrate right now.";
	} else if (x == "42,13" || x == "42,38") {
			answer = "Look, I like animals but I'm kind of in a rush to finish this job right now.";
	} else if (x == "42,14") {
			answer = "Sorry, don’t know her.";
	} else if (x == "42,15") {
			answer = "I don’t really know what I'm supposed to do with dog cookies. So, If you don't mind, I've got work to do.";
	} else if (x == "42,16") {
			answer = "Starry sky...There aren’t many things as beautiful as that. But I’m completely lost in space, for me stars are just a bunch of sparkling dots.";
	} else if (x == "42,17") {
			answer = "You expect me to read all this now? You’ve got to be kidding.";
	} else if (x == "42,18") {
			answer = "I was never very fond of serious university professors.";
	} else if (x == "42,19") {
			answer = "I don’t want your money, what I need is more time!";
	} else if (x == "42,20") {
			answer = "A projector would actually save me! I could project the sketch on the wall and transfer it really quickly. If you could get it for me, that would be amazing.";
	} else if (x == "42,21") {
			answer = "Let me take a look, I can usually recognize other artists’ work. Hmmm, it seems familiar, but I can’t put my finger on it. I could make a few calls to my friends who know the scene better than me and try to identify it. But the problem is that I’m seriously late with my work. The mural I’m making is a commissioned gig and the company that ordered it gave me wrong dimensions of the wall. It’s huge! So now it will take me at least 6 hours just to transfer the sketch on the wall, and tomorrow I’m flying to Brazil. I’ll be working all night probably, and I’m still not sure I’ll make it. So unless you magically find some equipment that would speed up the process, I really can’t lose time on searching for the origin of the mural on your photo. Sorry, kid.";
	} else if (x == "42,22" || x == "42,43") {
			answer = "I'm not very good with computers. My knowledge is pretty basic when it comes to technology.";
	} else if (x == "42,23") {
			answer = "Sorry, I’ve never met her.";
	} else if (x == "42,24") {
			answer = "Yeah, I don't have time to decipher letters for you.";
	} else if (x == "42,25") {
			answer = "There is a telescope shop just across the street, you can probably get it fixed there.";
	} else if (x == "42,26") {
			answer = "Does it look like I have time for tea? Well, I don’t.";
	} else if (x == "42,28") {
			answer = "Wow! It’s...beautiful!";
	} else if (x == "42,29" || x == "42,33") {
			answer = "I’m an artist. I don’t know anything about mineralogy.";
	} else if (x == "42,30") {
			answer = "It’s the guy that works in the shop across the street, right? I saw him come out of the shop a few times.";
	} else if (x == "42,31") {
			answer = "Doesn’t seem familiar.";
	} else if (x == "42,32") {
			answer = "He’s cute, but I don’t know him.";
	} else if (x == "42,35") {
			answer = "Ok, I’ll give you one. Take the red, I won’t be needing it.";
	} else if (x == "42,34" || x == "42,36" || x == "42,41") {
			answer = "Look, I don’t have time for this.";
	} else if (x == "42,37") {
			answer = "The design isn’t very innovative.";
	} else if (x == "42,39") {
			answer = "This doesn't make any sense to me.";
	} else if (x == "42,42") {
			answer = "I’ve been doing street art for 10 years now, and finally my career is starting to go somewhere. Actually, I’m flying to Brazil tomorrow to participate in a street art festival with some of the greatest artists in the world! I’m also doing commissioned work, like this one right now. It’s not very rewarding, but it put the food on the table. The problem with this particular gig is that the company that ordered it gave me wrong dimensions of the wall, and now I’m super late. I’ve just started, and I’m supposed to transfer the sketch on the wall. But since it’s huge, it will take me at least six hours instead of one, as I planned. If I knew it would be like this, I would have thought of a different technique to do it, but now it’s too late. So I’ll be working all night.";
	} else if (x == "02,03" || x == "02,40" || x == "03,02" || x == "03,27" || x == "27,03" || x == "27,40" || x == "40,02" || x == "40,27") {
      answer = "Laika doesn't mind the fly. She's a peaceful animal.";
	} else if (x == "02,26" || x == "02,34" || x == "26,02" || x == "34,02" || x == "26,27" || x == "34,27" || x == "27,26" || x == "27,34") {
			answer = "That's just disgusting. Who would want to drink that?";
	} else if (x == "02,08" || x == "08,02") {
			answer = "Well, let's try this gift I apparently have now. Come on little fly, show me what you've got!<br><i> As I use my ability, I begin to feel the sensations of the fly. But not only that, I also gain power over it. It seems that I can make it move wherever I wish to.<br>Take card <b>27</b>. Remove card <b>2</b>.</i>";
	} else if (x == "03,03" || x == "03,23") {
			answer = "Woof woof!";
	} else if (x == "03,05" || x == "05,03") {
			answer = "I can't make the cookies without the pumpkin. It's the best part!";
	} else if (x == "03,08" || x == "08,03") {
			answer = "As I focus on Laika, I start to feel that I have some kind of power over her. I can make her do all the tricks perfectly, despite the fact that she is the worst trained dog on this planet. She even manages to bark in a pretty melody. But at the same time I sense that she’s really sad and that she would love to eat some of her favourite cookies that would remind her of my mother. I also feel that she wants to show me something, but she’s way to depressed to do it. And even with my superpowers, I can't change her mind.";
	} else if (x == "03,05" || x == "03,41" || x == "05,03" || x == "05,40" || x == "41,03" || x == "40,05") {
			answer = "Cookies are not finished yet!";
	} else if (x == "03,15" || x == "15,03") {
			answer = "There you go, Laika! <br><i>Laika barks and eats the cookies with pleasure. She seems to feel much better. After she finishes, she barks to get my attention. I realise that she wants to show me something, so I follow her. She goes in the backyard and starts digging in hole under the apple tree. What is she searching there? Not long after, she really digs out something. It's a cryptex. I somehow understand that Laika’s telling me how important this is to my mother. After I take it, Laika barks and runs back into the house.<br><i>Take card <b>06</b>. Remove cards <b>03</b>, <b>15</b> and location card <b>A</b>.</i>";
	} else if (x == "03,26" || x == "26,03" || x == "26,40" || x == "40,26") {
			answer = "The tea is not for Laika.";
	} else if (x == "03,13" || x == "03,38" || x == "13,03" || x == "13,40" || x == "40,13") {
			answer = "I don't think that Laika is very fond of the parrot.";
	} else if (x == "04,21" || x == "21,04") {
			answer = "Where and why should I make a projection of this photo?";
  } else if (x == "05,36" || x == "36,05") {
      answer = "I don't think that fresh chopped pumpkin and fresh chopped pumpkin sprout are one and the same. I have to get a ripe pumpkin fruit for these cookies.";
  } else if (x == "05,41" || x == "41,05") {
      answer = "Finally, let's put this pumpkin in the mix. 30 minutes in the oven and here come the best dog cookies Laika could wish for.<br><i>Take card <b>15</b>. Remove cards <b>05</b> and <b>41</b>.</i>";
	} else if (x == "07,35" || x == "35,07") {
			answer = "It wouldn’t do any good if I paint over the lecture poster. The lecture would have still been held.";
	} else if (x == "08,09" || x == "08,10" || x == "08,11" || x == "08,14" || x == "08,18" || x == "08,30" || x == "08,31" || x == "08,32") {
			answer = "Unfortunatelly, it seems  to work only on plants and animals. It would be amazing and in same time terryifing to be able to feel other person’s feelings.";
	} else if (x == "08,13" || x == "13,08") {
			answer = "I focus on the parrot and I feel that I start to connect with its mind. In the same time, I start to feel connection with my mother. I realise that she used to do this too. And then suddenly, the parrot starts talking. <br><i>Take card <b>38</b>. Remove card <b>13</b>.";
	} else if (x == "08,36" || x == "36,08") {
			answer = "I focus hard on the sprout, trying to give all the energy I have into it. Even though I’m not really sure what I’m doing, the plant starts to rapidly grow in front of me. In about a minute of my hard work, a flower appears, and it two minutes, there is already a small green fruit. In three minutes, I’ve created a fully grown, completely ripe pumpkin. <br><i>Take card <b>41</b>. Remove card <b>36</b>.</i>";
	} else if (x == "08,41" || x == "41,08") {
			answer = "I think this works only when the plant is still planted.";
	} else if (x == "12,17" || x == "17,12") {
			answer = "Well sure, a book on astronomy can be useful while looking into space, but I can’t directly use it with the telescope lens.";
	} else if (x == "12,25" || x == "25,12") {
			answer = "All right! This should work now. Let’s take a look at the sky tonight.<br><i>Take card <b>16</b>. Remove cards <b>12</b> and <b>25</b>.</i>";
	} else if (x == "15,26" || x == "26,15") {
			answer = "Cookies and tea are a great combination, but dog cookies and tea maybe less so.";
	} else if (x == "17,25" || x == "25,17") {
			answer = "The book can be useful while looking into space, but it won’t fix the telescope.";
	} else if (x == "21,35" || x == "35,21") {
			answer = "I don’t want to spray the paint all over the photo. My mother liked it so much that she had it framed. Why would I destroy it?";
	} else if (x == "27,43" || x == "43,27") {
			answer = "I send my fly to look at Jocelyn's computer. As she has done a hundred times already, she opens the computer, writes her password and checks some facts in her lecture. The fly has a great view over the screen and gives me its mental image of Jocelyn's password. OK, if I knew that it was so simple, I could have guessed it myself. Jocelyn, you really couldn't came up with nothing better than 'Jocelyn1234'?";
	} else if (x == "27,29" || x == "29,27") {
			answer = "The tests are in a closed folder. There is no way that I can make the fly open the folder to take a look at the tests.";
	} else if (x == "29,35" || x == "35,29") {
			answer = "I can’t just spray paint all over the tests! And in front of the professor too.";
	} else if (x == "29,37" || x == "37,29") {
			answer = "I don’t know how to use these two together, but I have a feeling that the flag could be useful in my diabolic plan to get the mineralogy test.";
	} else if (x == "33,35" || x == "35,33") {
			answer = "If I spray all over the tests, professor Martin will simply make new copies. It’s not a great solution.";
	} else if (x == "35,37" || x == "37,35") {
			answer = "Ok, let’s see do I have some talent in arts. I’ll admit it’s not a masterpiece, but it will do the trick. <br><i>I draw some pretty provocative signs on the flag, just in time before it’s supposed to be raised up on the pole. I go back up to professor Martin’s desk and wait for the big flag reveal. I hear the hymn starting on the speakers, and the people around me start to stir. 30 seconds after, everybody is already by the window, commenting on the flag vandalization. Professor Martin also gets up and goes to the window to see what all the fuss is about. The mineralogy tests stay on the desk, unsupervised. <br>Take card <b>33</b>. Remove cards <b>29</b>, <b>35</b> and <b>37</b>.</i>";
	} else if (x == "22,Jocelyn1234" || x == "22,jocelyn1234" || x == "22,JOCELYN1234") {
			answer = "Well, this is an absolutely terrible thing to do, but I’m doing it anyway. However, to not be a total villain, I’ll copy her lecture on a cloud first and send her a link to download it tomorrow. Anonymously, obviously. I’m really sorry, Jocelyn! <br><i>I delete the lecture from the computer and move on a nother table. Jocelyn returns from the toilet and checks her computer for the lecture, staying speechless after realising that it's gone. After a few minutes of disbelief, she leaves the tea shop and goes to the library to say her material for the lecture is gone. I follow her, and wait for her to finish her conversation with Sandy. As she leaves, I kindly ask Sandy to borrow the projector, now that the lecture is canceled. Sandy, although a bit suspicious about this unexpected turn of events, lets me have it. <br>Take card <b>04</b>. Remove cards <b>07</b>, <b>11</b>, <b>20</b> and <b>22</b>.</i>";
	} else if (x == "06,Kepler" || x == "06,kepler" || x == "06,KEPLER") {
			answer = "It works! There is a rolled piece of paper in the cryptex. It looks like a letter. <br>Take card <b>24</b>. Remove cards <b>06</b> and <b>38</b>.</i>";
	} else if (x == "9 Sun St" || x == "9 sun st" || x == "9 SUN ST") {
			answer = "Let's check out this telescope shop.<br><i>Take location card <b>B</b>.</i>";
	} else if (x == "1 University St" || x == "1 university st" || x == "1 UNIVERSITY ST") {
			answer = "I'm not really in the mood to return to the university yet, but I could get some information there.<br><i>Take location card <b>C</b>.</i>";
	} else if (x == "2 Story St" || x == "2 story st" || x == "2 STORY ST") {
			answer = "Maybe there is something in the library worth looking at.<br><i>Take location card <b>D</b>.</i>";
	} else if (x == "3 Story St" || x == "3 story st" || x == "3 STORY ST") {
			answer = "So let's meet this Jocelyn Hill.<br><i>Take location card <b>E</b>.</i>";
	} else if (x == "1 Story St" || x == "1 story st" || x == "1 STORY ST") {
			answer = "There is no tea shop on this address. So i guess it's the on other next door to the library.";
	} else if (x == "1 Lucky St" || x == "1 lucky st" || x == "1 LUCKY ST") {
			answer = "I hope I got the address right from this puzzle my mother left me.<br><i>Take location card <b>F</b>. Remove cards <b>16</b> and <b>17</b>.</i>";
	} else if (x == "3 Apple St" || x == "3 apple st" || x == "3 APPLE ST") {
			answer = "I trace Mary's movements from the apartment to the mural, going backwards. I guess this should be it.<br><i>Take location card <b>G</b>.</i>";
	} else {
  		answer = "That's not working. Try something else.";
  	}
  	document.getElementById("book-answer").innerHTML = answer;
};
