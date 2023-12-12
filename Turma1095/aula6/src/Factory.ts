interface ProdutoDigital {
  nome: string;
  preco: number;
  tipo: string;
}

interface ProdutoFisico {
  nome: string;
  preco: number;
  tipo: string;
}

class EcomerceBoticatio {
  digital(nome: string, preco: number): ProdutoDigital {
    return { nome, preco, tipo: 'digital' };
  }
  fisico(nome: string, preco: number): ProdutoFisico {
    return { nome, preco, tipo: 'fisico' };
  }
}

const fabrica = new EcomerceBoticatio();
const produto = fabrica.digital("Ebook", 5);
const produto2 = fabrica.fisico("Livro Fisico", 30);

console.log(produto);
console.log(produto2);