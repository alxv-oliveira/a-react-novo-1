import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preços</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>Paulo</td>
                <th>React</th>
                <th>1000</th>
                <td><button>Remover</button></td>
            </tr>
            <tr>
                <td>Nico</td>
                <th>React</th>
                <th>1000</th>
                <td><button>Remover</button></td>
            </tr>
            <tr>
                <td>Daniel</td>
                <th>React</th>
                <th>1000</th>
                <td><button>Remover</button></td>
            </tr>
        </tbody>
    );
}

class Tabela extends Component {
    render() {
        return (
            <table>
                <TableHead />
                <TableBody />
            </table>
        );
    }
}

export default Tabela;