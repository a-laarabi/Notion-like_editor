import { useRef, useState, createElement, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import UserNav from './components/UserNav/UserNav';
import CmdPopup from './components/CmdPopup'
import './App.css';



function App() {

  const DEFAULT_TAG = {
    tag: 'p',
    name: 'Type / for blocks, @ to link docs or people'
  }

  const editorRef = useRef()
  const [textArray, setTextArray] = useState([])
  const [cmdPopup, setCmdPopup] = useState(false)
  const [searchField, setSearchField] = useState('')
  const [selectedTag, setSelectedTag] = useState(DEFAULT_TAG)
  const [allowPopup, setAllowPopup] = useState(true)
  const [placeholder, setPlaceholder] = useState(true)

  useEffect(() => {
    setAllowPopup(true)
    setSelectedTag(DEFAULT_TAG)
  }, [textArray])

  useEffect(() => {
    editorRef.current?.focus()
  }, [selectedTag])


  const checkEnter = (e) => {
    const text = editorRef.current.innerText
    if (e.key === 'Enter' && !cmdPopup) {
      e.preventDefault()
      if (text === '') return
      let newList = {
        text: text,
        tag: editorRef.current.tagName.toLowerCase()
      }
      // this if condition is for the heading 1 only and the whole functionality would be treated differently for other tags
      if(text.slice(0, 2) === '# ') {
        newList = {
          text: text.replace('# ', ''),
          tag: 'h1'
        }
      }
      setTextArray([...textArray, newList])
      editorRef.current.innerHTML = ''
    } else if (e.key === 'Enter' && cmdPopup) {
      e.preventDefault()
    }
    if (e.key === 'Escape') {
      setCmdPopup(false)
      setAllowPopup(false)
    }
  }

  const checkPopup = (e) => {
    if(e.target.innerText[0] === '/' && allowPopup) {
      setCmdPopup(true)
      setSearchField(e.target.innerText.replace('/', ''))
    } else {
      setCmdPopup(false)
    }
  }

  return (
    <div className="App">
      <NavBar />
      <UserNav />
      <div className='appBody'>
        <h1 className='greeting'>Front-end developer test project</h1>
        <p className='greetingP'>Hello! I am <a href="https://www.linkedin.com/in/a-laarabi/" target="_blank" rel="noreferrer">Anasse Laarabi</a>. I am presenting the webpage created for the test purpose, which adheres to the design specifications as outlined in Figma. it has the ability to create H1 text simply by typing '/1'. Additionally, a keyboard shortcut is available to streamline the process.</p>
        <div className='editor-app'>
          <div contenteditable="true">
            {
              textArray.map((item, index) => {
                return createElement(item.tag, { className: "list-items", key: index, suppressContentEditableWarning: true }, item.text)
              })
            }
          </div>

          <div className='editor-container'>
            {createElement(selectedTag.tag, {
              className: "editor",
              contentEditable: true,
              ref: editorRef,
              onKeyDown: (e) => checkEnter(e),
              autoFocus: true,
              suppressContentEditableWarning: true,
              onBlur: (e) => e.target.innerText ? setPlaceholder(false): setPlaceholder(true),
              onFocus: () => setPlaceholder(false),
              onInput: (e) => { checkPopup(e)} },
              placeholder && createElement('span',{className: 'placeholder', contentEditable: false}, selectedTag.name)
              ) }
            {cmdPopup && allowPopup && (
              <CmdPopup searchField={searchField} setTag={setSelectedTag}/>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
