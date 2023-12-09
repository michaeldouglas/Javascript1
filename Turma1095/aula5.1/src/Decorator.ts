interface Componente {
  styles(): string;
}

class ComponenteHTML implements Componente {
  styles(): string {
    return '<div class="template">AQUI ESTRIA A REGRA DE NEGOCIO DO TEMPLATE</div>';
  }
}

class Decorador implements Componente {
  componente: Componente;

  constructor(componente: Componente) {
    this.componente = componente;
  }

  styles(): string {
    return this.componente.styles();
  }
}

class DecoradorAnoNovo extends Decorador {
  styles(): string {
    return `<div class"layout-ano-novo"> ${super.styles()} </div>`;
  }
}

class DecoradorNatal extends Decorador {
  styles(): string {
    return `<div class"layout-natal"> ${super.styles()} </div>`;
  }
}

const componente = new ComponenteHTML();
const componenteDecorado = new DecoradorNatal(componente);
console.log(componenteDecorado.styles());