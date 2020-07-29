import React from 'react'

export default props => {
  return (
    <div className={props.className}>
      <label>
        {props.label}
      </label>

      <input type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}