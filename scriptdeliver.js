let re=0;
function seleciona(rec){
    const box = document.querySelector(".prato").children;
    box[rec-1].classList.add('margem');
    let bot = box[rec-1].querySelector(".botve");
    bot.classList.remove('a');
    for (let i = 0; i < 4; i++) {
        if(i!==rec-1){
            box[i].classList.remove('margem');
            let bo = box[i].querySelector(".botve");
            bo.classList.add('a');
        }
        else{
            re++;
        }
    }
    
}
function seleciona1(rec1){
    const box = document.querySelector(".prato1").children;
    box[rec1-1].classList.add('margem');
    let bot = box[rec1-1].querySelector(".botve");
    bot.classList.remove('a');
    for (let i = 0; i < 4; i++) {
        if(i!==rec1-1){
            box[i].classList.remove('margem');
            let bo = box[i].querySelector(".botve");
            bo.classList.add('a');
        }
    
    else{
        re++;
    }
}
}

function seleciona2(rec2){
    const box = document.querySelector(".prato2").children;
    box[rec2-1].classList.add('margem');
    let bot = box[rec2-1].querySelector(".botve");
    bot.classList.remove('a');
    for (let i = 0; i < 4; i++) {
        if(i!==rec2-1){
            box[i].classList.remove('margem');
            let bo = box[i].querySelector(".botve");
            bo.classList.add('a');
        }
        else{
            re++;
        }
    }
    console.log(re);
}
function square(numero) {
    return numero * numero;
  }
  