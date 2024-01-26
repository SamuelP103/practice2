let iconImportant = false;
function testRequest(){
    $.ajax({
        type: "GET",
        url: "http://fsdiapi.azurewebsites.net"
    });
}
function saveTask(){
    event.preventDefault(); 
    console.log("Saving task");

    //get val

    const title = $("#title").val();
    const description = $("#description").val();
    const color = $("#color").val();
    const startDate = $("#startDate").val();
    const status = $("#status").val();
    const budget = $("#budget").val();
    


    console.log(taskToSave);

}
let taskToSave = new Task(title, description, color, startDate,status, budget);
$.ajax({
    type: "POST",
    url: "http://fsdiapi.azurewebsites.net/api/tasks/",
    data: JSON.stringify(taskToSave),
    contentType: "application/json",
    success: function(res){
        console.log(res);

    },
    error: function(error) {
        console.log(error);
        
    }
});
displayTask(taskToSave);
function displayTask(task){
    let syntax = `<div class='task'>
<div class='info'>
<h5>${task.title}</h5>
<p>${task.description}</p>
</div>
<label>${task.status}</label>
<div class='date-budget'>
<label>${task.startDate}</label>
<label>${task.budget}</label>
</div>
</div>`;

$("#sectionA").append(syntax);
}
function changeIcon(){
    console.log("changing icon");
    const nonImportant = "fa-solid fa-umbrella";
    const isImportant = "fa-solid fa-mug-hot";
    if (iconImportant){$("#iImportant").removeClass(isImportant).addClass(nonImportant);
    iconImportant = false;
    }
    else{
        $("#iImportant").removeClass(nonImportant).addClass(isImportant);
        iconImportant= true;
    }

}


function init() {
    console.log("example");

    // hook events
    $("#btnSave").click(saveTask);
    $("#iImportant").click(changeIcon);
}

window.onload = init;
