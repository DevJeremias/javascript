function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.` 
    if (hora < 12) {
        //bom dia!
        img.src = 'imgs/manha.png'
        document.body.style.backgroundColor = "#e2cd9f"
    }
    else if (hora < 18){
        //boa tarde!
        img.src = 'imgs/tarde.png'
        document.body.style.backgroundColor = "#f1996a"
    }
    else {
        //boa noite!
        img.src = 'imgs/noite.png'
        document.body.style.backgroundColor = "#3070ac"
    }
}