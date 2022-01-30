console.clear();
var prompt = require('prompt-sync')();

const listaTreino = ['PEDRA', 'PAPEL', 'TESOURA'];

const resultadoFinal = [
    '| PARABÉNS!! VOCÊ FOI O GRANDE VENCEDOR E SE TORNOU O MAIS NOVO LIDER DA SEITA ESPADACHIM TIASHUYIA |',
    '| O GRANDE VENCEDOR FOI O MESTRE TAGIMA, TENTE NOVAMENTE OU DESISTA DE VEZ! |',
    '| OS DOIS EMPATARAM, TENTE NOVAMENTE OU MORRA TENTANDO |'];


do {
    var vcvitoria = [];
    var pcvitoria = [];
    var empate = [];


    console.log(`\n DURANTE O APERFEIÇOAMENTO DAS TÉCNICAS DE DIJON YANG, AO SUL DAS TERRAS DO RIO ACÁDIA,
MESTRE TAGIMA ELABOROU UM TREINAMENTO ESPECIAL E O CHAMOU DE "JOKENPÔ", ONDE DIJON PRECISA
ESCOLHER ENTRE: PEDRA (QUE GANHA DE TESOURA), PAPEL (QUE GANHA DE PEDRA) E TESOURA (QUE GANHA DE PAPEL),
PARA DERROTAR MESTRE TAGIMA E SE TORNAR O MAIS NOVO LÍDER DA SEITA ESPADACHIM TIASHUYIA.
TREINE COM O MESTRE E VENÇA! SE TIVER CORAGEM! `);
    console.log();

    var rodadas = +prompt(` DIGITE QUANTAS RODADAS DESEJA TREINAR: `);
    console.log();

    while (isNaN(rodadas) || rodadas == '') {
        rodadas = +prompt(` DIGITE QUANTAS RODADAS DESEJA TREINAR: `);
        console.log();
        console.clear();
    }

    for (i = 0; i < rodadas; i++) {

        var EscolhaPlayer = prompt(`${i+1}ª RODADA - FAÇA A SUA ESCOLHA: PEDRA, PAPEL OU TESOURA? `).toUpperCase();
        let computer = Math.floor(Math.random() * listaTreino.length);
        var EscolhaComputer = (listaTreino[computer]);

        console.log();

        while (EscolhaPlayer != listaTreino[0] && EscolhaPlayer != listaTreino[1] && EscolhaPlayer != listaTreino[2]) {
            EscolhaPlayer = prompt(` DIGITE UMA ESCOLHA VÁLIDA! APENAS PEDRA, PAPEL OU TESOURA: `).toUpperCase();
            console.log();
        }
        console.log(` VOCÊ ESCOLHEU: ${EscolhaPlayer} \n`);
        console.log(` MESTRE TAGIMA ESCOLHEU: ${EscolhaComputer} \n`);

        if (EscolhaPlayer == EscolhaComputer) {

            console.log(`-------> VOCÊ E MESTRE TAGIMA EMPATARAM!! <-------\n`);
            empate.push(1);

        } else if (EscolhaPlayer == 'PAPEL' && EscolhaComputer == 'PEDRA') {

            console.log(`---------> PARABÉNS VOCÊ VENCEU!! <-------------\n`);
            vcvitoria.push(1);

        } else if (EscolhaPlayer == 'PAPEL' && EscolhaComputer == 'TESOURA') {

            console.log(`---------> MESTRE TAGIMA VENCEU!! <---------\n`);
            pcvitoria.push(1);

        } else if (EscolhaPlayer == 'PEDRA' && EscolhaComputer == 'TESOURA') {

            console.log(`---------> PARABÉNS VOCÊ VENCEU!! <---------\n`);
            vcvitoria.push(1);

        } else if (EscolhaPlayer == 'PEDRA' && EscolhaComputer == 'PAPEL') {

            console.log(`---------> MESTRE TAGIMA VENCEU!! <---------\n`);
            pcvitoria.push(1);            
            
        } else if (EscolhaPlayer == 'TESOURA' && EscolhaComputer == 'PAPEL') {

            console.log(`---------> PARABÉNS VOCÊ VENCEU!! <---------\n`);
            pcvitoria.push(1);   

        } else if (EscolhaPlayer == 'TESOURA' && EscolhaComputer == 'PEDRA') {

            console.log(`---------> MESTRE TAGIMA VENCEU!! <-------------\n`);
            pcvitoria.push(1);
        }
    }

    console.clear(prompt('APERTE ENTER PARA VER O RESULTADO... '));
    console.log(` VOCÊ VENCEU: ${vcvitoria.length} VEZ(ES) \n`);
    console.log(` MESTRE TAGIMA VENCEU: ${pcvitoria.length} VEZ(ES) \n`);
    console.log(` VOCÊ E O MESTRE EMPATARAM: ${empate.length} VEZ(ES) \n`);

    if (vcvitoria.length > pcvitoria.length || vcvitoria.length > empate.lenght) {
        console.log(resultadoFinal[0]);

    } else if (pcvitoria.length > vcvitoria.length || pcvitoria.length > vcvitoria.length) {
        console.log(resultadoFinal[1]);

    } else if (empate.length > (pcvitoria + vcvitoria)) {
        console.log(resultadoFinal[2]);

    } else (console.log(resultadoFinal[2]));
    console.log();

    var PlayAgain = prompt(` APERTE ENTER PARA TREINAR NOVAMENTE, OU DESISTA DE UMA VEZ (INSERINDO QUALQUER MENSAGEM!) `);
    console.clear();
    console.log();

} while (PlayAgain == '');

console.log(' FIM DO TREINO ');
console.log();
