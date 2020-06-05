//console.log() -> tem a funcionalidade de escrever linhas código no console da ferramenta do desenvolvedor no navegador 
/*console.log("Digitando no Console do navegador");*/

/* O objeto dcument possuí vários compotamentos interessantes, o descrito abaixo encontra os campos descritos no seu parâmetro */
/*document.querySelector("field");*/


/*The beginning of the code is below */ 

/* Função que busca as informações sobre os estados no site do IBGE e retorna os valores para mim  */ */
function populateUfs(){
    const ufSelect = document.querySelector("select[neme=uf]");
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( (res)=>{ return res.json()})
    // ou .then( res => res.json() )
    .then(  states => {
        
        for(const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    } )
}

populateUfs()


function getCities(event) {
    const citySelect = document.querySelector("select[neme=city]");

    /* Vai puxar a função */ 
    console.log(event.target)


}



 //buscando os dados equivalentes ao campo nome=uf 
document
    .querySelector("select[name=uf]")
    //Metodo que irá disponiblizar as funções do campo selecionável 
    .addEventListener("change", getCities)

