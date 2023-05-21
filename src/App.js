import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/ExpenseForm/NewExpense';
import { useState } from 'react';

function App() {
  
  let expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
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
  const [newExpense,updateExpense] = useState(expenses)
  
  let filterarray = [...expenses]
  const AddExpenseHandler= (data)=>{
    
    
    
     updateExpense((prev)=>{
      filterarray=[...filterarray,data]
      expenses = [...expenses,data]

        
        return [...prev,data]
        
        
      })


  }


  const  getFilteredyear=(year)=>{
    if(year!="All"){
      updateExpense(filterarray.filter(item=>item.date.getFullYear()==year)) 

    }else{
      updateExpense(filterarray)
    }
   
  }

  
  return (
    <div>
   
      <NewExpense sendtoApp={AddExpenseHandler}/>
      <Expenses items={newExpense} giveittheyear = {getFilteredyear}/>
    </div>
  );
}

export default App;