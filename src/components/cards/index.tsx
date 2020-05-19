import React , {useState , useEffect} from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'
import {Card,Form , Repository} from './styles'

interface ToDos{
    todos: string;
    box: false;
}
const Dashboard: React.FC = () => {
    const [newtodos , setNewtodos] = useState<string >('')
    const [checked , setChecked] = useState<string[]>([])
    const [repository , setRepository] = useState<ToDos[]>([])

    const [todos , setTodos] = useState <string[]>( () =>
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

        setTodos([...todos , teste ])
        console.log(todos)
        setNewtodos('')
    }

    function check(){
        var box: any = document.getElementsByName("item");
        const redes_user : string[] = []

        for (var i=0;i<box.length;i++){
            if (box[i].checked === true){
                // CheckBox Marcado...
                redes_user.push(box[i].value) // vetor das redes
                //alert(box[i].value + " marcado.");

            }
        }
        setChecked(redes_user)
        console.log(checked)
    }


    function HandleRemoveToDo(index : number ) : void{
        setTodos(todos.filter((item, ind) => index !== ind));
    }

    return (
    <>
        <Card>
        <Form onSubmit={ handleAddTodos}>
            <input value = {newtodos} placeholder= "add todos" onChange= {(e) => setNewtodos(e.target.value)}  />

        </Form>

        {todos.map((todo , index) => (
            <Repository key={index}>

            <input name= "item" type= "checkbox" onChange = {check} value = {index}></input>
            <label>{todo}</label>


            <FaRegTrashAlt onClick= {() => HandleRemoveToDo(index)}/>
        </Repository>

        ))}



        </Card>

    </>
    )

}

export default Dashboard
