import "./ExpenseItem.css"
import ExpenseDate  from "./ExpenseDate";
import ExpeseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
function ExpenseItem(props) {
    const delbtn = (e)=>{
        let expenses = document.querySelector(".expenses")
        e.preventDefault();
        
        expenses.removeChild(e.target.parentNode) 
        
    }
    
    return (
        <Card className="expense-item">
            
            <ExpenseDate date={props.date}/>
            <ExpeseDetails title={props.title}
        amount={props.amount}/>
            
            <button onClick={delbtn} >Delete Expense</button>
 
        </Card>

        
        );
}

export default ExpenseItem;