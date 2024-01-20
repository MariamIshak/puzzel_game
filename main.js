var Item=document.getElementsByClassName("Item")
for (var j = 0; Item.length > j; j++) {
    Item[j].addEventListener('dragstart', function (event) {
        event.dataTransfer.setData("text", this.id );
    });
}


var container =document.getElementsByClassName("containers")
for (var i = 0; container.length > i; i++) {
    container[i].addEventListener("dragover", dragoverFun);
    container[i].addEventListener("drop", dropFun);
}

function dragoverFun(event) {
    event.preventDefault();
}
var r = document.getElementById("right")
var w = document.getElementById("wrong")
function dropFun(event) {
    var droppedItem = event.dataTransfer.getData("text");
    console.log(droppedItem)
    var imgs = document.getElementById(droppedItem)
    console.log(imgs)
    if(this.title === droppedItem)
    {
        r.play();
        this.appendChild(imgs)
    }
    else{
        w.play();
    }
 }

 