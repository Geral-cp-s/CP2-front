// Realiza o slideShow
let imagens=['./src/img/duplo1.jpg','./src/img/duplo2.jpg','./src/img/duplo3.jpg'];
let index=0; 
let time =3000;

function slideShow(){
    document.getElementById("imgduplo").src=imagens[index];
    index++;

    if(index == imagens.length){
        index=0;
    }
    setTimeout('slideShow()', time);
}

slideShow();