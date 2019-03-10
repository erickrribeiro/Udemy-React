import Pessoa from './pessoa'
import './style.css'
import 'react'

const produto = {
    nome: 'Caneta Bic Preta',
    preco: 0.50,
    desconto: 0.10
};
const clone = (obj) => {
    return {...obj}
};

export default props => (
    <h1> Olá </h1>
)

const pessoa = new Pessoa('Erick!!');
console.log(pessoa.toString());

const novoProduto = clone(produto);
novoProduto.nome = 'Caneta Bic Azul';
console.log(produto, novoProduto);