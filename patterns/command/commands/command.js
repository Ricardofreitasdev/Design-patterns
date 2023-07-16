export default class Command {
  constructor(taskList) {
    this.taskList = taskList;
  }

  execute() {
    throw new Error("O método execute deve ser implementado.");
  }
}
