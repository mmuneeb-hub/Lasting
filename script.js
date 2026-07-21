function scrollTree(){

document
.getElementById("tree")
.scrollIntoView({

behavior:"smooth"

});

}





function playMusic(){

let music =
document.getElementById("music");


if(music.paused){

music.play();

}

else{

music.pause();

}

}







/* =========================
   SAVE STICKY NOTES
========================= */


let notes =
document.querySelectorAll(".note");



notes.forEach((note,index)=>{


let saved =
localStorage.getItem(
"loveNote"+index
);



if(saved){

note.innerHTML=saved;

}




note.addEventListener(
"input",
()=>{


localStorage.setItem(

"loveNote"+index,

note.innerHTML

);


});


});







/* =========================
   SCROLL ANIMATION
========================= */


let elements =
document.querySelectorAll(
".card,.note,.photos img"
);



function reveal(){


elements.forEach(item=>{


let position =
item.getBoundingClientRect().top;



if(position <
window.innerHeight-100){


item.style.opacity="1";

item.style.transform=
"translateY(0)";


}


});


}



elements.forEach(item=>{


item.style.opacity="0";

item.style.transform=
"translateY(50px)";

item.style.transition=
"1s";


});



window.addEventListener(
"scroll",
reveal
);


reveal();







/* =========================
   FLOATING HEARTS
========================= */


function createHeart(){


let heart =
document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="fixed";

heart.style.bottom="-20px";

heart.style.left=
Math.random()*100+"%";


heart.style.fontSize=
(15+
Math.random()*30)
+"px";


heart.style.zIndex="10";


heart.style.animation=
"heartUp 8s linear";



document.body.appendChild(
heart
);



setTimeout(()=>{

heart.remove();

},8000);


}



setInterval(
createHeart,
1200
);






/* =========================
   FALLING PETALS
========================= */


function createPetal(){


let petal =
document.createElement("div");


petal.className="petal";



petal.style.left =
Math.random()*100+"vw";


petal.style.animationDuration =
(5+
Math.random()*5)
+"s";



document.body.appendChild(
petal
);



setTimeout(()=>{

petal.remove();

},10000);



}



setInterval(
createPetal,
500
);







/* =========================
   TREE GLOW
========================= */


window.addEventListener(
"scroll",
()=>{


let tree =
document.querySelector(".tree");



if(window.scrollY>300){


tree.style.filter=
"drop-shadow(0 0 30px pink)";


}


});






console.log(
"Love website loaded ❤️"
);
/* =========================
PART 6 — MEMORY GALLERY SYSTEM
PASTE AT END OF script.js
========================= */


let galleryImages =
document.querySelectorAll(".photos img");



galleryImages.forEach((image)=>{


image.addEventListener(
"click",
()=>{


let viewer =
document.createElement("div");


viewer.className="image-viewer";


viewer.innerHTML=`

<img src="${image.src}">

<span>✕</span>

`;



document.body.appendChild(
viewer
);



viewer
.querySelector("span")
.onclick=()=>{


viewer.remove();


};



}

);


});








/* =========================
   AUTO MEMORY TEXT EFFECT
========================= */


let ending =
document.querySelector(".ending");



window.addEventListener(
"scroll",
()=>{


let pos =
ending.getBoundingClientRect().top;



if(
pos < window.innerHeight
){


ending.style.opacity="1";


}


});







/* =========================
   PHOTO LOAD EFFECT
========================= */


galleryImages.forEach(
(img,index)=>{


img.style.transition="1s";


img.style.animationDelay=
(index*0.3)+"s";


});






/* =========================
   DOUBLE CLICK HEART
========================= */


document.addEventListener(
"dblclick",
(e)=>{


let heart =
document.createElement("div");



heart.innerHTML="💖";


heart.style.position="fixed";

heart.style.left=
e.clientX+"px";


heart.style.top=
e.clientY+"px";


heart.style.fontSize="50px";

heart.style.zIndex="999";


heart.style.animation=
"heartUp 3s linear";



document.body.appendChild(
heart
);



setTimeout(()=>{

heart.remove();

},3000);



});
/* =========================
PART 8 — FINAL BIRTHDAY ENDING
PASTE AT END OF script.js
========================= */



/* CREATE FIREFLIES */


function createFirefly(){


let firefly =
document.createElement("div");


firefly.className="firefly";


let ending =
document.querySelector(".ending");


if(ending){


ending.appendChild(firefly);


firefly.style.left =
Math.random()*100+"%";


firefly.style.top =
Math.random()*100+"%";


firefly.style.animationDelay =
Math.random()*5+"s";



setTimeout(()=>{

firefly.remove();

},7000);


}



}



setInterval(
createFirefly,
500
);







/* =========================
   BIRTHDAY CONFETTI
========================= */


function birthdayConfetti(){


for(let i=0;i<80;i++){


let piece =
document.createElement("div");



piece.className="confetti";



piece.style.left =
Math.random()*100+"vw";


piece.style.background =
randomColor();



piece.style.animationDelay =
Math.random()*3+"s";



document.body.appendChild(
piece
);



setTimeout(()=>{

piece.remove();

},6000);



}


}



function randomColor(){


let colors=[

"#ff8fb1",

"#ffffff",

"#ffd966",

"#ffb6d9",

"#b8f2e6"

];


return colors[
Math.floor(
Math.random()*colors.length
)
];


}






/* START CONFETTI WHEN ENDING APPEARS */


let endSection =
document.querySelector(".ending");


window.addEventListener(
"scroll",
()=>{


if(!endSection)
return;



let location =
endSection.getBoundingClientRect().top;



if(
location <
window.innerHeight/2
){


birthdayConfetti();


}


});








/* =========================
   TYPING FINAL MESSAGE
========================= */


let message =
document.querySelector(".ending p");



if(message){


let text =
message.innerHTML;


message.innerHTML="";


let count=0;



function typing(){


if(count < text.length){


message.innerHTML +=
text[count];


count++;


setTimeout(
typing,
50
);


}



}



setTimeout(
typing,
1500
);


}







console.log(
"❤️ Valentine website completed"
);