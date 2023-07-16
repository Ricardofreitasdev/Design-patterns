import CompleteTaskCommand from "./commands/completeTaskCommand.js";
import RemoveTaskCommand from "./commands/removeTaskCommand.js";
import UpdateTaskCommand from "./commands/updateTaskCommand.js";
import AddTasksCommand from "./commands/addTaskCommand.js";
import Task from "./task.js";

const taskList = [];
const tasksToAdd = [
  new Task(1, "Estudar Design Patterns"),
  new Task(2, "Estudar JavaScript"),
];

const addTasksCommand = new AddTasksCommand(taskList, tasksToAdd);

const completeTaskCommand = new CompleteTaskCommand(taskList, 1);
addTasksCommand.execute();
completeTaskCommand.execute();

const removeTaskCommand = new RemoveTaskCommand(taskList, 2);
removeTaskCommand.execute();
removeTaskCommand.undo();

const updateDescriptionCommand = new UpdateTaskCommand(
  taskList,
  2,
  "Estudar Vue.js"
);

updateDescriptionCommand.execute();
updateDescriptionCommand.undo();
