import React from "react";
const Todo = (props)=>{
    const {items, deletitem} = props;
    let length = items.length;

    const listitem = length?(
        items.map(item =>{
            return(
                <div key ={item.id}>
                    <ul>
                        <li> {item.name} <span> {item.age}</span> <span onClick={()=>deletitem(item.id)}> &times; </span></li>
                    </ul>
                </div>
            )
        })
    ):(
        <p>There is'nt list to show</p>
    )
    return(
        <div>
            <span> name</span>
            <span> age</span>
            <span> action</span>
            {listitem}
        </div>
    )
}
export default Todo;