import Command from "./command.js";
import { findTaskById } from "../utils.js";

export default class UpdateTaskCommand extends Command {
  constructor(taskList, taskId, taskNewDescription) {
    super(taskList);
    this.taskId = taskId;
    this.taskNewDescription = taskNewDescription;
    this.previousDescription = null;
  }

  execute() {
    const task = findTaskById(this.taskList, this.taskId);

    if (!task) {
      throw new Error(`Tarefa com o ID ${this.taskId} não encontrada.`);
    }

    this.previousDescription = task.description;
    task.updateDescription(this.taskNewDescription);
    console.log(`Tarefa "${task.id}" atualizada para "${task.description}"`);
  }

  undo() {
    const task = findTaskById(this.taskList, this.taskId);
    if (task) {
      task.description = this.previousDescription;
      console.log(`Descrição da tarefa "${task.description}" restaurada.`);
      this.previousDescription = null;
    }
  }
}
