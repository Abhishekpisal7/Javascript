let listItem = document.querySelector('.listItem')
let addToList = document.querySelector('#addToList')
let inputValue = document.querySelector("#inputValue")
let list = document.querySelector('.list')
let deleteListItem = document.querySelector('#deleteListItem')

let task = []

function addElementList() {
    if(!inputValue){
        return
    }

    task.push(inputValue.value)

    let div = document.createElement('div');
    div.className = 'listItem';

    div.innerHTML = `
        <div class='content'>
            <h4>Work To Do</h4>
            <p>${inputValue.value}</pp>
        </div> 
        <button class="deleteListItem">Delete</button>
        `        
    list.prepend(div)
    inputValue.value = ''
}

addToList.addEventListener('click', addElementList)

list.addEventListener('click', (event) => {
    if(event.target.classList.contains('deleteListItem')){
        event.target.parentNode.remove()
    }
})