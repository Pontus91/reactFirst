import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../Card/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';



function Expenses (props) {

    const [currentDataFromFilterComp, setDataFromFilterComp] = useState('2021');

    const saveDataFromFilterCompInAStateHere = (valueFromFilterComp) => {
      setDataFromFilterComp(valueFromFilterComp);
 
    }
    

    const filteredExps = props.items.filter((item)=>{
        const itemYear = item.date.getFullYear().toString();

        return itemYear === currentDataFromFilterComp;
    });
 



    return (
      <div>
      <Card className="expenses">
        <ExpensesFilter currentValueToSet={currentDataFromFilterComp} saveInAStateInExpComp={saveDataFromFilterCompInAStateHere} />
        
        
        {
        filteredExps.length === 0 ? 
        
        <p id="nef">No expenses found!</p> :
        
        filteredExps.map((expense)=>{
          return <ExpenseItem key={expense.id} expTitle={expense.title} expAmount={expense.amount} expDate={expense.date} />
        })
        }
        
        
      </Card>
      </div>

    );
};


export default Expenses;