import React from "react"

function Alert(props) {
  const capitalize = word => {
    const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + word.slice(1)
  }
  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.alert.msg}</strong> : {capitalize(props.alert.type)}
        </div>
      </div>
    )
  )
}

export default Alert
