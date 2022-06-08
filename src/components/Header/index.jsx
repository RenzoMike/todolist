import React, { Component } from 'react'
//nanoid是一个函数，每次调用都会生成随机的字符串，字符串是全球唯一的
import {nanoid} from 'nanoid'
import './index.css'
export default class Header extends Component {

  handleKeyUp = (e)=> {
    const {keyCode,target} = e
    if(keyCode !== 13) return
    if(target.value.trim()=== '') {
      alert('输入不能为空')
      target.value = ''
      return 
    }
    const newObj = {
      id:nanoid(),name:target.value,done:false
    }
    this.props.addTodo(newObj)
    target.value = ''
  }


  render() {
    return (
      <div className='todo-header'>
          <input type="text" placeholder='请输入你的任务名称，按回车确认' onKeyUp={this.handleKeyUp} ref={ c => this.inputValue = c}></input>
        </div>
    )
  }
}
