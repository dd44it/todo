function activeClassBtn(e){
  const btn = e.target
  const btns = document.querySelectorAll('.btn-filter ')
  btns.forEach(btn => btn.classList.remove('active-filter'))
  btn.classList.add('active-filter')
}

function showAllTodo(e, listTodoSelector){
  activeClassBtn(e)
  const listTodos = document.querySelectorAll(listTodoSelector)
  if(!listTodos) return
  listTodos.forEach(elem => elem.style.display = 'flex' )
}

function showActiveTodo(e, listTodoSelector){
  showAllTodo(e, '.item')
  activeClassBtn(e)
  const listTodos = document.querySelectorAll(listTodoSelector)
  if(!listTodos) return
  listTodos.forEach(elem => {
    const activeCheckbox = elem.querySelector('input[type="checkbox"]')
    if(activeCheckbox.checked){
      elem.style.display = 'none'
    }
  })
}

function showCompletedTodo(e, listTodoSelector){
  showAllTodo(e, '.item')
  activeClassBtn(e)
  const listTodos = document.querySelectorAll(listTodoSelector)
  if(!listTodos) return
  listTodos.forEach(elem => {
    const activeCheckbox = elem.querySelector('input[type="checkbox"]')
    if(!activeCheckbox.checked){
      elem.style.display = 'none'
    }
  })
}

export {showAllTodo, showActiveTodo, showCompletedTodo}