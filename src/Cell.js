import React from 'react'
import { useVenti } from 'venti'

export default function Cell({ n }) {
  const state = useVenti()
  const color = state.get(`colors.${n}`)
  return (
    <div 
      style={{ 
        width: 30,
        height: 30,
        textAlign: 'center',
        padding: 10,
        float: 'left',
        backgroundColor: color
      }} 
      id={`${n}`}
      key={`${n}`}
    >{n}</div>
  )
}
