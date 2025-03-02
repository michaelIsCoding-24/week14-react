import Button from "./Button"


function InputBar(){
    return (
        <div className="col-auto"> 
            <input id="task-input" type="text" placeholder="Enter Task..."></input>
            <Button text="Add Entry" style="btn btn-primary"/>
        </div>
    )
}

export default InputBar