var Todo = /** @class */ (function () {
    function Todo() {
    }
    Todo.prototype.addTask = function (task) {
        this.id = task.id;
        this.title = task.title;
        this.status = task.status;
    };
    Todo.prototype.getTask = function () {
        return { id: this.id, title: this.title, status: this.status };
    };
    return Todo;
}());
var todos = new Todo();
function addTodo(id, title, status) {
    todos.addTask({
        id: id,
        title: title,
        status: status
    });
}
function getTodo() {
    return todos.getTask();
}
