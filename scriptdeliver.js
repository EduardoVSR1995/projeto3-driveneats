//  function seleciona(elemento){
//      let margem= document.querySelector('.margem');

//      if(margem!==null){
//          margem.classList.remove('margem');
//      }
//      elemento.classList.add('margem');


//      const botve =document.querySelector('.a');
//      if(botve !== null){
//          botve.classList.remove('a');
//          console.log(botve);
//      }
//      botve.classList.add('a');
//      console.log(botve);
//  }

let pedidoComida = 0;
let pedidoRefri = 0;
let pedidoSobremesa = 0;

let valor = 0;
let valor1 = 0;
let valor2 = 0;

let parametro=0;
let parametro1=0;
let parametro2=0;


function seleciona(rec, a) {
    const box = document.querySelector(".prato").children;
    box[rec - 1].classList.add('margem');
    let bot = box[rec - 1].querySelector(".botve");
    bot.classList.remove('a');
    for (let i = 0; i < 4; i++) {
        if (i !== rec - 1) {
            box[i].classList.remove('margem');
            let bo = box[i].querySelector(".botve");
            bo.classList.add('a');
        }
    }
    pedidoComida = rec - 1;
    valor = a;
    parametro=1;

    if (parametro === 1 && parametro1 === 1 && parametro2 === 1) {
        const pedido = document.querySelector('.botao');
        pedido.classList.add('a');
    }
}
function seleciona1(rec1, a1) {
    const box = document.querySelector(".prato1").children;
    box[rec1 - 1].classList.add('margem');
    let bot = box[rec1 - 1].querySelector(".botve");
    bot.classList.remove('a');
    for (let i = 0; i < 4; i++) {
        if (i !== rec1 - 1) {
            box[i].classList.remove('margem');
            let bo = box[i].querySelector(".botve");
            bo.classList.add('a');
        }
    }
    pedidoRefri = rec1 - 1;
    valor1 = a1;
    parametro1=1;
    if (parametro === 1 && parametro1 === 1 && parametro2 === 1) {
        const pedido = document.querySelector('.botao');
        pedido.classList.add('a');
    }
}

function seleciona2(rec2, a2) {
    const box = document.querySelector(".prato2").children;
    box[rec2 - 1].classList.add('margem');
    let bot = box[rec2 - 1].querySelector(".botve");
    bot.classList.remove('a');
    for (let i = 0; i < 4; i++) {
        if (i !== rec2 - 1) {
            box[i].classList.remove('margem');
            let bo = box[i].querySelector(".botve");
            bo.classList.add('a');
        }

    }
    pedidoSobremesa = rec2 - 1;
    valor2 = a2;
    parametro2=1;
    if (parametro === 1 && parametro1 === 1 && parametro2 === 1) {
        const pedido = document.querySelector('.botao');
        pedido.classList.add('a');
    }
}

function b(enviar) {
    let pedido = document.querySelector('.prato').children;
    let nomePrato = pedido[pedidoComida].querySelector('h1').textContent;

    let pedido1 = document.querySelector('.prato1').children;
    let nomeBebida = pedido1[pedidoComida].querySelector('h1').textContent;

    let pedido2 = document.querySelector('.prato2').children;
    let nomeSobremesa = pedido2[pedidoComida].querySelector('h1').textContent;

    let Total = (valor+valor1+valor2).toFixed(2);
    let mensagem = "Olá, gostaria de fazer o pedido: "+
    "\n\- Prato: "+ nomePrato +
    "\n\- Bebida: "+ nomeBebida+
    "\n\- Sobremesa: "+nomeSobremesa+
    "\n\Total: R$ "+Total ;


   if ( parametro+parametro1+parametro2+enviar == 6  ){
    console.log(document.querySelector('.fechar'));
    link = "https://wa.me/5531995656030?text="+encodeURIComponent(mensagem);
    window.open(link);
   }
   enviar=0;
}