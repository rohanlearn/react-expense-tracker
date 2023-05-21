import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
 

  const [filteredYear, setFilteredYear] = useState('All');

  const filterChangeHandler = selectedYear => {
    setFilteredYear((prev)=>{
      return selectedYear
    });
    
  };
  let filteredexpenses = props.items
  if(filteredYear!="All"){
    filteredexpenses = props.items.filter((item)=>{
      return item.date.getFullYear().toString() === filteredYear;
    })
  }
  let content = <p id="filtererror">No expenses in this year</p>
  if(filteredexpenses.length>1){
    content = filteredexpenses.map((item) => (
      <ExpenseItem
        key={item.id} // Make sure to assign a unique key to each item
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));

  }else if(filteredexpenses.length == 1){
    content = [...filteredexpenses.map((item) => (
      <ExpenseItem
        key={item.id} // Make sure to assign a unique key to each item
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    )),<p id="filtererror">Only single Expense here. Please add more..</p>]

      
    }
  

  
  

  return (

    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredexpenses}/>
      {content}
      
    </Card>
  );
}

export default Expenses;