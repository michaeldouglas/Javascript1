"use strict";
// interface ou contrato
class MotorEletrico {
    conectar() {
        console.log("Conectado ao motor elétrico");
    }
    ativar() {
        console.log('Ativando o motor elétrico');
    }
}
class AdaptadoresDeMotores {
    constructor(motorEletrico) {
        this.motorEletrico = motorEletrico;
    }
    ligar() {
        this.motorEletrico.conectar();
        this.motorEletrico.ativar();
        console.log('🚗 🚗 VRUM VRUM 🚗 🚗');
    }
}
const motorEletrico = new MotorEletrico();
const adapte = new AdaptadoresDeMotores(motorEletrico);
adapte.ligar();
