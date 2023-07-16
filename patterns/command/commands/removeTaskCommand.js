import Command from "./command.js";
import { findTaskById } from "../utils.js";

export default class RemoveTaskCommand extends Command {
  constructor(taskList, taskId) {
    super(taskList);
    this.taskId = taskId;
    this.removedTask = null;
  }

  execute() {
    const taskToRemove = findTaskById(this.taskList, this.taskId);

    if (!taskToRemove) {
      throw new Error(`Tarefa com o ID ${this.taskId} não encontrada.`);
    }

    const taskIndex = this.taskList.indexOf(taskToRemove);
    this.taskList.splice(taskIndex, 1);
    this.removedTask = taskToRemove;

    console.log(`Tarefa "${this.removedTask.description}" removida.`);
  }

  undo() {
    if (this.removedTask) {
      this.taskList.push(this.removedTask);
      console.log(
        `Tarefa "${this.removedTask.description}" adicionada novamente.`
      );
      this.removedTask = null;
    }
  }
}
