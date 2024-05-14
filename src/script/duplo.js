// Realiza o slideShow
let imagens=['./src/img/img1.png','./src/img/img2.png','./src/img/img3.png','./src/img/img4.png','./src/img/img5.png','./src/img/img6.png'];
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
<section id="duplo">
            <img id="imgduplo">
    </section>