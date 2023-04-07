import React , {Component} from 'react';
import Additem from './Additem/Additem';
import Todo from './Additem/todo';

class App extends Component {
  state = {
    items :[
      {id:1,name:'mohamed',age:'23'},
      {id:2,name:'hus',age:'30'},
      {id:3,name:'Enas',age:'20'},
      {id:4,name:'Eman',age:'40'}
    ]
  }
  deletitem = (id)=>{
   /* let items = this.state.items;
    let i = items.findIndex(item => item.id === id)
    items.splice(i,1)
    this.setState({items});*/
    let items = this.state.items.filter(item =>{
      return item.id !== id
    }) 
    this.setState({items});
  }
  render(){
    return(
      <div>
        
        <Todo items = {this.state.items} deletitem={this.deletitem}/>
        <Additem />
      </div>
    )
  }
}
export default App;
