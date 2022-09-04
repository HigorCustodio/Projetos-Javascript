
//Criando Lista de Alunos:
let listaAlunos = []
listaAlunos[0] = {nome: "Higor Custodio", nota01: 10.0, nota02:7.5,};
listaAlunos[1] = {nome: "Luiz Gustavo", nota01: 6.0, nota02:8.5,};
listaAlunos[2] = {nome: "João Marcel", nota01: 4.9, nota02:5.8,};
listaAlunos[3] = {nome: "Clara Maria", nota01: 7.0, nota02:9.0,};

console.log(listaAlunos)

//Criando Função de calculo de Média:
function calcMedia(nota01, nota02){
    return ((nota01+nota02)/2).toFixed(1)
}


//Criando estrutura para calcular médias:
let listaMedias = []
listaMedias[0] = calcMedia(listaAlunos[0].nota01,listaAlunos[0].nota02); 
listaMedias[1] = calcMedia(listaAlunos[1].nota01,listaAlunos[1].nota02);
listaMedias[2] = calcMedia(listaAlunos[2].nota01,listaAlunos[2].nota02);
listaMedias[3] = calcMedia(listaAlunos[3].nota01,listaAlunos[3].nota02);

console.log(listaMedias)

for (i = 0; i < listaAlunos.length; i++){
    if(listaMedias[i] >= 7){
        alert(`
        Parabéns, ${listaAlunos[i].nome}. 
        Você foi aprovado no concurso com média final de: ${listaMedias[i]}`);
    } else{
        alert(`
        ${listaAlunos[i].nome}, você foi reprovado. 
        Sua média final foi: ${listaMedias[i]}.
        Estude mais e tente de novo, boa sorte!`)
    }

}