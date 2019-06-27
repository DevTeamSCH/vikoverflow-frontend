import React, { useState } from 'react';
import { Form, Container, Header } from 'semantic-ui-react';

const AddQuestionFrom = (props) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  return (
    <Container>
      <Header as='h2'>Kérdés hozzáadása</Header>
      <Form>
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
      </Form>
    </Container>
  );
};

export default AddQuestionFrom;
