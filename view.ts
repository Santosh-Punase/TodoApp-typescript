class View{
    public test(){
        alert("in");
    }

    public getParent(status:string) : string {
        switch(status){
            case 'ACTIVE': return 'todo_div_id';
            case 'COMPLETE': return 'todo_complete_div_id';
            case 'DELETE': return 'todo_delete_div_id';
        }
    }
    public addElement(id:number, task:string, status:string){
        var row = document.createElement("tr");
        var data1 = document.createElement("td");
        var data2 = document.createElement("td");
        var data3 = document.createElement("td");

        if(status == "ACTIVE"){
            //add a complete button
            var complete_button  = document.createElement("button");
            complete_button.setAttribute("class","w3-button block w3-light-blue w3-opacity w3-section fa fa-check w3-left");
            complete_button.setAttribute("onclick","completeTask("+id+")" );
            complete_button.setAttribute("title","Mark Complete");
           data1.appendChild(complete_button);
        }

        if(status == "COMPLETE"){
            //add a complete button
            var active_button  = document.createElement("button");
            active_button.setAttribute("class","w3-button block w3-green w3-opacity w3-section fa fa-check w3-left");
            active_button.setAttribute("onclick","activeTask("+id+")" );
            active_button.setAttribute("title","Mark Active");
            data1.appendChild(active_button);
        }
        if(status == "DELETE"){
            //add undo delete button
            var undo_button  = document.createElement("button");
            undo_button.setAttribute("class","w3-button block w3-blue w3-opacity w3-section fa fa-undo w3-left");
            undo_button.setAttribute("onclick","activeTask("+id+")" );
            undo_button.setAttribute("title","Undo Delete");
            data1.appendChild(undo_button);
        }

        data2.innerText = task;
        row.setAttribute("id","data-id-" +id);
        row.setAttribute("class","todoStatus"+status);

        if(status != "DELETE"){
            //add a DELETE button
            var delete_button  = document.createElement("button");
            delete_button.setAttribute("class","w3-button block w3-red w3-section w3-opacity fa fa-remove w3-right");
            delete_button.setAttribute("onclick","deleteTask("+id+")" );
            delete_button.setAttribute("title","Delete");
            data3.appendChild(delete_button);
        }

        row.appendChild(data1);
        row.appendChild(data2);
        row.appendChild(data3);

        var parent = document.getElementById(this.getParent(status));
        parent.appendChild(row);
    }
}