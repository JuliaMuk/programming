const btnCreateTask = document.getElementById("btn-create-task");
const textTask = document.getElementById("text-task");
const container = document.querySelector(".container");

let tasks = document.querySelectorAll(".task");
console.log(tasks);



/*добавление новой задачи */
btnCreateTask.addEventListener("click", function(event){
    event.preventDefault();//отменяем действие браузера по умолчанию - перезагрузку страницы
    let text = textTask.value;

    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `<span>${text}</span>`;
    container.append(newTask);

   -
    console.log(tasks);
});


/*-----------------*/
const btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    let tasks = document.querySelectorAll(".task"); //nodelist
    
  
    for(let task of tasks){
        // if(task.classList.contains("importent")){
        //     task.classList.remove("importent")
        // }
        // else {
        //     task.classList.add("importent")
        // }
        task.classList.toggle("importent");
    }
})