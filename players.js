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

    }


}

function addToList(element) {
    const playerName = element.parentNode.children[1].innerText;

    const pd = {
        playerName: playerName,
    }

    if (list.length < 5) {
        list.push(pd);
    }
    else {
        alert("Sorry, You can't select more than five players");
    }

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

document.getElementById('btn-total-calculation').addEventListener('click', function () {

    const perPlayerField = document.getElementById('per-player');
    const perPlayerString = perPlayerField.value;
    const perPlayer = parseFloat(perPlayerString);


    const playerExpensesField = document.getElementById('player-expenses');
    const playerExpensesString = playerExpensesField.innerText;
    const playerExpenses = parseFloat(playerExpensesString);

    const expenses = perPlayer * 5;

    playerExpensesField.innerText = expenses;

    const managerField = document.getElementById('manager');
    const managerString = managerField.value;
    const manager = parseFloat(managerString);

    const coachField = document.getElementById('coach');
    const coachString = coachField.value;
    const coach = parseFloat(coachString);

    const totalExpensesField = document.getElementById('total-expenses');
    const totalExpensesString = totalExpensesField.innerText;
    const totalExpenses = parseFloat(totalExpensesString);


    const total = manager + coach + playerExpenses;

    totalExpensesField.innerText = total;

})