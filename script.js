
let songIndex = 0;
let audioElement = new Audio("audio/1.mp3");
let masterPlay = document.getElementById("masterPlay"); 
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songs = [
    {songName: "Let me love you", filePath: "audio/1.mp3", coverPath: "assets/1.jpg"},
    {songName: "Let me love you", filePath: "audio/2.mp3", coverPath: "assets/2.jpg"},
    {songName: "Let me love you", filePath: "audio/3.mp3", coverPath: "assets/3.jpg"},
    {songName: "Let me love you", filePath: "audio/4.mp3", coverPath: "assets/4.jpg"},
    {songName: "Let me love you", filePath: "audio/5.mp3", coverPath: "assets/5.jpg"},
    {songName: "Let me love you", filePath: "audio/6.mp3", coverPath: "assets/6.jpg"},
    {songName: "Let me love you", filePath: "audio/7.mp3", coverPath: "assets/7.jpg"},
    {songName: "Let me love you", filePath: "audio/8.mp3", coverPath: "assets/8.jpg"},
    {songName: "Let me love you", filePath: "audio/9.mp3", coverPath: "assets/9.jpg"},
    {songName: "Let me love you", filePath: "audio/10.mp3", coverPath: "assets/10.jpg"},
]

// Handle play / pause

// inserting data via js



masterPlay.addEventListener('click', ()=> {
    if (audioElement.paused || audioElement.currentTime == 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity =1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity =0;
    }
})

// listen to event paly bar
audioElement.addEventListener('timeupdate', ()=> {
    let progress = Math.round(audioElement.currentTime);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value
} )