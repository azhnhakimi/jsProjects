const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const cover = document.querySelector('#cover')
const title = document.querySelector('#title')
const progressContainer = document.querySelector('.progress-container')
const progress = document.querySelector('.progress')

// List of song names
const songs = ['Read My Mind', 'Reaching', 'Spring Rain']

let songIndex = 0;

// Load song on start up
loadSong(songs[songIndex])

function loadSong(song){
    title.innerText = song;
    cover.src = `images/${song}.jpg`
    audio.src = `music/${song}.mp3`
}

function playSong(){
    musicContainer.classList.add('play')
    let change = playBtn.querySelector('.fas');
    change.classList.remove('fa-play');
    change.classList.add('fa-pause');
    audio.play();
}

function pauseSong(){
    musicContainer.classList.remove('play')
    let change = playBtn.querySelector('.fas');
    change.classList.add('fa-play');
    change.classList.remove('fa-pause');
    audio.pause();
}

function prevSong() {
    if(songIndex === 0){
        songIndex = songs.length 
    }
    songIndex--;
    loadSong(songs[songIndex])

    playSong();

}


function nextSong(){
    songIndex++
    if(songIndex > songs.length - 1){
        songIndex = 0
    }

    loadSong(songs[songIndex])

    playSong();
}

function updateProgress(e){
    let current  = e.currentTarget.currentTime
    let total = e.currentTarget.duration
    let percentage = current / total * 100
    progress.style.width = `${percentage}%`
}

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX;
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}


// Events

playBtn.addEventListener('click', () => {
    let isPlaying = musicContainer.classList.contains('play');
    
    if(isPlaying){
        pauseSong()
    }else{
        playSong()
    }
})


prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)
