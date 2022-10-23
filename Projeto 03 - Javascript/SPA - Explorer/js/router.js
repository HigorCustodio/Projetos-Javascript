
//Criando classe usando orientação à objetos
export class Router{
    routes = {}

    add(routeName, page){
        this.routes[routeName] = page
    }

    /*  Método/Função para definir rotas dos links: 
        - Essa função utilizando o "onclick" substitui a manipulação da dom através do: document.querySelector('nav a:nth-child(1)').addEventListener('click', function(event){ }));
    */
    route(event){
        //Definindo que: se o evento não esta definido, use o evento  da window(janela)
        event = event || window.event

        //Criando Função de rota, onde, ela irá tirar o padrão do onclick do href que por padrão redireciona(recarrega) para página selecionada no link <a>
        event.preventDefault()

        window.history.pushState({}, "", event.target.href) // pegue o historico da window e coloque o caminho de quem disparou o evento

        this.handle()//função para pegar o nome do caminho, usando o history da window que tem como dado o alvo do evento(quem dispara o evento)
        /*this.arrowRightFunctionsUniverse()*/
    }

    handle(){
        const { pathname } = window.location //criar variavel que ira receber como pathname a localizacao da janela captada pelo window.history.pushState dado captado pelo evento.taget.href
        const route = this.routes[pathname] || this.routes[404]
        
        fetch(route)
        .then(data => data.text())
        .then(html => { document.querySelector('#app').innerHTML = html })
    }
}