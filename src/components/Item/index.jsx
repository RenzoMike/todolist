import React, { Component } from  'react'
import './index.css'
export default class Item extends Component {

  state = {mouse:false}
  
  handleMouse = (flag)=> {
    return ()=>{
      this.setState({mouse:flag})
    }
  }

  // 复选框状态改变，改变数据的true
  handleCheack = (id)=>{
    return (e) => {
      this.props.changList(id,e.target.checked)
    }
  }

  clickCheack = (id)=> {
    const {checkState} = this
    return (e)=>{
      checkState.checked = !checkState.checked
      this.props.changList(id,checkState.checked)

    }
  }

  // 删除某一项
  deleteList = (id)=> {
    return (e)=> {
      e.stopPropagation()
      this.props.deleteTodo(id)
    }
  }

  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor: mouse ? 'rgb(247,247,247)' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} onClick={this.clickCheack(id,done)}>
          <label>
            <input type="checkbox" checked={done} onChange={this.handleCheack(id)} ref={c => this.checkState = c}/>
            <span>{name}</span>
          </label>
          <button  className='btn btn-danger' style={{display: mouse ? 'block' : 'none'}} onClick={this.deleteList(id)}>删除</button>
        </li>
    )
  }
}
