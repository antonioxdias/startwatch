import React from 'react'
import { timeDisplay } from '../lib/utils'

const Timetable = ({ times }: { times: number[]}) => {

  return (
    <div style={{
      margin: '1rem',
      padding: '1rem',
      border: 'solid 1px wheat',
      borderRadius: '8px'
    }}>
      <ol
       style={{
         display: 'flex',
         flexDirection: 'column',
         flexWrap: 'wrap',
         maxHeight: 150,
         width: 320
       }}
      >
        {
          times.map((time: number, index: number) => (
            <li
              key={index}
              style={{
                fontFamily: 'monospace, monospace'
              }}
            >
              { timeDisplay(time, true) }
            </li>
          ))
        }
      </ol>
    </div>
  )
}

export default Timetable

