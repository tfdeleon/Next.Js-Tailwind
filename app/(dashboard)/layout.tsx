import NewTodoForm from '@/componets/NewTodoForm'

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <h1>Dashboard</h1>
            <div><NewTodoForm /> </div>
            <div>{children}</div>
        </div>

    )
}

export default DashboardLayout