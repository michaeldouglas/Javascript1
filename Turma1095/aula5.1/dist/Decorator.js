"use strict";
class ComponenteHTML {
    styles() {
        return '<div class="template">AQUI ESTRIA A REGRA DE NEGOCIO DO TEMPLATE</div>';
    }
}
class Decorador {
    constructor(componente) {
        this.componente = componente;
    }
    styles() {
        return this.componente.styles();
    }
}
class DecoradorAnoNovo extends Decorador {
    styles() {
        return `<div class"layout-ano-novo"> ${super.styles()} </div>`;
    }
}
class DecoradorNatal extends Decorador {
    styles() {
        return `<div class"layout-natal"> ${super.styles()} </div>`;
    }
}
const componente = new ComponenteHTML();
const componenteDecorado = new DecoradorNatal(componente);
console.log(componenteDecorado.styles());
