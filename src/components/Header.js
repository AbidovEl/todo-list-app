import Button from "./Button"
import PropTypes from "prop-types"

const Header = ({title, onAdd, showAdd}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color= {showAdd ? "red" 
                  : "green"} text={showAdd ? "Скрыть" 
                  : "Добавить"} onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Список дел'
}
Header.propTypes = {
    title: PropTypes.string,
}
export default Header
