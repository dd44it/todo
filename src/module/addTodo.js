import {showAllTodo, showActiveTodo, showCompletedTodo} from './filterButtons.js'

export default function addTodo(){
  const input = document.querySelector('.search')
  const listTodo = document.querySelector('.todo-items')
  const filterBlock = document.querySelector('.todo-filter')
  const allBtn = document.querySelector('.all-btn')
  const activeBtn = document.querySelector('.active-btn')
  const completedBtn = document.querySelector('.completed-btn')
  const countAddedTodo = document.querySelector('.count-active-item .count')

  const configTodo = {
    id: 1
  }

  input.addEventListener('keydown', e => {
    const elem = e.target
    if(e.key === 'Enter' && elem.value.trim().length){
     const templateItem = `
      <li class="item">
        <input type="checkbox" class="item-radio">
        <span class="item-text"> ${e.target.value} </span>
        <button class="item-remove"> X </button>
      </li>
     `
      listTodo.insertAdjacentHTML('beforeend', templateItem)


      const inputCheckboxList = document.querySelectorAll('.item-radio')
      const btnRemoveList = document.querySelectorAll('.item-remove')

      for(let remove of btnRemoveList){
        remove.addEventListener('click', (e) => {
          e.stopImmediatePropagation()
          const todoItem = e.target.parentElement
          todoItem.remove()
          removeClassHide(listTodo.childElementCount)
          configTodo.id -= 1
          countAddedTodo.textContent = configTodo.id
        })
      }

      inputCheckboxList.forEach(checkbox => {
        checkbox.addEventListener('input', (e) => {
          const todoItem = e.target.nextElementSibling
          if(e.target.checked){
            todoItem.style.textDecoration = 'line-through'
          }
          else {
            e.target.checked = false
            todoItem.style.textDecoration = ''
          }
        })
      })

      elem.value = ''
      removeClassHide(listTodo.childElementCount)
      countAddedTodo.textContent = configTodo.id
      configTodo.id += 1
    }

    function removeClassHide(countListTodo){
      countListTodo ? filterBlock.classList.remove('hide') : filterBlock.classList.add('hide')
    }

  })

  allBtn.addEventListener('click', e => { showAllTodo(e, '.item') })
  activeBtn.addEventListener('click', e => { showActiveTodo(e, '.item') })
  completedBtn.addEventListener('click', e => { showCompletedTodo(e, '.item') })
}