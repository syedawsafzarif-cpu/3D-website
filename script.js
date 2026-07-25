/* =================================
PORTFOLIO V2.0
SYED AWSAF ZARIF
INTERACTIVE JAVASCRIPT
================================= */



// ===============================
// LOADING SCREEN
// ===============================


window.addEventListener("load",()=>{


const loader=document.getElementById("loader");


setTimeout(()=>{


loader.style.opacity="0";


setTimeout(()=>{


loader.style.display="none";


},500);



},1500);



});








// ===============================
// TYPING ANIMATION
// ===============================


const typingText=document.querySelector(".typing");


const words=[

"Frontend Developer",

"Creative Designer",

"Technology Enthusiast",

"Gamer & Creator"

];



let wordIndex=0;

let charIndex=0;

let deleting=false;



function typing(){



let current=words[wordIndex];



if(!deleting){


typingText.textContent=current.substring(
0,
charIndex++
);



if(charIndex>current.length){


deleting=true;


setTimeout(typing,1500);


return;


}



}else{


typingText.textContent=current.substring(
0,
charIndex--
);



if(charIndex===0){


deleting=false;


wordIndex=(wordIndex+1)%words.length;


}



}



setTimeout(typing,deleting?50:100);



}



typing();









// ===============================
// MOUSE GLOW FOLLOW
// ===============================


const glow=document.querySelector(".mouse-glow");



window.addEventListener(
"mousemove",
(e)=>{


glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";


}

);









// ===============================
// THEME SYSTEM
// ===============================


const themeButton=document.querySelector(".theme-toggle");


const savedTheme=localStorage.getItem("theme");



if(savedTheme==="light"){


document.body.classList.add("light");


}






themeButton.addEventListener(
"click",
()=>{


document.body.classList.toggle("light");



let theme;



if(document.body.classList.contains("light")){


theme="light";


}else{


theme="dark";


}



localStorage.setItem(
"theme",
theme
);



updateThemeText();



}

);






function updateThemeText(){


const text=document.getElementById(
"current-theme"
);



if(!text)return;



text.textContent=

document.body.classList.contains("light")

?"Light"

:"Dark";


}



updateThemeText();








// ===============================
// NAV MENU MOBILE
// ===============================


const menuButton=document.querySelector(
".menu-toggle"
);


const nav=document.querySelector(
".navbar nav"
);



menuButton.addEventListener(
"click",
()=>{


nav.classList.toggle("active");



}
);









// CLOSE MOBILE MENU


document.querySelectorAll(".navbar a")
.forEach(link=>{


link.addEventListener(
"click",
()=>{


nav.classList.remove("active");


}
);


});
// ===============================
// PARTICLE BACKGROUND
// ===============================


const particleContainer =
document.querySelector(".particles");


const particleCount = 80;



for(let i=0;i<particleCount;i++){


const particle=document.createElement("span");


particle.className="particle";


particle.style.left=
Math.random()*100+"%";


particle.style.top=
Math.random()*100+"%";


particle.style.animationDuration=
(5+Math.random()*10)+"s";


particle.style.animationDelay=
Math.random()*5+"s";



particleContainer.appendChild(particle);


}







// ===============================
// STAR FIELD
// ===============================


const starsContainer =
document.querySelector(".stars");


for(let i=0;i<120;i++){


const star=document.createElement("span");


star.className="star";


star.style.left=
Math.random()*100+"%";


star.style.top=
Math.random()*100+"%";


star.style.animationDelay=
Math.random()*3+"s";



starsContainer.appendChild(star);


}








// ===============================
// 3D TILT EFFECT
// ===============================


const tiltCards=
document.querySelectorAll(".tilt");



tiltCards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


const rect=
card.getBoundingClientRect();



const x=
e.clientX-rect.left;


const y=
e.clientY-rect.top;



const centerX=
rect.width/2;


const centerY=
rect.height/2;



const rotateX=
-(y-centerY)/20;


const rotateY=
(x-centerX)/20;



card.style.transform=

`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)
`;



}

);




card.addEventListener(
"mouseleave",
()=>{


card.style.transform=
"";


}

);



});









// ===============================
// SCROLL REVEAL
// ===============================


const revealElements =
document.querySelectorAll(".reveal");



const revealObserver =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"active"
);



}


});


},
{

threshold:.15

}

);




revealElements.forEach(
(element)=>{


revealObserver.observe(element);


}

);









// ===============================
// SCROLL PROGRESS BAR
// ===============================


const progressBar =
document.querySelector(".scroll-progress");



window.addEventListener(
"scroll",
()=>{


const scrollTop =
document.documentElement.scrollTop;


const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;



const progress =
(scrollTop / height) * 100;



progressBar.style.width =
progress+"%";



}

);









// ===============================
// COUNTER ANIMATION
// ===============================


const counters =
document.querySelectorAll("[data-count]");



const counterObserver =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){



const counter =
entry.target;


const target =
Number(counter.dataset.count);



let value=0;



const update=()=>{


value += Math.ceil(
target/50
);



if(value>=target){


counter.textContent=
target+"+";


return;


}



counter.textContent=value;


requestAnimationFrame(update);



};



update();



counterObserver.unobserve(counter);



}



});


}

);



