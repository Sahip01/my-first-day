let tasks =[]
let btn =document.getElementById("addBtn")
      let input=document.getElementById("taskInput")
      let ul=document.getElementById("taskList")

      btn.addEventListener("click",function () {
    tasks.push (input.value);
    let li=document.createElement("li")
    //  let text=tasks
     li.innerText=input.value;
    // ul.appendChild(li)
    // input.value=""
})