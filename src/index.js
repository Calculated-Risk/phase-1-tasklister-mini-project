document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form')
    form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let words = document.getElementById('new-task-description')
    console.log(words.value)
    toDoList(words.value)
  }) 
});

function toDoList(todo){
let newPara = document.createElement('p')
newPara.textContent = todo;
document.querySelector('#tasks').appendChild(newPara)

}
