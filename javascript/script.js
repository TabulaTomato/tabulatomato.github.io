let vh = window.innerHeight * 0.01

document.documentElement.style.setProperty('--vh', `${vh}px`);

function searchKeyPress(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('myButton').click();
        return false;
    }
    return true;
}

function myFunction() {
	var x = document.getElementById("myText").value;
  	var answer;
  	if (x == "01") {
  		answer = "I’m Ziggy Wonder, a student in the Manchester University. My mother died a few days ago and it’s the hardest thing that ever happened to me.";
  } else if (x == "02") {
  		answer = "Some fresh eggs in a bowl.";
  } else if (x == "03") {
  		answer = "Laika is our dog. She is unusualy quiet, probably because she misses my mother. There is a gem hanging on her collar, the one my mother used to wear on her necklace.";
  } else if (x == "04") {
  		answer = "The projector I borrowed from the library.";
	} else if (x == "05") {
  		answer = "My mother’s cabin in the woods that Laika brought me to. There is the word “Baghdad” written on the door. It’s locked by a 4 digit combination padlock. <br><i>To open the cabin door, enter card number <b>05</b> followed by a 4 digit number lock combination in the input field, separated by a comma.</i>";
	} else if (x == "06") {
  		answer = "Gavin Korn is a member of Earthlings association.";
	} else if (x == "07") {
  		answer = "A poster announcing a lecture on Bavaria by Jocelyn Hill in the library tonight.";
	} else if (x == "08") {
  		answer = "Sounds of Earth or the Golden Record, the record that was originally sent to space with Voyager spacecrafts.";
	} else if (x == "09") {
  		answer = "Sandy is my mother’s colleague. They worked together for about 10 years and they became friends in the meantime.";
	} else if (x == "10") {
  		answer = "Emma Korn is Gavin’s wife and they were both my mother’s friends. Gavin told me that she has something that my mother gave them for safekeeping.";
	} else if (x == "11") {
  		answer = "Jocelyn Hill is holding the lecture at the library tonight. She is sitting alone, looking at her computer and looks quite nervous.";
	} else if (x == "12") {
  		answer = "It’s a brand new telescope lens.";
	} else if (x == "13") {
  		answer = "It’s a note that fell out of the Sounds of Earth cover.";
	} else if (x == "14") {
  		answer = "Mary Davis is my mother’s old friend whose letter I found in the safe.";
	} else if (x == "15") {
  		answer = "That’s my phone. Charged and working. <br><i>To call a number, enter card number <b>15</b> followed by a 4 digit phone number in the input field, separated by a comma.</i>";
	} else if (x == "16") {
  		answer = "The night sky seen with the telescope. It’s breathtaking. If only there was something to help me in identifying all these stars.";
	} else if (x == "17") {
  		answer = "An astronomy book that contains a huge list of stars, all with 4 digit numbers written next to them. There is also a message inside written in my mother's handwriting. I wonder if I could use this book to explore the night sky. <br><i>Take card <b>64</b>.</i>";
	} else if (x == "18") {
  		answer = "The projector I borrowed from the library plugged in the portable solar generator.";
	} else if (x == "19") {
  		answer = "Dog cookies dough in which I added some peanut butter. Ready for the next step of the recipe.";
	} else if (x == "20") {
  		answer = "The library projector is mounted on the ceiling.";
	} else if (x == "21") {
  		answer = "It’s a photo of a street. There is a big mural on a wall of a building in the street. I can’t recognize where the photo was taken.";
	} else if (x == "22") {
  		answer = "Jocelyn’s computer left all alone. It’s password protected. <br><i>To open the computer, enter card number <b>22</b> followed by a 4 digit number password in the input field, separated by a comma.</i>";
	} else if (x == "23") {
  		answer = "My mother, who passed away a few days.";
  } else if (x == "24") {
  		answer = "Some flour in my mother’s kitchen.";
	} else if (x == "25") {
  		answer = "My mother’s telescope, placed pointing in the sky. Unfortunately, the lens is broken. There is a sticker on the telescope with a logo and an address, reading ‘Outer World Telescopes’. <br><i>Take card <b>B</b>.</i>";
	} else if (x == "26") {
  		answer = "A cup of tea I ordered from Mark, the barista.";
	} else if (x == "27") {
  		answer = "A recipe for Laika’s favourite cookies. It’s written in a language I don’t recognize or understand.";
	} else if (x == "28") {
  		answer = "It’s the gem my mother used to wear that I found on Laika’s collar. She used to say that it’s family heritage. I used to take it for granted, but now that I think of it, it’s really different from any other stones I ever saw. It could be good to have my mineralogy professor have a look at it at the university. As I put it on my neck, I start to have a funny feeling of connection with Laika, and even the plants in the house and the garden. <br><i>Take cards <b>61</b> and <b>C</b>.</i>";
	} else if (x == "29") {
  		answer = "These are the tests in mineralogy. Professor Martin keeps a good look on them.";
	} else if (x == "30") {
  		answer = "That’s the safe my mother left to Emma Korn for safekeeping. It has a digital lock. On the bottom, there is a small inscription engraved: ‘To the makers of music – all worlds, all times’. <br><i>To open the safe, enter card number <b>30</b> followed by a 4 digit number combination in the input field, separated by a comma.</i>";
	} else if (x == "31") {
  		answer = "Jamie Elliott is a fellow student. We take mineralogy class together. He has been struggling all year with the class, and the professor definitely doesn’t favour him. He earned a big scholarship last year from his future employer, but he will lose it if he doesn’t pass the year. ";
	} else if (x == "32") {
  		answer = "Laika is still very quiet. I would like to cheer her up.";
	} else if (x == "33") {
  		answer = "The SD card that my mother used on her computer in the Earthlings association and later gave to Gavin. There is a virus on it that corrupts all the files on the device it’s put into. Also, it leaves a false trace that the virus was brought by an exernal on-line source, such as the internet.";
	} else if (x == "34") {
  		answer = "My mother’s oven.";
	} else if (x == "35") {
  		answer = "The spray paint that I took from Loomey.";
	} else if (x == "36") {
  		answer = "A pumpkin sprout planted in the Korns’ garden. It should take about three months for a ripe fruit to grow.";
	} else if (x == "37") {
  		answer = "The flag of the university, still not up on the pole. They bring it up every day at the same time, followed by the university hymn on the speakers. ";
	} else if (x == "38") {
  		answer = "A portable solar generator that Gavin Korn borrowed me. It’s useful for bringing power to devices in outdoor spaces.";
	} else if (x == "39") {
  		answer = "A note with some numbers written in my mother’s handwriting next to a logo of the library she used to work in. It was found hidden behind the broken lens in my mother’s telescope. <br><i>Take card <b>D</b>.</i>";
	} else if (x == "40") {
  		answer = "The third step of the dog cookies recipe is successfully done. ";
	} else if (x == "41") {
  		answer = "A ripe pumpkin fruit.";
	} else if (x == "42") {
  		answer = "Loomey is a street artist currently working on a mural next to the telescope shop.";
	} else if (x == "43") {
  		answer = "The computer of Jocelyn Hill, where she keeps a presentation for her lecture on Bavaria.";
	} else if (x == "44") {
  		answer = "An empty cup on Jocelyn Hill’s table. She finished her tea.";
	} else if (x == "45") {
  		answer = "The front of the letter kept in my mother’s safe. It’s written by a woman named Mary.";
	} else if (x == "46") {
  		answer = "The mineralogy tests are now unsurveilled.";
	} else if (x == "47") {
  		answer = "A photo of the mineralogy test.";
	} else if (x == "48") {
  		answer = "The final ingredient for the cookies is in the dough.";
	} else if (x == "49") {
  		answer = "A pair of standard scissors.";
	} else if (x == "50") {
  		answer = "A jar of home made peanut butter.";
	} else if (x == "51") {
  		answer = "Mark is a barista in the tea shop. He is at the bar, cleaning cups.";
	} else if (x == "52") {
  		answer = "Peter is the salesman in the telescope shop. He seems enthusiastic about his job.";
	} else if (x == "53") {
  		answer = "Jocelyn’s computer is now open. So, if I want to mess with her files, now is the moment.";
	} else if (x == "54") {
  		answer = "The back of the letter kept in my mother’s safe. It’s written by a woman named Mary.";
	} else if (x == "55") {
  		answer = "The money that Jamie gave me. There is around 700 pounds here.";
	} else if (x == "56") {
  		answer = "A newspaper article about an oil company IBOR that was in my mother’s safe.";
	} else if (x == "57") {
  		answer = "Professor Martin is my mineralogy professor in the university. He is an expert in his field.";
	} else if (x == "58") {
  		answer = "The cookies I made for Laika.";
	} else if (x == "59") {
  		answer = "Nathan Bright is the leader of Earthlings association, which my mother was also a member of.";
	} else if (x == "60") {
  		answer = "There is a senna plant in Korns’ garden. It’s a plant known for treatment of constipation.";
	} else if (x == "61") {
  		answer = "My new ability of connecting with animals and plants around me is hard to define. It’s still unclear why did I get this ability and what exactly can I do with it. Does it only give me a way to sense their feelings, or does it go beyond that to the point of actually effecting them?";
	} else if (x == "62") {
  		answer = "A cup of tea in which I put some senna leaves. Actually, enough of senna leaves to deal with any constipation problem.";
	} else if (x == "63") {
  		answer = "My mother’s record player.";
	} else if (x == "64") {
  		answer = "It’s the message that I found in the astronomy book, written in my mother’s handwriting.";
	} else if (x == "A" || x == "a") {
  		answer = "My mother’s kitchen looks as if somebody still lives here. There is a lot of food around still, like flour <b>24</b>, eggs <b>02</b> and peanut butter <b>50</b>. The scissors <b>49</b> are left on the bar, as well as a framed photo <b>21</b> that I’ve never seen before. The oven <b>34</b> won't be used a lot anymore, since baking is not something I'm good at. There is nothing interesting in the cupboards, except something that looks like a recipe <b>27</b>. My mother’s telescope <b>25</b> is placed by the window. Our dog, Laika <b>03</b> is here, not as cheerful as usual.";
	} else if (x == "B" || x == "b") {
  		answer = "Outer Space Telescopes shop is open, and a salesman <b>52</b> greets me when I walk in. On the other side of the street there is a street artist <b>42</b> working on a mural, with some spray paint <b>35</b> sitting next to her on the floor.";
	} else if (x == "C" || x == "c") {
  		answer = "Professor Martin <b>57</b> is sitting at his desk in the common working space. He has the tests <b>29</b> for tomorrow next to him. A bit further, a fellow student Jamie <b>31</b> is studying. I can see the university flag <b>37</b> pole through the window.";
	} else if (x == "D" || x == "d") {
  		answer = "Another World Library is calm, with only a few people browsing the books. There is a poster about a lecture <b>07</b> on the library wall. A projector <b>20</b> that is used in library events is mounted on the ceiling. The librarian <b>09</b> my mother used to work with is not very occupied at the moment.";
	} else if (x == "E" || x == "e") {
  		answer = "The tea shop is almost empty. I can see a woman <b>11</b> sitting in front of her computer <b>43</b> on one of the tables. Her cup <b>44</b> is empty. The barista <b>51</b> is cleaning the cups at the bar.";
	} else if (x == "F" || x == "f") {
  		answer = "There are a lot of people on the street, holding signs and chanting. One of them seems to be the leader <b>59</b>. There is also a protest camp just next to the road. It seems that the protesters plan to stay here overnight. A man <b>06</b> is sitting next to the tent. I can also see a portable solar generator <b>38</b> in the camp.";
	} else if (x == "G" || x == "g") {
  		answer = "Korn family farm is small, but cozy. The garden is beautiful and well kept, with plenty of herbs and vegetables. A senna plant <b>60</b> catches my eye, as well as pumpkin sprouts <b>36</b>. Mrs Korn <b>10</b> is standing by the house doors.";
	} else if (x == "H" || x == "h") {
  		answer = "My mother’s cabin looks like a little getaway for relaxing after a long day. The majority of the space is took by her vinyl collection and a record player <b>63</b>. While browsing through the records, I notice one that I’ve never seen before. The name of the record is 'Sounds of Earth' <b>08</b>.";
	} else if (x == "I" || x == "i") {
  		answer = "It’s a drawing of the constellations I saw with the telescope in their accurate positions. I added the numbers from my mother’s astronomy book next to their according stars.";
	} else if (x == "01,01") {
  		answer = "I miss my mother a lot. With her gone, I have no family left. I’ve never felt so alone before. ";
	} else if (x == "01,02") {
  		answer = "Best eggs you can find. My mother always bought eggs from local farmers.";
	} else if (x == "01,03") {
  		answer = "I remember my mother mentioning that she was interested in buying a cabin not far from home. But she never told me she actually did it. Now, how do I open this lock?";
	} else if (x == "01,04") {
  		answer = "This could be useful, maybe not to me but to somebody else.";
	} else if (x == "01,05") {
  		answer = "My mother used to read it to me when I was a child. She would change the scary parts, so I never really heard the whole story.";
	} else if (x == "01,06") {
  		answer = "Any friend of my mother is my friend too.";
	} else if (x == "01,07") {
  		answer = "It could be interesting, but I’m not in a mood for a lecture today.";
	} else if (x == "01,08") {
  		answer = "I never saw this record in my mother’s collection. This is just another proof of my mother’s obsession with space.";
	} else if (x == "01,09") {
  		answer = "Sandy seems more down to earth than my mother ever was, but I know that they were good friends in spite of those differences.";
	} else if (x == "01,10") {
  		answer = "This must be Gavin’s wife. She has a really nice smile. I’m not surprised that my mother was friends with them, they seem to share a similar lifestyle.";
	} else if (x == "01,11") {
  		answer = "The lecturer seems quite nervous. I sense that she is not the type of person that easily speaks in front of an audience.";
	} else if (x == "01,12") {
  		answer = "Now that I finally have a new lens, I could check out the night sky.";
	} else if (x == "01,13") {
  		answer = "Hmmm, this looks like another code for something. I knew that my mother had secrets, but she was even more enigmatic than I could have imagined.";
	} else if (x == "01,14") {
  		answer = "My mother never spoke about her. I would really like to meet her, she could know more about my mother’s past. I can’t help but wonder why did my mother put her letter in the safe? It’s almost as if she wanted to keep her whereabouts secret from someone.";
	} else if (x == "01,15") {
  		answer = "What can I say about my phone...it’s a useful tool.";
	} else if (x == "01,16") {
  		answer = "It’s magical as always…I can recognize some of the constellations.";
	} else if (x == "01,17") {
  		answer = "What a strange book! It’s just a bunch of stars with 4 digit numbers written next to it. And all in my mother’s handwriting. Why would she hide this in Sinbad the Sailor cover?";
	} else if (x == "01,18") {
  		answer = "That’s great, now the projector is working!";
	} else if (x == "01,19") {
  		answer = "I have a feeling these cookies will be amazing.";
	} else if (x == "01,20") {
  		answer = "This projector could be useful. I wonder if I could borrow it.";
	} else if (x == "01,21") {
  		answer = "I never noticed this photo before. My mother must have framed it after I moved out. Where was the photo taken? That’s a really nice piece of street art, but I’m not an expert on the subject.";
	} else if (x == "01,22") {
  		answer = "With Jocelyn out of the picture, all I have to do is figure out her password to get inside the computer.";
	} else if (x == "01,23") {
  		answer = "My mother was in a way also my best friend. She had this magic power to make you feel better just by looking at you. But I always felt as if she was keeping secrets from me.";
	} else if (x == "01,24") {
  		answer = "I’m a complete amateur when it comes to baking, but my mother was pretty good in it.";
	} else if (x == "01,25") {
  		answer = "Oh no! I was excited to look at the sky tonight. It was a little ritual my mother and I did together.";
	} else if (x == "01,26") {
  		answer = "Maybe I could do something about this tea to make it a bit more interesting…";
	} else if (x == "01,27") {
  		answer = "It’s the recipe for Laika’s favourite cookies. But what is this language? Couldn’t my mother have had it translated?";
	} else if (x == "01,28") {
  		answer = "This gem is the family heritage. My mother told me I would get it when I’m old enough. I guess she gave it to Laika for safe keeping, knowing I’d find it? This green colour is absolutely enchanting.";
	} else if (x == "01,29") {
  		answer = "The professor keeps his tests on the desk. If I could get him to move for a bit, I could get a better glance at them.";
	} else if (x == "01,30") {
  		answer = "There must be something important inside if my mother gave it to friends for safekeeping.";
	} else if (x == "01,31") {
  		answer = "Poor Jamie! There is a big chance he will fail this year of university.";
	} else if (x == "01,32") {
  		answer = "Laika, is it just me or do I actually hear your thoughts right now?";
	} else if (x == "01,33") {
  		answer = "Why would my mother delete everything from her computer in the Earthlings association?";
	} else if (x == "01,34") {
  		answer = "A device I’m not very familiar with.";
	} else if (x == "01,35") {
  		answer = "Where could I leave my little mark?";
	} else if (x == "01,36") {
  		answer = "I can’t wait till autumn to get some pumpkin! Maybe if I could somehow speak to the sprout I could make it grow faster.";
	} else if (x == "01,37") {
  		answer = "This flag goes up at the same time every day, followed by the university song on the speakers. A very boring tradition, if you ask me.";
	} else if (x == "01,38") {
  		answer = "What a useful thing. It can be very handy in outdoors situations.";
	} else if (x == "01,39") {
  		answer = "I don’t know what this number could mean, but maybe somebody at the library could have an idea about it.";
	} else if (x == "01,40") {
  		answer = "Fortunatelly, this recipe is very simple. Even I can handle it with my poor culinary skills.";
	} else if (x == "01,41") {
  		answer = "Now that’s a full grown pumpkin ready to be picked!";
	} else if (x == "01,42") {
  		answer = "She knows a lot about street art. Maybe she could know something about the mural on the photo with Mary.";
	} else if (x == "01,43") {
  		answer = "If I could get Jocelyn to leave the table I could look into her computer.";
	} else if (x == "01,44") {
  		answer = "Jocelyn’s tea cup is empty. Maybe she would like another one?";
	} else if (x == "01,45" || x == "01,54") {
  		answer = "So the photo must have come with the letter. Maybe I could figure out Mary’s address from her story.";
	} else if (x == "01,46") {
  		answer = "Ok, I have a moment to look at the tests before professor Martin comes back.";
	} else if (x == "01,47") {
  		answer = "Voila! I can now give the photo to Jamie.";
	} else if (x == "01,48") {
  		answer = "The last ingredient is in!";
	} else if (x == "01,49") {
  		answer = "A pair of scissors. Not much to say about this.";
	} else if (x == "01,50") {
  		answer = "Mmmm, homemade peanut butter. Laika likes it as much as I do.";
	} else if (x == "01,51") {
  		answer = "If I wasn’t in the middle of an investigation, I would have loved to have a coffee and a chat with this guy. He seems nice.";
	} else if (x == "01,52") {
  		answer = "He seems to be very passionate about his job.";
	} else if (x == "01,53") {
  		answer = "I should find a way to destroy the lecture without anybody suspecting me.";
	} else if (x == "01,55") {
  		answer = "Alright! Now I can buy the lens!";
	} else if (x == "01,56") {
  		answer = "Why would my mother keep this article in the safe? Was she leaving me some kind of a message?";
	} else if (x == "01,57") {
  		answer = "My mineralogy professor is an expert in his field and has some of the most interesting lectures in the university. His tests are not easy to pass, though.";
	} else if (x == "01,58") {
  		answer = "Finished! I hope this can cheer Laika up a bit.";
	} else if (x == "01,59") {
  		answer = "I don’t get a good vibe from this guy. But he fights for a good cause and I appreciate it.";
	} else if (x == "01,60") {
  		answer = "Now where could I use this natural laxative?";
	} else if (x == "01,61") {
  		answer = "I don’t know am I going crazy or is this really happening. I actually feel like I can sense the tree in the garden. And I swear that I feel how Laika misses my mother. Maybe I’m getting so lonely that I’m starting to imagine things.";
	} else if (x == "01,62") {
  		answer = "Well well, this shoud get Jocelyn going to the toilet any minute now.";
	} else if (x == "01,63") {
  		answer = "So this is where her record player and all the records are. I was wondering why I didn’t see them in the house.";
	} else if (x == "01,64") {
  		answer = "This looks like some kind of a riddle. Look at the sky...is it connected to the telescope?";
	} else if (x == "06,01") {
			answer = "Hello! It’s really a pleasure to meet you. I was friends with Lena, she told me so much about you. I’m so sorry that she’s gone. I don’t know what to say. Actually, there is something I should tell you...Lena gave us a safe to keep it for her. But now that she’s gone, I think it’s best you have it. Could you stop by my house and get it? My wife is home, she’ll get it for you. <br><i>Take card <b>G</b>.</i>";
	} else if (x == "06,01") {
			answer = "I don’t know him, sorry.";
	} else if (x == "06,02" || x == "06,24") {
			answer = "Thank you, we brought enough food for the protest camp.";
	} else if (x == "06,03" || x == "06,32") {
			answer = "I love this dog.";
	} else if (x == "06,04") {
			answer = "Thanks, I have no use of it at the moment.";
	} else if (x == "06,05") {
			answer = "Lena had a cabin? She never took us there.";
	} else if (x == "06,06") {
			answer = "I’ve been in the Earthlings association for a long time now, and Lena and I were great friends. Even though we didn’t see eye to eye on everything, our friendship didn’t suffer from it. Actually, Lena gave something for safekeeping to me and my wife. I believe it’s better that you have it, now that she’s no longer with us. Can you go to our farm outside the city to get it? My wife is at home, she’ll be happy to meet you. <br><i>Take card <b>G</b>.</i>";
	} else if (x == "06,07") {
			answer = "Well as you can see, I’ll be spending my evening here. Next time, maybe.";
	} else if (x == "06,08") {
			answer = "That’s wonderful! Lena never told me she had it. It must have been an expensive edition, look how authentic it seems!";
	} else if (x == "06,09") {
			answer = "Of course I knew that Lena worked in the library. I went to the tea shop next door with her a few times. But I never met her colleague.";
	} else if (x == "06,10") {
			answer = "That’s my wife. She was friends with Lena too. We used to spend evenings at our farm, having dinner, talking, listening to music...I’m sorry, it’s difficult to believe that Lena is gone.";
	} else if (x == "06,11") {
			answer = "Sorry, I’ve never heard of her.";
	} else if (x == "06,12") {
			answer = "That’s great, but we don’t own a telescope. Stargazing was Lena’s hobby, we didn’t really participate in it.";
	} else if (x == "06,13") {
			answer = "This must mean something. I wish I could help you but my puzzle solving skills are limited.";
	} else if (x == "06,14") {
			answer = "Lena did speak of her friend Mary a few times. It was clear that they grew apart a long time ago and that she misses her a lot.";
	} else if (x == "06,15") {
			answer = "Here’s my phone number. Call me anytime.";
	} else if (x == "06,16") {
			answer = "Beautiful! I know that Lena was obssesed with stars, it seems that you’ve inherited the passion from her.";
	} else if (x == "06,17") {
			answer = "Well, it looks like a lot of work to write all of this. Why is there a number next to each star? I don’t know, maybe Lena had her system of star denotation.";
	} else if (x == "06,18") {
			answer = "Thank you, but I don’t think we can find a use for it here.";
	} else if (x == "06,19" || x == "06,40" || x == "06,48") {
			answer = "I remember that Lena used to make some special cookies for Laika. I don’t know the recipe unfortunatelly.";
	} else if (x == "06,21") {
			answer = "Sorry, but the mural doesn’t seem familiar.";
	} else if (x == "06,22") {
			answer = "I don’t know how to help you with this. Actually, I don’t really want to get involved with messing up somebody’s property.";
	} else if (x == "06,23") {
			answer = "Lena was a great friend. I miss her a lot. She left Earthlings some time ago, because of a quarrel she had with Nathan. The two of us tried not to let it influence our friendship, even if I didn’t agree with the way she quit. It’s not that I judge her, only that I didn’t like that she intentionally hacked her computer in the association to make all the information on it unreachable. She told me this in confidence, and explained that she wasn’t sure about the information in the association were safe. She believed that we were observed by somebody from the outside. It was a little parranoid, if you ask me. I never told this to anybody, not even Nathan. I didn’t want to raise even more tension between them. She did it with an SD card that holds a virus, and gave it to me afterwards, in case that I might want to use it too. You just have to insert it and it takes care of everything, leaving a false trace that the attack was made from outside, like an online connection. Could I give the SD card to you actually? I feel bad for holding it all this time. Oh, and one more thing. Lena left something to me and my wife for safekeeping. We have it at our farm outside the city. I think you should have it now that she’s gone. Could you go there and take it? My wife will be home all day. <br><i>Take cards <b>33</b> and <b>G</b>";
	} else if (x == "06,34") {
			answer = "Lena was a great cook. And baked goods were her specialty.";
	} else if (x == "06,25") {
			answer = "Oh, I’d really like to help you, but I’m short on money at the moment. And I probably will be for years to come. I bought a house with my wife just outside the city, and it wasn’t a bargain.";
	} else if (x == "06,26") {
			answer = "Thank you, we brought enough drinks for the protest camp.";
	} else if (x == "06,27") {
			answer = "I remember that Lena used to make some special cookies for Laika. I can’t read this recipe unfortunatelly.";
	} else if (x == "06,28") {
			answer = "Of course I remember this gem Lena used to wear. Nathan was always criticising any of us wearing expensive jewelry, he said it send a wrong kind of message. But Lena didn’t care about this, she said it connects her to her origins.";
	} else if (x == "06,29" || x == "06,46") {
			answer = "Mineralogy is not really my specialty, sorry.";
	} else if (x == "06,30") {
			answer = "Ah, you got it from Emma. Great! Sorry, but I don’t have an idea what the combination could be, Lena said nothing about it.";
	} else if (x == "06,31") {
			answer = "I can’t say that I’ve met him.";
	} else if (x == "06,33") {
			answer = "That’s the card with the virus Lena gave me. Do what you want with it, I’m not confortable with having it on me.";
	} else if (x == "06,35") {
			answer = "I don’t think I’ll be needing it, thanks.";
	} else if (x == "06,36") {
			answer = "Yes, we grow pumpkins in our garden. It’s not the season yet, though, so I can’t offer you any.";
	} else if (x == "06,37") {
			answer = "I wasn’t a student of your university, so I can’t tell you anything about the flag.";
	} else if (x == "06,38") {
			answer = "Yes, it’s mine. You can borrow it, sure. We have another one, I think it will suffice till tomorrow.";
	} else if (x == "06,39") {
			answer = "This is Lena’s library logo. As for the numbers below, I don’t know what could they mean.";
	} else if (x == "06,41") {
			answer = "You’re telling me that this pumpkin is from our garden? How is it possible?";
	} else if (x == "06,42") {
			answer = "Sorry, but I don’t really follow street art scene.";
	} else if (x == "06,20" || x == "06,43") {
			answer = "I’m not sure what to say about this.";
	} else if (x == "06,44" || x == "06,50") {
			answer = "Thank you, we brought enough tableware for the protest camp.";
	} else if (x == "06,45" || x == "06,54") {
			answer = "I don’t know what this letter could mean. The way it’s written is a bit unusual, right?";
	} else if (x == "06,47") {
			answer = "Ziggy, I don’t plan to lecture you, but cheating on tests is not the best decision to make.";
	} else if (x == "06,49") {
			answer = "Thanks, I don’t think I’ll be needing them.";
	} else if (x == "06,51") {
			answer = "I think he works in the tea shop next to the library, doesn’t he?";
	} else if (x == "06,52") {
			answer = "No, I can’t say that I’ve met him.";
	} else if (x == "06,53") {
			answer = "I don’t know how to help you with this. Actually, I don’t really want to get involved with messing up somebody’s property.";
	} else if (x == "06,55") {
			answer = "That’s really kind of you, but taking your money is out of the question.";
	} else if (x == "06,56") {
			answer = "I guess that Lena kept this because of her doubt in IBOR’s sincerity. She had a dispute with Nathan about them sponsoring our association as a part of their ‘going green’ policy. That’s why she left Earthlings actually. She was not even giving them a change to prove her wrong, if you ask me. Probably she was conducting a research of her own, you know how stubborn she could be when she put her finger on something.";
	} else if (x == "06,57") {
			answer = "I wasn’t a student of your university, so I can’t say that I’ve met your professor.";
	} else if (x == "06,58") {
			answer = "You made Laika her favourite cookies? That must cheer her up.";
	} else if (x == "06,59") {
			answer = "Nathan is the leader of Earthlings. He dedicated his life to it. It’s true that he had a dispute with Lena, after which she quit the association. Actually, the reason was that Earthlings have recently been funded by IBOR, the oil company. It seems strange, I know, but they have a new green policy which includes funding environmental organisations amongst other things. Nathan accepted the offer, saying that we should welcome these offers and reassuring us that he’s carefully read the document of their plan, and that it’s a real switch to a green economy. Lena was not convinced, and she basically said that Nathan sold us to a dangerous polluter who now has all the means to control us. She even faked a hacking of her own computer before leaving Earthlings, to make sure that nobody could get any data out of it once she’s gone. She put a virus with an SD card that corrupted all the files and left a false trace of an outside attack, to make it seem like it was hacked by somebody online. Nathan didn’t figure this out, I think. She told me about it because she thought I’d be on her side on this, but I must say that I find her actions too paranoid. She gave me the card to do the same with my computer, but I never used it. Actually, take it. I’m not happy with the fact that I’m holding it all this time. As well as lying to Nathan. <br><i>Take card <b>33</b>.</i> ";
	} else if (x == "06,60") {
			answer = "Yes, we have a senna plant in the garden. Feel free to pick a few leaves.";
	} else if (x == "06,61") {
			answer = "Now when you speak of it, I remember that Lena had this ‘special power’ too. She could easily diagnose all the problems in the garden and helped us make it better. We are still amateurs in cultivating our own food, but she seemed to know everything just by looking at it. When I asked her was she raised on a farm, she just said: “Something like that.”";
	} else if (x == "06,62") {
			answer = "Senna leaves are excellent for digestion, but be careful with the dosage. If you put too much, It can make you run to the toilet pretty fast.";
	} else if (x == "06,63") {
			answer = "I know that Lena had a record player and a nice collection of records. She used to say that music is human’s most beautiful creation.";
	} else if (x == "06,64") {
			answer = "This is all very enigmatic. I can’t make sense of it, sorry.";
	} else if (x == "09,01") {
  		answer = "Hello my dear. It’s really nice to see you! I’m so sorry about Lena, how are you holding up? If there’s anything I can do for you, please let me know.";
	} else if (x == "09,02") {
  		answer = "Thank you dear, but I don’t need any eggs.";
	} else if (x == "09,03" || x == "09,32") {
  		answer = "I’m sure that poor Laika is devastated. She was so attached to your mother.";
	} else if (x == "09,04") {
  		answer = "Take it, just return it tomorrow.";
	} else if (x == "09,05") {
			answer = "Hm, I didn’t know that Lena had a cabin. I’m afraid I can’t help you with the lock combination.";
	} else if (x == "09,06") {
			answer = "I’m sorry, but I don’t know this man.";
	} else if (x == "09,07") {
  		answer = "Yes, Jocelyn Hill will be giving a lecture here tonight. She came an hour ago and she is very nervous about the lecture. She went to calm down in the tea shop next door. The lecture should be interesting. Did you know that there is a town in Bavaria that was built on a meteor impact crater? The fact was discovered in 20th century, they thought it was a volcanic crater before. <i>Search the internet</i> <br><i>Take card <b>E</b>.</i>";
	} else if (x == "09,08") {
  		answer = "Oh, it’s a copy of the Golden Record? How peculiar. Well, Lena always did have a peculiar taste.";
	} else if (x == "09,09") {
  		answer = "I’ve worked here for 15 years. And I must say that things started to be more interesting when your mother came to work with us. She organized all kinds of events, concerts, poetry readings, workshops...I’ll try to keep the same spirit in the library now that she’ gone. She would have liked it that way.";
	} else if (x == "09,10") {
  		answer = "I’m sorry but I’ve never met this woman.";
	} else if (x == "09,11") {
  		answer = "I’ve never seen somebody so stressed about speaking in front of people. It’s not like she’ll be speaking in a stadium, I’d be surprised if we had more than 50 people in the audience.";
	} else if (x == "09,12") {
  		answer = "I’m sorry but I can’t help you with this. I don’t know anything about skygazing.";
	} else if (x == "09,13") {
  		answer = "Hm, I can’t imagine what did your mother mean by this.";
	} else if (x == "09,14") {
  		answer = "I can’t recall your mother mentioning somebody named Mary. But she did speak a few times about a long lost friend living somewhere in the US. They had a different opinion about a very important thing, that’s what she said. Maybe it was this Mary she was talking about.";
	} else if (x == "09,15") {
  		answer = "I can give you my number. Call me anytime.";
	} else if (x == "09,16") {
			answer = "That’s really beautiful. I’m sure you’re better with these things than I am, though. The only constellation I can recognize in the sky is the Great Bear.";
	} else if (x == "09,17") {
  		answer = "Hm, this is not from our library. Actually, it seems that it was handwritten by Lena. It’s her handwriting, isn’t it? And where is the original book, I’m shocked that Lena took it!";
	} else if (x == "09,18") {
			answer = "Well, you managed to get power to use the projector outside. Great! Just take good care of it please.";
	} else if (x == "09,19" || x == "09,40" || x == "09,48") {
  		answer = "Thank you, but I don’t have a dog. Also, the cookies are not yet finished, right?";
	} else if (x == "09,20") {
			answer = "You would like to borrow the projector? Of course I would like to help you, but unfortunatelly there is a lecture here tonight and we will be using it. I could probably let you have it tomorrow if that’s alright.";
	} else if (x == "09,21") {
  		answer = "I can’t help you with identifying the mural. We have a book on street art, but it’s not very up to date.";
	} else if (x == "09,22") {
  		answer = "Keep an eye on it, Jocelyn would go crazy if something happened to her lecture.";
	} else if (x == "09,23") {
  		answer = "I miss Lena so much! She was a beautiful soul. She did everything with so much passion. That is until her illness slowed her down. Remember how engaged she was in this activist association, Earthlings? Why did she quit anyway, she never told me. I heard they were protesting in Deansgate on the radio this morning. <br><i>Take card <b>F</b>.</i>";
	} else if (x == "09,24") {
			answer = "Thank you dear, I don’t need any flour right now.";
	} else if (x == "09,25") {
  		answer = "Yes, I know that Lena was a passionate amateur astronomer. The lens is broken? I wish I could help you with that, but my paycheck is not until the beginning of next month and I’m kind of broke at the moment.";
	} else if (x == "09,26") {
  		answer = "Thank you dear, I already had my tea.";
	} else if (x == "09,27") {
  		answer = "Oh, it’s kind of you to share the recipe with me, but I don’t have a dog. What is this language anyway, Swahili?";
	} else if (x == "09,28") {
  		answer = "I remember this gem! Lena would always have it with her. Sometimes she would joke that it gives her magic powers. It’s stunning, isn’t it?";
	} else if (x == "09,29") {
  		answer = "I don’t understand why are you asking me about this. Would you like some literature on mineralogy?";
	} else if (x == "09,30") {
  		answer = "Oh, I’ve never seen this.";
	} else if (x == "09,31") {
			answer = "I’m afraid I don’t know this young man.";
	} else if (x == "09,33") {
			answer = "I’m completely lost with technology. Lena was dealing with all the computers in the library, I’m very old fashioned I’m afraid.";
	} else if (x == "09,34") {
			answer = "I can show you how to use the oven, dear.";
	} else if (x == "09,35") {
			answer = "I’m not a big fan of street art, if I’m being honest.";
	} else if (x == "09,36") {
			answer = "I’m aware that it’s a bit early for pumpkin. You’ll have to wait a bit longer I’m afraid.";
	} else if (x == "09,37") {
			answer = "I heard your university I quite good. Education is very important, Ziggy.";
	} else if (x == "09,38") {
			answer = "Oh, a very useful thing if for an outdoors person.";
	} else if (x == "09,39") {
			answer = "Let me see this...This is a code for a book from our library. Let me just check in our database...It’s in the basement, where we keep only rare editions. Let me get it for you. <br><i>Take card <b>17</b>. Remove card <b>39</b>.</i>";
	} else if (x == "09,41") {
			answer = "What a beautiful pumpkin! Where did you get it, it’s not pumpkin season yet?";
	} else if (x == "09,42") {
			answer = "I’m not familiar with Loomey’s work. I’m a book person, I find visual arts a bit hard to understand.";
	} else if (x == "09,43") {
			answer = "She has the lecture on the computer. I think she spent all afternoon reading and memorising it.";
	} else if (x == "09,44") {
			answer = "She drinks tea all afternoon. She says it’s good for relaxing.";
	} else if (x == "09,45" || x == "09,54") {
			answer = "What a curious letter. I would like to help you find her address, but it’s a bit hard without knowing what city she lives in. Your mother did mention a long lost friend a few times, that she misses a lot. Maybe it was this Mary she was talking about.";
	} else if (x == "09,46" || x == "09,47") {
			answer = "Ziggy, don’t tell me you’re cheating on your tests? Lena would be very dissapointed!";
	} else if (x == "09,49") {
			answer = "I have scissors, thank you. I keep a pair here in the library too.";
	} else if (x == "09,50") {
			answer = "I don’t really like peanut butter, thank you.";
	} else if (x == "09,51") {
			answer = "It’s that nice barista from the tea shop. He always welcomes you with a smile.";
	} else if (x == "09,52") {
			answer = "I’ve never met him, but I’m aware of your mother’s fascination with space.";
	} else if (x == "09,53") {
			answer = "She left her computer open? That’s strange, she’s very protective of it. She has her lecture on it, you know.";
	} else if (x == "09,55") {
			answer = "Where did you get all this money? Use it wisely my dear.";
	} else if (x == "09,56") {
			answer = "I don’t know why would your mother keep this article.";
	} else if (x == "09,57") {
			answer = "I’ve seen professor Martin a few times in the library. A very charming and interesting man.";
	} else if (x == "09,58") {
			answer = "Thank you darling, but I believe that those are dog cookies, right?";
	} else if (x == "09,59") {
			answer = "I’ve seen him on television, he is the leader of the activist group that your mother used to be a part of.";
	} else if (x == "09,60") {
			answer = "I can look it up in a book...Here it is! So, senna leaves are widely used as a natural laxative.";
	} else if (x == "09,61") {
			answer = "We can all have these feelings of deep connection with the nature sometimes.";
	} else if (x == "09,62") {
			answer = "Thank you dear, I already had my tea.";
	} else if (x == "09,63") {
			answer = "It’s a very nice record player. Your mother liked these vintage things. She said that it was the first way she experienced music.";
	} else if (x == "09,64") {
			answer = "Why, I’m really not sure what this could be about. It seems to mention some parts of Sinbad’s journeys.";
	} else if (x == "10,01") {
			answer = "What a pleasure to finally meet you, Ziggy. Lena told us so much about you. She was very proud of you!";
	} else if (x == "10,02") {
			answer = "Actually, Lena used to buy the eggs of our neighbour. We have many local producers living near by.";
	} else if (x == "10,03" || x == "10,32") {
			answer = "Lena used to bring Laika with her sometimes. She’s a great dog. Actually, why don’t you bring her here while you’re at the university so that she’s not all alone in the house.";
	} else if (x == "10,04") {
			answer = "It’s a good projector. We don’t watch a lot of films here, we usualy play board games.";
	} else if (x == "10,05") {
				answer = "Lena never spoke of this cabin. I guess it was her little sanctuary.";
	} else if (x == "10,06") {
			answer = "My husband is very active in Earthlings still. He’s at a protest right now. We was a bit upset when Lena left the association, but he didn’t tell me the details about it.";
	} else if (x == "10,07") {
			answer = "There’s a lecture in the library tonight?";
	} else if (x == "10,08") {
			answer = "Wow, this looks really authentic. I know that there was a box set of the Golden Record published, but it didn’t look like this. Lena must have had this custom made.";
	} else if (x == "10,09") {
			answer = "I’ve never met Lena’s colleague.";
	} else if (x == "10,10") {
			answer = "Gavin and I have lived here for the past five years. It was a bit hard to get used to country life in the beginning, but I would never return to the city now. I love our garden, I love all the piece, I love the fresh air. Our kids love it too.";
	} else if (x == "10,11") {
			answer = "I’ve never heard of her. You say that she is giving a lecture in the library tonight?";
	} else if (x == "10,12") {
			answer = "This must have been expensive. So don’t let me near it, I can be very clumsy!";
	} else if (x == "10,13") {
			answer = "Look at that...It almost looks like a code for something.";
	} else if (x == "10,14") {
			answer = "Actually, Lena did mention a friend named Mary. They used to be very close but they grew apart because of a different point of view on something. She got very emotional when she was telling me this. She said that nobody could ever understand her like Mary did.";
	} else if (x == "10,15") {
			answer = "Take my phone number.";
	} else if (x == "10,16") {
			answer = "Wow, how beautiful. I would like to know more about stars.";
	} else if (x == "10,17") {
			answer = "Wow, I knew that Lena was an astronomy fan, but this looks more complex than an amateur effort.";
	} else if (x == "10,18") {
			answer = "A good idea to use Gavin’s generator to power up the projector.";
	} else if (x == "10,19") {
			answer = "This shoud be yummy.";
	} else if (x == "10,20") {
			answer = "You want to borrow the projector, but there is a lecture tonight? I don’t know what to say, to bad that the lecture is not happening some other day.";
	} else if (x == "10,21") {
			answer = "Oh, I really like the mural in the photo, but I have no idea who could the artist be. Or where the photo could have been taken.";
	} else if (x == "10,22") {
			answer = "Girl, it’s really not a good idea to break into someone’s computer.";
	} else if (x == "10,23") {
			answer = "Lena was our dear friend. We grew close a few years ago, as she became friends with Gavin in the association. And we continued to see each other after she left. I don’t exactly know what was the reason she quit, Gavin probably knows more. Anyway, she left me a safe with a digital lock for safekeeping. All of this happened around 6 months ago. She said it’s wiser to leave it here than in the house. I don’t know what was she afraid of. She said to give it to you if something happens to her. She found out about her illness just a couple of weeks after, poor thing. Here, take the safe. <br><i>Take card <b>30</b>.</i>";
	} else if (x == "10,24") {
			answer = "Thanks, I have enough flour.";
	} else if (x == "10,25") {
			answer = "Sorry, I really can’t help you with this. We’re still paying off the house, so we’re saving every cent.";
	} else if (x == "10,26") {
			answer = "Thanks, but you really didn’t have to bother to carry this cup of tea all this way. I have plenty of herbal tea right here.";
	} else if (x == "10,27") {
			answer = "I don’t understand a word of this, sorry.";
	} else if (x == "10,28") {
			answer = "It’s so beautiful, isn’t it? Lena used to wear it. What is it exactly, a type of emerald?";
	} else if (x == "10,29") {
			answer = "I don’t know how could I help you with mineralogy tests.";
	} else if (x == "10,30") {
			answer = "Lena asked me to keep it for her. I don’t know what’s inside and I don’t have a clue on the combination unfortunately.";
	} else if (x == "10,31") {
			answer = "I dont now this guy, sorry.";
	} else if (x == "10,33") {
			answer = "Gavin told me about this, but when I asked Lena why did she put a virus on her computer in the association she was a bit vague. She only said that she didn’t want any of the information to fall into the wrong hands.";
	} else if (x == "10,34") {
			answer = "Thanks, I have an oven in my kitchen.";
	} else if (x == "10,35") {
			answer = "I don’t need it for the moment, but if I decide to do some art on my house I’ll let you know.";
	} else if (x == "10,36") {
			answer = "Yes, we grow pumpkins. It will take about 3 months for a ripe fruit to develop.";
	} else if (x == "10,37") {
			answer = "So, how are things going at the university?";
	} else if (x == "10,38") {
			answer = "This is Gavin’s, right? Of course you can borrow it, go ahead!";
	} else if (x == "10,39") {
			answer = "Hm, maybe you should check it out in Lena’s library.";
	} else if (x == "10,40") {
			answer = "Looks good!";
	} else if (x == "10,41") {
			answer = "What? How is this possible? I swear that I don’t use any chemicals. Even if I did, this would be crazy! Sure, you can take this magic pumpkin, I’d be scared to eat it anyway.";
	} else if (x == "10,42") {
			answer = "I’ve seen her work, it’s nice, right?";
	} else if (x == "10,43" || x == "10,53") {
			answer = "I don’t know much about computers.";
	} else if (x == "10,44") {
			answer = "I have enough cups already. Besides, I’m not very keen on stealing from bars.";
	} else if (x == "10,45" || x == "10,54") {
			answer = "Hm, this letter sounds almost like a riddle. You could probably figure out where she lives if you follow her path. And if you knew where to start, of course. Nad yes, Lena did mention a friend named Mary. They used to be very close but they grew apart because of a different point of view on something.";
	} else if (x == "10,46" || x == "10,47") {
			answer = "Cheating on your test is not something you should be proud about.";
	} else if (x == "10,48") {
			answer = "Smells nice!";
	} else if (x == "10,49") {
			answer = "Thanks, I’ve got a lot of them.";
	} else if (x == "10,50") {
			answer = "Ah, Lena’s peanut butter. My kids love it.";
	} else if (x == "10,51") {
			answer = "I’ve never been it that tea shop, so I’ve never seen the man.";
	} else if (x == "10,52") {
			answer = "I don’t think we’ll be getting a telescope anytime soon, but if we do, it’s good to know who to ask.";
	} else if (x == "10,55") {
			answer = "Thanks Ziggy, but I won’t take your money. Keep it, I’m sure it will be useful.";
	} else if (x == "10,56") {
			answer = "I’m not completely sure, but I think that Gavin said that this oil company is changing it’s policy and plans to shift most of their production to reneweble energy sources. I think they even fund some of the activist organisations now, Earthlings included.";
	} else if (x == "10,57") {
			answer = "I’ve never heard of your professor.";
	} else if (x == "10,58") {
			answer = "It looks as if you did a very good job.";
	} else if (x == "10,59") {
			answer = "That’s the leader of Eatrhlings. Lena and him got into a fight, which ended with Lena quitting the association. I don’t know exactly what the fight was about.";
	} else if (x == "10,60") {
			answer = "Sure, you can take some. It’s great for digestion, works like a natural laxative. A couple of leaves in your tea will do the trick.";
	} else if (x == "10,61") {
			answer = "I know what you mean. I feel like this since I moved to the countryside.";
	} else if (x == "10,62") {
			answer = "I’m not really in a mood for tea, thank you.";
	} else if (x == "10,63") {
			answer = "It’s a nice record player.";
	} else if (x == "10,64") {
			answer = "Sorry Ziggy, but this looks like gibberish to me.";
	} else if (x == "11,01") {
			answer = "Hello, nice to meet you. Your mother used to work at the library? I’m so sorry for your loss.";
	} else if (x == "11,02") {
			answer = "Thanks, I’ll take one. They say it’s good for your voice.";
	} else if (x == "11,03" || x == "11,32") {
			answer = "What a cute dog!";
	} else if (x == "11,05") {
			answer = "I don't know what does Shedar mean. I can’t imagine why would your mother write this on her cabin door.";
	} else if (x == "11,06") {
			answer = "I’ve never seen him.";
	} else if (x == "11,07") {
			answer = "Yes, I’m giving the lecture. Does it show that I’m freaking out about it? I get all stressed out when I’m supposed to talk in front of people. My mind becomes empty and I lose my words...It’s a nightmare!";
	} else if (x == "11,08") {
			answer = "That’s amazing work. Where did your mother get such a credible copy?";
	} else if (x == "11,09") {
			answer = "She tried to calm me down, but it’s useless. I can’t wait to get it over with.";
	} else if (x == "11,10") {
			answer = "I don’t know this woman.";
	} else if (x == "11,11") {
			answer = "I’m a passionate traveler, and a historian by education. I wrote a couple of books, combining historic facts to the experiences I had during my journeys. I love writing, the problem arrives when I’m supposed to speak in front on people.";
	} else if (x == "11,12") {
			answer = "That’s a telescope lens? I don’t know a lot about stargazing.";
	} else if (x == "11,13") {
			answer = "It seems to be a code for a 4 digit number. I love puzzle, but I really don’t have time for it now.";
	} else if (x == "11,14") {
			answer = "I’m sorry, but I’ve never met your mother. So I wouldn’t know anything about her friends.";
	} else if (x == "11,15") {
			answer = "I think we don’t know each other well enough to exchange phone numbers.";
	} else if (x == "11,16") {
			answer = "It’s amazing, the universe I mean. Isn’t it?";
	} else if (x == "11,17") {
			answer = "This seems interesting, for someone who is into stars at least. But I really don’t have time for it now.";
	} else if (x == "11,19" || x == "11,24" || x == "11,34" || x == "11,35" || x == "11,36" || x == "11,38" || x == "11,40" || x == "11,41" || x == "11,48" || x == "11,50" || x == "11,58") {
			answer = "I’m really sorry, but I don’t have time for meaningless questions. I have to work on my lecture.";
	} else if (x == "11,20") {
			answer = "I will be using the projector tonight. I’m sorry, but borrowing it is out of the question. My lecture would be terrible without images.";
	} else if (x == "11,21") {
			answer = "I’m not familiar with the mural in the photo. ";
	} else if (x == "11,23") {
			answer = "I’m really sorry to hear about your mother. I’ve never met her unfortunately.";
	} else if (x == "11,25") {
			answer = "I’m sorry, but I have no experience in telescopes.";
	} else if (x == "11,26") {
			answer = "Thank you so much, that’s really nice of you. Sluuuurp! <br><i>Take card <b>44</b> from the rejected pile. Return card <b>26</b> to the deck.</i>";
	} else if (x == "11,27") {
			answer = "This could be Swahili. I’ve visited Africa a couple of times. But I coudn’t translate it unfortunately.";
	} else if (x == "11,28") {
			answer = "That’s absolutely stunning! I’ve never seen anything like it. Where did you get it from?";
	} else if (x == "11,29") {
			answer = "I’m not an expert in mineralogy, but I know a little. Unfortunately I really don’t have time for it right now.";
	} else if (x == "11,30") {
			answer = "I can’t help you with this.";
	} else if (x == "11,31") {
			answer = "I’ve never seen him.";
	} else if (x == "11,33") {
			answer = "I’m not a computer person, I really only use it as a tool but don’t understand anything about it.";
	} else if (x == "11,37") {
			answer = "I went to Manchester University. It was a beautiful time of my life.";
	} else if (x == "11,39") {
			answer = "This is a logo of the library I’m giving the lecture at this evening. And this number...I don’t know what it could be.";
	} else if (x == "11,42") {
			answer = "I’ve seen a mural of Loomey in Munich. She is pretty good, isn’t she?";
	} else if (x == "11,43") {
			answer = "I have my lecture on it. So at the moment, it’s my most precious possession.";
	} else if (x == "11,44") {
			answer = "I would love another cup of tea, thank you so much.";
	} else if (x == "11,45" || x == "11,54" || x == "11,64") {
			answer = "This looks like a puzzle. I’m a big fan of puzzles, but I really don’t have time for this right now.";
	} else if (x == "11,46" || x == "12,47") {
			answer = "I’ve never cheated on tests. And I’m absolutely against it.";
	} else if (x == "11,49") {
			answer = "Why are you showing me these scissors? Can’t you see that I don’t have time for this?";
	} else if (x == "11,51") {
			answer = "He’s nice. He had the patience to listen to my fears about tonight. He was very supportive.";
	} else if (x == "11,52") {
			answer = "I’ve never seen him. Where is this shop?";
	} else if (x == "11,55") {
			answer = "Money will not help me in this situation, but thank you for trying.";
	} else if (x == "11,56") {
			answer = "I remember I saw this in the newspapers. Well, let’s hope that that’s not just a PR trick.";
	} else if (x == "11,57") {
			answer = "I wasn’t a student of professor Martin, I studied history in the university. But I hear that he is a great professor.";
	} else if (x == "11,59") {
			answer = "I’ve heard of him, he is the head of Earthlings, right? I appreciate their efforts, we must take better care of the planet.";
	} else if (x == "11,60") {
			answer = "No, thank you. The last thing I need now is to be running to the toilet every ten minutes.";
	} else if (x == "11,61") {
			answer = "Are you talking about a form of biophilia? I find the theory very interesting.";
	} else if (x == "11,62") {
			answer = "Thank you, that’s really nice of you. Sluuuurp! <br><i>Jocelyn drinks her tea and a few minutes after she excuses her, asks you to look after her computer and runs to the toilet. <br>Take card <b>22</b>. Remove cards <b>43</b> and <b>62</b>.</i>";
	} else if (x == "11,63") {
			answer = "To would think that a historian likes vintage things, but I prefer to listen to music in a digital form.";
	} else if (x == "14,01" || x == "14,14" || x == "14,23") {
			answer = "I can’t believe I’m speaking to you, Ziggy. The last time I saw you, you were a baby, and now you’re all grown up...Lena died? How terrible. I never got a chance to say goodbye...<br><i> Mary’s voice breaks, as she struggles not to burst into tears.</i> <br>I’m sorry, it’s just very hard to hear this. I can’t even imagine how you must feel. So, you realised that your mother had some secrets...Well, I think I owe you the truth, even though I’m not sure that Lena would have approved it. But I can’t really speak about all of this on the phone. Could you visit me? I’ll pay for your plane ticket, don’t worry about it. Yes, I know that you would like some answers immediately. I’ll tell you everything when you come, but let’s just say that you were not really born in this world you call home...Come soon! <br><i>Chapter One of the game is now finished. To unravel the mystery of Ziggy’s origin and continue her adventure, start Chapter Two. Thank you for playing!</i>";
	} else if (x == "14,06" || x == "14,59") {
			answer = "I’ve never heard of him. Lena and I weren’t in contact for years. But I’m not surprised she was in a enviornmental activist group.";
	} else if (x == "14,08") {
			answer = "So, you found the record. Sure, I know that your mother has it. But to explain how she got it, there is a bigger story to tell.";
	} else if (x == "14,09") {
			answer = "I haven’t heard from your mother in a very long time. I didn’t even know she was working in a library.";
	} else if (x == "14,10") {
			answer = "I’ve never heard about her. I haven’t been in touch with your mother for many years, Ziggy.";
	} else if (x == "14,15") {
			answer = "Yes, we are communicating by phone this very moment.";
	} else if (x == "14,21") {
			answer = "Yes, it was me that took this photo. Well, it’s not so easy to explain to you why it reminded me of Lena. It’s a long story that I couldn’t tell over the phone. But I’m glad it helped you to find me!";
	} else if (x == "14,28") {
			answer = "Right, the gem. Well, if you’re wearing it now, you probably realise some changes in you. Are you feeling more connected to living creatures? Even being capable of influencing them in one way or another? That’s the effect of the gem. But I can’t really explain all this in a few words. There’s a bigger story behind it.";
	} else if (x == "14,32") {
			answer = "You have a dog? Lena really wanted to give you a “normal” life, didn’t she?";
	} else if (x == "14,56") {
			answer = "Well, Lena’s interest in oil companies doesn’t surprise me. But I’m not sure why would she keep the article. I’d say it’s something to investigate further.";
	} else if (x == "14,57") {
			answer = "I’m not familiar with his work.";
	} else if (x == "14,61") {
			answer = "Yes, I know exactly what you’re talking about. And it’s just the beginning. All I can tell you for the moment is that it’s connected to the gem you’ve been wearing. Take very good care of it.";
	} else if (x == "31,01") {
			answer = "Hi, Ziggy! I thought you weren’t coming to the university this week. I’m really sorry about your mother.";
	} else if (x == "31,02") {
			answer = "Eggs? No thank you.";
	} else if (x == "31,04") {
			answer = "That’s a good projector. I don’t know how to solve your power problem, though.";
	} else if (x == "31,05") {
			answer = "Breaking locks is not something I know how to do.";
	} else if (x == "31,06") {
			answer = "No, I can’t say I’ve heard of him.";
	} else if (x == "31,07") {
			answer = "Unless the lecture will magically teach me everything about mineralogy for the test tomorrow, I’m not interested in coming.";
	} else if (x == "31,09") {
			answer = "I know her from the library. She’s a nice lady, I guess.";
	} else if (x == "31,10") {
			answer = "I don’t know her, sorry.";
	} else if (x == "31,11") {
			answer = "That’s the woman giving the lecture in the library tonight? Well, I’m going to be studying all night for the mineralogy test tomorrow, not that it will be of any use. I think I’m definitely failing it.";
	} else if (x == "31,13") {
			answer = "That looks like a puzzle. I’m not really brilliant in puzzles.";
	} else if (x == "31,15") {
			answer = "I already have your phone number, remember?";
	} else if (x == "31,17") {
			answer = "Don’t show me another book, please. My head is already full of mineralogy books, I don’t think I can handle another one.";
	} else if (x == "31,18") {
			answer = "Nicely done, but it doesn’t help me with my problem.";
	} else if (x == "31,19" || x == "31,24" || x == "31,34" || x == "31,36" || x == "31,40" || x == "31,41" || x == "31,44" || x == "31,48" || x == "31,49" || x == "31,50" || x == "31,58" || x == "31,60") {
			answer = "I’m not sure why you’re asking me about this.";
	} else if (x == "31,20") {
			answer = "I’m not surprised that the library has a projector. It’s usual equipment.";
	} else if (x == "31,21") {
			answer = "Nice work! But I know nothing about street art.";
	} else if (x == "31,22") {
			answer = "Sorry, but I could never guess the password. It could be anything.";
	} else if (x == "31,23") {
			answer = "I heard about your mother. I’m so sorry. I can’t even imagine how you feel right now. How come that you came to the university, I thought you were taking a few days off?";
	} else if (x == "31,25") {
			answer = "You need a new lens? I guess I could help you, I put some money from the scholarship on the side. But I would need you to do me a favor in return. I have to get a copy of the mineralogy test, or I’m failing it tomorrow. And that means failing this year entirely.";
	} else if (x == "31,26" || x == "31,62") {
			answer = "Thanks, but no thanks. I prefer coffee.";
	} else if (x == "31,27") {
			answer = "What’s this language? Doesn’t seem familiar.";
	} else if (x == "31,28") {
			answer = "Wow, that’s amazing! With my limited knowledge in mineralogy I can’t pretend to know what it could be. Did you show it to the professor?";
	} else if (x == "31,29") {
			answer = "Ziggy, I’m not going to pass the test tomorrow. The more I learn, the more it seems that I don’t know anything. And my scholarship depends on it. Listen, I know it's not something that you usually do, but you are on much better terms with the professor than I am. Do you think you could take a peek at the test? Get me copy somehow? He keeps the tests on his desk, if you could distract him for a moment maybe it could be done. I would pay you well for this. Please don’t judge me, my future is in question!";
	} else if (x == "31,30") {
			answer = "This looks way to complicated to break in. If you don’t have the combination, I’m afraid I can’t help you.";
	} else if (x == "31,31") {
			answer = "I’m in a real problem. If I don’t pass the mineralogy test tomorrow, I’m failing this year. If I fail the year, my scholarship is gone. And so is my future. Ziggy, I know it’s not something I should be asking of you, but please help me! I know how smart you are. If you could distract the professor for a moment to get me a copy of the test, you would save me. I would pay you well, I still have money from the scholarship. Please Ziggy, I’m begging you!";
	} else if (x == "31,32") {
			answer = "You have a really cute dog!";
	} else if (x == "31,33") {
			answer = "This would be perfect if professor Martin had the tests on his computer, that way we could just delete them with the virus. But he has them all printed out already.";
	} else if (x == "31,35") {
			answer = "What are you planning to do with it? Make graffiti on the university building?";
	} else if (x == "31,37") {
			answer = "Remember this one time when some students changed it for their sports team flag? When the flag went up, the same time like every other day, it was complete chaos! Everybody on the university left everything and just looked at it in shock. What’s the deal with that, it’s just a flag!";
	} else if (x == "31,38") {
			answer = "A very useful thing, we used one when we went camping last year.";
	} else if (x == "31,39") {
			answer = "This is a logo of the library, right?";
	} else if (x == "31,42") {
			answer = "I don’t know her, but she is dank!";
	} else if (x == "31,43") {
			answer = "I don’t know how I could help you with this.";
	} else if (x == "31,45" || x == "31,54") {
			answer = "It looks like a puzzle, and I don't like puzzles.";
	} else if (x == "31,46") {
			answer = "Great, only we can’t just take the test. Can you make a photo of it or something, while I keep an eye on the professor?";
	} else if (x == "31,47") {
			answer = "Yes! Ziggy, I’m forever grateful for this. And don’t worry, this will be our little secret. Here’s the money, as promissed. Well, now that I don’t need to study anymore, I’ll be going. Maybe have a drink with my crew… <br><i>You feel pretty bad about this, but it’s already done. <br>Take card <b>55</b>. Remove cards <b>47</b> and <b>31</b>.</i>";
	} else if (x == "31,51") {
			answer = "I don’t know him. I don’t go to tea shops, pubs are more my style.";
	} else if (x == "31,52") {
			answer = "A telescope shop? No, I’ve never been there.";
	} else if (x == "31,53") {
			answer = "I’m not a hacker. I can delete the files, but it will be obvious somebody messed with it that way.";
	} else if (x == "31,57") {
			answer = "I have a test in mineralogy tomorrow, and I will fail for sure. Which means I will be failing the year and losing the scholarship. Unless...Ziggy, what do you say to a little exchange? If you find a way to distract professor Martin and get me a copy of the test, I’ll pay you a nice amount of money. He keeps the tests on the desk, and I know you’re smart enough to think of something. Just think about it. I would never ask this of you if it wasn’t a question of my future!";
	} else if (x == "31,59") {
			answer = "No, I can’t say I’ve heard of him.";
	} else if (x == "31,61") {
			answer = "What? Are you into new age all of a sudden?";
	} else if (x == "31,64") {
			answer = "I don’t understand a bit of this.";
	} else if (x == "42,01") {
			answer = "It’s nice to meet you. I’d love to chat, but I’m in a middle of a commissioned job, so I don’t have a lot of time.";
	} else if (x == "42,02") {
			answer = "I hope you’re not planning to throw these on my work?";
	} else if (x == "42,03" || x == "42,32") {
			answer = "Cute dog.";
	} else if (x == "42,04") {
			answer = "You can borrow it to me? That’s amazing! It will make the process of  transferring my sketch on the wall 50 times faster! But wait...How do I turn it on? I don’t have any power source here on the street.";
	} else if (x == "42,05") {
			answer = "I’m an artist, not a lock breaker.";
	} else if (x == "42,06") {
			answer = "I’ve never heard of him.";
	} else if (x == "42,07") {
			answer = "I’m definitely not going to a lecture tonight. This wall is huge, and I’m running really late. With this tempo, I’ll be working all night, and I still don’t know if I’ll manage to finish. And tomorrow I’m leaving for Brazil.";
	} else if (x == "42,08") {
			answer = "Beautiful. I’d love to know more about it, but I just don’t have time for it now.";
	} else if (x == "42,09") {
			answer = "I’m not from around here, so I’ve never been to this library.";
	} else if (x == "42,10") {
			answer = "No, doesn’t ring a bell.";
	} else if (x == "42,11") {
			answer = "Never heard of her.";
	} else if (x == "42,12") {
			answer = "I’m glad you got it, but I don’t have time to celebrate right now.";
	} else if (x == "42,13" || x == "42,39" || x == "42,64") {
			answer = "I can’t solve puzzles right now, I’ve got work to do!";
	} else if (x == "42,14") {
			answer = "Sorry, don’t know her.";
	} else if (x == "42,15") {
			answer = "I don’t usually give my phone number to fans.";
	} else if (x == "42,16") {
			answer = "Starry sky...There aren’t many things as beautiful as that. But I’m completely lost in space, for me stars are just a bunch of sparkling dots in the sky.";
	} else if (x == "42,17") {
			answer = "You expect me to read all this now? You’ve got to be kidding.";
	} else if (x == "42,18") {
			answer = "You’re kidding me...This is awesome! It will speed me up enormously. Thank you soooo much! Ok, let’s try to help you with finding your mural now. <br><i>Loomey takes a photo of the mural and sends it to a couple people. After about 20 minutes of texting and calling, finally one of her friends recognizes it.</i> <br>The mural is made by an anonymous author, that’s why I couldn’t remember it. But I did see it. I did a little work in New Orleans a few years ago, and the friend who called me took me on a little street art tour there. The address is 1039 Henriette Delille Street.<i>Search the internet</i> He says it’s been removed since, though.";
	} else if (x == "42,19" || x == "42,22" || x == "42,24" || x == "42,27" || x == "42,34" || x == "42,36" || x == "42,40" || x == "42,41" || x == "42,43" || x == "42,44" || x == "42,46" || x == "42,47" || x == "42,48" || x == "42,49" || x == "42,50" || x == "42,53" || x == "42,58" || x == "42,60") {
			answer = "Look, I don’t have time for this.";
	} else if (x == "42,20") {
			answer = "A projector would actually save me! I could preject the sketch on the wall and transfer it really quickly. Is there a possibility you could get it for me?";
	} else if (x == "42,21") {
			answer = "Let me take a look, I can usually recognize other artists’ work. Hmmm, it seems familiar, but I can’t put my finger on it. I could make a few calls to my friends who know the scene better than me and try to identify it. But the problem is that I’m seriously late with my work. The mural I’m making is a commissioned gig and the company that ordered it gave me wrong dimensions of the wall. It’s huge! So now it will take me at least 6 hours just to transfer the sketch on the wall, and tomorrow I’m flying to Brazil. I’ll be working all night probably, and I’m still not sure I’ll make it. So unless you magically find some equipment that would speed up the process, I really can’t lose time on searching for the origin of the mural on your photo. Sorry, kid.";
	} else if (x == "42,23") {
			answer = "Sorry, I’ve never met her.";
	} else if (x == "42,25") {
			answer = "There is a telescope shop just across the street, you can probably get it fixed there.";
	} else if (x == "42,26" || x == "42,62") {
			answer = "Does it look like I have time for tea? Well, I don’t.";
	} else if (x == "42,28") {
			answer = "Wow! It’s...beautiful!";
	} else if (x == "42,29") {
			answer = "I’m an artist. I don’t know anything about mineralogy.";
	} else if (x == "42,30") {
			answer = "I’m an artist, not a safe breaker.";
	} else if (x == "42,31") {
			answer = "Doesn’t seem familiar.";
	} else if (x == "42,33") {
			answer = "My knowledge in technology is just big enough to post pictures of my work on the internet.";
	} else if (x == "42,35") {
			answer = "Ok, I’ll give you one. Take the red, I won’t be needing it.";
	} else if (x == "42,37") {
			answer = "The design isn’t very innovative.";
	} else if (x == "42,38") {
			answer = "If I had a machine that needed power, it could be very useful in the street.";
	} else if (x == "42,42") {
			answer = "I’ve been doing street art for seven years now, and finally my career is starting to go somewhere. Actually, I’m flying to Brazil tomorrow to participate in a street art festival with some of the greatest artists in the world! I’m also doing commissioned work, like this one right now. It’s not very rewarding, but it put the food on the table. The problem with this particular gig is that the company that ordered it gave me wrong dimensions of the wall, and now I’m super late. I’ve just started, and I’m supposed to transfer the sketch on the wall. But since it’s huge, it will take me at least six hours instead of one, as I planned. If I knew it would be like this, I would have thought of a different technique to do it, but now it’s too late. So I’ll be working all night.";
	} else if (x == "42,45" || x == "42,54") {
			answer = "Is she talking about the mural you showed me in the photo?";
	} else if (x == "42,51") {
			answer = "He’s cute, but I don’t know him.";
	} else if (x == "42,52") {
			answer = "It’s the guy that works in the shop across the street, right? I saw him come out of the shop a few times.";
	} else if (x == "42,55") {
			answer = "I don’t want your money, what I need is more time!";
	} else if (x == "42,56") {
			answer = "I’m suspicious of everything an oil company has to say.";
	} else if (x == "42,57") {
			answer = "I was never very fond of serious university professors.";
	} else if (x == "42,59") {
			answer = "It’s that activist that’s always in the media. Sure, I support what they’re doing.";
	} else if (x == "42,61") {
			answer = "Sure, and I have an invisibility cloak.";
	} else if (x == "42,63") {
			answer = "I have all my music on my phone. It’s much more practical since I’m always in the street.";
	} else if (x == "51,01") {
			answer = "Hi, what can I get you?";
	} else if (x == "51,02") {
			answer = "No thanks. I just came back from lunch.";
	} else if (x == "51,01" || x == "51,32") {
			answer = "Nice dog!";
	} else if (x == "51,04") {
			answer = "Nice projector. It’s yours?";
	} else if (x == "51,05") {
			answer = "Shedar…Isn't it a name of a star? But I can’t really remember in which constellation is it.";
	} else if (x == "51,06") {
			answer = "He came a few times with Lena. They were good friends, I think.";
	} else if (x == "51,07") {
			answer = "Sure, I’ve seen the poster in the library. That’s Jocelyn Hill right there. She’s freaking out about the lecture a bit. She even said...No, it’s not nice to gossip about customers.";
	} else if (x == "51,08") {
			answer = "Wow, you have the Voyager Golden Record! I bought one for my sister. She’s obsessed with space travel.";
	} else if (x == "51,09") {
			answer = "Sandy comes very often. We always have a nice little chat.";
	} else if (x == "51,10") {
			answer = "No, I’ve never met her. If she came to the shop, I would have surely remembered her.";
	} else if (x == "51,11") {
			answer = "That’s her, sitting right there. She is completely stressed out. She keeps repeating and memorising all this parts of her lecture. I know much more about Bavaria now then I ever wanted to. She even told me that she changed all her passwords to important years of the lecture, so that she would be sure that she’d remember them. Like, the password for her phone is a year when they discovered a meteor crater, or a vulcanic crater in some town, or something like that. Or was it her computer? <i>Search the internet</i> Ok, you get the point.";
	} else if (x == "51,12") {
			answer = "My sister is into astronomy. I even once went to this telescope shop with her.";
	} else if (x == "51,13") {
			answer = "That’s interesting. What do you think it means?";
	} else if (x == "51,14") {
			answer = "The name doesn’t sound familiar.";
	} else if (x == "51,15") {
			answer = "Sure, I’ll give you my phone number. We can grab a drink sometimes.";
	} else if (x == "51,16") {
			answer = "Who knows what the universe is hiding from us…";
	} else if (x == "51,17") {
			answer = "This looks like hard core astronomy. What do you think that all this numbers signify?";
	} else if (x == "51,18") {
			answer = "Great! What will you use it for?";
	} else if (x == "51,19" || x == "51,40" || x == "51,48" || x == "51,58") {
			answer = "Making dog cookies? Nice.";
	} else if (x == "51,20") {
			answer = "Nice projector. The library is well equiped.";
	} else if (x == "51,21") {
			answer = "That’s nice! I follow street art a bit, but I’ve never seen this. Oh, did you know that Loomey is in town? I love her work.";
	} else if (x == "51,22") {
			answer = "Please keep an eye on it, I’m too busy with customers at the moment.";
	} else if (x == "51,23") {
			answer = "Lena was your mother? Oh, I’m really sorry. Lena was my favourite customer. She came every morning before work. She drank mint tea, super sweet. She hassn’t been coming for the last few months, of course. I could see that something was wrong, some times before that, though. She was worried and distant. It was clear that she was afraid of something.";
	} else if (x == "51,24") {
			answer = "Nice flour.";
	} else if (x == "51,25") {
			answer = "Your lens is broken? There is this shop, Outer Space Telescopes where you can find all the parts. I went with my sister once, she’s an amateur astronomer.";
	} else if (x == "51,26" || x == "51,62") {
			answer = "No thanks, I can’t even look at tea anymore.";
	} else if (x == "51,27") {
			answer = "Making dog cookies? Nice. Why is the recipe written in Swahili? I learned a bit of the language when I was travelling through Africa. I couldn’t translate the recipe, but I still remember how to say “Wewe ni mzuri”.";
	} else if (x == "51,28") {
			answer = "I’ve seen this gem on Lena. It’s magical, isn’t it?";
	} else if (x == "51,29") {
			answer = "I studied antropology for three years, mineralogy is really not my field.";
	} else if (x == "51,30") {
			answer = "A safe? What do you think could be inside?";
	} else if (x == "51,31") {
			answer = "No, I don’t know him.";
	} else if (x == "51,33") {
			answer = "I studied antropology for three years, computers are an enigma to me.";
	} else if (x == "51,34") {
			answer = "Nice oven.";
	} else if (x == "51,35") {
			answer = "You’re thinking of making street art? Nice.";
	} else if (x == "51,36") {
			answer = "When this sprout becomes a pumpkin, promise to make me a pumpkin pie?";
	} else if (x == "51,37") {
			answer = "The last year of my studies in the university, a couple of athletes changed it for their sports club flag. When the thing came up, the whole university made a fuss about it. Everybody just stopped whatever they were doing and went out to look at the flag. As if something really important happened. Crazy, believe me.";
	} else if (x == "51,38") {
			answer = "I was thinking of getting a small one for my camping trips. But then I thought, to carry that with all my other equipment...No thank you. How is it possible that you’re carrying all this with you around town? What are you, super strong?";
	} else if (x == "51,39") {
			answer = "That’s the logo of the library next door. And the code...Could be a code for one of their books. Check it with Sandy, the librarian.";
	} else if (x == "51,41") {
			answer = "What do you say about making me a pumpkin pie? ";
	} else if (x == "51,42") {
			answer = "I’m a big fan of her work. I hear she’s in town at the moment. But she is leaving for a street art festival in Brazil tomorrow. She was invited to participate. It’s nice to see that finally the world starts to appreciate her art.";
	} else if (x == "51,43") {
			answer = "That’s the computer of Jocelyn Hill. She said that she changed the password to a year from her Bavaria lecture. Something about a discovery of a crater in the 20th century. Or, it was a crater already, but they discovered it was another kind of crater? <i>Search the internet</i> Anyway, she said it was because that way she’d be sure to memorise the year for the lecture. But I forgot it quickly.";
	} else if (x == "51,44") {
			answer = "Another cup of tea? Coming right up! <br><i>Take card <b>26</b>. Remove card <b>44</b>.</i>";
	} else if (x == "51,45" || x == "51,54") {
			answer = "This sounds like she’s giving directions. I think it would be possible to track her path if we knew the address of the mural.";
	} else if (x == "51,46") {
			answer = "I’d make a photo of the test if I were you.";
	} else if (x == "51,47") {
			answer = "Nice photo.";
	} else if (x == "51,49") {
			answer = "Nice scissors.";
	} else if (x == "51,50") {
			answer = "Mmmm, peanut butter.";
	} else if (x == "51,51") {
			answer = "I’m just a simple guy. I spend most of my free time in nature, or travelling.";
	} else if (x == "51,52") {
			answer = "Yes, I’ve seen him in the telescope shop the one time I went there with my sister.";
	} else if (x == "51,53") {
			answer = "You found her password from what I told you? Oooops. Don’t touch anything, ok?";
	} else if (x == "51,55") {
			answer = "That’s way too much money for a cup of tea. Besides, it’s on the house.";
	} else if (x == "51,56") {
			answer = "I’ ve heard about this. I even saw a guy from the company speaking to Nathan Bright once, here at the tea shop. Nathan is the Earthlings leader, tha association Lena was a part too. Anyway, the IBOR guy was offering him funding of the association, as a part of their going green strategy.";
	} else if (x == "51,57") {
			answer = "No, I don’t know him.";
	} else if (x == "51,59") {
			answer = "He was here with Lena once. She told me that they were in the Earthlings association together. Oh, I saw him once again, with a guy from that oil company, IBOR. I heard them talking about IBOR funding the association, as a part of their new green policy.";
	} else if (x == "51,60") {
			answer = "Nice plant.";
	} else if (x == "51,61") {
			answer = "Really? How do you do it?";
	} else if (x == "51,63") {
			answer = "You could maybe show me your record collection one time.";
	} else if (x == "51,64") {
			answer = "There are elements of Sinbad’s journeys in this message. But I don’t know what the rest of it could mean.";
	} else if (x == "52,01") {
			answer = "Hello, how can I help you?";
	} else if (x == "52,02" || x == "52,19" || x == "52,24" || x == "52,40" || x == "52,41" || x == "52,48" || x == "52,50") {
			answer = "We don’t have any groceries, we are specialised in astronomy equipment.";
	} else if (x == "52,03" || x == "52,32" || x == "52,58") {
			answer = "We don’t have any pet food, we are specialised in astronomy equipment.";
	} else if (x == "52,04" || x == "52,18" || x == "52,20") {
			answer = "We don’t have any video equipment, we are specialised in telescopes.";
	} else if (x == "52,05") {
			answer = "Shedar is a star in Cassiopeia constellation.";
	} else if (x == "52,06" || x == "52,31" || x == "52,57") {
			answer = "I’m sorry, I don’t know him.";
	} else if (x == "52,07") {
			answer = "I’m going to a stargazing event tonight, so I can’t come to the lecture. It will be a cloudless night and we plan to focus on Cassiopeia.";
	} else if (x == "52,09" || x == "52,10" || x == "52,11") {
			answer = "I’m sorry, but I don’t know her.";
	} else if (x == "52,15") {
			answer = "You can find our number on the internet. Our working hours are from 8am to 8pm. Call if you need anything!";
	} else if (x == "52,34" || x == "52,44") {
			answer = "We don’t have any kitchen supplies, we are specialised in astronomy equipment.";
	} else if (x == "52,17") {
			answer = "Interesting, all these pages handwritten. It looks like a system of star denotaion, but it’s not one I’ve seen before.";
	} else if (x == "52,21") {
			answer = "I’m sorry, but I really can’t help you with this. You could ask the street artist across the street, maybe she knows something about it.";
	} else if (x == "52,22" || x == "52,33" || x == "52,43" || x == "52,53") {
			answer = "We don’t have any computer equipment, we are specialised in telescopes.";
	} else if (x == "52,23") {
			answer = "She does seem familiar, I guess she’s been to the shop once or twice. ";
	} else if (x == "52,25") {
			answer = "Let me see…Yes, the objective lens is definitely broken. I’m sorry, but I would recommend buying a new one, I don’t think you could repair it. Let me take it off to take a closer look...Oh, there is a paper behind it, here! Why would somebody put a paper behind the lens? Anyway, as I said, the lens is beyond repair. A new lens this diameter would be 700 pounds. Would you like to purchase one? <br><i>Take card <b>39</b>.</i>";
	} else if (x == "52,26" || x == "52,62") {
			answer = "We don’t have any beverages, we are specialised in astronomy equipment.";
	} else if (x == "52,27") {
			answer = "We don’t have any dictionaries, we are specialised in astronomy equipment.";
	} else if (x == "52,28") {
			answer = "What is it? It’s astonishing!";
	} else if (x == "52,29" || x == "52,46") {
			answer = "We have a book on meteorites, but I don’t think it will be sufficient for passing a mineralogy test.";
	} else if (x == "52,30") {
			answer = "I’m afraid we don’t have anything in the shop that could help you open it.";
	} else if (x == "52,35") {
			answer = "We don’t hold any art supplies, we are specialised in astronomy equipment.";
	} else if (x == "52,36" || x == "52,60") {
			answer = "We don’t have any gardening equipment, we are specialised in telescopes.";
	} else if (x == "52,37") {
			answer = "I heard that the university has an excellent astrophysics program.";
	} else if (x == "52,38") {
			answer = "We don’t have anything of the sort in our offer, sorry.";
	} else if (x == "52,39") {
			answer = "I just found the paper, I don’t know what it means.";
	} else if (x == "52,42") {
			answer = "She is making a mural across the street, I passed by a few times. It will be mice to pass next to a piece of art every day on my way to work.";
	} else if (x == "52,47") {
			answer = "I must say that I don’t really understand the question.";
	} else if (x == "52,49") {
			answer = "We don’t have any tools, we are specialised in astronomy equipment.";
	} else if (x == "52,51") {
			answer = "I remember him, he came one time to the shop with his sister. She is part of our stargazing community, a very clever girl.";
	} else if (x == "52,52") {
			answer = "I’m standing at your service, how can I help you?";
	} else if (x == "52,55") {
			answer = "So you decided to purchase the objective lens? Excellent. That will be 700 pounds. Thank you, and enjoy the stars tonight! <br><i>As I leave the shop, Peter puts the ‘closed’ sign on the door. <br>Take card <b>12</b>. Remove cards <b>52</b> and <b>55</b>.</i>";
	} else if (x == "52,59") {
			answer = "It’s the activist of the Earthlings association? I like the name of the group.";
	} else if (x == "52,61") {
			answer = "I don’t know what to say about this. Are you maybe interested in some of our products?";
	} else if (x == "52,63") {
			answer = "We don’t have any audio equipment, we are specialised in telescopes.";
	} else if (x == "52,64") {
			answer = "There are some stars and constellations mentioned in this message. I don’t get the other parts, though.";
	} else if (x == "57,01") {
			answer = "Hi, Miss Wonder. I heard about your mother, I am very sorry about your loss. It’s a good idea to take a couple of days off, take some time for yourself. You can do tomorrow’s test some other time. Is there anything you wanted to ask me?";
	} else if (x == "57,02") {
			answer = "Maybe you would prefer to speak about this to the biology professor?";
	} else if (x == "57,04") {
			answer = "If there is a problem with your projector, you can ask somebody from the tech department. I’m sure that they would be helpful.";
	} else if (x == "57,05") {
			answer = "I can hardly help you with this.";
	} else if (x == "57,06" || x == "57,52") {
			answer = "Was he one of my students?";
	} else if (x == "57,07") {
			answer = "I can’t go to a lecture tonight. I made plans with my wife.";
	} else if (x == "57,08") {
			answer = "What an interesting artifact of recent history. Where did you find this edition?";
	} else if (x == "57,09") {
			answer = "Yes, I know her. I’ve been to the library many times.";
	} else if (x == "57,10" || x == "57,11" || x == "57,14") {
			answer = "Was she one of my students?";
	} else if (x == "57,12") {
			answer = "It’s not really something I could help you with. You could ask the astronomy department, but I think that they are on a field trip to the Lovell telescope today.";
	} else if (x == "57,13") {
			answer = "All this sounds like it’s connected to the content of the recording.";
	} else if (x == "57,15") {
			answer = "Unfortunatelly I can’t give my private phone number to students. But feel free to contact me by email anytime.";
	} else if (x == "57,16") {
			answer = "Ah! The universe. So many mysteries yet to unravel.";
	} else if (x == "57,17") {
			answer = "You could ask the astronomy department about this, but I think that they are on a field trip to the Lovell telescope today.";
	} else if (x == "57,18" || x == "57,33" || x == "57,38" || x == "57,43" || x == "57,53") {
			answer = "You can ask somebody from the tech department about this. I’m sure that they would be helpful.";
	} else if (x == "57,19" || x == "57,24" || x == "57,27" || x == "57,34" || x == "57,36" || x == "57,40" || x == "57,41" || x == "57,44" || x == "57,48" || x == "57,49" || x == "57,50" || x == "57,58" || x == "57,60") {
			answer = "That’s quite an unusual question.";
	} else if (x == "57,20") {
			answer = "Yes, I know that the library has a projector. I was on a couple of lectures there myself.";
	} else if (x == "57,21") {
			answer = "Oh, you caught me in a field I konw absolutely nothing about. Sorry.";
	} else if (x == "57,22") {
			answer = "If there is a problem with your computer, you can ask somebody from the tech department. I’m sure that they would be helpful.";
	} else if (x == "57,23") {
			answer = "Of course I remember your mother, I was very often in the library. She was a very intelligent woman, and I believe you inherited this quality from her.";
	} else if (x == "57,25") {
			answer = "It’s not really something I could help you with. You could ask the astronomy department, but I think that they are on a field trip to the Lovell telescope today.";
	} else if (x == "57,26") {
			answer = "No, thank you.";
	} else if (x == "57,28") {
			answer = "Oh, let me take a look at it. At first I would say it’s grandidierite, but now I see that it’s definitely not it. The crystal structure is something that...That I’ve never seen before. I don’t even now how to name it, it doesn’t fit in any of the known groups. I would need some time to study the chemical composition. But I can’t imagine which kind of geological circumstances would produce something like this. It’s incredibly exciting, where did you get it?";
	} else if (x == "57,29") {
			answer = "You don’t have to take the test tomorrow, do it another time. Take a couple of days for yourself.";
	} else if (x == "57,30") {
			answer = "I don’t know how could I help you with this, Miss Wonder.";
	} else if (x == "57,31") {
			answer = "Oh, Jamie. He’s the worst student I have. He’s great on the field, but the minute he gets to the lab, he’s lost. He’s not doing any better in theory either. If he doesn’t pass the test tomorrow, he’s failing the class.";
	} else if (x == "57,32") {
			answer = "What a nice dog!";
	} else if (x == "57,35") {
			answer = "I don’t care much for street art, but that’s just me.";
	} else if (x == "57,37") {
			answer = "The pride of our university. Of course I think it’s important. Young people don’t understand the significance of tradition. I still remember when it was switched with a sports team flag by a couple of students. To raise a sports team flag on our university. Outraiges!";
	} else if (x == "57,39") {
			answer = "That’s the library logo. I can’t say that the nubmer that’s written under it means something to me.";
	} else if (x == "57,42") {
			answer = "No, I don’t know any street artist.";
	} else if (x == "57,45" || x == "57,54" || x == "57,64") {
			answer = "I can’t say that this makes a lot of sense to me.";
	} else if (x == "57,51") {
			answer = "No, I can’t say I’ve seen him.";
	} else if (x == "57,55") {
			answer = "You’re not thinking of bribing me I hope?";
	} else if (x == "57,56") {
			answer = "I would take articles like this one with caution. I’m afraid that I don’t see the oil companies changing so fast.";
	} else if (x == "57,57") {
			answer = "I’m here for all your questions on mineralogy. I like it when students are interested in the subject.";
	} else if (x == "57,59") {
			answer = "I’ve heard of him and his association. I may not agree will all of their methods, but I respect their goal.";
	} else if (x == "57,61") {
			answer = "Well, sometimes I feel connected to the minerals. So I won’t judge you.";
	} else if (x == "57,62") {
			answer = "No, thank you.";
	} else if (x == "57,63") {
			answer = "I have one too. Nothing beats vinyl in my opinion.";
	} else if (x == "59,01") {
			answer = "Hi, Ziggy, you’re Lena’s daughter? I’m so sorry, I heard the news. I’m in the middle of a protest, but tell me if there’s something I can do for you.";
	} else if (x == "59,02" || x == "59,32") {
			answer = "I don’t eat eggs, thank you.";
	} else if (x == "59,03") {
			answer = "How is Laika?";
	} else if (x == "59,04" || x == "59,18" || x == "59,20") {
			answer = "We don’t need a projector for the protest, good old megaphones and signs will be enough.";
	} else if (x == "59,05") {
			answer = "I’m not surprised that Lena had a cabin in the forest. Many of us have an urge to spend more time in nature. It’s only human.";
	} else if (x == "59,06") {
			answer = "Gavin is a member of the association. He was close to Lena, actually. He and his wife have a little house and a garden outside of the city. He is very dedicated to our mission. When Lena decided to quit, he tried to change her mind, but with no success. I  believe their friendship didn’t suffer from it, however.";
	} else if (x == "59,07") {
			answer = "Lectures are great, but we will be camping here tonight.";
	} else if (x == "59,08") {
			answer = "That’s interesting. It looks amazing. The world has changed a lot since then, didn’t it?";
	} else if (x == "59,09") {
			answer = "I don’t know her. You say she was working with Lena?";
	} else if (x == "59,10") {
			answer = "She’s Gavin’s wife. Of course I met her, we hold social events in the association sometimes. They’re a nice couple, they own a small farm outside of the city. They try to produce the majority of their vegetables needs in their garden.";
	} else if (x == "59,11") {
			answer = "She’s holding a lecture tonight? We’ll be camping here all night.";
	} else if (x == "59,12" || x == "59,19" || x == "59,22" || x == "59,24" || x == "59,25" || x == "59,26" || x == "59,27" || x == "59,29" || x == "59,34" || x == "59,36" || x == "59,40" || x == "59,41" || x == "59,43" || x == "59,44" || x == "59,46" || x == "59,47" || x == "59,48" || x == "59,49" || x == "59,50" || x == "59,53" || x == "59,58" || x == "59,60" || x == "59,62") {
			answer = "If you don’t have anything important to ask, maybe we can finish this conversation another time?";
	} else if (x == "59,13") {
			answer = "I don’t know what this note is supposed to mean.";
	} else if (x == "59,14") {
			answer = "The name doesn’t ring a bell.";
	} else if (x == "59,15") {
			answer = "Sure, I can give you my number.";
	} else if (x == "59,16") {
			answer = "Fascinating! I don’t know a lot on exploration of the universe personally, my focus is on the planet we live on.";
	} else if (x == "59,17") {
			answer = "Lena was full of mistery. This seems like another little secret of hers.";
	} else if (x == "59,21") {
			answer = "No, I haven’t seen this mural before.";
	} else if (x == "59,23") {
			answer = "Lena was a part of the association for a couple of years but she decided to leave about 6 months ago. Let’s just say that we had different opinions on funding the association. I saw her point of view as too radical and not open to change, but I respected her decision, of course. It was a bit strange without her at first, there was no sign of her presence left in the association. Even her computer was hacked a few days before she quit, with all the information on it corrupted. Anyway, I will always have dear memories of her, even if we did end in not the best of terms.";
	} else if (x == "59,28") {
			answer = "Oh, I’ve seen this on your mother. It’s a bit extravagant if you ask me, but she said it was family heritage. Who am I to judge?";
	} else if (x == "59,30") {
			answer = "Lena had a safe? She was a mysterious woman, that much I’m sure of.";
	} else if (x == "59,31") {
			answer = "I don’t know him, sorry.";
	} else if (x == "59,33") {
			answer = "What is this? What are you, some kind of hacker?";
	} else if (x == "59,35") {
			answer = "We have enough spray paint for our signs, thank you.";
	} else if (x == "59,37") {
			answer = "I have more important things to attend to than talking about your university’s flag.";
	} else if (x == "59,38") {
			answer = "If Gavin let you use it, I can’t do anything about it. But I can’t say I’m very happy about it, we need it for camping out here!";
	} else if (x == "59,39") {
			answer = "This is the logo of Lena’s library. The numbers tell me nothing.";
	} else if (x == "59,42") {
			answer = "I saw some of her work. She has a bright future in my opinion.";
	} else if (x == "59,45" || x == "59,54") {
			answer = "I don’t have time to go deep in the text, but at first glance, it’s a rather boring letter, wouldn’t you agree?";
	} else if (x == "59,51") {
			answer = "Hm, I was in the tea shop a few times, but I don’t remember his face.";
	} else if (x == "59,52") {
			answer = "I’ve never seen him.";
	} else if (x == "59,55") {
			answer = "It’s nice of you, Earthlings accept donations for continuing our work. But given that we’ve recently been funded by a large corporation, and that you’re only a student, I will kindly refuse your offer.";
	} else if (x == "59,56") {
			answer = "Yes, I’m well informed in the company’s new green policies. They plan to switch to reneweble energy sources in the next few years. An amazing initiative, if you ask me!";
	} else if (x == "59,57") {
			answer = "Sorry, I don’t know him.";
	} else if (x == "59,59") {
			answer = "I’m the founder of Earthlings. Simply put, our goal is to protect the ecosystem, prevent future destruction and correct the damage already done. I’ve given years of my life in this association and I plan to spread our radius of effect. With the funding we recently receved, it will be easier to accomplish than I first presumed. I’m an optimist, I think that people’s conscious on the problem is finally changing for the better.";
	} else if (x == "59,61") {
			answer = "I understand, Ziggy. Many of us in Earthlings have similar sensations. Whenever I manage to escape into the nature for a few days, I feel like one with it.";
	} else if (x == "59,63") {
			answer = "Music is great, I know. But I don’t have as much time to listen it as I’d like to.";
	} else if (x == "59,64") {
			answer = "I don’t really see any sense in this.";
	} else if (x == "02,24" || x == "24,02") {
      answer = "Aha! According to my translation, this is the first step of the dog cookies baking process. <br><i>Take card <b>40</b>. Remove cards <b>02</b> and <b>24</b>.</i>";
	} else if (x == "02,34" || x == "02,41" || x == "02,50" || x == "19,34" || x == "24,34" || x == "24,41" || x == "24,50" || x == "34,02" || x == "34,19" || x == "34,24" || x == "34,40" || x == "34,41" || x == "34,50" || x == "40,34" || x == "40,41" || x == "41,02" || x == "41,24" || x == "41,34" || x == "41,40" || x == "41,50" || x == "50,24" || x == "50,34" || x == "50,41" ||) {
			answer = "I should follow the recipe, I’m not skilled enough to improvise.";
	} else if (x == "02,03" || x == "02,32" || x == "03,02" || x == "32,02") {
			answer = "Laika doesn’t like eggs.";
	} else if (x == "02,26" || x == "02,44" || x == "02,62" || x == "26,02" || x == "44,02" || x == "62,02") {
			answer = "Raw eggs can be good for your voice, but I want to sabotage the lecture, not help it be better!";
	} else if (x == "02,27" || x == "27,02") {
			answer = "Yes, I should try to make the cookies, but not by mixing the eggs with the recipe paper.";
	} else if (x == "02,29" || x == "02,46" || x == "29,02" || x == "46,02") {
			answer = "Destroying the tests with eggs won’t get me anywhere.";
	} else if (x == "02,37" || x == "37,02") {
			answer = "Sure, I could mess the flag with eggs, but would it be noticeable enough?";
	} else if (x == "02,49" || x == "49,02") {
			answer = "I can break the eggs very easily without using the scissors.";
	} else if (x == "02,61" || x == "61,02") {
			answer = "Unfortunately, this ability doesn’t work with eggs. Not that I really knew what I wanted to accomplish with it.";
	} else if (x == "03,03" || x == "03,23" || x == "32,23" || x == "32,32") {
			answer = "Woof woof!";
	} else if (x == "03,19" || x == "03,40" || x == "03,40" || x == "19,03" || x == "19,32" || x == "32,19" || x == "32,40" || x == "32,48" || x == "40,03" || x == "40,32" || x == "48,32") {
			answer = "Cookies are not finished yet!";
	} else if (x == "03,15" || x == "15,03" || x == "15,32" || x == "32,15") {
			answer = "I’ll take a photo of Laika. I have a bunch of them already, but why not another one.";
	} else if (x == "03,34" || x == "32,34" || x == "34,03" || x == "34,32") {
			answer = "I’m not goint to bake Laika.";
	} else if (x == "03,26" || x == "26,03" || x == "26,32" || x == "32,26") {
			answer = "The tea is not for Laika.";
	} else if (x == "03,27" || x == "27,03" || x == "27,32" || x == "32,27") {
			answer = "I should try to make the cookies, Laika can’t make them herself.";
	} else if (x == "03,49" || x == "49,03") {
			answer = "I cut Laika’s collar to get the gem. <br><i>Take cards <b>28</b> and <b>32</b>. Remove cards <b>03</b> and <b>49</b>.</i>";
	} else if (x == "03,50" || x == "32,50" || x == "50,03" || x == "50,32") {
			answer = "Laika loves peanut butter, but I should make cookies with it.";
	} else if (x == "03,60" || x == "03,62" || x == "32,60" || x == "32,62" || x == "60,03" || x == "60,32" || x == "62,03" || x == "60,32") {
			answer = "Laika’s digestion works just fine.";
	} else if (x == "04,21" || x == "18,21" || x == "21,04" || x == "21,18") {
			answer = "Where and why should I make a projection of this photo?";
	} else if (x == "04,33" || x == "18,33" || x == "33,04" || x == "33,18") {
			answer = "I don’t want to hack the projector!";
	} else if (x == "04,33" || x == "38,04") {
			answer = "That’s it! Now the projector has power. <br><i>Take card <b>18</b>. Remove cards  <b>04</b> and <b>38</b>.</i>";
	} else if (x == "07,35" || x == "35,07") {
			answer = "It wouldn’t do any good if I paint over the lecture poster. The lecture would have still been held.";
	} else if (x == "07,49" || x == "49,07") {
			answer = "There si no point in cutting the poster.";
	} else if (x == "08,63" || x == "63,08") {
			answer = "As I take the record out, a small piece of paper falls out from the cover. <br><i>Take card <b>13</b>. Remove card <b>63</b>.</i>";
	} else if (x == "12,49" || x == "17,12") {
			answer = "Well sure, a book on astronomy can be useful while looking into space, but I can’t directly use it with the telescope lens.";
	} else if (x == "12,25" || x == "25,12") {
			answer = "All right! This should work now. Let’s take a look at the sky tonight… <br><i>Take card <b>16</b>. Remove cards <b>12</b> and <b>25</b>.</i>";
	} else if (x == "13,30" || x == "30,13") {
			answer = "The note seems to be connected to the inscription on the safe. But I should find the combination to open it.";
	} else if (x == "15,21" || x == "21,15") {
			answer = "To take a photo of a photo? No.";
	} else if (x == "15,27" || x == "27,15") {
			answer = "Unfortunatelly, I don’t have a translation app installed.";
	} else if (x == "15,29" || x == "29,15") {
			answer = "I can’t really take of photo of the test in front of professor Martin.";
	} else if (x == "15,33" || x == "33,15") {
			answer = "I don’t want to hack my phone!";
	} else if (x == "15,38" || x == "38,15") {
			answer = "My phone is charged enough.";
	} else if (x == "15,39" || x == "39,15") {
			answer = "I enter the numbers in my phone and press the call button. The voice on the phone says that the “number is non existing.” This is obviously not a phone number.";
	} else if (x == "15,46" || x == "46,15") {
			answer = "There we go, a photo of the test should be good enough. <br><i>A few moments after I take the photo of the test, professor Martin returns to the desk. <br>Take card <b>47</b>. Remove card <b>46</b>.</i>";
	} else if (x == "15,47" || x == "47,15") {
			answer = "I already took a photo of the test, now I should give it to Jamie.";
	} else if (x == "16,17" || x == "17,16") {
			answer = "Ok, I’ll draw the constellations I see and write the according numbers next to every star. Let’s see if that gets me anywhere. <i>Take card <b>I</b>. Remove cards <b>16</b> and <b>17</b>.</i>";
	} else if (x == "17,25" || x == "25,17") {
			answer = "The book can be useful while looking into space, but it won’t fix the telescope.";
	} else if (x == "17,64" || x == "64,17") {
			answer = "This has to be connected. But I should probably get a look into the stars first to figure everything out.";
	} else if (x == "41,61" || x == "61,41") {
			answer = "I think this works only when the plant is still planted.";
	} else if (x == "19,36" || x == "36,19") {
			answer = "I should put some pumpkin, but it should be a ripe fruit, not just a sprout.";
	} else if (x == "19,41" || x == "41,19") {
			answer = "Ok, this seems to be the last ingredient. <br><i>Take card <b>48</b>. Remove cards <b>19</b> and <b>41</b>.</i>";
	} else if (x == "21,35" || x == "35,21") {
			answer = "I don’t want to spray the paint all over the photo. My mother liked it so much that she had it framed. Why would I destroy it?";
	} else if (x == "21,49" || x == "49,21") {
			answer = "I don’t want to cut the photo. My mother liked it so much that she had it framed. Why would I destroy it?";
	} else if (x == "22,33" || x == "33,22") {
			answer = "I have to find the password first, the SD card doesn’t seem to do anything this way.";
	} else if (x == "22,38" || x == "38,22" || x == "38,43" || x == "38,53" || x == "43,38" || x == "53,38") {
			answer = "The computer is already plugged in the power socket.";
	} else if (x == "24,27" || x == "27,24") {
			answer = "I would like to make the cookies for Laika, but spreading some flour on the recipe won’t do it.";
	} else if (x == "26,58" || x == "58,26") {
			answer = "Cookies and tea are a great combination, but dog cookies and tea maybe less so.";
	} else if (x == "26,60" || x == "60,26") {
			answer = "This is really wicked of me, and I’m definitely not proud of myself for doing it, but I don’t see that I have any other choice. <br><i>Take card <b>62</b>. Remove cards <b>26</b> and <b>60</b>.</i>";
	} else if (x == "27,34" || x == "34,27") {
			answer = "I should try to make the cookies to cheer up Laika, but putting the recipe in the oven won’t do it.";
	} else if (x == "28,32" || x == "32,28") {
			answer = "I just took it of Laika’s collar, I’m not going to put it back.";
	} else if (x == "29,35" || x == "35,29") {
			answer = "I can’t just spray paint all over the tests! And in front of the professor too.";
	} else if (x == "29,37" || x == "37,29") {
			answer = "I don’t know how to use these two together, but I have a feeling that the flag could be useful in my diabolic plan to get the mineralogy test.";
	} else if (x == "29,49" || x == "49,29") {
			answer = "I can’t cut the tests in front of the professor Martin. And even if I could, should I really?";
	} else if (x == "32,41" || x == "41,32") {
			answer = "Laika likes pumpkin only in cookies.";
	} else if (x == "32,49" || x == "49,32") {
			answer = "I don’t want to hurt Laika!";
	} else if (x == "32,58" || x == "58,32") {
			answer = "There you go, Laika! <br><i>Laika barks and eats the cookies with pleasure. She seems to feel much better. After she finishes, she goes outside and barks to get my attention. I realise that she wants to show me something, so I follow her. After about 15 minutes of wondering in the forest behind the house, she stops in front of a cabin. I somehow understand that Laika’s telling me it belonged to my mother. As I look at the lock at the cabin door, Laika barks and runs away in the direction of the house. <br>Take card <b>05</b>. Remove cards <b>27</b>, <b>32</b> and <b>58</b>.</i>";
	} else if (x == "32,61" || x == "61,32") {
			answer = "As I focus on Laika, I sense that she’s really sad and that she would love to eat some of her favourite cookies that would remind her of my mother. I also feel that she wants to show me something, but she’s way to depressed to do it.";
	} else if (x == "32,49" || x == "49,32") {
			answer = "I don’t want to hurt Laika!";
	} else if (x == "33,43" || x == "43,33") {
			answer = "I can’t just hack Jocelyn’s computer right in front of her.";
	} else if (x == "33,53" || x == "53,33") {
			answer = "Well, this is an absolutely terrible thing to do, but I’m doing it anyway. However, to not be a total villain, I’ll copy all of her files on a cloud first and send her a link to download them tomorrow. Anonymously, obviously. I’m really sorry, Jocelyn! <br><i>As I insert the SD card, the virus rapidly makes all of the files on Jocelyn’s computer unreadable. She returns from the toilet and stays speechless as she looks at the computer screen. there is a message written by the ‘hacker’ that reads: “I hope you have backup. Love, WebParasite”. Jocelyn, after a few minutes of disbelief, leaves the tea shop and goes to the library to say her material for  the lecture is gone. You follow her, and wait for her to finish her conversation with Sandy. As she leaves, you kindly ask Sandy to borrow the projector, now that the lecture is canceled. Sandy, although a bit suspicious about this unexpected turn of events, lets you have it. <br>Take card <b>04</b>. Remove cards <b>07</b>, <b>11</b>, <b>33</b> and <b>53</b>";
			answer = "Well, this is an absolutely terrible thing to do, but I’m doing it anyway. However, to not be a total villain, I’ll copy all of her files on a cloud first and send her a link to download them tomorrow. Anonymously, obviously. I’m really sorry, Jocelyn! <br><i>As I insert the SD card, the virus rapidly makes all of the files on Jocelyn’s computer unreadable. She returns from the toilet and stays speechless as she looks at the computer screen. there is a message written by the ‘hacker’ that reads: “I hope you have backup. Love, WebParasite”. Jocelyn, after a few minutes of disbelief, leaves the tea shop and goes to the library to say her material for  the lecture is gone. You follow her, and wait for her to finish her conversation with Sandy. As she leaves, you kindly ask Sandy to borrow the projector, now that the lecture is canceled. Sandy, although a bit suspicious about this unexpected turn of events, lets you have it. <br>Take card <b>04</b>. Remove cards <b>07</b>, <b>11</b>, <b>20</b>, <b>33</b> and <b>53</b>.</i>";
} else if (x == "34,48" || x == "48,34") {
    answer = "All that is left to do is to bake these cookies. <br><i>Take card <b>58</b>. Remove cards <b>34</b> and <b>48</b>.</i>";
	} else if (x == "35,37" || x == "37,35") {
			answer = "Ok, let’s see do I have some talent in arts. I’ll admit it’s not a masterpiece, but it will do the trick. <br><i>I draw some pretty provocative signs on the flag, just in time before it’s supposed to be raised up on the pole. I go back up to professor Martin’s desk and wait for the big flag reveal. I hear the hymn starting on the speakers, and the people around me start to stir. 30 seconds after, everybody is already by the window, commenting on the flag vandalization. Professor Martin also gets up and goes to the window to see what all the fuss is about. The mineralogy tests stay on the desk, unsupervised. <br>Take card <b>46</b>. Remove cards <b>29</b>, <b>35</b> and <b>37</b>.</i>";
	} else if (x == "35,46" || x == "46,35") {
			answer = "If I spray all over the tests, professor Martin will simply make new copies. It’s not a great solution.";
	} else if (x == "36,61" || x == "61,36") {
			answer = "I focus hard on the sprout, trying to give all the energy I have into it. Even though I’m not really sure what I’m doing, the plant starts to rapidly grow in front of me. In about a minute of my hard work, a flower appears, and it two minutes, there is already a small green fruit. In three minutes, I’ve created a fully grown, completely ripe pumpkin. <br><i>Take card <b>41</b>. Remove card <b>36</b>.</i>";
	} else if (x == "37,49" || x == "49,37") {
			answer = "Cutting the flag could work, but will it draw just enough attention? Maybe I should try something just a bit more provocative.";
	} else if (x == "40,50" || x == "50,40") {
			answer = "I put the peanut butter in the dough, as instructed in the recipe. <br><i>Take card <b>19</b>. Remove cards <b>40</b> and <b>50</b>.</i>";
	} else if (x == "44,60" || x == "60,44") {
			answer = "It’s hard to imagine that someone would drink senna leaves without any tea in the cup.";
	} else if (x == "46,49" || x == "49,46") {
			answer = "Destroying the tests with scissors won’t get me anywhere.";
	} else if (x == "49,55" || x == "55,49") {
			answer = "Cut the money? Absolutely not.";
	} else if (x == "60,61" || x == "61,60") {
			answer = "I focus on the senna plant and I feel the sun on her leaves and the water passing through the xylem. It’s a fascinating feeling.";
	} else if (x == "61,06" || x == "61,09" || x == "61,10" || x == "61,11" || x == "61,14" || x == "61,10" || x == "61,31" || x == "61,42" || x == "61,51" || x == "61,52" || x == "61,57" || x == "61,59") {
			answer = "Unfortunatelly, it seems  to work only on plants and animals. It would be amazing and in same time terryifing to be able to feel other person’s feelings.";
	} else if (x == "15,1522") {
			answer = "As I’m pretty sure that Mary’s address should be 1522 Governor Nicholls Street, New Orleans, I enter the New Orleans dialing code followed by number 1522 in the phone. A woman answers the phone. Is it Mary? <br><i>Take card <b>14</b>.</i>";
	} else if (x == "22,1960") {
			answer = "1960 – After a bit of research, I enter the code 1960 that matches the year in which Eugene Shoemaker and Edward Chao proved that Nördlingen was built on top of a meteorite impact crater. The password is correct! I’m not proud of myself for breaking into Jocelyn’s computer, but I still think that it’s not very smart of her to share her computer password with other people. <br><i>Take card <b>53</b>. Remove card <b>22</b>.</i>";
	} else if (x == "30,6296") {
			answer = "6296 – I enter the 4 digit code in the safe lock and it works! I’m super excited about what treasures I will find in there. And a bit disappointed to see that there are actually only two pieces of paper in it! A letter signed by Mary and a newspaper article. Why is this so important to keep it in a safe? <br><i>Take cards <b>45</b>, <b>54</b> and <b>56</b>. Remove cards <b>13</b> and <b>30</b>.</i>";
	} else if (x == "05,6224") {
			answer = "After using all my deduction powers on solving the Sinbad the Sailor puzzle, I believe that Sinbad’s Baghdad should be equivalent to Shedar star in Cassiopeia constellation. I search the according number on my drawing – it’s 6224. I put the numbers in the padlock and it works like a charm! <br><i>Take card <b>H</b>. Remove cards <b>I</b>, <b>05</b> and <b>64</b>.</i>";
	} else {
  		answer = "That's not working. Try something else.";
  	}
  	document.getElementById("demo").innerHTML = answer;
};
