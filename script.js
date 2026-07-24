// ===============================
// LOADING SCREEN
// ===============================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if(loader){
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            },500);
        }

    },2000);

});




// ===============================
// TYPING EFFECT
// ===============================


const text = "Syed Awsaf Zarif";

let index = 0;


function typing(){

    const typingElement = document.getElementById("typing");


    if(typingElement && index < text.length){

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typing,100);

    }

}


window.addEventListener("load", typing);





// ===============================
// DARK / LIGHT MODE
// ===============================


const themeButton = document.getElementById("theme");


if(themeButton){


    // Remember theme

    if(localStorage.getItem("theme") === "light"){

        document.body.classList.add("light");

    }



    themeButton.onclick = () => {


        document.body.classList.toggle("light");


        if(document.body.classList.contains("light")){

            localStorage.setItem("theme","light");

        }

        else{

            localStorage.setItem("theme","dark");

        }


    };


}






// ===============================
// MUSIC PLAYER
// ===============================


const musicButton = document.getElementById("music");

const music = document.getElementById("song");



if(musicButton && music){


musicButton.onclick = () => {


    if(music.paused){


        music.play();


        musicButton.innerHTML =
        '<i class="fa-solid fa-stop"></i> Stop Music';


    }


    else{


        music.pause();


        musicButton.innerHTML =
        '<i class="fa-solid fa-music"></i> Play Music';


    }


};



}







// ===============================
// VISITOR COUNTER
// ===============================


const visitor = document.getElementById("visitors");


if(visitor){


    let count = localStorage.getItem("visitors");


    if(!count){

        count = 0;

    }


    count++;


    localStorage.setItem("visitors",count);


    visitor.innerHTML = count;


}







// ===============================
// 3D CARD MOVEMENT
// ===============================


const card = document.querySelector(".card");



if(card){


document.addEventListener("mousemove",(event)=>{


    let x =
    (window.innerWidth / 2 - event.clientX) / 40;


    let y =
    (window.innerHeight / 2 - event.clientY) / 40;



    card.style.transform =
    `
    rotateY(${x}deg)
    rotateX(${y}deg)
    `;


});




document.addEventListener("mouseleave",()=>{


    card.style.transform =
    "rotateY(0deg) rotateX(0deg)";


});


}






// ===============================
// BUTTON GLOW EFFECT
// ===============================


const buttons = document.querySelectorAll(".btn");


buttons.forEach(button=>{


button.addEventListener("mouseenter",()=>{

    button.style.transform="translateX(10px) scale(1.05)";

});


button.addEventListener("mouseleave",()=>{

    button.style.transform="translateX(0) scale(1)";

});


});