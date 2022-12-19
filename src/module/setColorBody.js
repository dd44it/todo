function setColorBody(){
  const body = document.querySelector('body')
  const toggleBtn = document.querySelector('.toggle-theme-btn')
  const colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)')

  const setColorScheme = e => e.matches ? setDarkMode() : setLigthMode()

  function toggleMode(){
    body.classList.contains('dark') ? setLigthMode() : setDarkMode()
  }

  function setDarkMode(){
    const arrElems = [body, toggleBtn]
    arrElems.forEach(elem => elem.classList.remove('light') )
    arrElems.forEach(elem => elem.classList.add('dark') )
    // toggleBtn.classList.remove('light')
    // toggleBtn.classList.add('dark')
    // body.classList.remove('light')
    // body.classList.add('dark')
  }

  function setLigthMode(){
    const arrElems = [body, toggleBtn]
    arrElems.forEach(elem => elem.classList.add('light') )
    arrElems.forEach(elem => elem.classList.remove('dark') )
    // toggleBtn.classList.remove('dark')
    // toggleBtn.classList.add('light')
    // body.classList.remove('dark')
    // body.classList.add('light')
  }
    
  setColorScheme(colorSchemeQueryList)
  colorSchemeQueryList.addEventListener('change', setColorScheme)
  toggleBtn.addEventListener('click', toggleMode)

}

export default setColorBody