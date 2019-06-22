var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var list = document.getElementById("myList");
var btnList = document.getElementById("btnList");
var i = 0;
function inputLength(){
    return input.value.length;
}

function tagging(i, li, delButton){
    li.classList.add("delClick-"+i);
    delButton.classList.add("delClick-"+i);
}

function creatingListItem(){
        var li = document.createElement("li");
        var txtnode = document.createTextNode(input.value);
        li.appendChild(txtnode);
        
        var delButton = document.createElement("button");
        delButton.appendChild(document.createTextNode("delete"));
        delButton.classList.add("straight");
        
        tagging(i, li, delButton);
        i++;
        list.appendChild(li);
        btnList.appendChild(delButton);
        delButton.addEventListener("click", function(){
            var temp = delButton.classList.item(1);
            for(var itemNum = 0; itemNum <= 1; itemNum++){
                var deleting = document.getElementsByClassName(temp)[0];
                deleting.parentNode.removeChild(deleting);
            }
            
        })
        li.addEventListener("click", function(){
        li.classList.toggle("done");
    })
    input.value="";
}

function addListAfterCLick(){
    if(inputLength () > 0){
            creatingListItem();
       }
}

function addListAfterKeypress(event){
    if(inputLength() > 0 && event.which === 13){
        creatingListItem();
    } 
}
button.addEventListener("click", addListAfterCLick);
input.addEventListener("keydown", addListAfterKeypress);