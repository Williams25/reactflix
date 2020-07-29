import React from 'react'

export default props => {
  return (
    <div>
      <label>
        {props.label}
      </label>
      <textarea type={props.type}
        value={props.value}
        onChange={props.onChange}
      >
      </textarea>
    </div>
  )
}