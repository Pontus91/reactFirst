import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

function ExpenseItem(props) {


    return (
        <div className="expense-item">
            <div>
                <ExpenseDate da={props.da} />
            </div>
            <div className="expense-item__description">
                <h2>{props.ti}</h2>
                <div className="expense-item__price">
                    ${props.am}
                </div>
            </div>
        </div>
        
    );
}


export default ExpenseItem;