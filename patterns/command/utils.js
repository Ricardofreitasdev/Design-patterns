export function findTaskById(taskList, taskId) {
  return taskList.find((task) => task.id === taskId);
}
