// interface ou contrato

// ponte = primeiro contrato e o segundo contrato


interface Motor {
  ligar(): void;
}

class MotorEletrico {
  conectar(): void {
    console.log("Conectado ao motor elétrico");
  }

  ativar(): void {
    console.log('Ativando o motor elétrico');
  }
}

class AdaptadoresDeMotores implements Motor {
  private motorEletrico: MotorEletrico;

  constructor(motorEletrico: MotorEletrico) {
    this.motorEletrico = motorEletrico;
  }

  ligar(): void {
    this.motorEletrico.conectar();
    this.motorEletrico.ativar();
    console.log('🚗 🚗 VRUM VRUM 🚗 🚗');
  }
}

const motorEletrico = new MotorEletrico();
const adapte = new AdaptadoresDeMotores(motorEletrico);
adapte.ligar();