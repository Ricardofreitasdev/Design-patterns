export default class Task {
  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.completed = false;
  }

  toggleCompletion() {
    this.completed = !this.completed;
  }

  updateDescription(description) {
    this.description = description;
  }
}
