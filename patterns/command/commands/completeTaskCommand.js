import Command from "./command.js";
import { findTaskById } from "../utils.js";

export default class CompleteTaskCommand extends Command {
  constructor(taskList, taskId) {
    super(taskList);
    this.taskId = taskId;
  }

  execute() {
    const task = findTaskById(this.taskList, this.taskId);

    if (!task) {
      throw new Error(`Tarefa com o ID ${this.taskId} não encontrada.`);
    }

    task.toggleCompletion();
    console.log(
      `Tarefa "${task.description}" marcada como ${
        task.completed ? "concluída" : "pendente"
      }.`
    );
  }
}
