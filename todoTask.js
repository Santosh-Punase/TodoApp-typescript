var Todo = /** @class */ (function () {
    function Todo() {
        this.data = [];
    }
    Todo.prototype.test = function () {
        alert("in todo");
    };
    Todo.prototype.addTask = function (task) {
        this.data.push(task);
    };
    Todo.prototype.getTask = function (id) {
        return this.data[id - 1];
        // return {id : this.id, title : this.title, status : this.status};
    };
    Todo.prototype.completeTask = function (id) {
        this.data[id].status = "COMPLETE";
    };
    Todo.prototype.activeTask = function (id) {
        this.data[id].status = "ACTIVE";
    };
    Todo.prototype.deleteTask = function (id) {
        this.data[id].status = "DELETE";
    };
    return Todo;
}());
var todos = new Todo();
function getAllTasks() {
    return todos.data;
}
function addTodo(title, status) {
    todos.addTask({
        id: todos.data.length,
        title: title,
        status: status
    });
    console.log(todos.data);
}
function getTodo(id) {
    return todos.data[id];
}
