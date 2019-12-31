import React from 'react'
import Cell from './Cell'
import { useVenti } from 'venti'

export default function Matrix({ numElements }) {
  const state = useVenti()
  const numColorUpdates = state.get('numColorUpdates', 0)
  const startTime = state.get('startTime', Date.now())
  const secondsRunning = (Date.now() - startTime) / 1000
  const elements = []
  for (let n = 1; n <= numElements; n++) {
    elements.push(<Cell key={n} n={n} />)
  }
  return (
    <div>
      <h1 style={{ fontWeight: 100 }}><span>{secondsRunning}</span>s</h1>
      <div>{numColorUpdates.toLocaleString()} colors</div>
      <div>
        {Math.floor(numColorUpdates / secondsRunning)} colors per second
      </div>
      <div style={{ maxWidth: 500 }}>
        {elements}
      </div>
    </div>
  )
}
