let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`)
    row.insertCell(0).innerHTML = document.getElementById('new-contact-name').value;
    row.insertCell(1).innerHTML = document.getElementById('phone').value;
    row.insertCell(2).innerHTML = document.getElementById('email').value;
    row.insertCell(3).innerHTML = document.getElementById('city').value;
    row.insertCell(4).innerHTML = document.getElementById('birthday').value;
    row.insertCell(5).innerHTML = document.getElementById('category').value;
    let actions = row.insertCell(6);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-contact-name').value = ' ';
    document.getElementById('phone').value = ' ';
    document.getElementById('email').value = ' ';
    document.getElementById('city').value = ' ';
    document.getElementById('category').value = ' ';

});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}