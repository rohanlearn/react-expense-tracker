import "./ExpenseItem.css"

function ExpeseDetails(props){
    return(
       
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <h2>{props.locationOfExpenditure}</h2>
                <div className="expense-item__price">$294.67</div>
            </div>
      
    )
}

export default ExpeseDetails