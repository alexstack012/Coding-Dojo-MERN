import React from 'react'

const Box = (props) => {
    const inStyles = {
        backgroundColor: props.inputs.color,
        width: parseInt(props.inputs.length),
        height: parseInt(props.inputs.length)
    }

    return (
        <div style={inStyles}></div>
    )
}

export default Box;