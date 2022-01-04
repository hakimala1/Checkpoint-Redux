import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { add, edit} from '../Redux/actions';
import Add from './Add';
import Todo from './Todo';

function Todolist() {
    const todos = useSelector((state)=>state.todos)
    const dispatch=useDispatch();
    const Ajouter=(newtask)=>{
        dispatch(add(newtask))
    }
    const Update=(id,newtask)=>{
        dispatch(edit(id,newtask))
        Toggle()
    }
    const[tog,setTog]=useState(true)
    const Toggle =()=>{
        setTog(!tog)
    }
 

    return (
        <div>
            <h1>Todolist</h1>
            
            <Button variant="info" onClick={()=>Toggle()}>{tog?'Not Done' : 'All'}</Button>
            <Add ajouter={Ajouter}></Add>
            {
               tog ?   todos.map(el=><Todo el={el} key={el.id} update={Update} Toggle={Toggle} tog={tog}></Todo>)  :todos.filter(el=>el.done===tog).map(el=><Todo el={el} key={el.id} update={Update} Toggle={Toggle} tog={tog}></Todo>)}
            
        </div>
    )
}

export default Todolist
