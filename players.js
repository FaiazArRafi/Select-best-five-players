// adding player list
const list = [];

function playersList() {

    const listContainer = document.getElementById("selected-five");
    listContainer.textContent = '';

    for (let i = 0; i < list.length; i++) {

        const li = document.createElement("li");
        li.innerHTML = `
        <li>${i + 1} ${list[i].playerName}</li>
        `;

        listContainer.appendChild(li);
        return li;
    }

}

function addToList(element) {
    const playerName = element.parentNode.children[1].innerText;

    const pd = {
        playerName: playerName,
    }

    list.push(pd);

    playersList();
}
//

document.getElementById('btn-player-calculation').addEventListener('click', function () {
    const perPlayerField = document.getElementById('per-player');
    const perPlayerString = perPlayerField.value;
    const perPlayer = parseFloat(perPlayerString);


    const playerExpensesField = document.getElementById('player-expenses');
    const playerExpensesString = playerExpensesField.innerText;
    const playerExpenses = parseFloat(playerExpensesString);

    const expenses = perPlayer * 5;

    playerExpensesField.innerText = expenses;
    return playerExpenses;
})

