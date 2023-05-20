import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseData = (enteredExpenseData) => {
    const data = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    
    props.sendtoApp(data);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSave={saveExpenseData}/>
    </div>
  );
};

export default NewExpense;