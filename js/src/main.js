const inputEl = document.getElementById('quick-note');
const addBtn = document.getElementById('add');
const deleteAllBtn = document.getElementById('delete-all');
const ul = document.getElementById('ul');
let inputArray = [];

let QuickNoteFromLocalStorage = JSON.parse(localStorage.getItem("QuickNote"))

if (QuickNoteFromLocalStorage) {
    inputArray = QuickNoteFromLocalStorage;
    render()
}

addBtn.addEventListener("click", function () {
    inputArray.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("QuickNote", JSON.stringify(inputArray))
    render()
})

deleteAllBtn.addEventListener('click', function(){
    localStorage.clear();
    ul.innerHTML = ""
    inputArray = [

    ]
});

function render() {
    let listItems = "";
    for (let i = 0; i < inputArray.length; i++) {
        listItems += `
                    <li>
                        ${inputArray[i]}  
                    </li>
                    `
    }
    
    ul.innerHTML = listItems;
}
