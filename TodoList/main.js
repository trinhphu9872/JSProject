let arr = [];

getId("enterApp").addEventListener("click", function (e) {
    e.preventDefault();
    let data = getId('Task').value;
    arr.push(data)
    getId("noteTask").innerHTML = addTask(data);
})

function addTask(data) {
    let content = ''
    return content += `
        <li class='print'>${data} </li>
    `
}
getId('clear').addEventListener('click', function (e) {
    e.preventDefault();
    getId('noteTask').innerHTML = ''
})


function getId(id) {
    return document.getElementById(id)
}
