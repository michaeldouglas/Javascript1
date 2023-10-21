// const nomes = ["contato1", "contato2", "contato3"];
// const telefones = ["0000000", "11111111", "2222222222"];

// for (let i = 0; i < nomes.length; i++) {
//   // console.log(nomes[i], telefones[i]);
// }

// const agenda = [
//   ["contato1", "0000000"],
//   ["contato2", "11111111"],
//   ["contato3", "2222222222"],
// ];

// for (let i = 0; i < agenda.length; i++) {
//   console.log(agenda[i][0], agenda[i][1]);
// }

// Dicionário de dados - Machine Learning - Cientista de dados
// Ou Contrato para o front
// nome e telefone

const agenda = [
  { nome: "contato1", telefone: "0000000", email: 'teste@teste.com' },
  { nome: "contato2", telefone: "11111111", email: null },
  { nome: "contato3", telefone: "2222222222", email: null },
];

for (let i = 0; i < agenda.length; i++) {
  console.log(agenda[i].nome, agenda[i].telefone, agenda[i].email);
}