
var vid = document.getElementById("vid1");

function playVid() {
	vid.play();
}

function pauseVid() {
	vid.pause();
}

function enableControls() { 
    vid.controls = true;
    vid.load();
} 

function disableControls() { 
    vid.controls = false;
    vid.load();
} 

function checkControls() { 
    alert(vid.controls);
} 

vid.onpause = function() {
    alert("The video has been paused");
};











var aud = document.getElementById("aud1");

function playAud() {
	aud.play();
}

function pauseAud() {
	aud.pause();
}


