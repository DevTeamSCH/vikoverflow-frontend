import React, { useState } from 'react';
import {Button, Form, Segment} from 'semantic-ui-react';

const NewAnswerForm = ({postAnswer}) => {
  const [text, setText] = useState('');
  const [anonymous, setAnonymous] = useState(false);

  return (
    <Segment>
      <Form>
        <Form.TextArea placeholder={'Text'} value={text} onChange={(e) => setText(e.target.value)}/>
        <Form.Checkbox label={'Answer anonymously'} checked={anonymous} onChange={(e, data) => setAnonymous(data.checked)}/>
        <div>
          <Button onClick={() => postAnswer(text, anonymous)} primary>Submit</Button>
        </div>
      </Form>
    </Segment>
  );
};

export default NewAnswerForm;