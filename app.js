
import scrollRevealComponents from "./scrollReveal.js";
import imageReveal from "./imageReveal.js";


scrollRevealComponents();


const links = document.querySelectorAll('.link');
const hoverReveal = document.querySelectorAll('.hover-reveal');
const linkImages = document.querySelectorAll('.image-reveal');


links.forEach(link => {
    let imgBox = link.lastElementChild;
    let imgEl = link.lastElementChild.firstElementChild;

    link.addEventListener('mousemove',(e)=>{
        imgBox.style.opacity = '1';
        imgBox.style.transform = 'translate(-100%,-50%) rotate(5deg)';
        imgEl.style.transform = 'scale(1,1)';
        imgBox.style.left = `${e.clientX}px`;
        
    })

    link.addEventListener('mouseleave',(e)=>{
        imgBox.style.opacity = '0';
        imgBox.style.transform = 'translate(-50%,-50%) rotate(-5deg)';
        imgEl.style.transform = 'scale(0.8,0.8)';
        imgBox.style.left = `${e.clientX}px`;
    })
})
