let songs = [];
let currentSong = 1;

//---VARIABLES---//
const title     = document.querySelector('h1')
const input     = document.querySelector('input')
const label     = document.querySelector('label')
const player    = document.querySelector('audio')
/*-----------------------------------------------*/
const prev      = document.querySelector('#prev')
const play      = document.querySelector('#play')
const next      = document.querySelector('#next')
/*------------------------------------------------*/

player.volume = 0.4

function getSongs(event){
    songs = event.target.files;
    label.style.display = 'none';
    playSong();
    console.log(songs)
}

console.log(songs)

function playSong(){
    const song = URL.createObjectURL(songs[currentSong - 1])
    title.innerText = songs[currentSong -1].name.slice(0, -4).toUpperCase()
    player.setAttribute('src', song);
    play.innerText = "STOP"
    player.play()
    play.onclick = pause;
}

function playCurrent(){
    play.innerText = "STOP";
    player.play()
    play.onclick = pause;
}

function pause() {
    play.innerText = "PLAY"
    player.pause();
    play.onclick = playCurrent;
}

function nextSong(){
    currentSong++;
    playSong()
}

function prevSong(){
    currentSong--;
    playSong()
}

input.onchange = getSongs
prev.onclick = prevSong
play.onclick = playSong
next.onclick = nextSong




