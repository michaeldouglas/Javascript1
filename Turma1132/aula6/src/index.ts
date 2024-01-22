import * as prompt from "prompt";

// interface -> contratos
// TODO: Mover as interfaces para outro arquivo e importar aqui
interface Task {
  //Tarefa
  id: number;
  description: string;
}

interface PromptError {
  message: string;
  stack?: string;
}

// Tipo da chave -> contexto de tipagem
interface PromptResult {
  [key: string]: any;
}

// TODO: Mover a classe para outro arquivo e importar aqui
class TodoList {
  tasks: Task[] = [];
  taskIdCounter: number = 1;

  addTask(description: string): void {
    const task: Task = {
      id: this.taskIdCounter++,
      description,
    };
    this.tasks.push(task);
    console.log(`Tarefa Adicionada: ${description}`);
  }

  listTasks(): void {
    if (this.tasks.length === 0) {
      console.log("Não tem tarefas!");
    } else {
      console.log("Tarefas: ");
      this.tasks.forEach((task) => {
        console.log(`- ${task.description} (ID: ${task.id})`);
      });
    }
  }
}

prompt.start();

const todoList = new TodoList();

// stdin e stdout
function showMenu() {
  console.log(" ===== Lista de tarefas 1132 ===== ");
  console.log("1. Adicionar");
  console.log("2. Listar");
  console.log("3. Sair");
}

function processChoice(choice: string): void {
  switch (choice) {
    case "1":
      prompt.get(
        ["description"],
        (err: PromptError | null, result: PromptResult) => {
          if (err) {
            console.error(`Erro: ${err.message}`);
            process.exit(1);
          }
          todoList.addTask(result.description);
          showMenu();
          askForChoice();
        }
      );
      break;
    case "2":
      todoList.listTasks();
      showMenu();
      askForChoice();
      break;
    case "3":
      console.log("Ate logo!");
      process.exit();
    default:
      console.log("Opcao invalida. Escolha 1, 2 ou 3");
      askForChoice();
  }
}

function askForChoice(): void {
  prompt.get(["choice"], (err: PromptError | null, result: PromptResult) => {
    if (err) {
      console.log(`Erro ao escolher a opcao: ${err.message}`);
      process.exit(1);
    }
    processChoice(result.choice);
  });
}

showMenu();
askForChoice();
