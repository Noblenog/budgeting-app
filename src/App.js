import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import AddBudget from './components/AddBudget';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import {AppProvider} from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
    <div className="container d-flex justify-content-center flex-column">
      <h1 className="mt-3">Budgeting App</h1>
      <div className="row mt-3">
        <AddBudget />
      </div>
      <div className= 'row mt-3'>
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <ExpenseTotal />
        </div>
      </div>
      <h3 className ='mt-3'>Expenses</h3>
      <div className = 'row mt-3'>
        <ExpenseList />
      </div>
      <h3 className ='mt-3'>Add Expense</h3>
      <div className = 'row mt-3'>
        <div className = 'col-sm'>
        <AddExpenseForm />
        </div>
        </div>
    </div>
    </AppProvider>
  );
};
export default App;
