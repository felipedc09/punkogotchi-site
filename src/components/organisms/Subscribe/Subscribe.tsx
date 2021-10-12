import { FC, ReactElement } from 'react';
import { NormalButton } from '@/components/atoms/Button/button.styles';
import Input from '@/components/atoms/Input/Input';
import { Form, Animation } from './subscribe.styles';

const Subscribe: FC = (): ReactElement => {
  const color = '#9052BC';
  const onClick = () => {
    console.log('do something');
  }
  return (
    <Form color={color}>
      <Input />
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
