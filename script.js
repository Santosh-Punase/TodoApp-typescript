var v;
var input;
var addBtn;
var n_id = 0;

window.onload = function () {
    v = new View();
    input = document.getElementById('addInput');
    addBtn = document.getElementById('BtnAdd');

    var storedData = JSON.parse(localStorage.getItem('data'));
    console.log(storedData);
    storedData.forEach(element => {
        console.log(element);
        console.log(element.id);
        console.log(element.title);
        v.addElement(element.id,element.title, element.status);
    });


    addBtn.onclick = function () {
        var task = input.value;
        addTodo(task, "ACTIVE");

        input.value = "";

        if (task === '')
            alert("Enter some task !!!");
        else {
            v.addElement(n_id, task, "ACTIVE");
            data = getAllTasks();
            var jdata = JSON.stringify(data);
            localStorage.setItem('data',jdata);
        }
        n_id++;

        console.log(localStorage.getItem('data'));
      //  console.log("added");
    };
}

function updateList(id){
    var oldItem = document.getElementById("data-id-" + id);
    
        v.addElement(id, todos.data[id].title, todos.data[id].status);
        oldItem.remove();
        
        var data = getAllTasks();
        var jdata = JSON.stringify(data);
        localStorage.setItem('data',jdata);
        
        console.log(localStorage.getItem('data'));
}

function completeTask(id) {
    todos.completeTask(id);
    updateList(id);
};

function activeTask(id) {
    todos.activeTask(id);
    updateList(id);
};

function deleteTask(id) {
    todos.deleteTask(id);
    updateList(id);
};