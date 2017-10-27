

interface task {
    id ?: number,
    title : string,
    status : string
}

class Todo{
    data:task[];
    public test(){
        alert("in todo");
    }
    
    constructor(){  
        this.data = [];
    }
    

    addTask(task : task){
        this.data.push(task);
    }
    getTask(id:number): task{
        return this.data[id-1];
       // return {id : this.id, title : this.title, status : this.status};
    }

    completeTask(id:number) {
        this.data[id].status="COMPLETE";
    }
    activeTask(id:number) {
        this.data[id].status="ACTIVE";
    }
    deleteTask(id:number) {
        this.data[id].status="DELETE";
    }

}

var todos = new Todo();

function getAllTasks() {
    return todos.data;
}

function addTodo(title:string,status:string){
    todos.addTask({
        id : todos.data.length,
        title : title,
        status : status
    });
    console.log(todos.data);
}

function getTodo(id:number) {
    return todos.data[id];
}


