import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../Card/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';



function Expenses (props) {

    const [currentDataFromFilterComp, setDataFromFilterComp] = useState('2022');

    const saveDataFromFilterCompInAStateHere = (valueFromFilterComp) => {
      setDataFromFilterComp(valueFromFilterComp);

    }

    console.log(currentDataFromFilterComp);


    return (
      <div>
      <Card className="expenses">
        <ExpensesFilter saveInAStateInExpComp={saveDataFromFilterCompInAStateHere} />

        <ExpenseItem ti={props.item[0].title} am={props.item[0].amount} da={props.item[0].date} />
        <ExpenseItem ti={props.item[1].title} am={props.item[1].amount} da={props.item[1].date} />
        <ExpenseItem ti={props.item[2].title} am={props.item[2].amount} da={props.item[2].date} />
        <ExpenseItem ti={props.item[3].title} am={props.item[3].amount} da={props.item[3].date} />
      </Card>
      </div>

    );
}


export default Expenses;