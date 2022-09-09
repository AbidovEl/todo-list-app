import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert("Добавьте дело")
            return 
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }
  
    return (
        <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Дело</label>
            <input type="text" placeholder="Добавьте дело"
            value={text}
            onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Время</label>
            <input type="text" placeholder="День и время выполнения"
            value={day}
            onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label>Отметить</label>
            <input type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}/>

        </div>

        <input type='submit' value='Сохранить' 
            className="btn btn-block"/>
        </form>
  )
}

export default AddTask
