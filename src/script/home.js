// Realiza o slideShow do Inicio
let imagens=['img1.png','img2.png','img3.png','img4.png','img5.png','img6.png'];
let index=0; 
let time =3000;

function slideShow(){
    document.getElementById("imgbanner").src=imagens[index];
    index++;

    if(index == imagens.length){
        index=0;
    }
    setTimeout('slideShow()', time);
}

slideShow();