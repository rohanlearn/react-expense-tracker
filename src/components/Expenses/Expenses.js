import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from 'react';
import { useEffect } from 'react';

function Expenses(props) {
  const [expenses, setExpenses] = useState(props.items);
 


  return (
    <Card className="expenses">
      {props.items.map((item) => (
  <ExpenseItem
    key={item.id} // Make sure to assign a unique key to each item
    title={item.title}
    amount={item.amount}
    date={item.date}
  />
))}
    </Card>
  );
}

export default Expenses;