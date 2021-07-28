import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';

function ExpenseItem(props) {



    let title = props.ti;

    function clickHandler() {
        title = "ddd";
    }


    return (
        <Card className="expense-item">
            <div>
                <ExpenseDate da={props.da} />
            </div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${props.am}
                </div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
        
    );
}


export default ExpenseItem;