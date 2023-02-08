import { RxText } from 'react-icons/rx';
import './index.css'

const arrayOfCommands = [
  {
    name: 'Heading 1',
    tag: 'h1',
    shortcut: 'Type # + space',
  },
  {
    name: 'Heading 2',
    tag: 'h2',
    shortcut: 'none',
  },
  {
    name: 'Heading 3',
    tag: 'h3',
    shortcut: 'none',
  },
  {
    name: 'Paragraph',
    tag: 'p',
    shortcut: 'none',
  },
  {
    name: 'Expandable Heading 1',
    tag: 'h1',
    shortcut: 'none',
  },
]

function index({ searchField, setTag }) {
  return (
    <div className='cmd-popup'>
      <h2 className='pop-header'>Add blocks</h2>
      <p className='pop-instructions'>Keep typing to filter, or escape to exit</p>
      <p className='pop-keyword'>Filtering keyword <span>{searchField}</span></p>
      <ul className='pop-list'>
        {
          arrayOfCommands.filter(el => el.name.includes(searchField)).map((item) => (
            <li key={item.tag} className='list-item' onClick={() => {setTag({tag: item.tag, name:item.name})}}>
              <RxText />
              <div className='list--text-container'>
                <h3>{item.name}</h3>
                <p>shortcut: {item.shortcut}</p>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default index