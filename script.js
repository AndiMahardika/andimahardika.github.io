const btnClose = document.querySelector(`.close`);
const divIklan = document.querySelector(`.iklan`);

btnClose.addEventListener(`click`,function(){
    divIklan.style.display = "none";
})