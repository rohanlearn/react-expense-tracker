import React,{useState} from 'react';

import "./ExpenseItem.css"
import ExpenseDate  from "./ExpenseDate";
import ExpeseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
function ExpenseItem(props) {
    
    
    return (
        <Card className="expense-item">
            
            <ExpenseDate date={props.date}/>
            <ExpeseDetails title={props.title}
        amount={props.amount}/>
          
 
        </Card>

        
        );
}

export default ExpenseItem;