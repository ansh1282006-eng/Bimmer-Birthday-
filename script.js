const pages = {
  welcome: document.getElementById("welcome"),
  cake: document.getElementById("cakePage"),
  letter: document.getElementById("letterPage"),
  gallery: document.getElementById("galleryPage"),
  gift: document.getElementById("giftPage"),
  final: document.getElementById("finalPage")
};

function showPage(page){
  Object.values(pages).forEach(p=>{
    if(p) p.classList.remove("active");
  });

  if(page){
    page.classList.add("active");
    window.scrollTo(0,0);
  }
}

const startBtn = document.getElementById("startBtn");
const cakeBtn = document.getElementById("cakeBtn");
const galleryBtn = document.getElementById("galleryBtn");
const giftBtn = document.getElementById("giftBtn");
const finalBtn = document.getElementById("finalBtn");
const restartBtn = document.getElementById("restartBtn");

if(startBtn){
  startBtn.onclick = ()=>{
    showPage(pages.cake);
  };
}

if(cakeBtn){
  cakeBtn.onclick = ()=>{
    alert("🎂 Happy Birthday Bimmer ❤️");
    showPage(pages.letter);
  };
}

if(galleryBtn){
  galleryBtn.onclick = ()=>{
    showPage(pages.gallery);
  };
}
if(giftBtn){
  giftBtn.onclick = ()=>{
    showPage(pages.gift);
  };
}

if(finalBtn){
  finalBtn.onclick = ()=>{
    createConfetti();
    showPage(pages.final);
  };
}

if(restartBtn){
  restartBtn.onclick = ()=>{
    showPage(pages.welcome);
  };
}

/* ❤️ Floating Hearts */

const heartsContainer = document.getElementById("hearts");

function createHeart(){

  if(!heartsContainer) return;

  const heart=document.createElement("div");

  heart.className="heart";

  heart.innerHTML="💖";

  heart.style.left=Math.random()*100+"vw";

  heart.style.fontSize=(18+Math.random()*18)+"px";

  heart.style.animationDuration=(4+Math.random()*5)+"s";

  heartsContainer.appendChild(heart);

  setTimeout(()=>{
    heart.remove();
  },9000);

}

setInterval(createHeart,350);
/* 🎉 Confetti Effect */

function createConfetti(){

  for(let i=0;i<120;i++){

    const c=document.createElement("div");

    c.innerHTML=["🎉","✨","💖","🎊"][Math.floor(Math.random()*4)];

    c.style.position="fixed";
    c.style.left=Math.random()*100+"vw";
    c.style.top="-20px";
    c.style.fontSize=(16+Math.random()*18)+"px";
    c.style.zIndex="9999";
    c.style.pointerEvents="none";
    c.style.transition="transform 3s linear, top 3s linear, opacity 3s";

    document.body.appendChild(c);

    setTimeout(()=>{
      c.style.top="110vh";
      c.style.transform=`rotate(${Math.random()*720}deg)`;
      c.style.opacity="0";
    },20);

    setTimeout(()=>{
      c.remove();
    },3200);

  }

}

/* 🎂 Cake Animation */

const cake=document.getElementById("cake");

if(cakeBtn && cake){

  cakeBtn.addEventListener("click",()=>{

    cake.innerHTML="🍰";

    cake.style.transform="scale(1.15)";

    setTimeout(()=>{
      cake.style.transform="scale(1)";
    },500);

  });

}
/* 🎵 Optional Music Support
   Agar tum "song.mp3" upload karoge to ye automatically play karne ki koshish karega
   (browser ki policy ke hisaab se pehle button click ke baad chalega).
*/

const music = new Audio("song.mp3");
music.loop = true;

if (startBtn) {
  startBtn.addEventListener("click", () => {
    music.play().catch(() => {});
  });
}

/* 🚀 Start App */

showPage(pages.welcome);

/* ❤️ Birthday Console Message */

console.log("Happy Birthday Bimmer ❤️");

/* ✨ Extra Confetti Every 12 Seconds On Final Page */

setInterval(() => {
  if (pages.final && pages.final.classList.contains("active")) {
    createConfetti();
  }
}, 12000);
