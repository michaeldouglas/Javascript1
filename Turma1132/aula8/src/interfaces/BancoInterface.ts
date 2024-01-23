export interface BancoInterface {
  cadastrarCliente(nome: string, saldoInicial: number): void;
  consultarSaldo(clienteId: number): number;
  depositar(clienteId: number, valor: number): void;
  sacar(clienteId: number, valor: number): void;
}
