import React,{useState} from "react";

function Todolist () {
    const [task,setTask] = useState('');
    const [todos,setTodos] = useState([]);

    const addTask = (event) => {
        event.preventDefault();
        if(task !== '') {
            setTodos([...todos, task]);
            setTask('');
        }
    };
    const deleteTask = (indexToDelete) => {
        setTodos(todos.filter((_, index)=> index !== indexToDelete));
    };
    return(
        <div className="todoWrapper">
            <form onSubmit={addTask}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="오늘의 할일은 무엇인가요?"
                />
                <button type="submit">추가</button>
            </form>
            <ul>
                {todos.map((todo,index)=> (
                    <li key={index}>
                        {todo}<button onClick={()=> deleteTask(index)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Todolist;