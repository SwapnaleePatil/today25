import React from 'react';
const ToDoForm =(props)=>{
    return(
        <form onSubmit={(event)=>{props.addTask(event)}}>
        <input type="text"
               onChange={props.updateTask}
               value={props.currentTask}/>
        <input type="submit"  value="Submit"/>
        </form>
    )
}

ToDoForm.propTypes={
    currentTask:React.PropTypes.string,
    updateTask:React.PropTypes.func,
    addTask:React.PropTypes.func
}
export default ToDoForm;