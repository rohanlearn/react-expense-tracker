import React, { useState } from 'react';
import FormButton from './FormButton';
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
  let showItBro = (thing)=>{
    if(thing==="show"){
      updateContent(<div className='new-expense'>
      <ExpenseForm onSave={saveExpenseData} showButton={showItBro}/>
    </div>
        )
      
    }else if(thing==="hide"){
      updateContent(<div className='new-expense'>
      <FormButton showForm={showItBro}/>
    </div>)
      
      
    }

  }
 

  const [newContent,updateContent] = useState(<div className='new-expense'>
  <FormButton showForm={showItBro}/>
  </div>)



  return(
    newContent
    
    
  )
 

  
};

export default NewExpense;