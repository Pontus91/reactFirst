import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

function NewExpense (props) {

    const [currentNewClick, setNewClick] = useState(false);

    const saveExpenseDataHandlerToExecuteFromChildExpenseForm = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };



    const newClickHandler = ()=> {
        setNewClick(true);
    }


    const cancelNewClickHandler = ()=> {
        setNewClick(false);
    }
    

    return (
        <div className="new-expense">
            
            {
                currentNewClick === true ?
                <ExpenseForm cancelForm={cancelNewClickHandler} onSaveExpenseData={saveExpenseDataHandlerToExecuteFromChildExpenseForm} />
                :
                <button onClick={newClickHandler}>Add new expense!</button>
            }
            
        </div>
    );
};


export default NewExpense;

