// Initialize an empty array to store expenses
const expenses = [];

// Function to add an expense to the list
function addExpense(date, amount, description, paidBy) {
    const expense = { date, amount, description, paidBy };
    expenses.push(expense);
}

// Function to display expenses in the expense-list section
function displayExpenses() {
    const expenseList = document.getElementById("expense-list");
    expenseList.innerHTML = ""; // Clear previous entries

    for (const expense of expenses) {
        const expenseItem = document.createElement("div");
        expenseItem.classList.add("expense-item");
        expenseItem.innerHTML = `
            <p>Date: ${expense.date}</p>
            <p>Amount: ${expense.amount}</p>
            <p>Description: ${expense.description}</p>
            <p>Paid by: ${expense.paidBy}</p>
        `;
        expenseList.appendChild(expenseItem);
    }
}

// Event listener for form submission
document.getElementById("expense-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    // Get form input values
    const date = document.getElementById("date").value;
    const amount = document.getElementById("amount").value;
    const description = document.getElementById("description").value;
    const paidBy = document.getElementById("paid-by").value;

    // Add the expense to the list
    addExpense(date, amount, description, paidBy);

    // Display updated expenses
    displayExpenses();

    // Clear form fields
    document.getElementById("date").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("description").value = "";
    document.getElementById("paid-by").value = "";
});

// Initial display of expenses
displayExpenses();
