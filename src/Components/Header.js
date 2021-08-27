import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'
const Header = ({title , onAdd,showAdd}) => {
    const location = useLocation()
    return (
       <header className="header">
           <h1>{title}</h1>
           {location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'}onClick={onAdd}></Button>}
           {/* <Button color="blue" text="Test1 "></Button>
           <Button color="red" text="Test2 "></Button>
           <Button color="black" text="Test3 "></Button> */}

       </header> 
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// const headingStyle = {
//     color: 'blue',
//     backgroundColor:'gray'
// }
export default Header
