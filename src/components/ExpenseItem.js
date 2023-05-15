import "./ExpenseItem.css"
function ExpenseItem(props) {
  

    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <h2>{props.locationOfExpenditure}</h2>
                <div className="expense-item__price">$294.67</div>
            </div>
         
            
        </div>
        );
}

export default ExpenseItem;