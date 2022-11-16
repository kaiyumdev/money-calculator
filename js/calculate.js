function getValue(input) {
    const productInput = document.getElementById(input);
    const productIncome = parseInt(productInput.value);
    return productIncome;
}

function getTextAmount(amountText){
    const expense = document.getElementById(amountText);
    const expenseAmount = expense.innerText;
    return expenseAmount;
}

function calculateAmount(){
    const incomeAmount = getValue('income');
    const foodAmount = getValue('food');
    const rentAmount = getValue('rent');
    const clothesAmount = getValue('clothes');
    if(incomeAmount<=0 || isNaN(incomeAmount) || foodAmount<=0 || isNaN(foodAmount) || rentAmount<=0 || isNaN(rentAmount) || clothesAmount<=0 || isNaN(clothesAmount)){
        alert('Please enter a valid number of amount');
    }
    // expense amount
    const expense = document.getElementById('expense');
    const expenseAmount = getTextAmount('expense');
    expense.innerText =   (foodAmount + rentAmount + clothesAmount);

    if(incomeAmount<expense.innerText){
        alert("You don't have sufficient balance");
    }
    // balance amount
    const balance = document.getElementById('balance');
    const balanceAmount = getTextAmount('balance');
    balance.innerText = incomeAmount - (foodAmount + rentAmount + clothesAmount);
}

function savingAmount(){
    const incomeAmount = getValue('income');
    const foodAmount = getValue('food');
    const rentAmount = getValue('rent');
    const clothesAmount = getValue('clothes');
    calculateAmount();
    // saving amount
    const saveAmount = getValue('save');
    const SavingAmountText = document.getElementById('save-amount');
    const SavingAmount = SavingAmountText.innerText;
    SavingAmountText.innerText = (incomeAmount * saveAmount) / 100;
    // balance amount
    const balance = document.getElementById('balance');
    const balanceAmount = getTextAmount('balance');
    balance.innerText = incomeAmount - (foodAmount + rentAmount + clothesAmount);
    // remaining amount
    const RemainingAmountText = document.getElementById('remaining-amount');
    const RemainingAmount = RemainingAmountText.innerText;
    RemainingAmountText.innerText = (balance.innerText - SavingAmountText.innerText);
}

