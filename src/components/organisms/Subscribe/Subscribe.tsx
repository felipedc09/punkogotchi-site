import { FC, ReactElement } from 'react';
import { NormalButton } from '@/components/atoms/Button/button.styles';
import { NormalInput } from '@/components/atoms/Input/input.styles';
import { Form, Animation } from './subscribe.styles';


const Subscribe: FC = (): ReactElement => {
  const color = '#9052BC';
  const onClick = async () => {
    const inputEmail = document.getElementById('email') as HTMLInputElement;
    const res = await fetch('/api/hello', {
      body: JSON.stringify({
        email: inputEmail.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      return;
    }
    inputEmail.value = '';
  }
  return (
    <Form color={color}>
      <NormalInput id='email' placeholder="Your email address"/>
      <Animation>
        <NormalButton onClick={onClick} type='button'>
          subscribe
          <img src={"/static/icons/bell.svg"} />
        </NormalButton>
      </Animation>
    </Form>
  );
};

export default Subscribe;
