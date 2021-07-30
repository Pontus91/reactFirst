import React from 'react';
import './NewExpense.css';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

function NewExpense (props) {

    const saveExpenseDataHandlerToExecuteFromChildExpenseForm = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandlerToExecuteFromChildExpenseForm} />
        </div>
    );
}


export default NewExpense;