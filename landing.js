// var hi=document.querySelector(".hi")
// hi.addEventListener("click",function(){
//     console.log("hi")
// })
gsap.from("#icon", {
    y:-1000,
    stagger:0.5,
    opacity:0,
    duration:3,
    
});
gsap.from("#navg ul li", {
    y:-1000,
    stagger:0.48,
    ease: "expoScale(0.3,7,none)",
    opacity:0,
    
    duration:2.5
});
gsap.from("#navg", {
    width:100,
    duration:2
});
gsap.from(".abt", {
    x:200,
    delay:1.5,
    opacity:0,
    duration:2
});
gsap.from(".text", {
    x:200,
    delay:2,
    stagger:0.1,
    opacity:0,
    duration:2
});
gsap.from("#con", {
    x:200,
    delay:1.8,
    opacity:0,
    duration:2
});
gsap.from(".con", {
    x:200,
    delay:2.5,
    stagger:0.1,
    opacity:0,
    duration:2
});