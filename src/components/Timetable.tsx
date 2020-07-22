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
      <ol>
        {
          times.map(time => (
            <li style={{
              fontFamily: 'monospace, monospace'
            }}>
              { timeDisplay(time, true) }
            </li>
          ))
        }
      </ol>
    </div>
  )
}

export default Timetable

