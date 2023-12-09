"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt = __importStar(require("prompt"));
class TodoList {
    constructor() {
        this.tasks = [];
        this.taskIdCounter = 1;
    }
    addTask(description) {
        const task = {
            id: this.taskIdCounter++,
            description
        };
        this.tasks.push(task);
        console.log(`Tarefa adicionanada: ${description}`);
    }
    listTasks() {
        if (this.tasks.length === 0) {
            console.log('Não existem tarefas na lista.');
        }
        else {
            console.log('Tarefas: ');
            this.tasks.forEach(task => {
                console.log(`- ${task.description} (ID: ${task.id})`);
            });
        }
    }
}
prompt.start();
const todoList = new TodoList();
function showMenu() {
    console.log('🤖 🤖 🤖 ====== Lista de tarefas ====== 🤖 🤖 🤖');
    console.log('1. Adicionar');
    console.log('2. Listar');
    console.log('3. Sair');
}
function processChoice(choice) {
    switch (choice) {
        case '1':
            prompt.get(['description'], (err, result) => {
                if (err) {
                    console.error(`O erro é: ${err.message}`);
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
            console.log('A turma 1095 agradece sua preferência!');
            process.exit();
            break;
        default:
            console.log('Hummm, acho que não entendi. Tente novamente: ');
            askForChoice();
    }
}
function askForChoice() {
    prompt.get(['choice'], (err, result) => {
        if (err) {
            console.error(`Ops não entendi: ${err.message}`);
            process.exit(1);
        }
        processChoice(result.choice);
    });
}
showMenu();
askForChoice();
