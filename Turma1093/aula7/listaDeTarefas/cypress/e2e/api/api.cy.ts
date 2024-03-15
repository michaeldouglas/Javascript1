/// <reference types="cypress" />

describe("Verificar API ViaCEP", () => {
  const ceps = ["06755260", "01452002", "00000000"]; // Adicionando um CEP que não existe

  it("Verificar CEPs válidos", () => {
    ceps
      .filter((cep) => cep !== "00000000")
      .forEach((cep) => {
        cy.request({
          method: "GET",
          url: `https://viacep.com.br/ws/${cep}/json`,
        }).then((response) => {
          expect(response.status).to.eq(200); // Espera um status 200 (OK)
          const cepWithoutHyphen = cep.replace("-", "");
          const cepReturned = response.body.cep.replace("-", "");
          expect(cepReturned).to.equal(cepWithoutHyphen);
          expect(response.body)
            .to.have.property("logradouro")
            .that.is.a("string");
          expect(response.body).to.have.property("bairro").that.is.a("string");
          expect(response.body)
            .to.have.property("localidade")
            .that.is.a("string");
          expect(response.body)
            .to.have.property("uf")
            .that.is.a("string")
            .and.have.lengthOf(2);
          expect(response.body)
            .to.have.property("ibge")
            .that.is.a("string")
            .and.have.lengthOf.at.least(1);
          expect(response.body)
            .to.have.property("gia")
            .that.is.a("string")
            .and.have.lengthOf.at.least(1);
          expect(response.body)
            .to.have.property("ddd")
            .that.is.a("string")
            .and.have.lengthOf.at.least(1);
          expect(response.body)
            .to.have.property("siafi")
            .that.is.a("string")
            .and.have.lengthOf.at.least(1);
        });
      });
  });

  it("Verificar CEPs inválidos", () => {
    const cep = "00000000";
    cy.request({
      method: "GET",
      url: `https://viacep.com.br/ws/${cep}/json`,
    }).then((response) => {
      expect(response.status).to.eq(200); // Ainda espera um status 200, pois a requisição foi bem-sucedida
      expect(response.body).to.have.property("erro", true); // Verifica se a propriedade "erro" é true
    });
  });
});
