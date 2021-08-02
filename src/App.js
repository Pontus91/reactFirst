import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';




const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2',
    title: 'New TV',
    amount: 799.49, 
    date: new Date(2021, 2, 12), 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Muahahaha',
    amount: 223340494,
    date: new Date(2020, 3, 11),
  },
];


function App() {

const [currentExps, setExps] = useState(DUMMY_EXPENSES);






const addExpenseHandlerFromChildNewExpense = (expense)=> {
   setExps((prevExps)=>{
    return [expense, ...prevExps];
   });
  
};





  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandlerFromChildNewExpense} /> 

      <Expenses items={currentExps} />
    </div>
  );
}

export default App;
