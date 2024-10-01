import { Seed } from "./seed";
export const store = {
  state: {
    Seed,
  },
  setActiveColumn(colId) {
    //Setting the active column properties to true and Set the rest to false
    return this.state.Seed.map(
      (col) => (col.id === colId ? (col.active = true) : (col.active = false))
    );
  },
  // setting the clicked column to true
  getActivecolumn() {
    return this.state.Seed.find((col) => col.active === true);
  },
  // method to new task
  addTask(tasksTitle) {
    const tasks = this.getActivecolumn().tasks;
    tasks.push({ id: tasks.length + 1, title: tasksTitle, edit: false });
  },

  //   method to edit task
  editTask(colId, taskId) {
    const index = this.state.Seed.findIndex((col) => col.id === colId);
    const tasks = this.state.Seed[index].tasks;
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    tasks[taskIndex].edit = true;
    // Resetting or updating edit properties to false of other task
    tasks.map(
      (task) => (task.id === taskId ? (task.edit = true) : (task.edit = false))
    );
  },

  updateTask(colId, taskId, tasksTitle) {
    const col = this.state.Seed.find((col) => col.id === colId);
    const taskIndex = col.tasks.findIndex((task) => task.id === taskId);
    col.tasks[taskIndex].title = tasksTitle;
    col.tasks[taskIndex].edit = false;
  },

  deleteTitle(colId, taskId) {
    const col = this.state.Seed.find((col) => col.id === colId);
    const taskIndex = col.tasks.findIndex((task) => task.id === taskId);
    col.tasks.splice(taskIndex, 1);
  },
};
