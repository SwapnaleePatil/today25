import React from 'react';
// class ItemIn extends React.Component
// {
//     render(){
//         return(
//             <li className={this.props.detail.completed?'completed':''} onClick={()=>{
//                 this.props.clickHandler(this.props.index);
//             }}>{this.props.detail.name}</li>
//         )
//     }
// }
const ItemIn =(props)=>{
    return(
        <li className={props.detail.completed?'completed':''} onClick={()=>{
            props.clickHandler(props.index);
        }}>
            {props.detail.name}

        <button onClick={(evt)=> {
            evt.stopPropagation();
            props.deleteTask(props.index);
        }}>Delete</button>

        </li>
    )
}
export default ItemIn;