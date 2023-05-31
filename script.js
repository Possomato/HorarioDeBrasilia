let horario = document.querySelector('#horario')
let horas = document.querySelector('#horas')
let minutos = document.querySelector('#minutos')
let segundos = document.querySelector('#segundos')

let data = document.querySelector('#data')
let semanas = document.querySelector('#semana')
let dias = document.querySelector('#dia')
let meses = document.querySelector('#mes')
let anos = document.querySelector('#ano')

let dataHora = new Date()

function moveRelogio(){
    let momentoAtual = new Date()

    let hora = momentoAtual.getHours()
    let minuto = momentoAtual.getMinutes()
    let segundo = momentoAtual.getSeconds()

    let strHora = new String(hora)
    let strMinuto = new String(minuto)
    let strSegundo = new String(segundo)

    if (strHora.length == 1){
        hora = "0" + hora
    }
    if (strMinuto.length == 1){
        minuto = "0" + minuto
    }
    if (strSegundo.length == 1){
        segundo = "0" + segundo
    }

    horas.textContent = hora
    minutos.textContent = minuto
    segundos.textContent = segundo

    setTimeout("moveRelogio()", 1000)
}

function pegarData(){
    let diaDaSemana = dataHora.getDay()
    let dia = dataHora.getDate()
    let mes = dataHora.getMonth()+1
    let ano = dataHora.getFullYear()

    let strDia = new String(dia)

    if(strDia.length == 1){
        dia = "0" + dia
    }

    switch(diaDaSemana){
        case 0:
            diaDaSemana = 'Domingo'
            break;
        case 1:
            diaDaSemana = 'Segunda-Feira'
            break;
        case 2:
            diaDaSemana = 'Terça-feira'
            break;
        case 3:
            diaDaSemana = 'Quarta-feira'
            break;
        case 4:
            diaDaSemana = 'Quinta-feira'
            break;
        case 5:
            diaDaSemana = 'Sexta-feira'
            break;
        case 6:
            diaDaSemana = 'Sábado'
            break;
    }

    switch(mes){
        case 1:
            mes = 'janeiro'
            break;
        case 2:
            mes = 'fevereiro'
            break;
        case 3:
            mes = 'março'
            break;
        case 4:
            mes = 'abril'
            break;
        case 5:
            mes = 'maio'
            break;
        case 6:
            mes = 'junho'
            break;
        case 7:
            mes = 'julho'
            break;
        case 8:
            mes = 'agosto'
            break;
        case 9:
            mes = 'setembro'
            break;
        case 10:
            mes = 'outubro'
            break;
        case 11:
            mes = 'novembro'
            break;
        case 12:
            mes = 'dezembro'
            break;
    }

    semanas.textContent = diaDaSemana
    dias.textContent = dia
    meses.textContent = mes
    anos.textContent = ano
}

pegarData()