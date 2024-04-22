// abrir um apasta que contem html e executar através de
//estrutura de decisão alguma pagina selecionada

//sistema de rotas simples
const http =require('http');
const fs =require('fs');

let porta =3000;
let host ='localhost';

const server = http.createServer((req,res)=>{
    //header
    res.setHeather('content-type','text/html');
    //criando as rotas
    let html_page = '';

    switch (req.url){
        case '/':
            html_page='home.html';
            res.statusCode = 200;
            break;
        case '/home':
            html_page='home.html';
            res.statusCodde = 200;
            break;    
        case '/servicos':
            html_page='servicos.html';
            res.statusCodde = 200;
            break;
        case '/sobre':
            html_page='sobre.html';
            res.statusCodde = 200;
            break;
        default:
            html_page='404.html';
            res.statusCodde = 200;
            break;
    }

    //preparando a abertura das paginas em html
    fs.readFile('./html/'+html_page,(erro,data)=>{
        if(erro){
            console.log(erro);
        }else{
            res.write(data);
            res.end()
        }
    })

})

server.listen(porta,host,()=>{
    console.log('Servidor em execução!')
})

//hora de criar a infra de html
//criar sistemas de rotas