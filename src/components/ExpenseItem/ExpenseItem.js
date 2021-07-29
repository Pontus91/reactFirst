import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';

function ExpenseItem(props) {

    const [stateTitle, setStateTitle] = useState(props.ti);

     

    function clickHandler() {
        setStateTitle("Updated!");
    }


    return (
        <Card className="expense-item">
            <div>
                <ExpenseDate da={props.da} />
            </div>
            <div className="expense-item__description">
                <h2>{stateTitle}</h2>
                <div className="expense-item__price">
                    ${props.am}
                </div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
        
    );
}


export default ExpenseItem;