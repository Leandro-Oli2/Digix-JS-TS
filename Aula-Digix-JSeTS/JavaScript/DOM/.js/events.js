let count = 1;
function addItem(){
    const item = document.createElement('li');
    const list = document.querySelector('ol');
    item.textContent = `Item ${count++}`;
    list.appendChild(item);
}
function removeItem() {
    const list = document.querySelector('ol');
    const item = list.querySelector('li:first-child');

    list.removeChild(item);
}

const buttonAdd = document.getElementById('NewItem');
const buttonRemove = document.getElementById('RemoveItem');
buttonAdd.addEventListener('click', addItem);
buttonRemove.addEventListener('click', removeItem);
