import React, {useContext, useState} from 'react';
import ExpenseItem from './ExpenseItem';
import {AppContext} from '../context/AppContext';


const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    const [searchTerm, setSearchTerm] = useState(''); // State to store the search term

    const filteredExpenses = expenses.filter((expense) =>
        expense.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {/* Expense List */}
            <ul className="list-group">
                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        id={expense.id}
                        name={expense.name}
                        cost={expense.cost}
                    />
                ))}
            </ul>

            {/* Search Bar */}
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search expenses..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />  
        </div>
    );
};

export default ExpenseList;