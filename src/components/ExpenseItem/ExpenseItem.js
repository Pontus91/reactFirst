import React from 'react';

import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';

function ExpenseItem(props) {

   


    return (
        <Card className="expense-item">
            <div>
                <ExpenseDate dateComp={props.expDate} />
            </div>
            <div className="expense-item__description">
                <h2>{props.expTitle}</h2>
                <div className="expense-item__price">
                    ${props.expAmount}
                </div>
            </div>
            
        </Card>
        
    );
}


export default ExpenseItem;