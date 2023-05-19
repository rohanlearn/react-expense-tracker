import React, { useState } from 'react';
import ExpenseItem from '../Expenses/ExpenseItem';
import './ExpenseForm.css';

const ExpenseForm = () => {
     
    const [title,enteredTitle]=useState("Empty")
    const [amount,enteredAmount]=useState("noAmount")
    const [date,enteredDate]=useState("noDate")
    let titlechg=(e)=>{
       
        enteredTitle(e.target.value)    

    }
    let amountchg=(e)=>{
       
        enteredAmount(e.target.value)    
        console.log(amount)
    }
    let datechg=(e)=>{
       
        enteredDate(e.target.value)    
        console.log(date)
    }
    
    
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' id="title" onChange={titlechg}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' id = "amount" min='0.01' step='0.01' onChange={amountchg}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' id="date" min='2019-01-01' max='2022-12-31' onChange={datechg}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit' >Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;