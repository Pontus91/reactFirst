import './Expenses.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../Card/Card';


function Expenses (props) {
    return (
        <Card className="expenses">
      <ExpenseItem ti={props.item[0].title} am={props.item[0].amount} da={props.item[0].date} />
      <ExpenseItem ti={props.item[1].title} am={props.item[1].amount} da={props.item[1].date} />
      <ExpenseItem ti={props.item[2].title} am={props.item[2].amount} da={props.item[2].date} />
      <ExpenseItem ti={props.item[3].title} am={props.item[3].amount} da={props.item[3].date} />
        </Card>
    );
}


export default Expenses