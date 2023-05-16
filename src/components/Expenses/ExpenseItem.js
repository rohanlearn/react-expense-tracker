import "./ExpenseItem.css"
import ExpenseDate  from "./ExpenseDate";
import ExpeseDetails from "./ExpenseDetails";
function ExpenseItem(props) {
    
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <ExpeseDetails props={props}/>
 
        </div>
        );
}

export default ExpenseItem;