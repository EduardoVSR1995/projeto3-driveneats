function seleciona(rec){
    const box = document.querySelector(".prato").children;
    console.log(box[rec-1].classList.add('margem'));
    let bot = box[rec-1].querySelector(".botve");
    console.log(bot.classList.remove('a'));


}

 function seleciona1(rec1){
    const box = document.querySelector(".prato1").children;
    let bot = box[rec1-1].querySelector(".botve");
    console.log(bot.classList.remove('a'));
}

function seleciona2(rec2){
    const box = document.querySelector(".prato2").children;
    let bot = box[rec2-1].querySelector(".botve");
    console.log(bot.classList.remove('a'));
}
