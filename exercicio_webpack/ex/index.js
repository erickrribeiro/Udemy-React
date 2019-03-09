import Pessoa from './pessoa'

const produto = {
    nome: 'Caneta Bic Preta',
    preco: 0.50,
    desconto: 0.10
};
const clone = (obj) => {
    return {...obj}
};

const pessoa = new Pessoa('Erick!!');
console.log(pessoa.toString());

const novoProduto = clone(produto);
novoProduto.nome = 'Caneta Bic Azul';
console.log(produto, novoProduto);