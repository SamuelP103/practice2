let iconImportant = false;

function saveTask(){

    console.log("Saving task");
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



















function init(){
    console.log("example");

    //hook event

    $("#btnSave").click(saveTask);
    $("#iImportant").click(changeIcon);
    $("#iImportant").dblclick(changeIcon2);
}

window.onload = init;