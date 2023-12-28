icons.addEventListener("click",() => {
    nav.classList.toggle("active");
})

let body=document.querySelector('body');
let boutton=document.getElementById('boutonnuit');

function darkmode(){
    body.classList.toggle("darkmode");
}
boutton.addEventListener('click',darkmode)
