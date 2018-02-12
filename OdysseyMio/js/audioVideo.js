
var vid = document.getElementById("vid1");
var enableControls = document.getElementById("btnEn");
var disableControls = document.getElementById("btnDis");
var checkControls = document.getElementById("btnChe");
var playVid = document.getElementById("btn1");
var pauseVid = document.getElementById("btn2");
var changeVid = document.getElementById("btn3");
var forwVid = document.getElementById("btn4");



playVid.onclick = function() {
	vid.play();
};

pauseVid.onclick = function() {
	vid.pause();
};

enableControls.onclick = function() { 
    vid.controls = true;
    vid.load();
}; 

disableControls.onclick = function() { 
    vid.controls = false;
    vid.load();
}; 

checkControls.onclick = function() { 
    alert(vid.controls);
};

changeVid.onclick = function() {

    if (vid.getAttribute("src") == "media/vid2.mp4") {
    vid.setAttribute("src", "media/vid1.mp4");
    vid.load();
    }

    else {
        vid.setAttribute("src", "media/vid2.mp4");
        vid.load();
    }

    

  
};

forwVid.onclick = function(){
    vid.currentTime = 10;
};





vid.onpause = function() {
    alert("The video has been paused");
};

vid.onplay = function() {
    alert("The video has been played");
};

vid.onvolumechange = function() {
    alert("The volumen has been changed");
};










var aud = document.getElementById("aud1");
var play_audio = document.getElementById("btnAud1");
var pause_audio = document.getElementById("btnAud2");

/* function playAud() {
	aud.play();
}

function pauseAud() {
	aud.pause();
} */

play_audio.onclick = function(){
    aud.play();
}

pause_audio.onclick = function(){
    aud.pause();
}
