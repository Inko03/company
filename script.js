const imges = document.querySelector('section')
const main = document.querySelector('#main')
const popup = document.querySelector('article')
const popupimg = document.querySelector('.pop-img')
const exitpop = document.querySelector('#exit')
imges.addEventListener("click", (e)=>{
    popup.classList.remove("hidden")
    main.classList.add('blur')
    popupimg.src=e.target.src
    console.log(e.target.src)
});
exitpop.addEventListener("click", ()=>{
    popup.classList.add("hidden")
    main.classList.remove('blur')
})