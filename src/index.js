import React from 'react';
import ReactDom from 'react-dom';
import "./index.css"
import ItemIn from "./comp/ItemIn"
import ToDoForm from "./comp/ToDoForm"

class ItemList extends React.Component
{
    constructor(){
        super();
        this.changeStatus=this.changeStatus.bind(this);
        this.updateTask=this.updateTask.bind(this);
        this.addTask=this.addTask.bind(this);
        this.deleteTask=this.deleteTask.bind(this);
        this.state={
         task:[{name:"Buy Milk",completed:false},
             {name:"Buy Bread",completed:false},
             {name:"Buy Cheese",completed:false}],
            currentTask:''

      //      firstname:"Mau"
        }

    }
    updateTask(newValue) {
        this.setState({
            currentTask: newValue.target.value
        })
        console.log("currentTask:",newValue.target.value);
    }
    deleteTask(index) {
        console.log(index)
         let task=this.state.task;
        task.splice(index,1);
        this.setState({
            task
        })
    }
    addTask(evt){
        console.log(evt.target.value);
       evt.preventDefault();
        let task=this.state.task;
       console.log("Task",task);
        let currentTask=this.state.currentTask;
        task.push({
            name:currentTask,
            completed:false
        })
        this.setState({
            task
        })
    }

    changeStatus(index){
        var tasks=this.state.task;
        var task=tasks[index];
        task.completed=!task.completed;
        this.setState({
            tasks:tasks
        })
        console.log(this.state.task[index])
    }
    render(){
        return(

                <section>
                    <ToDoForm currentTask={this.state.currentTask}
                              updateTask={this.updateTask}
                              addTask={this.addTask}
                              deleteTask={this.deleteTask}
                    />
            <ul>
            {
                this.state.task.map((task,index)=>{
                    return<ItemIn detail={task}
                                  key={task.name}
                                  clickHandler={this.changeStatus}
                                  index={index}

                    />
                })
            }

        </ul>
        </section>

        )

    }
}

ReactDom.render(<ItemList/>,document.getElementById("root"));
