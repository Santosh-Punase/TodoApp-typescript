window.onload = function(){
    var input = document.getElementById('addInput');
    var addBtn = document.getElementById('BtnAdd');
    
    var l_id = localStorage.getItem("id");
    var n_id;
    if(l_id==null){
        localStorage.setItem("id","1");
        n_id = 1;
    }
        
    else {
           n_id = parseInt(localStorage.getItem('id')) + 1;
           localStorage.setItem("id",n_id);
        }

        
    addBtn.onclick = function(){
        var task = input.value;

        addTodo(n_id, task, "active");   
        
        var lst = document.getElementById('todo_div_id');
        var li = document.createElement("li");
        var txt = document.createTextNode(task);
        li.appendChild(txt);
        input.value="";

        if(task==='')
            alert("Enter some task !!!");
        else
            lst.appendChild(li);

        
        localStorage.setItem("data",JSON.stringify(getTodo()));        
        console.log("added");
    };
    
}
