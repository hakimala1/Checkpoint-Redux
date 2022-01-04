import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

function Add({ajouter}) {
    const todos = useSelector(state => state.todos)
    const [task,setT]=useState(todos.task)
    const [done,setDone]=useState(false)
    const dispatch = useDispatch()
    
    return (
        <div className='center'>
<Form>
  <Row className="align-items-center">
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" visuallyHidden>
        Task
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Add ..."
        onChange={(event)=>setT(event.target.value)} value={task}
      />
    </Col>

    <Col xs="auto">
      <Form.Check
        type="checkbox"
        id="autoSizingCheck"
        className="mb-2"
        label="Done"
        onChange={(event)=>setDone(event.target.checked)} checked={done}
      />
    </Col>
    <Col xs="auto">
      <Button  className="mb-2"  onClick={()=>dispatch(ajouter({id : todos.length, task,done}))}>
        Add
      </Button>
    </Col>
  </Row>
</Form>
        </div>
    )
}

export default Add
