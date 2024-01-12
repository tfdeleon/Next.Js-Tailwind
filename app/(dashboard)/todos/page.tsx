import db from '@/utils/db'
import TodoList from '@/componets/TodoList'

const getData = async () => {
    const todos = await db.todo.findMany({})
    console.log(todos)
    return todos
}

const TodosPage = async () => {
    const todos = await getData
    return(
        <div><TodoList todos={todos} /></div>
    )
}


export default TodosPage