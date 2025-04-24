import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

const TodoInput = () => {
  return (
    <div>
      <InputGroup className="mt-5 mb-5">
        <InputGroup.Text>todos</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
        <Button variant="outline-secondary" id="button-addon2">
          할일등록
        </Button>
      </InputGroup>
    </div>
  )
}

export default TodoInput
