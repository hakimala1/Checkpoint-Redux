import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'

function Todo({el,update}) {
 
    const [task,setT]=useState(el.task)
    const [done,setDone]=useState(el.done)
    console.log(done)
    const[tog,setTog]=useState(false)
    const Toggle =()=>{
        setTog(!tog)
    }
    const bg = done ? 'green': 'red'
    return (
        <div className='center'>
            {tog ?           
              <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Task</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" onChange={(e)=> setT(e.target.value)} value={task}/>
   

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                     <Form.Check type="checkbox" label="Done/NO" onChange={(event)=>setDone(event.target.checked)} checked={done} />
                </Form.Group>
                    
                    <Button variant="primary" onClick={()=>{ update(el.id,task,done) ; Toggle() }} >
                  Confirmer
                </Button>
  
            </Form> 
            :
           
            <Card>
            <Card.Header style={{backgroundColor:bg}}>{el.id}</Card.Header>
            <Card.Body>
              <Card.Title>{el.task}</Card.Title>
              <Card.Text>
                  {done ?'Done':'no'}  
                  
                  {console.log((event)=>event.target.checked)}
          </Card.Text>
              <Button variant="info" onClick={()=>Toggle()}>Edit</Button>
            </Card.Body>
          </Card>
       
            }
            

        </div>
    )
}

export default Todo
