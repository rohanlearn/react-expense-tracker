import React, { useState } from 'react';
import ExpenseItem from '../Expenses/ExpenseItem';
import './ExpenseForm.css';

const ExpenseForm = () => {
     const [title,setEnteredTitle]=useState("")
     const [amount,setEnteredAmount]=useState("")
     const [date,setEnteredDate]=useState("")
    // const [userInput,setUserInput]=useState({
    //     title:"",
    //     amount:"",
    //             date:"" 
    // })
  

    let titlechg=(e)=>{
        setEnteredTitle(e.target.value)
       
        // setUserInput({...userInput,title:e.target.value});   
        // setUserInput((prevState)=>{
        //     return{...prevState,title:e.target.value}});    

    }
    let amountchg=(e)=>{
        setEnteredAmount(e.target.value)
       
        // setUserInput({...userInput,amount:e.target.value});   
        
    }
    let datechg=(e)=>{
        setEnteredDate(e.target.value)
        // setUserInput({...userInput,date:e.target.value});    
        
    }
    
    const formSubmit = (e)=>{
      e.preventDefault();
    

        let tit = document.getElementById("title").value
        let amt = document.getElementById("amount").value
        let dat = document.getElementById("date").value

        let newExpense = {
            title: tit,
            amount: amt,
            date: dat,
        }
        console.log(newExpense)
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
        <button type='submit' onClick={formSubmit}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;