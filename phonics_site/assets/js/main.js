const body = document.getElementsByTagName("body")[0];
const mainModal = document.getElementById("mainModal");
const modalBackground = document.getElementById("modalBackground");
const mainVideoButton = document.getElementById("mainVideoButton");
const xFirstModal = document.getElementById("xFirstModal");
const date = new Date();
const enterButton = document.getElementById("enterButton");
const astroPhonicsLogo = document.getElementsByClassName("astroPhonicsLogo");
const missionScreen = document.getElementById("missionScreen");
const letterLocker = document.getElementById("letterLocker");
let currentletLockCard = false;
let selectedletLockCard = false;
const enterLetter = document.getElementById("enterLetter");
const ltrLkrHomeButton = document.getElementById("ltrLkrHomeButton");
const logoLetLock = document.getElementById("logoLetLock");
const msHomeButton = document.getElementById("msHomeButton");
const logoMissionScreen = document.getElementById("logoMissionScreen");
const mission = document.getElementsByClassName("mission");
const missionCards = document.getElementsByClassName("missionCard");
const missionCardContainer = document.getElementsByClassName("missionCardContainer");
const mainScreen = document.getElementById("mainScreen");
const mainFooter = document.getElementById("mainFooter");
const slider = document.getElementById("Slider");
const backArrow = document.getElementById("backArrow");
const homeButton = document.getElementById("homeButton");
const logoSliderScreen = document.getElementById("logoSliderScreen");
let selectedIndex = 1;
let currentIndex = 1;
const mundo = document.getElementsByClassName("mundo");
const phonemeSlide = document.getElementsByClassName("phonemeSlide");
const buttonIndex = document.getElementsByClassName("buttonIndex");
const nextArrow = document.getElementById("nextArrow");
const previousArrow = document.getElementById("previousArrow");
const nextBar = document.getElementById("nextBar");
const previousBar = document.getElementById("previousBar");
let distance = 0;
const cardAction = document.getElementsByClassName("cardAction");
const cardScreen = document.getElementsByClassName("cardScreen");
const xCardScreen = document.getElementById("xCardScreen");
const csHomeButton = document.getElementsByClassName("csHomeButton");
const logoLessonScreen = document.getElementById("logoLessonScreen");
let counter = 0;
const liquid = document.getElementById("liquid");
const auxiliarModal =  document.getElementById("auxiliarModal");
let colors1 = new Array();
let colors2 = new Array();
let colors3 = new Array();
const graph = document.getElementsByClassName("graph");
const phon = document.getElementsByClassName("phon");
let change = 0;
const toggleable = document.getElementsByClassName("toggleable");
const phonemeToggle = document.getElementsByClassName("phonemeToggle");
const graphemeToggle = document.getElementsByClassName("graphemeToggle");
const letterlocket = document.getElementsByClassName("letterlocket");
const hoverCard = document.getElementsByClassName("hoverCard");
const grapHover = document.getElementsByClassName("grapHover");
const phoneHover = document.getElementsByClassName("phoneHover");
const letLockPlayButton = document.getElementsByClassName("letLockPlayButton");
let letLockPB = false;
let letLockIndex = 0;
const myList = document. querySelectorAll('#myList a');
const actScreen = document.getElementById("actScreen");
const cardScreenVideo = document.getElementsByClassName("cardScreenVideo");
const chantScreen = document.getElementById("chantScreen");
const printablePDF = document.getElementById("printablePDF");
const printableTracks = document.getElementById("printableTracks");
const graphModalOption = document.getElementsByClassName("graphModalOption");
const graphModalPanel = document.getElementsByClassName("graphModalPanel");
const trickySign = document.getElementsByClassName("trickySign");
const trickyScreen = document.getElementById("trickyScreen");
const trickyPanel = document.getElementById("trickyPanel");
const trickyHomeButton = document.getElementById("trickyHomeButton");
const logoTrickyScreen = document.getElementById("logoTrickyScreen");
const backTricky = document.getElementById("backTricky");
const blendingSign = document.getElementsByClassName("blendingSign");
const blendingScreen = document.getElementById("blendingScreen");
const blendingPanel = document.getElementById("blendingPanel");
const blendingHomeButton = document.getElementById("blendingHomeButton");
const logoBlendingScreen = document.getElementById("logoBlendingScreen");
const backBlending = document.getElementById("backBlending");
const missionSelector = document.getElementById("missionSelector");
const logoMissionSelector = document.getElementById("logoMissionSelector");
const backArrow_MS = document.getElementById("backArrow_MS");
const mission_selector_btn = document.getElementById("mission_selector_btn");
const mission_selection = document.getElementsByClassName("mission_selection");
let enabled_counter = 0;
const estilo3 = document.getElementById("ubica1");
const letLockToolTip = document.getElementById("letLockToolTip");
let oneLeft = true;

 var phonicsApp = {
    lessons: [
        /* ------------------------------ MISSION 1 ----------------------------- */
        {

            lesson: 1,
             mission: 1,
        //    // css:"s_mission1", //quitamos esta clase, ya que se automatizó a container_lessonN//
            ejemplo: `ejemplos/ejemplo1.png`,
            grapheme: `grapheme/lesson_1.png`,
            phoneme:"phoneme/lesson_1.png",
            audio: new Audio(`assets/audios/lesson_1.mp3`),
            pathResources: "resources/m1/",
            newSound :"newsound/",
            media: ["video/lesson_1.mp4"],
            poster: "mission_1/lesson_1/poster/lesson1_poster.jpg",
            LO_info: [
                { title: "Lesson 1 Introduction (10 min.)", thumbnail: "mission_1/lesson_1/M1_01s_intro", activity: "mission_1/lesson_1/M1_01s_intro", teacherNotes: "<strong>Lesson 1 Introduction (10 min.) </strong><ul><li>Display the letter <em>s.</em></li><li>Point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style:italic;'>Look, listen and repeat.</span> (You may choose to create gestures for each part of the instruction, such as pointing to your eyes for look, cupping your hands behind your ears for listen and pointing to your mouth as you say repeat.) </li><li>Play the audio for the digital activity. </li><li>Then point to the letter, say the sound, and have students repeat it.  </li><li>Encourage students to continue repeating the sound: /s/, /s/, /s/. </li></ul>", answerKey: "" },
                { title: "Lesson 1 Activity 1 (20 min.)", thumbnail: "mission_1/lesson_1/M1_01s_act1", activity: "mission_1/lesson_1/M1_01s_act1", teacherNotes: "<strong>Lesson 1 Activity 1 (20 min.) </strong><ul><li>Display some of the letters of the alphabet, including the letter <em>s.</em></li><li>Invite volunteers to point out the letter s and say the sound.  </li><li>Have students cover their eyes while you change the order of the letters displayed. </li><li>Invite different volunteers to point out the letter <em>s.</em> Continue the activity until everyone (who chooses to) has had the opportunity to find the letter <em> s.</em> </li><li>Encourage students to continue repeating the sound: /s/, /s/, /s/. </li><li>Then display the digital activity and read the instructions aloud: <span style='color:#7FD5EF; font-weight:bold; font-style:italic; '>Look and color the letter s.</span></li><li>Guide students to complete the activity. </li></ul>", answerKey: "" },
                { title: "Lesson 1 Activity 2 (15 min.)", thumbnail: "mission_1/lesson_1/M1_01s_act2", activity: "mission_1/lesson_1/M1_01s_act2", teacherNotes: "<strong>Lesson 1 Activity 2 (15 min.) </strong><ul><li>Display the letter s and elicit the sound. </li><li>Tell students they are going to see and hear some words that begin with the sound /s/.  </li><li>Point to the activity instructions and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic; '>Look and say. Then listen and check.</span> </li><li>Guide students to complete the digital activity as a group. </li><li>Then have students do the digital activity again, individually or in pairs. Encourage them to repeat the words.</li></ul>", answerKey: "" },
                { title: "Lesson 1 Activity 3 (15 min.)", thumbnail: "mission_1/lesson_1/M1_01s_act3", activity: "mission_1/lesson_1/M1_01s_act3", teacherNotes: "<strong>Lesson 1 Activity 3 (15 min.) </strong><ul><li>Display the letter s and elicit the sound. </li><li>Encourage students to recall words that begin with the letter <em>s.</em>  </li><li>Then point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic; '>Look, listen and match.</span> </li><li>Guide students to complete the digital activity as a group.  </li><li>Then have students play a few more rounds of the activity in pairs or individually. Encourage students to repeat the words when they turn the cards. </li</ul>", answerKey: "" },
            ],
            chant: [
                { title:"Lesson 1 Chant (25 min.)", thumbnail: "mission_1/lesson_1/chant/M1_01s_chant1", activity: "mission_1/lesson_1/chant/M1_01s_chant1", teacherNotes: "<strong>Lesson 1 Chant (25 min.) </strong><ul><li>Display the first section of the digital activity and point to the picture. </li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.)  </li><li>Then display the letter <em>s</em> and elicit the sound. </li><li>Explain that they are going to hear a chant with words that have the sound <em>/s/.</em></li><li>Point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic; '>Look and listen.</span> </li><li>Play the chant.  </li><li>Elicit any words with the /s/ sound they heard. (It’s OK if they can’t identify any.) </li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound <em>/s/.</em> </li><li>Then display the second part of the digital activity.  </li><li>Point to the chant below the picture. Tell students they are going to listen and read. </li><li>Play the chant again, pausing after the first line: <em>Sam sees his sister. </em> </li><li>Have students point out who Sam and his sister are in the picture.  </li><li>Repeat the first line of the chant. Point to each word in the line as you say it. </li><li>Encourage students to repeat the line, pointing to the words as they say them. </li><li>Then elicit the words with the sound <em> /s/</em> in that line. (If students don’t know a word, but they see the s in it, have them point it out and you can say it for them.) </li><li>Continue playing the chant, pausing at the end of each line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound <em>/s/.</em> </li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.  </li></ul>", answerKey: "Chant answer Key Lesson 1 ex1" },
            ],
            printable: [
                [{pdf_source: "lesson_1/lesson_1"}],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_1/lesson_1a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_1/lesson_1b" },
                    { kind: "mp3", track: "Track 3", track_source: "lesson_1/lesson_1c" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_1/AudiosLesson1" }],
            ],
            descargables: ["descargables/"]

        },
        {

            lesson: 2,
           mission: 1,
          // // css:"a_mission1",
            ejemplo: "ejemplos/ejemplo2.png",
            grapheme: "grapheme/lesson_2.png",
            phoneme:"phoneme/lesson_2.png",
            audio: new Audio("assets/audios/lesson_2.mp3"),
            pathResources: "resources/mission1/",
            media: ["video/lesson_2.mp4"],
            poster: "mission_1/lesson_2/poster/lesson2_poster.jpg",
            LO_info: [
                { title:"Lesson 2 Introduction (10 min.)", thumbnail: "mission_1/lesson_2/M1_02a_intro", activity: "mission_1/lesson_2/M1_02a_intro", teacherNotes: "<strong>Lesson 2 Introduction (10 min.) </strong><ul><li>Display the letter s and elicit the sound /s/. </li><li>Then tell students they are going to learn a new sound. </li><li>Display the letter <em>a.</em>  </li><li>Point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look, listen and repeat. </span></li><li>Play the audio for the digital activity. </li><li>Then point to the letter, say the sound, and have students repeat it.  </li><li>Encourage students to continue repeating the sound:<em> /æ/, /æ/, /æ/.</em></li></ul>", answerKey: "" },
                { title:"Lesson 2 Activity 1 (20 min.)", thumbnail: "mission_1/lesson_2/M1_02a_act1", activity: "mission_1/lesson_2/M1_02a_act1", teacherNotes: "<strong>Lesson 2 Activity 1 (20 min.) </strong><ul><li>Display some letters of the alphabet, including the letters <em>s</em> and<em> a.</em> </li><li>Invite volunteers to point out the letter s and say the sound. </li><li>Then have them point out the letter <em>a</em> and say the sound. </li><li>Tell students to cover their eyes while you change the order of the letters displayed. </li><li>Invite different volunteers to point out the letters <em>s</em> and <em>a.</em> Continue the activity until everyone (who chooses to) has had the opportunity to find the letters. </li><li>Then display the digital activity and read the instructions aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Listen and choose.</span> </li><li>Guide students to complete the digital activity as a group, or do the first item together and monitor students as they complete the others in pairs or individually. </li></ul>", answerKey: "" },
                { title:"Lesson 2 Activity 2 (15 min.)", thumbnail: "mission_1/lesson_2/M1_02a_act2", activity: "mission_1/lesson_2/M1_02a_act2", teacherNotes: "<strong>Lesson 2 Activity 2 (15 min.) </strong><ul><li>Display the letter a and elicit the sound.  </li><li>Tell students they are going to see and hear some words with the sound /æ/.  </li><li>Point to the instructions in the digital activity and read them aloud: <span  style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look and say. Then listen and check.</span> </li><li>Guide students to complete the digital activity as a group. </li><li>Then point to the first card in the activity and say: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;' >apple.</span></li><li>Invite a volunteer to point out the letter a in the word.  </li><li>Invite other volunteers to find the letter a in the other words.  </li><li>Point to the cards for cat and hat. Explain that the letter <em>a</em> is sometimes in the middle of a word. </li><li>Then have students do the digital activity again. Encourage them to repeat the words.  </li></ul>", answerKey: "" },
                { title:"Lesson 2 Activity 3 (15 min.)", thumbnail: "mission_1/lesson_2/M1_02a_act3", activity: "mission_1/lesson_2/M1_02a_act3", teacherNotes: "<strong>Lesson 2 Activity 3 (15 min.) </strong><ul><li>Display the letter a and elicit the sound. </li><li>Encourage students to recall words with the /æ/ sound.  </li><li>Then point to the instructions in the digital activity and read them aloud: <span  style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look, listen and match.</span> </li><li>Guide students to complete the digital activity as a group.  </li><li>Then have students play a few more rounds of the activity in pairs or individually. Encourage students to repeat the words when they turn the cards. </li></ul>", answerKey: "" },
            ],
            chant: [
                { title:"Lesson 2 Chant (25 min.)", thumbnail: "mission_1/lesson_2/chant/M1_02a_chant2", activity: "mission_1/lesson_2/chant/M1_02a_chant2", teacherNotes: "<strong>Lesson 2 Chant (25 min.) </strong><ul><li>Display the first section of the digital activity and point to the picture. </li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.)  </li><li>Then display the letter a and elicit the sound. </li><li>Explain that they are going to hear a chant with words that have the sound /æ/.  </li><li>Point to and say the activity instructions: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;' >Look and listen.</span> </li><li>Play the chant.  </li><li>Elicit any words with the /æ/ sound they heard. (It’s OK if they can’t identify any.) </li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /æ/. </li><li>Then display the second part of the digital activity.  </li><li>Point to the chant below the picture. Tell students they are going to listen and read. </li><li>Play the chant again, pausing after the first line: <em>There’s an apple in my bag.</em>  </li><li>Have students point out the apple and the bag in the picture.  </li><li>Repeat the first line of the chant. Point to each word in the line as you say it. </li><li>Encourage students to repeat the line, pointing to the words as they say them. </li><li>Then elicit the words with the sound /æ/. (If students don’t know a word, but they see the a in it, have them point it out and you can say it for them.) </li><li>Continue playing the chant, pausing at the end of each line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /æ/. </li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant. </li></ul>", answerKey: "" },
            ],
            printable: [
                [{pdf_source: "lesson_2/lesson_2"}],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_2/lesson_2a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_2/lesson_2b" },
                    { kind: "mp3", track: "Track 3", track_source: "lesson_2/lesson_2c" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_2/AudiosLesson2" }],
            ],
            descargables: [""]

        },
        {

            lesson: 3,
           mission: 1,
        // // css:"t_mission1",
            ejemplo: "ejemplos/ejemplo3.png",
            grapheme: "grapheme/lesson_3.png",
            phoneme:"phoneme/lesson_3.png",
            audio: new Audio("assets/audios/lesson_3.mp3"),
            pathResources: "resources/mission1/",
            media: ["video/lesson_3.mp4"],
            poster: "mission_1/lesson_3/poster/lesson3_poster.jpg",
            LO_info: [
                { title:"Lesson 3 Introduction (10 min.)", thumbnail: "mission_1/lesson_3/M1_03t_intro", activity: "mission_1/lesson_3/M1_03t_intro", teacherNotes: "<strong>Lesson 3 Introduction (10 min.) </strong><ul><li>Display the letter s and elicit the sound<em> /s/.</em>  </li><li>Then display the letter<em> a</em> and elicit the sound /æ/. </li><li>Encourage students to recall any words with the /s/ or /æ/ sounds. </li><li>Then tell students they are going to learn a new sound. </li><li>Display the letter <em>t.</em></li><li>Point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look, listen and repeat.</span> </li><li>Play the audio for the digital activity. </li><li>Then point to the letter, say the sound, and have students repeat it.</li><li>Encourage students to continue repeating the sound: /t/, /t/, /t/. </li></ul>" },
                { title:"Lesson 3 Activity 1 (20 min.)", thumbnail: "mission_1/lesson_3/M1_03t_act1", activity: "mission_1/lesson_3/M1_03t_act1", teacherNotes: "<strong>Lesson 3 Activity 1 (20 min.) </strong><ul><li>Display the letters <em>s</em>, <em>a</em>, and <em>t</em>. </li><li>Invite volunteers to point out the letters s and a and say the sounds. </li><li>Then have them point out the letter t and say the sound. </li><li>Point to one of the three cards and elicit the sound. Continue randomly pointing to different cards and eliciting the sounds, going faster and faster until students can’t keep up. </li><li>Then display the digital activity and read the instructions aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Listen and order.</span> </li><li>Guide students to complete the digital activity as a group, or do the first item together and monitor students as they complete the others in pairs or individually. </li></ul>" },
                { title:"Lesson 3 Activity 2 (15 min.)", thumbnail: "mission_1/lesson_3/M1_03t_act2", activity: "mission_1/lesson_3/M1_03t_act2", teacherNotes: "<strong>Lesson 3 Activity 2 (15 min.) </strong><ul><li>Display the letter <em>t</em> and elicit the sound.  </li><li>Tell students they are going to see and hear some words with the sound /t/.</li><li>Point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look and say. Then listen and check.</span> </li><li>Guide students to complete the digital activity as a group. </li><li>Then point to the first card in the activity and say: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>tap.</span>  </li><li>Invite a volunteer to point out the letter <em>t</em> in the word.  </li><li>Invite other volunteers to find the letter t in the other words.  </li><li>Point to the cards and ask:<span style='color:#7FD5EF; font-weight:bold; font-style: italic;'> Is the t at the beginning, middle or end of the word?</span> (At the beginning for all words, and also at the end in tablet.) </li><li>Then have students do the digital activity again. Encourage them to repeat the words.  </li></ul> ", answerKey: "Chant answer Key Lesson 3 ex1" },
                { title:"Lesson 3 Activity 3 (15 min.)", thumbnail: "mission_1/lesson_3/M1_03t_act3", activity: "mission_1/lesson_3/M1_03t_act3", teacherNotes: "<strong>Lesson 3 Activity 3 (15 min.) </strong><ul><li>Display the letters <em>s</em>, <em>a</em>, and <em>t</em>. Elicit the sounds. </li><li>Encourage students to recall words that begin with each sound.  </li><li>Then point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look and listen. Tap and drop.</span> </li><li>Play the audio for the first card in the digital activity. Ask: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Does (the word for the picture) begin with a /s/, /æ/, or /t/ sound? </span>(Answer will depend on the first card displayed in the activity.) </li><li>Point to the three sound categories and demonstrate how to tap on a card and place it in the correct category. </li><li>Guide students to complete the digital activity as a group, or monitor them as they complete it in pairs or individually.  </li></ul>", answerKey: "Chant answer Key Lesson 3 ex1" },
            ],
            chant: [
                { title:"Lesson 3 Chant (30 min.)", thumbnail: "mission_1/lesson_3/chant/M1_03t_chant3", activity: "mission_1/lesson_3/chant/M1_03t_chant3", teacherNotes: "<strong> Lesson 3 Chant (30 min.) </strong><ul><li>Display the first section of the digital activity and point to the picture. </li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.)  </li><li>Then display the letter t and elicit the sound. </li><li>Explain that they are going to hear a chant with words that have the sound /t/.  </li><li>Point to the instructions in the digital activity and read them aloud:<span style='color:#7FD5EF; font-weight:bold; font-style: italic;'> Look and listen.</span> </li><li>Play the chant.  </li><li>Elicit any words with the /t/ sound they heard. (It’s OK if they can’t identify any.) </li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /t/. </li><li>Then display the second part of the digital activity.  </li><li>Point to the chant below the picture. Tell students they are going to listen and read. </li><li>Play the chant again, pausing after the first line: <em>Tip, tap on my tablet.</em> </li><li>Have students point out the tablet in the picture.  </li><li>Repeat the first line of the chant. Point to each word in the line as you say it. </li><li>Encourage students to repeat the line, pointing to the words as they say them. </li><li>Then elicit the words with the sound /t/. (If students don’t know a word, but they see the t in it, have them point out the word and you can say it for them.) </li><li>Continue playing the chant, pausing at the end of each line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /t/. </li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant. </li><li>If time allows, assign and practice actions for tapping on a tablet, watching TV, counting to ten, and taking a photo. Then play the audio for the chant and have students act it out. </li></ul>", answerKey: "" },
            ],
            printable: [
                [{pdf_source: "lesson_3/lesson_3"}],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_3/lesson_3a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_3/lesson_3b" },
                    { kind: "mp3", track: "Track 3", track_source: "lesson_3/lesson_3c" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_3/AudiosLesson3" }],
            ],
            descargables: [""]

        },
        {

        lesson: 4,
           mission: 1,
           // css:"p_mission1",
            ejemplo: "ejemplos/ejemplo4.png",
            grapheme: "grapheme/lesson_4.png",
            phoneme:"phoneme/lesson_4.png",
            audio: new Audio("assets/audios/lesson_4.mp3"),
            pathResources: "resources/mission1/",
            media: ["video/lesson_4.mp4"],
            poster: "mission_1/lesson_4/poster/lesson4_poster.jpg",
            LO_info: [
                { title:"Lesson 4 Introduction (10 min.)", thumbnail: "mission_1/lesson_4/M1_04p_intro", activity: "mission_1/lesson_4/M1_04p_intro", teacherNotes: "<strong>Lesson 4 Introduction (10 min.) </strong><ul><li>Display the letters <em>s, a</em>, and <em>t</em> and elicit the sounds. </li><li>Then tell students they are going to learn a new sound. </li><li>Point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look, listen and repeat.</span> </li><li>Play the audio for the digital activity. </li><li>Then point to the letter, say the sound, and have students repeat it.  </li><li>Encourage students to continue repeating the sound: /p/, /p/, /p/. </li></ul>", answerKey: "--" },
                { title:"Lesson 4 Activity 1 (20 min.)", thumbnail: "mission_1/lesson_4/M1_04p_act1", activity: "mission_1/lesson_4/M1_04p_act1", teacherNotes: "<strong>Lesson 4 Activity 1 (20 min.) </strong><ul><li>Display some of the letters of the alphabet, including <em>s, a, t,</em> and <em>p.</em> </li><li>Invite volunteers to point out the letter <em>p</em> and say the sound. </li><li>Then have them point out the letters <em>s, a,</em> and <em>t,</em> in turn, and say the sounds. </li><li>Tell students to cover their eyes while you change the order of the letters displayed. </li><li>Invite different volunteers to point out the letters <em>s, a, t,</em> and <em>p.</em> Encourage students to say the sounds. Continue the activity until everyone (who chooses to) has had the opportunity to find the letters. </li><li>Then display the digital activity and read the instructions aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Listen and choose.</span> </li><li>Guide students to complete the digital activity as a group, or do the first item together and monitor students as they complete the others in pairs or individually.</li></ul>", answerKey: "" },
                { title:"Lesson 4 Activity 2 (15 min.)", thumbnail: "mission_1/lesson_4/M1_04p_act2", activity: "mission_1/lesson_4/M1_04p_act2", teacherNotes: "<strong>Lesson 4 Activity 2 (15 min.) </strong><ul><li>Display the letter p and elicit the sound.  </li><li>Tell students they are going to see and hear some words with the sound /p/.  </li><li>Point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look and say. Then listen and check.</span> </li><li>Guide students to complete the digital activity as a group. </li><li>Then point to the first card in the activity and say:<span style='color:#7FD5EF; font-weight:bold; font-style: italic;'> paint.</span>  </li><li>Invite a volunteer to point out the letter <em>p</em> in the word. </li><li>Invite other volunteers to find the letter <em>p</em> in the other words.  </li><li>Then have students do the digital activity again. Encourage them to repeat the words.</li></ul>", answerKey: "" },
                { title:"Lesson 4 Activity 3 (15 min.)", thumbnail: "mission_1/lesson_4/M1_04p_act3", activity: "mission_1/lesson_4/M1_04p_act3", teacherNotes: "<strong>Lesson 4 Activity 3 (15 min.) </strong><ul><li>Display the letters <em>s, t,>/em> and <em>p</em> and elicit the sounds. </li><li>Encourage students to recall words that begin with the three sounds.  </li><li>Then point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Listen and choose the odd one out.</span> </li><li>Play the audio for the letter <em>t.</em> Then point to the pictures and play the audio for each.  </li><li>Elicit the word that does not have a /t/ sound and select it. </li><li>Guide students to complete the digital activity as a group.  </li><li>Then have students complete the activity again in pairs or individually. Encourage students to repeat the letter sounds and words. </li></ul>", answerKey: "" },
            ],
            chant: [
                { title:"Lesson 4 Chant (25 min.)", thumbnail: "mission_1/lesson_4/chant/M1_04p_chant4", activity: "mission_1/lesson_4/chant/M1_04p_chant4", teacherNotes: "<strong>Lesson 4 Chant (25 min.) </strong><ul><li>Display the first section of the digital activity and point to the picture. </li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.)  </li><li>Then display the letter <em>p</em> and elicit the sound. </li><li>Explain that they are going to hear a chant with words that have the sound /p/.  </li><li>Point to and say the activity instructions: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look and listen.</span> </li><li>Play the chant.  </li><li>Elicit any words with the /p/ sound they heard. (It’s OK if they can’t identify any.) </li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /p/. </li><li>Then display the second part of the digital activity.  </li><li>Point to the chant below the picture. Tell students they are going to listen and read. </li><li>Play the chant again, pausing after the first line:<em> Paper and paint.</em>  </li><li>Have students point out the paper and paint in the picture.  </li><li>Repeat the first line of the chant. Point to each word in the line as you say it. </li><li>Encourage students to repeat the line, pointing to the words as they say them. </li><li>Then elicit the words with the sound /p/. (If students don’t know a word, but they see the p in it, have them point out the word and you can say it for them.) </li><li>Continue playing the chant, pausing at the end of each line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /p/. </li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant. </li></ul>", answerKey: "" },
            ],
            printable: [
                [{pdf_source: "lesson_4/lesson_4"}],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_4/lesson_4a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_4/lesson_4b" },
                    { kind: "mp3", track: "Track 3", track_source: "lesson_4/lesson_4c" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_4/AudiosLesson4" }],
            ],
            descargables: [""]

        },
        {

           lesson: 5,
           mission: 1,
           // css:"i_mission1",
            ejemplo: "ejemplos/ejemplo5.png",
            grapheme: "grapheme/lesson_5.png",
            phoneme:"phoneme/lesson_5.png",
            audio: new Audio("assets/audios/lesson_5.mp3"),
            pathResources: "resources/mission1/",
            media: ["video/lesson_5.mp4"],
            poster: "mission_1/lesson_5/poster/lesson5_poster.jpg",
            LO_info: [
                { title:"Lesson 5 Introduction (15 min.)", thumbnail: "mission_1/lesson_5/M1_05i_intro", activity: "mission_1/lesson_5/M1_05i_intro", teacherNotes: "<strong>Lesson 5 Introduction (15 min.) </strong><ul><li>One by one, display the letters <em>s, a, t, p</em> and elicit the sounds. </li><li>Encourage students to recall any words with the /s/, /æ/, /t/, or /p/ sounds. </li><li>Then tell students they are going to learn a new sound. </li><li>Display the letter <em>i.</em>  </li><li>Point to the instructions in the digital activity and read them aloud:<span style='color:#7FD5EF; font-weight:bold; font-style: italic;'> Look, listen and repeat.</span> </li><li>Play the audio for the digital activity. </li><li>Then point to the letter, say the sound, and have students repeat it.  </li><li>Encourage students to continue repeating the sound: /ɪ/, /ɪ/, /ɪ/. </li></ul>", answerKey: "" },
                { title:"Lesson 5 Activity 1 (20 min.)", thumbnail: "mission_1/lesson_5/M1_05i_act1", activity: "mission_1/lesson_5/M1_05i_act1", teacherNotes: "<strong>Lesson 5 Activity 1 (20 min.) </strong><ul><li>Display the letters <em>s, a, p, t,</em> and <em>i.</em> </li><li>Invite volunteers to choose letters and say the sounds. </li><li>Point to one of the five cards and elicit the sound. Continue randomly pointing to different cards and eliciting the sounds, going faster and faster until students can’t keep up. </li><li>Then display the digital activity and read the instructions aloud: Listen and choose. </li><li>Guide students to complete the digital activity as a group, or do the first item together and monitor students as they complete the others in pairs or individually. </li></ul>", answerKey: "" },
                { title:"Lesson 5 Activity 2 (15 min.)", thumbnail: "mission_1/lesson_5/M1_05i_act2", activity: "mission_1/lesson_5/M1_05i_act2", teacherNotes: "<strong>Lesson 5 Activity 2 (15 min.) </strong><ul><li>Display the letter i and elicit the sound /ɪ/.  </li><li>Tell students they are going to see and hear some words with the sound /ɪ/.  </li><li>Point to the instructions in the digital activity and read them aloud: <span  style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look and say. Then listen and check.</span> </li><li>Guide students to complete the digital activity as a group. </li><li>Then point to the first card in the activity and say:<span  style='color:#7FD5EF; font-weight:bold; font-style: italic;'> insects.  </li><li>Guide students to complete the first section of the digital activity as a group. </li><li>Then guide students to complete the other three sections individually. (Please note that students will be coloring a different letter in each section.9 </li></ul>", answerKey: "" },
                { title:"Lesson 5 Activity 3 (15 min.)", thumbnail: "mission_1/lesson_5/M1_05i_act3", activity: "mission_1/lesson_5/M1_05i_act3", teacherNotes: "<strong>Lesson 5 Activity 3 (15 min.)  </strong><ul><li>Display the letters <em>a, t, p,</em> and <em>i.</em> </li><li>Invite volunteers to point to the letters and say the sounds. </li><li>Have students cover their eyes while you change the order of the letters displayed. </li><li>Invite different volunteers to point out the letter i. Continue the activity until everyone (who chooses to) has had the opportunity to find the different letters. </li><li>Then display the digital activity and read the instructions aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look and color the letter i.<span> </li><li>Guide students to complete the first section of the digital activity as a group. </li><li>Then guide students to complete the other three sections individually. (Please note that students will be coloring a different letter in each section.9 </li></ul>", answerKey: "" },
            ],
            chant: [
                { title:"Lesson 5 Chant (25 min.)", thumbnail: "mission_1/lesson_5/chant/M1_05i_chant5", activity: "mission_1/lesson_5/chant/M1_05i_chant5", teacherNotes: "<strong>Lesson 5 Chant (25 min.) </strong><ul><li>Display the first section of the digital activity and point to the picture. </li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.)  </li><li>Then display the letter i and elicit the sound /ɪ/. </li><li>Explain that they are going to hear a chant with words that have the sound /ɪ/.  </li><li>Point to the instructions in the digital activity and read them aloud: Look and listen. </li><li>Play the chant.  </li><li>Elicit any words with the /ɪ/ sound they heard. (It’s OK if they can’t identify any.) </li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /ɪ/. </li><li>Then display the second part of the digital activity.  </li><li>Point to the chant below the picture. Tell students they are going to listen and read. </li><li>Play the chant again, pausing after the first line: <em>Bill has a little lizard.</em>  </li><li>Have students point out the lizard in the picture.  </li><li>Repeat the first line of the chant. Point to each word in the line as you say it. </li><li>Encourage students to repeat the line, pointing to the words as they say them. </li><li>Then elicit the words with the sound /ɪ/. (If students don’t know a word, but they see the i in it, have them point out the word and you can say it for them.) </li><li>Continue playing the chant, pausing at the end of each line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /ɪ/. </li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant. </li> </ul>", answerKey: "" },
            ],
            printable: [
                [{pdf_source: "lesson_5/lesson_5"}],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_5/lesson_5a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_5/lesson_5b" },
                    { kind: "mp3", track: "Track 3", track_source: "lesson_5/lesson_5c" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_5/AudiosLesson5" }],
            ],
            descargables: [""]

        },
        {

            lesson: 6,
           mission: 1,
           // css:"n_mission1",
            ejemplo: "ejemplos/ejemplo6.png",
            grapheme: "grapheme/lesson_6.png",
            phoneme:"phoneme/lesson_6.png",
            audio: new Audio("assets/audios/lesson_6.mp3"),
            pathResources: "resources/mission1/",
            media: ["video/lesson_6.mp4"],
            poster: "mission_1/lesson_6/poster/lesson6_poster.jpg",
            LO_info: [
                { title:"Lesson 6 Introduction (10 min.)", thumbnail: "mission_1/lesson_6/M1_06n_intro", activity: "mission_1/lesson_6/M1_06n_intro", teacherNotes: "<strong>Lesson 6 Introduction (10 min.) </strong><ul><li>Display the letters <em>s, a, t, p, i,</em> and elicit the sounds. </li><li>Then tell students they are going to learn a new sound. </li><li>Display the letter <em>n.</em></li><li>Point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look, listen and repeat.</span> </li><li>Play the audio for the digital activity. </li><li>Then point to the letter, say the sound, and have students repeat it.  </li><li>Encourage students to continue repeating the sound: /n/, /n/, /n/. </li>/ul>", answerKey: "" },
                { title:"Lesson 6 Activity 1 (20 min.)", thumbnail: "mission_1/lesson_6/M1_06n_act1", activity: "mission_1/lesson_6/M1_06n_act1", teacherNotes: "<strong>Lesson 6 Activity 1 (20 min.) </strong><ul><li>Display the letters <em>s, a, t, p, i, n </em>in a row. </li><li>Point to each letter and elicit the sound.</li><li>Tell students to cover their eyes while you change the order of the letters. </li><li>Then point again to each letter in the row and elicit the sound. </li><li>Display the digital activity and read the instructions aloud:<span style='color:#7FD5EF; font-weight:bold; font-style: italic;'> Listen and order.</span></li><li>Guide students to complete the digital activity as a group. </li></ul>", answerKey: "" },
                { title:"Lesson 6 Activity 2 (15 min.)", thumbnail: "mission_1/lesson_6/M1_06n_act2", activity: "mission_1/lesson_6/M1_06n_act2", teacherNotes: "<strong>Lesson 6 Activity 2 (15 min.) </strong><ul><li>Display the letter <em>n</em> and elicit the sound /n/.  </li><li>Tell students they are going to see and hear some words with the sound /n/.  </li><li>Point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look and say. Then listen and check. </span></li><li>Guide students to complete the digital activity as a group. </li><li>Then point to the first card in the activity and say: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>numbers.</span></li><li>Invite a volunteer to point out the letter <em>n</em> in the word.  </li><li>Invite other volunteers to find the letter <em>n</em> in the other words.  </li><li>Then have students do the digital activity again. Encourage them to repeat the words.</li></ul>", answerKey: "" },
                { title:"Lesson 6 Activity 3 (15 min.)", thumbnail: "mission_1/lesson_6/M1_06n_act3", activity: "mission_1/lesson_6/M1_06n_act3", teacherNotes: "<strong>Lesson 6 Activity 3 (15 min.)</strong><ul><li>Display the letters <em>s, a, t, p, i, n,</em> and elicit the sounds. </li><li>Encourage students to recall words that begin with the sounds.  </li><li>Then point to the instructions in the digital activity and read them aloud:<span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look and color.</span></li><li>Guide students to complete the digital activity as a group.  </li><li>Then have students complete the activity again in pairs or individually. Encourage students to repeat the letter sounds and words as they color. </li></ul>", answerKey: "" },
            ],
            chant: [
                { title:"Lesson 6 Chant (25 min.)", thumbnail: "mission_1/lesson_6/chant/M1_06n_chant6", activity: "mission_1/lesson_6/chant/M1_06n_chant6", teacherNotes: "<strong>Lesson 6 Chant (25 min.)</strong><ul><li>Display the first section of the digital activity and point to the picture. </li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.)  </li><li>Then display the letter <em>n</em> and elicit the sound. </li><li>Explain that they are going to hear a chant with words that have the sound /n/.</li><li>Point to and say the activity instructions: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look and listen.</span></li><li>Play the chant.</li><li>Elicit any words with the /n/ sound they heard. (It’s OK if they can’t identify any.) </li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /n/. </li><li>Then display the second part of the digital activity.  </li><li>Point to the chant below the picture. Tell students they are going to listen and read.</li><li>Play the chant again, pausing after the first line: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Nick lives at number nine.</span></li><li>Have students point out the number nine in the picture.</li><li>Repeat the first line of the chant. Point to each word in the line as you say it. </li><li>Encourage students to repeat the line, pointing to the words as they say them.</li><li>Then elicit the words with the sound /n/. (If students don’t know a word, but they see the n in it, have them point out the word and you can say it for them.) </li><li>Continue playing the chant, pausing at the end of each line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /n/. </li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant. </li></ul>", answerKey: "" },
            ],
            printable: [
                [{pdf_source: "lesson_6/lesson_6"}],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_6/lesson_6a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_6/lesson_6b" },
                    { kind: "mp3", track: "Track 3", track_source: "lesson_6/lesson_6c" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_6/AudiosLesson6" }],
            ],
            descargables: [""]

        },
        /* ------------------------------ MISSION 2 ----------------------------- */
        {

            lesson: 7,
            mission: 2,
            // css:"m_mission2",
            ejemplo: "ejemplos/ejemplo7.png",
            grapheme: "grapheme/lesson_7.png",
            phoneme:"phoneme/lesson_7.png",
            audio: new Audio("assets/audios/lesson_7.mp3"),
            pathResources: "resources/mission2/",
            media: ["video/lesson_7.mp4"],
            poster: "mission_2/lesson_7/poster/lesson7_poster.jpg",
            LO_info: [
                { title:"Lesson 7 Introduction (15 min.)", thumbnail: "mission_2/lesson_7/M2_07m_intro", activity: "mission_2/lesson_7/M2_07m_intro", teacherNotes: "<strong>Lesson 7 Introduction (15 min.) </strong><ul><li>Display the letters <em>s, a, t, p, i, n.</em></li><li>Elicit the sounds.</li><li>Invite volunteers to arrange the letters to form words.</li><li>Then tell students they are going to learn a new sound.</li><li>Display the letter <em>m.</em></li><li>Point to the instructions in the digital activity and read them aloud:<span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look, listen and repeat.</span></li><li>Play the audio for the digital activity.</li><li>Then point to the letter, say the sound, and have students repeat it.</li><li>Encourage students to continue repeating the sound: /m/, /m/, /m/. </li></ul>", answerKey: "" },
                { title:"Lesson 7 Activity 1 (15 min.)", thumbnail: "mission_2/lesson_7/M2_07m_act1", activity: "mission_2/lesson_7/M2_07m_act1", teacherNotes: "<strong>Lesson 7 Activity 1 (15 min.) </strong><ul><li>Display the letters of the alphabet, including the letter <em>m.</em> </li><li>Invite volunteers to point out the letter <em>m</em> and say the sound. </li><li>Then display the digital activity.</li><li>Point to each letter and elicit the sounds.</li><li>Play the audio for each letter to confirm the sounds.</li><li>Then point to the activity instructions and read them aloud:<span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Listen and choose.</span> </li><li>Guide students to complete the digital activity as a group.</li><li>If time allows, have students do the digital activity again individually or in pairs. </li></ul>", answerKey: "" },
                { title:"Lesson 7 Activity 2 (15 min.)", thumbnail: "mission_2/lesson_7/M2_07m_act2", activity: "mission_2/lesson_7/M2_07m_act2", teacherNotes: "<strong>Lesson 7 Activity 2 (15 min.) </strong><ul><li>Display the letter m and elicit the sound.</li><li>Tell students they are going to see and hear some words that begin with th<e sound /m/.</li><li>Point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look and say. Then listen and check.</span></li><li>Guide students to complete the digital activity as a group. </li><li>Then have students do the digital activity again, in pairs or individually. Encourage them to repeat the words.</li><li>After students have completed the activity, point to the words mat and map. Invite volunteers to sound out and then blend and say the word. </li></ul>", answerKey: "" },
                { title:"Lesson 7 Activity 3 (15 min.)", thumbnail: "mission_2/lesson_7/M2_07m_act3", activity: "mission_2/lesson_7/M2_07m_act3", teacherNotes: "<strong>Lesson 7 Activity 3 (15 min.) </strong><ul><li>Display the letters m and n and elicit the sounds. </li><li>Encourage students to recall words that begin with the letters <em>m</em> and <em>n.</em>  </li><li>Then point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look and listen. Tap and drop. </span></li><li>Play the audio for the first card in the digital activity. Ask: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Does (the word for the picture) have an /n/ or an /m/ sound in it? </span>(Answer will depend on the first card displayed in the activity.) </li><li>Point to the two sound categories and demonstrate how to tap on a card and place it in the correct category. </li><li>Guide students to complete the digital activity as a group, or monitor them as they complete it in pairs or individually. </li></ul> ", answerKey: "" }
            ],
            chant: [
                { title:"Lesson 7 Chant (25 min.)", thumbnail: "mission_2/lesson_7/chant/M2_07m_chant7", activity: "mission_2/lesson_7/chant/M2_07m_chant7", teacherNotes: "<strong>Lesson 7 Chant (25 min.) </strong><ul><li>Display the first section of the digital activity and point to the picture. </li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.)  </li><li>Then display the letter m and elicit the sound. </li><li>Explain that they are going to hear a chant with words that have the sound /m/.  </li><li>Point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look and listen. </span></li><li>Play the chant.  </li><li>Elicit any words with the /m/ sound they heard. (It’s OK if they can’t identify any.) </li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /m/. </li><li>Then display the second part of the digital activity.</li><li>Point to the chant below the picture. Tell students they are going to listen and read. </li><li>Play the chant again, pausing after the first line: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look at the mouse.</span></li><li>Have students point out the mouse in the picture.  </li><li>Repeat the first line of the chant. Point to each word in the line as you say it. </li><li>Encourage students to repeat the line, pointing to the words as they say them. </li><li>Then elicit the word with the sound /m/. (If students don’t know a word, but they see an <em>m</em> in it, have them point out the word and you can say it for them.) </li><li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /m/. </li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li></ul>", answerKey: "" },
            ],
            printable: [
                [{pdf_source: "lesson_7/lesson_7"}],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_7/lesson_7a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_7/lesson_7b" },
                    { kind: "mp3", track: "Track 3", track_source: "lesson_7/lesson_7c" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_7/AudiosLesson7" }],
            ],
            descargables: [""]
        },
        {

            lesson: 8,
            mission: 2,
            // css:"m_mission2",
            ejemplo: "ejemplos/ejemplo8.png",
            grapheme: "grapheme/lesson_8.png",
            phoneme:"phoneme/lesson_8.png",
            audio: new Audio("assets/audios/lesson_8.mp3"),
            pathResources: "resources/mission2/",
            media: ["video/lesson_8.mp4"],
            poster: "mission_2/lesson_8/poster/lesson8_poster.jpg",
            LO_info: [
                { title:"Lesson 8 Introduction (10 min.)", thumbnail: "mission_2/lesson_8/M2_08d_intro", activity: "mission_2/lesson_8/M2_08d_intro", teacherNotes: "<strong>Lesson 8 Introduction (10 min.) </strong><ul><li>Display the letter <em>m</em> and elicit the sound.</li><li>Then tell students they are going to learn a new sound.</li><li>Display the letter <em>d.</em></li><li>Point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look, listen and repeat.</style> </li><li>Play the audio for the digital activity. </li><li>Then point to the letter, say the sound, and have students repeat it.</li><li>Encourage students to continue repeating the sound: /d/, /d/, /d/.</li></ul>", answerKey: "" },
                { title:"Lesson 8 Activity 1 (20 min.)", thumbnail: "mission_2/lesson_8/M2_08d_act1", activity: "mission_2/lesson_8/M2_08d_act1", teacherNotes: "<strong>Lesson 8 Activity 1 (20 min.) </strong><ul><li>Display the letters of the alphabet, including the letter <em>d.</em> </li><li>Invite volunteers to point out the letter d and say the sound. </li><li>Tell students to cover their eyes while you change the order of the letters displayed. </li><li>Invite different volunteers to point out the letter <em>d.</em> Continue the activity until everyone (who chooses to) has had the opportunity to find the letter. </li><li>Then display the digital activity and read the instructions aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look and color the letter d.</span> </li><li>Guide students to complete the digital activity as a group. </li><li>Then have students do the digital activity again. Encourage them to repeat the /d/ sound when they find and color the letter.  </li></ul>", answerKey: "" },
                { title:"Lesson 8 Activity 2 (15 min.) ", thumbnail: "mission_2/lesson_8/M2_08d_act2", activity: "mission_2/lesson_8/M2_08d_act2", teacherNotes: "<strong>Lesson 8 Activity 2 (15 min.) </strong><ul><li>Display the letter <em>d</em> and elicit the sound.</li><li>Tell students they are going to see and hear some words that begin with the sound /d/.</li><li>Point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look and say. Then listen and check. </span></li><li>Guide students to complete the digital activity as a group.</li><li>Then point to the first card in the activity and say: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>dog.</span>  </li><li>Invite a volunteer to point out the letter <em>d</em> in the word.  </li><li>Invite other volunteers to find the letter <em>d</em> in the other words.  </li><li>Then have students do the digital activity again. Encourage them to repeat the words.</li></ul>", answerKey: "" },
                { title:"Lesson 8 Activity 3 (15 min.) ", thumbnail: "mission_2/lesson_8/M2_08d_act3", activity: "mission_2/lesson_8/M2_08d_act3", teacherNotes: "<strong>Lesson 8 Activity 3 (15 min.) </strong><ul><li>Display the letters <em>d, p,</em> and <em>m</em> and elicit the sounds. </li><li>Encourage students to recall words that begin with the three sounds.  </li><li>Then point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Listen and choose the odd one out. </span></li><li>Play the audio for the letter. Then point to the pictures and play the audio for each.  </li><li>Elicit the word that does not have the same sound as the letter above and select it. </li><li>Guide students to complete the digital activity as a group.  </li><li>Then have students do the activity again in pairs or individually. Encourage students to repeat the letter sounds and words. </li></ul>", answerKey: "" }
            ],
            chant: [
                { title:"Lesson 8 Chant (25 min.) ", thumbnail: "mission_2/lesson_8/chant/M2_08d_chant8", activity: "mission_2/lesson_8/chant/M2_08d_chant8", teacherNotes: "<strong>Lesson 8 Chant (25 min.) </strong><ul><li>Display the first section of the digital activity and point to the picture. </li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.)  </li><li>Then display the letter d and elicit the sound. </li><li>Explain that they are going to hear a chant with words that have the sound /d/.  </li><li>Point to the activity instructions and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look and listen.</span> </li><li>Play the chant.  </li><li>Elicit any words with the /d/ sound they heard. (It’s OK if they can’t identify any.) </li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /d/. </li><li>Then display the second part of the digital activity.</li><li>Point to the chant below the picture. Tell students they are going to listen and read. </li><li>Play the chant again, pausing after the first line: <em>Don’t worry, Dad.</em>  </li><li>Have students point out the man (Dad) in the picture.  </li><li>Repeat the first line of the chant. Point to each word in the line as you say it. </li><li>Encourage students to repeat the line, pointing to the words as they say them. </li><li>Then elicit the words with the sound /d/. (If students don’t know a word, but they see a <em>d</em> in it, have them point out the word and you can say it for them.) </li><li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /d/. </li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant. </li></ul>", answerKey: "" },
            ],
            printable: [
                [{pdf_source: "lesson_8/lesson_8"}],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_8/lesson_8a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_8/lesson_8b" },
                    { kind: "mp3", track: "Track 3", track_source: "lesson_8/lesson_8c" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_8/AudiosLesson8" }],
            ],
            descargables: [""]

        },
        {

            lesson: 9,
            mission: 2,
// css:"m_mission2",
            ejemplo: "ejemplos/ejemplo9.png",
            grapheme: "grapheme/lesson_9.png",
            phoneme:"phoneme/lesson_9.png",
            audio: new Audio("assets/audios/lesson_9.mp3"),
            pathResources: "resources/mission2/",
            media: ["video/lesson_9.mp4"],
            poster: "mission_2/lesson_9/poster/lesson9_poster.jpg",
            LO_info: [
                { title:"Lesson 9 Introduction (10 min.) ", thumbnail: "mission_2/lesson_9/M2_09o_intro", activity: "mission_2/lesson_9/M2_09o_intro", teacherNotes: "<strong>Lesson 9 Introduction (10 min.) </strong><ul><li>Display the letter <em>m</em> and elicit the sound /m/.  </li><li>Then display the letter d and elicit the sound /d/. </li><li>Encourage students to recall any words with the /m/ or /d/ sounds. </li><li>Then tell students they are going to learn a new sound. </li><li>Display the letter <em>o.</em>  </li><li>Point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look, listen and repeat.</span> </li><li>Play the audio for the digital activity. </li><li>Then point to the letter, say the sound, and have students repeat it.</li><li>Encourage students to continue repeating the sound: /ɔ/, /ɔ/, /ɔ/. </li></ul>", answerKey: "" },
                { title:"Lesson 9 Activity 1 (20 min.) ", thumbnail: "mission_2/lesson_9/M2_09o_act1", activity: "mission_2/lesson_9/M2_09o_act1", teacherNotes: "<ul><li>Display the letters <em>a, i,</em> and <em>o.</em></li><li>Invite volunteers to point out the letters <em>a</em> and <em>i</em> and say the sounds /æ/ and /ɪ/. (For the letter <em>i,</em> confirm students asaying the sound /ɪ/ and not the word I.)</li><li>Then have them point out the letter o and say the sound /ɔ/.</li><li>Point to one of the three cards and elicit the sound. Continue randomly pointing to different cards and eliciting the sounds, going faster and faster until students can’t keep up.</li><li>Then display the digital activity and read the instructions aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Listen and order.</span></li><li>Guide students to complete the digital activity as a group, or do the first item together and monitor students as they complete the others in pairs or individually.</li></ul>", answerKey: "" },
                { title:"Lesson 9 Activity 2 (15 min.) ", thumbnail: "mission_2/lesson_9/M2_09o_act2", activity: "mission_2/lesson_9/M2_09o_act2", teacherNotes: "<strong>Lesson 9 Activity 2 (15 min.) </strong><ul><li>Display the letter <em>o</em> and elicit the sound.</li><li>Tell students they are going to see and hear some words with the sound /ɔ/.</li><li>Point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look and say. Then listen and check.</span> </li><li>Guide students to complete the digital activity as a group. </li><li>Then point to the first card in the activity and say: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>pot.</span>  </li><li>Invite a volunteer to point out the letter o in the word. </li><li>Invite other volunteers to find the letter o in the other words.</li><li>Point to each card in turn and ask: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Is the /ɔ/ at the beginning, middle or end of the word? </span> </li><li>Then have students do the digital activity again. Encourage them to repeat the words.</li></ul>", answerKey: "" },
                { title:"Lesson 9 Activity 3 (15 min.) ", thumbnail: "mission_2/lesson_9/M2_09o_act3", activity: "mission_2/lesson_9/M2_09o_act3", teacherNotes: "<strong>Lesson 9 Activity 3 (15 min.) </strong><ul><li>Display the letter <em>o</em> and elicit the sound. </li><li>Encourage students to recall words with the letter <em>o.</em></li><li>Then point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look, listen and match.</span> </li><li>Guide students to complete the digital activity as a group.</li><li>Then have students play a few more rounds of the activity in pairs or individually. Encourage students to repeat the words when they turn the cards.</li></ul>", answerKey: "" }
            ],
            chant: [
                { title:"Lesson 9 Chant (30 min.) ", thumbnail: "mission_2/lesson_9/chant/M2_09o_chant9", activity: "mission_2/lesson_9/chant/M2_09o_chant9", teacherNotes: "<strong>Lesson 9 Chant (30 min.) </strong><ul><li>Display the first section of the digital activity and point to the picture. </li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.)  </li><li>Then display the letter o and elicit the sound /ɔ/. </li><li>Explain that they are going to hear a chant with words that have the sound /ɔ/.  </li><li>Point to the activity instructions and read them aloud:<span style='color:#7FD5EF; font-weight:bold; font-style: italic;'> Look and listen.</span> </li><li>Play the chant.</li><li>Elicit any words with the /ɔ/ sound they heard. (It’s OK if they can’t identify any.) </li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /ɔ/. </li><li>Then display the second part of the digital activity.  </li><li>Point to the chant below the picture. Tell students they are going to listen and read. </li><li>Play the chant again, pausing after the first line: <em>Mom takes a pot.</em>  </li><li>Have students point out the woman (Mom) and pot in the picture.  </li><li>Repeat the first line of the chant. Point to each word in the line as you say it. </li><li>Encourage students to repeat the line, pointing to the words as they say them. </li><li>Then elicit the words with the sound /ɔ/. (If students don’t know a word, but they see an <em>o</em> in it, have them point out the word and you can say it for them.) </li><li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /ɔ/. </li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant. </li></ul>", answerKey: "" },
            ],
            printable: [
                [{pdf_source: "lesson_9/lesson_9"}],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_9/lesson_9a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_9/lesson_9b" },
                    { kind: "mp3", track: "Track 3", track_source: "lesson_9/lesson_9c" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_9/AudiosLesson9" }],
            ],
            descargables: [""]

        },
        {

            lesson: 10,
            mission: 2,
// css:"m_mission2",
            ejemplo: "ejemplos/ejemplo10.png",
            grapheme: "grapheme/lesson_10.png",
            phoneme:"phoneme/lesson_10.png",
            audio: new Audio("assets/audios/lesson_10.mp3"),
            pathResources: "resources/mission2/",
            media: ["video/lesson_10.mp4"],
            poster: "mission_2/lesson_10/poster/lesson10_poster.jpg",
            LO_info: [
                { title:"Lesson 10 Introduction (10 min.) ", thumbnail: "mission_2/lesson_10/M2_10g_intro", activity: "mission_2/lesson_10/M2_10g_intro", teacherNotes: "<strong>Lesson 10 Introduction (10 min.) </strong><ul><li>Display the letters <em>m, d,</em> and <em>o</em> and elicit the sounds /m/, /n/, and /ɔ/. </li><li>Then tell students they are going to learn a new sound. </li><li>Display the letter <em>g.</em>  </li><li>Point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'> Look, listen and repeat.</span> </li><li>Play the audio for the digital activity.</li><li>Then point to the letter, say the sound, and have students repeat it.  </li><li>Encourage students to continue repeating the sound: /g/, /g/, /g/. </li></ul>", answerKey: "" },
                { title:"Lesson 10 Activity 1 (20 min.)", thumbnail: "mission_2/lesson_10/M2_10g_act1", activity: "mission_2/lesson_10/M2_10g_act1", teacherNotes: "<strong>Lesson 10 Activity 1 (20 min.) </strong><ul><li>Display the letters of the alphabet. </li><li>Invite volunteers to point out the letter g and say the sound. </li><li>Then have them point out the letters <em>d, p, t, n,</em> and <em>m</em> in turn, and say the sounds. </li><li>Tell students to cover their eyes while you change the order of the letters displayed. </li><li>Invite different volunteers to point out the letters d, p, t, n, m, and g. Encourage students to say the sounds. Continue the activity until everyone (who chooses to) has had the opportunity to find the letters. Then display the digital activity and read the instructions aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Listen and choose.</span> </li><li>Guide students to complete the digital activity as a group, or do the first item together and monitor students as they complete the others in pairs or individually. </li></ul>", answerKey: "" },
                { title:"Lesson 10 Activity 2 (15 min.) ", thumbnail: "mission_2/lesson_10/M2_10g_act2", activity: "mission_2/lesson_10/M2_10g_act2", teacherNotes: "<strong>Lesson 10 Activity 2 (15 min.) </strong><ul><li>Display the letter <em>g</em> and elicit the sound.</li><li>Tell students they are going to see and hear some words with the sound /g/.</li><li>Point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look and say. Then listen and check.</span> </li><li>Guide students to complete the digital activity as a group. </li><li>Then point to the first card in the activity and say: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>goat.</span>  </li><li>Invite a volunteer to point out the letter g in the word. </li><li>Invite other volunteers to find the letter g in the other words.</li><li>Then have students do the digital activity again. Encourage them to repeat the words.</li></ul>", answerKey: "" },
                { title:"Lesson 10 Activity 3 (15 min.) ", thumbnail: "mission_2/lesson_10/M2_10g_act3", activity: "mission_2/lesson_10/M2_10g_act3", teacherNotes: "<strong>Lesson 10 Activity 3 (15 min.) </strong><ul><li>Display the letter <em>g</em> and elicit the sound. </li><li>Encourage students to recall words that begin with the sound /g/.  </li><li>Then point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Listen, look and choose the words with g.</span> </li><li>Play the audio for the first picture and have students repeat the word.  </li><li>Ask:<span style='color:#7FD5EF; font-weight:bold; font-style: italic;'> Is there a /g/ in (the word for the picture)? </span></li><li>Play the audio for the other pictures, asking if there is a /g/ sound in any of them. Select those that do. </li><li>Then have students complete the activity again in pairs or individually. Encourage students to repeat the words. </li></ul>", answerKey: "" }
            ],
            chant: [
                { title:"Lesson 10 Chant (25 min.) ", thumbnail: "mission_2/lesson_10/chant/M2_10g_chant10", activity: "mission_2/lesson_10/chant/M2_10g_chant10", teacherNotes: "<strong>Lesson 10 Chant (25 min.) </strong><ul><li>Display the first section of the digital activity and point to the picture. </li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.)  </li><li>Then display the letter g and elicit the sound. </li><li>Explain that they are going to hear a chant with words that have the sound /g/.</li><li>Point to the activity instructions and read them aloud:<span style='color:#7FD5EF; font-weight:bold; font-style: italic;'> Look and listen.</span></li><li>Play the chant.</li><li>Elicit any words with the /g/ sound they heard. (It’s OK if they can’t identify any.) </li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /g/. </li><li>Then display the second part of the digital activity.  </li><li>Point to the chant below the picture. Tell students they are going to listen and read. </li><li>Play the chant again, pausing after the first line: <em>The goat’s in the garden.</em>  </li><li>Have students point out the goat and the garden in the picture.  </li><li>Repeat the first line of the chant. Point to each word in the line as you say it.</li><li>Encourage students to repeat the line, pointing to the words as they say them. </li><li>Then elicit the words with the sound /g/. (If students don’t know a word, but they see a <em>g</em> in it, have them point out the word and you can say it for them.) </li><li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /g/. </li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant. </li></ul>", answerKey: "" },
            ],
            printable: [
                [{pdf_source: "lesson_10/lesson_10"}],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_10/lesson_10a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_10/lesson_10b" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_10/AudiosLesson10" }],
            ],
            descargables: [""]

        },
        {

            lesson: 11,
            mission: 2,
// css:"m_mission2",
            ejemplo: "ejemplos/ejemplo11.png",
            grapheme: "grapheme/lesson_11.png",
            phoneme:"phoneme/lesson_11.png",
            audio: new Audio("assets/audios/lesson_11.mp3"),
            pathResources: "resources/mission2/",
            media: ["video/lesson_11.mp4"],
            poster: "mission_2/lesson_11/poster/lesson11_poster.jpg",
            LO_info: [
                { title:"Lesson 11 Introduction (15 min.) ", thumbnail: "mission_2/lesson_11/M2_11c_intro", activity: "mission_2/lesson_11/M2_11c_intro", teacherNotes: "<strong>Lesson 11 Introduction (15 min.) </strong><ul><li>Display the letters <em>m, d, o, g</em> and elicit the sounds. </li><li>Encourage students to recall any words with the /m/, /d/, /ɔ/, or /g/ sounds. </li><li>Then tell students they are going to learn a new sound. </li><li>Display the letter <em>c.</em>  </li><li>Point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look, listen and repeat. </li><li>Play the audio for the digital activity. </li><li>Then point to the letter, say the sound /k/, and have students repeat it.</li><li>Encourage students to continue repeating the sound: /k/, /k/, /k/. </li></ul>", answerKey: "" },
                { title:"Lesson 11 Activity 1 (20 min.) ", thumbnail: "mission_2/lesson_11/M2_11c_act1", activity: "mission_2/lesson_11/M2_11c_act1", teacherNotes: "<strong>Lesson 11 Activity 1 (20 min.) </strong><ul><li>Display the letters of the alphabet. </li><li>Invite volunteers to point out the letter c and say the sound /k/. </li><li>Then have them point out the letters <em>d, g,</em> and <em>t,</em> in turn, and say the sounds. </li><li>Tell students to cover their eyes while you change the order of the letters displayed.</li><li>Invite different volunteers to point out the letters c, d, g, and t. Encourage students to say the sounds. Continue the activity until everyone (who chooses to) has had the opportunity to find the letters. </li><li>Then display the digital activity and read the instructions aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Listen and choose.</span> </li><li>Guide students to complete the digital activity as a group, or do the first item together and monitor students as they complete the others in pairs or individually. </li></ul>", answerKey: "" },
                { title:"Lesson 11 Activity 2 (15 min.) ", thumbnail: "mission_2/lesson_11/M2_11c_act2", activity: "mission_2/lesson_11/M2_11c_act2", teacherNotes: "<strong>Lesson 11 Activity 2 (15 min.) </strong><ul><li>Display the letter <em>c</em> and elicit the sound /k/.  </li><li>Tell students they are going to see and hear some words with the sound /k/. </li><li>Point to the instructions in the digital activity and read them aloud:<span style='color:#7FD5EF; font-weight:bold; font-style: italic;'> Look and say. Then listen and check. </span></li><li>Guide students to complete the digital activity as a group. </li><li>Then point to the first card in the activity and say:<span style='color:#7FD5EF; font-weight:bold; font-style: italic;'> cat.</span> </li><li>Invite a volunteer to point out the letter c in the word.  </li><li>Invite other volunteers to find the letter c in the other words. If they don’t mention it, point out there are two c´s with a /k/ sound in <em>coconut.</em> </li><li>Then have students do the digital activity again. Encourage them to repeat the words.</li></ul>", answerKey: "" },
                { title:"Lesson 11 Activity 3 (15 min.) ", thumbnail: "mission_2/lesson_11/M2_11c_act3", activity: "mission_2/lesson_11/M2_11c_act3", teacherNotes: "<strong>Lesson 11 Activity 3 (15 min.)</strong><ul><li>Display the letter <em>c</em> and elicit the sound /k/. </li><li>Encourage students to recall words that begin with the letter <em>c.</em>  </li><li>Then point to the instructions in the digital activity and read them aloud:<span style='color:#7FD5EF; font-weight:bold; font-style: italic;'> Look, listen and match.</span> </li><li>Guide students to complete the digital activity as a group.  </li><li>Then have students play a few more rounds of the activity in pairs or individually. Encourage students to repeat the words when they turn the cards. </li></ul>", answerKey: "" },
            ],
            chant: [
                { title:"Lesson 11 Chant (25 min.) ", thumbnail: "mission_2/lesson_11/chant/M2_11c_chant11", activity: "mission_2/lesson_11/chant/M2_11c_chant11", teacherNotes: "<strong>Lesson 11 Chant (25 min.)</strong><ul><li>Display the first section of the digital activity and point to the picture.</li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.)  </li><li>Then display the letter c and elicit the sound /k/. </li><li>Explain that they are going to hear a chant with words that have the sound /k/.  </li><li>Point to the activity instructions and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'> Look and listen.</span> </li><li>Play the chant.</li><li>Elicit any words with the /k/ sound they heard. (It’s OK if they can’t identify any.) </li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /k/. </li><li>Then display the second part of the digital activity.</li><li>Point to the chant below the picture. Tell students they are going to listen and read.</li><li>Play the chant again, pausing after the first line: <em>Count the candy.</em> </li><li>Have students point out the candy in the picture.</li><li>Repeat the first line of the chant. Point to each word in the line as you say it. </li><li>Encourage students to repeat the line, pointing to the words as they say them. </li><li>Then elicit the words with the sound /k/. (If students don’t know a word, but they see a <em>c</em> in it, have them point out the word and you can say it for them.) </li><li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /k/. </li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant. </li></ul>", answerKey: "" },
            ],
            printable: [
                [{pdf_source: "lesson_11/lesson_11"}],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_11/lesson_11a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_11/lesson_11b" },
                    { kind: "mp3", track: "Track 3", track_source: "lesson_11/lesson_11c" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_11/AudiosLesson11" }],
            ],
            descargables: [""]

        },
        {

            lesson: 12,
            mission: 2,
// css:"m_mission2",
            ejemplo: "ejemplos/ejemplo12.png",
            grapheme: "grapheme/lesson_12.png",
            phoneme:"phoneme/lesson_12.png",
            audio: new Audio("assets/audios/lesson_12.mp3"),
            pathResources: "resources/mission2/",
            media: ["video/lesson_12.mp4"],
            poster: "mission_2/lesson_12/poster/lesson12_poster.jpg",
            LO_info: [
                { title:"Lesson 12 Introduction (10 min.) ", thumbnail: "mission_2/lesson_12/M2_12k_intro", activity: "mission_2/lesson_12/M2_12k_intro", teacherNotes: "<strong>Lesson 12 Introduction (10 min.) </strong><ul><li>Display the letters <em>m, d, o, g, c,</em> and elicit the sounds. </li><li>Then tell students they are going to learn a new letter. (Note: It’s not a new sound. The letter c also makes a /k/ sound.) </li><li>Display the letter <em>k.</em></li><li>Point to the instructions in the digital activity and read them aloud:<span style='color:#7FD5EF; font-weight:bold; font-style: italic;'> Look, listen and repeat.</span> </li><li>Play the audio for the digital activity. </li><li>Then point to the letter, say the sound /k/, and have students repeat it.  </li><li>Encourage students to continue repeating the sound: /k/, /k/, /k/. </li><li>Display the letters <em>m, d, o, g, c,</em> and <em>k.</em> </li><li>Have students say the sounds for the letters.  </li><li>Ask:<span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>  Which letters have the /k/ sound? </span><em>(The c and k.)</em> </li><li>Invite volunteers to point out the two letters with the /k/ sound. </li></ul>", answerKey: "" },
                { title:"Lesson 12 Activity 1 (15 min.) ", thumbnail: "mission_2/lesson_12/M2_12k_act1", activity: "mission_2/lesson_12/M2_12k_act1", teacherNotes: "<strong>Lesson 12 Activity 1 (15 min.)</strong><ul><li>Display the letters <em>d, g, k </em>in a row. </li><li>Point to each letter and elicit the sound. </li><li>Tell students to cover their eyes while you change the order of the letters displayed. </li><li>Then point again to each letter in the row and elicit the sounds. </li><li>Display the digital activity and read the instructions aloud:<span style='color:#7FD5EF; font-weight:bold; font-style: italic;'> Listen and order. </span></li><li>Guide students to complete the digital activity as a group. </li></ul>", answerKey: "" },
                { title:"Lesson 12 Activity 2 (15 min.) ", thumbnail: "mission_2/lesson_12/M2_12k_act2", activity: "mission_2/lesson_12/M2_12k_act2", teacherNotes: "<strong>Lesson 12 Activity 2 (15 min.) </strong><ul><li>Display the letter <em>k</em> and elicit the sound /k/.</li><li>Tell students they are going to see and hear some words with the sound /k/.</li><li>Point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'> Look and say. Then listen and check.</span> </li><li>Guide students to complete the digital activity as a group. </li><li>Then point to the first card in the activity and say: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'> kite. </span> </li><li>Invite a volunteer to point out the letter k in the word.</li><li>Invite other volunteers to find the letter k in the other words. Point out that the ck together in kick is also the sound /k/, and they will see more words with the ck together in the next lesson. </li><li>Then have students do the digital activity again individually. Encourage them to repeat the words.</li></ul>", answerKey: "" },
                { title:"Lesson 12 Activity 3 (15 min.) ", thumbnail: "mission_2/lesson_12/M2_12k_act3", activity: "mission_2/lesson_12/M2_12k_act3", teacherNotes: "<strong>Lesson 12 Activity 3 (15 min.) </strong><ul><li>Display the letter <em>k</em> and elicit the sound. </li><li>Encourage students to recall words that begin with the sound /k/ and the letter <em>k.</em>  </li><li>Then point to the activity instructions and read them aloud:<span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Listen, look and choose the words with k.</span> </li><li>Play the audio for the first picture and have students repeat the word. </li><li>Ask:<span style='color:#7FD5EF; font-weight:bold; font-style: italic;'> Is there a /k/ in (word for the picture)? </span> </li><li>Play the audio for the other pictures, asking if there is a /k/ sound in any of them. Select those that do. </li><li>Then have students complete the activity again in pairs or individually. Encourage students to repeat the words. </li></ul>", answerKey: "" },
            ],
            chant: [
                { title:"Lesson 12 Chant (25 min.)", thumbnail: "mission_2/lesson_12/chant/M2_12k_chant12", activity: "mission_2/lesson_12/chant/M2_12k_chant12", teacherNotes: "<strong>Lesson 12 Chant (25 min.) </strong><ul><li>Display the first section of the digital activity and point to the picture. </li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.)  </li><li>Then display the letter k and elicit the sound. </li><li>Explain that they are going to hear a chant with words that have the sound /k/.  </li><li>Point to the activity instructions and read them aloud:<span style='color:#7FD5EF; font-weight:bold; font-style: italic;'> Look and listen.</span> </li><li>Play the chant.  </li><li>Elicit any words with the /k/ sound they heard. (It’s OK if they can’t identify any.) </li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /k/. </li><li>Then display the second part of the digital activity. </li><li>Point to the chant below the picture. Tell students they are going to listen and read. </li><li>Play the chant again, pausing after the first line: <em>Kim plays the keyboard. </em> </li><li>Have students point out the girl (named Kim, and who is on the keyboard) and the keyboard in the picture.  </li><li>Repeat the first line of the chant. Point to each word in the line as you say it.</li><li>Encourage students to repeat the line, pointing to the words as they say them. </li><li>Then elicit the words with the sound /k/. (If students don’t know a word, but they see the k in it, have them point out the word and you can say it for them.) </li><li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /k/. </li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant. </li></ul>", answerKey: "" },
            ],
            printable: [
                [{pdf_source: "lesson_12/lesson_12"}],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_12/lesson_12a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_12/lesson_12b" },
                    { kind: "mp3", track: "Track 3", track_source: "lesson_12/lesson_12c" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_12/AudiosLesson12" }],
            ],
            descargables: [""]

        },
        {

            lesson: 13,
            mission: 2,
// css:"m_mission2",
            ejemplo: "ejemplos/ejemplo13.png",
            grapheme: "grapheme/lesson_13.png",
            phoneme:"phoneme/lesson_13.png",
            audio: new Audio("assets/audios/lesson_13.mp3"),
            pathResources: "resources/mission2/",
            media: ["video/lesson_13.mp4"],
            poster: "mission_2/lesson_13/poster/lesson13_poster.jpg",
            LO_info: [
                { title:"Lesson 13 Introduction (15 min.) ", thumbnail: "mission_2/lesson_13/M2_13ck_intro", activity: "mission_2/lesson_13/M2_13ck_intro", teacherNotes: "<strong>Lesson 13 Introduction (15 min.) </strong><ul><li>Display the letters <em>m, d, o, g, c, k</em> and elicit the sounds. </li><li>Encourage students to recall any words with the /m/, /d/, /ɔ/, /g/ or /k/ sounds. </li><li>Display the letters <em>c</em> and <em>k.</em> </li><li>Challenge students to say words with the /k/ sound and point out the correct spelling for the /k/ sound in their words. </li><li>Then tell students they are going to learn another spelling for the /k/ sound. </li><li>Display the card with the letters <em>ck.</em></li><li>Explain that the <em>c</em>has a /k/ sound, the k has a /k/ sound, and together the ck also has a /k/ sound. </li><li>Point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look, listen and repeat.</span> </li><li>Play the audio for the digital activity. </li><li>Then point to the letters, say the sounds, and have students repeat them.</li><li>Encourage students to continue repeating the sound: /k/, /k/, /k/. </li></ul>", answerKey: "" },
                { title:"Lesson 13 Activity 1 (10 min.) ", thumbnail: "mission_2/lesson_13/M2_13ck_act1", activity: "mission_2/lesson_13/M2_13ck_act1", teacherNotes: "<strong>Lesson 13 Activity 1 (10 min.)</strong><ul><li>Display the letters <em>m, d, f, o,</em> and <em>ck.</em> </li><li>Say the sound /k/ and invite volunteers to point out the letters <em>ck.</em> </li><li>Then display the digital activity and read the instructions aloud:<span style='color:#7FD5EF; font-weight:bold; font-style: italic;'> Listen, look and color.</span> </li><li>Guide students to complete the digital activity. </li></ul>", answerKey: "" },
                { title:"Lesson 13 Activity 2 (15 min.) ", thumbnail: "mission_2/lesson_13/M2_13ck_act2", activity: "mission_2/lesson_13/M2_13ck_act2", teacherNotes: "<strong>Lesson 13 Activity 2 (15 min.) </strong><ul><li>Display the letters <em>ck</em> and elicit the sound /k/.  </li><li>Tell students they are going to see and hear some words with the sound /k/ spelled with <em>ck.</em>  </li><li>Point to the activity instructions and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look and say. Then listen and check.</span> </li><li>Guide students to complete the digital activity as a group. </li><li>Then point to the first card in the activity and say: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>sock.</span>  </li><li>Invite a volunteer to point out the letters <em>ck</em> in the word.  </li><li>Invite other volunteers to find the letters ck in the other words.  </li><li>Ask: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Are the letters ck at the beginning, middle or end of the words?</span> Explain that they will find <em>ck</em> at the end of words as in sock, duck, and truck, or in the middle as in jacket; but that they will never find ck at the beginning of words. </li><li>Then have students do the digital activity again individually. Encourage them to repeat the words.</li></ul>", answerKey: "" },
                { title:"Lesson 13 Activity 3 (15 min.) ", thumbnail: "mission_2/lesson_13/M2_13ck_act3", activity: "mission_2/lesson_13/M2_13ck_act3", teacherNotes: "<strong>Lesson 13 Activity 3 (15 min.) </strong><ul><li>Say the sound /k/ and elicit the three spellings: <em>c, k,</em> and <em>ck.</em> </li><li>Display the cards with <em>c, k,</em> and <em>ck.</em> </li><li>Point to each card in turn and elicit words with the sound. If students have difficulty recalling words with the /k/ sound or the correct spelling, you can say words with the /k/ sound and invite volunteers to categorize them. </li><li>Then display the digital activity and read the instructions aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Listen and choose the odd one out.</span> </li><li>Guide students to complete the digital activity as a group. </li><li>Then have students do the activity again, in pairs or individually. </li></ul>", answerKey: "" },
            ],
            chant: [
                { title:"Lesson 13 Chant (25 min.) ", thumbnail: "mission_2/lesson_13/chant/M2_13ck_chant13", activity: "mission_2/lesson_13/chant/M2_13ck_chant13", teacherNotes: "<strong>Lesson 13 Chant (25 min.) </strong> <ul><li>Display the first section of the digital activity and point to the picture.</li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.)</li><li>Then display the letters <em>ck</em> and elicit the sound /k/.</li><li>Explain that they are going to hear a chant with words that have the sound /k/.</li><li>Point to the instructions in the digital activity and read them aloud: <span style='color:#7FD5EF; font-weight:bold; font-style: italic;'>Look and listen.</span></li><li>Play the chant.</li><li>Elicit any words with the /k/ sound they heard. (It’s OK if they can’t identify any.)</li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /k/.</li><li>Then display the second part of the digital activity.</li><li>Point to the chant below the picture. Tell students they are going to listen and read.</li><li>Play the chant again, pausing after the first line: <em>Where’s the duck?</em></li><li>Have students point out the duck in the picture.</li><li>Repeat the first line of the chant. Point to each word in the line as you say it.</li><li>Encourage students to repeat the line, pointing to the words as they say them.</li><li>Then elicit the words with the sound /k/. (If students don’t know a word, but they see a <em>ck</em> in it, have them point out the word and you can say it for them.)</li><li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /k/.</li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li></ul>", answerKey: "" },
            ],
            printable: [
                [{pdf_source: "lesson_13/lesson_13"}],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_13/lesson_13a" },
                    { kind: "", track: "All tracks", track_source: "lesson_13/AudiosLesson13" }],
            ],
            descargables: [""]

        },
        /* ------------------------------ MISSION 3 ----------------------------- */
        {

            lesson: 14,
            mission: 3,
// css:"m_mission3",
            ejemplo: "ejemplos/ejemplo14.png",
            grapheme: "grapheme/lesson_14.png",
            phoneme:"phoneme/lesson_14.png",
            audio: new Audio("assets/audios/lesson_14.mp3"),
            pathResources: "resources/mission3/",
            media: ["video/lesson_14.mp4"],
            poster: "mission_3/lesson_14/poster/lesson14_poster.jpg",
            LO_info: [
                { title:"Lesson 14 Introduction (20 min.)", thumbnail: "mission_3/lesson_14/M3_14e_intro", activity: "mission_3/lesson_14/M3_14e_intro", teacherNotes: "<strong>Lesson 14 Introduction (20 min.)</strong> <ul> <li>Display the letters <em>a, p, t, s, i, n, o, d, m, g, c, k, ck,</em> and elicit the sounds.<br />(Note: For a and o, students have only learned the short vowel sounds /æ/ and /ɔ/ so far.) </li> <li>Invite volunteers to arrange the letters to form words. </li> <li>Then tell students they are going to learn a new sound.</li> <li>Display the letter <em>e</em>. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em> </li> <li>Play the audio for the digital activity.</li> <li>Then point to the letter, say the sound, and have students repeat it. </li> <li>Encourage students to continue repeating the sound: /ɛ/, /ɛ/, /ɛ/.</li> </ul>", answerKey: "" },
                { title:"Lesson 14 Activity 1 (15 min.)", thumbnail: "mission_3/lesson_14/M3_14e_act1", activity: "mission_3/lesson_14/M3_14e_act1", teacherNotes: "<strong>Lesson 14 Activity 1 (15 min.)</strong> <ul> <li>Display the letters <em>o, a, i,</em> and <em>e</em>.</li> <li>Invite volunteers to point to and say the sounds.</li> <li>Then display the digital activity.</li> <li>Point to each letter and elicit the sound.</li> <li>Play the audio for each letter to confirm the sound.</li> <li>Then point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and choose.</em></li> <li>Guide students to complete the digital activity as a group or individually.</li> </ul>", answerKey: "" },
                { title:"Lesson 14 Activity 2 (15 min.) ", thumbnail: "mission_3/lesson_14/M3_14e_act2", activity: "mission_3/lesson_14/M3_14e_act2", teacherNotes: "<strong>Lesson 14 Activity 2 (15 min.)</strong> <ul> <li>Display the letter <em>e</em> and elicit the sound /ɛ/. </li> <li>Tell students they are going to see and hear some words with the sound /ɛ/. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then have students do the digital activity again, in pairs or individually. Encourage them to repeat the words. </li> <li>Point to the words <em>pet</em> and <em>pen</em> in the activity. Invite volunteers to sound out and then blend and say the words.</li> </ul>", answerKey: "" },
                { title:"Lesson 14 Activity 3 (15 min.) ", thumbnail: "mission_3/lesson_14/M3_14e_act3", activity: "mission_3/lesson_14/M3_14e_act3", teacherNotes: "<strong>Lesson 14 Activity 3 (15 min.)</strong> <ul> <li>Display the letter <em>e</em> and elicit the sound.</li> <li>Encourage students to recall words with the letter <em>e</em>. </li> <li>Then point to the instructions in the digital activity and read them aloud: <em style=''>Look, listen and match.</em></li> <li>Guide students to complete the digital activity as a group. </li> <li>Then have students play a few more rounds of the activity in pairs or individually. Encourage students to repeat the words when they turn the cards.</li> </ul>", answerKey: "" }
            ],
            chant: [
                { title:"Lesson 14 Chant (25 min.)", thumbnail: "mission_3/lesson_14/chant/M3_14e_chant14", activity: "mission_3/lesson_14/chant/M3_14e_chant14", teacherNotes: "<strong>Lesson 14 Chant (25 min.)</strong> <ul> <li>Display the picture in the first section of the digital activity.</li> <li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li> <li>Then display the letter <em>e</em> and elicit the sound.</li> <li>•	Explain that they are going to hear a chant with words that have the sound /ɛ/. </li> <li>Point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li> <li>Play the chant. </li> <li>Elicit any words with the /ɛ/ sound they heard. (It’s OK if they can’t identify any.)</li> <li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /ɛ/.</li> <li>Then display the second part of the digital activity. </li> <li>Point to the chant below the picture. Tell students they are going to listen and read.</li> <li>Play the chant again, pausing after the first line: <em style='color:#7FD5EF; font-weight:bold;'>I open a pack of pens.</em> </li> <li>Have students point out the pens in the picture. </li> <li>Repeat the first line of the chant. Point to each word in the line as you say it.</li> <li>Encourage students to repeat the line, pointing to the words as they say them.</li> <li>Then elicit the words with the sound /ɛ/. (If students don’t know a word, but they see an <em>e</em> in it, have them point out the word and you can say it for them.)</li> <li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /ɛ/.</li> <li>Play the chant completely a few more times. Encourage students to say and point to words in the chant. </li> </ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_14/lesson_14" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_14/lesson_14a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_14/lesson_14b" },
                    { kind: "mp3", track: "Track 3", track_source: "lesson_14/lesson_14c" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_14/AudiosLesson14" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 15,
            mission: 3,
// css:"m_mission3",
            ejemplo: "ejemplos/ejemplo15.png",
            grapheme: "grapheme/lesson_15.png",
            phoneme:"phoneme/lesson_15.png",
            audio: new Audio("assets/audios/lesson_15.mp3"),
            pathResources: "resources/mission3/",
            media: ["video/lesson_15.mp4"],
            poster: "mission_3/lesson_15/poster/lesson15_poster.jpg",
            LO_info: [
                { title:"Lesson 15 Introduction (10 min.) ", thumbnail: "mission_3/lesson_15/M3_15u_intro", activity: "mission_3/lesson_15/M3_15u_intro", teacherNotes:"<strong>Lesson 15 Introduction (10 min.)</strong> <ul> <li>Display the letter <em>e</em>, and elicit the sound /ɛ/.</li> <li>Then tell students they are going to learn a new sound.</li> <li>Display the letter <em>u</em>. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em></li> <li>Play the audio for the digital activity.</li> <li>Then point to the letter, say the sound, and have students repeat it. </li> <li>Encourage students to continue repeating the sound: /ʌ/, /ʌ/, /ʌ/.</li> </ul>", answerKey: "" },
                { title:"Lesson 15 Activity 1 (15 min.) ", thumbnail: "mission_3/lesson_15/M3_15u_act1", activity: "mission_3/lesson_15/M3_15u_act1", teacherNotes: "<strong>Lesson 15 Activity 1 (15 min.)</strong> <ul> <li>Display the letters of the alphabet, including the letter <em>u</em></li> <li>Invite volunteers to point out different letters they know and say the sounds. </li> <li>Then have a volunteer point to the letter <em>u</em> and say the sound.</li> <li>Tell students to cover their eyes while you change the order of the letters displayed.</li> <li>Invite different volunteers to point out the letter <em>u</em>. Continue the activity until everyone (who chooses to) has had the opportunity to find the letter.</li> <li>Then display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen, look and color.</em></li> <li>Guide students to complete the digital activity.</li> <li>Then have students do the digital activity again. Encourage them to repeat the /ʌ/ sound when they find and color the letter. </li> </ul>", answerKey: "" },
                { title:"Lesson 15 Activity 2 (15 min.) ", thumbnail: "mission_3/lesson_15/M3_15u_act2", activity: "mission_3/lesson_15/M3_15u_act2", teacherNotes: "<strong>Lesson 15 Activity 2 (15 min.)</strong> <ul> <li>Display the vowels <em>a, e, i, o,</em> and <em>u</em>. Point to each in turn and elicit the sounds /æ/, /ɛ/, /ɪ/, /ɔ/, and /ʌ/.</li> <li>Point to the letter <em>u</em>, and tell students they are going to see and hear some words with the sound /ʌ/. </li> <li>Then point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then point to the first card in the activity and say: <em style='color:#7FD5EF; font-weight:bold;>umbrella</em>. </li> <li>Invite a volunteer to point out the letter <em>u</em> in the word. </li> <li>Invite other volunteers to find the letter <em>u</em> in the other words. </li> <li>Then have students do the digital activity individually. Encourage them to repeat the words. </li> </ul>", answerKey: "" },
                { title:"Lesson 15 Activity 3 (15 min.) ", thumbnail: "mission_3/lesson_15/M3_15u_act3", activity: "mission_3/lesson_15/M3_15u_act3", teacherNotes: "<strong>Lesson 15 Activity 3 (15 min.)</strong> <ul> <li>Display the vowels <em>e, o,</em> and <em>u</em>. Elicit the sounds /ɛ/, /ɔ/, and /ʌ/.</li> <li>Encourage students to recall words with the letters <em>e, o,</em> and <em>u</em>. </li> <li>Then point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen. Tap and drop.</em></li> <li>Play the audio for the first card in the digital activity. Ask: <em style='color:#7FD5EF; font-weight:bold;'>Does (the word for the picture) have an /ɛ/, /ɔ/ or an /ʌ/sound?</em> (Answer will depend on the first card displayed in the activity.)</li> <li>Point to the three sound categories and demonstrate how to tap on a card and place it in the correct category.</li> <li>Guide students to complete the digital activity as a group, or monitor them as they complete it in pairs or individually.</li> </ul>", answerKey: "" },
            ],
            chant: [
                { title:"Lesson 15 Chant (25 min.) ", thumbnail: "mission_3/lesson_15/chant/M3_15u_chant15", activity: "mission_3/lesson_15/chant/M3_15u_chant15", teacherNotes: "<strong>Lesson 15 Chant (25 min.)</strong> <ul> <li>Display the picture in the first section of the digital activity.</li> <li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li> <li>Then display the letter <em>u</em> and elicit the sound /ʌ/.</li> <li>Explain that they are going to hear a chant with words that have the sound /ʌ/. </li> <li>Point to and say the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li> <li>Play the chant. </li> <li>Elicit any words with the /ʌ/ sound they heard. (It’s OK if they can’t identify any.)</li> <li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /ʌ/.</li> <li>Then display the second part of the digital activity. </li> <li>Point to the chant below the picture. Tell students they are going to listen and read.</li> <li>Play the chant again, pausing after the first line: <em>The duck isn’t ugly.</em> </li> <li>Have students point out the duck in the picture. </li> <li>Repeat the first line of the chant. Point to each word in the line as you say it.</li> <li>Encourage students to repeat the line, pointing to the words as they say them.</li> <li>Then elicit the words with the sound /ʌ/. (If students don’t know a word, but they see a <em>u</em> in it, have them point out the word and you can say it for them.)</li> <li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /ʌ/.</li> <li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li> </ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_15/lesson_15" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_15/lesson_15a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_15/lesson_15b" },
                    { kind: "mp3", track: "Track 3", track_source: "lesson_15/lesson_15c" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_15/AudiosLesson15" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 16,
            mission: 3,
// css:"m_mission3",
            ejemplo: "ejemplos/ejemplo16.png",
            grapheme: "grapheme/lesson_16.png",
            phoneme:"phoneme/lesson_16.png",
            audio: new Audio("assets/audios/lesson_16.mp3"),
            pathResources: "resources/mission3/",
            media: ["video/lesson_16.mp4"],
            poster: "mission_3/lesson_16/poster/lesson16_poster.jpg",
            LO_info: [
                { title:"Lesson 16 Introduction (15 min.) ", thumbnail: "mission_3/lesson_16/M3_16r_intro", activity: "mission_3/lesson_16/M3_16r_intro", teacherNotes: "<strong>Lesson 16 Introduction (15 min.)</strong> <ul> <li>Display the letters <em>e</em> and <em>u</em> and elicit the sounds /ɛ/ and /ʌ/. </li> <li>Encourage students to recall any words with the /ɛ/ or /ʌ/ sounds.</li> <li>Then tell students they are going to learn a new sound.</li> <li>Display the letter <em>r</em>. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em></li> <li>Play the audio for the digital activity.</li> <li>Then point to the letter, say the sound, and have students repeat it. </li> <li>Encourage students to continue repeating the sound: /r/, /r/, /r/.</li> </ul>", answerKey: "" },
                { title:"Lesson 16 Activity 1 (20 min.) ", thumbnail: "mission_3/lesson_16/M3_16r_act1", activity: "mission_3/lesson_16/M3_16r_act1", teacherNotes: "<strong>Lesson 16 Activity 1 (20 min.)</strong> <ul> <li>Display the cards with the letters <em>n, m,</em> and <em>r</em>.</li> <li>Invite volunteers to point out the <em>n</em> and <em>m</em> and say the sounds.</li> <li>Then have them point out the letter <em>r</em> and say the sound.</li> <li>Point to one of the three cards and elicit the sounds. Continue randomly pointing to different cards and eliciting the sounds, going faster and faster until students can’t keep up.</li> <li>Then display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and order.</em></li> <li>Guide students to complete the digital activity as a group, or do the first together and monitor students as they complete the others in pairs or individually.</li> </ul>", answerKey: "" },
                { title:"Lesson 16 Activity 2 (15 min.) ", thumbnail: "mission_3/lesson_16/M3_16r_act2", activity: "mission_3/lesson_16/M3_16r_act2", teacherNotes: "<strong>Lesson 16 Activity 2 (15 min.)</strong> <ul> <li>Display the letter <em>r</em> and elicit the sound. </li> <li>Tell students they are going to see and hear some words with the sound /r/. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then point to the first card in the activity and say: <em style='color:#7FD5EF; font-weight:bold;'>robot</em>. </li> <li>Invite a volunteer to point out the letter <em>r</em> in the word. </li> <li>Invite other volunteers to find the letter <em>r</em> in the other words. </li> <li>Then have students do the digital activity again. Encourage them to repeat the words. </li> </ul>", answerKey: "" },
                { title:"Lesson 16 Activity 3 (15 min.) ", thumbnail: "mission_3/lesson_16/M3_16r_act3", activity: "mission_3/lesson_16/M3_16r_act3", teacherNotes: "<strong>Lesson 16 Activity 3 (15 min.)</strong> <ul> <li>Display the letter <em>r</em> and elicit the sound.</li> <li>Encourage students to recall words that begin with the sound /r/. </li> <li>Then point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen, look and choose the words with r.</em></li> <li>Play the audio for the first picture and have students repeat the word. </li> <li>Ask: <em style='color:#7FD5EF; font-weight:bold;'>Is there an /r/ in (the word for the picture)?</em> </li> <li>Play the audio for the other pictures and ask if there is an /r/ sound in any of them. Select those that do.</li> <li>Then have students complete the activity again in pairs or individually. Encourage students to repeat the words. </li> </ul>", answerKey: "" }
            ],
            chant: [
                { title:"Lesson 16 Chant (25 min.) ", thumbnail: "mission_3/lesson_16/chant/M3_16r_chant16", activity: "mission_3/lesson_16/chant/M3_16r_chant16", teacherNotes: "<strong>Lesson 16 Chant (25 min.)</strong> <ul> <li>Display the picture in the first section of the digital activity.</li> <li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li> <li>Then display the letter <em>r</em> and elicit the sound.</li> <li>Explain that they are going to hear a chant with words that have the sound /r/. </li> <li>Point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li> <li>Play the chant. </li> <li>Elicit any words with the /r/ sound they heard. (It’s OK if they can’t identify any.)</li> <li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /r/.</li> <li>Then display the second part of the digital activity. </li> <li>Point to the chant below the picture. Tell students they are going to listen and read.</li> <li>Play the chant again, pausing after the first line: <em style='color:#7FD5EF; font-weight:bold;'>I love to read in my room.</em> </li> <li>Have students point out the boy and ask what he is doing in the picture. </li> <li>Repeat the first line of the chant. Point to each word in the line as you say it.</li> <li>Encourage students to repeat the line, pointing to the words as they say them.</li> <li>Then elicit the words with the sound /r/. (If students don’t know a word, but they see an <em>r</em> in it, have them point out the word and you can say it for them.)</li> <li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /r/.</li> <li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li> </ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_16/lesson_16" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_16/lesson_16a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_16/lesson_16b" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_16/AudiosLesson16" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 17,
            mission: 3,
// css:"m_mission3",
            ejemplo: "ejemplos/ejemplo17.png",
            grapheme: "grapheme/lesson_17.png",
            phoneme:"phoneme/lesson_17.png",
            audio: new Audio("assets/audios/lesson_17.mp3"),
            pathResources: "resources/mission3/",
            media: ["video/lesson_17.mp4"],
            poster: "mission_3/lesson_17/poster/lesson17_poster.jpg",
            LO_info: [
                { title:"Lesson 17 Introduction (10 min.) ", thumbnail: "mission_3/lesson_17/M3_17h_intro", activity: "mission_3/lesson_17/M3_17h_intro", teacherNotes: "<strong>Lesson 17 Introduction (10 min.)</strong> <ul> <li>Display the letters <em>e, u,</em> and <em>r</em> and elicit the sounds /ɛ/, /ʌ/ and /r/.</li> <li>Then tell students they are going to learn a new sound.</li> <li>Display the letter <em>h</em>. </li> <li>Then display the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em></li> <li>Play the audio for the digital activity.</li> <li>Then point to the letter, say the sound, and have students repeat it. </li> <li>Encourage students to continue repeating the sound: /h/, /h/, /h/.</li> </ul>", answerKey: "" },
                { title:"Lesson 17 Activity 1 (15 min.) ", thumbnail: "mission_3/lesson_17/M3_17h_act1", activity: "mission_3/lesson_17/M3_17h_act1", teacherNotes: "<strong>Lesson 17 Activity 1 (15 min.)</strong> <ul> <li>Display the letters of the alphabet, including the letter <em>h</em>.</li> <li>Invite volunteers to point out the letter <em>h</em> and say the sound.</li> <li>Tell students to cover their eyes while you change the order of the letters displayed.</li> <li>Invite different volunteers to point out the letter <em>h</em>. Continue the activity until everyone (who chooses to) has had the opportunity to find the letter.</li> <li>Then display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen, look and color.</em></li> <li>Guide students to complete the digital activity.</li> <li>Then have students do the digital activity again. Encourage them to repeat the /h/ sound when they find and color the letter.</li> </ul>", answerKey: "" },
                { title:"Lesson 17 Activity 2 (15 min.) ", thumbnail: "mission_3/lesson_17/M3_17h_act2", activity: "mission_3/lesson_17/M3_17h_act2", teacherNotes:"<strong>Lesson 17 Activity 2 (15 min.)</strong> <ul> <li>Display the letter <em>h</em> and elicit the sound. </li> <li>Tell students they are going to see and hear some words with the sound /h/. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;' >Look and say. Then listen and check.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then point to the first card in the activity and invite volunteers to sound out the word and say <em>hat</em>. </li> <li>Invite a volunteer to point out the letter <em>h</em> in the word. </li> <li>Invite other volunteers to find the letter <em>h</em> in the other words. </li> <li>Then have students do the digital activity again. Encourage them to repeat the words. </li> </ul>", answerKey: "" },
                { title:"Lesson 17 Activity 3 (15 min.) ", thumbnail: "mission_3/lesson_17/M3_17h_act3", activity: "mission_3/lesson_17/M3_17h_act3", teacherNotes: "<strong>Lesson 17 Activity 3 (15 min.)</strong> <ul> <li>Display the letter <em style='color:#7FD5EF; font-weight:bold;'>h</em> and elicit the sound.</li> <li>Encourage students to recall words with the letter <em>h</em>. </li> <li>Then point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and match.</em></li> <li>Guide students to complete the digital activity as a group. </li> <li>Then have students play a few more rounds of the activity in pairs or individually. Encourage students to repeat the words when they turn the cards.</li> </ul>", answerKey: "" }
            ],
            chant: [
                { title:"Lesson 17 Chant (25 min.) ", thumbnail: "mission_3/lesson_17/chant/M3_17h_chant17", activity: "mission_3/lesson_17/chant/M3_17h_chant17", teacherNotes: "<strong>Lesson 17 Chant (25 min.)</strong> <ul> <li>Display the picture in the first section of the digital activity.</li> <li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li> <li>Then display the letter h and elicit the sound.</li> <li>Explain that they are going to hear a chant with words that have the sound /h/. </li> <li>Point to and say the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li> <li>Play the chant. </li> <li>Elicit any words with the /h/ sound they heard. (It’s OK if they can’t identify any.)</li> <li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /h/.</li> <li>Then display the second part of the digital activity. </li> <li>Point to the chant below the picture. Tell students they are going to listen and read.</li> <li>Play the chant again, pausing after the first line: <em style='color:#7FD5EF; font-weight:bold;'>It’s not hot.</em> </li> <li>Repeat the first line of the chant. Point to each word in the line as you say it.</li> <li>Encourage students to repeat the line, pointing to the words as they say them.</li> <li>Then elicit the word with the sound /h/. (If students don’t know a word, but they see an <em>h</em> in it, have them point out the word and you can say it for them.)</li> <li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /h/.</li> <li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li> </ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_17/lesson_17" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_17/lesson_17a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_17/lesson_17b" },
                    { kind: "mp3", track: "Track 3", track_source: "lesson_17/lesson_17c" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_17/AudiosLesson17" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 18,
            mission: 3,
// css:"m_mission3",
            ejemplo: "ejemplos/ejemplo18.png",
            grapheme: "grapheme/lesson_18.png",
            phoneme:"phoneme/lesson_18.png",
            audio: new Audio("assets/audios/lesson_18.mp3"),
            pathResources: "resources/mission3/",
            media: ["video/lesson_18.mp4"],
            poster: "mission_3/lesson_18/poster/lesson18_poster.jpg",
            LO_info: [
                { title:"Lesson 18 Introduction (15 min.) ", thumbnail: "mission_3/lesson_18/M3_18b_intro", activity: "mission_3/lesson_18/M3_18b_intro", teacherNotes: "<strong>Lesson 18 Introduction (15 min.)</strong> <ul> <li>Display the letters <em>e, u, r, h</em> and elicit the sounds /ɛ/, /ʌ/, /r/ and /h/.</li> <li>Encourage students to recall any words with these sounds.</li> <li>Then tell students they are going to learn a new sound.</li> <li>Display the letter <em>b</em>. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em></li> <li>Play the audio for the digital activity.</li> <li>Then point to the letter, say the sound, and have students repeat it. </li> <li>Encourage students to continue repeating the sound: /b/, /b/, /b/.</li> </ul>", answerKey: "" },
                { title:"Lesson 18 Activity 1 (20 min.) ", thumbnail: "mission_3/lesson_18/M3_18b_act1", activity: "mission_3/lesson_18/M3_18b_act1", teacherNotes: "<strong>Lesson 18 Activity 1 (20 min.)</strong> <ul> <li>Display the cards with the letters <em>d, p, t,</em> and <em>b</em>.</li> <li>Invite volunteers to point to the letters and say the sounds. Take some time to help students practice and hear the subtle differences in pronunciation among the letters.</li> <li>Point to one of the four cards and elicit the sound. Continue randomly pointing to different cards and eliciting the sounds, going faster and faster until students can’t keep up.</li> <li>Then display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and order.</em></li> <li>Guide students to complete the digital activity as a group. </li> <li>Then have students do it again, in pairs or individually.</li> </ul>", answerKey: "" },
                { title:"Lesson 18 Activity 2 (15 min.) ", thumbnail: "mission_3/lesson_18/M3_18b_act2", activity: "mission_3/lesson_18/M3_18b_act2", teacherNotes: "<strong>Lesson 18 Activity 2 (15 min.)</strong> <ul> <li>Display the letter <em>b</em> and elicit the sound /b/. </li> <li>Tell students they are going to see and hear some words with the sound /b/. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then point to the first card in the activity and say: <em style='color:#7FD5EF; font-weight:bold;'>bus</em>. </li> <li>Invite a volunteer to point out the letter <em>b</em> in the word. </li> <li>Invite other volunteers to find the letter <em>b</em> in the other words. </li> <li>Then have students do the digital activity again. Encourage them to repeat the words. </li> </ul>", answerKey: "" },
                { title:"Lesson 18 Activity 3 (15 min.) ", thumbnail: "mission_3/lesson_18/M3_18b_act3", activity: "mission_3/lesson_18/M3_18b_act3", teacherNotes: "<strong>Lesson 18 Activity 3 (15 min.)</strong> <ul> <li>Display the letters b and p. Elicit the sounds.</li> <li>Encourage students to recall words that begin with the letters <em>b</em> and <em>p</em>. </li> <li>Then point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen. Tap and drop.</em></li> <li>Play the audio for the first card in the activity. Ask: <em style='color:#7FD5EF; font-weight:bold;'>Does (the word for the picture) have a /b/ or a /p/ sound?</em> (Answer will depend on the first card displayed in the activity.)</li> <li>Point to the two sound categories and demonstrate how to tap on a card and place it in the correct category.</li> <li>Guide students to complete the digital activity as a group, or monitor them as they complete it in pairs or individually.</li> </ul>", answerKey: "" }
            ],
            chant: [
                { title:"Lesson 18 Chant (25 min.) ", thumbnail: "mission_3/lesson_18/chant/M3_18b_chant18", activity: "mission_3/lesson_18/chant/M3_18b_chant18", teacherNotes: "<strong>Lesson 18 Chant (25 min.)</strong> <ul> <li>Display the picture in the first section of the digital activity.</li> <li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li> <li>Then display the letter <em>b</em> and elicit the sound /b/.</li> <li>Explain that they are going to hear a chant with words that have the sound /b/. </li> <li>Point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li> <li>Play the chant. </li> <li>Elicit any words with the /b/ sound they heard. (It’s OK if they can’t identify any.)</li> <li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /b/.</li> <li>Then display the second part of the digital activity. </li> <li>Point to the chant below the picture. Tell students they are going to listen and read.</li> <li>Play the chant again, pausing after the first line: <em>Ben is on a big, blue bus.</em> </li> <li>Have students point out the boy (Ben) and the bus in the picture. </li> <li>Repeat the first line of the chant. Point to each word in the line as you say it.</li> <li>Encourage students to repeat the line, pointing to the words as they say them.</li> <li>Then elicit the words with the sound /b/. (If students don’t know a word, but they see a <em>b</em> in it, have them point out the word and you can say it for them.)</li> <li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /b/.</li> <li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li> </ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_18/lesson_18" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_18/lesson_18a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_18/lesson_18b" },
                    { kind: "mp3", track: "Track 3", track_source: "lesson_18/lesson_18c" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_18/AudiosLesson18" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 19,
            mission: 3,
// css:"m_mission3",
            ejemplo: "ejemplos/ejemplo19.png",
            grapheme: "grapheme/lesson_19.png",
            phoneme:"phoneme/lesson_19.png",
            audio: new Audio("assets/audios/lesson_19.mp3"),
            pathResources: "resources/mission3/",
            media: ["video/lesson_19.mp4"],
            poster: "mission_3/lesson_19/poster/lesson19_poster.jpg",
            LO_info: [
                { title:"Lesson 19 Introduction (10 min.) ", thumbnail: "mission_3/lesson_19/M3_19f_intro", activity: "mission_3/lesson_19/M3_19f_intro", teacherNotes:"<strong>Lesson 19 Introduction (10 min.)</strong> <ul> <li>Display the letters <em>e, u, r, h, b,</em> and elicit the sounds /ɛ/, /ʌ/, /r/, /h/, and /b/.</li> <li>Then tell students they are going to learn a new sound.</li> <li>Display the letter <em>f</em>. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em></li> <li>Play the audio for the digital activity.</li> <li>Then point to the letter, say the sound, and have students repeat it. </li> <li>Encourage students to continue repeating the sound: /f/, /f/, /f/.</li> </ul>", answerKey: "" },
                { title:"Lesson 19 Activity 1 (15 min.) ", thumbnail: "mission_3/lesson_19/M3_19f_act1", activity: "mission_3/lesson_19/M3_19f_act1", teacherNotes: "<strong>Lesson 19 Activity 1 (15 min.)</strong> <ul> <li>Display the letters <em>s, h, b,</em> and <em>f</em>.</li> <li>Invite volunteers to point to the letters and say the sounds.</li> <li>Then display the digital activity.</li> <li>Point to each letter and elicit the sound.</li> <li>Play the audio for each letter to confirm the sound.</li> <li>Then point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and choose.</em></li> <li>Guide students to complete the first section of the activity.</li> <li>Then have them complete the rest of the digital activity individually.  </li> </ul>", answerKey: "" },
                { title:"Lesson 19 Activity 2 (15 min.) ", thumbnail: "mission_3/lesson_19/M3_19f_act2", activity: "mission_3/lesson_19/M3_19f_act2", teacherNotes: "<strong>Lesson 19 Activity 2 (15 min.)</strong> <ul> <li>Display the letter <em>f</em> and elicit the sound /f/. </li> <li>Tell students they are going to see and hear some words with the sound /f/. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then point to the first card in the activity and say: <em style='color:#7FD5EF; font-weight:bold;'>fish</em>. </li> <li>Invite a volunteer to point out the letter <em>f</em> in the word. </li> <li>Invite other volunteers to find the letter <em>f</em> in the other words. </li> <li>Then have students do the digital activity again. Encourage them to repeat the words. </li> </ul>", answerKey: "" },
                { title:"Lesson 19 Activity 3 (15 min.) ", thumbnail: "mission_3/lesson_19/M3_19f_act3", activity: "mission_3/lesson_19/M3_19f_act3", teacherNotes: "<strong>Lesson 19 Activity 3 (15 min.)</strong> <ul> <li>Display the letter <em>f</em> and elicit the sound.</li> <li>Display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and choose the odd one out.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then have students do the activity again, in pairs or individually.</li> </ul>", answerKey: "" }
            ],
            chant: [
                { title:"Lesson 19 Chant (25 min.) ", thumbnail: "mission_3/lesson_19/chant/M3_19f_chant19", activity: "mission_3/lesson_19/chant/M3_19f_chant19", teacherNotes: "<strong>Lesson 19 Chant (25 min.)</strong> <ul> <li>Display the picture in the first section of the digital activity.</li> <li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li> <li>Then display the letter <em>f</em> and elicit the sound.</li> <li>Explain that they are going to hear a chant with words that have the sound /f/. </li> <li>Point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li> <li>Play the chant. </li> <li>Elicit any words with the /f/ sound they heard. (It’s OK if they can’t identify any.)</li> <li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /f/.</li> <li>Then display the second part of the digital activity. </li> <li>Point to the chant below the picture. Tell students they are going to listen and read.</li> <li>Play the chant again, pausing after the first line: <em>Meet my fantastic family.</em> </li> <li>Have students point out the family in the picture. </li> <li>Repeat the first line of the chant. Point to each word in the line as you say it.</li> <li>Encourage students to repeat the line, pointing to the words as they say them.</li> <li>Then elicit the words with the sound /f/. (If students don’t know a word, but they see an <em>f</em> in it, have them point out the word and you can say it for them.)</li> <li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /f/.</li> <li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li> </ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_19/lesson_19" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_19/lesson_19a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_19/lesson_19b" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_19/AudiosLesson19" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 20,
            mission: 3,
// css:"m_mission3",
            ejemplo: "ejemplos/ejemplo20.png",
            grapheme: "grapheme/lesson_20.png",
            phoneme:"phoneme/lesson_20.png",
            audio: new Audio("assets/audios/lesson_20.mp3"),
            pathResources: "resources/mission3/",
            media: ["video/lesson_20.mp4"],
            poster: "mission_3/lesson_20/poster/lesson20_poster.jpg",
            LO_info: [
                { title:"Lesson 20 Introduction (15 min.) ", thumbnail: "mission_3/lesson_20/M3_20l_intro", activity: "mission_3/lesson_20/M3_20l_intro", teacherNotes: "<strong>Lesson 20 Introduction (15 min.)</strong> <ul> <li>Display the letters <em>e, u, r, h, b, f, i</em> and elicit the sounds /ɛ/, /ʌ/, /r/, /h/, /b/, /f/, /ɪ/, /t/, and /l/.</li> <li>Encourage students to recall any words with these sounds.</li> <li>Then tell students they’re going to learn a new sound.</li> <li>Display the letter <em>l</em> and say the sound.</li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em></li> <li>Play the audio for the digital activity.</li> <li>Then point to the letter, say the sound, and have students repeat it. </li> <li>Encourage students to continue repeating the sound: /l/, /l/, /l/.</li> </ul>", answerKey: "" },
                { title:"Lesson 20 Activity 1 (10 min.) ", thumbnail: "mission_3/lesson_20/M3_20l_act1", activity: "mission_3/lesson_20/M3_20l_act1", teacherNotes: "<strong>Lesson 20 Activity 1 (10 min.)</strong> <ul> <li>Display the cards with the letters <em>l, i,</em> and <em>t</em>.</li> <li>Invite volunteers to point to the letters <em>l, i,</em> and <em>t</em> and say the sounds /l/,/ɪ/, and /t/ . </li> <li>Then point to one of the three cards and elicit the sound. Continue randomly pointing to different cards and eliciting the sounds, going faster and faster until students can’t keep up.</li> <li>Then display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and order.</em></li> <li>Guide students to complete the digital activity as a group. </li> <li>Then have students do the activity again in pairs or individually.</li> </ul>", answerKey: "" },
                { title:"Lesson 20 Activity 2 (15 min.) ", thumbnail: "mission_3/lesson_20/M3_20l_act2", activity: "mission_3/lesson_20/M3_20l_act2", teacherNotes: "<strong>Lesson 20 Activity 2 (15 min.)</strong> <ul> <li>Display the letter <em>l</em> and elicit the sound /l/. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then point to the first card in the activity and say: <em style='color:#7FD5EF; font-weight:bold;'>leg</em>. </li> <li>Invite a volunteer to point out the letter <em>l</em> in the word. </li> <li>Invite other volunteers to find the letter <em>l</em> in the other words. </li> <li>Then have students do the digital activity again. Encourage them to repeat the words. </li> </ul>", answerKey: "" },
                { title:"Lesson 20 Activity 3 (15 min.) ", thumbnail: "mission_3/lesson_20/M3_20l_act3", activity: "mission_3/lesson_20/M3_20l_act3", teacherNotes: "<strong>Lesson 20 Activity 3 (15 min.) </strong><ul><li>Display the letter <em>l</em> and elicit the sound. </li><li>Encourage students to recall words that begin with the sound /l/.  </li><li>Then point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen, look and choose the words with l or ll.</em> </li><li>Explain that two ll’s together have the same sound as one l.  </li><li>Play the audio for the first picture and have students repeat the word.  </li><li>Ask: <em style='color:#7FD5EF; font-weight:bold;'>Is there an /l/ in (the word for the picture)? Is the /l/ sound at the beginning or the end of the word?</em> (If students cannot hear the /l/ sound at the end of the word, display the word and have students sound out and then blend the letters.) </li><li>Play the audio for the other pictures, asking if there is an /l/ sound in any of them. Select the words that have /l/ sounds.  </li><li>Challenge students to say if the /l/ sound is at the beginning or the end of the words.  </li><li>Then have students complete the activity again in pairs or individually. Encourage students to repeat the words. </li></ul>", answerKey: "" }
            ],
            chant: [
                { title:"Lesson 20 Chant (25 min.)", thumbnail: "mission_3/lesson_20/chant/M3_20l_chant20", activity: "mission_3/lesson_20/chant/M3_20l_chant20", teacherNotes: "<strong>Lesson 20 Chant (25 min.) </strong><ul><li>Display the picture in the first section of the digital activity. </li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.)  </li><li>Then display the letter <em>l</em> and elicit the sound /l/. </li><li>Explain that they are going to hear a chant with words that have the sound /l/.  </li><li>Point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li><li>Play the chant.  </li><li>Elicit any words with the /l/ sound they heard. (It’s OK if they can’t identify any.) </li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /l/. </li><li>Then display the second part of the digital activity.  </li><li>Point to the chant below the picture. Tell students they are going to listen and read. </li><li>Play the chant again, pausing after the first line: <em>There’s a lizard in my living room.</em> </li><li>Have students point out the lizard in the picture. Ask: <em style='color:#7FD5EF; font-weight:bold;'>Where is the lizard?</em> (In the living room.) </li><li>Repeat the first line of the chant. Point to each word in the line as you say it. </li><li>Encourage students to repeat the line, pointing to the words as they say them. </li><li>Then elicit the words with the sound /l/. (If students don’t know a word, but they see an <em>l</em> in it, have them point out the word and you can say it for them.) </li><li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /l/. </li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li></ul>       ", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_20/lesson_20" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_20/lesson_20a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_20/lesson_20b" },
                    { kind: "mp3", track: "Track 3", track_source: "lesson_20/lesson_20c" },
                    { kind: "mp3", track: "Track 4", track_source: "lesson_20/lesson_20d" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_20/AudiosLesson20" }
                ],
            ],
            descargables: [""]

        },
        /* ------------------------------ MISSION 4 ----------------------------- */
        {

            lesson: 21,
            mission: 4,
// css:"m_mission4",
            ejemplo: "ejemplos/ejemplo21.png",
            grapheme: "grapheme/lesson_21.png",
            phoneme:"phoneme/lesson_21.png",
            audio: new Audio("assets/audios/lesson_21.mp3"),
            pathResources: "resources/mission4/",
            media: ["video/lesson_21.mp4"],
            poster: "mission_4/lesson_21/poster/lesson21_poster.jpg",
            LO_info: [
                { title:"Lesson 21 Introduction (20 min.)", thumbnail: "mission_4/lesson_21/M4_21j_intro", activity: "mission_4/lesson_21/M4_21j_intro", teacherNotes: "<strong>Lesson 21 Introduction (20 min.)</strong> <ul> <li>Display the letters of the alphabet students have learned so far. (Omit <em>q, v, w, x, y,</em> and <em>z</em>.)</li> <li>Elicit the sounds.</li> <li>Invite volunteers to arrange the letters to form words. </em> </li> <li>Then tell students they are going to learn a new sound.</li> <li>Display the letter <em>j</em>. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em> </li> <li>Play the audio for the digital activity.</li> <li>Then point to the letter, say the sound, and have students repeat it. </li> <li>Encourage students to continue repeating the sound: /ʤ/, /ʤ/, /ʤ/.</li> </ul>", answerKey: "" },
                { title:"Lesson 21 Activity 1 (10 min.)", thumbnail: "mission_4/lesson_21/M4_21j_act1", activity: "mission_4/lesson_21/M4_21j_act1", teacherNotes: "<strong>Lesson 21 Activity 1 (10 min.)</strong> <ul> <li>Display the letters <em>i, l, t,</em> and <em>j</em>.</li> <li>Say the sound /ʤ/ and invite volunteers to point out the letter <em>j</em>.</li> <li>Then display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen, look and color</em>.</li> <li>Guide students to complete the digital activity.</li> </ul>", answerKey: "" },
                { title:"Lesson 21 Activity 2 (15 min.)", thumbnail: "mission_4/lesson_21/M4_21j_act2", activity: "mission_4/lesson_21/M4_21j_act2", teacherNotes: "<strong>Lesson 21 Activity 2 (15 min.)</strong> <ul> <li>Display the letter <em>j</em> and elicit the sound. </li> <li>Tell students they are going to see and hear some words with the sound /ʤ/. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then have students do the digital activity again, in pairs or individually. Encourage them to repeat the words. </li> <li>After they have completed it, point to the words jam and jump in the activity. Invite volunteers to sound out and then blend and say the words.</li> </ul>", answerKey: "" },
                { title:"Lesson 21 Activity 3 (15 min.)", thumbnail: "mission_4/lesson_21/M4_21j_act3", activity: "mission_4/lesson_21/M4_21j_act3", teacherNotes: "<strong>Lesson 21 Activity 3 (15 min.)</strong> <ul> <li>Display the letter <em>j</em> and elicit the sound.</li> <li>Encourage students to recall words that begin with the sound /ʤ/. </li> <li>Then point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen, look and choose the words with j.</em></li> <li>Play the audio for the first picture and have students repeat the word. </li> <li>Ask: <em style='color:#7FD5EF; font-weight:bold;'>Is there a /ʤ/ in (the word for the picture)?</em></li> <li>Play the audio for the other pictures, asking if there is a /ʤ/ sound in any of them. Select those that do.</li> <li>Then have students complete the activity again, in pairs or individually. Encourage students to repeat the words.</li> </ul>", answerKey: "" }
            ],
            chant: [
                { title:"Lesson 21 Chant (25 min.)", thumbnail: "mission_4/lesson_21/chant/M4_21j_chant21", activity: "mission_4/lesson_21/chant/M4_21j_chant21", teacherNotes: "<strong>Lesson 21 Chant (25 min.)</strong> <ul> <li>Display the picture in the first part of the digital activity.</li> <li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li> <li>Then display the letter <em>j</em> and elicit the sound.</li> <li>Explain that they are going to hear a chant with words that have the sound /ʤ/. </li> <li>Point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li> <li>Play the chant. </li> <li>Elicit any words with the /ʤ/ sound they heard. (It’s OK if they can’t identify any.)</li> <li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /ʤ/.</li> <li>Then display the second part of the digital activity. </li> <li>Point to the chant below the picture. Tell students they are going to listen and read.</li> <li>Play the chant again, pausing after the first line: <em>Jill goes for a long jog</em>. </li> <li>Point to the girl in the picture and elicit her name. (<em>Jill.</em>) </li> <li>Invite a volunteer to act out the meaning of <em>jog</em>.</li> <li>Repeat the first line of the chant. Point to each word in the line as you say it.</li> <li>Encourage students to repeat the line, pointing to the words as they say them.</li> <li>Then elicit the words with the sound /ʤ/. (If students don’t know a word, but they see a <em>j</em> in it, have them point out the word and you can say it for them.)</li> <li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /ʤ/.</li> <li>Play the chant completely a few more times. Encourage students to say and point to words in the chant. </li> </ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_21/lesson_21" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_21/lesson_21a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_21/lesson_21b" },
                    { kind: "mp3", track: "Track 3", track_source: "lesson_21/lesson_21c" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_21/AudiosLesson21" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 22,
            mission: 4,
// css:"m_mission4",
            ejemplo: "ejemplos/ejemplo22.png",
            grapheme: "grapheme/lesson_22.png",
            phoneme:"phoneme/lesson_22.png",
            audio: new Audio("assets/audios/lesson_22.mp3"),
            pathResources: "resources/mission4/",
            media: ["video/lesson_22.mp4"],
            poster: "mission_4/lesson_22/poster/lesson22_poster.jpg",
            LO_info: [
                { title:"Lesson 22 Introduction (10 min.)", thumbnail: "mission_4/lesson_22/M4_22v_intro", activity: "mission_4/lesson_22/M4_22v_intro", teacherNotes: "<strong>Lesson 22 Introduction (10 min.)</strong> <ul> <li>Display the letters <em>b, f,</em> and <em>j</em>. Elicit the sounds.</li> <li>Then tell students they are going to learn a new sound.</li> <li>Display the letter <em>v</em>. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em></li> <li>Play the audio for the digital activity.</li> <li>Then point to the letter, say the sound, and have students repeat it. </li> <li>Encourage students to continue repeating the sound: /v/, /v/, /v/.</li> </ul>", answerKey: "" },
                { title:"Lesson 22 Activity 1 (15 min.)", thumbnail: "mission_4/lesson_22/M4_22v_act1", activity: "mission_4/lesson_22/M4_22v_act1", teacherNotes: "<strong>Lesson 22 Activity 1 (15 min.)</strong> <ul> <li>Display the cards with the letters <em>b, f,</em> and <em>v</em>.</li> <li>Invite volunteers to point out the letters <em>b</em> and <em>f</em> and say the sounds.</li> <li>Then have them point out the letter <em>v</em> and say the sound.</li> <li>Point to one of the three cards and elicit the sound. Continue randomly pointing to different cards and eliciting the sounds, going faster and faster until students can’t keep up.</li> <li>Then display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and order.</em></li> <li>Guide students to complete the digital activity as a group, or do the first together and monitor students as they complete the others in pairs or individually. </li> </ul>", answerKey: "" },
                { title:"Lesson 22 Activity 2 (15 min.)", thumbnail: "mission_4/lesson_22/M4_22v_act2", activity: "mission_4/lesson_22/M4_22v_act2", teacherNotes: "<strong>Lesson 22 Activity 2 (15 min.)</strong> <ul> <li>Display the letter <em>v</em> and elicit the sound. </li> <li>Tell students they are going to see and hear some words with the sound /v/. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then point to the first card in the activity and say: <em>van</em>. </li> <li>Invite a volunteer to point out the letter <em>v</em> in the word. </li> <li>Invite other volunteers to find the letter <em>v</em> in the other words. </li> <li>Then have students do the digital activity again. Encourage them to repeat the words. </li> </ul>", answerKey: "" },
                { title:"Lesson 22 Activity 3 (15 min.)", thumbnail: "mission_4/lesson_22/M4_22v_act3", activity: "mission_4/lesson_22/M4_22v_act3", teacherNotes: "<strong>Lesson 22 Activity 3 (15 min.)</strong> <ul> <li>Display the letters <em>f</em> and <em>v</em>. Elicit the sounds.</li> <li>Encourage students to recall words with the letters <em>f</em> and <em>v</em>. </li> <li>Then point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen. Tap and drop.</em></li> <li>Play the audio for the first card in the digital activity. Ask: <em style='color:#7FD5EF; font-weight:bold;'>Does (the word for the picture) have a /f/ or a /v/ sound?</em></li> <li>Point to the two sound categories and demonstrate how to tap on the card and place it in the correct category.</li> <li>Guide students to complete the digital activity as a group, or monitor them as they complete it in pairs or individually.</li></ul>", answerKey: "" }
            ],
            chant: [
                { title:"Lesson 22 Chant (25 min.)", thumbnail: "mission_4/lesson_22/chant/M4_22v_chant22", activity: "mission_4/lesson_22/chant/M4_22v_chant22", teacherNotes: "<strong>Lesson 22 Chant (25 min.)</strong> <ul> <li>Display the picture in the first part of the digital activity.</li> <li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li> <li>Then display the letter v and elicit the sound.</li> <li>Explain that they are going to hear a chant with words that have the sound /v/. </li> <li>Point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen</em>.</li> <li>Play the chant. </li> <li>Elicit any words with the /v/ sound they heard. (It’s OK if they can’t identify any.)</li> <li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /v/.</li> <li>Then display the second part of the digital activity. </li> <li>Point to the chant below the picture. Tell students they are going to listen and read.</li> <li>Play the chant again, pausing after the first line: <em style='color:#7FD5EF; font-weight:bold;'>I went on vacation last summer.</em></li> <li>Invite a volunteer to point out the word with a <em>v</em>. </li> <li>Encourage students to say where they like to go on vacation, such as the beach, a forest, a city or a small town (village).</li> <li>Repeat the first line of the chant. Point to each word in the line as you say it.</li> <li>Encourage students to repeat the line, pointing to the words as they say them.</li> <li>Then elicit the words with the sound /v/. (If students don’t know a word, but they see a <em>v</em> in it, have them point out the word and you can say it for them.)</li> <li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /v/.</li> <li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li> </ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_22/lesson_22" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_22/lesson_22a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_22/lesson_22b" },
                    { kind: "mp3", track: "Track 3", track_source: "lesson_22/lesson_22c" },
                    { kind: "mp3", track: "Track 4", track_source: "lesson_22/lesson_22d" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_22/AudiosLesson22" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 23,
            mission: 4,
// css:"m_mission4",
            ejemplo: "ejemplos/ejemplo23.png",
            grapheme: "grapheme/lesson_23.png",
            phoneme:"phoneme/lesson_23.png",
            audio: new Audio("assets/audios/lesson_23.mp3"),
            pathResources: "resources/mission4/",
            media: ["video/lesson_23.mp4"],
            poster: "mission_4/lesson_23/poster/lesson23_poster.jpg",
            LO_info: [
                { title:"Lesson 23 Introduction (10 min.)", thumbnail: "mission_4/lesson_23/M4_23w_intro", activity: "mission_4/lesson_23/M4_23w_intro", teacherNotes: "<strong>Lesson 23 Introduction (10 min.)</strong> <ul> <li>Display the letter <em>v</em> and elicit the sound /v/. </li> <li>Encourage students to recall any words with the /v/ sound.</li> <li>Tell students they are going to learn a new sound.</li> <li>Display the letter <em>w</em>. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em></li> <li>Play the audio for the digital activity.</li> <li>Then point to the letter, say the sound, and have students repeat it. </li> <li>Encourage students to continue repeating the sound: /w/, /w/, /w/.</li> </ul>", answerKey: "" },
                { title:"Lesson 23 Activity 1 (20 min.)", thumbnail: "mission_4/lesson_23/M4_23w_act1", activity: "mission_4/lesson_23/M4_23w_act1", teacherNotes: "<strong>Lesson 23 Activity 1 (20 min.)</strong> <ul> <li>Display the letters <em>v, w, x,</em> and <em>z</em>.</li> <li>Say the sound /w/ and invite volunteers to point out the card with <em>w</em>.</li> <li>Then display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen, look and color.</em></li> <li>Guide students to complete the digital activity.  </li> </ul>", answerKey: "" },
                { title:"Lesson 23 Activity 2 (15 min.)", thumbnail: "mission_4/lesson_23/M4_23w_act2", activity: "mission_4/lesson_23/M4_23w_act2", teacherNotes: "<strong>Lesson 23 Activity 2 (15 min.)</strong> <ul> <li>Display the letter <em>w</em> and elicit the sound.</li> <li>Tell students they are going to see and hear some words with the sound /w/. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then point to the first card in the activity and say: <em style='color:#7FD5EF; font-weight:bold;'>window</em>. </li> <li>Invite a volunteer to point out the letters <em>w</em> in the word. </li> <li>Invite other volunteers to find the letter <em>w</em> in the other words. </li> <li>In turn, point to the words <em></em>web</em> and <em>wall</em> in the activity. Invite volunteers to sound out and then blend and say the words. (Point out that two <em>ll’s</em> together have the same sound as one <em>l</em>.)</li> <li>Then have students do the digital activity again. Encourage them to repeat the words. </li> </ul>", answerKey: "" },
                { title:"Lesson 23 Activity 3 (15 min.)", thumbnail: "mission_4/lesson_23/M4_23w_act3", activity: "mission_4/lesson_23/M4_23w_act3", teacherNotes: "<strong>Lesson 23 Activity 3 (15 min.)</strong> <ul> <li>Display the letter <em>w</em> and elicit the sound.</li> <li>Encourage students to recall words that begin with the sound /w/. </li> <li>Then point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen, look and choose the words with w.</em></li> <li>Play the audio for the first picture and have students repeat the word. </li> <li>Ask: <em style='color:#7FD5EF; font-weight:bold;'>Is there a /w/ in (the word for the picture)?</em> <em>(Answer will depend on the first picture displayed in the activity.)</em></li> <li>Play the audio for the other pictures and ask if there is a /w/ sound in any of them. Select those that do.</li> <li>Then have students complete the activity again in pairs or individually. Encourage students to repeat the words. </li> </ul>", answerKey: "" }
            ],
            chant: [
                { title:"Lesson 23 Chant (25 min.)", thumbnail: "mission_4/lesson_23/chant/M4_23w_chant23", activity: "mission_4/lesson_23/chant/M4_23w_chant23", teacherNotes: "<strong>Lesson 23 Chant (25 min.)</strong> <ul> <li>Display the picture in the first part of the digital activity.</li> <li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li> <li>Then display the letter <em>w</em> and elicit the sound.</li> <li>Explain that they are going to hear a chant with words that have the sound /w/. </li> <li>Point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li> <li>Play the chant. </li> <li>Elicit any words with the /w/ sound they heard. (It’s OK if they can’t identify any.)</li> <li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /w/.</li> <li>Then display the second part of the digital activity. </li> <li>Point to the chant below the picture. Tell students they are going to listen and read.</li> <li>Play the chant again, pausing after the first line: <em>I watch a spider</em>. </li> <li>Have students point out the girl and the spider. </li> <li>Repeat the first line of the chant. Point to each word in the line as you say it.</li> <li>Encourage students to repeat the line, pointing to the words as they say them.</li> <li>Then elicit the word with the sound /w/. (If students don’t know a word, but they see a <em>w</em> in it, have them point out the word and you can say it for them.)</li> <li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /w/.</li> <li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li> </ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_23/lesson_23" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_23/lesson_23a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_23/lesson_23b" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_23/AudiosLesson23" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 24,
            mission: 4,
// css:"m_mission4",
            ejemplo: "ejemplos/ejemplo24.png",
            grapheme: "grapheme/lesson_24.png",
            phoneme:"phoneme/lesson_24.png",
            audio: new Audio("assets/audios/lesson_24.mp3"),
            pathResources: "resources/mission4/",
            media: ["video/lesson_24.mp4"],
            poster: "mission_4/lesson_24/poster/lesson24_poster.jpg",
            LO_info: [
                { title:"Lesson 24 Introduction (10 min.)", thumbnail: "mission_4/lesson_24/M4_24x_intro", activity: "mission_4/lesson_24/M4_24x_intro", teacherNotes: "<strong>Lesson 24 Introduction (10 min.)</strong> <ul> <li>Display the letters <em>v</em> and <em>w</em> and elicit their sounds.</li> <li>Tell students they are going to learn a new sound.</li> <li>Display the letter <em>x</em>. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em></li> <li>Play the audio for the digital activity</li> <li>Then point to the letter, say the sound, and have students repeat it. </li> <li>Encourage students to continue repeating the sound: /ks/, /ks/, /ks/.</li> </ul>", answerKey: "" },
                { title:"Lesson 24 Activity 1 (15 min.)", thumbnail: "mission_4/lesson_24/M4_24x_act1", activity: "mission_4/lesson_24/M4_24x_act1", teacherNotes: "<strong>Lesson 24 Activity 1 (15 min.)</strong> <ul> <li>Display the letters of the alphabet, including the letter <em>x</em>.</li> <li>Invite volunteers to point out the letter <em>x</em> and say the sound.</li> <li>Have students cover their eyes while you change the order of the letters displayed.</li> <li>Invite different volunteers to point out the letter <em>x</em>. Continue the activity until everyone (who chooses to) has had the opportunity to find the letter.</li> <li>Then display the digital activity and read the instructions aloud: <em style='color: blue;'>Listen, look and color.</em></li> <li>Guide students to complete the digital activity.</li> <li>Then have students do the digital activity again. Encourage them to repeat the /ks/ sound when they find and color the letter.</li> </ul>", answerKey: "" },
                { title:"Lesson 24 Activity 2 (15 min.)", thumbnail: "mission_4/lesson_24/M4_24x_act2", activity: "mission_4/lesson_24/M4_24x_act2", teacherNotes: "<strong>Lesson 24 Activity 2 (15 min.)</strong> <ul> <li>Display the letter <em>x</em> and elicit the sound. </li> <li>Tell students they are going to see and hear some words with the sound /ks/. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then point to the first card in the activity and invite volunteers to sound out the word and say <em>box</em>. </li> <li>Invite a volunteer to point out the letter <em>x</em> in the word. </li> <li>Invite other volunteers to find the letter <em>x</em> in the other words. Encourage them to sound out and then say the words.</li> <li>Then have students do the digital activity again. Encourage them to repeat the words. </li> </ul>", answerKey: "" },
                { title:"Lesson 24 Activity 3 (15 min.)", thumbnail: "mission_4/lesson_24/M4_24x_act3", activity: "mission_4/lesson_24/M4_24x_act3", teacherNotes: "<strong>Lesson 24 Activity 3 (15 min.)</strong> <ul> <li>Display the letters <em>ck</em> and elicit the sound.</li> <li>Then display the letter <em>x</em> and elicit the sound.</li> <li>Encourage students to recall words that end with the letters <em>x</em> and <em>ck</em>. </li> <li>Then point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen. Tap and drop.</em></li> <li>Play the audio for the first card in the digital activity. Ask: <em style='color:#7FD5EF; font-weight:bold;'>Does (the word for the picture) have a /ks/ or a /k/ sound?</em> (Answer will depend on the first card displayed in the activity.)</li> <li>Point to the two sound categories and demonstrate how to tap on the card and place it in the correct category.</li> <li>Guide students to complete the digital activity as a group, or monitor them as they complete it in pairs or individually.</li> </ul>", answerKey: "" }
            ],
            chant: [
                { title:"Lesson 24 Chant (25 min.)", thumbnail: "mission_4/lesson_24/chant/M4_24x_chant24", activity: "mission_4/lesson_24/chant/M4_24x_chant24", teacherNotes: "<strong>Lesson 24 Chant (25 min.)</strong> <ul> <li>Display the picture in the first part of the digital activity.</li> <li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li> <li>Then display the letter <em>x</em> and elicit the sound.</li> <li>Explain that they are going to hear a chant with words that have the sound /ks/. </li> <li>Point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li> <li>Play the chant. </li> <li>Elicit any words with the /ks/ sound they heard. (It’s OK if they can’t identify any.)</li> <li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /ks/.</li> <li>Then display the second part of the digital activity. </li> <li>Point to the chant below the picture. Tell students they are going to listen and read.</li> <li>Play the chant again, pausing after the first line: <em>Alex is six.</em> </li> <li>Repeat the first line of the chant. Point to each word in the line as you say it.</li> <li>Elicit the name of the boy and how old he is.</li> <li>Encourage students to repeat the line, pointing to the words as they say them.</li> <li>Then elicit the words with the sound /ks/. (If students don’t know a word, but they see an <em>x</em> in it, have them point out the word and you can say it for them.)</li> <li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /ks/.</li> <li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li> </ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_24/lesson_24" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_24/lesson_24a" },
                    { kind: "", track: "All tracks", track_source: "lesson_24/AudiosLesson24" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 25,
            mission: 4,
// css:"m_mission4",
            ejemplo: "ejemplos/ejemplo25.png",
            grapheme: "grapheme/lesson_25.png",
            phoneme:"phoneme/lesson_25.png",
            audio: new Audio("assets/audios/lesson_25.mp3"),
            pathResources: "resources/mission4/",
            media: ["video/lesson_25.mp4"],
            poster: "mission_4/lesson_25/poster/lesson25_poster.jpg",
            LO_info: [
                { title:"Lesson 25 Introduction (15 min.)", thumbnail: "mission_4/lesson_25/M4_25y_intro", activity: "mission_4/lesson_25/M4_25y_intro", teacherNotes: "<strong>Lesson 25 Introduction (15 min.)</strong> <ul> <li>Display the letters <em>j, v, w, x</em> and elicit their sounds.</li> <li>Encourage students to recall any words with those sounds.</li> <li>Then tell students they are going to learn a new sound.</li> <li>Display the letter <em>y</em>. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em></li> <li>Play the audio for the digital activity.</li> <li>Then point to the letter, say the sound, and have students repeat it. </li> <li>Encourage students to continue repeating the sound: /j/, /j/, /j/.</li> </ul>", answerKey: "" },
                { title:"Lesson 25 Activity 1 (20 min.)", thumbnail: "mission_4/lesson_25/M4_25y_act1", activity: "mission_4/lesson_25/M4_25y_act1", teacherNotes: "<strong>Lesson 25 Activity 1 (20 min.)</strong> <ul> <li>Display the cards with the letters <em>h, j, u,</em> and <em>y</em>.</li> <li>Invite volunteers to point out the letters <em>h, j, u,</em> and <em>y</em> and say the sounds. Take some time to help students practice and hear the subtle differences in pronunciation among the four letters.</li> <li>Point to one of the four cards and elicit the sound. Continue randomly pointing to different cards and eliciting the sounds, going faster and faster until students can’t keep up.</li> <li>Then display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and choose.</em></li> <li>Guide students to complete the digital activity as a group. </li> <li>Then have students do it again, in pairs or individually.</li> </ul>", answerKey: "" },
                { title:"Lesson 25 Activity 2 (20 min.)", thumbnail: "mission_4/lesson_25/M4_25y_act2", activity: "mission_4/lesson_25/M4_25y_act2", teacherNotes: "<strong>Lesson 25 Activity 2 (20 min.)</strong> <ul> <li>Display the letter <em>y</em> and elicit the sound /j/. </li> <li>Tell students they are going to see and hear some words with the sound /j/. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then point to the first card in the activity and say: <em style='color:#7FD5EF; font-weight:bold;'>yellow</em>. </li> <li>Invite a volunteer to point out the letter <em>y</em> in the word. </li> <li>Invite other volunteers to find the letter <em>y</em> in the other words. </li> <li>Encourage them to sound out and say the words <em>yam, yuck,</em> and <em>yak</em>.</li> <li>Then have students do the digital activity again. Encourage them to repeat the words. </li> </ul>", answerKey: "" },
                { title:"Lesson 25 Activity 3 (15 min.)", thumbnail: "mission_4/lesson_25/M4_25y_act3", activity: "mission_4/lesson_25/M4_25y_act3", teacherNotes: "<strong>Lesson 25 Activity 3 (15 min.)</strong> <ul> <li>Display the letter <em>y</em> and elicit the sound /j/.</li> <li>Display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and choose the odd one out.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then have students do the activity again, in pairs or individually.</li> </ul>", answerKey: "" }
            ],
            chant: [
                { title:"Lesson 25 Chant (25 min.)", thumbnail: "mission_4/lesson_25/chant/M4_25y_chant25", activity: "mission_4/lesson_25/chant/M4_25y_chant25", teacherNotes: "<strong>Lesson 25 Chant (25 min.)</strong> <ul> <li>Display the picture in the first part of the digital activity.</li> <li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li> <li>Then display the letter y and elicit the sound /j/.</li> <li>Explain that they are going to hear a chant with words that have the sound /j/. </li> <li>Point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li> <li>Play the chant.</li> <li>Elicit any words with the /j/ sound they heard. (It’s OK if they can’t identify any.)</li> <li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /j/.</li> <li>Then display the second part of the digital activity. </li> <li>Point to the chant below the picture. Tell students they are going to listen and read.</li> <li>Play the chant again, pausing after the first line: <em>Yes, you, over there.</em></li> <li>Repeat the first line of the chant. Point to each word in the line as you say it.</li> <li>Encourage students to repeat the line, pointing to the words as they say them.</li> <li>Then elicit the words with the sound /j/. (If students don’t know a word, but they see a <em style='font-weight:bold;'>y</em> in it, have them point out the word and you can say it for them.)</li> <li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /j/.</li> <li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li> </ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_25/lesson_25" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_25/lesson_25a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_25/lesson_25b" },
                    { kind: "mp3", track: "Track 3", track_source: "lesson_25/lesson_25c" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_25/AudiosLesson25" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 26,
            mission: 4,
// css:"m_mission4",
            ejemplo: "ejemplos/ejemplo26.png",
            grapheme: "grapheme/lesson_26.png",
            phoneme:"phoneme/lesson_26.png",
            audio: new Audio("assets/audios/lesson_26.mp3"),
            pathResources: "resources/mission4/",
            media: ["video/lesson_26.mp4"],
            poster: "mission_4/lesson_26/poster/lesson26_poster.jpg",
            LO_info: [
                { title:"Lesson 26 Introduction (10 min.)", thumbnail: "mission_4/lesson_26/M4_26z_intro", activity: "mission_4/lesson_26/M4_26z_intro", teacherNotes: "<strong>Lesson 26 Introduction (10 min.)</strong> <ul> <li>Display the letters <em>j, v, w, x, y,</em> and elicit their sounds.</li> <li>Tell students they are going to learn a new sound.</li> <li>Display the letter <em>z</em>. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em></li> <li>Play the audio for the digital activity.</li> <li>Then point to the letter, say the sound, and have students repeat it. </li> <li>Encourage students to continue repeating the sound: /z/, /z/, /z/.</li> </ul>", answerKey: "" },
                { title:"Lesson 26 Activity 1 (15 min.)", thumbnail: "mission_4/lesson_26/M4_26z_act1", activity: "mission_4/lesson_26/M4_26z_act1", teacherNotes: "<strong>Lesson 26 Activity 1 (15 min.)</strong> <ul> <li>Display the letters <em>v, w, x,</em> and <em>z</em>.</li> <li>Invite volunteers to point out and say the sounds.</li> <li>Then display the digital activity.</li> <li>Point to each letter and elicit the sound.</li> <li>Play the audio for each letter to confirm the sound.</li> <li>Then point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and choose.</em></li> <li>Guide students to complete the first section of the activity.</li> <li>Then have them complete the rest of the digital activity individually.</li> </ul>", answerKey: "" },
                { title:"Lesson 26 Activity 2 (15 min.)", thumbnail: "mission_4/lesson_26/M4_26z_act2", activity: "mission_4/lesson_26/M4_26z_act2", teacherNotes: "<strong>Lesson 26 Activity 2 (15 min.)</strong> <ul> <li>Display the letter <em>z</em> and elicit the sound /z/. </li> <li>Tell students they are going to see and hear some words with the sound /z/. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then point to the first card in the activity and say: <em style='color:#7FD5EF; font-weight:bold;'>zebra</em>. </li> <li>Invite a volunteer to point out the letter <em>z</em> in the word. </li> <li>Invite other volunteers to find the letter <em>z</em> in the other words. </li> <li>Then have students do the digital activity again. Encourage them to repeat the words. </li> </ul>", answerKey: "" },
                { title:"Lesson 26 Activity 3 (15 min.)", thumbnail: "mission_4/lesson_26/M4_26z_act3", activity: "mission_4/lesson_26/M4_26z_act3", teacherNotes: "<strong>Lesson 26 Activity 3 (15 min.)</strong> <ul> <li>Display the letters <em>s</em> and <em>z</em>. Elicit the sounds.</li> <li>Encourage students to recall words with the letters <em>s</em> and <em>z</em>. </li> <li>Then point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen. Tap and drop.</em></li> <li>Play the audio for the first card in the digital activity. Ask: <em style='color:#7FD5EF; font-weight:bold;'>Does (the word for the picture) have a /s/ or a /z/ sound?</em> (Answer will depend on the first card displayed in the activity.)</li> <li>Point to the two sound categories and demonstrate how to tap on the card and place it in the correct category.</li> <li>Guide students to complete the digital activity as a group, or monitor them as they complete it in pairs or individually.</li> </ul>", answerKey: "" }
            ],
            chant: [
                { title:"Lesson 26 Chant (25 min.)", thumbnail: "mission_4/lesson_26/chant/M4_26z_chant26", activity: "mission_4/lesson_26/chant/M4_26z_chant26", teacherNotes: "<strong>Lesson 26 Chant (25 min.)</strong> <ul> <li>Display the picture in the first part of the digital activity.</li> <li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li> <li>Then display the letter <em>z</em> and elicit the sound.</li> <li>Explain that they are going to hear a chant with words that have the sound /z/. </li> <li>Point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li> <li>Play the chant. </li> <li>Elicit any words with the /z/ sound they heard. (It’s OK if they can’t identify any.)</li> <li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /z/.</li> <li>Then display the second part of the digital activity. </li> <li>Point to the chant below the picture. Tell students they are going to listen and read.</li> <li>Play the chant again, pausing after the first line: <em>I met a zebra at the zoo.</em> </li> <li>Have students point out the zebra and elicit the setting (<em>zoo</em>). </li> <li>Repeat the first line of the chant. Point to each word in the line as you say it.</li> <li>Encourage students to repeat the line, pointing to the words as they say them.</li> <li>Then elicit the words with the sound /z/. (If students don’t know a word, but they see a <em>z</em> in it, have them point out the word and you can say it for them.)</li> <li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /z/.</li> <li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li> </ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_26/lesson_26" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_26/lesson_26a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_26/lesson_26b" },
                    { kind: "mp3", track: "Track 3", track_source: "lesson_26/lesson_26c" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_26/AudiosLesson26" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 27,
            mission: 4,
// css:"m_mission4",
            ejemplo: "ejemplos/ejemplo27.png",
            grapheme: "grapheme/lesson_27.png",
            phoneme:"phoneme/lesson_27.png",
            audio: new Audio("assets/audios/lesson_27.mp3"),
            pathResources: "resources/mission5/",
            media: ["video/lesson_27.mp4"],
            poster: "mission_4/lesson_27/poster/lesson27_poster.jpg",
            LO_info: [
                { title:"Lesson 27 Introduction (15 min.)", thumbnail: "mission_4/lesson_27/M4_27qu_intro", activity: "mission_4/lesson_27/M4_27qu_intro", teacherNotes: "<strong>Lesson 27 Introduction (15 min.)</strong> <ul> <li>One by one, display the letters <em>j, v, w, x, y,</em> and <em>z</em> and elicit the sounds.</li> <li>Encourage students to recall any words with these sounds.</li> <li>Then tell students they are going to learn a new sound.</li> <li>Display the letter <em>qu</em> and say the sound.</li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em></li> <li>Play the audio for the digital activity.</li> <li>Then point to the letters, say the sound, and have students repeat them. </li> <li>Encourage students to continue repeating the sound: /kw/, /kw/, /kw/.</li> </ul>", answerKey: "" },
                { title:"Lesson 27 Activity 1 (10 min.)", thumbnail: "mission_4/lesson_27/M4_27qu_act1", activity: "mission_4/lesson_27/M4_27qu_act1", teacherNotes: "<strong>Lesson 27 Activity 1 (10 min.)</strong> <ul> <li>Display the cards with the letters <em>g, k,</em> and <em>qu</em>.</li> <li>Invite volunteers to point to the letters <em>g, k,</em> and <em>qu</em> and say the sounds. </li> <li>Point to one of the three cards and elicit the sound. Continue randomly pointing to different cards and eliciting the sounds, going faster and faster until students can’t keep up.</li> <li>Then display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and order.</em></li> <li>Guide students to complete the digital activity as a group. </li> <li>Then have students do the activity again in pairs or individually.</li> </ul>", answerKey: "" },
                { title:"Lesson 27 Activity 2 (15 min.)", thumbnail: "mission_4/lesson_27/M4_27qu_act2", activity: "mission_4/lesson_27/M4_27qu_act2", teacherNotes: "<strong>Lesson 27 Activity 2 (15 min.)</strong> <ul> <li>Display the letters <em>qu</em> and elicit the sound /kw/. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then point to the first card in the activity and say: <em style='color:#7FD5EF; font-weight:bold;'>question</em>.</li> <li>Invite a volunteer to point out the letters <em>qu</em> in the word. </li> <li>Invite other volunteers to find the letters <em>qu</em> in the other words. </li> <li>Then have students do the digital activity again. Encourage them to repeat the words. </li> </ul>", answerKey: "" },
                { title:"Lesson 27 Activity 3 (15 min.)", thumbnail: "mission_4/lesson_27/M4_27qu_act3", activity: "mission_4/lesson_27/M4_27qu_act3", teacherNotes: "<strong>Lesson 27 Activity 3 (15 min.)</strong> <ul> <li>Display the letters <em>ck, x,</em> and <em>qu</em>, and elicit the sounds.</li> <li>Display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and choose the odd one out.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then have students do the activity again, in pairs or individually.</li> </ul>", answerKey: "" }
            ],
            chant: [
                { title:"Lesson 27 Chant (25 min.)", thumbnail: "mission_4/lesson_27/chant/M4_27qu_chant27", activity: "mission_4/lesson_27/chant/M4_27qu_chant27", teacherNotes: "<strong>Lesson 27 Chant (25 min.)</strong> <ul> <li>Display the picture in the first part of the digital activity.</li> <li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li> <li>Then display the letters <em>qu</em> and elicit the sound /kw/.</li> <li>Explain that they are going to hear a chant with words that have the sound /kw/. </li> <li>Point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li> <li>Play the chant. </li> <li>Elicit any words with the /kw/ sound they heard. (It’s OK if they can’t identify any.)</li> <li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /kw/.</li> <li>Then display the second part of the digital activity. </li> <li>Point to the chant below the picture. Tell students they are going to listen and read.</li> <li>Play the chant again, pausing after the first line: <em style='color:#7FD5EF; font-weight:bold;'>Can I ask a quick question.</em> </li> <li>Repeat the first line of the chant. Point to each word in the line as you say it.</li> <li>Encourage students to repeat the line, pointing to the words as they say them.</li> <li>Then elicit the words with the sound /kw/. (If students don’t know a word, but they see <em>qu</em> in it, have them point out the word and you can say it for them.)</li> <li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /kw/.</li> <li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li> </ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_27/lesson_27" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_27/lesson_27a" },
                    { kind: "mp3", track: "Track 2", track_source: "lesson_27/lesson_27b" },
                    { kind: "mp3", track: "Track 3", track_source: "lesson_27/lesson_27c" },
                    { kind: "mp3", track: "Track 4", track_source: "lesson_27/lesson_27d" },
                    { kind: "zip", track: "All tracks", track_source: "lesson_27/AudiosLesson27" }
                ],
            ],
            descargables: [""]

        },
        /* ------------------------------ MISSION 5 ----------------------------- */
        {

            lesson: 28,
            mission: 5,
// css:"m_mission5",
            ejemplo: "ejemplos/ejemplo28.png",
            grapheme: "grapheme/lesson_28.png",
            phoneme:"phoneme/lesson_28.png",
            audio: new Audio("assets/audios/lesson_28.mp3"),
            pathResources: "resources/mission5/",
            media: ["video/lesson_28.mp4"],
            poster: "mission_5/lesson_28/poster/lesson28_poster.jpg",
            LO_info: [
                { title:"<strong>Lesson 28 Introduction (10 min.)</strong>", thumbnail: "mission_5/lesson_28/M5_28ch_intro", activity: "mission_5/lesson_28/M5_28ch_intro", teacherNotes: "<strong>Lesson 28 Introduction (10 min.)</strong><ul><li>Display the letters <em>c</em> and <em>h.</em></li><li>Elicit the sounds /k/ and /h/.</li><li>Explain that some letters, when put together, have a different sound.</li><li>Display the letters <em>c</em> and <em>h</em> together. </li><li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em> </li><li>Play the audio for the digital activity.</li><li>Then point to the letters, say the sound, and have students repeat it. </li><li>Encourage students to continue repeating the sound: /ʧ/, /ʧ/, /ʧ/.</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 28 Activity 1 (15 min.)</strong>", thumbnail: "mission_5/lesson_28/M5_28ch_act1", activity: "mission_5/lesson_28/M5_28ch_act1", teacherNotes: "<strong>Lesson 28 Activity 1 (15 min.)</strong><ul><li>Display the letters <em>f, h, j, y,</em> and <em>ch.</em></li><li>Invite volunteers to point to the letters and say the sounds /f/, /h/, /ʤ/, /j/, and /ʧ/.</li><li>Then display the digital activity.</li><li>Point to each letter and elicit the sound.</li><li>Then point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and choose.</em></li><li>Play the audio for the first section.</li><li>Elicit the letter(s) corresponding to the sound and select the correct option.</li><li>Then guide students to complete the rest of the digital activity as a group or individually.</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 28 Activity 2 (15 min.)</strong>", thumbnail: "mission_5/lesson_28/M5_28ch_act2", activity: "mission_5/lesson_28/M5_28ch_act2", teacherNotes: "<strong>Lesson 28 Activity 2 (15 min.)</strong><ul><li>Display the letters <em>ch</em> and elicit the sound /ʧ/. </li><li>Tell students they are going to see and hear some words with the sound /ʧ/. </li><li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li><li>Guide students to complete the digital activity as a group.</li><li>Then have students do the digital activity again, in pairs or individually. Encourage them to repeat the words. </li><li>Point to each word, in turn, and ask: <em style='color:#7FD5EF; font-weight:bold;'>Is the /ʧ/ sound at the beginning of the word or at the end?</em></li><ul>", answerKey: "" },
                { title:"<strong>Lesson 28 Activity 3 (15 min.)</strong>", thumbnail: "mission_5/lesson_28/M5_28ch_act3", activity: "mission_5/lesson_28/M5_28ch_act3", teacherNotes: "<strong>Lesson 28 Activity 3 (15 min.)</strong><ul><li>Display the letters <em>j</em> and <em>ch.</em> Elicit the sounds /ʤ/ and /ʧ/.</li><li>Encourage students to recall words with the sounds. </li><li>Then point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;>Look and listen. Tap and drop.</em></li><li>Play the audio for the first card in the digital activity. Ask: <em style='color:#7FD5EF; font-weight:bold;>Does (the word for the picture) have a /ʧ/ or a /ʤ/sound?</em> (Answer will depend on the first card displayed in the activity.)</li><li>Point to the two sound categories and demonstrate how to tap on the card and place it in the correct category.</li><li>Guide students to complete the digital activity as a group, or monitor them as they complete it in pairs or individually.</li></ul>", answerKey: "" }
            ],
            chant: [
                { title:"<strong>Lesson 28 Chant (25 min.)</strong>", thumbnail: "mission_5/lesson_28/chant/M5_28ch_chant28", activity: "mission_5/lesson_28/chant/M5_28ch_chant28", teacherNotes: "<strong>Lesson 28 Chant (25 min.)</strong><ul><li>Display the picture in the first part of the digital activity.</li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li><li>Then display the letters ch and elicit the sound.</li><li>Explain that they are going to hear a chant with words that have the sound /ʧ/. </li><li>Point to the activity instructions and read them aloud: Look and listen.</li><li>Play the chant. </li><li>Elicit any words with the /ʧ/ sound they heard. (It’s OK if they can’t identify any.)</li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /ʧ/.</li><li>Then display the second part of the digital activity. </li><li>Point to the chant below the picture. Tell students they are going to listen and read.</li><li>Play the chant again, pausing after the first line: The children at the beach. </li><li>Have students point out the children and the beach in the picture. </li><li>Repeat the first line of the chant. Point to each word in the line as you say it.</li><li>Encourage students to repeat the line, pointing to the words as they say them.</li><li>Then elicit the words with the sound /ʧ/. (If students don’t know a word, but they see the ch in it, have them point out the word and you can say it for them.)</li><li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /ʧ/.</li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li></ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_28/lesson_28" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_28/lesson_28a" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 29,
            mission: 5,
// css:"m_mission5",
            ejemplo: "ejemplos/ejemplo29.png",
            grapheme: "grapheme/lesson_29.png",
            phoneme:"phoneme/lesson_29.png",
            audio: new Audio("assets/audios/lesson_29.mp3"),
            pathResources: "resources/mission5/",
            media: ["video/lesson_29.mp4"],
            poster: "mission_5/lesson_29/poster/lesson29_poster.jpg",
            LO_info: [
                { title:"<strong>Lesson 29 Introduction (10 min.)</strong>", thumbnail: "mission_5/lesson_29/M5_29sh_intro", activity: "mission_5/lesson_29/M5_29sh_intro", teacherNotes: "<strong>Lesson 29 Introduction (10 min.)</strong><ul><li>Display the letters <em>s</em> and <em>h.</em></li><li>Elicit the sounds /s/ and /h/.</li><li>Explain that some letters, when put together, have a different sound.</li><li>Display the letters <em>s</em> and <em>h</em> together. </li><li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em> </li><li>Play the audio for the digital activity.</li><li>Then point to the letters, say the sound, and have students repeat it. </li><li>Encourage students to continue repeating the sound: /ʃ/, /ʃ/, /ʃ/.</li></ul> ", answerKey: "" },
                { title:"<strong>Lesson 29 Activity 1 (15 min.)</strong>", thumbnail: "mission_5/lesson_29/M5_29sh_act1", activity: "mission_5/lesson_29/M5_29sh_act1", teacherNotes: "<strong>Lesson 29 Activity 1 (15 min.)</strong><ul><li>Display the letters <em>v, s, z, sh</em> and elicit the sounds /v/, /s/, /z/, and /ʃ/.</li><li>Then display the digital activity.</li><li>Point to each letter and elicit the sound.</li><li>Then point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and choose.</em></li><li>Play the audio at the top of the activity and elicit the corresponding letter(s). If necessary, play the sounds for each letter(s) so students can hear them before choosing one.</li><li>Then guide students to complete the rest of the digital activity as a group or individually.</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 29 Activity 2 (15 min.)</strong>", thumbnail: "mission_5/lesson_29/M5_29sh_act2", activity: "mission_5/lesson_29/M5_29sh_act2", teacherNotes: "<strong>Lesson 29 Activity 2 (15 min.)</strong><ul><li>Display the letters <em>sh</em> and elicit the sound. </li><li>Tell students they are going to see and hear some words with the sound /ʃ/.</li><li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li><li>Guide students to complete the digital activity as a group.</li><li>Then have students do the digital activity again, in pairs or individually. Encourage them to repeat the words. </li><li>Point to each word and ask:<em style='color:#7FD5EF; font-weight:bold;'> Is the /ʃ/ sound at the beginning of the word or at the end?</em></li></ul>", answerKey: "" },
                { title:"<strong>Lesson 29 Activity 3 (15 min.)</strong>", thumbnail: "mission_5/lesson_29/M5_29sh_act3", activity: "mission_5/lesson_29/M5_29sh_act3", teacherNotes: "<strong>Lesson 29 Activity 3 (15 min.)</strong><ul><li>Display the words ship and fish.</li><li>Invite volunteers to point out the sh in the words. </li><li>Ask: <em style='color:#7FD5EF; font-weight:bold;'>Is the /ʃ/ sound at the beginning of the word or at the end?</em> (At the beginning in ship, at the end in fish.)</li><li>Then point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen. Tap and drop.</em></li><li>Play the audio for the first card in the digital activity. Ask: <em style='color:#7FD5EF; font-weight:bold;'>Does (the word for the picture) have the /ʃ/ sound at the beginning of the word or at the end?</em> (Answer will depend on the first card displayed in the activity.)</li><li>Point to the two sound categories and confirm students understand that <em>-sh</em> is for words with <em>sh</em> at the end and that <em>sh-</em> is for words that begin with the sound /ʃ/. </li><li>Then demonstrate how to tap on the card and place it in the correct category.</li><li>Guide students to complete the digital activity as a group, or monitor them as they complete it in pairs or individually.</li></ul>", answerKey: "" }
            ],
            chant: [
                { title:"<strong>Lesson 29 Chant (25 min.)</strong>", thumbnail: "mission_5/lesson_29/chant/M5_29sh_chant29", activity: "mission_5/lesson_29/chant/M5_29sh_chant29", teacherNotes: "<strong>Lesson 29 Chant (25 min.)</strong><ul><li>Display the picture in the first part of the digital activity.</li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li><li>Then display the letters <em>sh</em> and elicit the sound.</li><li>Explain that they are going to hear a chant with words that have the sound /ʃ/. </li><li>Point to and say the activity instructions: <em  style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li><li>Play the chant. </li><li>Elicit any words with the /ʃ/ sound they heard. (It’s OK if they can’t identify any.)</li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /ʃ/.</li><li>Then display the second part of the digital activity. </li><li>Point to the chant below the picture. Tell students they are going to listen and read.</li><li>Play the chant again, pausing after the first line: <em>She gets dressed for fishing.</em></li><li>Have students point out the girl in the picture. </li><li>Repeat the first line of the chant. Point to each word in the line as you say it.</li><li>Encourage students to repeat the line, pointing to the words as they say them.</li><li>Then elicit the words with the sound /ʃ/. (If students don’t know a word, but they see the <em>sh</em> in it, have them point out the word and you can say it for them.)</li><li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /ʃ/.</li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li></ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_29/lesson_29" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_29/lesson_29a" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 30,
            mission: 5,
// css:"m_mission5",
            ejemplo: "ejemplos/ejemplo30.png",
            grapheme: "grapheme/lesson_30.png",
            phoneme:"phoneme/lesson_30.png",
            audio: new Audio("assets/audios/lesson_30.mp3"),
            pathResources: "resources/mission5/",
            media: ["video/lesson_30.mp4"],
            poster: "mission_5/lesson_30/poster/lesson30_poster.jpg",
            LO_info: [
                { title:"<strong>Lesson 30 Introduction (10 min.)</strong>", thumbnail: "mission_5/lesson_30/M5_30th_intro", activity: "mission_5/lesson_30/M5_30th_intro", teacherNotes: "<strong>Lesson 30 Introduction (10 min.)</strong><ul><li>Display the letters <em>t</em> and <em>h.</em></li><li>Elicit the sounds /t/ and /h/.</li><li>Explain that some letters, when put together, have a different sound.</li><li>Display the letters <em>t</em> and <em>h</em> together. </li><li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em></li><li>Play the audio for the digital activity.</li><li>Then point to the letters, say the sound, and have students repeat it. </li><li>Encourage students to continue repeating the sound: /θ/, /θ/, /θ/.</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 30 Activity 1 (20 min.)</strong>", thumbnail: "mission_5/lesson_30/M5_30th_act1", activity: "mission_5/lesson_30/M5_30th_act1",  teacherNotes: "<strong>Lesson 30 Activity 1 (20 min.)</strong><ul><li>Display the cards with the letters <em>ch, sh,</em> and <em>th.</em></li><li>Invite volunteers to point out the <em>ch</em> and sh and say the sounds.</li><li>Then have them point out the letter <em>th</em> and say the sound.</li><li>Point to the ch and act out pulling the horn on a train as you say the sound /ʧ/.</li><li>Repeat the steps for <em>sh</em> and <em>th</em>. (The action for <em>sh</em> could be placing a finger to your lips; and the action for <em>th</em> could be washing your arms, pretending to be in a bath.)</li><li>Point to one of the three cards and elicit the sounds and corresponding action. Continue randomly pointing to different cards and eliciting the sounds and actions, going faster and faster until students can’t keep up.</li><li>Then display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and order.</em></li><li>Guide students to complete the digital activity as a group, or do the first together and monitor students as they complete the others in pairs or individually.</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 30 Activity 2 (15 min.)</strong>", thumbnail: "mission_5/lesson_30/M5_30th_act2", activity: "mission_5/lesson_30/M5_30th_act2",  teacherNotes: "<strong>Lesson 30 Activity 2 (15 min.)</strong><ul><li>Display the letters <em>th</em> and elicit the sound. </li><li>Tell students they are going to see and hear some words with the sound /θ/. </li><li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li><li>Guide students to complete the digital activity as a group.</li><li>Then point to the first card in the activity and say: <em style='color:#7FD5EF; font-weight:bold;'>throw.</em> </li><li>Invite a volunteer to point out the letters th in the word. </li><li>Invite other volunteers to find the letters th in the other words. </li><li>Then have students do the digital activity again. Encourage them to repeat the words. </li><li>In turn, point to the words and ask: <em style='color:#7FD5EF; font-weight:bold;'>Is the /θ/ sound at the beginning of the word or at the end?</em></li></ul>", answerKey: "" },
                { title:"<strong>Lesson 30 Activity 3 (15 min.)</strong>", thumbnail: "mission_5/lesson_30/M5_30th_act3", activity: "mission_5/lesson_30/M5_30th_act3",  teacherNotes: "<strong>Lesson 30 Activity 3 (15 min.)</strong><ul><li>Display the letters <em>f</em> and <em>th</em> and elicit the sounds.</li><li>Display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and choose the odd one out.</em></li><li>Guide students to complete the digital activity as a group.</li><li>Then have students do the activity again, in pairs or individually. </li></ul>", answerKey: "" }
            ],
            chant: [
                { title:"<strong>Lesson 30 Chant (25 min.)</strong>", thumbnail: "mission_5/lesson_30/chant/M5_30th_chant30", activity: "mission_5/lesson_30/chant/M5_30th_chant30", teacherNotes: "<strong>Lesson 30 Chant (25 min.)</strong><ul><li>Display the picture in the first part of the digital activity.</li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li><li>Then display the letters <em>th</em> and elicit the sound.</li><li>Explain that they are going to hear a chant with words that have the sound /θ/. </li><li>Point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li><li>Play the chant. </li><li>Elicit any words with the /θ/ sound they heard. (It’s OK if they can’t identify any.)</li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /θ/.</li><li>Then display the second part of the digital activity. </li><li>Point to the chant below the picture. Tell students they are going to listen and read.</li><li>Play the chant again, pausing after the first line: <em>Thank you for the help.</em> </li><li>Have students point out the girl and ask what she is doing in the picture. </li><li>Repeat the first line of the chant. Point to each word in the line as you say it.</li><li>Encourage students to repeat the line, pointing to the words as they say them.</li><li>Then elicit the word with the sound /θ/. (If students don’t know a word, but they see the <em>th</em> in it, have them point out the word and you can say it for them.)</li><li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /θ/.</li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li></ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_30/lesson_30" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_30/lesson_30a" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 31,
            mission: 5,
// css:"m_mission5",
            ejemplo: "ejemplos/ejemplo31.png",
            grapheme: "grapheme/lesson_31.png",
            phoneme:"phoneme/lesson_31.png",
            audio: new Audio("assets/audios/lesson_31.mp3"),
            pathResources: "resources/mission5/",
            media: ["video/lesson_31.mp4"],
            poster: "mission_5/lesson_31/poster/lesson31_poster.jpg",
            LO_info: [
                { title:"<strong>Lesson 31 Introduction (10 min.)</strong>", thumbnail: "mission_5/lesson_31/M5_31th_intro", activity: "mission_5/lesson_31/M5_31th_intro", teacherNotes: "<strong>Lesson 31 Introduction (10 min.)</strong><ul><li>Display the letters <em>ch, sh,</em> and <em>th</em> and elicit the sounds /ʧ/, /ʃ/ and /θ/.</li><li>Tell students they are going to learn a new sound.</li><li>Display the letters th and explain that the th has two possible sounds.</li><li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em></li><li>Play the audio for the digital activity.</li><li>Then point to the letter, say the sound, and have students repeat it. </li><li>Encourage students to continue repeating the sound: /ð/, /ð/, /ð/.</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 31 Activity 1 (15 min.)</strong>", thumbnail: "mission_5/lesson_31/M5_31th_act1",  activity: "mission_5/lesson_31/M5_31th_act1", teacherNotes: "<strong>Lesson 31 Activity 1 (15 min.)</strong><ul><li>Display the letters <em>th</em> and elicit the sounds /θ/ and /ð/.</li><li>Then point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and match.</em></li><li>Guide students to complete the digital activity as a group. </li><li>Then have students play a few more rounds of the activity in pairs or individually. Encourage students to repeat the words when they turn the cards.</li><li>Display the words <em>bath, feather, math,</em> and <em>brother.</em> </li><li>Say the words and invite students to identify the words that have the same <em>th</em> sound. (<em>Bath</em> and <em>math, feather</em> and <em>brother.</em>)</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 31 Activity 2 (15 min.)</strong>", thumbnail: "mission_5/lesson_31/M5_31th_act2",  activity: "mission_5/lesson_31/M5_31th_act2", teacherNotes: "<strong>Lesson 31 Activity 2 (15 min.)</strong><ul><li>Display the letter <em>th</em> and elicit the sound /ð/. </li><li>Tell students they are going to see and hear some words with the sound /ð/. </li><li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li><li>Guide students to complete the digital activity as a group.</li><li>Then point to the first card in the activity and invite volunteers to sound out the word. </li><li>Invite a volunteer to point out the letters <em>th</em> in the word. </li><li>Invite other volunteers to find the letters <em>th</em> in the other words. </li><li>Then have students do the digital activity again. Encourage them to repeat the words. </li><li>In turn, point to the words and ask: Where is the /ð/ sound—at the beginning, in the middle, or at the end of the word?</li><li>Explain that the /ð/ sound is usually at the beginning or in the middle of the words.</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 31 Activity 3 (15 min.)</strong>", thumbnail: "mission_5/lesson_31/M5_31th_act3",  activity: "mission_5/lesson_31/M5_31th_act3", teacherNotes: "<strong>Lesson 31 Activity 3 (15 min.)</strong><ul><li>Display the letters <em>th.</em> Elicit the two sounds /θ/ and /ð/.</li><li>Encourage students to recall words that begin with the two sounds. </li><li>Then point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen. Tap and drop.</em></li><li>Play the audio for the first card in the digital activity. Ask: <em style='color:#7FD5EF; font-weight:bold;'>Does (the word for the picture) have a /θ/ or a /ð/ sound?</em> (Answer will depend on the first card displayed in the activity.)</li><li>Point to the two sound categories and explain that the one on the left (voiced) is for the /ð/ sound and the one on the right (voiceless) is for the sound /θ/. </li><li>Demonstrate how to tap on the card and place it in the correct category.</li><li>Guide students to complete the digital activity as a group.</li></ul>", answerKey: "" }
            ],
            chant: [
                { title:"<strong>Lesson 31 Chant (25 min.)</strong>", thumbnail: "mission_5/lesson_31/chant/M5_31th_chant31", activity: "mission_5/lesson_31/chant/M5_31th_chant31", teacherNotes: "<strong>Lesson 31 Chant (25 min.)</strong><ul><li>Display the picture in the first part of the digital activity.</li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li><li>Then display the letter <em>th</em> and elicit the sound /ð/.</li><li>Explain that they are going to hear a chant with words that have the sound /ð/.</li><li>Point to and say the activity instructions: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li><li>Play the chant. </li><li>Elicit any words with the /ð/ sound they heard. (It’s OK if they can’t identify any.)</li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /ð/.</li><li>Then display the second part of the digital activity. </li><li>Point to the chant below the picture. Tell students they are going to listen and read.</li><li>Play the chant again, pausing after the first line: <em>My sister loves to play.</em></li><li>Have students point out the sister in the picture.</li><li>Repeat the first line of the chant. Point to each word in the line as you say it.</li><li>Encourage students to repeat the line, pointing to the words as they say them.</li><li>Then elicit the words with the sound /ð/. (Note: There aren’t any in this line.)</li><li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /ð/.</li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li></ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_31/lesson_31" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_31/lesson_31a" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 32,
            mission: 5,
// css:"m_mission5",
            ejemplo: "ejemplos/ejemplo32.png",
            grapheme: "grapheme/lesson_32.png",
            phoneme:"phoneme/lesson_32.png",
            audio: new Audio("assets/audios/lesson_32.mp3"),
            pathResources: "resources/mission5/",
            media: ["video/lesson_32.mp4"],
            poster: "mission_5/lesson_32/poster/lesson32_poster.jpg",
            LO_info: [
                { title:"<strong>Lesson 32 Introduction (10 min.)</strong>", thumbnail: "mission_5/lesson_32/M5_32ng_intro", activity: "mission_5/lesson_32/M5_32ng_intro", teacherNotes: "<strong>Lesson 32 Introduction (10 min.)</strong><ul><li>Display the letters <em>n</em> and <em>g.</em></li><li>Elicit the sounds /n/ and /g/.</li><li>Explain that some letters, when put together, the sound changes a little.</li><li>Display the letters <em>n</em> and <em>g</em> together. </li><li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em> </li><li>Play the audio for the digital activity.</li><li>Then point to the letters, say the sound, and have students repeat it. </li><li>Encourage students to continue repeating the sound: /ŋ/, /ŋ/, /ŋ/.</li><li>Explain that the <em>ng</em> together doesn’t have a completely different sound, but the <em>g</em> is softer.</li><li>Say /ŋ/ and /g/ a few times to demonstrate the difference.</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 32 Activity 1 (20 min.)</strong>", thumbnail: "mission_5/lesson_32/M5_32ng_act1",  activity: "mission_5/lesson_32/M5_32ng_act1",  teacherNotes: "<strong>Lesson 32 Activity 1 (20 min.)</strong><ul><li>Display the cards with the letters <em>m, n, g,</em> and <em>ng.</em></li><li>Invite volunteers to point out the <em>m, n, g,</em> and <em>ng</em> and say the sounds. Take some time to help students practice and hear the subtle differences in pronunciation among the four sounds.</li><li>Then have them point out the letters ng and say the sound.</li><li>Point to one of the four cards and elicit the sound. Continue randomly pointing to different cards and eliciting the sounds, going faster and faster until students can’t keep up.</li><li>Then display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;>Listen and choose.</em></li><li>Guide students to complete the digital activity as a group. </li><li>Then have students do it again, in pairs or individually.</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 32 Activity 2 (15 min.)</strong>", thumbnail: "mission_5/lesson_32/M5_32ng_act2",  activity: "mission_5/lesson_32/M5_32ng_act2",  teacherNotes: "<strong>Lesson 32 Activity 2 (15 min.)</strong><ul><li>Display the letters <em>ng</em> and elicit the sound /ŋ/. </li><li>Tell students they are going to see and hear some words with the sound /ŋ/. </li><li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li><li>Guide students to complete the digital activity as a group.</li><li>Then point to the first card in the activity and say: <em style='color:#7FD5EF; font-weight:bold;'>morning.</em> </li><li>Invite a volunteer to point out the letters <em>ng</em> in the word. </li><li>Invite other volunteers to find the letters <em>ng</em> in the other words. </li><li>Then have students do the digital activity again. Encourage them to repeat the words. </li></ul>", answerKey: "" },
                { title:"<strong>Lesson 32 Activity 3 (15 min.)</strong>", thumbnail: "mission_5/lesson_32/M5_32ng_act3",  activity: "mission_5/lesson_32/M5_32ng_act3",  teacherNotes: "<strong>Lesson 32 Activity 3 (15 min.)</strong><ul><li>Display the letters <em>n</em> and <em>ng.</em> Elicit the sounds.</li><li>Encourage students to recall words with the letters <em>n</em> and <em>ng.</em> </li><li>Then point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen. Tap and drop.</em></li><li>Play the audio for the first card in the digital activity. Ask: <em style='color:#7FD5EF; font-weight:bold;'>Does (the word for the picture) have an /n/ or a /ŋ/sound?</em> (Answer will depend on the first card displayed in the activity.)</li><li>Point to the two sound categories and demonstrate how to tap on the card and place it in the correct category.</li><li>Guide students to complete the digital activity as a group, or monitor them as they complete it in pairs or individually.</li></ul>", answerKey: "" }
            ],
            chant: [
                { title:"<strong>Lesson 32 Chant (25 min.)</strong><strong>Lesson 32 Chant (25 min.)</strong>", thumbnail: "mission_5/lesson_32/chant/M5_32ng_chant32", activity: "mission_5/lesson_32/chant/M5_32ng_chant32", teacherNotes: "<strong>Lesson 32 Chant (25 min.)</strong><ul><li>Display the picture in the first part of the digital activity.</li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li><li>Then display the letters <em>ng</em> and elicit the sound /ŋ/.</li><li>Explain that they are going to hear a chant with words that have the sound /ŋ/. </li><li>Point to and read the activity instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li><li>Play the chant. </li><li>Elicit any words with the /ŋ/ sound they heard. (It’s OK if they can’t identify any.)</li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /ŋ/.</li><li>Then display the second part of the digital activity. </li><li>Point to the chant below the picture. Tell students they are going to listen and read.</li><li>Play the chant again, pausing after the first line: <em>I like drawing in the morning.</em> </li><li>Have students point out the boy and elicit what he’s doing in the picture. </li><li>Repeat the first line of the chant. Point to each word in the line as you say it.</li><li>Encourage students to repeat the line, pointing to the words as they say them.</li><li>Then elicit the words with the sound /ŋ/. (If students don’t know a word, but they see the <em>ng</em> in it, have them point out the word and you can say it for them.)</li><li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /ŋ/.</li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li></ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_32/lesson_32" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_32/lesson_32a" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 33,
            mission: 5,
// css:"m_mission5",
            ejemplo: "ejemplos/ejemplo33.png",
            grapheme: "grapheme/lesson_33.png",
            phoneme:"phoneme/lesson_33.png",
            audio: new Audio("assets/audios/lesson_33.mp3"),
            pathResources: "resources/mission5/",
            media: ["video/lesson_33.mp4"],
            poster: "mission_5/lesson_33/poster/lesson33_poster.jpg",
            LO_info: [
                { title:"<strong>Lesson 33 Introduction (10 min.)</strong>", thumbnail: "mission_5/lesson_33/M5_33nk_intro", activity: "mission_5/lesson_33/M5_33nk_intro", teacherNotes: "<strong>Lesson 33 Introduction (10 min.)</strong><ul><li>Display the letters <em>ng</em> and <em>k.</em></li><li>Elicit the sounds /ŋ/ and /k/.</li><li>Explain that some letters, when put together, the sound changes a little.</li><li>Display the letters ng and k together, then remove the <em>g.</em> </li><li>Point to the instructions in the digital activity and read them aloud: <em>Look, listen and repeat.</em></li><li>Play the audio for the digital activity.</li><li>Then point to the letters, say the sound, and have students repeat it. </li><li>Encourage students to continue repeating the sound: /ŋk/, /ŋk/, /ŋk/.</li><li>Explain that the <em>nk</em> together doesn’t have a completely different sound, but is a blend of <em>ng</em> and <em>k.</em></li><li>Say /ŋ/ and /ŋk/ a few times to demonstrate the difference.</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 33 Activity 1 (15 min.)</strong>", thumbnail: "mission_5/lesson_33/M5_33nk_act1",  activity: "mission_5/lesson_33/M5_33nk_act1",  teacherNotes: "<strong>Lesson 33 Activity 1 (15 min.)</strong><ul><li>Display the letters <em>n, ng,</em> and <em>nk.</em></li><li>Invite volunteers to point to the letters and say the sounds.</li><li>Then display the first section of the digital activity.</li><li>Point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and order.</em></li><li>Then point to each letter (or pair of letters) and elicit the sound.</li><li>Play the audio for the first section and elicit the answer.</li><li>Guide students to complete the rest of the activity or have them complete the rest of it individually.  </li></ul>", answerKey: "" },
                { title:"<strong>Lesson 33 Activity 2 (15 min.)</strong>", thumbnail: "mission_5/lesson_33/M5_33nk_act2",  activity: "mission_5/lesson_33/M5_33nk_act2",  teacherNotes: "<strong>Lesson 33 Activity 2 (15 min.)</strong><ul><li>Display the letters <em>nk</em> and elicit the sound /ŋk/. </li><li>Tell students they are going to see and hear some words with the sound /ŋk/. </li><li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li><li>Guide students to complete the digital activity as a group.</li><li>Then point to the first card in the activity and say: <em style='color:#7FD5EF; font-weight:bold;'>pink.</em> </li><li>Invite a volunteer to point out the letters <em>nk</em> in the word. </li><li>Invite other volunteers to find the letters <em>nk</em> in the other words. </li><li>Then have students do the digital activity again. Encourage them to repeat the words. </li><li>In turn, point to the words and elicit where the <em>nk</em> is in each.</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 33 Activity 3 (15 min.)</strong>", thumbnail: "mission_5/lesson_33/M5_33nk_act3",  activity: "mission_5/lesson_33/M5_33nk_act3",  teacherNotes: "<strong>Lesson 33 Activity 3 (15 min.)</strong><ul><li>Display the letters <em>nk</em> and elicit the sound.</li><li>Display the digital activity and read the instructions aloud:<em style='color:#7FD5EF; font-weight:bold;'> Listen and draw lines.</em></li><li>Play the audio for the first item.</li><li>Elicit the word.</li><li>Point to the letters in the first row that correspond to the first sound in the word, and elicit the sound.</li><li>Then elicit the sounds (and letters) that are missing.</li><li>Demonstrate how to link the parts of the word.</li><li>Guide students to complete the rest of the digital activity.</li><li>Then have students do the activity again, in pairs or individually.</li></ul>", answerKey: "" }
            ],
            chant: [
                { title:"<strong>Lesson 33 Chant (25 min.)</strong>", thumbnail: "mission_5/lesson_33/chant/M5_33nk_chant33", activity: "mission_5/lesson_33/chant/M5_33nk_chant33", teacherNotes: "<strong>Lesson 33 Chant (25 min.)</strong><ul><li>Display the picture in the first part of the digital activity.</li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li><li>Then display the letters <em>nk</em> and elicit the sound.</li><li>Explain that they are going to hear a chant with words that have the sound /ŋk/.</li><li>Point to and say the activity instructions: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li><li>Play the chant. </li><li>Elicit any words with the /ŋk/ sound they heard. (It’s OK if they can’t identify any.)</li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /ŋk/.</li><li>Then display the second part of the digital activity. </li><li>Point to the chant below the picture. Tell students they are going to listen and read.</li><li>Play the chant again, pausing after the first line: I like to drink pink milk. </li><li>Have students point out the donkey, monkey, boy, and pink milk. </li><li>Repeat the first line of the chant. Point to each word in the line as you say it.</li><li>Encourage students to repeat the line, pointing to the words as they say them.</li><li>Then elicit the words with the sound /ŋk/. (If students don’t know a word, but they see the nk in it, have them point out the word and you can say it for them.)</li><li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /ŋk/.</li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li></ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_33/lesson_33" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_33/lesson_33a" }
                ],
            ],
            descargables: [""]

        },
        /* ------------------------------ MISSION 6 ----------------------------- */

        {

            lesson: 34,
            mission: 6,
// css:"m_mission6",
            ejemplo: "ejemplos/ejemplo34.png",
            grapheme: "grapheme/lesson_34.png",
            phoneme:"phoneme/lesson_34.png",
            audio: new Audio("assets/audios/lesson_34.mp3"),
            pathResources: "resources/mission6/",
            media: ["video/lesson_34.mp4"],
            poster: "mission_6/lesson_34/poster/lesson34_poster.jpg",
            LO_info: [
                { title:"<strong>Lesson 34 Introduction (10 min.)</strong>", thumbnail: "mission_6/lesson_34/M6_34ai_intro", activity: "mission_6/lesson_34/M6_34ai_intro", teacherNotes: "<strong>Lesson 34 Introduction (10 min.)</strong><ul><li>Display the letters <em>a</em> and <em>i,</em> and elicit the sounds /æ/ and /ɪ/. </li><li>Then tell students they are going to learn a new sound.</li><li>Display the letters ai together. </li><li>Explain that when the <em>a</em> and <em>i</em> are next to each other in a word, they form one, different sound.</li><li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em> </li><li>Play the audio for the digital activity.</li><li>Then point to the letters, say the sound, and have students repeat it. </li><li>Encourage students to continue repeating the sound: /eɪ/, /eɪ/, /eɪ/.</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 34 Activity 1 (20 min.)</strong>", thumbnail: "mission_6/lesson_34/M6_34ai_act1", activity: "mission_6/lesson_34/M6_34ai_act1", teacherNotes: "<strong>Lesson 34 Activity 1 (20 min.)</strong><ul><li>Display the letters <em>a, e, i, o, u,</em> and <em>ai.</em></li><li>Invite volunteers to point to the letters and say the sounds /æ/, /ɛ/, /ɪ/, /ɔ/, /ʌ/, and /eɪ/.</li><li>Then display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and choose.</em></li><li>Point to each letter (or letters) and elicit the sounds.</li><li>Then play the audio and elicit the letter(s) for the sound. (If necessary, play the audio again.)</li><li>Guide students to complete the digital activity as a group.</li><li>Then have students do the activity again, in pairs or individually.</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 34 Activity 2 (15 min.)</strong>", thumbnail: "mission_6/lesson_34/M6_34ai_act1", activity: "mission_6/lesson_34/M6_34ai_act1", teacherNotes: "<strong>Lesson 34 Activity 2 (15 min.)</strong><ul><li>Display the letters <em>ai</em> and elicit the sound /eɪ/. </li><li>Tell students they are going to see and hear some words with the sound /eɪ/. </li><li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li><li>Guide students to complete the digital activity as a group.</li><li>Then have students do the digital activity again, in pairs or individually. Encourage them to repeat the words. </li></ul>", answerKey: "" },
                { title:"<strong>Lesson 34 Activity 3 (15 min.)</strong>", thumbnail: "mission_6/lesson_34/M6_34ai_act1", activity: "mission_6/lesson_34/M6_34ai_act1", teacherNotes: "<strong>Lesson 34 Activity 3 (15 min.)</strong><ul><li>Display the letters ai and elicit the sound /eɪ/.</li><li>Encourage students to recall words with the letters ai together. </li><li>Then point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and choose.</em></li><li>Guide students to complete the digital activity as a group. </li><li>Then have students do a few more rounds of the activity in pairs or individually. </li></ul>", answerKey: "" }
            ],
            chant: [
                { title:"", thumbnail: "mission_6/lesson_34/chant/M6_34ai_chant34", activity: "mission_6/lesson_34/chant/M6_34ai_chant34", teacherNotes: "<strong>Lesson 34 Chant (25 min.)</strong><ul><li>Display the picture in the first section of the digital activity.</li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li><li>Then display the letters ai and elicit the sound.</li><li>Explain that they are going to hear a chant with words that have the sound /eɪ/. </li><li>Point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li><li>Play the chant. </li><li>Elicit any words with the /eɪ/ sound they heard. (It’s OK if they can’t identify any.)</li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /eɪ/.</li><li>Then display the second part of the digital activity. </li><li>Point to the chant below the picture. Tell students they are going to listen and read.</li><li>Play the chant again, pausing after the first line: I paint trains that come in the mail. </li><li>Have students point out the trains and mail(box) in the picture. </li><li>Repeat the first line of the chant. Point to each word in the line as you say it.</li><li>Encourage students to repeat the line, pointing to the words as they say them.</li><li>Then elicit the words with the sound /eɪ/. (If students don’t know a word, but they see <em>ai</em> in it, have them point out the word and you can say it for them.)</li><li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /eɪ/.</li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant. </li></ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_34/lesson_34" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_34/lesson_34a" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 35,
            mission: 6,
// css:"m_mission6",
            ejemplo: "ejemplos/ejemplo35.png",
            grapheme: "grapheme/lesson_35.png",
            phoneme:"phoneme/lesson_35.png",
            audio: new Audio("assets/audios/lesson_35.mp3"),
            pathResources: "resources/mission6/",
            media: ["video/lesson_35.mp4"],
            poster: "mission_6/lesson_35/poster/lesson35_poster.jpg",
            LO_info: [
                { title:"<strong>Lesson 35 Introduction (15 min.)</strong>", thumbnail: "mission_6/lesson_35/M6_35ee_intro", activity: "mission_6/lesson_35/M6_35ee_intro", teacherNotes: "<strong>Lesson 35 Introduction (15 min.)</strong><ul><li>Display the letters <em>a, e, i, o, u</em> and elicit the sounds /æ/, /ɛ/, /ɪ/, /ɔ/, and /ʌ/.</li><li>Then display the letters <em>ai</em> and elicit the sound /eɪ/.</li><li>Remind students that when two vowels are next to each other in a word, as in <em>ai</em>, the sound is different.</li><li>Then tell students they are going to learn a new sound.</li><li>Display the letters <em>ee.</em> </li><li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em></li><li>Play the audio for the digital activity.</li><li>Then point to the letters, say the sound, and have students repeat it. </li><li>Encourage students to continue repeating the sound: /i/, /i/, /i/.</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 35 Activity 1 (15 min.)</strong>", thumbnail: "mission_6/lesson_35/M6_35ee_act1", activity: "mission_6/lesson_35/M6_35ee_act1", teacherNotes: "<strong>Lesson 35 Activity 1 (15 min.)</strong><ul><li>Display the letters <em>a, e, i, ai,</em> and <em>ee.</em></li><li>Point to the letters and elicit the sounds. </li><li>Invite a volunteer to point out the letters for the sound /eɪ/.</li><li>Tell students to cover their eyes while you change the order of the letters displayed.</li><li>Invite another volunteer to point out the letters for the sound /i/. Continue the activity until everyone (who chooses to) has had the opportunity to find the letters.</li><li>Then display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and choose.</em></li><li>Guide students to complete the digital activity.</li><li>Then have students do the digital activity again, in pairs or individually.</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 35 Activity 2 (15 min.)</strong>", thumbnail: "mission_6/lesson_35/M6_35ee_act2", activity: "mission_6/lesson_35/M6_35ee_act2", teacherNotes: "<strong>Lesson 35 Activity 2 (15 min.)</strong><ul><li>Display the letters ee and elicit the sound /i/.</li><li>Tell students they are going to see and hear some words with the sound /i/. </li><li>Display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li><li>Guide students to complete the digital activity as a group.</li><li>Then point to the first card in the activity and say: <em style='color:#7FD5EF; font-weight:bold;'>sheep. </em></li><li>Invite a volunteer to point out the letters <em>ee</em> in the word. </li><li>Invite other volunteers to find the letters <em>ee</em> in the other words. </li><li>Then have students do the digital activity individually. Encourage them to repeat the words. </li></ul>", answerKey: "" },
                { title:"<strong>Lesson 35 Activity 3 (15 min.)</strong>", thumbnail: "mission_6/lesson_35/M6_35ee_act3", activity: "mission_6/lesson_35/M6_35ee_act3", teacherNotes: "<strong>Lesson 35 Activity 3 (15 min.)</strong><ul><li>Display the letters <em>ee</em> and elicit the sound /i/.</li><li>Encourage students to recall words with the letters <em>ee.</em> </li><li>Then point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and choose.</em></li><li>Guide students to complete the digital activity as a group. </li><li>Then have students complete a few more rounds of the activity in pairs or individually.</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 35 Activity 4 (15 min.)</strong>", thumbnail: "mission_6/lesson_35/M6_35ee_act4", activity: "mission_6/lesson_35/M6_35ee_act4", teacherNotes: "<strong>Lesson 35 Activity 4 (10 min.)</strong><ul><li>Display the digital activity.</li><li>Point to each word and invite volunteers to sound them out and then blend the sounds to say the words.</li><li>Then point to and read the instructions aloud:<em style='color:#7FD5EF; font-weight:bold;'> Read and say.</em></li><li>Demonstrate how to record and replay the recordings. </li><li>Then monitor students as they complete the activity individually.</li></ul>", answerKey: "" }
            ],
            chant: [
                { title:"<strong>Lesson 35 Chant (25 min.)</strong>", thumbnail: "mission_6/lesson_35/chant/M6_35ee_chant35", activity: "mission_6/lesson_35/chant/M6_35ee_chant35", teacherNotes: "<strong>Lesson 35 Chant (25 min.)</strong><ul><li>Display the picture in the first section of the digital activity.</li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li><li>Then display the letters <em>ee</em> and elicit the sound /i/.</li><li>Explain that they are going to hear a chant with words that have the sound /i/. </li><li>Point to and say the activity instructions: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li><li>Play the chant. </li><li>Elicit any words with the /i/ sound they heard. (It’s OK if they can’t identify any.)</li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /i/.</li><li>Then display the second part of the digital activity. </li><li>Point to the chant below the picture. Tell students they are going to listen and read.</li><li>Play the chant again, pausing after the first line: There’s a sheep under the tree. </li><li>Have students point out the sheep and tree in the picture. </li><li>Repeat the first line of the chant. Point to each word in the line as you say it.</li><li>Encourage students to repeat the line, pointing to the words as they say them.</li><li>Then elicit the words with the sound /i/. (If students don’t know a word, but they see <em>ee</em> in it, have them point out the word and you can say it for them.)</li><li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /i/.</li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li></ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_35/lesson_35" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_35/lesson_35a" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 36,
            mission: 6,
// css:"m_mission6",
            ejemplo: "ejemplos/ejemplo36.png",
            grapheme: "grapheme/lesson_36.png",
            phoneme:"phoneme/lesson_36.png",
            audio: new Audio("assets/audios/lesson_36.mp3"),
            pathResources: "resources/mission6/",
            media: ["video/lesson_36.mp4"],
            poster: "mission_6/lesson_36/poster/lesson36_poster.jpg",
            LO_info: [
                { title:"<strong>Lesson 36 Introduction (15 min.)</strong>", thumbnail: "mission_6/lesson_36/M6_36igh_intro", activity: "mission_6/lesson_36/M6_36igh_intro", teacherNotes: "<strong>Lesson 36 Introduction (15 min.)</strong><ul><li>Display the letters <em>ai</em> and <em>ee</em> and elicit the sounds /eɪ/ and /i/. </li><li>Then tell students they are going to learn a new sound.</li><li>Display the letters <em>igh.</em> Remind students that when some letters are next to each other, they create a different sound. </li><li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em></li><li>Play the audio for the digital activity.</li><li>Then point to the letters, say the sound, and have students repeat it. </li><li>Encourage students to continue repeating the sound: /aɪ/, /aɪ/, /aɪ/.</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 36 Activity 1 (15 min.)</strong>", thumbnail: "mission_6/lesson_36/M6_36igh_act1", activity: "mission_6/lesson_36/M6_36igh_act1", teacherNotes: "<strong>Lesson 36 Activity 1 (15 min.)</strong><ul><li>Display the cards with the letters <em>ai, ee,</em> and <em>igh.</em></li><li>Invite volunteers to point out the <em>ai</em> and <em>ee</em> and say the sounds.</li><li>Then have them point out the letters <em>igh</em> and say the sound.</li><li>Point to one of the three cards and elicit the sound. Continue randomly pointing to different cards and eliciting the sounds, going faster and faster until students can’t keep up.</li><li>Then display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and order.</em></li><li>Guide students to complete the digital activity as a group, or do the first together and monitor students as they complete the others in pairs or individually.</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 36 Activity 2 (15 min.)</strong>", thumbnail: "mission_6/lesson_36/M6_36igh_act2", activity: "mission_6/lesson_36/M6_36igh_act2", teacherNotes: "<strong>Lesson 36 Activity 2 (15 min.)</strong><ul><li>Display the letters <em>igh</em> and elicit the sound. </li><li>Tell students they are going to see and hear some words with the sound /aɪ/. </li><li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li><li>Guide students to complete the digital activity as a group.</li><li>Then point to the first card in the activity and say: <em style='color:#7FD5EF; font-weight:bold;'>night. </em></li><li>Invite a volunteer to point out the letters <em>igh</em> in the word. </li><li>Invite other volunteers to find the letters <em>igh</em> in the other words. </li><li>Then have students do the digital activity again. Encourage them to repeat the words. </li></ul>", answerKey: "" },
                { title:"<strong>Lesson 36 Activity 3 (15 min.)</strong>", thumbnail: "mission_6/lesson_36/M6_36igh_act3", activity: "mission_6/lesson_36/M6_36igh_act3", teacherNotes: "<strong>Lesson 36 Activity 3 (15 min.)</strong><ul><li>Display the letters <em>igh</em> and elicit the sound /aɪ/.</li><li>Encourage students to recall words with the letters <em>igh.</em> </li><li>Then point to the instructions in the digital activity and read them aloud:<em style='color:#7FD5EF; font-weight:bold;'>Listen and choose.</em></li><li>Guide students to complete the digital activity as a group. </li><li>Then have students complete a few more rounds of the activity in pairs or individually.</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 36 Activity 4 (10 min.)</strong>", thumbnail: "mission_6/lesson_36/M6_36igh_act4", activity: "mission_6/lesson_36/M6_36igh_act4", teacherNotes: "<strong>Lesson 36 Activity 4 (10 min.)</strong><ul><li>Display the digital activity.</li><li>Point to each word and invite volunteers to sound them out then blend the sounds to say the words.</li><li>Then point to and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Read and say.</em></li><li>Demonstrate how to record and replay the recordings. </li><li>Then monitor students as they complete the activity individually. </li></ul>", answerKey: "" },
               
            ],
            chant: [
                { title:"<strong>Lesson 36 Chant (25 min.) </strong>", thumbnail: "mission_6/lesson_36/chant/M6_36igh_chant36", activity: "mission_6/lesson_36/chant/M6_36igh_chant36", teacherNotes: "<strong>Lesson 36 Chant (25 min.) </strong><ul><li>Display the picture in the first section of the digital activity. </li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.)  </li><li>Then display the letters igh and elicit the sound. </li><li>Explain that they are going to hear a chant with words that have the sound /aɪ/.  </li><li>Point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em> </li><li>Play the chant.  </li><li>Elicit any words with the /aɪ/ sound they heard. (It’s OK if they can’t identify any.) </li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /aɪ/. </li><li>Then display the second part of the digital activity.  </li><li>Point to the chant below the picture. Tell students they are going to listen and read. </li><li>Play the chant again, pausing after the first line: <em>Look at me! I’m up high.</em>  </li><li>Have students point out the girl and elicit where she is in the picture (up high).  </li><li>Repeat the first line of the chant. Point to each word in the line as you say it. </li><li>Encourage students to repeat the line, pointing to the words as they say them. </li><li>Then elicit the word with the sound /aɪ/. (If students don’t know a word, but they see the igh in it, have them point out the word and you can say it for them.) </li><li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /aɪ/. </li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant. </li></ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_36/lesson_36" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_36/lesson_36a" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 37,
            mission: 6,
// css:"m_mission6",
            ejemplo: "ejemplos/ejemplo37.png",
            grapheme: "grapheme/lesson_37.png",
            phoneme:"phoneme/lesson_37.png",
            audio: new Audio("assets/audios/lesson_37.mp3"),
            pathResources: "resources/mission6/",
            media: ["video/lesson_37.mp4"],
            poster: "mission_6/lesson_37/poster/lesson37_poster.jpg",
            LO_info: [
                { title:"<strong>Lesson 37 Introduction (10 min.)</strong>", thumbnail: "mission_6/lesson_37/M6_37oa_intro", activity: "mission_6/lesson_37/M6_37oa_intro", teacherNotes: "<strong>Lesson 37 Introduction (10 min.)</strong><ul><li>Display the letters ai, ee, and igh and elicit the sounds /eɪ/, /i/ and /aɪ/.</li><li>Then tell students they are going to learn a new sound.</li><li>Display the letters oa. </li><li>Then display the instructions in the digital activity and read them aloud: Look, listen and repeat.</li><li>Play the audio for the digital activity.</li><li>Then point to the letters, say the sound, and have students repeat it. </li><li>Encourage students to continue repeating the sound: /oʊ/, /oʊ/, /oʊ/.</li>", answerKey: "" },
                { title:"<strong>Lesson 37 Activity 1 (15 min.)</strong>", thumbnail: "mission_6/lesson_37/M6_37oa_act1", activity: "mission_6/lesson_37/M6_37oa_act1", teacherNotes: "<strong>Lesson 37 Activity 1 (15 min.)</strong><ul><li>Display the letters ai, ee, igh, and oa.</li><li>Invite volunteers to point out the letters and say the sounds.</li><li>Tell students to cover their eyes while you change the order of the letters displayed.</li><li>Invite different volunteers to point out the letters oa. Continue the activity until everyone (who chooses to) has had the opportunity to find the letters.</li><li>Then display the digital activity and read the instructions aloud: Listen, look and color.</li><li>Guide students to complete the digital activity.</li><li>Invite volunteers to point out other letter combinations that make the sounds /eɪ/, /i/ and /aɪ/.</li><li>Then have students do the digital activity again. Encourage them to repeat the /oʊ/ sound when they find and color the letters.</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 37 Activity 2 (15 min.) </strong>", thumbnail: "mission_6/lesson_37/M6_37oa_act2", activity: "mission_6/lesson_37/M6_37oa_act2", teacherNotes: "<strong>Lesson 37 Activity 2 (15 min.) </strong><ul><li>Display the letters <em>oa</em> and elicit the sound.  </li><li>Tell students they are going to see and hear some words with the sound /oʊ/.  </li><li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say.</em></li><li>Then listen and check. </li><li>Guide students to complete the digital activity as a group. </li><li>Then point to the first card in the activity and invite volunteers to sound out the word and say boat.</li><li>Invite a volunteer to point out the letters <em>oa</em> in the word.  </li><li>Invite other volunteers to find the letters <em>oa</em> in the other words.  </li><li>Then have students do the digital activity again. Encourage them to repeat the words.</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 37 Activity 3 (20 min.) </strong>", thumbnail: "mission_6/lesson_37/M6_37oa_act3", activity: "mission_6/lesson_37/M6_37oa_act3", teacherNotes: "<strong>Lesson 37 Activity 3 (20 min.) </strong><ul><li>Display the letters <em>oa</em> and elicit the sound. </li><li>Encourage students to recall words with the letters <em>oa.</em>  </li><li>Then point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and order.</em> </li><li>Point to the picture in the first section and then the three tiles that contain a letter or set of letters.  </li><li>Elicit the sounds for each tile. </li><li>Then play the audio. </li><li>Guide students to put the tiles in the correct order to form the word they hear.  </li><li>Repeat the steps for the other parts of the digital activity. </li><li>Then have students complete the activity again in pairs or individually. Encourage students to repeat the words when they form them.</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 37 Activity 4 (10 min.) </strong>", thumbnail: "mission_6/lesson_37/M6_37oa_act4", activity: "mission_6/lesson_37/M6_37oa_act4", teacherNotes: "<strong>Lesson 37 Activity 4 (10 min.) </strong><ul><li>Display the digital activity. </li><li>Point to each word and invite volunteers to sound them out then blend the sounds to say the words. </li><li>Then point to and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Read and say.</em> </li><li>Demonstrate how to record and replay the recordings.  </li><li>Then monitor students as they complete the activity individually. </li></ul>", answerKey: "" }
            ],
            chant: [
                {  title:"<strong>Lesson 37 Chant (25 min.) </strong>", thumbnail: "mission_6/lesson_37/chant/M6_37oa_chant37", activity: "mission_6/lesson_37/chant/M6_37oa_chant37", teacherNotes: "<strong>Lesson 37 Chant (25 min.) </strong><ul><li>Display the picture in the first section of the digital activity. </li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li> <li>Then display the letters oa and elicit the sound. </li><li>Explain that they are going to hear a chant with words that have the sound /oʊ/.  </li><li>Point to and say the activity instructions: Look and listen. </li><li>Play the chant.</li><li>Elicit any words with the /oʊ/ sound they heard. (It’s OK if they can’t identify any.) </li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /oʊ/.</li> <li>Then display the second part of the digital activity.  </li><li>Point to the chant below the picture. Tell students they are going to listen and read. </li><li>Play the chant again, pausing after the first line: There’s an oak in the road.  </li><li>Encourage students to repeat the line, pointing to the words as they say them. </li><li>Then elicit the words with the sound /oʊ/. (If students don’t know a word, but they see oa in it, have them point out the word and you can say it for them.) </li><li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /oʊ/. </li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li></ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_37/lesson_37" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_37/lesson_37a" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 38,
            mission: 6,
// css:"m_mission6",
            ejemplo: "ejemplos/ejemplo38.png",
            grapheme: "grapheme/lesson_38.png",
            phoneme:"phoneme/lesson_38.png",
            audio: new Audio("assets/audios/lesson_38.mp3"),
            pathResources: "resources/mission6/",
            media: ["video/lesson_38.mp4"],
            poster: "mission_6/lesson_38/poster/lesson38_poster.jpg",
            LO_info: [
                { title:"<strong>Lesson 38 Introduction (15 min.) </strong>", thumbnail: "mission_6/lesson_38/M6_38oo_intro", activity: "mission_6/lesson_38/M6_38oo_intro", teacherNotes: "<strong>Lesson 38 Introduction (15 min.) </strong><ul><li>Display the letters <em>ai, ee, igh, oa</em> and elicit the sounds /eɪ/, /i/, /aɪ/ and /oʊ/. </li><li>Encourage students to recall any words with these sounds. </li><li>Then tell students they are going to learn a new sound. </li><li>Display the letters <em>oo.</em>  </li><li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em> </li><li>Play the audio for the digital activity. </li><li>Then point to the letters, say the sound, and have students repeat it.  </li><li>Encourage students to continue repeating the sound: /u/, /u/, /u/.</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 38 Activity 1 (15 min.) </strong>", thumbnail: "mission_6/lesson_38/M6_38oo_act1", activity: "mission_6/lesson_38/M6_38oo_act1", teacherNotes: "<strong>Lesson 38 Activity 1 (15 min.) </strong><ul><li>Display the cards with the letters ai, ee, igh, oa and oo. </li><li>Invite volunteers to point to the letters and say the sounds.  </li><li>Point to one of the four cards and elicit the sound. Continue randomly pointing to different cards and eliciting the sounds, going faster and faster until students can’t keep up. </li><li>Then display the digital activity and read the instructions aloud: Listen and order. </li><li>Guide students to complete the digital activity as a group.  </li><li>Then have students do it again, in pairs or individually. </li></ul>", answerKey: "" },
                { title:"<strong>Lesson 38 Activity 2 (15 min.) </strong>", thumbnail: "mission_6/lesson_38/M6_38oo_act2", activity: "mission_6/lesson_38/M6_38oo_act2", teacherNotes: "<strong>Lesson 38 Activity 2 (15 min.) </strong><ul><li>Display the letters oo and elicit the sound /u/.  </li><li>Tell students they are going to see and hear some words with the sound /u/.  </li><li>Point to the instructions in the digital activity and read them aloud: Look and say. Then listen and check. </li><li>Guide students to complete the digital activity as a group. </li><li>Then point to the first card in the activity and say: food.  </li><li>Invite a volunteer to point out the letters oo in the word.  </li><li>Invite other volunteers to find the letters oo in the other words.  </li><li>Then have students do the digital activity again. Encourage them to repeat the words.</li></ul>", answerKey: "" },
                { title:"<strong>Lesson 38 Activity 3 (15 min.) </strong>", thumbnail: "mission_6/lesson_38/M6_38oo_act3", activity: "mission_6/lesson_38/M6_38oo_act3", teacherNotes: "<strong>Lesson 38 Activity 3 (15 min.) </strong><ul><li>Display the letters <em>ai, ee, igh</em> and <em>oo</em> and elicit the sounds /eɪ/, /i/, /aɪ/ and /u/. </li><li>Encourage students to recall words with the different sounds.  </li><li>Then point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and choose.</em> </li><li>Guide students to complete the digital activity as a group.  </li><li>Then have students play a few more rounds of the activity in pairs or individually. </li></ul>", answerKey: "" },
                { title:"<strong>Lesson 38 Activity 4 (10 min.) </strong>", thumbnail: "mission_6/lesson_38/M6_38oo_act4", activity: "mission_6/lesson_38/M6_38oo_act4", teacherNotes: "<strong>Lesson 38 Activity 4 (10 min.) </strong><ul><li>Display the digital activity. </li><li>Point to each word and invite volunteers to sound them out then blend the sounds to say the words. </li><li>Then point to and read the instructions aloud: Read and say. </li><li>Demonstrate how to record and replay the recordings.  </li><li>Then monitor students as they complete the activity individually. </li></ul>", answerKey: "" }
            ],
            chant: [
                { title:"<strong>Lesson 38 Chant (25 min.) </strong>", thumbnail: "mission_6/lesson_38/chant/M6_38oo_chant38", activity: "mission_6/lesson_38/chant/M6_38oo_chant38", teacherNotes: "<strong>Lesson 38 Chant (25 min.) </strong><ul><li>Display the picture in the first section of the digital activity. </li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.)  </li><li>Then display the letters oo and elicit the sound /u/. </li><li>Explain that they are going to hear a chant with words that have the sound /u/.  </li><li>Point to and read the activity instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em> </li><li>Play the chant.  </li><li>Elicit any words with the /u/ sound they heard. (It’s OK if they can’t identify any.) </li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /u/. </li><li>Then display the second part of the digital activity.  </li><li>Point to the chant below the picture. Tell students they are going to listen and read. </li><li>Play the chant again, pausing after the first line: <em>We’re going to the zoo.</em>  </li><li>Have students point out the zoo in the picture.  </li><li>Repeat the first line of the chant. Point to each word in the line as you say it. </li><li>Encourage students to repeat the line, pointing to the words as they say them. </li><li>Then elicit the words with the sound /u/. (If students don’t know a word, but they see <em>oo</em> in it, have them point out the word and you can say it for them.) </li><li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /u/. </li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant. </li></ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_38/lesson_38" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_38/lesson_38a" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 39,
            mission: 6,
// css:"m_mission6",
            ejemplo: "ejemplos/ejemplo39.png",
            grapheme: "grapheme/lesson_39.png",
            phoneme:"phoneme/lesson_39.png",
            audio: new Audio("assets/audios/lesson_39.mp3"),
            pathResources: "resources/mission6/",
            media: ["video/lesson_39.mp4"],
            poster: "mission_6/lesson_39/poster/lesson39_poster.jpg",
            LO_info: [
                { title:"", thumbnail: "mission_6/lesson_39/M6_39oo_intro", activity: "mission_6/lesson_39/M6_39oo_intro", teacherNotes: "<strong>Lesson 39 Introduction (10 min.) </strong><ul><li>Display the letters oo and elicit the sound /u/. </li><li>Then tell students they are going to learn a new sound.  </li><li>Explain that the letters oo have two sounds.  </li><li>Point to the instructions in the digital activity and read them aloud: Look, listen and repeat. </li><li>Play the audio for the digital activity. </li><li>Then point to the letters, say the sound, and have students repeat it.  </li><li>Encourage students to continue repeating the sound: /ʊ/, /ʊ/, /ʊ/.</li></ul> ", answerKey: "" },
                { title:"", thumbnail: "mission_6/lesson_39/M6_39oo_act1", activity: "mission_6/lesson_39/M6_39oo_act1", teacherNotes: "<strong>Lesson 39 Activity 1 (15 min.) </strong><ul><li>Display the cards with the letters ai, ee, igh, <em>oa</em> and <em>oo.</em> </li<li>Invite volunteers to point to the letters and say the sounds /eɪ/, /aɪ/, /oʊ/ and /ʊ/.   </li<li>Point to one of the four cards and elicit the sound. Continue randomly pointing to different cards and eliciting the sounds, going faster and faster until students can’t keep up. </li<li>Then display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and order.</em> </li<li>Guide students to complete the digital activity as a group.  </li<li>Then have students do it again, in pairs or individually.   </li</ul>", answerKey: "" },
                { title:"", thumbnail: "mission_6/lesson_39/M6_39oo_act2", activity: "mission_6/lesson_39/M6_39oo_act2", teacherNotes: "<strong>Lesson 39 Activity 2 (15 min.) </strong><ul><li>Display the letters <em>oo</em> and elicit the sound /ʊ/.  </li><li>Tell students they are going to see and hear some words with the sound /ʊ/. </li><li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check. </em></li><li>Guide students to complete the digital activity as a group. </li><li>Then point to the first card in the activity and say: <em style='color:#7FD5EF; font-weight:bold;'>book.</em></li><li>Invite a volunteer to point out the letters <em>oo</em> in the word.  </li><li>Invite other volunteers to find the letters <em>oo</em> in the other words. </li><li>Then have students do the digital activity again. Encourage them to repeat the words.</li></ul>", answerKey: "" },
                { title:"", thumbnail: "mission_6/lesson_39/M6_39oo_act3", activity: "mission_6/lesson_39/M6_39oo_act3", teacherNotes: "<strong>Lesson 39 Activity 3 (15 min.)</strong><ul><li>Display the letters <em>oo.</em> Elicit the two possible sounds /u/ and /ʊ/. </li><li>Encourage students to recall words with the two sounds.  </li><li>Then point to the instructions in the digital activity and read them aloud: Look and listen. Tap and drop. </li><li>Point to the two sound categories. Explain that “short oo” refers to the /ʊ/ sound and that “long oo” refers to words with the /u/ sound. (If it helps with the explanation, say “book” quickly and lengthen the “oo” sound in zoo.) </li><li>Play the audio for the first card in the digital activity. Ask: Does (the word for the picture) have an /u/ or an /ʊ/ sound? (Answer will depend on the first card displayed in the activity.) </li><li>Demonstrate how to tap on a card and place it in the correct category. </li><li>Guide students to complete the digital activity as a group. </li></ul>", answerKey: "" },
                { title:"", thumbnail: "mission_6/lesson_39/M6_39oo_act4", activity: "mission_6/lesson_39/M6_39oo_act4", teacherNotes: "<strong>Lesson 39 Activity 4 (10 min.) </strong><ul><li>Display the digital activity. </li><li>Point to each word and invite volunteers to sound them out then blend the sounds to say the words. </li><li>Then point to and read the instructions aloud: Read and say. </li><li>Demonstrate how to record and replay the recordings.  </li><li>Then monitor students as they complete the activity individually. </li></ul>", answerKey: "" }
            ],
            chant: [
                { title:"", thumbnail: "mission_6/lesson_39/chant/M6_39oo_chant39", activity: "mission_6/lesson_39/chant/M6_39oo_chant39", teacherNotes: "<strong>Lesson 39 Chant (25 min.) </strong><ul><li>Display the picture in the first section of the digital activity. </li><li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.)  </li><li>Then display the letters oo and elicit the sound /ʊ/. </li><li>Explain that they are going to hear a chant with words that have the sound /ʊ/.  </li><li>Point to and say the activity instructions: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em> </li><li>Play the chant.  </li><li>Elicit any words with the /ʊ/ sound they heard. (It’s OK if they can’t identify any.) </li><li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /ʊ/. </li><li>Then display the second part of the digital activity.  </li><li>Point to the chant below the picture. Tell students they are going to listen and read. </li><li>Play the chant again, pausing after the first line: <em>Look at the cook.</em>  </li><li>Have students point out the book and the cook in the picture.  </li><li>Repeat the first line of the chant. Point to each word in the line as you say it. </li><li>Encourage students to repeat the line, pointing to the words as they say them. </li><li>Then elicit the words with the sound /ʊ/. (If students don’t know a word, but they see oo in it, have them point out the word and you can say it for them.) </li><li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /ʊ/. </li><li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.  </li></ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_39/lesson_39" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_39/lesson_39a" }
                ],
            ],
            descargables: [""]

        },
        /* ------------------------------ MISSION 7 ----------------------------- */

        {

            lesson: 40,
            mission: 7,
// css:"m_mission7",
            ejemplo: "ejemplos/ejemplo40.png",
            grapheme: "grapheme/lesson_40.png",
            phoneme:"phoneme/lesson_40.png",
            audio: new Audio("assets/audios/lesson_40.mp3"),
            pathResources: "resources/mission7/",
            media: ["video/lesson_40.mp4"],
            poster: "mission_7/lesson_40/poster/lesson40_poster.jpg",
            LO_info: [
                { title:"Lesson 40 Introduction (10 min.)", thumbnail: "mission_7/lesson_40/M7_40ar_intro", activity: "mission_7/lesson_40/M7_40ar_intro", teacherNotes: "<strong>Lesson 40 Introduction (10 min.)</strong> <ul> <li>Display the letters <em>a</em> and <em>r</em>, and elicit the sounds /æ/ and /r/. </li> <li>Then tell students they are going to learn a new sound.</li> <li>Display the letters <em>ar</em> together.</li> <li>Explain that when the <em>a</em> and <em>r</em> are next to each other in a word, they form one, different sound.</li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em> </li> <li>Play the audio for the digital activity.</li> <li>Then point to the letters, say the sound, and have students repeat it. </li> <li>Encourage students to continue repeating the sound: /ar/, /ar/, /ar/.</li> </ul>", answerKey: "" },
                { title:"Lesson 40 Activity 1 (20 min.)", thumbnail: "mission_7/lesson_40/M7_40ar_act1", activity: "mission_7/lesson_40/M7_40ar_act1", teacherNotes: "<strong>Lesson 40 Activity 1 (20 min.)</strong> <ul> <li>Display the letters <em>ar</em> and elicit the sound.</li> <li>Display the digital activity.</li> <li>Then point to and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and match.</em></li> <li>Have students complete the digital activity individually.</li> <li>Display the letters <em>ar, c, d, k, p, g, e, n,</em> and elicit the sounds. </li> <li>Then restart the digital activity, turn over a card and play the audio. </li> <li>Invite volunteers to sound out the word and then use the letters to form the word.</li> <li>Repeat the steps for all the words.</li> <li>Tell students they will confirm the words in Activity 2.</li> </ul>", answerKey: "" },
                { title:"Lesson 40 Activity 2 (15 min.)", thumbnail: "mission_7/lesson_40/M7_40ar_act2", activity: "mission_7/lesson_40/M7_40ar_act2", teacherNotes: "<strong>Lesson 40 Activity 2 (15 min.)</strong> <ul> <li>Display the letters <em>ar</em> and elicit the sound /ar/.</li> <li>Tell students they are going to see and hear some words with the sound /ar/.</li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then have students do the digital activity again, in pairs or individually. Encourage them to repeat the words.</li> </ul>", answerKey: "" },
                { title:"Lesson 40 Activity 3 (15 min.)", thumbnail: "mission_7/lesson_40/M7_40ar_act3", activity: "mission_7/lesson_40/M7_40ar_act3", teacherNotes: "<strong>Lesson 40 Activity 3 (15 min.)</strong> <ul> <li>Display the letters <em>ar</em> and <em>r</em>. Elicit the sounds /ar/ and /r/.</li> <li>Encourage students to recall words with the sounds. </li> <li>Then point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen. Tap and drop.</em></li> <li>Play the audio for the first card in the digital activity. Ask: <em style='color:#7FD5EF; font-weight:bold;'>Does (the word for the picture) have an /r/ or an /ar/ sound?</em> (Answer will depend on the first card displayed in the activity.)</li> <li>Point to the two sound categories and demonstrate how to tap on the card and place it in the correct category.</li> <li>Guide students to complete the digital activity as a group, or monitor them as they complete it in pairs or individually. </li> </ul>", answerKey: "" },
            ],
            chant: [
                { title:"Lesson 40 Chant (25 min.)", thumbnail: "mission_7/lesson_40/chant/M7_40ar_chant40", activity: "mission_7/lesson_40/chant/M7_40ar_chant40", teacherNotes: "<strong>Lesson 40 Chant (25 min.)</strong> <ul> <li>Display the picture in the first section of the digital activity.</li> <li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li> <li>Then display the letters <em>ar</em> and elicit the sound.</li> <li>Explain that they are going to hear a chant with words that have the sound /ar/. </li> <li>Point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li> <li>Play the chant. </li> <li>Elicit any words with the /ar/ sound they heard. (It’s OK if they can’t identify any.)</li> <li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /ar/.</li> <li>Then display the second part of the digital activity. </li> <li>Point to the chant below the picture. Tell students they are going to listen and read.</li> <li>Play the chant again, pausing after the first line: <em>Start the car</em>. </li> <li>Have students point out the car in the picture. </li> <li>Repeat the first line of the chant. Point to each word in the line as you say it.</li> <li>Encourage students to repeat the line, pointing to the words as they say them.</li> <li>Then elicit the words with the sound /ar/. (If students don’t know a word, but they see <em>ar</em> in it, have them point out the word and you can say it for them.)</li> <li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /ar/.</li> <li>Play the chant completely a few more times. Encourage students to say and point to words in the chant. </li> </ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_40/lesson_40" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_40/lesson_40a" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 41,
            mission: 7,
// css:"m_mission7",
            ejemplo: "ejemplos/ejemplo41.png",
            grapheme: "grapheme/lesson_41.png",
            phoneme:"phoneme/lesson_41.png",
            audio: new Audio("assets/audios/lesson_41.mp3"),
            pathResources: "resources/mission7/",
            media: ["video/lesson_41.mp4"],
            poster: "mission_7/lesson_41/poster/lesson41_poster.jpg",
            LO_info: [
                { title:"Lesson 41 Introduction (15 min.)", thumbnail: "mission_7/lesson_41/M7_41or_intro", activity: "mission_7/lesson_41/M7_41or_intro", teacherNotes: "<strong>Lesson 41 Introduction (15 min.)</strong> <ul> <li>Display the letters <em>ar</em> and elicit the sound /ar/.</li> <li>Then tell students they are going to learn a new sound.</li> <li>Display the letters <em>or</em>. </li> <li>Invite volunteers to guess how the letters sound together. (Accept all answers. Students will confirm their guesses in a moment.)</li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em></li> <li>Play the audio for the digital activity.</li> <li>Then point to the letters, say the sound, and have students repeat it. </li> <li>Encourage students to continue repeating the sound: /ɔr/, /ɔr/, /ɔr/.</li> </ul>", answerKey: "" },
                { title:"Lesson 41 Activity 1 (15 min.)", thumbnail: "mission_7/lesson_41/M7_41or_act1", activity: "mission_7/lesson_41/M7_41or_act1", teacherNotes: "<strong>Lesson 41 Activity 1 (15 min.)</strong> <ul> <li>Display the letters <em>ar, or, r,</em> and <em>l</em>.</li> <li>Point to the letters and elicit the sounds. </li> <li>Invite a volunteer to point out the letters for the sound /ɔr/.</li> <li>Tell students to cover their eyes while you change the order of the letters displayed.</li> <li>Invite another volunteer to point out the letters for the sound /ɔr/. Continue the activity until everyone (who chooses to) has had the opportunity to find the letters.</li> <li>Then display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and choose.</em></li> <li>Guide students to complete the digital activity.</li> <li>Then have students do the digital activity again, in pairs or individually.</li> </ul>", answerKey: "" },
                { title:"Lesson 41 Activity 2 (15 min.)", thumbnail: "mission_7/lesson_41/M7_41or_act2", activity: "mission_7/lesson_41/M7_41or_act2", teacherNotes: "<strong>Lesson 41 Activity 2 (15 min.)</strong> <ul> <li>Display the letters <em>or</em> and elicit the sound /ɔr/.</li> <li>Then tell students they are going to see and hear some words with the sound /ɔr/. </li> <li>Display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then point to the first card in the activity and say: <em style='color:#7FD5EF; font-weight:bold;'>story</em>. </li> <li>Invite a volunteer to point out the letters <em>or</em> in the word. </li> <li>Invite other volunteers to find the letters <em>or</em> in the other words. </li> <li>Then have students do the digital activity individually. Encourage them to repeat the words. </li> </ul>", answerKey: "" },
                { title:"Lesson 41 Activity 3 ", thumbnail: "mission_7/lesson_41/M7_41or_act3", activity: "mission_7/lesson_41/M7_41or_act3", teacherNotes: "<strong>Lesson 41 Activity 3 (15 min.)</strong> <ul> <li>Display the letters <em>or</em> and elicit the sound /ɔr/.</li> <li>Encourage students to recall words with the sound /ɔr/. </li> <li>Then point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen, look and choose the words with or.</em></li> <li>Play the audio for the first picture and have students repeat the word. </li> <li>Ask: <em style='color:#7FD5EF; font-weight:bold;'>Is there an /ɔr/ in (the word for the picture)?</em></li> <li>Play the audio for the other pictures, asking if there is an /ɔr/sound in any of them. Select those that do.</li> <li>Then have students complete the activity again in pairs or individually. Encourage students to repeat the words.</li> </ul>", answerKey: "" },
            ],
            chant: [
                { title:"Lesson 41 Chant (25 min.)", thumbnail: "mission_7/lesson_41/chant/M7_41or_chant41", activity: "mission_7/lesson_41/chant/M7_41or_chant41", teacherNotes: "<strong>Lesson 41 Chant (25 min.)</strong> <ul> <li>Display the picture in the first section of the digital activity.</li> <li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li> <li>Then display the letters <em>or</em> and elicit the sound /ɔr/.</li> <li>Explain that they are going to hear a chant with words that have the sound /ɔr/. </li> <li>Point to and say the activity instructions: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li> <li>Play the chant. </li> <li>Elicit any words with the /ɔr/ sound they heard. (It’s OK if they can’t identify any.)</li> <li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /ɔr/.</li> <li>Then display the second part of the digital activity. </li> <li>Point to the chant below the picture. Tell students they are going to listen and read.</li> <li>Play the chant again, pausing after the first line: <em>I wrote a story this morning</em>. </li> <li>Have students point out the boy in the picture. Ask: <em style='color:#7FD5EF; font-weight:bold;'>What time of day is it—morning, afternoon or evening?</em> <em>(Morning.)</em></li> <li>Repeat the first line of the chant. Point to each word in the line as you say it.</li> <li>Encourage students to repeat the line, pointing to the words as they say them.</li> <li>Then elicit the words with the sound /ɔr/. (If students don’t know a word, but they see <em>or</em> in it, have them point out the word and you can say it for them.)</li> <li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /ɔr/.</li> <li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li> </ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_41/lesson_41" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_41/lesson_41a" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 42,
            mission: 7,
// css:"m_mission7",
            ejemplo: "ejemplos/ejemplo42.png",
            grapheme: "grapheme/lesson_42.png",
            phoneme:"phoneme/lesson_42.png",
            audio: new Audio("assets/audios/lesson_42.mp3"),
            pathResources: "resources/mission7/",
            media: ["video/lesson_42.mp4"],
            poster: "mission_7/lesson_42/poster/lesson42_poster.jpg",
            LO_info: [
                { title:"Lesson 42 Introduction (15 min.)", thumbnail: "mission_7/lesson_42/M7_42ur_intro", activity: "mission_7/lesson_42/M7_42ur_intro", teacherNotes: "<strong>Lesson 42 Introduction (15 min.)</strong> <ul> <li>Display the letters <em>ar</em> and <em>or</em> and elicit the sounds /ar/ and /ɔr/. </li> <li>Then tell students they are going to learn a new sound.</li> <li>Display the letters <em>ur</em>. Remind students that when some letters are next to each other, they create a different sound. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em></li> <li>Play the audio for the digital activity.</li> <li>Then point to the letters, say the sound, and have students repeat it. </li> <li>Encourage students to continue repeating the sound: /ɜr/, /ɜr/, /ɜr/.</li> </ul>", answerKey: "" },
                { title:"Lesson 42 Activity 1 (15 min.)", thumbnail: "mission_7/lesson_42/M7_42ur_act1", activity: "mission_7/lesson_42/M7_42ur_act1", teacherNotes: "<strong>Lesson 42 Activity 1 (15 min.)</strong> <ul> <li>Display the cards with the letters <em>ar, or,</em> and <em>ur</em>.</li> <li>Invite volunteers to point to the letters and say the sounds /ar/, /ɔr/ and /ɜr/.</li> <li>Then have them point out the letters <em>ur</em> and say the sound.</li> <li>Point to one of the three cards and elicit the sound. Continue randomly pointing to different cards and eliciting the sounds, going faster and faster until students can’t keep up.</li> <li>Then display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and order.</em></li> <li>Guide students to complete the digital activity as a group, or do the first together and monitor students as they complete the others in pairs or individually.</li> </ul>", answerKey: "" },
                { title:"Lesson 42 Activity 2 (15 min.)", thumbnail: "mission_7/lesson_42/M7_42ur_act2", activity: "mission_7/lesson_42/M7_42ur_act2", teacherNotes: "<strong>Lesson 42 Activity 2 (15 min.)</strong> <ul> <li>Display the letters <em>ur</em> and elicit the sound /ɜr/. </li> <li>Tell students they are going to see and hear some words with the sound /ɜr/. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then point to the first card in the activity and say: <em style='color:#7FD5EF; font-weight:bold;'>purple.</em> </li> <li>Invite a volunteer to point out the letters <em>ur</em> in the word. </li> <li>Invite other volunteers to find the letters <em>ur</em> in the other words. </li> <li>Then have students do the digital activity again. Encourage them to repeat the words. </li> </ul>", answerKey: "" },
                { title:"Lesson 42 Activity 3 (15 min.)", thumbnail: "mission_7/lesson_42/M7_42ur_act3", activity: "mission_7/lesson_42/M7_42ur_act3", teacherNotes: "<strong>Lesson 42 Activity 3 (15 min.)</strong> <ul> <li>Display the letters <em>ar, or</em> and <em>ur</em>, and elicit the sounds /ar/, /ɔr/, and /ɜr/.</li> <li>Encourage students to recall words with the different letters. </li> <li>Then point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and choose the odd one out.</em></li> <li>Guide students to complete the digital activity as a group. </li> <li>Then have students play a few more rounds of the activity in pairs or individually.</li> </ul>", answerKey: "" },
            ],
            chant: [
                { title:"Lesson 42 Chant (25 min.)", thumbnail: "mission_7/lesson_42/chant/M7_42ur_chant42", activity: "mission_7/lesson_42/chant/M7_42ur_chant42", teacherNotes: "<strong>Lesson 42 Chant (25 min.)</strong> <ul> <li>Display the picture in the first section of the digital activity.</li> <li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li> <li>Then display the letters <em>ur</em> and elicit the sound.</li> <li>Explain that they are going to hear a chant with words that have the sound /ɜr/. </li> <li>Point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li> <li>Play the chant. </li> <li>Elicit any words with the /ɜr/ sound they heard. (It’s OK if they can’t identify any.)</li> <li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /ɜr/.</li> <li>Then display the second part of the digital activity. </li> <li>Point to the chant below the picture. Tell students they are going to listen and read.</li> <li>Play the chant again, pausing after the first line: <em>I lost my purple purse</em>. </li> <li>Have students point out the girl and elicit what she’s thinking about (<em>a purple purse</em>). </li> <li>Repeat the first line of the chant. Point to each word in the line as you say it.</li> <li>Encourage students to repeat the line, pointing to the words as they say them.</li> <li>Then elicit the words with the sound /ɜr/. (If students don’t know a word, but they see the <em>ur</em> in it, have them point out the word and you can say it for them.)</li> <li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /ɜr/.</li> <li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li> </ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_42/lesson_42" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_42/lesson_42a" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 43,
            mission: 7,
// css:"m_mission7",
            ejemplo: "ejemplos/ejemplo43.png",
            grapheme: "grapheme/lesson_43.png",
            phoneme:"phoneme/lesson_43.png",
            audio: new Audio("assets/audios/lesson_43.mp3"),
            pathResources: "resources/mission7/",
            media: ["video/lesson_43.mp4"],
            poster: "mission_7/lesson_43/poster/lesson43_poster.jpg",
            LO_info: [
                { title:"Lesson 43 Introduction (10 min.)", thumbnail: "mission_7/lesson_43/M7_43ow_intro", activity: "mission_7/lesson_43/M7_43ow_intro", teacherNotes: "<strong>Lesson 43 Introduction (10 min.)</strong> <ul> <li>Display the letters <em>o</em> and <em>w</em>, and elicit the sounds /ɔ/ and /w/.</li> <li>Then tell students they are going to learn a new sound.</li> <li>Display the letters <em>ow</em> together. Remind students that two letters together often make a different sound.</li> <li>Then display the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em></li> <li>Play the audio for the digital activity.</li> <li>Then point to the letters, say the sound, and have students repeat it. </li> <li>Encourage students to continue repeating the sound: /aʊ/, /aʊ/, /aʊ/.</li> </ul>", answerKey: "" },
                { title:"Lesson 43 Activity 1 (15 min.)", thumbnail: "mission_7/lesson_43/M7_43ow_act1", activity: "mission_7/lesson_43/M7_43ow_act1", teacherNotes: "<strong>Lesson 43 Activity 1 (15 min.)</strong> <ul> <li>Display the letters <em>ow, or, oo</em> and <em>oa</em>.</li> <li>Invite volunteers to point out the letters and say the sounds /aʊ/, /ɔr/, /ʊ/ and /oʊ/.</li> <li>Tell students to cover their eyes while you change the order of the letters displayed.</li> <li>Invite different volunteers to point out the letters <em>ow</em>. Continue the activity until everyone (who chooses to) has had the opportunity to find the letters.</li> <li>Then display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and choose.</em></li> <li>Guide students to complete the digital activity.</li> <li>Then have students do the digital activity again, in pairs or individually.</li> </ul>", answerKey: "" },
                { title:"Lesson 43 Activity 2 (15 min.)", thumbnail: "mission_7/lesson_43/M7_43ow_act2", activity: "mission_7/lesson_43/M7_43ow_act2", teacherNotes: "<strong>Lesson 43 Activity 2 (15 min.)</strong> <ul> <li>Display the letters <em>ow</em> and elicit the sound. </li> <li>Tell students they are going to see and hear some words with the sound /aʊ/. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then point to the first card in the activity and invite volunteers to sound out the word and say <em>cow</em>. </li> <li>Invite a volunteer to point out the letters <em>ow</em> in the word. </li> <li>Invite other volunteers to find the letters <em>ow</em> in the other words. </li> <li>Then have students do the digital activity again. Encourage them to repeat the words. </li> </ul>s", answerKey: "" },
                { title:"Lesson 43 Activity 3 (20 min.)", thumbnail: "mission_7/lesson_43/M7_43ow_act3", activity: "mission_7/lesson_43/M7_43ow_act3", teacherNotes: "<strong>Lesson 43 Activity 3 (20 min.)</strong> <ul> <li>Display the letters <em>ow, or, ar,</em> and <em>ur,</em> and elicit the sounds.</li> <li>Encourage students to recall words with the different letter combinations. </li> <li>Then point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and draw lines.</em></li> <li>Point to the audio icons on the top row and elicit the sounds /k/, /n/, /d/, and /p/.</li> <li>Then direct students’ attention to the second row with the other parts of the words and the pictures. </li> <li>Invite volunteers to sound out the letters. </li> <li>Play the audio for the first item in the top row. Point to the letter and elicit the sound and then the missing sounds (letters) of the word.</li> <li>Demonstrate how to draw a line connecting the letter in the top row to the rest of the word.  </li> <li>Repeat the steps for the rest of the digital activity.</li> <li>Then have students play a few more rounds of the activity in pairs or individually. Encourage students to repeat the words when they connect the parts of the words.</li> </ul>", answerKey: "" },
            ],
            chant: [
                { title:"Lesson 43 Chant (25 min.)", thumbnail: "mission_7/lesson_43/chant/M7_43ow_chant43", activity: "mission_7/lesson_43/chant/M7_43ow_chant43", teacherNotes: "<strong>Lesson 43 Chant (25 min.)</strong> <ul> <li>Display the picture in the first section of the digital activity.</li> <li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li> <li>Then display the letters <em>ow</em> and elicit the sound.</li> <li>Explain that they are going to hear a chant with words that have the sound /aʊ/. </li> <li>Point to and say the activity instructions: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li> <li>Play the chant. </li> <li>Elicit any words with the /aʊ/ sound they heard. (It’s OK if they can’t identify any.)</li> <li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /aʊ/.</li> <li>Then display the second part of the digital activity. </li> <li>Point to the chant below the picture. Tell students they are going to listen and read.</li> <li>Play the chant again, pausing after the first line: <em>Wow, it’s a brown cow</em>. </li> <li>Have students point out the cow in the picture.</li> <li>Repeat the first line of the chant. Point to each word in the line as you say it.</li> <li>Encourage students to repeat the line, pointing to the words as they say them.</li> <li>Then elicit the words with the sound /aʊ/. (If students don’t know a word, but they see <em>ow</em> in it, have them point out the word and you can say it for them.)</li> <li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /aʊ/.</li> <li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li> </ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_43/lesson_43" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_43/lesson_43a" }
                ],
            ],
            descargables: [""]

        },
        /* ------------------------------ MISSION 8 ----------------------------- */

        {

            lesson: 44,
            mission: 8,
// css:"m_mission8",
            ejemplo: "ejemplos/ejemplo44.png",
            grapheme: "grapheme/lesson_44.png",
            phoneme:"phoneme/lesson_44.png",
            audio: new Audio("assets/audios/lesson_44.mp3"),
            pathResources: "resources/mission8/",
            media: ["video/lesson_44.mp4"],
            poster: "mission_8/lesson_44/poster/lesson44_poster.jpg",
            LO_info: [
                { title:"Lesson 44 Introduction (10 min.)", thumbnail: "mission_8/lesson_44/M8_44oi_intro", activity: "mission_8/lesson_44/M8_44oi_intro", teacherNotes: "<strong>Lesson 44 Introduction (10 min.)</strong> <ul> <li>Display the letters <em>o</em> and <em>i</em>.</li> <li>Elicit the sounds /ɔ/ and /ɪ/.</li> <li>Explain that some letters, when put together, have a different sound.</li> <li>Display the letters <em>o</em> and <em>i</em> together. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em> </li> <li>Play the audio for the digital activity.</li> <li>Then point to the letters, say the sound, and have students repeat it. </li> <li>Encourage students to continue repeating the sound: /ɔɪ/, /ɔɪ/, /ɔɪ/.</li> </ul>", answerKey: "" },
                { title:"Lesson 44 Activity 1 (15 min.)", thumbnail: "mission_8/lesson_44/M8_44oi_act1", activity: "mission_8/lesson_44/M8_44oi_act1", teacherNotes: "<strong>Lesson 44 Activity 1 (15 min.)</strong> <ul> <li>Display the words <em>boil, north,</em> and <em>town</em>. </li> <li>Invite volunteers to say the words and point out the letters forming the vowel sounds (<em>oi, or, ow</em>).</li> <li>Then point to the letters <em>oi, or,</em> and <em>ow</em> and elicit the sounds /ɔɪ/, /ɔr/, and /aʊ/.</li> <li>Display the digital activity.</li> <li>Point to each set of letters and elicit the sound.</li> <li>Then point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and order.</em></li> <li>Play the audio for the first section.</li> <li>Elicit the letters corresponding to the sounds and put them in the correct order.</li> <li>Guide students to complete the digital activity as a group, or do the first together and monitor students as they complete the others in pairs or individually.</li> </ul>", answerKey: "" },
                { title:"Lesson 44 Activity 2 (15 min.)", thumbnail: "mission_8/lesson_44/M8_44oi_act2", activity: "mission_8/lesson_44/M8_44oi_act2", teacherNotes: "<strong>Lesson 44 Activity 2 (15 min.)</strong> <ul> <li>Display the letters <em>oi</em> and elicit the sound /ɔɪ/. </li> <li>Tell students they are going to see and hear some words with the sound /ɔɪ/. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then have students do the digital activity again, in pairs or individually. Encourage them to repeat the words. </li> </ul>", answerKey: "" },
                { title:"Lesson 44 Activity 3 (15 min.)", thumbnail: "mission_8/lesson_44/M8_44oi_act3", activity: "mission_8/lesson_44/M8_44oi_act3", teacherNotes: "<strong>Lesson 44 Activity 3 (15 min.)</strong> <ul> <li>Display the letters <em>oi, or,</em> and <em>ow</em>, and elicit the sounds.</li> <li>Display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and choose the odd one out.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then have students do the activity again, in pairs or individually.</li> </ul>", answerKey: "" },
            ],
            chant: [
                { title:"Lesson 44 Chant (25 min.)", thumbnail: "mission_8/lesson_44/chant/M8_44oi_chant44", activity: "mission_8/lesson_44/chant/M8_44oi_chant44", teacherNotes: "<strong>Lesson 44 Chant (25 min.)</strong> <ul> <li>Display the picture in the first part of the digital activity.</li> <li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li> <li>Then display the letters <em>oi</em> and elicit the sound.</li> <li>Explain that they are going to hear a chant with words that have the sound /ɔɪ/. </li> <li>Point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li> <li>Play the chant. </li> <li>Elicit any words with the /ɔɪ/ sound they heard. (It’s OK if they can’t identify any.)</li> <li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /ɔɪ/.</li> <li>Then display the second part of the digital activity. </li> <li>Point to the chant below the picture. Tell students they are going to listen and read.</li> <li>Play the chant again, pausing after the first line: <em>Can I join?</em></li> <li>Have students point out the man and the boy in the picture. </li> <li>Confirm students understand what <em>join means</em>.</li> <li>Repeat the first line of the chant. Point to each word in the line as you say it.</li> <li>Encourage students to repeat the line, pointing to the words as they say them.</li> <li>Then elicit the word with the sound /ɔɪ/. (If students don’t know a word, but they see the <em>oi</em> in it, have them point out the word and you can say it for them.)</li> <li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /ɔɪ/.</li> <li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li> </ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_44/lesson_44" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_44/lesson_44a" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 45,
            mission: 8,
// css:"m_mission8",
            ejemplo: "ejemplos/ejemplo45.png",
            grapheme: "grapheme/lesson_45.png",
            phoneme:"phoneme/lesson_45.png",
            audio: new Audio("assets/audios/lesson_45.mp3"),
            pathResources: "resources/mission8/",
            media: ["video/lesson_45.mp4"],
            poster: "mission_8/lesson_45/poster/lesson45_poster.jpg",
            LO_info: [
                { title:"Lesson 45 Introduction (10 min.)", thumbnail: "mission_8/lesson_45/M8_45ear_intro", activity: "mission_8/lesson_45/M8_45ear_intro", teacherNotes: "<strong>Lesson 45 Introduction (10 min.)</strong> <ul> <li> the letters <em>e, a,</em> and <em>r</em>.</li> <li>Elicit the sounds /ɛ/, /æ/, and /r/.</li> <li>Explain that some letters, when put together, have a different sound.</li> <li> the letters <em>e, a,</em> and <em>r</em> together. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em></li> <li>Play the audio for the digital activity.</li> <li>Then point to the letters, say the sound, and have students repeat it. </li> <li>Encourage students to continue repeating the sound: /ɪr/, /ɪr/, /ɪr/.</li> </ul>", answerKey: "" },
                { title:"Lesson 45 Activity 1 (15 min.)", thumbnail: "mission_8/lesson_45/M8_45ear_act1", activity: "mission_8/lesson_45/M8_45ear_act1", teacherNotes: "<strong>Lesson 45 Activity 1 (15 min.)</strong> <ul> <li>Display the words <em>ear, car, hurt,</em> and <em>north</em>. </li> <li>Invite volunteers to say the words and point out the letters forming the vowel sounds (<em>ear, ar, ur, or</em>).</li> <li>Then point to the letters <em>ear, ar, ur,</em> and <em>or</em>, and elicit the sounds /ɪr/, /ar/, /ɜr/, and /ɔr/.</li> <li>Display the digital activity.</li> <li>Point to each set of letters and elicit the sound.</li> <li>Then point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and choose.</em></li> <li>Play the audio at the top of the activity and elicit the corresponding letters. If necessary, play the sounds for each set of letters so students can hear them before choosing one.</li> <li>Then guide students to complete the rest of the digital activity as a group or individually.</li> </ul>", answerKey: "" },
                { title:"Lesson 45 Activity 2 (15 min.)", thumbnail: "mission_8/lesson_45/M8_45ear_act2", activity: "mission_8/lesson_45/M8_45ear_act2", teacherNotes: "<strong>Lesson 45 Activity 2 (15 min.)</strong> <ul> <li>Display the letters <em>ear</em> and elicit the sound. </li> <li>Tell students they are going to see and hear some words with the sound /ɪr/.</li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then have students do the digital activity again, in pairs or individually. Encourage them to repeat the words. </li> </ul>", answerKey: "" },
                { title:"Lesson 45 Activity 3 (15 min.)", thumbnail: "mission_8/lesson_45/M8_45ear_act3", activity: "mission_8/lesson_45/M8_45ear_act3", teacherNotes: "<strong>Lesson 45 Activity 3 (15 min.)</strong> <ul> <li>Display the letters <em>ear, or, and ar,</em> and elicit the sounds.</li> <li>Display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and choose the odd one out.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then have students do the activity again, in pairs or individually.</li> </ul>", answerKey: "" },
            ],
            chant: [
                { title:"Lesson 45 Chant (25 min.)", thumbnail: "mission_8/lesson_45/chant/M8_45ear_chant45", activity: "mission_8/lesson_45/chant/M8_45ear_chant45", teacherNotes: "<strong>Lesson 45 Chant (25 min.)</strong> <ul> <li>Display the picture in the first part of the digital activity.</li> <li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li> <li>Then display the letters <em>ear</em> and elicit the sound.</li> <li>Explain that they are going to hear a chant with words that have the sound /ɪr/. </li> <li>Point to and say the activity instructions: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li> <li>Play the chant. </li> <li>Elicit any words with the /ɪr/ sound they heard. (It’s OK if they can’t identify any.)</li> <li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /ɪr/.</li> <li>Then display the second part of the digital activity. </li> <li>Point to the chant below the picture. Tell students they are going to listen and read.</li> <li>Play the chant again, pausing after the first line: Hello, dear, can you hear. </li> <li>Have students point out the boy in the picture. </li> <li>Repeat the first line of the chant. Point to each word in the line as you say it.</li> <li>Encourage students to repeat the line, pointing to the words as they say them.</li> <li>Then elicit the words with the sound /ɪr/. (If students don’t know a word, but they see the <em>ear</em> in it, have them point out the word and you can say it for them.)</li> <li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /ɪr/.</li> <li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li> </ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_45/lesson_45" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_45/lesson_45a" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 46,
            mission: 8,
// css:"m_mission8",
            ejemplo: "ejemplos/ejemplo46.png",
            grapheme: "grapheme/lesson_46.png",
            phoneme:"phoneme/lesson_46.png",
            audio: new Audio("assets/audios/lesson_46.mp3"),
            pathResources: "resources/mission8/",
            media: ["video/lesson_46.mp4"],
            poster: "mission_8/lesson_46/poster/lesson46_poster.jpg",
            LO_info: [
                { title:"Lesson 46 Introduction (10 min.)", thumbnail: "mission_8/lesson_46/M8_46air_intro", activity: "mission_8/lesson_46/M8_46air_intro", teacherNotes: "<strong>Lesson 46 Introduction (10 min.)</strong> <ul> <li>Display the letters <em>a, i,</em> and <em>r</em>.</li> <li>Elicit the sounds /æ/, /ɪ/, and /r/.</li> <li>Explain that some letters, when put together, have a different sound.</li> <li>Display the letters <em>a, i,</em> and <em>r</em> together. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em></li> <li>Play the audio for the digital activity.</li> <li>Then point to the letters, say the sound, and have students repeat it. </li> <li>Encourage students to continue repeating the sound: /ɛr/, /ɛr/, /ɛr/.</li> </ul>", answerKey: "" },
                { title:"Lesson 46 Activity 1 (20 min.)", thumbnail: "mission_8/lesson_46/M8_46air_act1", activity: "mission_8/lesson_46/M8_46air_act1", teacherNotes: "<strong>Lesson 46 Activity 1 (20 min.)</strong> <ul> <li>Display the words <em>hair, ear, hurt, car,</em> and <em>north</em>. </li> <li>Invite volunteers to say the words and point out the letters forming the vowel sounds (<em>air, ear, ur, ar, or</em>).</li> <li>Then point to the letters <em>air, ear, ur, ar,</em> and <em>or</em>, and elicit the sounds /ɛr/, /ɪr/, /ɜr/, /ar/, and /ɔr/.</li> <li>Display the digital activity.</li> <li>Point to each set of letters and elicit the sound.</li> <li>Then point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and choose.</em></li> <li>Play the audio and elicit the corresponding letters. </li> <li>Then guide students to complete the rest of the digital activity as a group or individually.</li> </ul>", answerKey: "" },
                { title:"Lesson 46 Activity 2 (15 min.)", thumbnail: "mission_8/lesson_46/M8_46air_act2", activity: "mission_8/lesson_46/M8_46air_act2", teacherNotes: "<strong>Lesson 46 Activity 2 (15 min.)</strong> <ul> <li>Display the letters <em>air</em> and elicit the sound. </li> <li>Tell students they are going to see and hear some words with the sound /ɛr/. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then have students do the digital activity again, in pairs or individually. Encourage them to repeat the words. </li> </ul>", answerKey: "" },
                { title:"Lesson 46 Activity 3 (15 min.)", thumbnail: "mission_8/lesson_46/M8_46air_act3", activity: "mission_8/lesson_46/M8_46air_act3", teacherNotes: "<strong>Lesson 46 Activity 3 (15 min.)</strong> <ul> <li>Display the letters <em>air</em> and elicit the sound.</li> <li>Encourage students to recall words with the sound /ɛr/. </li> <li>Then point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen, look and choose the words with air.</em></li> <li>Play the audio for the first picture and have students repeat the word. </li> <li>Ask: <em style='color:#7FD5EF; font-weight:bold;'>Is there an /ɛr/ in (the word for the picture)?</em></li> <li>Play the audio for the other pictures, asking if there is an /ɛr/ sound in any of them. Select those that do.</li> <li>Then have students complete the activity again, in pairs or individually. Encourage students to repeat the words.</li> </ul>", answerKey: "" },
           ],
            chant: [
                { title:"Lesson 46 Chant (25 min.)", thumbnail: "mission_8/lesson_46/chant/M8_46air_chant46", activity: "mission_8/lesson_46/chant/M8_46air_chant46", teacherNotes: "<strong>Lesson 46 Chant (25 min.)</strong> <ul> <li>Display the picture in the first part of the digital activity.</li> <li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li> <li>Then display the letters <em>air</em> and elicit the sound.</li> <li>Explain that they are going to hear a chant with words that have the sound /ɛr/. </li> <li>Point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li> <li>Play the chant. </li> <li>Elicit any words with the /ɛr/ sound they heard. (It’s OK if they can’t identify any.)</li> <li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /ɛr/.</li> <li>Then display the second part of the digital activity. </li> <li>Point to the chant below the picture. Tell students they are going to listen and read.</li> <li>Play the chant again, pausing after the first line: <em>Mom has a pair of scissors.</em> </li> <li>Have students point out the girl, the woman (mom) and ask what the woman has in her hands in the picture. </li> <li>Repeat the first line of the chant. Point to each word in the line as you say it.</li> <li>Encourage students to repeat the line, pointing to the words as they say them.</li> <li>Then elicit the word with the sound /ɛr/. (If students don’t know a word, but they see the <em>air</em> in it, have them point out the word and you can say it for them.)</li> <li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /ɛr/.</li> <li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li> </ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_46/lesson_46" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_46/lesson_46a" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 47,
            mission: 8,
// css:"m_mission8",
            ejemplo: "ejemplos/ejemplo47.png",
            grapheme: "grapheme/lesson_47.png",
            phoneme:"phoneme/lesson_47.png",
            audio: new Audio("assets/audios/lesson_47.mp3"),
            pathResources: "resources/mission8/",
            media: ["video/lesson_47.mp4"],
            poster: "mission_8/lesson_47/poster/lesson47_poster.jpg",
            LO_info: [
                { title:"Lesson 47 Introduction (10 min.)", thumbnail: "mission_8/lesson_47/M8_47ir_intro", activity: "mission_8/lesson_47/M8_47ir_intro", teacherNotes: "<strong>Lesson 47 Introduction (10 min.)</strong> <ul> <li>Display the letters <em>ur</em>, and elicit the sound /ɜr/.</li> <li>Tell students they are going to learn a new sound.</li> <li>Display the letters <em>ur</em> and <em>ir</em> and explain that they have the same sound.</li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em></li> <li>Play the audio for the digital activity.</li> <li>Then point to the letters, say the sound, and have students repeat it. </li> <li>Encourage students to continue repeating the sound: /ɜr/, /ɜr/, /ɜr/.</li> <ul>", answerKey: "" },
                { title:"Lesson 47 Activity 1 (15 min.)", thumbnail: "mission_8/lesson_47/M8_47ir_act1", activity: "mission_8/lesson_47/M8_47ir_act1", teacherNotes: "<strong>Lesson 47 Activity 1 (15 min.)</strong> <ul> <li>Display the words <em>bird, hair, ear,</em> and <em>north</em>. </li> <li>Invite volunteers to say the words and point out the letters forming the vowel sounds (<em>ir, air, ear, or</em>).</li> <li>Then point to the letters <em>ir, air, ear,</em> and <em>or</em>, and elicit the sounds /ɜr/, /ɛr/, /ɪr/, and /ɔr/.</li> <li>Display the digital activity.</li> <li>Point to each set of letters and elicit the sound.</li> <li>Then point to the activity instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and choose.</em></li> <li>Play the audio and elicit the corresponding letters. </li> <li>Then guide students to complete the rest of the digital activity as a group or individually.</li> </ul>", answerKey: "" },
                { title:"Lesson 47 Activity 2 (15 min.)", thumbnail: "mission_8/lesson_47/M8_47ir_act2", activity: "mission_8/lesson_47/M8_47ir_act2", teacherNotes: "<strong>Lesson 47 Activity 2 (15 min.)</strong> <ul> <li>Display the letters <em>ir</em> and elicit the sound /ɜr/.</li> <li>Tell students they are going to see and hear some words with the sound /ɜr/. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and say. Then listen and check.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then point to the first card in the activity and invite volunteers to sound out the word. </li> <li>Invite a volunteer to point out the letters <em>ir</em> in the word. </li> <li>Invite other volunteers to find the letters <em>ir</em> in the other words. </li> <li>Then have students do the digital activity again. Encourage them to repeat the words. </li> </ul>", answerKey: "" },
                { title:"Lesson 47 Activity 3 (15 min.)", thumbnail: "mission_8/lesson_47/M8_47ir_act3", activity: "mission_8/lesson_47/M8_47ir_act3", teacherNotes: "<strong>Lesson 47 Activity 3 (15 min.)</strong> <ul> <li>Display the letters <em>ir</em> and elicit the sound /ɜr/.</li> <li>Display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and draw lines.</em></li> <li>Play the audio for the first item.</li> <li>Elicit the word.</li> <li>Point to the first item (letter) in the top row and elicit the sound.</li> <li>Then elicit the sounds (and letters) that are missing.</li> <li>Demonstrate how to link the parts of the words.</li> <li>Guide students to complete the rest of the digital activity.</li> <li>Then have students do the activity again, in pairs or individually.</li> </ul>", answerKey: "" },
            ],
            chant: [
                { title:"Lesson 47 Chant (25 min.)", thumbnail: "mission_8/lesson_47/chant/M8_47ir_chant47", activity: "mission_8/lesson_47/chant/M8_47ir_chant47", teacherNotes: "<strong>Lesson 47 Chant (25 min.)</strong> <ul> <li>Display the picture in the first part of the digital activity.</li> <li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li> <li>Then display the letters <em>ir</em> and elicit the sound /ɜr/.</li> <li>Explain that they are going to hear a chant with words that have the sound /ɜr/.</li> <li>Point to and say the activity instructions: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen</em>.</li> <li>Play the chant. </li> <li>Elicit any words with the /ɜr/ sound they heard. (It’s OK if they can’t identify any.)</li> <li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /ɜr/.</li> <li>Then display the second part of the digital activity. </li> <li>Point to the chant below the picture. Tell students they are going to listen and read.</li> <li>Play the chant again, pausing after the first line: <em>It’s the first day of school</em>. </li> <li>Repeat the first line of the chant. Point to each word in the line as you say it.</li> <li>Encourage students to repeat the line, pointing to the words as they say them.</li> <li>Then elicit the word with the sound /ɜr/. (Note: There aren’t any in this line.)</li> <li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /ɜr/.</li> <li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li> </ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_47/lesson_47" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_47/lesson_47a" }
                ],
            ],
            descargables: [""]

        },
        {

            lesson: 48,
            mission: 8,
// css:"m_mission8",
            ejemplo: "ejemplos/ejemplo48.png",
            grapheme: "grapheme/lesson_48.png",
            phoneme:"phoneme/lesson_48.png",
            audio: new Audio("assets/audios/lesson_48.mp3"),
            pathResources: "resources/mission8/",
            media: ["video/lesson_48.mp4"],
            poster: "mission_8/lesson_48/poster/lesson48_poster.jpg",
            LO_info: [
                { title:"Lesson 48 Introduction (15 min.)", thumbnail: "mission_8/lesson_48/M8_48er_intro", activity: "mission_8/lesson_48/M8_48er_intro", teacherNotes: "<strong>Lesson 48 Introduction (15 min.)</strong> <ul> <li>Display the letters <em>e</em> and <em>r</em>.</li> <li>Elicit the sounds /ɛ/ and /r/.</li> <li>Explain that some letters, when put together, the sound changes.</li> <li>Display the letters <em>e</em> and <em>r</em> together. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em> </li> <li>Play the audio for the digital activity.</li> <li>Then point to the letters, say the sound, and have students repeat it. </li> <li>Encourage students to continue repeating the sound: /ɜr/, /ɜr/, /ɜr/.</li> <li>Elicit other spellings for the sound /ɜr/ (<em>ur, ir</em>).</li> </ul>", answerKey: "" },
                { title:"Lesson 48 Activity 1 (15 min.)", thumbnail: "mission_8/lesson_48/M8_48er_act1", activity: "mission_8/lesson_48/M8_48er_act1", teacherNotes: "<strong>Lesson 48 Activity 1 (15 min.)</strong> <ul> <li>Display the letters <em>er</em> and say the sound /ɜr/. </li> <li>Point to the instructions in the digital activity and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em></li> <li>Have students listen and repeat the words.</li> <li>Return to the first section of the activity.</li> <li>Point to the first word and invite a volunteer to spell it out and then blend the sounds to say the word.</li> <li>Have students notice that <em>burger</em> has two different spellings for the /ɜr/ sound in it.</li> <li>Continue guiding students to sound out, blend the sounds, and say the words.</li> </ul>", answerKey: "" },
            ],
            chant: [
                { title:"Lesson 48 Chant (25 min.)", thumbnail: "mission_8/lesson_48/chant/M8_48er_chant48", activity: "mission_8/lesson_48/chant/M8_48er_chant48", teacherNotes: "<strong>Lesson 48 Chant (25 min.)</strong> <ul> <li>Display the picture in the first part of the digital activity.</li> <li>Invite students to describe it. (Allow students to describe it in their first language. Repeat and reinforce anything they say in English.) </li> <li>Then display the letters <em>er</em> and elicit the sound /ɜr/.</li> <li>Explain that they are going to hear a chant with words that have the sound /ɜr/. </li> <li>Point to and read the activity instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look and listen.</em></li> <li>Play the chant. </li> <li>Elicit any words with the /ɜr/ sound they heard. (It’s OK if they can’t identify any.)</li> <li>Tell students you are going to play the chant again. Explain that they should raise their hands any time they hear a word with the sound /ɜr/.</li> <li>Then display the second part of the digital activity. </li> <li>Point to the chant below the picture. Tell students they are going to listen and read.</li> <li>Play the chant again, pausing after the first line: <em>Harper the beaver</em>. </li> <li>Have students point out the beavers and elicit what they’re doing in the picture. </li> <li>Repeat the first line of the chant. Point to each word in the line as you say it.</li> <li>Encourage students to repeat the line, pointing to the words as they say them.</li> <li>Then elicit the words with the sound /ɜr/. (If students don’t know a word, but they see the <em>er</em> in it, have them point out the word and you can say it for them.)</li> <li>Continue playing and pausing the chant, line by line. Guide students to point out corresponding information in the picture as well as repeat the line, then point to and say the words with the sound /ɜr/.</li> <li>Play the chant completely a few more times. Encourage students to say and point to words in the chant.</li> </ul>", answerKey: "" },
            ],
            printable: [
                [{ pdf_source: "lesson_48/lesson_48" }],
                [
                    { kind: "mp3", track: "Track 1", track_source: "lesson_48/lesson_48a" }
                ],
            ],
            descargables: [""]

        },
        
    ]
}


        /* ------------------------------ Tricky y Blending ----------------------------- */
var missions = [
    {
        mission: 1,
        trickyWords: [
            { title:"Tricky Words 1 Introduction (20 min.)", thumbnail: "mission_1/tricky_words/M1_TW1_intro", activity: "mission_1/tricky_words/M1_TW1_intro", teacherNotes: "Tricky teacher notes Lesson 1 exintro", answerKey: "Tricky answer Key Lesson 1 exintro" },
            { title:"Tricky Words 1 Activity 1 (15 min.)", thumbnail: "mission_1/tricky_words/M1_TW1_act1", activity: "mission_1/tricky_words/M1_TW1_act1", teacherNotes: "Tricky teacher notes Lesson 1 ex1", answerKey: "Tricky answer Key Lesson 1 ex1" },
            { title:"Tricky Words 1 Activity 2 (15 min.)", thumbnail: "mission_1/tricky_words/M1_TW1_act2", activity: "mission_1/tricky_words/M1_TW1_act2", teacherNotes: "Tricky teacher notes Lesson 1 ex2", answerKey: "Tricky answer Key Lesson 1 ex2" },
            { title:"Tricky Words 1 Activity 3 (15 min.)", thumbnail: "mission_1/tricky_words/M1_TW1_act3", activity: "mission_1/tricky_words/M1_TW1_act3", teacherNotes: "Tricky teacher notes Lesson 1 ex3", answerKey: "Tricky answer Key Lesson 1 ex3" },
        ],
        blending: [
            { title:"", thumbnail:"", activity: "", teacherNotes: "Chant teacher notes Lesson 1 ex1", answerKey: "Chant answer Key Lesson 1 ex1" },
        ],

    },
    {
        mission: 2,
        trickyWords: [
            { title:"", thumbnail:"", activity: "", teacherNotes: "Tricky teacher notes Lesson 1 exintro", answerKey: "Tricky answer Key Lesson 1 exintro" },
            ],
        blending: [
            { title:"Blending 1 Activity 1 (20 min.) ", thumbnail:"mission_2/blending_1/M2_Blend1_act1", activity: "mission_2/blending_1/M2_Blend1_act1", teacherNotes: "Chant teacher notes Lesson 1 ex1", answerKey: "Chant answer Key Lesson 1 ex1" },
            { title:"Blending 1 Activity 2 (15 min.) ", thumbnail:"mission_2/blending_1/M2_Blend1_act2", activity: "mission_2/blending_1/M2_Blend1_act2", teacherNotes: "Chant teacher notes Lesson 1 ex2", answerKey: "Chant answer Key Lesson 1 ex2" },
            { title:"Blending 1 Activity 3 (10 min.) ", thumbnail:"mission_2/blending_1/M2_Blend1_act3", activity: "mission_2/blending_1/M2_Blend1_act3", teacherNotes: "Chant teacher notes Lesson 1 ex2", answerKey: "Chant answer Key Lesson 1 ex2" },
            { title:"Blending 1 Activity 4 (20 min.) ", thumbnail:"mission_2/blending_1/M2_Blend1_act4", activity: "mission_2/blending_1/M2_Blend1_act4", teacherNotes: "Chant teacher notes Lesson 1 ex2", answerKey: "Chant answer Key Lesson 1 ex2" },
            { title:"Blending 1 Activity 5 (15 min.) ", thumbnail:"mission_2/blending_1/M2_Blend1_act5", activity: "mission_2/blending_1/M2_Blend1_act5", teacherNotes: "Chant teacher notes Lesson 1 ex2", answerKey: "Chant answer Key Lesson 1 ex2" },
            { title:"Blending 1 Activity 6 (20 min.) ", thumbnail:"mission_2/blending_1/M2_Blend1_act6", activity: "mission_2/blending_1/M2_Blend1_act6", teacherNotes: "Chant teacher notes Lesson 1 ex2", answerKey: "Chant answer Key Lesson 1 ex2" },
        ],

    },
    {
        mission: 3,
        trickyWords: [
            { title:"", thumbnail:"", activity: "", teacherNotes: "Tricky teacher notes Lesson 1 ex1", answerKey: "Tricky answer Key Lesson 1 ex1" },
           ],
        blending: [
            { title:"Blending 2 Activity 1 (25 min.)", thumbnail:"mission_3/blending_2/M3_Blend2_act1", activity: "mission_3/blending_2/M3_Blend2_act1", teacherNotes: "Tricky teacher notes Lesson 1 ex1", answerKey: "Tricky answer Key Lesson 1 ex1" },
            { title:"Blending 2 Activity 2 (15 min.)", thumbnail:"mission_3/blending_2/M3_Blend2_act2", activity: "mission_3/blending_2/M3_Blend2_act2", teacherNotes: "Tricky teacher notes Lesson 1 ex1", answerKey: "Tricky answer Key Lesson 1 ex1" },
            { title:"Blending 2 Activity 3 (10 min.)", thumbnail:"mission_3/blending_2/M3_Blend2_act3", activity: "mission_3/blending_2/M3_Blend2_act3", teacherNotes: "Tricky teacher notes Lesson 1 ex1", answerKey: "Tricky answer Key Lesson 1 ex1" },
            { title:"Blending 2 Activity 4 (20 min.)", thumbnail:"mission_3/blending_2/M3_Blend2_act4", activity: "mission_3/blending_2/M3_Blend2_act4", teacherNotes: "Tricky teacher notes Lesson 1 ex1", answerKey: "Tricky answer Key Lesson 1 ex1" },
            { title:"Blending 2 Activity 5 (15 min.)", thumbnail:"mission_3/blending_2/M3_Blend2_act5", activity: "mission_3/blending_2/M3_Blend2_act5", teacherNotes: "Tricky teacher notes Lesson 1 ex1", answerKey: "Tricky answer Key Lesson 1 ex1" },
            { title:"Blending 2 Activity 6 (20 min.)", thumbnail:"mission_3/blending_2/M3_Blend2_act6", activity: "mission_3/blending_2/M3_Blend2_act6", teacherNotes: "Tricky teacher notes Lesson 1 ex1", answerKey: "Tricky answer Key Lesson 1 ex1" },
        ],

    },
    {
        mission: 4,
        trickyWords: [
            { title:"Tricky Words 2 Introduction (20 min.)", thumbnail:"mission_4/tricky_words_2/M4_TW2_intro", activity: "mission_4/tricky_words_2/M4_TW2_intro", teacherNotes:  "<strong>Tricky Words 2 Introduction (20 min.)</strong> <ul> <li>Display the letters <em>g, i, n,</em> and <em>t</em>, and elicit the sounds.</li> <li>Display the letter <em>o</em> and elicit the sound /ɔ/. </li> <li>Explain that some letters are “tricky” and have more than one sound. </li> <li>Display the first part of the digital activity.</li> <li>Point to the instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Look, listen and repeat.</em></li> <li>Play the audio and encourage students to repeat the word <em>no</em>. </li> <li>Explain that this is a tricky word because the <em>o</em> doesn’t sound like /ɔ/.</li> <li>Then tell students they are going to learn another word they will see a lot.</li> <li>Go to the second part of the digital activity and play the audio.</li> <li>Encourage students to repeat the word go. </li> <li>Display the cards with the words <em>no</em> and <em>go</em>. </li> <li>Say the <em>o</em> the way it’s pronounced in <em>no</em> and <em>go</em>. <em>(It’s pronounced /oʊ/, as in goat.)</em></li> <li>Explain or elicit that the <em>o</em> in <em>no</em> and <em>go</em> is pronounced the same way, but that it’s tricky because it’s pronounced differently from the /ɔ/ sound they learned previously.</li> <li>Go to the third part of the digital activity and play the audio.</li> <li>Encourage students to repeat the word <em>to</em>. </li> <li>Display the cards with the words <em>no</em>, <em>go</em> and <em>to</em>. </li> <li>Point to and say each word. </li> <li>Invite volunteers to identify the <em>o</em> that sounds different from the other two. <em>(to.)</em></li> <li>Go to the fourth part of the digital activity and play the audio.</li> <li>Encourage students to repeat the word <em>into</em>. </li> <li>Display the cards with the words <em>no, go, to</em> and <em>into</em>. </li> <li>Point to and say each word. </li> <li>Invite volunteers to categorize the words that have similar <em>o</em> sounds.</li> <li>Complete the digital activity again as a group or individually.</li> </ul>", answerKey: "Tricky answer Key Lesson 1 ex1" },
            { title:"Tricky Words 2 Activity 1 (15 min.)", thumbnail:"mission_4/tricky_words_2/M4_TW2_act1", activity: "mission_4/tricky_words_2/M4_TW2_act1", teacherNotes: "<strong>Tricky Words 2 Activity 1 (15 min.)</strong> <ul> <li>Display the words <em>no, go, to</em> and <em>into</em>. </li> <li>Invite volunteers to say the words.</li> <li>Then display the digital activity and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Listen and choose.</em></li> <li>Play the audio and encourage students to repeat the word <em>no</em>. </li> <li>Then point to the two options.</li> <li>Play them in turn and encourage students to repeat the words.</li> <li>Play the audio at the top of the activity again, point to the two options and elicit the correct word. (If necessary, play the audio for each word option again.) </li> <li>Repeat the steps for the remaining sections of the digital activity.</li> <li>Then have students complete the activity again in pairs or individually.</li> </ul>", answerKey: "Tricky answer Key Lesson 1 ex1" },
            { title:"Tricky Words 2 Activity 2 (15 min.)", thumbnail:"mission_4/tricky_words_2/M4_TW2_act2", activity: "mission_4/tricky_words_2/M4_TW2_act2", teacherNotes: "<strong>Tricky Words 2 Activity 2 (15 min.)</strong> <ul> <li>Display the words <em>no, go, to,</em> and <em>into</em>, and elicit them.</li> <li>Display the digital activity.</li> <li>Then point to and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Read and say.</em></li> <li>Point to the words and have students say them.</li> <li>Then demonstrate how to record and replay the recordings. </li> <li>Then have students complete the activity individually.</li> </ul>", answerKey: "Tricky answer Key Lesson 1 ex1" },
            { title:"Tricky Words 2 Activity 3 (25 min.)", thumbnail:"mission_4/tricky_words_2/M4_TW2_act3", activity: "mission_4/tricky_words_2/M4_TW2_act3", teacherNotes: "<strong>Tricky Words 2 Activity 3 (25 min.)</strong> <ul> <li>Display the words <em>go, to, no, into, I, the,</em> and <em>is</em>, and elicit them.</li> <li>Display the digital activity.</li> <li>Then point to and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Read and choose.</em></li> <li>Invite volunteers to read the incomplete sentence and answer options.</li> <li>Have students read the sentence with both options: <em>The cat go on the mat. / The cat is on the mat.</em></li> <li>Elicit the correct sentence and demonstrate how to tap on the word and then the space to insert it in the sentence.</li> <li>Invite other volunteers to read the completed sentence. </li> <li>Guide students to complete the rest of the activity.</li> <li>Then have students complete the activity again, in pairs or individually. </li> </ul>", answerKey: "Tricky answer Key Lesson 1 ex1" },
        ],
        blending: [
            { title:"Blending 3 Activity 1 (20 min.)", thumbnail:"mission_4/blending_3/M4_Blend3_act1", activity: "mission_4/blending_3/M4_Blend3_act1", teacherNotes: "<strong>Blending 3 Activity 1 (20 min.)</strong> <ul> <li>One by one, display the letters <em>z, i, p, v, a, n, w, e, b, j,</em> and m and elicit the sounds.</li> <li>Then arrange the letters to form the word <em>zip</em>. </li> <li>Invite volunteers to sound out the letters and then blend them to say the word <em>zip</em>. </li> <li>Then display the digital activity.</li> <li>Point to the instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Blend the sounds to read the words.</em></li> <li>Guide students to complete the digital activity as a group.</li> </ul>", answerKey: "" },
            { title:"Blending 3 Activity 2 (15 min.)", thumbnail:"mission_4/blending_3/M4_Blend3_act2", activity: "mission_4/blending_3/M4_Blend3_act2", teacherNotes:  "<strong>Blending 3 Activity 2 (15 min.)</strong> <ul> <li>One by one, display the letters <em>y, a, k, s, i, x, qu, u, ck, b, o</em> and elicit the sounds.</li> <li>Then arrange the letters to form the word <em>yak</em>. </li> <li>Invite volunteers to sound out the letters and then blend them to say the word <em>yak</em>.</li> <li>Then display the digital activity.</li> <li>Point to the instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Blend the sounds to read the words.</em></li> <li>Guide students to complete the digital activity as a group.</li> </ul>", answerKey: "" },
            { title:"Blending 3 Activity 3 (20 min.)", thumbnail:"mission_4/blending_3/M4_Blend3_act3", activity: "mission_4/blending_3/M4_Blend3_act3", teacherNotes:  "<strong>Blending 3 Activity 3 (20 min.)</strong> <ul> <li>Display the digital activity.</li> <li>Then point to and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Read, listen and match.</em></li> <li>Have students complete the digital activity individually.</li> <li>Then restart the digital activity and turn over a card. </li> <li>If it’s the word, have students sound it out and then say it. If it’s a picture card with audio, have students repeat the word.</li> <li>Then tell them to use their small cards to form the words in the digital activity. </li> </ul>", answerKey: "" },
            { title:"Blending 3 Activity 4 (20 min.)", thumbnail:"mission_4/blending_3/M4_Blend3_act4", activity: "mission_4/blending_3/M4_Blend3_act4", teacherNotes:  "<strong>Blending 3 Activity 4 (20 min.)</strong> <ul> <li>Display the digital activity.</li> <li>Then point to and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Read and choose.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then have students do the activity again, individually or in pairs. </li> </ul>", answerKey: "" },
            { title:"Blending 3 Activity 5 (20 min.)", thumbnail:"mission_4/blending_3/M4_Blend3_act5", activity: "mission_4/blending_3/M4_Blend3_act5", teacherNotes:  "<strong>Blending 3 Activity 5 (20 min.)</strong> <ul> <li>Display the digital activity.</li> <li>Point to each word and invite volunteers to sound them out then blend the sounds to say the words.</li> <li>Then point to and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Read and say.<em></li> <li>Demonstrate how to record and replay the recordings.</li> <li>Then monitor students as they complete the activity individually.</li> </ul>", answerKey: "" },
        ],

    },
    {
        mission: 5,
        trickyWords: [
            { title:"Tricky Words 3 Introduction (20 min.)", thumbnail:"mission_5/tricky_words_3/M5_TW3_intro", activity: "mission_5/tricky_words_3/M5_TW3_intro", teacherNotes: "Tricky teacher notes Lesson 1 ex1", answerKey: "Tricky answer Key Lesson 1 ex1" },
            { title:"Tricky Words 3 Activity 1 (15 min.)", thumbnail:"mission_5/tricky_words_3/M5_TW3_act1", activity: "mission_5/tricky_words_3/M5_TW3_act1", teacherNotes: "Tricky teacher notes Lesson 1 ex1", answerKey: "Tricky answer Key Lesson 1 ex1" },
            { title:"Tricky Words 3 Activity 2 (15 min.)", thumbnail:"mission_5/tricky_words_3/M5_TW3_act2", activity: "mission_5/tricky_words_3/M5_TW3_act2", teacherNotes: "Tricky teacher notes Lesson 1 ex1", answerKey: "Tricky answer Key Lesson 1 ex1" },
            { title:"Tricky Words 3 Activity 3 (25 min.)", thumbnail:"mission_5/tricky_words_3/M5_TW3_act3", activity: "mission_5/tricky_words_3/M5_TW3_act3", teacherNotes: "Tricky teacher notes Lesson 1 ex1", answerKey: "Tricky answer Key Lesson 1 ex1" },
        ],
        blending: [
            { title:"Blending 4 Activity 1 (20 min.)", thumbnail:"mission_5/blending_4/M5_Blend4_act1", activity: "mission_5/blending_4/M5_Blend4_act1", teacherNotes: "Chant teacher notes Lesson 1 ex1", answerKey: "Chant answer Key Lesson 1 ex1" },
            { title:"Blending 4 Activity 2 (15 min.)", thumbnail:"mission_5/blending_4/M5_Blend4_act2", activity: "mission_5/blending_4/M5_Blend4_act2", teacherNotes: "Chant teacher notes Lesson 1 ex1", answerKey: "Chant answer Key Lesson 1 ex1" },
            { title:"Blending 4 Activity 3 (20 min.)", thumbnail:"mission_5/blending_4/M5_Blend4_act3", activity: "mission_5/blending_4/M5_Blend4_act3", teacherNotes: "Chant teacher notes Lesson 1 ex1", answerKey: "Chant answer Key Lesson 1 ex1" },
            { title:"Blending 4 Activity 4 (20 min.)", thumbnail:"mission_5/blending_4/M5_Blend4_act4", activity: "mission_5/blending_4/M5_Blend4_act4", teacherNotes: "Chant teacher notes Lesson 1 ex1", answerKey: "Chant answer Key Lesson 1 ex1" },
            { title:"Blending 4 Activity 5 (20 min.)", thumbnail:"mission_5/blending_4/M5_Blend4_act5", activity: "mission_5/blending_4/M5_Blend4_act5", teacherNotes: "Chant teacher notes Lesson 1 ex1", answerKey: "Chant answer Key Lesson 1 ex1" },
        ],

    },
    {
        mission: 6,
        trickyWords: [
            { title:"", thumbnail:"", activity: "", teacherNotes: "Chant teacher notes Lesson 1 ex1", answerKey: "Chant answer Key Lesson 1 ex1" },
        ],
        blending: [
            { title:"Blending 5 Activity 1 (20 min.)", thumbnail:"mission_6/blending_5/M6_Blend5_act1", activity: "mission_6/blending_5/M6_Blend5_act1", teacherNotes: "Chant teacher notes Lesson 1 ex1", answerKey: "Chant answer Key Lesson 1 ex1" },
            { title:"Blending 5 Activity 2 (20 min.)", thumbnail:"mission_6/blending_5/M6_Blend5_act2", activity: "mission_6/blending_5/M6_Blend5_act2", teacherNotes: "Chant teacher notes Lesson 1 ex1", answerKey: "Chant answer Key Lesson 1 ex1" },
            { title:"Blending 5 Activity 3 (25 min.)", thumbnail:"mission_6/blending_5/M6_Blend5_act3", activity: "mission_6/blending_5/M6_Blend5_act3", teacherNotes: "Chant teacher notes Lesson 1 ex1", answerKey: "Chant answer Key Lesson 1 ex1" },
            { title:"Blending 5 Activity 4 (15 min.)", thumbnail:"mission_6/blending_5/M6_Blend5_act4", activity: "mission_6/blending_5/M6_Blend5_act4", teacherNotes: "Chant teacher notes Lesson 1 ex1", answerKey: "Chant answer Key Lesson 1 ex1" },
            { title:"Blending 5 Activity 5 (20 min.)", thumbnail:"mission_6/blending_5/M6_Blend5_act5", activity: "mission_6/blending_5/M6_Blend5_act5", teacherNotes: "Chant teacher notes Lesson 1 ex1", answerKey: "Chant answer Key Lesson 1 ex1" },
       ],

    },
    {
        mission: 7,
        trickyWords: [
            { title:"Tricky Words 4 Introduction (20 min.)", thumbnail:"mission_7/tricky_words_4/M7_TW4_intro", activity: "mission_7/tricky_words_4/M7_TW4_intro", teacherNotes: "Chant teacher notes Lesson 1 ex1", answerKey: "Chant answer Key Lesson 1 ex1" },
            { title:"Tricky Words 4 Activity 1 (15 min.)", thumbnail:"mission_7/tricky_words_4/M7_TW4_act1", activity: "mission_7/tricky_words_4/M7_TW4_act1", teacherNotes: "Chant teacher notes Lesson 1 ex1", answerKey: "Chant answer Key Lesson 1 ex1" },
            { title:"Tricky Words 4 Activity 2 (15 min.)", thumbnail:"mission_7/tricky_words_4/M7_TW4_act2", activity: "mission_7/tricky_words_4/M7_TW4_act2", teacherNotes: "Chant teacher notes Lesson 1 ex1", answerKey: "Chant answer Key Lesson 1 ex1" },
            { title:"Tricky Words 4 Activity 3 (25 min.)", thumbnail:"mission_7/tricky_words_4/M7_TW4_act3", activity: "mission_7/tricky_words_4/M7_TW4_act3", teacherNotes: "Chant teacher notes Lesson 1 ex1", answerKey: "Chant answer Key Lesson 1 ex1" },
        ],
        blending: [
            { title:"Blending 6 Activity 1 (20 min.)", thumbnail:"mission_7/blending_6/M7_Blend6_act1", activity: "mission_7/blending_6/M7_Blend6_act1", teacherNotes: "Chant teacher notes Lesson 1 ex1", answerKey: "Chant answer Key Lesson 1 ex1" },
            { title:"Blending 6 Activity 2 (20 min.)", thumbnail:"mission_7/blending_6/M7_Blend6_act2", activity: "mission_7/blending_6/M7_Blend6_act2", teacherNotes: "Chant teacher notes Lesson 1 ex1", answerKey: "Chant answer Key Lesson 1 ex1" },
            { title:"Blending 6 Activity 3 (15 min.)", thumbnail:"mission_7/blending_6/M7_Blend6_act3", activity: "mission_7/blending_6/M7_Blend6_act3", teacherNotes: "Chant teacher notes Lesson 1 ex1", answerKey: "Chant answer Key Lesson 1 ex1" },
            { title:"Blending 6 Activity 4 (20 min.)", thumbnail:"mission_7/blending_6/M7_Blend6_act4", activity: "mission_7/blending_6/M7_Blend6_act4", teacherNotes: "Chant teacher notes Lesson 1 ex1", answerKey: "Chant answer Key Lesson 1 ex1" },
        ],

    },
    {
        mission: 8,
        trickyWords: [
            { title:"Tricky Words 5 Introduction (20 min.)", thumbnail:"mission_8/tricky_words_5/M8_TW5_intro", activity: "mission_8/tricky_words_5/M8_TW5_intro", teacherNotes: "", answerKey: "Chant answer Key Lesson 1 ex1" },
            { title:"Tricky Words 5 Activity 1 (15 min.)", thumbnail:"mission_8/tricky_words_5/M8_TW5_act1", activity: "mission_8/tricky_words_5/M8_TW5_act1", teacherNotes: "Chant teacher notes Lesson 1 ex1", answerKey: "Chant answer Key Lesson 1 ex1" },
            { title:"Tricky Words 5 Activity 2 (15 min.)", thumbnail:"mission_8/tricky_words_5/M8_TW5_act2", activity: "mission_8/tricky_words_5/M8_TW5_act2", teacherNotes: "Chant teacher notes Lesson 1 ex1", answerKey: "Chant answer Key Lesson 1 ex1" },
            { title:"Tricky Words 5 Activity 3 (20 min.)", thumbnail:"mission_8/tricky_words_5/M8_TW5_act3", activity: "mission_8/tricky_words_5/M8_TW5_act3", teacherNotes: "Chant teacher notes Lesson 1 ex1", answerKey: "Chant answer Key Lesson 1 ex1" },
        ],
        blending: [
            { title:"Blending 7 Activity 1 (20 min.)", thumbnail:"mission_8/blending_7/M8_Blend7_act1", activity: "mission_8/blending_7/M8_Blend7_act1", teacherNotes: "<strong>Blending 7 Activity 1 (20 min.)</strong> <ul> <li>One by one, display the letters <em>ar, d, k,</em> and elicit the sounds. </li> <li>Then arrange the letters to form the word <em>dark</em>.</li> <li>Invite volunteers to sound out the letters and then blend them to say the word <em>dark</em>. </li> <li>Display the letters <em>or, ur,</em> and <em>ow</em>, and elicit the sounds.</li> <li>Then display the digital activity.</li> <li>Point to the instructions and read them aloud: <em style='color:#7FD5EF; font-weight:bold;'>Blend the sounds to read the words.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then have students do the activity again, in pairs or individually.</li> </ul>", answerKey: "Chant answer Key Lesson 1 ex1" },
            { title:"Blending 7 Activity 2 (20 min.)", thumbnail:"mission_8/blending_7/M8_Blend7_act2", activity: "mission_8/blending_7/M8_Blend7_act2", teacherNotes: "<strong>Blending 7 Activity 2 (20 min.)</strong> <ul> <li>Display the letters <em>ear, air, ir,</em> and <em>oi</em>, and elicit the sounds. </li> <li>Then display the digital activity.</li> <li>Point to and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Read, listen and match.</em></li> <li>Have students complete the digital activity individually.</li> <li>Then restart the digital activity and turn over a card. </li> <li>If it’s a word, have students sound it out and then say it. If it’s a picture card with audio, have students repeat the word.</li> <li>Repeat the steps for the other cards.</li> </ul>", answerKey: "Chant answer Key Lesson 1 ex1" },
            { title:"Blending 7 Activity 3 (20 min.)", thumbnail:"mission_8/blending_7/M8_Blend7_act3", activity: "mission_8/blending_7/M8_Blend7_act3", teacherNotes: "<strong>Blending 7 Activity 3 (20 min.)</strong> <ul> <li>Display the digital activity.</li> <li>Then point to and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Read and choose.</em></li> <li>Guide students to complete the digital activity as a group.</li> <li>Then have students do the activity again, individually or in pairs.</li> </ul>", answerKey: "Chant answer Key Lesson 1 ex1" },
            { title:"Blending 7 Activity 4 (20 min.)", thumbnail:"mission_8/blending_7/M8_Blend7_act4", activity: "mission_8/blending_7/M8_Blend7_act4", teacherNotes: "<strong>Blending 7 Activity 4 (20 min.)</strong> <ul> <li>Display the digital activity.</li> <li>Point to each word and invite volunteers to sound them out then blend the sounds to say the words.</li> <li>Then point to and read the instructions aloud: <em style='color:#7FD5EF; font-weight:bold;'>Read and say.</em></li> <li>Demonstrate how to record and replay the recordings. </li> <li>Then monitor students as they complete the activity individually.</li> </ul>", answerKey: "Chant answer Key Lesson 1 ex1" },
        ],

    },
    ]









     /* ------------------------------ Inicio Funciones ----------------------------- */

 function validaMissionContent(numMission){
    $(".muestraPhonemas").empty();
    for(let i = 0; i<phonicsApp.lessons.length; i++){
        if(phonicsApp.lessons[i].mission == numMission){
            // console.log(phonicsApp.lessons[i].lesson)
            $(".muestraPhonemas:eq("+(parseInt(numMission)-1)+")").append($('<div class="elements all_elements container_lesson'+(i+1)+'"><div onclick="scrollToTop(); openCardScreen('+(phonicsApp.lessons[i].lesson)+');" class="cardAction" data-mission="'+phonicsApp.lessons[i].mission+'" data-lesson="'+phonicsApp.lessons[i].lesson+'"><img src="assets/'+phonicsApp.lessons[i].grapheme+'" class="all_phonemas"></div></div>'));
           }
    } 
}

// Lleva al inicio de la pagina
function scrollToTop(){
    window.scrollTo(0, 0);
}

// Imagen Grafema y fonema con botón toggle: hace cambio de imagen o regresa a imagen de grafema cuando se da clic en un grafema(desde una mision)
function resetTogButton(status){
    graph[0].disabled = true;
            toggleable[0].style.backgroundColor = "#dddddd";
            toggleable[0].style.left = "0";
            phon[0].classList.remove("chosen");
            fadeIn(graphemeToggle[0]);
            fadeOut(phonemeToggle[0]);
            if (status == "normal"){
            setTimeout(() => {
                graph[0].classList.add("chosen");
                toggleable[0].style.backgroundColor = "transparent";
                phon[0].disabled = false;
             
            }, 301);}
            else if (status == "reset"){
                graph[0].classList.add("chosen");
                toggleable[0].style.backgroundColor = "transparent";
                phon[0].disabled = false;
            }
            change = 0;
}

// Pantalla printable: Detiene audio cuando se reproduce otro dentro de la pantalla printable
printableTracks.addEventListener('play', function(e) {
      for (let i = 0; i < (printableTracks.querySelectorAll("div").length-1); i++) {
        if (printableTracks.querySelectorAll("div audio")[i] != e.target) {
            printableTracks.querySelectorAll("div audio")[i].pause();
            printableTracks.querySelectorAll("div audio")[i].currentTime = 0;
        }
    }
}, true);

// Pantalla phoneme: Pausan los videos y audios al salir de la ventana en la que se encuentran
function resetPhonemeMedia() {
    for (let i = 0; i < graphModalPanel.length; i++) {
        graphModalOption[i].addEventListener("click", () => {
            if (i !== 0) {
                stopPhonemeVideo();
            }
        });
    }
    for (let i = 0; i < (graphModalPanel.length - 1); i++) {
        graphModalOption[i].addEventListener("click", () => {
            if (i < (graphModalPanel.length - 1)) {
                stopPrintableAudio();
            }
        });
    }
}

// Pantalla phoneme: Detiene audio en ventana Printable
function stopPrintableAudio() {
    if ((printableTracks.querySelectorAll("div audio").length) > 0) {
        for (let k = 0; k <= (printableTracks.querySelectorAll("div audio").length - 1); k++) {
            printableTracks.querySelectorAll("div audio")[k].pause();
            printableTracks.querySelectorAll("div audio")[k].currentTime = 0;
        }
    }
}

// Pantalla phoneme: Detiene video en ventana New Sound
function stopPhonemeVideo(){
    $(".cardScreenVideo").children("video").get(0).pause();
    $(".cardScreenVideo").children("video").get(0).currentTime = 0;
    $(".cardScreenVideo").children("video").get(0).load();
}

// LOs: Borra la fuente de los LOs para detener audios al salir de ellos
function deleteLOSource(lo,losource) {
    document.getElementById(lo).src = "#";
    document.getElementById(lo).src = "assets/activities/"+losource+"/index.html";
}

 function construyePaginaPhonema(numLesson){
    //Buscas el Numero de lession en Diccionario y extraer Datos.
    for(let i = 0; i<phonicsApp.lessons.length; i++){
        if(phonicsApp.lessons[i].lesson == numLesson){
            $("#actScreen").empty();
            $("#chantScreen").empty();
            $("#printablePDF").empty();
            $("#printableTracks").empty();
            $(".graphemeToggle").children("img").attr("src","assets/"+phonicsApp.lessons[i].grapheme)
            $(".phonemeToggle").children("img").attr("src","assets/"+phonicsApp.lessons[i].phoneme)
            $(".cardScreenVideo").children("video").attr("src","assets/"+phonicsApp.lessons[i].media[0])
            $(".cardScreenVideo").children("video").attr("poster","assets/images/activities/"+phonicsApp.lessons[i].poster)
         
            $(".backMission").on("click",function(){
                $(".cardScreenVideo").children("video").get(0).pause();
                $(".cardScreenVideo").children("video").get(0).currentTime = 0;
                backMission(phonicsApp.lessons[i].mission);
               
            })
            let audio = phonicsApp.lessons[i].audio;

            resetTogButton("reset");
            resetPhonemeMedia();

             // Genera el contenido de Practice
            for (let j = 0; j < phonicsApp.lessons[i].LO_info.length; j++){
                $('#actScreen').append($('<div class="col-6 "> <div class="p-1"> <p class="activityTitle">'+phonicsApp.lessons[i].LO_info[j].title+'</p> <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#activity'+(j+1)+'"> <img src="assets/images/activities/'+phonicsApp.lessons[i].LO_info[j].thumbnail+'.jpg" class="img-fluid activityStyle"> </button> <!--MODAL MODIFICADO--> <div class="modal fade" tabindex="-1" id="activity'+(j+1)+'" tabindex="-1" aria-labelledby="activity1Label" aria-hidden="true"> <div class="modal-dialog modal-fullscreen"> <div class="modal-content"> <div class="modal-header"> <button onclick="deleteLOSource('+'\'loIframe'+j+'\',\''+phonicsApp.lessons[i].LO_info[j].activity+'\');" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> </div> <div class="modal-body"> <iframe id="loIframe'+j+'" src="assets/activities/'+phonicsApp.lessons[i].LO_info[j].activity+'/index.html" width="100%" height="100%" style="border-radius:20px;"></iframe> </div> </div> </div> </div> <!--FIN MODAL MODIFICADO--> </div> <div class="row mt-2"> <div class="col"> <div class="d-inline-flex gap-2"> <a class="btn" data-bs-toggle="collapse" href="#collapse'+(j+1)+'" role="button" aria-expanded="false" aria-controls="collapse'+(j+1)+'"> <img src="assets/images/secciones/seccion_tn.png" class="icon"> </a> <a class="btn practiceAkBtn" data-bs-toggle="collapse" href="#notes'+(j+1)+'" role="button" aria-expanded="false" aria-controls="notes'+(j+1)+'"> <img src="assets/images/secciones/time.png" class="icon"> </a> </div> <div class="collapse teachernotes align-items-center" id="collapse'+(j+1)+'"> <div class="card card-body styleteachers"> '+ phonicsApp.lessons[i].LO_info[j].teacherNotes +' </div> </div> <div class="collapse teachernotes align-items-center" id="notes'+(j+1)+'"> <div class="card card-body morenotes"> '+ phonicsApp.lessons[i].LO_info[j].answerKey +' </div> </div> </div> </div></div>'));
              }

            // Genera el contenido de Chant
            for (let k = 0; k < phonicsApp.lessons[i].chant.length; k++) {
                $('#chantScreen').append($('<div class="col-6 "> <div class="p-1"> <p class="activityTitle">' + phonicsApp.lessons[i].chant[k].title + '</p> <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#chantActivity' + (k + 1) + '"> <img src="assets/images/activities/' + phonicsApp.lessons[i].chant[k].thumbnail + '.jpg" class="img-fluid activityStyle"> </button> <!--MODAL MODIFICADO--> <div class="modal fade" tabindex="-1" id="chantActivity' + (k + 1) + '" tabindex="-1" aria-labelledby="activity1Label" aria-hidden="true"> <div class="modal-dialog modal-fullscreen"> <div class="modal-content"> <div class="modal-header"> <button onclick="deleteLOSource(' + '\'chantIframe' + k + '\',\'' + phonicsApp.lessons[i].chant[k].activity + '\');" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> </div> <div class="modal-body"> <iframe id="chantIframe' + k + '" src="assets/activities/' + phonicsApp.lessons[i].chant[k].activity + '/index.html" width="100%" height="100%" style="border-radius:20px;"></iframe> </div> </div> </div> </div> <!--FIN MODAL MODIFICADO--> </div> <div class="row mt-2"> <div class="col"> <div class="d-inline-flex gap-2"> <a class="btn chantTnBtn" data-bs-toggle="collapse" href="#chantTN' + (k + 1) + '" role="button" aria-expanded="false" aria-controls="chantTN' + (k + 1) + '"> <img src="assets/images/secciones/seccion_tn.png" class="icon"> </a> <a class="btn chantAkBtn" data-bs-toggle="collapse" href="#chantAK' + (k + 1) + '" role="button" aria-expanded="false" aria-controls="chantAK' + (k + 1) + '"> <img src="assets/images/secciones/time.png" class="icon"> </a> </div> <div class="collapse teachernotes align-items-center" id="chantTN' + (k + 1) + '"> <div class="card card-body styleteachers"> ' + phonicsApp.lessons[i].chant[k].teacherNotes + ' </div> </div> <div class="collapse teachernotes align-items-center" id="chantAK' + (k + 1) + '"> <div class="card card-body morenotes"> ' + phonicsApp.lessons[i].chant[k].answerKey + ' </div> </div> </div> </div></div>'));
            }

            //Utilizar para inhabilitar printables en las misiones: if (currentIndex <= 4) {myList[3].style.display = "block";  } else {myList[3].style.display = "none"}
                // Genera el contenido de Printable
                for (let l = 0; l < phonicsApp.lessons[i].printable[0].length; l++) {
                    $('#printablePDF').append($(' <div class="col-9"> <a href="assets/printables/' + phonicsApp.lessons[i].printable[0][l].pdf_source + '.pdf" target="_blank"> <img src="assets/printables/' + phonicsApp.lessons[i].printable[0][l].pdf_source + '.jpg" class="img_printables activityStyle img-fluid"> </a> </div>  '));
                }

                for (let m = 0; m < phonicsApp.lessons[i].printable[1].length; m++) {
                    switch (phonicsApp.lessons[i].printable[1][m].kind) {
                        case "mp3":
                            $('#printableTracks').append($(' <div class="col-6 d-inline-flex p-1"> <audio controls download src="assets/printables/' + phonicsApp.lessons[i].printable[1][m].track_source + '.mp3"></audio> <a href="assets/printables/' + phonicsApp.lessons[i].printable[1][m].track_source + '.mp3" class="track" download> <img src="assets/images/btns/btn_download2.svg" class="down"> ' + phonicsApp.lessons[i].printable[1][m].track + ' </a> </div>'));
                            break;
                        case "zip":
                            $('#printableTracks').append($(' <div class="col-6 d-inline-flex p-1"> <a href="assets/printables/' + phonicsApp.lessons[i].printable[1][m].track_source + '.zip" class="track"  download> <img src="assets/images/btns/btn_download.svg" class="down img-fluid" > All tracks </a> </div>'));
                            break;
                    }
                }
          
        }
        
    }
}

// Primer Modal: Fade in
// window.addEventListener("load", () => {
//     mainModal.style.opacity = "1";
//     modalBackground.classList.add("show");
// });

// Primer Modal: Aparece el primer modal
function appearFirstModal(){
    mainModal.style.opacity = "1";
    modalBackground.classList.add("show");
}

if(document.cookie.includes("seen") === true){
    appearHomePage();
} else{
    appearFirstModal();
}

function appearMainVideo() {
    mainModal.style.visibility = "visible";
    mainModal.style.opacity = "1";
    modalBackground.style.visibility = "visible";
    modalBackground.classList.add("show");

    mainScreen.style.visibility = "hidden";
    mainScreen.style.opacity = "0";

    mainFooter.style.visibility = "hidden";
    mainFooter.style.opacity = "0";
}

mainVideoButton.addEventListener("click", () => {
    console.log("video button");
    appearMainVideo();
});

function appearHomePage() {
    mainModal.style.visibility = "hidden";
    mainModal.style.opacity = "0";
    modalBackground.style.visibility = "hidden";
    modalBackground.classList.remove("show");

    mainScreen.style.visibility = "visible";
    mainScreen.style.opacity = "1";

    mainFooter.style.visibility = "visible";
    mainFooter.style.opacity = "1";

    $("#mainVideoPanel").children("video").get(0).pause();
    $("#mainVideoPanel").children("video").get(0).currentTime = 0;
    $("#mainVideoPanel").children("video").get(0).load();
}

//element == clase en pantalla
function fadeIn(element){
    if(element == slider){
        element.style.display = "flex";
        setTimeout(() => {
            element.style.opacity = "1";
          }, 100);    
    } else {
        element.style.display = "block";
        setTimeout(() => {
            element.style.opacity = "1";
          }, 100);    
    }
}

function fadeOut(element){
    element.style.display = "none";
    element.style.opacity = "0";
}

function appearScreen(disappear, appear) {
    fadeOut(disappear);
    fadeIn(appear);
}


// Botón cerrar primer modal: Cierra modal y muestra página inicio
xFirstModal.addEventListener("click", () => {

    // Asigna valor a la cookie si aun no lo tiene
    if(document.cookie.includes("seen") === false){
        date.setTime(date.getTime() + (3 * 24 * 60 * 60 * 1000));
        document.cookie = "video=seen; expires="+date.toUTCString()+";";
    }
    scrollToTop();
    appearHomePage();
});


// Botón letter locker en página principal: Muestra pantalla locker letters
enterLetter.addEventListener("click", () => {
    console.log("Enter button");
    // Esconde página inicial y muestra el letter locker
    appearScreen(mainScreen, letterLocker);
    scrollToTop();
});

// Botón Home pantalla letter locker: regresa a la pantalla principal
ltrLkrHomeButton.addEventListener("click", () => {
      // Esconde el letter locker y muestra pantalla inicial
     appearScreen(letterLocker, mainScreen);
     scrollToTop();
     changeLetterLockerCard(currentletLockCard);
});

logoLetLock.addEventListener("click", () => {
    // Esconde el letter locker y muestra pantalla inicial
   appearScreen(letterLocker, mainScreen);
   scrollToTop();
   changeLetterLockerCard(currentletLockCard);
});

// Botón enter en página principal: Muestra la pantalla de misiones
enterButton.addEventListener("click", () => {
    console.log("Enter button");
    // Esconde página inicial
    fadeOut(mainScreen);
    scrollToTop();
    // Muestra las misiones
    fadeIn(missionScreen);
});


// Botón Home pantalla tarjetas de misiones: regresa a la pantalla principal
msHomeButton.addEventListener("click", () => {
    appearScreen(missionScreen, mainScreen);
    scrollToTop();
});

logoMissionScreen.addEventListener("click", () => {
    appearScreen(missionScreen, mainScreen);
    scrollToTop();
});

// Indices del slide: llama función para desplazar slide
for (let i = 0; i < buttonIndex.length; i++) {

    // si se necesita para preproduccion: crear if hasta donde se necesite 
// if (i <= 3){}
    buttonIndex[i].addEventListener("click", () => {
        if (currentIndex !== i + 1) {
            selectedIndex = i + 1;

            selectMovement();
        }
    });

}


function backgroundSlider(sliderIndex) {
  slider.style.backgroundImage = 'url("assets/images/misiones/mission_'+ sliderIndex +'.jpg")';
}


// Carta misión: abre su slide - mundos
for (let i = 0; i < mission.length; i++) {
    // si se necesita para preproduccion: crear if hasta donde se necesite con filtro grayscale(100)
    // if (i <= 3){
    // }else{
    //     mission[i].style.filter = "grayscale(100)";
    //     mission[i].children[0].classList.remove("brillo");
    //     mission[i].children[1].style.cursor = "auto";
    // }

    mission[i].addEventListener("click", () => {
        fadeOut(missionScreen);
        selectedIndex = i + 1;
        currentIndex = i + 1;
        showHideArrows();
        phonemeSlide[currentIndex - 1].style.display = "none";
        phonemeSlide[selectedIndex - 1].style.display = "block";
        backgroundSlider(selectedIndex);
        fadeIn(slider);
        scrollToTop();
        //VALIDA INFORMACION POR MISSION
        validaMissionContent(selectedIndex);
        // liquid.style.height =  mainModal.offsetHeight + "px";
        buttonIndex[i].querySelector(".nav-link").classList.add("selectedInx");
       
    });
}

// Automatiza las actividades de Tricky Words
for (let i = 0; i < trickySign.length; i++) {
    trickySign[i].addEventListener("click", () => {
        $("#trickyPanel").empty();
        for (let j = 0; j < missions[currentIndex - 1].trickyWords.length; j++) {
            $("#trickyPanel").append($('<div class="col-6 d-flex flex-column align-items-center"> <div class="p-1"> <p class="activityTitle">'+ missions[currentIndex - 1].trickyWords[j].title +'</p> <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#trickyActivity'+(j+1)+'"> <img src="assets/images/activities/'+ missions[currentIndex - 1].trickyWords[j].thumbnail + '.jpg" class="img-fluid activityStyle activityStyle"> </button> <!--MODAL MODIFICADO--> <div class="modal fade" tabindex="-1" id="trickyActivity'+(j+1)+'" tabindex="-1" aria-labelledby="activity1Label" aria-hidden="true"> <div class="modal-dialog modal-fullscreen"> <div class="modal-content"> <div class="modal-header"> <button onclick="deleteLOSource('+'\'tryickyIframe'+j+'\',\''+missions[currentIndex - 1].trickyWords[j].activity+'\');" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> </div> <div class="modal-body"> <iframe id="tryickyIframe'+j+'" src="assets/activities/'+ missions[currentIndex - 1].trickyWords[j].activity + '/index.html" width="100%" height="100%" style="border-radius:20px;"></iframe> </div> </div> </div> </div> <!--FIN MODAL MODIFICADO--> </div><div class="row mt-2"> <div class="col"> <div class="d-inline-flex gap-2"> <a class="btn trickyTnBtn" data-bs-toggle="collapse" href="#trickyTN'+(j+1)+'" role="button" aria-expanded="false" aria-controls="trickyTN'+(j+1)+'"> <img src="assets/images/secciones/seccion_tn.png" class="icon"> </a> <a class="btn trickyAkBtn" data-bs-toggle="collapse" href="#trickyAK'+(j+1)+'" role="button" aria-expanded="false" aria-controls="trickyAK'+(j+1)+'"> <img src="assets/images/secciones/time.png" class="icon"> </a> </div> <div class="collapse teachernotes align-items-center" id="trickyTN'+(j+1)+'"> <div class="card card-body styleteachers"> '+ missions[currentIndex - 1].trickyWords[j].teacherNotes +' </div> </div> <div class="collapse teachernotes align-items-center" id="trickyAK'+(j+1)+'"> <div class="card card-body morenotes"> '+ missions[currentIndex - 1].trickyWords[j].answerKey +' </div> </div> </div> </div></div>'));
        }
        fadeOut(slider);
        scrollToTop();
        fadeIn(trickyScreen);
    });
}
// Botón back pantalla tricky: Regresa al slider
backTricky.addEventListener("click", () => { 
    validaMissionContent(currentIndex);
    fadeOut(trickyScreen);
    scrollToTop();
    fadeIn(slider);
});


// Botón home pantalla tricky: Regresa a la página de inicio
trickyHomeButton.addEventListener("click", () => {
    buttonIndex[currentIndex - 1].querySelector(".nav-link").classList.remove("selectedInx");
    phonemeSlide[currentIndex - 1].style.display = "none";
    appearScreen(trickyScreen,mainScreen);
    scrollToTop();
});

// Logo pantalla tricky: Regresa a la página de inicio
logoTrickyScreen.addEventListener("click", () => {
    buttonIndex[currentIndex - 1].querySelector(".nav-link").classList.remove("selectedInx");
    phonemeSlide[currentIndex - 1].style.display = "none";
    appearScreen(trickyScreen,mainScreen);
    scrollToTop();
});


// Automatiza las actividades de Blending
for (let i = 0; i < blendingSign.length; i++) {
    blendingSign[i].addEventListener("click", () => {
        $("#blendingPanel").empty();
        for (let j = 0; j < missions[currentIndex - 1].blending.length; j++) {
            $("#blendingPanel").append($('<div class="col-6 d-flex flex-column align-items-center"> <div class="p-1"> <p class="activityTitle">'+ missions[currentIndex - 1].blending[j].title +'</p> <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#blendingActivity'+(j+1)+'"> <img src="assets/images/activities/'+ missions[currentIndex - 1].blending[j].thumbnail +'.jpg" class="img-fluid activityStyle"> </button> <!--MODAL MODIFICADO--> <div class="modal fade" tabindex="-1" id="blendingActivity'+(j+1)+'" tabindex="-1" aria-labelledby="activity1Label" aria-hidden="true"> <div class="modal-dialog modal-fullscreen"> <div class="modal-content"> <div class="modal-header"> <button onclick="deleteLOSource('+'\'blendingIframe'+j+'\',\''+missions[currentIndex - 1].blending[j].activity+'\');" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> </div> <div class="modal-body"> <iframe id="blendingIframe'+j+'" src="assets/activities/'+ missions[currentIndex - 1].blending[j].activity + '/index.html" width="100%" height="100%" style="border-radius:20px;"></iframe> </div> </div> </div> </div> <!--FIN MODAL MODIFICADO--> </div><div class="row mt-2"> <div class="col"> <div class="d-inline-flex gap-2"> <a class="btn blendingTnBtn" data-bs-toggle="collapse" href="#blendingTN'+(j+1)+'" role="button" aria-expanded="false" aria-controls="blendingTN'+(j+1)+'"> <img src="assets/images/secciones/seccion_tn.png" class="icon"> </a> <a class="btn blendingAkBtn" data-bs-toggle="collapse" href="#blendingAK'+(j+1)+'" role="button" aria-expanded="false" aria-controls="blendingAK'+(j+1)+'"> <img src="assets/images/secciones/time.png" class="icon"> </a> </div> <div class="collapse teachernotes align-items-center" id="blendingTN'+(j+1)+'"> <div class="card card-body styleteachers"> '+ missions[currentIndex - 1].blending[j].teacherNotes +' </div> </div> <div class="collapse teachernotes align-items-center" id="blendingAK'+(j+1)+'"> <div class="card card-body morenotes"> '+ missions[currentIndex - 1].blending[j].answerKey +' </div> </div> </div> </div></div>'));
        }
        fadeOut(slider);
        scrollToTop();
        fadeIn(blendingScreen);
    });
}
// Botón back pantalla blending: Regresa al slider
backBlending.addEventListener("click", () => { 
    validaMissionContent(currentIndex);
    appearScreen(blendingScreen, slider);
    scrollToTop();
});


// Botón home pantalla tricky: Regresa a la página de inicio

blendingHomeButton.addEventListener("click", () => {
    buttonIndex[currentIndex - 1].querySelector(".nav-link").classList.remove("selectedInx");
    phonemeSlide[currentIndex - 1].style.display = "none";
    appearScreen(blendingScreen, mainScreen);
    scrollToTop();
});

logoBlendingScreen.addEventListener("click", () => {
    buttonIndex[currentIndex - 1].querySelector(".nav-link").classList.remove("selectedInx");
    phonemeSlide[currentIndex - 1].style.display = "none";
    appearScreen(blendingScreen, mainScreen);
    scrollToTop();
});


function backMission(numMission){
    
    if (letLockPB == true){
        phonemeSlide[currentIndex - 1].style.display = "none";
        phonemeSlide[selectedIndex- 1].style.display = "block";
        showHideArrows();
        buttonIndex[selectedIndex - 1].querySelector(".nav-link").classList.add("selectedInx");
    }
    fadeOut(cardScreen[0]);
    backgroundSlider(selectedIndex);
    fadeIn(slider);

    letLockPB = false;
    validaMissionContent(numMission)

}



// Back Arrow pantalla Slider: regresa a la pantalla de misiones
backArrow.addEventListener("click", () => {
    phonemeSlide[currentIndex - 1].style.display = "none";
    buttonIndex[currentIndex - 1].querySelector(".nav-link").classList.remove("selectedInx");
    fadeOut(slider);
    scrollToTop();
    fadeIn(missionScreen);
}); 


// Botón Home pantalla Slider: regresa a la pantalla principal
homeButton.addEventListener("click", () => {
    console.log("Home button");
      // Esconde presentación de tarjetas y reinicia valores 
      buttonIndex[currentIndex - 1].querySelector(".nav-link").classList.remove("selectedInx");
      fadeOut(slider);
      phonemeSlide[currentIndex - 1].style.display = "none";
      /*for (let i = 0; i < cardsSlide.length; i++) {
          cardsSlide[i].style.transition = "transform 0s";
          cardsSlide[i].style.transform = "translateX(-" + distance + "px)";
      }
      selectedIndex = 1;
      currentIndex = 1;*/
      scrollToTop();
    // Muestra página inicial
    fadeIn(mainScreen);

});

logoSliderScreen.addEventListener("click", () => {
    console.log("Home button");
      // Esconde presentación de tarjetas y reinicia valores 
      buttonIndex[currentIndex - 1].querySelector(".nav-link").classList.remove("selectedInx");
      fadeOut(slider);
      phonemeSlide[currentIndex - 1].style.display = "none";
      scrollToTop();
    // Muestra página inicial
    fadeIn(mainScreen);
});


// Genera arreglos con numeros al azar, cada uno con un rago específico para generar colores con rgb
function colorGeneretor1(){
    colors1 = [Math.floor(Math.random() * (255 - 170 + 1)) + 170, Math.floor(Math.random() * (140 - 100 + 1)) + 100, Math.floor(Math.random() * (255 - 200 + 1)) + 200];
    colors2 = [Math.floor(Math.random() * (255 - 170 + 1)) + 170, Math.floor(Math.random() * (140 - 100 + 1)) + 100, Math.floor(Math.random() * (255 - 200 + 1)) + 200];
    colors3 = [Math.floor(Math.random() * (255 - 170 + 1)) + 170, Math.floor(Math.random() * (140 - 100 + 1)) + 100, Math.floor(Math.random() * (255 - 200 + 1)) + 200];
   // Se genera un orden al azar de los numeros rgb para tener mas combinaciones
    shuffle(colors1);
    shuffle(colors2);
    shuffle(colors3);
}


// Reacomoda al azar los arreglos de colores
function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};


// Genera la transiciòn de las slides
function moveSlides(side) {
    //Colorea indice actual y pasado
    buttonIndex[currentIndex - 1].querySelector(".nav-link").classList.remove("selectedInx");
    buttonIndex[selectedIndex - 1].querySelector(".nav-link").classList.add("selectedInx");
    // Crea los numeros rgb para el fondo de las slides y el div liquid que pasa sobre ellas
    colorGeneretor1();
    liquid.style.background =  "linear-gradient(45deg, rgba(" + colors1[0] + "," + colors1[1] +"," + colors1[2] + "," + "1), rgba(" + colors2[0] +"," + colors2[1] + "," + colors2[2] + "," + "1) , rgba(" + colors3[0] +"," + colors3[1] +"," + colors3[2] + "," + "1))";
    // Mantiene al div liquid del tamaño del body
    // liquid.style.width = slider.offsetWidth + "px";
    liquid.style.height = body.offsetHeight + "px";
    // Agrega clase para activar animación de div liquid
    liquid.style.display = "block";
    liquid.classList.add(side);
   

    // Delay para permitir la animación antes de otro cambio en el slider
    
    setTimeout(() => {
        backgroundSlider(selectedIndex);
        phonemeSlide[currentIndex - 1].style.display = "none";
        scrollToTop();
        phonemeSlide[selectedIndex - 1].style.display = "block";
        liquid.style.height = body.offsetHeight + "px";
        //$(".phonemeSlide:eq("+currentIndex+")").css("display","none");
        // Muestra flechas dependiendo del slide en donde estemos
        showHideArrows();
        //$(".phonemeSlide:eq("+selectedIndex+")").css("display","block");
        validaMissionContent(selectedIndex);
        currentIndex = selectedIndex;
        // slider.style.background = "radial-gradient(circle, rgba("  + colors3[1] + "," + colors3[2] +"," + colors3[0] + ",1)12%, rgba(" + colors1[2] + "," + colors1[0] +"," + colors1[1] + ",1)33%, rgba(" + colors2[2] + "," + colors2[1] +"," + colors2[0]  + ",1)83%)";
        setTimeout(() => {
            //validaMissionContent(selectedIndex)
            // Desabilita flechas y botones indice para permitir terminar la animación antes de pasar a otro slide
            nextArrow.disabled = false;
            previousArrow.disabled = false;
            auxiliarModal.style.display = "none";
            // Desaparece div liquid
            liquid.classList.remove(side);
            liquid.style.display = "none";
            // liquid.style.background = "transparent";
        }, 1001);
    }, 900);
}


// Detecta la flecha en la que se da clic
function identifyArrow(arrow){
    if (arrow == "next") {
        selectedIndex++;
        while (mission_selection[selectedIndex-1].dataset.status  == "disabled") {
            selectedIndex++;
        }
    } 
    else if (arrow == "previous"){
        selectedIndex--;
        while (mission_selection[selectedIndex-1].dataset.status  == "disabled") {
            selectedIndex--;
        }
    }
   
    if(selectedIndex == phonemeSlide.length + 1){selectedIndex = 1;}
    else if (selectedIndex == 0){selectedIndex = phonemeSlide.length}
    // Selecciona la animación de div liquid
    selectMovement();
}


// Aplica clase a div liquid para comenzar la animación
function selectMovement(){
    // Acitva modal para evitar interrupcion en la animación
    auxiliarModal.style.display = "block";

    if (counter == 4) { counter = 0; }
    if (counter == 0) {
        moveSlides("leftLiquid");
        counter++;
    } else if (counter == 1) {
        moveSlides("rightLiquid");
        counter++;
    } else if (counter == 2) {
        moveSlides("downLiquid");
        counter++;
    } else if (counter == 3) {
        moveSlides("upLiquid");
        counter++;
    }
}


// Muestra o esconde flechas dependiendo el slide
// Para preproduccion: Cambiar en else if (selectedIndex == buttonIndex.length), buttonIndex.length por el numero que se necesite
function showHideArrows(){ 
    if (parseInt(mission_selection[selectedIndex - 1].dataset.position) == 1 && parseInt(mission_selection[selectedIndex - 1].dataset.position) == enabled_counter) {
        previousBar.style = "display:none;"
        previousBar.classList.remove("hoverBar");
        nextBar.style = "display:none;";
        nextBar.classList.remove("hoverBar");
    } else if (parseInt(mission_selection[selectedIndex - 1].dataset.position) == 1) {
        previousBar.style = "display:none;"
        nextBar.style = "display:flex;";
        previousBar.classList.remove("hoverBar");
    } else if (parseInt(mission_selection[selectedIndex - 1].dataset.position) == mission.length || parseInt(mission_selection[selectedIndex - 1].dataset.position) == enabled_counter) {
        nextBar.style = "display:none;";
        previousBar.style = "display:flex;";
        nextBar.classList.remove("hoverBar");
    }  else {
        previousBar.style = "display:flex;";
        nextBar.style = "display:flex;";
        previousBar.classList.add("hoverBar");
        nextBar.classList.add("hoverBar");
    }
}


// Da función a la flecha next
nextBar.addEventListener('click', () => {
    nextBar.disabled = true;
    previousBar.disabled = true;
    identifyArrow("next");
});


// Da función a la flecha previous
previousBar.addEventListener('click', () => {
    nextBar.disabled = true;
    previousBar.disabled = true;
    identifyArrow("previous");
});



//ABRE EL PHONEMA EN PANTALLA COMPLETA CON COMPONENTES
function openCardScreen(cardIndex) {
    fadeOut(slider);
    //muestra pantalla general
    fadeIn(cardScreen[0]);
    //contruir pantalla
    construyePaginaPhonema(cardIndex);
    toggleable[0].style.width = graph[0].offsetWidth + "px";
    toggleable[0].style.height = graph[0].offsetHeight + "px";
}

// Regresa por defecto a la opcion new sound y panel con video
function resetToNewSound() {
    for(let i = 0; i < graphModalOption.length; i++){
        if (i == 0){
            if(graphModalOption[i].classList.contains("active") == false){
                graphModalOption[i].classList.add("active");
                graphModalPanel[i].classList.add("show");
                graphModalPanel[i].classList.add("active");
            }
        } else {
            graphModalOption[i].classList.remove("active");
            graphModalPanel[i].classList.remove("show");
            graphModalPanel[i].classList.remove("active");
        }
    }
}

// Botón back pantalla fonema: Regresa al slider
xCardScreen.addEventListener("click", () => { 
    if (letLockPB == true){
        phonemeSlide[currentIndex - 1].style.display = "none";
        phonemeSlide[selectedIndex - 1].style.display = "block";
        showHideArrows();
        // liquid.style.width = slider.offsetWidth + "px";
        // liquid.style.height =  mainModal.offsetHeight + "px";
        buttonIndex[parseInt(letLockIndex)].querySelector(".nav-link").classList.add("selectedInx");
    }
    fadeOut(cardScreen[0]);
    scrollToTop();
    fadeIn(slider);
    stopPhonemeVideo();
    stopPrintableAudio();

    // Regresa por defecto a la opcion new sound y panel con video
    resetToNewSound();

    letLockPB = false;
});


// Botón home pantalla fonema: Regresa a la página de inicio
for(let i = 0; i < csHomeButton.length; i++){
csHomeButton[i].addEventListener("click", () => { 
    buttonIndex[currentIndex - 1].querySelector(".nav-link").classList.remove("selectedInx");
    phonemeSlide[currentIndex - 1].style.display = "none";
    appearScreen(cardScreen[i], mainScreen);
    scrollToTop();
    stopPhonemeVideo();
    stopPrintableAudio();
    resetToNewSound();
});
}

logoLessonScreen.addEventListener("click", () => {
    buttonIndex[currentIndex - 1].querySelector(".nav-link").classList.remove("selectedInx");
    phonemeSlide[currentIndex - 1].style.display = "none";
    appearScreen(cardScreen[0], mainScreen);
    scrollToTop();
    stopPhonemeVideo();
    stopPrintableAudio();
    resetToNewSound();
});


// Mantiene el tamaño correcto del div que hace transición al dar clic en el botón toggle
window.addEventListener("resize", () => {
    toggleable[0].style.width = graph[0].offsetWidth + "px";
    toggleable[0].style.height = graph[0].offsetHeight + "px";
});


// Botón toggle: Activa transición y produce el cambio de imagen de grafema a fonema
function toggleGraphPhon(){
    switch (change) {
        case 0:
            phon[0].disabled = true;
            toggleable[0].style.backgroundColor = "#dddddd";
            toggleable[0].style.left = "50%";

            graph[0].classList.remove("chosen");
            fadeIn(phonemeToggle[0]);
            fadeOut(graphemeToggle[0]);
            setTimeout(() => {
                phon[0].classList.add("chosen");
                toggleable[0].style.backgroundColor = "transparent";
                graph[0].disabled = false;
               
            }, 301);

            change = 1;
            break;
        case 1:
            resetTogButton("normal");
            break;
    }
}


// Opciones en botón toggle: Acción al dar clic en grafema o fonema 
graph[0].addEventListener("click", () => {
  toggleGraphPhon();
});

phon[0].addEventListener("click", () => {
    toggleGraphPhon();
  });

// Letter Locker Card play button: Detiene audio
function stopAudio(selectedAudio){
    phonicsApp.lessons[selectedAudio].audio.pause();
    phonicsApp.lessons[selectedAudio].audio.currentTime = 0;
}

// Letter Locker Letters: Regresa a la normalidad el color y el grafema
function changeLetterLockerCard(selectedNumber){
    letterlocket[selectedNumber].classList.remove("clicked");
    grapHover[selectedNumber].classList.remove("noclicked");
    phoneHover[selectedNumber].classList.remove("filterHueMinus90");
    phoneHover[selectedNumber].classList.add("noclicked");
    letLockPlayButton[selectedNumber].classList.remove("filterHueMinus90");
    stopAudio(selectedNumber);

}

// Locker letters: Efecto hover y touch en tarjetas de grafema y fonema
function eventosGrafema(){

    // Carta fonema grafema: Activa efecto click en la carta
    for (let i = 0; i < phonicsApp.lessons.length; i++) {
       
 // si se necesita para preproduccion: crear if hasta donde se necesite con filtro grayscale(100)
//  if (i <= 26){} else{
//     letterlocket[i].style.filter = "grayscale(100)";
// }
        letterlocket[i].addEventListener('click', () => {
            switch (letterlocket[i].classList.contains("clicked")) {
                case true:
                    console.log("case true: " + selectedletLockCard);
                    selectedletLockCard = i;
                    changeLetterLockerCard(selectedletLockCard);
                    currentletLockCard = i;

                    break;

                case false:
                    selectedletLockCard = i;
                    console.log("case false: " + selectedletLockCard);
                    letterlocket[selectedletLockCard].classList.add("clicked");
                    grapHover[selectedletLockCard].classList.add("noclicked");
                    phoneHover[selectedletLockCard].classList.add("filterHueMinus90");
                    phoneHover[selectedletLockCard].classList.remove("noclicked");
                    letLockPlayButton[selectedletLockCard].classList.add("filterHueMinus90");
                    phonicsApp.lessons[selectedletLockCard].audio.play();
                    if (selectedletLockCard !== currentletLockCard && currentletLockCard !== false) {
                        changeLetterLockerCard(currentletLockCard);

                    }
                    currentletLockCard = i;

                    break;

            }


        });
    }


    // SALTO DEL LETTERLOCKER AL PHONEMA
    for (let i = 0; i < phonicsApp.lessons.length; i++) {
        // si se necesita para preproduccion: crear if hasta donde se necesite
        // if (i <= 26){}
        letLockPlayButton[i].addEventListener('click', (event) => {
            event.stopPropagation();
            stopAudio(i);
            fadeOut(letterLocker);
            // Indica que se accede a la pantalla del fonema desde el letter locker
            letLockPB = true;
            // Asigna el numero del slide que se mostrara al regresar al slider
            letLockIndex = parseInt(letLockPlayButton[i].dataset.phoneindex);
            selectedIndex = phonicsApp.lessons[i].mission;
            currentIndex = phonicsApp.lessons[i].mission;
            scrollToTop();
            fadeIn(cardScreen[0]);
            if (currentletLockCard !== false) {
                changeLetterLockerCard(currentletLockCard);
            }
            //NUMERO DE LESSION
            construyePaginaPhonema((letLockIndex + 1));
        });

    }
}


    ///CONSTRUYE LETTERlocker
    for(let i=0; i<phonicsApp.lessons.length; i++){
        //console.log(phonicsApp.lessons[0].mission);
        $('.displayLetter').append($('<div class="col-lg-1 col-md-3 col-sm-12 letterlocket m-3" data-mission="'+phonicsApp.lessons[i].mission+'"><span class="img_letter"><img src="assets/grapheme/lesson_'+(i+1)+'.png" class="img-fluid grapHover"> <img src="assets/ejemplos/ejemplo'+(i+1)+'.png" class="img-fluid phoneHover noclicked"></span><div class="center"><img src="assets/images/btns/btn_lockernext.svg" class="icons_letter letLockPlayButton" data-phoneindex="'+(i)+'"></div></div>'));
    }
    eventosGrafema()


// Selector de misiones

// Logo en Selector Misiones: Regresa a la pagina de inicio
// logoMissionSelector.addEventListener("click", () => {
//     appearScreen(missionSelector, mainScreen);
//     scrollToTop();
// });

// Back Arrow Selector Misiones: regresa a la pantalla de misiones
backArrow_MS.addEventListener("click", () => {
    appearScreen(missionSelector, missionScreen);
    scrollToTop();
}); 
  
// Botón Selector de misiones: Abre pantalla para seleccionar misiones
mission_selector_btn.addEventListener("click", () => {
    appearScreen(missionScreen, missionSelector);
    scrollToTop();
});

// Carta misión: habilita o deshabilita el contenido de una mision
for (let i = 0; i < mission_selection.length; i++) {

    mission_selection[i].addEventListener("click", () => {

            switch (mission_selection[i].dataset.status) {
                case "enabled":
                    if (oneLeft == true) {
                    // Cambia de color la mision seleccionada
                    mission_selection[i].style.filter = "grayscale(100)";
                    mission_selection[i].style.borderRadius = "25%";
                    mission_selection[i].style.backgroundColor = "black";


                    mission_selection[i].dataset.status = "disabled";

                    // Desaparece la tarjeta y el mundo del slider de la mision seleccionada
                    missionCardContainer[i].style.display = "none";
                    mundo[i].style.display = "none";

                    // Desaparece letras en letter locker de la mision seleccionada
                    for (let j = 0; j < phonicsApp.lessons.length; j++) {
                        if ((letterlocket[j].dataset.mission - 1) == i) {
                            letterlocket[j].style.display = "none";
                        }
                    }
                }
                    break;
                case "disabled":

                    // Regresa color original a la mision seleccionada
                    mission_selection[i].removeAttribute("style");

                    mission_selection[i].dataset.status = "enabled";

                    // Aparece la tarjeta y el mundo del slider de la mision seleccionada
                    missionCardContainer[i].style.display = "block";
                    mundo[i].style.display = "list-item";

                    // Desaparece letras en letter locker de la mision seleccionada
                    for (let j = 0; j < phonicsApp.lessons.length; j++) {
                        if ((letterlocket[j].dataset.mission - 1) == i) {
                            letterlocket[j].style.display = "flex";
                        }
                    }
                    break;
            }
   

        // Inicializa el conteo de las misiones habilitadas
        enabled_counter = 0;
        // Detectan cuantas misiones estan habilitadas y asigna su posicion
        for (j = 0; j < mission_selection.length; j++) {
            if (mission_selection[j].dataset.status == "enabled") {
          
                enabled_counter = enabled_counter + 1;
                mission_selection[j].dataset.oldcounter = mission_selection[j].dataset.position;
                mission_selection[j].dataset.position = "" + enabled_counter + "";
            } else if (mission_selection[j].dataset.status == "disabled") {
                mission_selection[j].dataset.oldcounter = mission_selection[j].dataset.position;
                mission_selection[j].dataset.position = "0";
            }

            if (enabled_counter == 1) {
                if (mission_selection[j].dataset.oldcounter !== "1") {
                    if (mission_selection[j].dataset.position == "1") {
                        $('.show_tutorial_misiones').eq(0).appendTo($(missionCardContainer[j]));
                        $('.tuto_misiones').eq(0).appendTo($(missionCardContainer[j]));
                        $('.estilo3').eq(0).appendTo($(missionCardContainer[j]));
                    }
                }
            }
        }

        if (enabled_counter < 2){
            oneLeft = false;
        } else {
            oneLeft = true;
        }
        
    });
}