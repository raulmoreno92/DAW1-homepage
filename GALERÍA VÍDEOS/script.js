var video = document.querySelectorAll('video');
video.forEach(play => play.addEventListener('hover', () =>{
    play.classList.toggle('hover');
    if(play.paused) {
        play.play();
    } else {
        play.pause();
        play.currentTime=0;
    }
}))