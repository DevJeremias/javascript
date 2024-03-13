function verificar() {
    var data = new Date()
    var agora = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > agora) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = agora - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Masculino'
            if (idade >=0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imgs/menino.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imgs/rapaz.png')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'imgs/adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imgs/idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Feminino'
            if (idade >= 0 && idade < 10){
                // menina
                img.setAttribute('src', 'imgs/menina.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imgs/rapariga.png')
            } else if (idade < 50) {
                // adulta
                img.setAttribute('src', 'imgs/adulta.png')
            } else {
                // idosa
                img.setAttribute('src', 'imgs/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos gênero ${gênero} e idade ${idade} anos.`
        res.appendChild(img)
    } 
}

