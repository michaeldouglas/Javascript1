import * as prompt from 'prompt';

interface Task {
  id: number;
  description: string;
}

interface PromptError {
  message: string;
  stack?: string;
}

interface PromptResult {
  [key: string]: any;
}

class TodoList {
  tasks: Task[] = [];
  taskIdCounter: number = 1;

  addTask(description: string): void {
    const task: Task = {
      id: this.taskIdCounter++,
      description,
    };
    this.tasks.push(task);
    console.log(`Task added: ${description}`);
  }

  listTasks(): void {
    if (this.tasks.length === 0) {
      console.log('No tasks in the list.');
    } else {
      console.log('Tasks:');
      this.tasks.forEach(task => {
        console.log(`- ${task.description} (ID: ${task.id})`);
      });
    }
  }
}

prompt.start();

const todoList = new TodoList();

function showMenu() {
  console.log('===== Lista de tarefas =====');
  console.log('1. Adicionar');
  console.log('2. Listar');
  console.log('3. Sair');
}

function processChoice(choice: string): void {
  switch (choice) {
    case '1':
      prompt.get(['description'], (err: PromptError | null, result: PromptResult) => {
        if (err) {
          console.error(`Error: ${err.message}`);
          process.exit(1);
        }
        todoList.addTask(result.description);
        showMenu();
        askForChoice();
      });
      break;
    case '2':
      todoList.listTasks();
      showMenu();
      askForChoice();
      break;
    case '3':
      console.log('Goodbye!');
      process.exit();
      break;
    default:
      console.log('Invalid choice. Please try again.');
      askForChoice();
  }
}

function askForChoice(): void {
  prompt.get(['choice'], (err: PromptError | null, result: PromptResult) => {
    if (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    processChoice(result.choice);
  });
}

showMenu();
askForChoice();
