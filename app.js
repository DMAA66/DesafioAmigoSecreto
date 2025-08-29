//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


function escreveTela(localInfo,textoInfo)
{
    let Titulo = document.querySelector(localInfo);
    Titulo.innerHTML = textoInfo;
    //responsiveVoice.speak(textoInfo, 'Brazilian Portuguese Female' , {rate:1.2} );
}



function adicionarAmigo() 
{
    // Lê campo de inserção de nomes OPÇÃO 1:
    //let nomeAmigo = document.getElementById("amigo").value;
    // Lê campo de inserção de nomes OPÇÃO 2:
    let nomeAmigo = document.querySelector("#amigo").value;

    // Verifica se o campo está vazio ou se o nome já existe na lista:
    if (nomeAmigo === "") 
    {
        alert("Por favor, insira um nome antes de clicar em Adicionar.");
        return;
    }
    else
    {
        if (listaAmigos.includes(nomeAmigo))
        {
            alert("Esta pessoa já está na lista!");
            // Limpa campo de entrada:
            document.getElementById("amigo").value = "";
            return;
        }
        else
        {
            // Acrescenta o nome do amigo à lista e atualiza a exibição:
            listaAmigos.push(nomeAmigo);

            console.log(listaAmigos,Qtde);
            // Limpa campo de entrada:
            document.getElementById("amigo").value = "";
            // Exibe nome digitado na barra inferior da tela:
            escreveTela('h3',`Amigo ${Qtde+1}: ${nomeAmigo}`);

            // Exibe abaixo do campo de entrada a lista de nomes incluídos, um a um:
            const ListaImpressao = document.querySelector('#listaAmigos');
            const item = document.createElement('li');
            item.textContent = `${Qtde+1} - ${listaAmigos[Qtde]}`;  
            ListaImpressao.appendChild(item);

            Qtde++;                
                //nomeLista.innerHTML = listaAmigos[cont];

            //escreveTela('h3',listaAmigos);
        }
    }

    //let listaExibicao = document.getElementById("listaAmigos");
    //let novoItem = document.createElement("li");
    //novoItem.textContent = `${contador}. ${nomeAmigo}`;
    //listaExibicao.appendChild(novoItem);
}

function sortearAmigo()
{
    if (Qtde > 0)
    {
    // Sorteia um amigo dentro da lista:
    meuAmigo = parseInt(Math.random()*Qtde);
    console.log(meuAmigo);
    console.log(listaAmigos[meuAmigo]);

    // Escreve o nome do Amigo Secreto sorteado no local designado da tela:
    const ResultadoSorteio = document.querySelector('#resultado');
    ResultadoSorteio.innerHTML = `O seu Amigo Secreto é o : ${listaAmigos[meuAmigo]}`;
    // Escreve o nome do Amigo Secreto sorteado na barra inferior da tela:
    escreveTela('h3',`O seu Amigo Secreto é o : ${listaAmigos[meuAmigo]}`);
    }
    else
    {
        alert("Atenção! Ainda não há amigos na lista a serem sorteados!");
    }
}

// Declara as variáveis globais principais:
let listaAmigos = [];
let meuAmigo = 0;
let Qtde = 0;


