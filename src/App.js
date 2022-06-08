import React,{Component} from 'react';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header'
import List from './components/List'

export default class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里

    // 初始化状态
  state = {
    todos: [
      {id:'001',name:'吃饭',done:true},
      {id:'002',name:'睡觉',done:true},
      {id:'003',name:'打游戏',done:false},
      {id:'004',name:'放屁',done:false},
      {id:'005',name:'跳舞',done:true},
    ]
  }

  // 添加
  addTodo = (newObj)=> {
    const {todos} = this.state
    const newtodo = [newObj,...todos]
    this.setState({todos:newtodo})
  }

  // 删除某一个
  deleteTodo = (id)=> {
    const {todos} = this.state
    const newTodos = todos.filter(item => {
      return item.id !== id
    })
    this.setState({todos:newTodos})
  }

   // 改变todo的done是true还是false  
   changList = (id,done)=> {
    const {todos} = this.state
    const newList = todos.map(item => {
      // 找到这个id所在list，改变他的done值
      if(item.id === id) return {...item,done:done}
      else return item
    })
    this.setState({todos:newList})
  } 

  // 全选
  changeAll = (done)=> {
    const {todos} = this.state
    const newTodos = todos.map(todoObj => {
      // 把原来的done，改成true
      return {...todoObj,done:done}
    })
    this.setState({todos:newTodos})
  }

  // 删除全部
  deleteAllDone = ()=> {
    const {todos} = this.state
    const newTodos = todos.filter(todoObj => {
      return !todoObj.done
    })
    this.setState({todos:newTodos})
  }


  render() {
    const {todos} = this.state
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo} todos={todos}/>
          <List todos={todos} changList={this.changList} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} changeAll={this.changeAll}  deleteAllDone={this.deleteAllDone}/>
        </div>
      </div>
    )
  }
}

