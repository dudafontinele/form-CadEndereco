'use strict'; //Ativa o modo restrito
// Este modo faz com que o JavaScript opere de forma mais segura e rigorosa, ajudando a evitar erros comens de programação
/* Consumo de API - https://viacep.com.br/ */

// Função para limpar campos preenchidos 
const limparFormulario = () => {
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('complemento').value = '';
    document.getElementById('N.°').value = '';   
}

// Verifica se o CEP é válido

// Verifica se os digitos são apenas números 
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero (cep);


const preencherFormulario = (endereco) => {
    document.getElementById ('logradouro').value = endereco.logradouro;
    document.getElementById ('bairro').value = endereco.bairro;
    document.getElementById ('localidade').value = endereco.localidade;
    document.getElementById ('uf').value = endereco.uf;
    
}

// Função para consumo de API ViaCEP
const pesquisarCep = async() => {   //principal função que será executada quando for preencher o formúlario
    limparFormulario();   //função para deixar o formúlario em branco para ser preenchido
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
 
    if(cepValido(cep.value)){
        const dados = await fetch(url);  //fetch requisição do viacep e await garante que o feitch responda corretamente no formúlario
        const addres = await dados.json(); //garante que o formato seja json
 
        if(addres.hasOwnProperty('erro')){ //verifica se tem erro no CEP
            alert('CEP não encontrado ')
        }else{
            preencherFormulario(addres);
        }
    }else{
        alert('CEP Incorreto');
    }
}
 
// chama escutador para disparar ação de preenchimento
document.getElementById('cep').addEventListener('focusout', pesquisarCep); //adiciona escutador de eventos