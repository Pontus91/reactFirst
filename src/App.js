import React from 'react';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';


function App() {

    
const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2',
    title: 'New TV',
    amount: 799.49, 
    date: new Date(2021, 2, 12) },
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
];


  return (
    <div className="App">
      <h1>Let's get started!</h1>
      <ExpenseItem ti={expenses[0].title} am={expenses[0].amount} da={expenses[0].date} />
      <ExpenseItem ti={expenses[1].title} am={expenses[1].amount} da={expenses[1].date} />
      <ExpenseItem ti={expenses[2].title} am={expenses[2].amount} da={expenses[2].date} />
      <ExpenseItem ti={expenses[3].title} am={expenses[3].amount} da={expenses[3].date} />
    </div>
  );
}

export default App;
