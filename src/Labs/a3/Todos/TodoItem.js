const TodoItem = ({
    todo = {
        done: false,
        title: 'Undefined Todo Item',
        status: 'INCOMPLETE'
    }
}) => {
    return (
        <li className="list-group-item">
            <input type='checkbox' defaultChecked={todo.done} />
            &nbsp;
            {todo.title}
            ({todo.status})
        </li>
    )
}

export default TodoItem;