function calcularTotal(preco: number, quantidade: number): number {
    return preco * quantidade;
}

const total: number = calcularTotal(49.9, 3);
console.log(`Total de estoque: R$ ${total.toFixed(2)}`);