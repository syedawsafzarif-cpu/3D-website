window.onload = function(){

    // Remove loading screen

    setTimeout(()=>{

        document.getElementById("loader").style.display="none";

    },2000);



};






// TYPING EFFECT


let text = "Syed Awsaf Zarif";

let index = 0;


function typing(){

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typing,120);

    }

}


typing();









// THEME SWITCH


const themeButton = document.getElementById("theme");


themeButton.onclick = ()=>{


    document.body.classList.toggle("light");



    if(document.body.classList.contains("light")){

        themeButton.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }

    else{

        themeButton.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }


};










// MUSIC PLAYER


const musicButton = document.getElementById("music");

const song = document.getElementById("song");


let playing = false;



musicButton.onclick = ()=>{


    if(!playing){


        song.play();


        musicButton.innerHTML =
        '<i class="fa-solid fa-pause"></i> Pause Music';


        playing=true;


    }


    else{


        song.pause();


        musicButton.innerHTML =
        '<i class="fa-solid fa-play"></i> Play Music';


        playing=false;


    }


};










// VISITOR COUNTER


let visitors = localStorage.getItem("visitors");


if(visitors == null){

    visitors = 0;

}


visitors++;


localStorage.setItem("visitors",visitors);



let count = 0;


let visitorDisplay =
document.getElementById("visitors");



let counter = setInterval(()=>{


    if(count >= visitors){

        clearInterval(counter);

    }


    else{

        count++;

        visitorDisplay.innerHTML=count;

    }


},50);










// 3D CARD MOUSE MOVEMENT


const card = document.querySelector(".card");



document.addEventListener("mousemove",(e)=>{


    let x =
    (window.innerWidth / 2 - e.clientX) / 30;


    let y =
    (window.innerHeight / 2 - e.clientY) / 30;



    card.style.transform =
    `rotateY(${x}deg) rotateX(${y}deg)`;



});





// RESET CARD WHEN MOUSE LEAVES


card.addEventListener("mouseleave",()=>{


    card.style.transform =
    "rotateY(0deg) rotateX(0deg)";


});