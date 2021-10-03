function Start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HYxRBGMJh/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    console.log(results);
    document.getElementById("HearWhat").innerHTML = "I can hear " + results[0].label
    document.getElementById("Accurcy").innerHTML = "Accuracy " + results[0].confidence;
    A1 = document.getElementById("Alien1");
    A2 = document.getElementById("Alien2");
    A3 = document.getElementById("Alien3");
    A4 = document.getElementById("Alien4");
    if (results[0].label == "Dog") {
        A1.src = 'aliens-01.gif';
        A2.src = 'aliens-02.png';
        A3.src = 'aliens-03.png';
        A4.src = 'aliens-04.png';
    }
    else if (results[0].label == "Cat") {
        A1.src = 'aliens-01.png';
        A2.src = 'aliens-02.gif';
        A3.src = 'aliens-03.png';
        A4.src = 'aliens-04.png';
    }

    else if (results[0].label == "Bird") {
        A1.src = 'aliens-01.png';
        A2.src = 'aliens-02.png';
        A3.src = 'aliens-03.gif';
        A4.src = 'aliens-04.png';
    }

    else {
        A1.src = 'aliens-01.png';
        A2.src = 'aliens-02.png';
        A3.src = 'aliens-03.png';
        A4.src = 'aliens-04.gif';
    }
}

// img = document.getElementById('Alien1')
// img1 = document.getElementById('Alien2')
// img2 = document.getElementById('Alien3')
// img3 = document.getElementById('Alien4')

// if (results[0].label == "Clap") {
//     img.src = 'aliens-01.gif';
//     img1.src = 'aliens-02.png';
//     img2.src = 'aliens-03.png';
//     img3.src = 'aliens-04.png';
// } else if (results[0].label == "Bell") {
//     img.src = 'aliens-01.png';
//     img1.src = 'aliens-02.gif';
//     img2.src = 'aliens-03.png';
//     img3.src = 'aliens-04.png';
// } else if (results[0].label == "Snapping") {
//     img.src = 'aliens-01.png';
//     img1.src = 'aliens-02.png';
//     img2.src = 'aliens-03.gif';
//     img3.src = 'aliens-04.png';
// } else {
//     img.src = 'aliens-01.png';
//     img1.src = 'aliens-02.png';
//     img2.src = 'aliens-03.png';
//     img3.src = 'aliens-04.gif';
// }