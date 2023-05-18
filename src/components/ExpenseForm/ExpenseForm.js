import App from "../../App"

function ExpenseForm(){
    const a = (e)=>{
        console.log(e.target.value);

    }
    
        
    
 return (
    
    <form onChange={a}>
        <input type="text" id="title" name="title" placeholder="Title"/><br></br>
        <input type="number" name="amount" placeholder="Amount"/><br></br>
        <input type="date" name="date" placeholder="Date"/><br></br>
        <button type="submit"  >Submit</button>
    </form>

    
 )
}




export default ExpenseForm