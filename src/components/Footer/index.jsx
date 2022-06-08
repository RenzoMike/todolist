import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  
  // 全选
  handleChangeAll = (e)=> {
    console.log(e.target.checked);
    this.props.changeAll(e.target.checked)
  }

  deleteAll = ()=> {
      this.props.deleteAllDone()
    
  }

  // componentDidMount = ()=> {
  //   const {todos} = this.props
  //   if(todos.length === 0) 
  // }


  render(){
    const {todos} = this.props
    const doneCount = todos.reduce((pre,cur)=>{
      return pre + (cur.done ? 1 : 0)
    },0)
    const total = todos.length
    return (
      <div className='todo-footer'>
        <label>
          <input type="checkbox" checked={doneCount === total && total !== 0 ? true : false} onChange={this.handleChangeAll}/>
          <span>全选</span>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className='btn btn-danger' onClick={this.deleteAll}>清除已完成任务</button>
      </div>
    )
  }
}

// checked={doneCount === total && total !== 0  ? true : false } onChange={this.handleChangeAll}

// handleChangeAll = (e)=> {
//   this.props.checkAll(e.target.checked)
//   console.log(e.target.checked);    
// }
