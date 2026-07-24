window.onload=function(){

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},2000);



}



// typing effect


let text="Syed Awsaf Zarif";

let i=0;


function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML += text[i];

i++;

setTimeout(typing,100);

}

}


typing();




// theme button


document.getElementById("theme").onclick=function(){

document.body.classList.toggle("light");

};




// music


let music=document.getElementById("song");


document.getElementById("music").onclick=function(){

if(music.paused){

music.play();

this.innerHTML="Stop Music";

}

else{

music.pause();

this.innerHTML="Play Music";

}

};




// visitor counter


let count=localStorage.getItem("visitors") || 0;

count++;

localStorage.setItem("visitors",count);


document.getElementById("visitors").innerHTML=count;



// 3D mouse movement


let card=document.querySelector(".card");


document.addEventListener("mousemove",(e)=>{


let x=(window.innerWidth/2-e.pageX)/30;

let y=(window.innerHeight/2-e.pageY)/30;


card.style.transform=

`rotateY(${x}deg) rotateX(${y}deg)`;


});