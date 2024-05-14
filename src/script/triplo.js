// Realiza o slideShow
let imagens3=['./src/img/triplo1.jpg','./src/img/triplo2.jpg','./src/img/triplo3.jpg'];
let index3=0; 
let time3 =3000;

function slideShow(){
    document.getElementById("imgtriplo").src=imagens3[index3];
    index3++;

    if(index3 == imagens3.length){
        index3=0;
    }
    setTimeout('slideShow()', time3);
}

slideShow();