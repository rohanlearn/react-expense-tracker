import React,{useState} from 'react';

import "./ExpenseItem.css"
import ExpenseDate  from "./ExpenseDate";
import ExpeseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
function ExpenseItem(props) {
    const [title,setTitle]=useState(props.title);
    const [amount,setAmt]=useState(props.amount);
    
     
    const delbtn = (e)=>{
        let expenses = document.querySelector(".expenses")
        e.preventDefault();
        
        expenses.removeChild(e.target.parentNode) 
        
    }

    const chngtitle =(e)=>{
   
        setTitle("Rohan")
   
    
    
    

    }
    const chngamt = (e)=>{
        setAmt("100")

    }
    
    return (
        <Card className="expense-item">
            
            <ExpenseDate date={props.date}/>
            <ExpeseDetails title={title}
        amount={amount}/>
            
            <button onClick={delbtn} >Delete Expense</button>
            <button onClick={chngtitle} >Change Title</button>
            <button onClick={chngamt} >Change Amount</button>
 
        </Card>

        
        );
}

export default ExpenseItem;