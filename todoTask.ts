

interface task {
    id : number,
    title : string,
    status : string
}

class Todo{
    
    public id : number;
    public title : string;
    public status : string;

    constructor(){  
    }

    addTask(task : task){
        this.id = task.id;
        this.title = task.title;
        this.status = task.status;
    }
    getTask(): task{
        return {id : this.id, title : this.title, status : this.status};
    }
}

var todos = new Todo();

function addTodo(id:number, title:string,status:string){
    todos.addTask({
        id : id,
        title : title,
        status : status
    });
}

function getTodo():task {
    return todos.getTask();
}
