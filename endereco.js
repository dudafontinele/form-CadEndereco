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
    document.getElementById('CEP').value = '';
    document.getElementById('N.°').value = '';   
}

// Verifica se o CEP é válido

// Verifica se os digitos são apenas números 
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const 
