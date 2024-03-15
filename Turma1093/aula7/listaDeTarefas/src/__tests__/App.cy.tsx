import ItemList from "../components/Items/ItemList";
import CreateItemForm from "../components/Items/CreateItemForm";
import { mount } from "@cypress/react18";

describe("Teste do componente: <ItemList>", () => {
  const novoItem = {
    text: "Novo Item",
    date: "03/15/2024",
  };

  it("Teste sem item", () => {
    mount(<ItemList items={[]} deleteItem={() => {}} updateItem={() => {}} />);
    cy.contains("Desculpe mas não encontrei nenhuma tarefa!").should(
      "be.visible"
    );
  });

  it("Teste para montagem", () => {
    mount(
      <ItemList
        items={[novoItem]}
        deleteItem={() => {}}
        updateItem={() => {}}
      />
    );
    cy.contains("Novo Item").should("be.visible");
  });

  it("Teste para criar o item", () => {
    mount(<CreateItemForm addItem={() => novoItem} />);
    cy.get('input[type="text"]').should("exist");
    cy.get('input[type="text"]').type("Novo Item");
    cy.get('input[type="text"]').should("have.value", "Novo Item");
    cy.contains("Adicionar").should("exist").click();
  });

  it("Teste para editar o item", () => {
    mount(
      <ItemList
        items={[novoItem]}
        deleteItem={() => {}}
        updateItem={() => {}}
      />
    );

    cy.contains("Editar").should("exist").click();
    cy.get("input").should("be.visible").type("Novo Item - 1");
    cy.contains("Salvar").click();
    cy.contains("Novo Item").should("be.visible");
  });

  it("Teste para deletar o item", () => {
    mount(
      <ItemList
        items={[novoItem]}
        deleteItem={() => {}}
        updateItem={() => {}}
      />
    );
    cy.contains("Excluir").should("exist").click();
    cy.contains("Novo Item - 1").should("not.exist");
  });
});
