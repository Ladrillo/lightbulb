import React from 'react'
import { render } from 'react-dom'
import Bulb from './Bulb'


function Playground({ }) {
  return (
    <div className='playground'>
      <Bulb color='yellow' size={500} />
      <Bulb on color='#4ec5ff' size={500} />
      <Bulb on color='#E1FD00' />
    </div>
  )
}

render(
  <Playground />,
  document.querySelector('#root')
)
