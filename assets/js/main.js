$("document").ready(function() {
/////////////////////////////////////////////////
  SC.initialize({
    client_id: '8ce0fdd82bd55bad9d7d68acb86d9fda',
  });
/////////////////////////////////////////////////
var next = document.getElementsByClassName("next")[0];
var play = document.getElementsByClassName("play")[0];
var pause = document.getElementsByClassName("pause")[0];
var songIdEntryButton = document.getElementById("songIdEntryButton");
var songId = document.getElementById("songId");
//-----------------------------------------------
var title = document.getElementsByClassName("title")[0];
var description = document.getElementsByClassName("description")[0];
var genre = document.getElementsByClassName("genre")[0];
var img = document.getElementsByClassName("img")[0];
/////////////////////////////////////////////////
var myJukeBox = new Jukebox();
/////////////////////////////////////////////////
function Jukebox() {
  this.songs = [];
  this.findAndPlaySong = findAndPlaySong
  this.pauseSong = pauseSong
  this.nextSong = nextSong
  currentSong = 0;
}
function pauseSong() {
  playSong.pause();
}
function nextSong() {
  playSong.track.trackCounter
}
function nextSong() {
  currentSong += 1;
  this.playSong();
}
// function Song(name, fileName, songLength) {
//   this.name = name;
//   this.fileName = fileName;
//   this.songLength = songLength
// }
function playSong() {
  findAndPlaySong();
}
/////////////////////////////////////////////////
trackCounter = 0
trackCounter += 1
/////////////////////////////////////////////////
play.addEventListener("click", function(){
  playSong.play();
})
/////////////////////////////////////////////////
next.addEventListener("click", function(){
  nextSong();
})
/////////////////////////////////////////////////
window.addEventListener("keypress", function(event){
  songName1 = songId.value;
  if (event.keyCode === 13) {
    findAndPlaySong()
  } 
})
/////////////////////////////////////////////////
pause.addEventListener("click", function(){
  playSong.pause();
})
/////////////////////////////////////////////////
// songIdEntryButton.addEventListener("click", function(){
//     songName1 = songId.value;
//     findAndPlaySong();
// })
/////////////////////////////////////////////////
function findAndPlaySong() {
  songName = $("#song-id").val()
    
    SC.get('/tracks', {
      q: songName1
    }).then(function(tracks) {
      console.log(tracks)
      firstTrack = tracks[0]
      title.append(firstTrack.title)
      genre.append(firstTrack.genre)
      imgUrl = (firstTrack.artwork_url)
      img.innerHTML = img.src = imgUrl

        SCStream(firstTrack.id)
    });
}
/////////////////////////////////////////////////
  function SCStream(id) {
    SC.stream('/tracks/' + id).then(function(player){
    playSong = player
    playSong.play()
  });
   }
/////////////////////////////////////////////////







})//document.ready





















