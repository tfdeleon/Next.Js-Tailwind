import { newTodo } from "@/utils/actions"

const TodoForm = () => {
    return(
        <div>
            <form action={newTodo}>
                <input type="text"name="todo" className='text-black border border-black/25' ></input>
                <button type="submit" className="border border-black/50">New Todo</button>
            </form>
        </div>
    )
}


export default TodoForm
