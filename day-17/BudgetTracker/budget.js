function createBudgetTracker(name, initialBudget){
   const user ={
        userName : name,
        budget : initialBudget,
    }

    let expenses = [];
    let id = 1;


    function addExpense (amount, category, description){
        
        const expense ={
            id : id++,
            amount: amount,
            category : category,
            description : description,
        }
        expenses.push(expense);
        return expense;
    }

    function removeExpense(id){
       return expenses =expenses.filter(exp => exp.id !== id);
    }

    // Update Expenses

    function updateExpense (id, updateData){
        const expense = expenses.find(exp => exp.id ===id);
        if(!expense) return null;

        Object.assaign(expense, updateData);
        return expense;
    }

    function totalExpenses(){
        return expenses.reduce((sum,exp)=> sum+exp.amount,0);
    }

    function getExpensesByCategory (category){
        return expenses.filter(exp => exp.category === category);
    }

    // highest expense //

    function highestExpense(){
        if(expenses.length === 0) return null;

        return expenses.reduce((max, exp)=> (exp.amount > max.amount? exp : max));
    }

    // lowest expense //

    function lowestExpense(){
        if (expenses.length === 0) return null;
        return expenses.reduce((min, exp)=> (exp.amount< min.amount ? exp : min)); 
    }

    return{
        addExpense,
        removeExpense,
        updateExpense,
        totalExpenses,
        getExpensesByCategory,
        highestExpense,
        lowestExpense,

    }
}

const AliceBudget = createBudgetTracker('Alice', 200);
console.log(AliceBudget.addExpense(50, 'Food', 'Groceries for the week'));
console.log(AliceBudget.removeExpense(1));
