import React, { useState } from 'react';
import { Form, Container, Header, Button } from 'semantic-ui-react';

const AddQuestionFrom = (props) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [tags, setTags] = useState([]);

  const tagOptions = props.tags;
  
  return (
    <Container>
      <Header as='h2'>Kérdés hozzáadása</Header>
      <Form >
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
        <Form.Dropdown
          label='Címkék:'
          placeholder='Címke'
          fluid
          multiple
          search
          selection
          options={tagOptions}
          value={tags}
          onChange={(e) => setTags(e.target.values)}
        />
        <Button onClick={() => props.addQuestion({title, details, tags})}>Beküld</Button>
      </Form>
    </Container>
  );
};

export default AddQuestionFrom;
