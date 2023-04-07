import React,{Component} from "react";
class Additem extends Component{
    state = {
        name:'',
        age:''
    }
    handelChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handelSubmit =(e)=>{
        e.preventDefault();
        console.log(this.state)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handelSubmit}>
                    <input onChange={this.handelChange} type='text' placeholder="Enter your name..." id="name"></input>
                    <input onChange={this.handelChange} type='number' placeholder="Enter your age..." id="age"></input>
                    <input type='submit' value="Add"></input>
                </form>
            </div>
        )
    }
}
export default Additem;