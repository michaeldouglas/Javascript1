class PessoaES6 {
  constructor(public nome: string, public idade: number) { }

  saudacao(): string {
    return 'Olá';
  }
}

const objetoDePessoa: PessoaES6 = new PessoaES6('Ana', 28);
const teste: string = objetoDePessoa.saudacao();
console.log(teste);