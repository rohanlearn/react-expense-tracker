import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
 

  const [filteredYear, setFilteredYear] = useState('All');

  const filterChangeHandler = selectedYear => {
    setFilteredYear((prev)=>{
      return selectedYear
    });
    
    props.giveittheyear(selectedYear);
  };


  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
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