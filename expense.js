let expenses = [];
let totalExpenses = 0;
const expenseList = document.getElementById('expense-list');
const totalExpensesDisplay = document.getElementById('total-expenses');
const addExpenseButton = document.getElementById('add-expense');

function addExpense() {
    const dateInput = document.getElementById('date');
    const descriptionInput = document.getElementById('description');
    const amountInput = document.getElementById('amount');

    const expense = {
        date: dateInput.value,
        description: descriptionInput.value,
        amount: parseFloat(amountInput.value)
    };

    expenses.push(expense);


    renderExpenses();
    updateTotalExpenses();

    dateInput.value = '';
    description

    descriptionInput.value = '';
    amountInput.value = '';
}

function renderExpenses() {
    expenseList.innerHTML = '';

    expenses.forEach(expense => {
        const row = document.createElement('tr');
        const dateCell = document.createElement('td');
        const descriptionCell = document.createElement('td');
        const amountCell = document.createElement('td');

        dateCell.textContent = expense.date;
        descriptionCell.textContent = expense.description;
        amountCell.textContent = expense.amount.toFixed(2);

        row.appendChild(dateCell);
        row.appendChild(descriptionCell);
        row.appendChild(amountCell);

        expenseList.appendChild(row);
    });
}

function updateTotalExpenses() {
    totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    totalExpensesDisplay.textContent = totalExpenses.toFixed(2);
}

addExpenseButton.addEventListener('click', addExpense);