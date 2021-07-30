import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm (props) {

    const [stateInputTitle, setStateInputTitle] = useState('');
    const [stateInputAmount, setStateInputAmount] = useState('');
    const [stateInputDate, setStateInputDate] = useState('');

    const titleChangeHandler = (event) => {
        setStateInputTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setStateInputAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setStateInputDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
            titleData: stateInputTitle,
            amountData: stateInputAmount,
            dateData: new Date(stateInputDate)
        }

        props.onSaveExpenseData(expenseData);
        setStateInputTitle('');
        setStateInputAmount('');
        setStateInputDate('');
    }

 
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={stateInputTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={stateInputAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" step="2022-12-31" value={stateInputDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}


export default ExpenseForm;