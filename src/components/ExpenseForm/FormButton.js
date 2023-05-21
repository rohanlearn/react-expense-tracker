import "./FormButton.css"



function FormButton(props) {
    const sendingButtonSignal=()=>{
        props.showForm("show")

    };
    return (
     
            <div className='new-expense__actions'>
        <button  onClick={sendingButtonSignal}>
            Add Expense
            
        </button>
        </div>
       
    )
}
export default FormButton