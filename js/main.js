const ul = document.querySelector("ul")
const toggle = document.querySelector("#toggle")
toggle.addEventListener("click",()=>{
    ul.classList.toggle("active-ul")
    toggle.classList.toggle("closetoggle")
})
const header = document.querySelector("header")
window.addEventListener("scroll" , ()=>{
    header.classList.toggle("scroll",window.scrollY>0)
})