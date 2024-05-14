// Realiza o slideShow
let imagens4=['./src/img/quadriplo1.jpg','./src/img/quadriplo2.jpg','./src/img/quadriplo3.jpg'];
let index4=0; 
let time4 =3000;

function slideShow(){
    document.getElementById("imgquadri").src=imagens4[index4];
    index4++;

    if(index4 == imagens4.length){
        index4=0;
    }
    setTimeout('slideShow()', time4);
}

slideShow();