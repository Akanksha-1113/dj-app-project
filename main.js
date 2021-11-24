song="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;
song1_status = "";
song12_status = "";

function preload()
{
    song1 = loadSound("music.mp3");
    song2 =loadSound
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(600, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet is Initialized');
}

function play()
{
    song.play();


}

function draw() {
    image(video, 0, 0, 600, 500);

    fill("#42f5cb");
    stroke("#425af5");

    if(scoreRightWrist > 0.2)
    {
        circle(rightWristX, rightWristY, 20);
        song2.stop();
        if(song1_status == false)
        {
            song1.play();
            document.getElementById("song").innerHTML="playing";
        }
    }

    if(scoreleftWrist > 0.2)
    {
        circle(leftWristX, leftWristY, 20);
        song2.stop();
        if(song1_status == false)
        {
            song1.play();
            document.getElementById("song").innerHTML="playing";
        }
    }
}


function gotPoses(results) {
    if (results.length > 0)

    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftwristX = " + leftWristX + " leftWristY = " + leftWristY);


        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightwristX = " + rightWristX + " rightWristY = " + rightWristY);
    }
}