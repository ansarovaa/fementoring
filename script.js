let sickDays = 6;
let resourceManager = {
  name: "Mikhail Zainullin"
};
let unitManager = {
  name: "Sergey Mikhailyuk"
};
let skillArray = ["Mobile testing ", " Exploratory testing ", " Regression testing "];

let primarySkills = document.getElementById("primary-skills");
let showMessage = document.getElementById("show-message");
let sickLeave = document.getElementById("sick-leave");
let takeSickLeave = document.getElementById("take-sick-leave");
let updateSick = document.getElementById("update-sick");
let showResourceManager = document.getElementById("show-rm");
let showUnitManager = document.getElementById("show-um");
let managers = document.getElementById("managers");
let video = document.getElementById('vid');
let remainingTime = document.getElementById('remainingTime');
let totalTime = document.getElementById('totalTime');
let playPause = document.getElementById('playPause');
let stop = document.getElementById('stop');
let rewind = document.getElementById('rewind');
let begin = document.getElementById('begin');
let end = document.getElementById('end');
let fastForward = document.getElementById('fastForward');
let volume = document.getElementById('volume');
let mute = document.getElementById('mute');
let scrubber = document.getElementById('scrubber');
let playbackRate = document.getElementById('playbackRate');
let TIME_STEP = 5;
let vol = 0;

showMessage.addEventListener("click", function () {
  primarySkills.innerText = skillArray.join();
});

takeSickLeave.addEventListener("click", function () {
  sickDays -= 1;
  sickLeave.innerText = "Available sick days: " + sickDays;
  if (sickDays < 0) {
    sickLeave.innerText = "No sick leave days!";
  }
});

updateSick.addEventListener("click", function () {
  if (sickDays <= 0) {
    sickDays = 6;
    sickLeave.innerText = "Available sick days: " + sickDays;
  }
});

showResourceManager.addEventListener("click", function () {
  managers.innerText = resourceManager.name;
});

showUnitManager.addEventListener("click", function () {
  managers.innerText = unitManager.name;
});

document.getElementById("navigate-gallery").onclick = function () {
  location.href = "gallery.html";
};

document.getElementById("navigate-video-gallery").onclick = function () {
  location.href = "videogallery.html";
};

document.getElementById("navigate-blog-video").onclick = function () {
  location.href = "personalblog.html";
};

document.getElementById("navigate-survey").onclick = function () {
  location.href = "survey.html";
};

let formatTime = function (seconds) {
  seconds = Math.round(seconds);
  let minutes = 0;
  if (seconds >= 60) {
    minutes = Math.floor(seconds / 60);
    seconds = (seconds - (minutes * 60));
  }

  seconds = seconds + '';
  if (seconds.length == 1) {
    seconds = '0' + seconds;
  }

  return minutes + ':' + seconds;
};

let playOrPauseVideo = function () {
  if (video.paused || video.ended) {
    video.play();
    playPause.innerText = 'Pause';
  } else {
    video.pause();
    playPause.innerText = 'Play';
  }
};

video.addEventListener('click', playOrPauseVideo, false);
playPause.addEventListener('click', playOrPauseVideo, false);

stop.addEventListener('click', function () {
  video.pause();
  video.currentTime = 0;
  playPause.innerText = 'Play';
  video.playbackRate = 1;
  playbackRate.value = 1;
}, false);

begin.addEventListener('click', function () {
  video.currentTime = 0;
}, false);

rewind.addEventListener('click', function () {
  video.currentTime -= TIME_STEP;
}, false);

fastForward.addEventListener('click', function () {
  video.currentTime += TIME_STEP;
}, false);

end.addEventListener('click', function () {
  video.currentTime = video.duration;
  playPause.innerText = 'Play';
}, false);

volume.addEventListener('change', function () {
  video.volume = this.value;
}, false);

mute.addEventListener('click', function () {

  if (!video.muted) {
    vol = volume.value;
  }

  video.muted = !video.muted;

  if (video.muted) {
    volume.value = 0;
    mute.innerText = 'Unmute';
  } else {
    volume.value = vol;
    mute.innerText = 'Mute';
  }
}, false);

scrubber.addEventListener('change', function () {
  video.currentTime = this.value;
}, false);

playbackRate.addEventListener('change', function () {
  video.playbackRate = this.value;
}, false);


video.addEventListener('play', function () {
  totalTime.innerText = formatTime(video.duration);
});

video.addEventListener('timeupdate', function () {
  remainingTime.innerText = formatTime(video.currentTime);
  scrubber.value = video.currentTime;
}, false);