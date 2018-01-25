import React from 'react';
class ItemIn extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            isEditing:false
        }
        this.renderForm=this.renderForm.bind(this);
        this.renderItem=this.renderItem.bind(this);
        this.toggleItem=this.toggleItem.bind(this);
        this.updateItem=this.updateItem.bind(this);
        this.editItem=this.editItem.bind(this);
    }
    editItem(index,newValue){
        console.log(index,newValue)
    }
    updateItem(evt)
    {
        evt.preventDefault();
        this.props.editTask(this.props.index,this.input.value)
        this.toggleItem();
    }
    toggleItem()
    {
        const {isEditing}=this.state;
        this.setState({
            isEditing:!isEditing
        })
    }

    renderItem(){
    return(
        <li className={this.props.detail.completed ? 'completed' : ''} onClick={() => {
            this.props.clickHandler(this.props.index);
        }}>{this.props.detail.name}
            <button onClick={(evt)=>{
                evt.stopPropagation();
                this.props.deleteTask(this.props.index)
            }}>Delete</button><button onClick={(evt)=>{
                evt.stopPropagation();
                this.toggleItem()
            }}>Edit</button>
        </li>
    )
    }

    renderForm(){
        return(<form onSubmit={this.updateItem} >
            <input type="text" ref={(value)=>{
                this.input=value;
            }
            } defaultValue={this.props.detail.name}/>
            <button type="submit">Update Item</button>
        </form> )
    }
render() {
    const {isEditing}=this.state;
    return (
    <section>
        {
            isEditing ? this.renderForm() : this.renderItem()
        }
    </section>
)
}
}

ItemIn.propTypes={
    detail:React.PropTypes.object,
    key:React.PropTypes.Number,
    clickHandler:React.PropTypes.func,
    index:React.PropTypes.Number,
    deleteTask:React.PropTypes.func,
    editTask:React.PropTypes.func
}
export default ItemIn;