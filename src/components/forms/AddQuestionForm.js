import React, { useState } from 'react';
import { Form, Container, Header, Button } from 'semantic-ui-react';
import { addQuestion } from '../../actions';

const AddQuestionFrom = (props) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  
  return (
    <Container>
      <Header as='h2'>Kérdés hozzáadása</Header>
      <Form onSubmit={() => addQuestion({title, details})}>
        <Form.Input
          label='Kérdés:'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Form.TextArea
          label='Leírás:'
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <Button type='submit'>Submit</Button>
      </Form>
    </Container>
  );
};

export default AddQuestionFrom;
