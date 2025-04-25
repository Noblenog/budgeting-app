import React from 'react';
import ExpenseItem from './ExpenseItem';


const ExpenseList = () => {
    const expenses = [
        { id: 1, name: 'Groceries', cost: 50 },
        { id: 2, name: 'Rent', cost: 800 },
        { id: 3, name: 'Utilities', cost: 150 },
    ];

    return (
        <ul className="list-group">
            {expenses.map((expense) => (
                <ExpenseItem key={expense.id} name={expense.name} cost={expense.cost} />
            ))}
        </ul>
    );
};

export default ExpenseList;