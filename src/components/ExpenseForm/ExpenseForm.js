import React, { useState } from 'react';

import './ExpenseForm.css';


const ExpenseForm = (props) => {
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
    

        let newExpense = {
            title: title,
            amount: amount,
            date: new Date(date),
        }
        props.onSave(newExpense)
        setEnteredAmount("")
          setEnteredDate("")
          setEnteredTitle("")
          props.showButton("hide")
    }

    const show = ()=>{
      props.showButton("hide")
    }
  return (
    <form onSubmit={formSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value = {title} id="title" onChange={titlechg}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' id = "amount" value={amount} min='0.01' step='0.01' onChange={amountchg}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' id="date" min='2019-01-01'value={date} max='2022-12-31' onChange={datechg}/>
        </div>
      </div>
   
      <div className='new-expense__actions'>
      <button type='reset' onClick={show}>Cancel</button>
        <button type='submit' >Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;