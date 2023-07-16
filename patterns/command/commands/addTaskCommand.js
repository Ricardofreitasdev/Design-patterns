import Command from "./command.js";

export default class AddTasksCommand extends Command {
  constructor(taskList, tasks) {
    super(taskList);
    this.tasks = tasks;
  }

  execute() {
    this.tasks.forEach((task) => {
      this.taskList.push(task);
      console.log(`Tarefa "${task.description}" adicionada.`);
    });
  }
}
