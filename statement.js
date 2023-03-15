
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function addTransaction() {
  const amount = document.getElementById('amount').value;
  const type = document.getElementById('type').value;
  const transaction = { amount, type };
  transactions.push(transaction);
  localStorage.setItem('transactions', JSON.stringify(transactions));
  displayTransactions();
}

function displayTransactions() {
  const transactionList = document.getElementById('transactions');
  transactionList.innerHTML = '';
  transactions.forEach(transaction => {
    const li = document.createElement('li');
    li.textContent = `${transaction.type}: AED ${transaction.amount}`;
    transactionList.appendChild(li);
  });
  updateBalance();
}


function updateBalance() {
  const balanceElement = document.getElementById('balance');
  let balance = 0;
  transactions.forEach(transaction => {
    if (transaction.type === 'deposit') {
      balance += parseInt(transaction.amount);
    } else if (transaction.type === 'withdrawal') {
      balance -= parseInt(transaction.amount);
    }
  });
  balanceElement.textContent = `AED ${balance}`;
}

displayTransactions();
