import React , {useState , useEffect } from 'react'
import { useImmer} from 'use-immer'
import {produce} from 'immer'
import {uuid} from 'uuidv4'
import {FaRegTrashAlt} from 'react-icons/fa'
import {Card,Form , Repository} from './styles'

interface ToDos{
    id: string;
    todos: string;
    completed: boolean;
}
const Dashboard: React.FC = () => {
    const [newtodos , setNewtodos] = useState<string >('')

    const [Filter , setFilter] =  useState<string>('all');

    const [todos , setTodos] = useImmer <ToDos[]>( () =>
    {
        const getTodos = localStorage.getItem('@React:todos')

        if(getTodos){
            return JSON.parse(getTodos)
        }

        return [];

    })
    useEffect(() => {
        localStorage.setItem('@React:todos' , JSON.stringify(todos))
    }, [todos])

    function handleAddTodos(event : any) : void {
        event.preventDefault()
        if(!newtodos){
            return ;
        }
        const teste : string = newtodos

        setTodos( todos => {todos.push({id: uuid(),todos : teste ,completed : false })} )
        setNewtodos('')
    }

    function click(id: string , index : number) {

        setTodos( todos   => { // mudar um campo utilizando o id = "string"
                todos.forEach((elem , i) =>{
                    if(todos[i].id === id){
                     todos[i].completed = !todos[i].completed
                }
            })
        })

     }

    function HandleRemoveToDo(index : number , id : string) : void{

        // setTodos(todos => {todos.splice(index , 1)}); remover quando tem o indice pronto
        // setTodos(() => todos.filter(item => item.id !== id));

        setTodos( todos   => { // remover elemento usando  id q é uma string
            todos.forEach((elem , i) =>{
                if(todos[i].id === id){
                    setTodos(todos => {todos.splice(i , 1)});
            }
        })
    })

    }

    return (
    <>

        <Card>
        <Form onSubmit={ handleAddTodos}>
            <input value = {newtodos} placeholder= "add todos" onChange= {(e) => setNewtodos(e.target.value)}  />

        </Form>

        {todos
        .filter((elem ) => {
           if(Filter === "all" ) return true
           if(Filter === "completed" ) return elem.completed
           if(Filter === "pending" ) return !elem.completed
           return false;
        })
        .map((todo , index) => (
            <Repository key={todo.id} >
                <input name= "item" type= "checkbox" onClick = {(e) => click(todo.id , index)} checked = {todo.completed}></input>
                <label>{todo.todos}</label>
                <FaRegTrashAlt onClick= {() => HandleRemoveToDo(index , todo.id)}/>
            </Repository>

        ))}
        <div>
            <button  onClick= {e => setFilter("all")}>all</button>
            <button  onClick= {e => setFilter("completed")}>Completed</button>
            <button  onClick= {e => setFilter("pending")}>Pending</button>
        </div>
        </Card>

    </>
    )

}

export default Dashboard