counters.forEach(
(counter)=>{


counterObserver.observe(counter);


}

);
// ===============================
// MUSIC PLAYER
// ===============================


const audio =
document.getElementById("music");


const playButton =
document.getElementById("play");


const volumeSlider =
document.querySelector(".volume");


const previousButton =
document.getElementById("previous");


const nextButton =
document.getElementById("next");


const shuffleButton =
document.getElementById("shuffle");



let playing=false;


if(playButton && audio){



playButton.addEventListener(
"click",
()=>{


if(!playing){


audio.play();


playButton.innerHTML =
'<i class="fa-solid fa-pause"></i>';


playing=true;


}else{


audio.pause();


playButton.innerHTML =
'<i class="fa-solid fa-play"></i>';


playing=false;


}



}

);



}







// Volume


if(volumeSlider){


volumeSlider.addEventListener(
"input",
()=>{


audio.volume =
volumeSlider.value / 100;



}

);


}







// Loop


let loop=false;



nextButton?.addEventListener(
"click",
()=>{


audio.currentTime=0;


audio.play();



}
);





previousButton?.addEventListener(
"click",
()=>{


audio.currentTime=0;


}
);






shuffleButton?.addEventListener(
"click",
()=>{


loop=!loop;


audio.loop=loop;



shuffleButton.style.color =
loop ? "#00d9ff" : "white";



}
);









// ===============================
// BACK TO TOP BUTTON
// ===============================


const backTop =
document.getElementById("backTop");



window.addEventListener(
"scroll",
()=>{


if(window.scrollY>500){


backTop.classList.add(
"show"
);


}else{


backTop.classList.remove(
"show"
);


}


}

);




backTop?.addEventListener(
"click",
()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


}

);









// ===============================
// CONTACT FORM
// ===============================


const contactForm =
document.querySelector(".contact-form");



const formStatus =
document.querySelector(".form-status");



contactForm?.addEventListener(
"submit",
(e)=>{


e.preventDefault();



const button =
contactForm.querySelector("button");



button.innerHTML =
"Sending...";



button.disabled=true;




setTimeout(()=>{


button.innerHTML =
"Message Sent ✓";


formStatus.textContent =
"Thank you! I will get back to you soon.";



contactForm.reset();



setTimeout(()=>{


button.innerHTML =
"Send Message";


button.disabled=false;


formStatus.textContent="";


},3000);



},1500);



}

);









// ===============================
// LIVE CLOCK DASHBOARD
// ===============================


function updateClock(){


const now =
new Date();



const time =
now.toLocaleTimeString();



let clock =
document.getElementById(
"clock"
);



if(clock){


clock.textContent=time;


}



}



setInterval(
updateClock,
1000
);


updateClock();
/* ===============================
MOUSE RIPPLE EFFECT
=============================== */


document.addEventListener(
"click",
(e)=>{


const ripple =
document.createElement("span");


ripple.className="ripple";



ripple.style.left =
e.clientX+"px";


ripple.style.top =
e.clientY+"px";



document.body.appendChild(ripple);



setTimeout(()=>{


ripple.remove();


},600);



}

);









// ===============================
// BUTTON HOVER SOUND READY
// ===============================


const buttons =
document.querySelectorAll(
"button,.btn"
);



buttons.forEach(button=>{


button.addEventListener(
"mouseenter",
()=>{


button.style.transition =
".3s";


}

);


});









// ===============================
// LAZY IMAGE LOADING
// ===============================


const images =
document.querySelectorAll(
"img"
);



const imageObserver =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


const img =
entry.target;


img.classList.add(
"loaded"
);



imageObserver.unobserve(img);


}



});


}

);




images.forEach(img=>{


imageObserver.observe(img);


});









// ===============================
// PERFORMANCE OPTIMIZATION
// ===============================



let ticking=false;



window.addEventListener(
"scroll",
()=>{


if(!ticking){


requestAnimationFrame(()=>{


ticking=false;


});


ticking=true;


}


},
{

passive:true

}

);









// ===============================
// AUTO SYSTEM THEME
// ===============================


const systemTheme =
window.matchMedia(
"(prefers-color-scheme: light)"
);



if(!localStorage.getItem("theme")){


if(systemTheme.matches){


document.body.classList.add(
"light"
);


updateThemeText?.();


}


}









// ===============================
// ONLINE STATUS
// ===============================


window.addEventListener(
"online",
()=>{


const status =
document.querySelector(
".status-badge"
);


if(status){


status.innerHTML =
"<span></span> Online";


}


}

);



window.addEventListener(
"offline",
()=>{


const status =
document.querySelector(
".status-badge"
);


if(status){


status.innerHTML =
"<span></span> Offline";


}


}

);









// ===============================
// CONSOLE BRANDING
// ===============================


console.log(
`
🚀 Syed Awsaf Zarif Portfolio V2.0

Built with:
✓ HTML
✓ CSS
✓ JavaScript

Apple × Vercel × ROG Experience
`
);









// ===============================
// FINAL INITIALIZATION
// ===============================


document.addEventListener(
"DOMContentLoaded",
()=>{


console.log(
"Portfolio Loaded Successfully"
);



});
