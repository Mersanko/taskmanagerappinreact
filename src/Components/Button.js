// import React from 'react'

// function Button() {
//     return (
//         <div>
//             <button style={{backgroundColor:'green'}} className="btn">Add</button>
//         </div>
//     )
// }

// export default Button
import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color,text,onClick}) => {
    return (
        <div>
            <button onClick={onClick} style={{backgroundColor:color}} className="btn">{text}</button>
        </div>
    )
}
Button.defaultProps = {
    color:'green',
    text: 'add'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}
export default Button
