//window.alert("hii");
var audio=document.querySelector("#outer>audio");
var img=document.querySelector("#outer>img");
var title=document.querySelector("#outer>p");
var songs=[
    {
        "title":"Soulmate...",
        "img":"pehle.webp",
        "audio":"song1.mp3"

    },
    {
        "title":"pehle bhi..",
        "img":"ishq.jpg",
        "audio":"song2.mp3"

    },
    {
        "title":"isq..",
        "img":"soulmate.jpg",
        "audio":"song3.mp3"

    },
          
]
var i=0;
 function aplay(){
    audio.play();
    document.querySelector("#outer>div>i.fa-pause-circle").style.display="inline";
    document.querySelector("#outer>div>i.fa-play-circle").style.display="none";
 }
 function apause(){
    audio.pause();
    document.querySelector('#outer>div>i.fa-pause-circle').style.display="none";
    document.querySelector('#outer>div>i.fa-play-circle').style.display="inline";
 }
 function next(){
    i=i+1;
    if(i>=songs.length){
        i=0;
    }
    console.log
    title.innerHTML=songs[i].title;
    img.src=`img/${songs[i].img}`;
    audio.src=`music/${songs[i].audio}`;
    aplay();

 }
 
 

 
 function pre(){
i=i-1;
if(i<0){

i=songs.length-1;
}
title.innerHTML=songs[i].title;
    img.src=`img/${songs[i].img}`;
    audio.src=`music/${songs[i].audio}`;
 
aplay();
 }


