
const words = [

    {
        sanskrit: "जलम्",
        english: "Water"
    },

    {
        sanskrit: "पुस्तकम्",
        english: "Book"
    },

    {
        sanskrit: "गृहम्",
        english: "House"
    },

    {
        sanskrit: "विद्यालयः",
        english: "School"
    },

    {
        sanskrit: "मित्रम्",
        english: "Friend"
    },

    {
        sanskrit: "सूर्यः",
        english: "Sun"
    },

    {
        sanskrit: "चन्द्रः",
        english: "Moon"
    },

    {
        sanskrit: "वृक्षः",
        english: "Tree"
    },

    {
        sanskrit: "फलम्",
        english: "Fruit"
    },

    {
        sanskrit: "पुष्पम्",
        english: "Flower"
    }

];


let currentWord = 0;

let learnedWords = 0;



function nextWord() {

    currentWord++;

    if (currentWord >= words.length) {

        currentWord = 0;

    }


    document.getElementById("sanskritWord")
        .textContent =
        words[currentWord].sanskrit;


    document.getElementById("wordMeaning")
        .textContent =
        words[currentWord].english;


    learnedWords++;


    if (learnedWords > words.length) {

        learnedWords = words.length;

    }


    let percentage =
        Math.round(
            (learnedWords / words.length) * 100
        );


    document.getElementById("progress")
        .style.width =
        percentage + "%";


    document.getElementById("progressText")
        .textContent =
        percentage + "%";

}



function speak(text) {

    const speech =
        new SpeechSynthesisUtterance(text);


    speech.lang = "hi-IN";


    speech.rate = 0.8;


    window.speechSynthesis.speak(speech);

}


function speakCurrentWord() {

    speak(
        words[currentWord].sanskrit
    );

}


const quizQuestions = [

    {
        question:
            'What is the Sanskrit word for "Water"?',

        options: [
            "जलम्",
            "पुस्तकम्",
            "गृहम्",
            "मित्रम्"
        ],

        answer: "जलम्"
    },


    {
        question:
            'What is the Sanskrit word for "Book"?',

        options: [
            "सूर्यः",
            "पुस्तकम्",
            "वृक्षः",
            "चन्द्रः"
        ],

        answer: "पुस्तकम्"
    },


    {
        question:
            'What is the Sanskrit word for "Friend"?',

        options: [
            "मित्रम्",
            "गृहम्",
            "जलम्",
            "विद्यालयः"
        ],

        answer: "मित्रम्"
    },


    {
        question:
            'What is the Sanskrit word for "Sun"?',

        options: [
            "चन्द्रः",
            "सूर्यः",
            "वृक्षः",
            "गृहम्"
        ],

        answer: "सूर्यः"
    },


    {
        question:
            'What is the Sanskrit word for "Tree"?',

        options: [
            "वृक्षः",
            "पुस्तकम्",
            "मित्रम्",
            "जलम्"
        ],

        answer: "वृक्षः"
    }

];


let currentQuestion = 0;

let score = 0;



function loadQuestion() {

    let q =
        quizQuestions[currentQuestion];


    document.getElementById("questionNumber")
        .textContent =
        "Question " +
        (currentQuestion + 1);


    document.getElementById("question")
        .textContent =
        q.question;


    document.getElementById("quizResult")
        .textContent = "";


    let options =
        document.getElementById("options");


    options.innerHTML = "";


    q.options.forEach(function(option) {

        let button =
            document.createElement("button");


        button.textContent = option;


        button.className = "option";


        button.onclick =
            function() {

                checkAnswer(option);

            };


        options.appendChild(button);

    });

}



function checkAnswer(selected) {

    let correct =
        quizQuestions[currentQuestion].answer;


    if (selected === correct) {

        document.getElementById("quizResult")
            .textContent =
            "✅ Correct! Well done!";


        score++;

    }

    else {

        document.getElementById("quizResult")
            .textContent =
            "❌ Correct answer: " +
            correct;

    }

}



function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion >=
        quizQuestions.length
    ) {

        document.getElementById("question")
            .textContent =
            "Quiz Completed! 🎉";


        document.getElementById("options")
            .innerHTML = "";


        document.getElementById("quizResult")
            .textContent =
            "Your Score: " +
            score +
            "/" +
            quizQuestions.length;


        currentQuestion = 0;

        score = 0;


        return;

    }


    loadQuestion();

}



function scrollToSection(id) {

    document.getElementById(id)
        .scrollIntoView({
            behavior: "smooth"
        });

}


