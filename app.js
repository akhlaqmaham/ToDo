var list = document.getElementById("list")

function addTodo(){
    var todoItem = document.getElementById("todo-item")

    var li = document.createElement('li')
    var listText = document.createTextNode(todoItem.value)
    li.appendChild(listText)

    var delButton = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delButton.setAttribute("class","button")
    delButton.setAttribute("onclick","delItem(this)")
    delButton.appendChild(delText)

    var editButton = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editButton.setAttribute("class","button")
    editButton.setAttribute("onclick","editItem(this)")
    editButton.appendChild(editText)

    li.appendChild(delButton)
    li.appendChild(editButton)


    list.appendChild(li)
    todoItem.value = ""
    console.log(li)
}
function delItem(e){
    e.parentNode.remove()
}
function delAll(){
    list.innerHTML = ""
}
function editItem(e){
    var editValue = prompt("enter new value", e.parentNode.firstChild) 
    e.parentNode.firstChild.nodeValue = editValue
}