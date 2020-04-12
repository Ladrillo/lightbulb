import React from 'react'
import { render } from 'react-dom'
import Bulb from './Bulb'


function Canvas({ }) {
  return (
    <div>
      <Bulb color='red' on size={450} />
    </div>
  )
}

render(
  <Canvas />,
  document.querySelector('#root')
)
