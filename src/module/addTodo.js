

export default function addTodo(){
  const input = document.querySelector('.search')
  const listTodo = document.querySelector('.todo-items')
  const filterBlock = document.querySelector('.todo-filter')

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

      btnRemoveList.forEach(remove => {
        remove.addEventListener('click', (e) => {
          const todoItem = e.target.parentElement
          todoItem.remove()
          removeClassHide(listTodo.childElementCount)
        })
      })

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
    }

    function removeClassHide(countListTodo){
      countListTodo ? filterBlock.classList.remove('hide') : filterBlock.classList.add('hide')
    }

  })
}