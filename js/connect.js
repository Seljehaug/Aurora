
//This is the video we want to monitor
//var vid = document.getElementById('lectureVideo');

//How long the video is in seconds. Eg. "10.026667"
//var duration = document.getElementById('lectureVideo').duration;

//How far the video have played in seconds. Eg. "5.426438"
//var currentTime = document.getElementById('lectureVideo').currentTime;


var vid = document.getElementById('lectureVideo');
var timeStamp = 0;

vid.ontimeupdate = function() {
   "use strict";
   changeImg();
};

// This function change the slide based on how far the video have played
function changeImg() {
   "use strict";
   if (vid.currentTime > 0  && vid.currentTime < 32 && document.getElementById('slides').src !== slides[0]) {
      document.getElementById('slides').src = slides[0];
   } else if (vid.currentTime > 32 && vid.currentTime < 52 && document.getElementById('slides').src !== slides[1]) {
      document.getElementById('slides').src = slides[1];
   } else if (vid.currentTime > 52 && vid.currentTime < 80 && document.getElementById('slides').src !== slides[2]) {
      document.getElementById('slides').src = slides[2];
   } else if (vid.currentTime > 80 && vid.currentTime < 428 && document.getElementById('slides').src !== slides[3]) {
      document.getElementById('slides').src = slides[3];
   } else if (vid.currentTime > 428 && vid.currentTime < 446 && document.getElementById('slides').src !== slides[4]) {
      document.getElementById('slides').src = slides[4];
   } else if (vid.currentTime > 446 && vid.currentTime < 483 && document.getElementById('slides').src !== slides[5]) {
      document.getElementById('slides').src = slides[5];
   } else if (vid.currentTime > 483 && vid.currentTime < 502 && document.getElementById('slides').src !== slides[6]) {
      document.getElementById('slides').src = slides[6];
   } else if (vid.currentTime > 502 && vid.currentTime < 521 && document.getElementById('slides').src !== slides[7]) {
      document.getElementById('slides').src = slides[7];
   } else if (vid.currentTime > 521 && vid.currentTime < 555 && document.getElementById('slides').src !== slides[8]) {
      document.getElementById('slides').src = slides[8];
   }
}

//Keywords change videotime
var firstLink = document.getElementById('first');
firstLink.addEventListener('click', function (event) {
   event.preventDefault();
   vid.play();
   vid.pause();
   vid.currentTime = 3;
   vid.play();
});
var secondLink = document.getElementById('second');
secondLink.addEventListener('click', function (event) {
   event.preventDefault();
   vid.play();
   vid.pause();
   vid.currentTime = 34;
   vid.play();
});
var thirdLink = document.getElementById('third');
thirdLink.addEventListener('click', function (event) {
   event.preventDefault();
   vid.play();
   vid.pause();
   vid.currentTime = 52;
   vid.play();
});
var fourthLink = document.getElementById('fourth');
fourthLink.addEventListener('click', function (event) {
   event.preventDefault();
   vid.play();
   vid.pause();
   vid.currentTime = 80;
   vid.play();
});
var fifthLink = document.getElementById('fifth');
fifthLink.addEventListener('click', function (event) {
   event.preventDefault();
   vid.play();
   vid.pause();
   vid.currentTime = 428;
   vid.play();
});
var sixthLink = document.getElementById('sixth');
sixthLink.addEventListener('click', function (event) {
   event.preventDefault();
   vid.play();
   vid.pause();
   vid.currentTime = 446;
   vid.play();
});
var seventhLink = document.getElementById('seventh');
seventhLink.addEventListener('click', function (event) {
   event.preventDefault();
   vid.play();
   vid.pause();
   vid.currentTime = 483;
   vid.play();
});
var eighthLink = document.getElementById('eighth');
eighthLink.addEventListener('click', function (event) {
   event.preventDefault();
   vid.play();
   vid.pause();
   vid.currentTime = 503;
   vid.play();
});
var ninthLink = document.getElementById('ninth');
ninthLink.addEventListener('click', function (event) {
   event.preventDefault();
   vid.play();
   vid.pause();
   vid.currentTime = 521;
   vid.play();
});


///////IMAGE SWITCH VARS////////
var imageNum=0;
var count=0;
//////////NEXT BUTTON///////////
function next() {
   switchImage();
   next_event();
}
function switchImage()
{
   if(imageNum<slides.length-1)
   {
      imageNum=imageNum+1;
      if(imageNum<slides.length)
      document.getElementById('slides').src=slides[imageNum];
	}
}
function next_event()
{
   if(count<slides.length-1)
   {
      count+=1;
      var video = document.getElementById("lectureVideo");
      video.currentTime = breakpoints[count];
	}
}

/////////PREV BUTTON////////
function prev() {
   prevImage();
   prev_event();
}
function prevImage()
{
   if(imageNum>0)
   {
      imageNum=imageNum-1;
      if(imageNum>=0)
      document.getElementById('slides').src=slides[imageNum];
	}
}
function prev_event()
{
   if(count>0)
   {
      count-=1;
      var video = document.getElementById("lectureVideo");
      video.currentTime = breakpoints[count];
	}
}

//Links to the different slides that we will put in the page
var slides = [
   "img/slides/Lecture3-1.001.jpeg",
   "img/slides/Lecture3-1.002.jpeg",
   "img/slides/Lecture3-1.003.jpeg",
   "img/slides/Lecture3-1.004.jpeg",
   "img/slides/Lecture3-1.005.jpeg",
   "img/slides/Lecture3-1.006.jpeg",
   "img/slides/Lecture3-1.007.jpeg",
   "img/slides/Lecture3-1.008.jpeg",
   "img/slides/Lecture3-1.009.jpeg"
];
//When is the video we want to change slide
var breakpoints = [
   "0",
   "34",
   "52",
   "80",
   "428",
   "446",
   "483",
   "503",
   "521"
];
